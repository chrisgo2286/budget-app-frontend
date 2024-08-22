export function PrevArrow ({ handleClick }) {
    return (
        <span 
            className="hover:cursor-pointer material-icons"
            onClick={ handleClick }>
            navigate_before
        </span>
    )
}

export function NextArrow ({ handleClick }) {
    return (
        <span 
            className="hover:cursor-pointer material-icons"
            onClick={ handleClick }>
            navigate_next
        </span>
    )
}

export function Stat ({ label, data }) {
    return (
        <div className="text-2xl my-2">
            <i className="text-xl">{ label } </i>
            { (label === "Percent of Budget") ? `${data}%` : `$${data}` }
        </div>
    )
}

export function ReportHeader ({ label }) {
    return (
        <span className="text-3xl font-bold">{ label }</span>
    )
    
}