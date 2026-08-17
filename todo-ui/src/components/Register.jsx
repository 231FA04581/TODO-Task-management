import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";

function Register() {

    const navigate = useNavigate();

    const [form, setForm] = useState({
        username: "",
        email: "",
        password: ""
    });

    const register = async () => {

        await api.post("/Auth/register", form);

        alert("Registration Successful");

        navigate("/login");
    };

    return (
        <div className="auth-container">

            <div className="card auth-card p-4">

                <h2 className="text-center mb-4">
                    Create Account
                </h2>

                <input
                    className="form-control mb-3"
                    placeholder="Username"
                    onChange={(e) =>
                        setForm({
                            ...form,
                            username: e.target.value
                        })
                    }
                />

                <input
                    className="form-control mb-3"
                    placeholder="Email"
                    onChange={(e) =>
                        setForm({
                            ...form,
                            email: e.target.value
                        })
                    }
                />

                <input
                    type="password"
                    className="form-control mb-3"
                    placeholder="Password"
                    onChange={(e) =>
                        setForm({
                            ...form,
                            password: e.target.value
                        })
                    }
                />

                <button
                    className="btn btn-success"
                    onClick={register}
                >
                    Register
                </button>

            </div>

        </div>
    );
}

export default Register;