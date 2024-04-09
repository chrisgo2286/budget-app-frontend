import React from "react";
import Input from "../miscComponents/input/input";

export default function NewUserFields ({ fields, setFields, handleSubmit }) {
    return (
        <React.Fragment>
            <div className="registration-username-label">Username</div>
            <Input
                className='registration-username' 
                type='text'
                name='username'
                value={ fields.username }
                fields={ fields }
                setFields={ setFields } />
            <div className="registration-password1-label">Password</div>
            <Input
                className='registration-password1'
                type='password'
                name='password1'
                value={ fields.password1 }
                fields={ fields }
                setFields={ setFields } />
            <div className="registration-password2-label">Reenter PW</div>
            <Input
                className='registration-password2'
                type='password'
                name='password2'
                value={ fields.password2 }
                fields={ fields }
                setFields={ setFields } />
            <button 
                className='registration-btn' 
                onClick={ handleSubmit }>
                Register
            </button>
        </React.Fragment>
    )
}