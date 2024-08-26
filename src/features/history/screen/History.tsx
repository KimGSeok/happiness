"use client";

import { histories } from "@/features/history/data/history";
import { useState } from "react";
import { styled } from "styled-system/jsx";
import Company from "../component/Company";
import HistoryItem from "../component/HistoryItem";

const HistoryScreen = () => {

  const data = histories;

  const [activeHistory, setActiveHistory] = useState<string>(histories[0].companyEng);

  const handleChangeActiveHistory = (companyEng: string) => setActiveHistory(companyEng);
  
  return (
    <Container>
      {data.map(({ company, companyEng, startYear, endYear, data: histories }) => {

        const isActive = activeHistory === companyEng;

        return (
          <CompanyField key={companyEng}>
            <Company
              isActive={isActive}
              company={company}
              companyEng={companyEng}
              startYear={startYear}
              endYear={endYear}
              handleChangeActiveHistory={handleChangeActiveHistory}
            />
            {isActive && (
              <HistoryItemContainer>
                {histories.map((props) =>
                  <HistoryItem
                    key={`${props.link}-${props.title}`}
                    {...props}
                  />
                )}
              </HistoryItemContainer>
            )}
          </CompanyField>
        )
      })}
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
    width: '100%',
    height: '5vh',
    margin: '0 0 4vw 0'
  }
})

const HistoryItemContainer = styled('ul', {
  base: {
    position: 'absolute',
    width: 'calc(72.5% - 1vw)',
    top: '1vw',
    left: '27.25%',
    height: 'calc(100vh - 96px - 6rem - 2.725vw)',
    overflow: 'scroll',

    _before: {
      content: '""',
      position: 'absolute',
      display: 'inline-block',
      top: '0.725vw',
      left: '-1px',
      width: '3px',
      height: 'calc(100vh - 96px - 6rem - 2.725vw)',
      backgroundColor: 'var(--black300)',
    }
  }
})

export default HistoryScreen;