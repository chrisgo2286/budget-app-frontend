import Card from "../miscComponents/card/card"
import './services.css';

export default function Services () {
    return (
        <section className="services">
            <div className="services-header">Benefits</div>
            <div className="cards">
                <Card 
                    headlineText="Customizable Budget"
                    detailText={
                        "Create a simple, customizeable monthly budget with " + 
                        "expense and income categories that make sense for you. " + 
                        "Track your monthly spending to date to keep from going " + 
                        "overbudget."
                    }
                    link="Discover more" />
                <Card 
                    headlineText="Automated Ledger"
                    detailText={
                        "Upload your expenses to automatically populate your " +
                        "ledger. Expenses are automatically categorized based " +
                        "on past data."
                    }
                    link="Discover more" />
                <Card 
                    headlineText="Insightful Reports"
                    detailText={
                        "Your Ledger and Budget data feed your reports " +
                        "providing you with insightful, easy-to-understand " +
                        "reports that provide instant feedback on your monthly " +
                        "spending."
                    }
                    link="Discover more" />    
            </div>

        </section>
    )
}