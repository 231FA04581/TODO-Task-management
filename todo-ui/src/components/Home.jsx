import { Link } from "react-router-dom";

function Home() {
    return (
        <div className="container">

            <div className="hero-section">

                <h1 className="display-3 fw-bold">
                    Welcome to TodoPro
                </h1>

                <p className="lead">
                    Organize your work and boost productivity.
                </p>

                <div className="mt-4">

                    <Link
                        to="/login"
                        className="btn btn-light btn-lg me-3"
                    >
                        Login
                    </Link>

                    <Link
                        to="/register"
                        className="btn btn-success btn-lg"
                    >
                        Register
                    </Link>

                </div>

            </div>

        </div>
    );
}

export default Home;