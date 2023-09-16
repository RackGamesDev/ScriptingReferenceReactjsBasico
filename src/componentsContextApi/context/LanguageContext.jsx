import { createContext, useState } from "react";
const LanguageContext = createContext();
const initialLanguage = "es";
const translations = {//normalmente esto esta mas lleno para que se aplique a mas sitios y se pone en .json aparte
    es:{
        parrafo1: "parrafo en espagnol",
        parrafo2: "otro parrafo en espagnol 2"
    },
    en:{
        parrafo1: "english paragraph",
        parrafo2: "another english paragraph 2"
    }
}
const LanguageProvider = ({children}) => {
    const [language, setLanguage] = useState(initialLanguage);
    const [texts, setTexts] = useState(translations[language]);
    const handleLanguage = (e) => {
        setLanguage(e.target.value);
        if(e.target.value === "en"){
            setTexts(translations.en);
        } else {
            setTexts(translations.es);
        }
    }
    const data = {
        texts, handleLanguage
    }
    return <LanguageContext.Provider value={data}>{children}</LanguageContext.Provider>
}
export {LanguageProvider}
export default LanguageContext;