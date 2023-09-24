import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home/Home";
import Footer from "./components/Common/Footer";

function App() {
  return (
    <>
       <Router>
       
         <Routes>
           <Route path="/" element={<Home />} />
         </Routes>
         <Footer />
       </Router>
    </>
  );
}

export default App;
