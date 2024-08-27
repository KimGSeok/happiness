import Image from "next/image";
import { useRouter } from "next/navigation";
import { css } from "styled-system/css";
import { styled } from "styled-system/jsx";
import { flex } from "styled-system/patterns";

type Props = {
  handleShowDescription: () => void;
}

const Profile = ({ handleShowDescription }: Props) => {

  const router = useRouter();

  const handleGoToLink = (link: string) => router.push(link);

  return (
    <div className={css({ width: '55%' })}>
      <LabelFieldList>
        <li>성명</li>
        <li className={css({ fontWeight: 500 })}>{`김경석 (KimGyeongSeok)`}</li>
      </LabelFieldList>
      <LabelFieldList>
        <li>개발 / 프론트엔드</li>
      </LabelFieldList>
      <LabelFieldList>
        <li className={css({ cursor: 'pointer' })} onClick={handleShowDescription}>학력</li>
        <li>2015.03 - 2021.02</li>
        <li className={css({ fontWeight: 500 })}>한국공학대학교 &#183; 학사</li>
        <li className={css({ fontWeight: 500 })}>컴퓨터공학부 소프트웨어전공</li>
      </LabelFieldList>
      <LabelFieldList>
        <li>{`경력 (총 4년 5개월)`}</li>
        <li className={css({ marginBottom: '4px' })}>
          {`2022.08 - 2024.07 에이아이트릭스`}
        </li>
        <li className={css({ marginBottom: '4px' })}>
          {`2020.12 - 2022.07 세븐미어캣`}
        </li>
        <li className={flex({ alignItems: 'center' })}>
          {`2019.12 - 2020.10 해나소프트`}<Badge>기술개발 인턴</Badge> 
        </li>
      </LabelFieldList>
      {/* <LabelFieldList>
        <li>자기소개</li>
      </LabelFieldList> */}
      <LabelFieldList>
        <li>링크</li>
        <li>이메일: rla99tjr@gmail.com</li>
        <li className={flex({ alignItems: 'center', gap: '16px' })}>
          <Image
            src="/icons/github-icon.png"
            alt="gihub"
            width={32}
            height={32}
            className={css({ borderRadius: '100%', margin: '16px 0', backgroundColor: 'var(--white100)', cursor: 'pointer' })}
            onClick={() => handleGoToLink('https://github.com/KimGSeok')}
          />
          <Image
            src="/icons/linked-in-icon.png"
            alt="linked-in"
            width={32}
            height={32}
            className={css({ borderRadius: '100%', margin: '16px 0', backgroundColor: 'var(--white100)', cursor: 'pointer' })}
            onClick={() => handleGoToLink('https://www.linkedin.com/in/kimgyeongseok')}
          />
        </li>
      </LabelFieldList>
    </div>
  );
}

const LabelFieldList = styled('ul', {
  base: {
    margin: '0 0 16px 0',

    '& li': {
      color: 'var(--black600)',

      _first: {
        padding: '0 0 4px 0',
        color: 'var(--white100)',
        fontWeight: 600,
        fontSize: '1.125rem',
      },
    }
  }
});

const Badge = styled('div', {
  base: {
    color: 'var(--black1000)',
    backgroundColor: 'var(--black200)',
    fontWeight: 600,
    fontSize: '0.725rem',
    padding: '2px 8px',
    borderRadius: '4px',
    marginLeft: '12px',
  }
})

export default Profile;