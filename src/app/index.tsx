import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Dropdown } from "../components/Dropdown";
import { Footer } from "../components/Footer";
import { Layout } from "../components/Layout";
import { FramerComponent } from "../pages/FramerComponents";
import { HomePage } from "../pages/Home";
import GlobalStyle from "./style";

export const App = () => {

return (
  <BrowserRouter>
  <GlobalStyle />
  <Layout>
    <Dropdown />
    
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/framer-components' element={<FramerComponent />} />
      </Routes>
   
    <Footer />
  </Layout>
  </BrowserRouter>
);
}
