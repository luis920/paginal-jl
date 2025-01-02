import { Route, Routes } from "react-router-dom";

import { Home } from "./front/views/Home";
import NewOrder from "./front/views/NewOrder";
import { Login } from "./front/views/Login";

const Layout = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/neworder" element={<NewOrder />} />
        <Route path="/login" element={<Login />} />

        <Route path="*" element={<h1>Not found!</h1>} />
      </Routes>
    </div>
  );
};

export default Layout;
