import "./App.css";
import Head from "../Header/head";
import Content from "../Content/Content";
import Sidebar from "../Sidebar/Sidebar";
import Footer from "../Footer/Footer";

function App() {
  return (
    <>
      <div className="wrapper">
        <Head />
        <Content />
        <Sidebar />
        <Footer />
      </div>
    </>
  );
}

export default App;
