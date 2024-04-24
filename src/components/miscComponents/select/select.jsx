import { useState, useEffect } from 'react';
import './select.css';

export default function Select ({
    className,
    name,
    initial,
    options,
    fields,
    setFields,
    ...other }) {
    
    const [ choice, setChoice ] = useState(initial);

    function handleChange (event) {
        const { name, value } = event.target;
        setChoice(value);
        setFields({ ...fields, [name]: value });
    }

    return (
        <select
            className={ className }
            name={ name }
            value={ choice }
            onChange={ handleChange }
            data-cy={ className }
            { ...other }>
            <option key={ initial } value={ initial }>{ initial }</option>
            {
                options.map((option) => (
                    <option key={ option } value={ option }>{ option }</option>
                ))
            }
        </select>
    )
}
