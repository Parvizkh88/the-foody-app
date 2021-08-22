import { Switch, Route } from 'react-router-dom';

//import page
import Home from '../../../pages/Home';
import About from '../../../pages/About';
import AdvanceSearch from "../../../pages/AdvanceSearch";
import Login from "../../../pages/Login";
import SignUp from "../../../pages/Signup";
import RecipesDetail from '../../../pages/RecipesDetail';

import route from '../../../routes';

const Main = () => {
    return (
        <Switch>
            <Route exact path={route.root} component={Home} />
            <Route path={route.home} component={Home} />
            <Route path={route.about} component={About} />
            <Route path={route.advanceSearch} component={AdvanceSearch} />
            <Route path={route.login} component={Login} />
            <Route path={route.signup} component={SignUp} />
            <Route path={route.detailRecipes} component={RecipesDetail} />
        </Switch>
    )
}

export default Main


