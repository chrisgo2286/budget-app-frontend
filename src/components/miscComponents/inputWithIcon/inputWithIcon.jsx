import './inputWithIcon.css';

export default function InputWithIcon ({ 
    className,
    type, 
    name,
    placeholder, 
    value, 
    fields, 
    setFields,
    icon, 
    ...other }) {
    
    function handleChange (event) {
        const { name, value } = event.target;
        setFields({ ...fields, [name]: value })
    }

    return (
        <div className={ "input-icon-pair " + className }>
            <i className="material-icons">{ icon }</i>
            <input
                className="input" 
                type={ type }
                name={ name }
                placeholder={ placeholder }
                value={ value }
                id={ name }
                onChange={ handleChange }
                { ...other }>
            </input>
        </div>

    )
}