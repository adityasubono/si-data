import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from "./component/layout/layout";
import {Route} from "react-router-dom";
import HomePage from "./pages/home-page";
import UserPage from "./pages/user-page";
import PlayerPage from "./pages/player-page";
import $ from 'jquery';

const App = () => {

    return(
        <Layout>
            <Route exact path="/" component={HomePage} />
            <Route path="/user" component={UserPage} />
            <Route path="/player" component={PlayerPage} />
        </Layout>
    )

}


export default App;
