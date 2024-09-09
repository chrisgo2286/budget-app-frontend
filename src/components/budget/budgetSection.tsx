import { useContext } from "react";
import BudgetItem from "./budgetItem/budgetItem";
import { BudgetSectionProps } from "./budgetTypes";
import { BudgetContext } from "../../misc/context";

export default function BudgetSection ({ 
    section_type, 
 }: BudgetSectionProps): JSX.Element {

    const { budget } = useContext(BudgetContext)
    const budgetItems = budget.items.filter((budgetItem) => (
        budgetItem.type === section_type
    ))

    return (
        <section 
            data-cy={ section_type.toLowerCase() + '-section' } >
            <div>{ section_type.toUpperCase() }</div>
            <div className={ section_type.toLowerCase() }>
                { budgetItems.map((budgetItem) => (
                    <BudgetItem key={ budgetItem.id } budgetItem={ budgetItem } />
                ))}
            </div>
        </section>
    )
}