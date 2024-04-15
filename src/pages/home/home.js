import Navbar from '../../components/Navbar/Navbar.js'
import Banner from '../../components/Banner/Banner.js'
import Banner_Image from '../../assets/img-banner-home.png'
import Gallery from '../../components/Gallery/Gallery.js'
import Footer from '../../components/Footer/Footer.js'
import '../../assets/style/pages/home.scss';

function Home(){
    return(
        <div className='Home'>
            <Navbar/>
            <Banner title="Chez vous, partout et ailleurs. " image={Banner_Image}/>
            <main className='HomeMain'>
                <Gallery/>
            </main>
            <Footer />
        </div>
    )
}
export default Home