import './input.css';

type InputProps = {
    className: string,
    type: string,
    name: string,
    value: string | number,
    fields: object,
    setFields: React.Dispatch<React.SetStateAction<any>>
}
export default function Input ({ 
    className, 
    type, 
    name, 
    value, 
    fields, 
    setFields, 
    ...other 
}: InputProps): JSX.Element {
    
    function handleChange (event: React.ChangeEvent<HTMLInputElement>) {
        const { name, value } = event.target;
        setFields({ ...fields, [name]: value })
    }

    return (
        <input 
            className={ className }
            type={ type }
            name={ name }
            value={ value }
            id={ name }
            onChange={ handleChange }
            data-cy={ className }
            { ...other }>
        </input>
    )
}