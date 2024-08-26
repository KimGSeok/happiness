"use client";

import { histories } from "@/features/history/data/history";
import { useState } from "react";
import { css } from "styled-system/css";
import { styled } from "styled-system/jsx";
import { flex } from "styled-system/patterns";

const HistoryScreen = () => {

  const data = histories;

  const [activeHistory, setActiveHistory] = useState<string>(histories[0].companyEng);

  console.log(data);

  const handleChangeActiveHistory = (companyEng: string) => setActiveHistory(companyEng);
  
  return (
    <div
      className={css({
        position: 'relative',
        width: '100%',
        height: '100%',
        padding: '1vw 0',
      })}
    >
      {data.map(({ company, companyEng, startYear, endYear, data }) => {

        return (
          <HistoryField key={companyEng} >
            <CompanyField>
              <CompanyName
                className={css({
                  color: activeHistory === companyEng ? 'var(--white100)' : 'var(--black500)',
                })}
                onClick={() => handleChangeActiveHistory(companyEng)}
              >{company}</CompanyName>
              <OfficePeriod>{startYear} - {endYear}</OfficePeriod>
            </CompanyField>
            {activeHistory === companyEng && (
              <HistoryItemContainer>
                {data.map(({ startMonth, endMonth, title, content, link }) => {
                  return (
                    <HistoryItem key={`${link}-${title}`}>
                      <h3>{title}</h3>
                      <p>{content}</p>
                    </HistoryItem>
                  )
                })}
              </HistoryItemContainer>
            )}
          </HistoryField>
        )
      })}
    </div>
  )
}

const HistoryField = styled('ul', {
  base: {
    width: '100%',
    height: '3vw',
    margin: '0 0 4vw 0'
  }
})

const CompanyField = styled('div', {
  base: {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    width: '27.5%',
    paddingRight: '1vw',

    _after: {
      content: '""',
      position: 'absolute',
      left: 'calc(100% - 0.5vw)',
      width: '0.725vw',
      height: '0.725vw',
      borderRadius: '50%',
      backgroundColor: 'var(--black100)',
      boxShadow: 'rgb(255, 255, 255) 0px 0px 0px 2.5px',
      zIndex: 2,
    }
  }
})

const CompanyName = styled('h2', {
  base: {
    width: '70%',
    fontSize: '1vw',
    fontWeight: 600,
    transition: 'color 0.3s',
    cursor: 'pointer',
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

const HistoryItemContainer = styled('div', {
  base: {
    position: 'absolute',
    width: 'calc(72.5% - 1vw)',
    top: '1vw',
    left: '27.25%',

    _before: {
      content: '""',
      position: 'absolute',
      top: '0.725vw',
      left: '-1px',
      width: '3px',
      height: '100%',
      backgroundColor: 'var(--black800)',
    }
  }
})

const HistoryItem = styled('li', {
  base: {
    margin: '0 0 3vw 0',
    paddingLeft: '2vw',
  }
})

export default HistoryScreen;