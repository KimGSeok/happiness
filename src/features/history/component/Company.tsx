import { css } from "styled-system/css";
import { Flex, styled } from "styled-system/jsx";
import { THistories } from "../type/history.type";

type Props = {
  isActive: boolean;
  handleChangeActiveHistory: () => void;
} & Pick<THistories, 'company' | 'companyEng' | 'startYear' | 'endYear' | 'data'>;

const Company = ({ isActive, handleChangeActiveHistory, company, companyEng, startYear, endYear, data }: Props) => {
  return (
    <>
      <Flex alignItems="center">
        <h3 className={css({ fontSize: '1.275rem', fontWeight: 600, color: 'var(--blue500)', cursor: 'pointer' })} onClick={handleChangeActiveHistory}>{company}</h3>
        <Period>{`${startYear} - ${endYear}`}</Period>
      </Flex>
      {isActive && (
        <>
          {data.map(({ title, contents, startDate, endDate, link }) => (
            <HistoryItem key={title}>
              <h4 className={css({ fontSize: '1.215rem', fontWeight: 600, whiteSpace: 'break-spaces', wordBreak: 'break-word' })}>{title}</h4>
              <div className={css({ fontSize: '1.025rem', color: 'var(--black800)', margin: '6px 0' })}>{`기간: ${startDate} - ${endDate}`}</div>
              <ul>
                {contents.map((content, index) => (
                  <li
                    key={index}
                    className={css({ fontSize: '1.075rem', color: 'var(--black300)' })}
                  >{content}</li>
                ))}
              </ul>
            </HistoryItem>
          ))}
        </>
      )}
    </>
  )
};

const Period = styled('div', {
  base: {
    fontSize: '14px',
    color: 'var(--black500)',
    marginLeft: '8px',
  }
})

const HistoryItem = styled('div', {
  base: {
    margin: '10px 0 16px 0',
    padding: '16px',
    backgroundColor: 'var(--white100)',
    boxShadow: '2px 2px 12px 0px rgb(0 0 0 / 0.1)',
    borderRadius: '8px',
  }
});

export default Company;