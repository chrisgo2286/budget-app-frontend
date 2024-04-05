import React from "react";
import Input from "../miscComponents/input/input";

export default function LoginFields ({ fields, setFields }) {
    return (
        <React.Fragment>
            <Input
                type='text'
                name='username'
                value={ fields.username }
                fields={ fields }
                setFields={ setFields }
                placeholder='Username' />
            <Input
                type='password'
                name='password'
                value={ fields.password }
                fields={ fields }
                setFields={ setFields }
                placeholder='Password' />
        </React.Fragment>
    )
}