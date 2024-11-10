import { useState, useContext } from "react"
import { MONTH_OPTIONS, monthNameToNum } from "../../../misc/miscFunctions";
import { BudgetErrorsContext, BudgetPeriodContext } from "../../../misc/context";
import { monthNumToName } from "../../../misc/miscFunctions";
import { validateBudgetFilter } from "../../../misc/validation/validateBudgetFilter";

export default function SelectBudgetFilter () {
    const { period, setPeriod } = useContext(BudgetPeriodContext)
    const [ monthName, setMonthName ] = useState<string>(monthNumToName(period.month))
    const { setErrors } = useContext(BudgetErrorsContext)

    function handleChange (event: React.ChangeEvent<HTMLSelectElement>): void {
        const { value } = event.target
        setMonthName(value)
        const monthNum = monthNameToNum(value)
        const newPeriod = { ...period, month: monthNum }
        const result = validateBudgetFilter(newPeriod)
        if (result == "Valid") {
            setErrors([])
            setPeriod(newPeriod)
        } else if (typeof result !== "string") {
            setMonthName(monthNumToName(period.month))
            setErrors(result)
        }
    }

    return (
        <select
            className="budget-filter-month"
            name="month"
            value={ monthName }
            data-cy="budget-filter-month"
            onChange={ handleChange }>
            <option key={ monthName } value={ monthName }>{ monthName }</option>
            {
                MONTH_OPTIONS.map((option) => (
                    (option !== monthName) ? monthOption(option) : null
                ))
            }
        </select>
    )
}

function monthOption (option: string): JSX.Element {
    return <option key={ option } value={ option }>{ option }</option>
}