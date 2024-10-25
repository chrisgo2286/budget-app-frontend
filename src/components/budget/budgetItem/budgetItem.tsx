import SelectBudgetItem from './selectBudgetItem';
import InputBudgetItem from './inputBudgetItem';
import { BudgetItemProps } from './budgetItemTypes';

export default function BudgetItem ({ 
    budgetItem
}: BudgetItemProps): JSX.Element {
    
    function handleClassName () {
        let baseClass = "absolute h-full rounded";
        baseClass += (budgetItem.type === "Income") ? " bg-green-100": " bg-blue-100";
        baseClass += (budgetItem.type !== "Income" && budgetItem.percent === "100%") ? " priority": "";
        return baseClass;
    }

    return (
        <div className="budget-item">
            <div className="budget-item-header">
                <SelectBudgetItem budgetItem={ budgetItem } />
                <div className='budget-item-amounts'>
                    <span className="budget-item-amount-actual">
                        ${ budgetItem.actual_amount} of $
                    </span>
                    <InputBudgetItem budgetItem={ budgetItem } />
                </div>
            </div>
            <div className="relative h-5 rounded border border-solid border-gray-100 bg-gray-100">
                <div 
                    className={ handleClassName() } 
                    data-cy='inner-bar' 
                    style={{ width: budgetItem.percent }}>
                </div>
            </div>
        </div>
    )
}