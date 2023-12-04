import Header from "./components/header";
import Footer from "./components/footer";
import { Outlet } from "react-router-dom";

function App(){
    return (
        <div className="app">
            <Header/>
            <div className="container">
                <Outlet/>
            </div>
            <Footer/>
        </div>
    )
}

export default App;