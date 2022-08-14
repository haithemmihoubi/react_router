import './App.css';
import {Route, Routes, BrowserRouter as Router, Link} from "react-router-dom";
import {Home} from "./pages/Home";
import {Menu} from "./pages/Menu";
import {Contact} from "./pages/contact";


function App() {
    return (
        <div className="App">
            <Router>
                <div>
                    <nav>
                        <Link to="/">Home</Link>
                        <Link to="/menu">Menu</Link>
                        <Link to="/contact">Contact</Link>
                    </nav>

                </div>


                <Routes>
                    <Route path="/" element={<Home></Home>}/>
                    <Route path="/menu" element={<Menu/>}/>
                    <Route path="/contact" element={<Contact/>}/>
                </Routes>
            </Router>
        </div>
    );
}

export default App;
