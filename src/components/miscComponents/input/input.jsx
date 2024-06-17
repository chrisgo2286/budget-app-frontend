import './input.css';

export default function Input ({ 
    className, 
    type, 
    name, 
    value, 
    fields, 
    setFields, 
    ...other }) {
    
    function handleChange (event) {
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