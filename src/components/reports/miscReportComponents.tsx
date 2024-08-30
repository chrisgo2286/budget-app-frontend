export function PrevArrow ({ handleClick }: {handleClick: () => void}) {
    return (
        <span 
            className="hover:cursor-pointer material-icons"
            onClick={ handleClick }>
            navigate_before
        </span>
    )
}

export function NextArrow ({ handleClick }: {handleClick: () => void}) {
    return (
        <span 
            className="hover:cursor-pointer material-icons"
            onClick={ handleClick }>
            navigate_next
        </span>
    )
}

export function Stat ({ 
    label, 
    data 
}: {label: string, data: string}): JSX.Element {
    return (
        <div className="text-2xl my-2">
            <i className="text-xl">{ label } </i>
            { (label === "Percent of Budget") ? `${data}%` : `$${data}` }
        </div>
    )
}

export function ReportHeader ({ label }: {label: string}): JSX.Element {
    return (
        <span className="text-3xl font-bold">{ label }</span>
    )
    
}