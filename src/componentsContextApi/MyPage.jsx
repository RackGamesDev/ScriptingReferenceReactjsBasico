import {useState} from "react";
import {useContext} from "react";//Necesario
import ThemeContext, { ThemeProvider } from "./context/ThemeContext.jsx";//Importando el context
import LanguageContext, { LanguageProvider } from "./context/LanguageContext.jsx";
import AuthContext, { AuthProvider } from "./context/AuthContent.jsx";


const MyPage = () => {
    return(
        <div className="my-page">{/*Componente padre que guarda las variables, que luego afectan a los componentes hijos*/}
            <h3>a</h3>
            <ThemeProvider>{/*Todas las exportaciones de ese archivo funcionaran globalmente aqui dentro, asi que envuelve todos los elementos que las vallan a usar*/}
                <LanguageProvider>{/*Concatenando providers*/}
                    <AuthProvider>
                        <Header />{/*Este es el unico que necesita el auth, asi que se queda adentro*/}
                    </AuthProvider>
                    <Main />
                    <Footer />
                </LanguageProvider>
            </ThemeProvider>
            
        </div>
    );
}


const Header = () => {
    const {theme, handleTheme} = useContext(ThemeContext);//Aligiendo que variables sacar y de que context (el componente debe estar dentro)
    const {handleLanguage} = useContext(LanguageContext);
    const {auth, handleAuth} = useContext(AuthContext);
    return(
        <div className={theme}>
            <h4>header</h4>{/*Este componente cambia cosas que afectan a toda la pagina*/}
            <select name="language" onChange={handleLanguage}>
                <option value="es">es</option><option value="en">en</option>
            </select>
            <input type="radio" name="theme" id="light" onClick={handleTheme} value="light" />
            <label htmlFor="light">claro</label>
            <input type="radio" name="theme" id="dark" onClick={handleTheme} value="dark" />
            <label htmlFor="dark">oscuro</label>
            <button onClick={handleAuth}>{auth? <div>login?</div>:<div>logout</div>}</button>
        </div>
    );
}
const Main = () => {
    const {theme} = useContext(ThemeContext);
    const {texts} = useContext(LanguageContext);
    return(
        <div className={theme}>
            <h4>Main</h4>
            <p>{texts.parrafo1}</p>
            <p>{texts.parrafo2}</p>
        </div>
    );
}
const Footer = () => {
    const {theme} = useContext(ThemeContext);
    return(
        <div className={theme}>
            <h4>Footer</h4>
        </div>
    );
}



export default MyPage;
