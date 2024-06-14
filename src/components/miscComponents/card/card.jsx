export default function Card ({ headlineText, detailText, link }) {
    return (
        <div className="card">
            <CardHeader
                text={ headlineText } />
            <CardDetail
                text={ detailText } />
            <CardFooter
                link={ link } />    
        </div>

    )
}

function CardHeader ({ text }) {
    return (
        <div className="card-headline">{ text }</div>
    )
}

function CardDetail ({ text }) {
    return (
        <div className="card-detail">{ text }</div>
    )
}

function CardFooter ({ link }) {
    return (
        <div className="card-footer">{ link }</div>
    )
}