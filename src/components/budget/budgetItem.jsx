import SelectBudgetItem from './selectBudgetItem';
import InputBudgetItem from './inputBudgetItem';

export default function BudgetItem ({ budgetItem, categories, setUpdateRequired }) {
    
    return (
        <div className="budget-item">
            <div className="budget-item-header">
                <SelectBudgetItem 
                    budgetItem={ budgetItem }
                    categories={ categories }
                    setUpdateRequired={ setUpdateRequired } />
                <div className='budget-item-amounts'>
                    <span className="budget-item-amount-actual">
                        ${ budgetItem.actual_amount} of $
                    </span>
                    <InputBudgetItem
                        budgetItem={ budgetItem }
                        setUpdateRequired={ setUpdateRequired } />
                </div>
            </div>
            <div className='outer-bar'>
                <div className='inner-bar' style={{ width: budgetItem.percent }}></div>
            </div>
        </div>
    )
}