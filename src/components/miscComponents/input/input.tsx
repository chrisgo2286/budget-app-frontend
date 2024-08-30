import './input.css';

type InputProps = {
    className: string,
    type: string,
    name: string,
    value: string | number,
    fields: object,
    onFocus?: () => void,
    onBlur?: () => void,
    placeholder?: string,
    setFields: React.Dispatch<React.SetStateAction<any>>
}
export default function Input ({ 
    className, 
    type, 
    name, 
    value, 
    fields,
    onFocus,
    onBlur,
    placeholder, 
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
            onFocus={ onFocus }
            onBlur={ onBlur }
            placeholder={ placeholder }
            { ...other }>
        </input>
    )
}