import BudgetItem from "./budgetItem";

export default function BudgetSection ({ 
    section_type, 
    budget, 
    categories, 
    setUpdateRequired }) {

    const budgetItems = budget.filter((budgetItem) => (
        budgetItem.type === section_type
    ))

    return (
        <section className={ section_type }>
            <h1>{ section_type }</h1>
            { budgetItems.map((budgetItem) => (
                <BudgetItem
                    key={ budgetItem.id }
                    budgetItem={ budgetItem }
                    categories={ categories } 
                    setUpdateRequired={ setUpdateRequired }/>
            ))}
        </section>
    )
}