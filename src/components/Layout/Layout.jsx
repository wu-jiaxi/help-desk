import { Outlet, Link } from "react-router-dom";
import "../Layout/Layout.css";

const Layout = () => {
  return (
    <>
      <nav id="tabs">
        <ul>
          <li className="test">
            <Link to="/">Form</Link>
          </li>
          <li className="test">
            <Link to="/Admin">Admin</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  );
};

export default Layout;
