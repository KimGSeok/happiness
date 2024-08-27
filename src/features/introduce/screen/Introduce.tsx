"use client";

import Profile from "../component/Profile";
import { flex } from "styled-system/patterns";
import { useState } from "react";

const IntroduceScreen = () => {

  const [isActive, setIsActive] = useState(false);

  const handleShowDescription = () => setIsActive(true);

  return (
    <div className={flex({ height: '100%', padding: '16px 0' })}>
      <Profile handleShowDescription={handleShowDescription}/>
      {/* <Description isActive={isActive}/> */}
    </div>
  );
}

export default IntroduceScreen;