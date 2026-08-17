import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";

function Login() {

    const navigate = useNavigate();

    const [email, setEmail] = useState("");

    const [password, setPassword] = useState("");

    const login = async () => {

        try {

            const response = await api.post(
                "/Auth/login",
                {
                    email,
                    password
                }
            );

            localStorage.setItem(
                "token",
                response.data.token
            );

            navigate("/todo");

            window.location.reload();

        } catch {

            alert("Invalid email or password");
        }
    };

    return (
        <div className="auth-container">

            <div className="card auth-card p-4">

                <h2 className="text-center mb-4">
                    Welcome Back
                </h2>

                <input
                    className="form-control mb-3"
                    placeholder="Email"
                    onChange={(e) =>
                        setEmail(e.target.value)}
                />

                <input
                    type="password"
                    className="form-control mb-3"
                    placeholder="Password"
                    onChange={(e) =>
                        setPassword(e.target.value)}
                />

                <button
                    className="btn btn-primary"
                    onClick={login}
                >
                    Login
                </button>

            </div>

        </div>
    );
}

export default Login;
