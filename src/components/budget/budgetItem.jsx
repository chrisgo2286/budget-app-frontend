export default function BudgetItem ({ budgetItem }) {
    const { category, budget_amount, actual_amount, percent } = budgetItem
    return (
        <div className="budget-item">
            <div className="budget-item-header">{ category }</div>
            <div className='outer-bar'>
                <div 
                    className='inner-bar' 
                    style={{ width: percent }}>
                </div>
            </div>
        </div>
        
    )
}