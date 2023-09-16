//npm install redux react-redux redux-devtools
import {Provider} from "react-redux";
import store from "./store";
import Contador from "./Contador.jsx";
const LibRedux = () => {
    return(
        <>
            <h3>redux externo</h3>
            <Provider store={store}>
                <Contador />
            </Provider>
        </>
    );
}
export default LibRedux;