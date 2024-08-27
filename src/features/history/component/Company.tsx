import { css } from "styled-system/css";
import { styled } from "styled-system/jsx";
import { THistories } from "../type/history.type";

type Props = {
  isActive: boolean;
  handleChangeActiveHistory: (companyEng: string) => void;
} & Pick<THistories, 'company' | 'companyEng' | 'startYear' | 'endYear'>;

const Company = ({ isActive, company, companyEng, startYear, endYear, handleChangeActiveHistory }: Props) => {
  return (
    <Container
      className={css({
        _after: {
          backgroundColor: isActive ? 'var(--black200)' : 'var(--black500)',
          boxShadow: isActive ? 'rgb(255, 255, 255) 0px 0px 0px 2.5px' : 'rgb(255, 255, 255) 0px 0px 0px 0px',
        }
      })}
    >
      <CompanyName
        className={css({
          color: isActive ? 'var(--white100)' : 'var(--black500)',
        })}
      >
        <span className={css({ cursor:'pointer' })} onClick={() => handleChangeActiveHistory(companyEng)}>{company}</span>
      </CompanyName>
      <OfficePeriod>{startYear} - {endYear}</OfficePeriod>
    </Container>
  )
};

const Container = styled('div', {
  base: {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    paddingRight: '1vw',
    margin: '0 0 20% 0',

    _after: {
      content: '""',
      position: 'absolute',
      left: 'calc(100% - 1vw)',
      width: '0.725vw',
      height: '0.725vw',
      borderRadius: '50%',
      boxShadow: 'rgb(255, 255, 255) 0px 0px 0px 2.5px',
      zIndex: 99,
    }
  }
});

const CompanyName = styled('h2', {
  base: {
    width: '70%',
    fontSize: '1vw',
    fontWeight: 600,
    transition: 'color 0.3s',
  }
})

const OfficePeriod = styled('p', {
  base: {
    width: '30%',
    fontSize: '0.725vw',
    fontWeight: 600,
    color: 'var(--black800)'
  }
})

export default Company;