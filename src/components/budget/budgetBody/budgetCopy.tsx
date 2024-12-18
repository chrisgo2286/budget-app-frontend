import { useContext } from "react";
import { copyBudget } from "../../../misc/apiCalls";
import Button from "../../miscComponents/button/button";
import { BudgetContext, BudgetErrorsContext, BudgetPeriodContext } from "../../../misc/context";

export default function BudgetCopy () {

    const { setBudgetUpdate } = useContext(BudgetContext)
    const { setErrors } = useContext(BudgetErrorsContext)
    const { period } = useContext(BudgetPeriodContext)

    async function handleSubmit () {
        const response = await copyBudget(period)
        if (response.status === 200) {
            setBudgetUpdate(true)
        } else {
            setErrors(["There was a problem copying the budget over!"])
        }
    }

    return (
        <div className="flex flex-col justify-center items-center h-40 border-t border-gray-200 mt-5">
            <div className="text-xl mb-5">Copy Previous Month's Budget? </div>
            <Button className="" onClick={ handleSubmit }>Copy</Button>
        </div>
        
    )
}