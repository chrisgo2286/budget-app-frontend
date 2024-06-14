import heroImage from '../../assets/hero.jpg';

export default function Hero () {
    return (
        <section 
            className="hero"
            style={{ backgroundImage: `url(${heroImage})`}}>
            <div className='hero-empty'></div>
            <div className='hero-content'>
                <div className="headline">Save For What Matters.</div>
                <div className="headline-detail">Simple, effective budgeting in no time at all.</div>
                <button className="cta">Register</button>
            </div>
        </section>
    )
}