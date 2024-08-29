import { useState } from 'react';
import Input from '../miscComponents/input/input';
import Select from '../miscComponents/select/select';
import { createCategory } from '../../misc/apiCalls';
import { validateNewCategory } from '../../misc/validation/validateNewCategory';
import { NewCategoryProps, NewCategoryTypes } from './newCategoryTypes';

export default function NewCategory ({ 
    categories, 
    setErrors, 
    setUpdateRequired 
}: NewCategoryProps): JSX.Element {
    const [ fields, setFields ] = useState<NewCategoryTypes>({
        name: '',
        type: ''
    })

    function handleSubmit (): void {
        const result = validateNewCategory(fields, categories)
        if(result === 'Valid') {
            createNewCategory();
        } else {
            setErrors(result);
        }
    }

    async function createNewCategory (): Promise<void> {
        await createCategory(fields)
        setFields({ name: '', type: '' })
        setUpdateRequired(true);
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
                options={ [ 'Expense', 'Income' ] }
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