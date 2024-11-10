import InputBudgetFilter from "./inputBudgetFilter";
import SelectBudgetFilter from "./selectBudgetFilter";

export default function BudgetFilter (): JSX.Element {

    return (
        <section className='budget-filter'>
            <SelectBudgetFilter />
            <InputBudgetFilter />
        </section>
    )
}