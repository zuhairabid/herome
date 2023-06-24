import React, { createContext, useContext, useEffect, useState } from "react";

const HeroMe = createContext();

const HeroMeContext = ({ children }) => {
  const [menuScreen, setMenuScreen] = useState(0);
  //   useEffect(() => {
  //     if (currency === "INR") setSymbol("₹");
  //     else if (currency === "USD") setSymbol("$");
  //   }, [currency]);

  return (
    <HeroMe.Provider value={{ menuScreen, setMenuScreen }}>
      {children}
    </HeroMe.Provider>
  );
};

export default HeroMeContext;

export const HeroMeState = () => {
  return useContext(HeroMe);
};
