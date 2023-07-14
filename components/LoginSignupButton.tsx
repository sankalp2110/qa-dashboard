import Link from "next/link";
import { HiOutlineMenu } from "react-icons/hi";
const LoginSignupButton = () => {
  return (
    <nav className="navbar">
        <div className="navbar-links">
        <Link
        href="/login"
        className="primary-button">
        Login / Sign Up
    </Link>
        </div>
    </nav>
  );
};

export default LoginSignupButton;
