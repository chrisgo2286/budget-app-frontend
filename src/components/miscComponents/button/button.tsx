type ButtonTypes =  {
    children: string,
    className?: string,
    dataCy?: string,
    onClick: () => void
}

export default function Button ({
    children,
    className,
    dataCy,
    onClick
}: ButtonTypes): JSX.Element {
    
    const classNames = [
        "text-site-font-color",
        "flex",
        "flex-col",
        "justify-center",
        "items-center",
        "bg-third-color",
        "rounded",
        "w-36",
        "h-6",
        "shadow-custom",
        "hover:bg-second-color",
        "hover:cursor-pointer"
    ].join(" ")
    
    function handleClassNames () {
        return (className) ? `${ classNames } ${ className }`: classNames; 
    }
    return (
        <div 
            className={ handleClassNames() }
            data-cy={ dataCy }
            onClick={ onClick } >
            { children }
        </div>
    )
}