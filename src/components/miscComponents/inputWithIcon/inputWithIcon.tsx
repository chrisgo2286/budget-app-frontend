import './inputWithIcon.css';

type InputWithIconProps = {
    className: string,
    type: string,
    name: string,
    placeholder: string,
    value: string | number,
    fields: object,
    setFields: React.Dispatch<React.SetStateAction<any>>,
    icon: string
}

export default function InputWithIcon ({ 
    className,
    type, 
    name,
    placeholder, 
    value, 
    fields, 
    setFields,
    icon, 
    ...other 
}: InputWithIconProps): JSX.Element {
    
    function handleChange (event: React.ChangeEvent<HTMLInputElement>): void {
        const { name, value } = event.target;
        setFields({ ...fields, [name]: value })
    }

    return (
        <div className={ "input-icon-pair " + className }>
            <i className="material-icons icon">{ icon }</i>
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