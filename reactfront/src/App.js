import './App.css';
import {Route, Routes} from "react-router-dom";
import Footer from "./component/Footer";
import MainPage from "./pages/MainPage";
import PrivacyPolicyPage from "./pages/PrivacyPolicyPage";
import SignUpPage from "./pages/SignUpPage";
import SignupCompletePage from "./pages/SignupCompletePage";

function App() {
  return (
      <div className="App">
          <div className="container">
              <Routes>
                  <Route path="/" exact={true} element={<MainPage/>}/>
                  <Route path="/policy" exact={true} element={<PrivacyPolicyPage/>}/>
                  <Route path="/signup" exact={true} element={<SignUpPage/>}/>
                  <Route path="/signup-complete" exact={true} element={<SignupCompletePage/>}/>
              </Routes>
          </div>
          <Footer/>
      </div>
  );
}

export default App;
