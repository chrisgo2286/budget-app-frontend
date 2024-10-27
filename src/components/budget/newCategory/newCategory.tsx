import { useState, useContext } from 'react';
import Input from '../../miscComponents/input/input';
import Select from '../../miscComponents/select/select';
import { createCategory } from '../../../misc/apiCalls';
import { validateCategory } from './newCategoryValidation';
import { CategoriesContext, BudgetErrorsContext } from '../../../misc/context';
import { compileCategoryNames } from '../../../misc/miscFunctions';

export type NewCategoryTypes = {
    owner?: number,
    id?: string,
    name: string,
    type: string
}

export default function NewCategory (): JSX.Element {
    const [ fields, setFields ] = useState<NewCategoryTypes>({
        name: '',
        type: ''
    })
    const { setErrors } = useContext(BudgetErrorsContext)
    const { categories, setCategoryUpdate } = useContext(CategoriesContext)
    const categoryNames = compileCategoryNames(categories)

    function handleSubmit (): void {
        const result = validateCategory(fields, categoryNames)
        if(result === 'Valid') {
            createNewCategory();
        } else if (result && typeof result !== "string") {
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