import React, { useEffect, useState } from 'react'
import { login } from '../services/DummyService'
import { Jwt } from '../models/Jwt'
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

function Login() {
    const [userName, setUserName] = useState("kminchelle")
    const [password, setPassword] = useState("0lelplR")
    const navigate = useNavigate()

    const sendForm = (e: React.FormEvent) => {
        e.preventDefault()

        if (userName == "" || password == "")
            toast.error("Values can't be empty !!")
        else {
            const sendJwt: Jwt = {
                username: userName,
                password: password
            }
            login(sendJwt).then(res => {
                if (res.status === 200 && res.data.token) {
                    sessionStorage.setItem("token", res.data.token)
                    navigate("/dashboard")
                }
            }).catch(err => {
                toast.error(err.message)
            })
        }
    }

    return (
        <form className="m-3" onSubmit={sendForm}>
            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                <input value={userName} onChange={(e) => setUserName(e.target.value)} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="form-control" id="exampleInputPassword1" />
            </div>
            <div className="mb-3 form-check">
                <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                <input type="checkbox" className="form-check-input" id="exampleCheck1" />
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    )
}

export default Login