"""한국어 우선 룰 일괄 변환 — frontmatter/JSX/코드 블록 보호."""
import re
import glob

LOANWORDS = [
    (r'\bcase study\b', '사례 분석'),
    (r'\bcase studies\b', '사례 분석'),
    (r'\bcases\b', '사례'),
    (r'(?<![a-zA-Z\-])case(?![a-zA-Z\-])', '사례'),
    (r'\bframework\b', '프레임워크'),
    (r'\btrade-off\b', '트레이드오프'),
    (r'\btrade-offs\b', '트레이드오프'),
    (r'\btokenomics\b', '토크노믹스'),
    (r'\bflywheel\b', '플라이휠'),
    (r'\bhedging\b', '헤징'),
    (r'\bhedge\b', '헤지'),
    (r'\bleveraged\b', '레버리지'),
    (r'\bleverage\b', '레버리지'),
    (r'\bvaluation\b', '밸류에이션'),
    (r'\bcycle\b', '사이클'),
    (r'\bcycles\b', '사이클'),
    (r'\binfrastructure\b', '인프라'),
    (r'\bairdrop\b', '에어드롭'),
    (r'\blisting\b', '리스팅'),
    (r'\bnarrative\b', '내러티브'),
    (r'\bfundamental\b', '펀더멘털'),
    (r'\bmechanism\b', '메커니즘'),
    (r'\bmechanisms\b', '메커니즘'),
    (r'\bcypherpunk\b', '사이퍼펑크'),
    (r'\bcypherpunks\b', '사이퍼펑크'),
    (r'\bspot price\b', '현물 가격'),
    (r'\bspot 가격\b', '현물 가격'),
    (r'\bspot 거래\b', '현물 거래'),
    (r'\bspot 시장\b', '현물 시장'),
    (r'\bspot 거래대금\b', '현물 거래대금'),
    (r'\bspot ETF\b', '현물 ETF'),
    (r'\bspot BTC ETF\b', '현물 BTC ETF'),
    (r'\bspot AMM\b', '현물 AMM'),
    (r'\bspot 시세\b', '현물 시세'),
    (r'\bspot 점유율\b', '현물 점유율'),
    (r'\bspot 페어\b', '현물 페어'),
    (r'\bspot crypto ETF\b', '현물 가상자산 ETF'),
    (r'\bdeep read\b', '심층 분석'),
    (r'\bdeep reading\b', '심층 분석'),
    (r'\bSybil-resistance\b', 'Sybil 저항'),
    (r'\bsybil-resistance\b', 'Sybil 저항'),
    (r'\bSybil-resistant\b', 'Sybil 저항적'),
    (r'\bfollow-on companies\b', '후속 기업'),
    (r'\bdilution rate\b', '희석률'),
    (r'\bdilution\b', '희석'),
    (r'\bbalance sheet\b', '대차대조표'),
    (r'\bsystemic risk\b', '시스템 리스크'),
    (r'\baccretive\b', 'accretive'),
    (r'\bdilutive\b', 'dilutive'),
    (r'\bsplit adj\b', 'split adj'),
    (r'\billustrative\b', 'illustrative'),
    (r'\bbroadcast\b', '브로드캐스트'),
    (r'\bbroad cast\b', '브로드캐스트'),
]

