import { createContext, useContext, useState } from "react";

const CommonContext = createContext();

const CommonProvider = ({ children }) => {
  const [name, setName] = useState("");
  const [mainFocus, setMainFocus] = useState("");
  return (
    <CommonContext.Provider value={{ name, setName, mainFocus, setMainFocus }}>
      {children}
    </CommonContext.Provider>
  );
};
const useCommonContext = () => useContext(CommonContext);
export { useCommonContext, CommonProvider };
