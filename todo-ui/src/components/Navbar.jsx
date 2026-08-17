import { Link, useNavigate } from "react-router-dom";

function Navbar() {

    const navigate = useNavigate();

    const token = localStorage.getItem("token");

    const logout = () => {
        localStorage.removeItem("token");
        navigate("/");
        window.location.reload();
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">

            <div className="container">

                <Link className="navbar-brand fw-bold" to="/">
                    TodoPro
                </Link>

                {
                    token ? (

                        <div>
                            <Link
                                to="/todo"
                                className="btn btn-outline-light me-2"
                            >
                                Dashboard
                            </Link>

                            <button
                                className="btn btn-danger"
                                onClick={logout}
                            >
                                Logout
                            </button>
                        </div>

                    ) : (

                        <div>

                            <Link
                                to="/login"
                                className="btn btn-outline-light me-2"
                            >
                                Login
                            </Link>

                            <Link
                                to="/register"
                                className="btn btn-primary"
                            >
                                Register
                            </Link>

                        </div>

                    )
                }

            </div>

        </nav>
    );
}

export default Navbar;