import './App.css';
import {Route, Routes, BrowserRouter as Router, Link} from "react-router-dom";
import {Home} from "./pages/Home";
import {Menu} from "./pages/Menu";
import {Contact} from "./pages/contact";
import {Navbar} from "./Navbar";
import {Profile} from "./pages/Profile";
import {About} from "./pages/About";
import {ErrorPage} from "./pages/ErrorPage";


function App() {
    return (
        <div className="App">
            <Router>

                <Navbar/>
                <Routes>
                    <Route path="/" element={<Home></Home>}/>
                    <Route path="/menu" element={<Menu/>}/>
                    <Route path="/contact" element={<Contact/>}/>
                    <Route path="/profile" element={<Profile />}/>
                    <Route path="/about" element={<About/>}/>
                    <Route path="*" element={<ErrorPage/>}/>
                </Routes>
            </Router>
        </div>
    );
}

export default App;
