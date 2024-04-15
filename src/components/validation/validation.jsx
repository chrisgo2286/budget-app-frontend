export default function Validation ({ errors }) {
    
    function displayErrors () {
        errors.map((error) => {
            <div className="validation-error">
                {error}
            </div>
        })
    }
    
    return (
        <section className="validation">
            { (errors) ? displayErrors(): null }
        </section>
    )
}