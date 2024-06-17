import Hero from "./hero";
import Services from "./services";
import Footer from "./footer";
import './home.css';

export default function Home () {

    return (
        <div className="home">
            <Hero />
            <Services />
            <Footer />
        </div>  
    )
}