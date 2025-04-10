import { useState, createContext } from "react";

import Section from "../Section/Section";
import { MainCardTitle, MainCardWrapper } from "./styles";
import { MainCardInterface, UserData  } from "./types";

// export const MainCardContext = createContext<undefined | UserData>(undefined);

export const MainCardContext = createContext<MainCardInterface>({
  data: undefined,
  changeData: () => {}
});

function MainCard() {
  const [userData, setUserData] = useState<UserData | undefined>({
    firstName: 'Bart',
    lastName: 'Simpson',
    age: 11
  })

  return (
    <MainCardContext.Provider value={{
      data: userData,
      changeData: setUserData
    }}>
      <MainCardWrapper>
        <MainCardTitle>Main Card</MainCardTitle>
        {/* Пример с Prop drilling */}
        {/* <Section data={userData} /> */}
        <Section />
      </MainCardWrapper>
      </MainCardContext.Provider>
  )
}

export default MainCard