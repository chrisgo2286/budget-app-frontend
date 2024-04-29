import { useState } from 'react';
import Input from '../miscComponents/input/input';
import Select from '../miscComponents/select/select';
import { createCategory } from '../../misc/apiCalls';

export default function NewCategory ({ categories, setErrors, setUpdateRequired }) {
    const [ fields, setFields ] = useState({
        name: '',
        type: ''
    })

    function handleSubmit () {
        //VALIDATION
        const result = createCategory(fields)
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