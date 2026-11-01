import { Link } from "react-router-dom";

export default function Logo() {

    return (

        <Link to="/" className="logo">

            <div className="logo-icon">

                JH

            </div>

            <div className="logo-text">

                <span>John Hoyos</span>

                <small>Software Engineer</small>

            </div>

        </Link>

    );

}