import { ExpandIconTypes } from "../../../misc/miscTypes"

export default function ExpandIcon ({ 
    children, 
    handleClick 
}: ExpandIconTypes): JSX.Element {
    return (
        <div className="expand-icon">
            <i 
                className="material-icons"
                data-cy="expand-icon"
                onClick={ handleClick }>
                { children }
            </i>
        </div>
    )
}