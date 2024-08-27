"use client";

import { histories } from "@/features/history/data/history";
import { useState } from "react";
import { styled } from "styled-system/jsx";
import Company from "../component/Company";
import HistoryItem from "../component/HistoryItem";
import { css } from "styled-system/css";

const HistoryScreen = () => {

  const data = histories;

  const [activeHistory, setActiveHistory] = useState<string>(histories[0].companyEng);

  const handleChangeActiveHistory = (companyEng: string) => setActiveHistory(companyEng);

  const activeCompanyData = data.find(({ companyEng }) => companyEng === activeHistory);
  
  return (
    <Container className={css({ display: 'flex' })}>
      <CompanyField>
        {data.map(({ company, companyEng, startYear, endYear }) => {
          const isActive = activeHistory === companyEng;
          return (
            <Company
              key={companyEng}
              isActive={isActive}
              company={company}
              companyEng={companyEng}
              startYear={startYear}
              endYear={endYear}
              handleChangeActiveHistory={handleChangeActiveHistory}
            />
          )
        })}
      </CompanyField>
      <ul
        className={css({
          height: 'calc(100vh - 96px - 6rem - 2.725vw)',
          overflow: 'scroll',
        })}
      >
        {activeCompanyData?.data.map((props) =>
          <HistoryItem
            key={`${props.link}-${props.title}`}
            {...props}
          />
        )}
      </ul>
    </Container>
  )
}

const Container = styled('div', {
  base: {
    position: 'relative',
    width: '100%',
    height: '100%',
    padding: '1vw 0',
  }
})

const CompanyField = styled('div', {
  base: {
    width: '27.5%',
    height: 'calc(100vh - 96px - 6rem - 2.725vw)',
    overflow: 'scroll',

    _before: {
      content: '""',
      position: 'absolute',
      display: 'inline-block',
      top: '1.725vw',
      left: 'calc(27.25% - 0.5vw)',
      width: '3px',
      height: 'calc(100vh - 96px - 6rem - 2.725vw)',
      backgroundColor: 'var(--black300)',
    }
  }
})

export default HistoryScreen;