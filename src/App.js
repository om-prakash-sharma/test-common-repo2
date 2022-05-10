import './App.css';

import Header from "./components/header";
import Footer from "./components/footer";
import Sidebar from "./components/sidebar";

function App() {
  return (
    <div className="App">
      <Header ></Header>
      <main>
        <Sidebar></Sidebar>
        <content-area>
        </content-area>
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
