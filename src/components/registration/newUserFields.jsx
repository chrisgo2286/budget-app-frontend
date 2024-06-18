import React from "react";
import Input from "../miscComponents/input/input";
import InputWithIcon from "../miscComponents/inputWithIcon/inputWithIcon";

export default function NewUserFields ({ fields, setFields, handleSubmit }) {
    return (
        <React.Fragment>
            <InputWithIcon
                className='registration-username'
                type="text"
                name="username"
                placeholder="Username"
                value={ fields.username }
                fields={ fields }
                setFields={ setFields }
                icon="person" />
            <InputWithIcon
                className='registration-password1'
                type='password'
                name='password1'
                placeholder="Password"
                value={ fields.password1 }
                fields={ fields }
                setFields={ setFields } 
                icon="vpn_key"/>
            <InputWithIcon
                className='registration-password2'
                type='password'
                name='password2'
                placeholder="Retype Password"
                value={ fields.password2 }
                fields={ fields }
                setFields={ setFields } 
                icon="vpn_key"/>
            <button 
                className='registration-btn' 
                onClick={ handleSubmit }
                data-cy='registration-btn'>
                Register
            </button>
        </React.Fragment>
    )
}