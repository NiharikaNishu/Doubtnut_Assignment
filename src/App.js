import logo from './logo.svg';
import './App.css';
import SideNav from "./SideNav.js";
import Main from "./Main";

function App() {

  return (
    <div className="App">
      <div className="container">
       
        <SideNav subreddits = {[
        "cats",
        "alternativeart",
        "pics",
        "gif",
        "adviceanimals",
        "images",
        "photoshopbattles",
        "hmmm",
        "all",
        "aww"
    ]} />
         <div className="sidenav">    
        <Main subreddits = {[
        "cats",
        "alternativeart",
        "pics",
        "gif",
        "adviceanimals",
        "images",
        "photoshopbattles",
        "hmmm",
        "all",
        "aww"
    ]} />
    </div>
      </div>
    </div>
  );
}

export default App;