PARTICLE_FIXES = [
    ('프레임워크 가', '프레임워크가'),
    ('프레임워크 는', '프레임워크는'),
    ('프레임워크 를', '프레임워크를'),
    ('프레임워크 의', '프레임워크의'),
    ('프레임워크 에', '프레임워크에'),
    ('프레임워크 으로', '프레임워크로'),
    ('프레임워크 와', '프레임워크와'),
    ('프레임워크 도', '프레임워크도'),
    ('프레임워크 이', '프레임워크가'),
    ('프레임워크 이지만', '프레임워크이지만'),
    ('프레임워크 만', '프레임워크만'),
    ('프레임워크 인가', '프레임워크인가'),
    ('프레임워크 일', '프레임워크일'),
    ('트레이드오프 가', '트레이드오프가'),
    ('트레이드오프 는', '트레이드오프는'),
    ('트레이드오프 를', '트레이드오프를'),
    ('트레이드오프 의', '트레이드오프의'),
    ('트레이드오프 에', '트레이드오프에'),
    ('트레이드오프 와', '트레이드오프와'),
    ('트레이드오프 도', '트레이드오프도'),
    ('사례 가', '사례가'),
    ('사례 는', '사례는'),
    ('사례 를', '사례를'),
    ('사례 의', '사례의'),
    ('사례 도', '사례도'),
    ('사례 와', '사례와'),
    ('사례 다.', '사례다.'),
    ('사례 다,', '사례다,'),
    ('사례 였', '사례였'),
    ('사례 들', '사례들'),
    ('밸류에이션 가', '밸류에이션이'),
    ('밸류에이션 는', '밸류에이션은'),
    ('밸류에이션 를', '밸류에이션을'),
    ('밸류에이션 의', '밸류에이션의'),
    ('밸류에이션 에', '밸류에이션에'),
    ('밸류에이션 도', '밸류에이션도'),
    ('인프라 가', '인프라가'),
    ('인프라 는', '인프라는'),
    ('인프라 를', '인프라를'),
    ('인프라 의', '인프라의'),
    ('인프라 에', '인프라에'),
    ('메커니즘 가', '메커니즘이'),
    ('메커니즘 는', '메커니즘은'),
    ('메커니즘 를', '메커니즘을'),
    ('메커니즘 을', '메커니즘을'),
    ('메커니즘 의', '메커니즘의'),
    ('메커니즘 도', '메커니즘도'),
    ('메커니즘 으로', '메커니즘으로'),
    ('사이클 가', '사이클이'),
    ('사이클 는', '사이클은'),
    ('사이클 를', '사이클을'),
    ('사이클 도', '사이클도'),
    ('사이클 의', '사이클의'),
    ('플라이휠 가', '플라이휠이'),
    ('플라이휠 는', '플라이휠은'),
    ('플라이휠 을', '플라이휠을'),
    ('플라이휠 의', '플라이휠의'),
    ('레버리지 가', '레버리지가'),
    ('레버리지 는', '레버리지는'),
    ('레버리지 를', '레버리지를'),
    ('레버리지 의', '레버리지의'),
    ('헤지 가', '헤지가'),
    ('헤지 는', '헤지는'),
    ('헤지 를', '헤지를'),
    ('헤지 하지', '헤지하지'),
    ('펀더멘털 가', '펀더멘털이'),
    ('펀더멘털 는', '펀더멘털은'),
    ('펀더멘털 을', '펀더멘털을'),
    ('펀더멘털 의', '펀더멘털의'),
    ('내러티브 가', '내러티브이'),
    ('내러티브 는', '내러티브는'),
    ('내러티브 를', '내러티브를'),
    ('내러티브 의', '내러티브의'),
    ('토크노믹스 가', '토크노믹스가'),
    ('토크노믹스 는', '토크노믹스는'),
    ('토크노믹스 를', '토크노믹스를'),
    ('토크노믹스 의', '토크노믹스의'),
    ('스테이킹 가', '스테이킹이'),
    ('스테이킹 는', '스테이킹은'),
    ('스테이킹 를', '스테이킹을'),
    ('스테이킹 을', '스테이킹을'),
    ('스테이킹 의', '스테이킹의'),
    ('에어드롭 가', '에어드롭이'),
    ('에어드롭 은', '에어드롭은'),
    ('에어드롭 을', '에어드롭을'),
    ('리스팅 가', '리스팅이'),
    ('리스팅 는', '리스팅은'),
    ('리스팅 을', '리스팅을'),
    ('현금 흐름 가', '현금 흐름이'),
    ('현금 흐름 는', '현금 흐름은'),
    ('현금 흐름 를', '현금 흐름을'),
    ('현금 흐름 을', '현금 흐름을'),
    ('현금 흐름 의', '현금 흐름의'),
    ('현금 흐름 도', '현금 흐름도'),
    ('스테이킹 수익률 가', '스테이킹 수익률이'),
    ('스테이킹 수익률 은', '스테이킹 수익률은'),
    ('스테이킹 수익률 를', '스테이킹 수익률을'),
    ('스테이킹 수익률 을', '스테이킹 수익률을'),
    ('스테이킹 수익률 의', '스테이킹 수익률의'),
    ('스테이킹 수익률 도', '스테이킹 수익률도'),
    ('희석 가', '희석이'),
    ('희석 는', '희석은'),
    ('희석 을', '희석을'),
    ('희석 의', '희석의'),
    ('인프라 도', '인프라도'),
    ('밸류에이션 와', '밸류에이션과'),
]


def split_frontmatter(text: str):
    if text.startswith('---\n'):
        end = text.find('\n---\n', 4)
        if end != -1:
            return text[:end + 5], text[end + 5:]
    return '', text


def protect(body: str):
    placeholders = {}
    counter = [0]

    def stash(m):
        token = f'__PROTECT_{counter[0]}__'
        placeholders[token] = m.group(0)
        counter[0] += 1
        return token

    body = re.sub(r'```[\s\S]*?```', stash, body)
    body = re.sub(r'`[^`\n]+`', stash, body)
    body = re.sub(r'<[A-Z][a-zA-Z]*\s+[^>]*?>', stash, body)
    return body, placeholders


def restore(body: str, placeholders):
    for token, original in placeholders.items():
        body = body.replace(token, original)
    return body


def main():
    files = sorted(glob.glob('src/content/posts/*.mdx'))
    changed = 0
    for fpath in files:
        with open(fpath, 'r', encoding='utf-8') as fh:
            text = fh.read()
        fm, body = split_frontmatter(text)
        if not fm:
            print(f'NOFM: {fpath}')
            continue
        protected_body, ph = protect(body)
        new_body = protected_body
        for pat, dst in LOANWORDS:
            new_body = re.sub(pat, dst, new_body)
        for src, dst in PARTICLE_FIXES:
            new_body = new_body.replace(src, dst)
        new_body = restore(new_body, ph)
        if new_body != body:
            with open(fpath, 'w', encoding='utf-8', newline='\n') as fh:
                fh.write(fm + new_body)
            changed += 1
    print(f'Changed: {changed}/{len(files)} files')


if __name__ == '__main__':
    main()
