import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import { Link } from "react-router-dom";
import '../../assets/style/pages/error.scss';

function Error() {
    return(
        <div className="Error">
            <Navbar/>
            <main className="ErrorMain">
                <div className="ErrorTitle">
                    404
                </div>
                <h1 className="ErrorText"> Oups! La page que vous demandez n'existe pas.</h1>
                <Link className="ErrorLink" to='/'>Retourner sur la page d'accueil</Link>
            </main>
            <Footer />
        </div>
    );
}

export default Error;