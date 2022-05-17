import {Route, Routes} from 'react-router-dom';
import {HOME_PAGE, VERSION_PAGE} from "../utils/const";
import HomePage from "./homePage/homePage";
import VersionPage from "./versionPage/versionPage";

const AppRouter = () => {
    return (
        <Routes>
            <Route key={HOME_PAGE} path={HOME_PAGE} element={<HomePage/>} />
            <Route key={VERSION_PAGE} path={VERSION_PAGE} element={<VersionPage/>} />
        </Routes>
    );
};

export default AppRouter;