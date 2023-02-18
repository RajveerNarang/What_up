import "./App.css";
import Sidebar from "./components/Sidebar/Sidebar";
import Chat from "./components/Chat/Chat";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="app">
      {/* <h1>Test Project</h1> */}
      <div className="app_body">
        <Router>
          <Routes>
            {/* <Route path="/whatup" element={<Sidebar /> && <chat />} /> */}
            <Route path="/whatup" element={[<Sidebar />, <Chat />]} />

            {/* <Sidebar />

        {/* sidebar */}

            {/* chat */}

            <Route path="/" element={<h1>Home Screen</h1>} />
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
