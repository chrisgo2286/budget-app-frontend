import { useState, useContext } from 'react';
import Input from '../../miscComponents/input/input';
import Select from '../../miscComponents/select/select';
import { createCategory } from '../../../misc/apiCalls';
import { validateNewCategory } from '../../../misc/validation/validateNewCategory';
import { NewCategoryTypes } from './newCategoryTypes';
import { CategoriesContext, BudgetErrorsContext } from '../../../misc/context';

export default function NewCategory (): JSX.Element {
    const [ fields, setFields ] = useState<NewCategoryTypes>({
        name: '',
        type: ''
    })
    const { setErrors } = useContext(BudgetErrorsContext)
    const { categories, setCategoryUpdate } = useContext(CategoriesContext)

    function handleSubmit (): void {
        const result = validateNewCategory(fields, categories)
        if(result === 'Valid') {
            createNewCategory();
        } else if (typeof result !== "string") {
            setErrors(result);
        }
    }

    async function createNewCategory (): Promise<void> {
        if (fields.type === "Fixed Expense" || fields.type === "Variable Expense") {
            const newFields = { ...fields, type: fields.type.replace(" ", "_")}
            await createCategory(newFields)
        } else {
            await createCategory(fields)
        }
        setFields({ name: '', type: '' })
        setErrors([])
        setCategoryUpdate(true);
    }

    return (
        <section className="new-budget-item">
            <Input
                className='new-category-name'
                type='text'
                name='name'
                value={ fields.name }
                fields={ fields }
                setFields={ setFields }
                placeholder='Category' />
            <Select 
                className='new-category-type'
                name='type'
                initial='Type'
                value={(fields.type) ?  fields.type: ''}
                options={ [ 'Fixed Expense', 'Variable Expense', 'Income' ] }
                fields={ fields }
                setFields={ setFields } />
            <button 
                className='add-btn'
                onClick={ handleSubmit }
                data-cy='new-category-btn'>
                Add
            </button>
        </section>
    )
}