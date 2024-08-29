import './card.css';

type CardProps = {
    headlineText: string,
    detailText: string,
    link: JSX.Element
}

type CardSectionProp = {
    text: string
}

type CardFooterProp = {
    link: JSX.Element
}

export default function Card ({ 
    headlineText, 
    detailText, 
    link 
}: CardProps): JSX.Element {
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

function CardHeader ({ text }: CardSectionProp): JSX.Element {
    return (
        <div className="card-headline">{ text }</div>
    )
}

function CardDetail ({ text }: CardSectionProp): JSX.Element {
    return (
        <div className="card-detail">{ text }</div>
    )
}

function CardFooter ({ link }: CardFooterProp): JSX.Element {
    return (
        <div className="card-footer">{ link }</div>
    )
}