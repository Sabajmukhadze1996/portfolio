import React, { useState, useEffect, createContext } from "react";
import translation from "./translation.json";

export const Translation = createContext(null);

const TranslationContextProvider = ({ children }) => {
  const [lang, setLang] = useState("en");
  const [content, setContent] = useState({});

  useEffect(() => {
    if (lang === "en") {
      setContent(translation.en);
    } else if (lang === "geo") {
      setTimeout(() => {
        setContent(translation.geo);
      }, 1000);
    }
  }, [lang]);

  return (
    <Translation.Provider value={{ lang, setLang, content, setContent }}>
      {children}
    </Translation.Provider>
  );
};

export default TranslationContextProvider;
