import { Outlet, Link } from "react-router-dom";
import "../Layout/Layout.css";

const Layout = () => {
  return (
    <>
      <nav id="tabs">
        <ul>
          <li>Zealthy</li>
          <li className="test">
            <Link to="/" className="link">
              Form
            </Link>
          </li>
          <li className="test">
            <Link to="/Admin" className="link">
              Admin
            </Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  );
};

export default Layout;
