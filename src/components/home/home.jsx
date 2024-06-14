import Hero from "./hero";
import Services from "./services";
import './home.css';

export default function Home () {

    return (
        <div className="home">
            <Hero />
            <Services />
        </div>  
    )
}