import { Outlet, Link } from "react-router-dom";
import { Fragment } from "react";
import { ReactComponent as SkyLogo } from "../../assests/skyLogo.svg";
import "./navigation.styles.scss";

const Navigation = () => {
  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <SkyLogo className="logo" />
        </Link>

        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            Shop
          </Link>
          <Link className="Sign-in" to="/Sign-in">
            Sign-in
          </Link>
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};
export default Navigation;
