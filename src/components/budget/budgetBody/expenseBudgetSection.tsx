import React, { useContext } from "react";
import BudgetItem from "../budgetItem/budgetItem";
import { BudgetContext } from "../../../misc/context";

export default function ExpenseBudgetSection (): JSX.Element {
    const { budget } = useContext(BudgetContext)

    function handleHeader (): string {
        const budgetTotal = `${ budget.fixed_expense.budget + budget.variable_expense.budget }`
        const ledgerTotal = `${ budget.fixed_expense.ledger + budget.variable_expense.ledger }`

        return (
            `EXPENSE (${ ledgerTotal } of ${ budgetTotal })`
        )
    }

    return (
        <section className="expense-section" data-cy="expense-section">
            <div className="relative bg-blue-100 font-bold indent-10 border-t border-b border-solid h-10 flex flex-col justify-center my-6">
                <div 
                    className="text-center z-10"
                    data-cy="expense-section-header">
                    { handleHeader() }
                </div>
                <div 
                    className="absolute h-full bg-blue-200"
                    style={{ width: budget.expense.percent }} />
            </div>

            
            <ExpenseSubSection expenseType="Fixed_Expense" />
            <ExpenseSubSection expenseType="Variable_Expense" />
        </section>
                
    )
}

function ExpenseSubSection ({ expenseType }: { expenseType: string}): JSX.Element {
    
    const { budget } = useContext(BudgetContext)
    const budgetItems = budget.items.filter((budgetItem) => (
        budgetItem.type === expenseType
    ))    
    
    function handleHeader (): string {
        let stat;
        if (expenseType === "Fixed_Expense") {
            stat = `${ budget.fixed_expense.ledger } of ${ budget.fixed_expense.budget }`
        } else {
            stat = `${ budget.variable_expense.ledger } of ${ budget.variable_expense.budget }`
        }
        return `${ expenseType.replace("_", " ") } (${stat})`
    }
    return ( 
        <React.Fragment>
            <div 
                className="indent-10 font-bold"
                data-cy={`${expenseType.toLowerCase().replace("_", "-")}-header`}>{ handleHeader() }</div>
            <div className="flex flex-col justify-center items-center">
                { budgetItems.map((budgetItem) => (
                    <BudgetItem key={ budgetItem.id } budgetItem={ budgetItem } />
                ))}
            </div>
        </React.Fragment>
    )
}