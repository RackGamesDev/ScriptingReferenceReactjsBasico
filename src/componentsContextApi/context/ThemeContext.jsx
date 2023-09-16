import { createContext, useState } from "react";
const ThemeContext = createContext();


const initialTheme = "light";//valor por defecto
const ThemeProvider = ({children}) => {
    const [theme, setTheme] = useState(initialTheme);//va junto a lo de antes
    const handleTheme = (e) => setTheme(e.target.value);//esto tambien
    const data = {//tiene todas las cosas que va a exportar
        theme,
        handleTheme
    }


    return <ThemeContext.Provider value={data}>{children}</ThemeContext.Provider>
}
export {ThemeProvider}
export default ThemeContext;

//se repite esto en una carpeta aparte por cada "variables globales" que se valla a usar