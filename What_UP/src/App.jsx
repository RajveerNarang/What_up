import "./App.css";
import Sidebar from "./components/Sidebar/Sidebar";
import Chat from "./components/Chat/Chat";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { useState } from "react";
import Login from "./components/Login/Login";
import { useStateValue } from "./StateProvider";
function App() {
  // const [user, setUser] = useState("");
  const [{ user }, dispatch] = useStateValue();

  return (
    <div className="app">
      {/* <h1>Test Project</h1> */}
      {!user ? (
        // <h1>Login</h1>
        <Login />
      ) : (
        <div className="app_body">
          <Router>
            {/* Always Render Sidebar */}
            <Sidebar />
            <Routes>
              {/* <Route path="/whatup" element={<Sidebar /> && <chat />} /> */}
              {/* Render both together */}
              {/* <Route path="/whatup" element={[<Sidebar />, <Chat />]} /> */}

              {/* Render only one component */}

              <Route path="/rooms/:roomId" element={<Chat />} />

              {/* <Sidebar />

        {/* sidebar */}

              {/* chat */}

              <Route path="/" element={<h1>Home Screen</h1>} />
            </Routes>
          </Router>
        </div>
      )}
    </div>
  );
}

export default App;
