import Header from "./Compon/Header/Header";
import Main from "./Compon/Main/Main";
import AsideAPI from "./Compon/Aside/AsideAPI";
import Footer from "./Compon/Footer/footer";

import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="app-wrapper">
        <Header />

        <div className="aw-content">
          <Main />
          <AsideAPI />
        </div>

        <Footer/>
      </div>
    </div>
  );
}

export default App;
