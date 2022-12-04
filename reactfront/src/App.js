import './App.css';
import {Route, Routes} from "react-router-dom";
import Footer from "./component/Footer";
import MainPage from "./pages/MainPage";
import PrivacyPolicyPage from "./pages/PrivacyPolicyPage";
import SignupPage from "./pages/SignupPage";
import SignupCompletePage from "./pages/SignupCompletePage";
import ModuleMainPage from "./pages/ModuleMainPage";

function App() {
  return (
      <div className="App">
          <div className="container">
              <Routes>
                  <Route path="/" exact={true} element={<MainPage/>}/>
                  <Route path="/policy" exact={true} element={<PrivacyPolicyPage/>}/>
                  <Route path="/signup" exact={true} element={<SignupPage/>}/>
                  <Route path="/signup-complete" exact={true} element={<SignupCompletePage/>}/>
                  <Route path="/module-main" exact={true} element={<ModuleMainPage/>}/>
              </Routes>
          </div>
          <Footer/>
      </div>
  );
}

export default App;
