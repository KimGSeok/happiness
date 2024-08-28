"use client";

import { histories } from "@/features/history/data/history";
import { useState } from "react";
import Company from "../component/Company";
import { css } from "styled-system/css";

const HistoryScreen = () => {

  const data = histories;
  const [activeHistory, setActiveHistory] = useState<string>(histories[0].companyEng);

  const handleChangeActiveHistory = (companyEng: string) => setActiveHistory(companyEng);

  const activeCompanyData = data.find(({ companyEng }) => companyEng === activeHistory);
  
  return (
    <div className={css({ height: '100%', padding: '16px 0', overflowY: 'auto' })}>
      {data.map(({ company, companyEng, startYear, endYear, data }) => {
        return (
          <div key={`${company}-${companyEng}`} className={css({ margin: '0 0 12px 0', padding: '8px' })}>
            <Company
              {...{ company, companyEng, startYear, endYear, data }}
              isActive={activeHistory === companyEng}
              handleChangeActiveHistory={() => handleChangeActiveHistory(companyEng)}
            />
          </div>
        )
      })}
    </div>
  )
}

export default HistoryScreen;