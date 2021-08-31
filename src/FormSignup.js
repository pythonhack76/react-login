import React from 'react'

function FormSignup() {
    return (
     <div className="form-content-right">

        <form className="form">
            <h1>Get started create your account insert e fill out the form</h1>
            <div className="form-inputs">
                <label htmlFor="username" className="form-label">
            
            
            Username
                </label>
                <input id="username" type="text"  name="username" className="form-input" placeholder="Enter you username" />
            </div>

            <div className="form-inputs">
                <label htmlFor="email" className="form-label">
            
            Email
            
                </label>
                <input id="email" type="email"  name="email" className="form-input" placeholder="Enter you email" />
            </div>

            <div className="form-inputs">
                <label htmlFor="password" className="form-label">
            
            Password
            
                </label>
                <input id="password" type="password"  name="password" className="form-input" placeholder="Enter you password" />
            </div>

            <div className="form-inputs">
                <label htmlFor="password2" className="form-label">
            
            Confirm Password
            
                </label>
                <input id="password2" type="password2"  name="password2" className="form-input" placeholder="Enter you password2" />
            </div>
            <button className="form-input-btn" type="submit">
                Sign up
            </button>
            <span className="form-input-login">
                Hai già un account? Login <a href="#">Login</a>
            </span>
        </form>

     </div>
    )
}

export default FormSignup
