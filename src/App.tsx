// import { motion } from "framer-motion";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";


function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100">
      <Navbar/>
      <Home/>
    </div>
  );
}

export default App;
