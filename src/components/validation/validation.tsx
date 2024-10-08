import './validation.css';

type ValidationProp = {
    errors: string[]
}

export default function Validation ({ errors }: ValidationProp): JSX.Element {

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