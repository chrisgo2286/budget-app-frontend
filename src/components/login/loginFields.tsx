import React from "react";
import InputWithIcon from "../miscComponents/inputWithIcon/inputWithIcon";
import { LoginFieldsProps } from "./loginTypes";

export default function LoginFields ({ 
    fields, 
    setFields, 
    handleSubmit 
}: LoginFieldsProps): JSX.Element {
    return (
        <React.Fragment>
            <InputWithIcon
                className='login-username'
                type='text'
                name='username'
                placeholder="Username"
                value={ fields.username }
                fields={ fields }
                setFields={ setFields }
                icon="person"
                data-cy='login-username' />
            <InputWithIcon
                className='login-password'
                type='password'
                name='password'
                placeholder="Password"
                value={ fields.password }
                fields={ fields }
                setFields={ setFields }
                icon="vpn_key"
                data-cy='login-password' />
            <button 
                className='login-btn' 
                onClick={ handleSubmit }
                data-cy='login-btn'>
                Login
            </button>
        </React.Fragment>
    )
}