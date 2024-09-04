import { useContext } from 'react';
import { ErrorsContext } from '../../misc/context';
import './validation.css';

export default function Validation (): JSX.Element {

    const { errors } = useContext(ErrorsContext)

    function displayErrors (): JSX.Element[] {
        return errors.map((error, ndx) => (
            <div key={ ndx } className="validation-error">{ error }</div>
        ));
    }

    return (
        <section className="validation" data-cy='validation'>
            {( errors.length > 0) ? displayErrors(): null }
        </section>
    )
}