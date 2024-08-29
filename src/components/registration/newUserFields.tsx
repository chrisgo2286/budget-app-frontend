import React from "react";
import InputWithIcon from "../miscComponents/inputWithIcon/inputWithIcon";
import { NewUserFieldsProps } from "./registrationTypes";

export default function NewUserFields ({ 
    fields, 
    setFields, 
    handleSubmit 
}: NewUserFieldsProps) {
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
                icon="person"
                data-cy="registration-username" />
            <InputWithIcon
                className='registration-password1'
                type='password'
                name='password1'
                placeholder="Password"
                value={ fields.password1 }
                fields={ fields }
                setFields={ setFields } 
                icon="vpn_key"
                data-cy="registration-password1" />
            <InputWithIcon
                className='registration-password2'
                type='password'
                name='password2'
                placeholder="Retype Password"
                value={ fields.password2 }
                fields={ fields }
                setFields={ setFields } 
                icon="vpn_key"
                data-cy="registration-password2" />
            <button 
                className='registration-btn' 
                onClick={ handleSubmit }
                data-cy='registration-btn'>
                Register
            </button>
        </React.Fragment>
    )
}