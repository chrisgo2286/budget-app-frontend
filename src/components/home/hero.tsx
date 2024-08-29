import { useNavigate } from 'react-router-dom';
import heroImage from '../../assets/hero.jpg';

export default function Hero (): JSX.Element {
    const navigate = useNavigate();

    return (
        <section 
            className="hero"
            style={{ backgroundImage: `url(${heroImage})`}}>
            <div className='hero-empty'></div>
            <div className='hero-content'>
                <div className="headline">Save For What Matters.</div>
                <div className="headline-detail">Simple, effective budgeting in no time at all.</div>
                <button 
                    className="cta"
                    onClick={() => navigate('/registration')}>    
                    Register
                </button>
            </div>
        </section>
    )
}