import { Outlet, Link } from "react-router-dom";
import "../Layout/Layout.css";

const Layout = () => {
  return (
    <>
      <div id="Zealthy">
        <h1>Zealthy</h1>
      </div>
      <nav id="tabs">
        <ul id="tabsUL">
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
