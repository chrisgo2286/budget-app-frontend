import { useState, useEffect } from 'react';
import './select.css';

type SelectProps = {
    className: string,
    name: string,
    initial: string,
    options: string[],
    fields: object,
    setFields: React.Dispatch<React.SetStateAction<any>>
}

export default function Select ({
    className,
    name,
    initial,
    options,
    fields,
    setFields,
    ...other 
}: SelectProps): JSX.Element {
    
    const [ choice, setChoice ] = useState<string>(initial);

    function handleChange (event: React.ChangeEvent<HTMLSelectElement>): void {
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
