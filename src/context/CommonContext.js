import { createContext, useContext, useState, useEffect } from "react";

const CommonContext = createContext();

const CommonProvider = ({ children }) => {
  useEffect(() => {
    document.title = "nurish tabs";
  }, []);

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
