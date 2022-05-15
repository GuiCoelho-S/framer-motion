import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Dropdown } from "../components/Dropdown";
import { Footer } from "../components/Footer";
import { Layout } from "../components/Layout";
import { FramerComponent } from "../pages/FramerComponents";
import { HomePage } from "../pages/Home";
import { ScrollPage } from "../pages/Scroll";
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
          <Route path='/scrollPage' element={<ScrollPage />} />
        </Routes>

        <Footer />
      </Layout>
    </BrowserRouter>
  );
}
