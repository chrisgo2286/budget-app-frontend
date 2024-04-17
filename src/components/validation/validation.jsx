export default function Validation ({ errors }) {
    function displayErrors () {
        return errors.map((error, ndx) => (
            <div key={ ndx } className="validation-error">{ error }</div>
        ));
    }

    return (
        <section className="validation">
            {( errors.length > 0) ? displayErrors(): null }
        </section>
    )
}