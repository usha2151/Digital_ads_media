import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home/Home";
import Footer from "./components/Common/Footer";
import Publishers from "./components/pages/Publishers/Publishers";
import OurServices from "./components/pages/OurServices/OurServices";

function App() {
  return (
    <>
       <Router>
       
         <Routes>
           <Route path="/" element={<Home />} />
           <Route path="/publisher" element={<Publishers />} />
           <Route path="/services" element={<OurServices />} />
         </Routes>
         <Footer />
       </Router>
    </>
  );
}

export default App;
