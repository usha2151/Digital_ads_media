import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home/Home";
import Footer from "./components/Common/Footer";
import Publishers from "./components/pages/Publishers/Publishers";
import OurServices from "./components/pages/OurServices/OurServices";
import Advertisers from "./components/pages/Advertisers/Advertisers";
import ContactUs from "./components/pages/ContactUs/ContactUs";
import AboutUs from "./components/pages/AboutUs/AboutUs";

function App() {
  return (
    <>
       <Router>
       
         <Routes>
           <Route path="/" element={<Home />} />
           <Route path="/publisher" element={<Publishers />} />
           <Route path="/services" element={<OurServices />} />
           <Route path="/advertisers" element={<Advertisers />} />
           <Route path="/contact_us" element={<ContactUs />} />
           <Route path="/about_us" element={<AboutUs />} />
         </Routes>
         <Footer />
       </Router>
    </>
  );
}

export default App;
