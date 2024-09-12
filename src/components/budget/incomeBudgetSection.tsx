import { useContext } from "react";
import BudgetItem from "./budgetItem/budgetItem";
import { BudgetContext } from "../../misc/context";

export default function IncomeBudgetSection (): JSX.Element {

    const { budget } = useContext(BudgetContext)
    const budgetItems = budget.items.filter((budgetItem) => (
        budgetItem.type === "Income"
    ))

    return (
        <section className="income-section" data-cy="income-section" >
            <div className="relative bg-green-100 font-bold indent-10 border-t border-b border-solid h-10 flex flex-col justify-center my-6">
                <div className="text-center z-10">INCOME ({ budget.income.ledger } of { budget.income.budget }) </div>
                <div 
                    className="absolute h-full bg-green-200"
                    style={{ width: budget.income.percent }}>
                    
                </div>
            </div>
            <div className="flex flex-col justify-center items-center">
                { budgetItems.map((budgetItem) => (
                    <BudgetItem key={ budgetItem.id } budgetItem={ budgetItem } />
                ))}
            </div>
        </section>
    )
}