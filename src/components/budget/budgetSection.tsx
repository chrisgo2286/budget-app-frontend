import { useContext } from "react";
import BudgetItem from "./budgetItem/budgetItem";
import { BudgetSectionProps } from "./budgetTypes";
import { BudgetContext } from "../../misc/context";

export default function BudgetSection ({ 
    section_type, 
 }: BudgetSectionProps): JSX.Element {

    const { budget } = useContext(BudgetContext)
    const budgetItems = budget.filter((budgetItem) => (
        budgetItem.type === section_type
    ))

    return (
        <section 
            className={ section_type.toLowerCase() }
            data-cy={ section_type.toLowerCase() + '-section' } >
            { budgetItems.map((budgetItem) => (
                <BudgetItem key={ budgetItem.id } budgetItem={ budgetItem } />
            ))}
        </section>
    )
}