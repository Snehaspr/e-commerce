import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./layout";  
import Paris from "./paris";
import London from "./london";
import Tokyo from "./tokyo";

function Rout() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<London />} />  
          <Route path="/paris" element={<Paris />} />
          <Route path="/tokyo" element={<Tokyo />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
export default Rout;