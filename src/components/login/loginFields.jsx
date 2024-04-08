import React from "react";
import Input from "../miscComponents/input/input";

export default function LoginFields ({ fields, setFields, handleSubmit }) {
    return (
        <React.Fragment>
            <div className="login-username-label">Username</div>
            <Input
                className='login-username'
                type='text'
                name='username'
                value={ fields.username }
                fields={ fields }
                setFields={ setFields } />
            <div className="login-password-label">Password</div>
            <Input
                className='login-password'
                type='password'
                name='password'
                value={ fields.password }
                fields={ fields }
                setFields={ setFields } />
            <button className='login-btn' onClick={ handleSubmit }>Login</button>
        </React.Fragment>
    )
}