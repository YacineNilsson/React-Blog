import Create from "./assets/Create";
import Home from "./assets/Home";
import BlogDetails from "./components/BlogDetails";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NotFound from "./components/NotFound";

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/create" element={<Create />}/>
            <Route path="/blogs/:id" element={<BlogDetails />}/>
            <Route path="*" element={<NotFound />}></Route>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
