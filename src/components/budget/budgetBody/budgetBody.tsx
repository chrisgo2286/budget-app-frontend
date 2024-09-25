import { useContext } from "react"
import { BudgetContext } from "../../../misc/context"
import IncomeBudgetSection from "./incomeBudgetSection"
import ExpenseBudgetSection from "./expenseBudgetSection"
import BudgetCopy from "./budgetCopy"

export default function BudgetBody () {

    const { budget } = useContext(BudgetContext)

    return (
        <div>
            { (budget.items.length === 0) ? 
                ( <BudgetCopy /> ) : 
                (
                    <>
                        <IncomeBudgetSection />
                        <ExpenseBudgetSection />
                    </>
                )
            }
        </div>
    )
}