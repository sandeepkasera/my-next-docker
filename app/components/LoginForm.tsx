"use client";
import { privateEncrypt } from "node:crypto";
import { useState } from "react";

export default function LoginForm() {

    const [LoginForm, setLoginForm] = useState({
        username: "",
        password: ""
    });

    function handleFormChange(event: any) {
        const {name, value} = event?.target;
        setLoginForm((prevData) => ({
            ...prevData,
            [name]: value
        }));

    }
    
    return (
        <div>
            <h2>Login Form</h2>
            <label id="username">
                Username:
            </label>
            <input className="bg-white text-black p-4 m-3" type="text" name="username" value={LoginForm.username} onChange={handleFormChange}/>
            <br />
            <label id="password">
                Password:
            </label>
            <input className="bg-white text-black p-4 m-3" type="password" name="password" value={LoginForm.password} onChange={handleFormChange} />
            <br />
            <button className="bg-blue" type="submit">Login</button>
        </div>
    );
}

