import "./app.css";
import Topbar from "./components/topbar/Topbar";
import Sidebar from "./components/sidebar/Sidebar";
import Home from "./pages/home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";

function App() {
    return (
        <Router>
            <Topbar />
            <div className='container'>
                <Sidebar />
                <Switch>
                    <Route exact path='/'>
                        <Home />
                    </Route>
                    <Route exact path='/users'>
                        <UserList />
                    </Route>
                    <Route exact path='/user/:userId'>
                        <User />
                    </Route>
                    <Route exact path='/newUser'>
                        <Home />
                    </Route>
                    <Route exact path='/products'>
                        <Home />
                    </Route>
                    <Route exact path='/product/:productId'>
                        <Home />
                    </Route>
                    <Route exact path='/newproduct'>
                        <Home />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
