import './App.css';

import Header from "./common-code/components/header";
import Footer from "./common-code/components/footer";
import Sidebar from "./common-code/components/sidebar";

function App() {
  return (
    <div className="App">
      <Header title="App 2" ></Header>
      <main>
        <Sidebar></Sidebar>
        <content-area>
        </content-area>
      </main>
      <Footer title="App 2" ></Footer>
    </div>
  );
}

export default App;
