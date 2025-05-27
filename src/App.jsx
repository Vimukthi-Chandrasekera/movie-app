import Search from "./components/Search.jsx";
import {useState} from "react";

const App = () => {

    const [searchText, setSearchText] = useState("");

    return (
       <main>
           <div className="pattern"></div>

           <div className="wrapper">
               <header>
                   <img src="./hero.png" alt="hero"/>
                   <h1>Find <span className="text-gradient">Movies</span> You'll Enjoy Without the Hassle</h1>
               </header>

               <Search searchText={searchText} setSearchText={setSearchText}/>
           </div>
       </main>
    )
}
export default App

