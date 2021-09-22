import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import Layout from "./component/layout/layout";
import {Route} from "react-router-dom";
import HomePage from "./pages/home-page";
import UserPage from "./pages/UserPage";
import PlayerPage from "./pages/PlayerPage";
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
