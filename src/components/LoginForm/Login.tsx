import React, { useState, FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import "./LoginStyle.css";

const LoginForm: React.FC = () => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const USER_TYPES = ["Admin", "Docente", "Alumno"];
  const navigate = useNavigate();
  const [userType, setUserType] = useState<string>(USER_TYPES[0]);

  const handleUserTypeChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setUserType(event.target.value);
  };

  const handleLogin = (e: FormEvent) => {
    e.preventDefault();

    if (
      userType === "Docente" &&
      username === "docente" &&
      password === "1234"
    ) {
      alert("Login successful");
      navigate("/homeDocente");
    } else {
      alert("Login failed: Invalid credentials or user type");
    }
  };

  return (
    <form className="login-form" onSubmit={handleLogin}>
      <div className="form-group">
        <label>Username: </label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label>Password: </label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div className="user-type">
        <label htmlFor="userType">Tipo de usuario: </label>
        <select id="userType" value={userType} onChange={handleUserTypeChange}>
          {USER_TYPES.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
      </div>
      <button type="submit">Iniciar sesión</button>
    </form>
  );
};

export default LoginForm;
