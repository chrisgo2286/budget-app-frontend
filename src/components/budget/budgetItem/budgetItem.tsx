import SelectBudgetItem from './selectBudgetItem';
import InputBudgetItem from './inputBudgetItem';
import { BudgetItemProps } from './budgetItemTypes';

export default function BudgetItem ({ 
    budgetItem
}: BudgetItemProps): JSX.Element {
    
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
            <div className='outer-bar'>
                <div 
                    className='inner-bar' 
                    data-cy='inner-bar' 
                    style={{ width: budgetItem.percent }}>
                </div>
            </div>
        </div>
    )
}