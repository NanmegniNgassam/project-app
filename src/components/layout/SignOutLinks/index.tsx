import { NavLink } from "react-router-dom";

const SignOutLinks = () => {
  return (
    <ul className="right">
      <li>
        <NavLink to="/signup">SignUp</NavLink>
      </li>
      <li>
        <NavLink to="/signin">Login</NavLink>
      </li>
    </ul>
  );
};

export default SignOutLinks;
