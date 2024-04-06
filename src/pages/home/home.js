import Navbar from '../../components/navbar/navbar.js'
import Banner from '../../components/banner/banner.js'
import Banner_Image from '../../assets/img-banner-home.png'
// import FonctionGallery from '../../components/gallery/....'
// import FonctionFooter from '../../components/Footer/....'
import './home.scss';

function Home(){
    return(
        <div className='Home'>
            <Navbar/>
            <Banner title="Chez vous, partout et ailleurs. " image={Banner_Image}/>
            <main className='HomeMain'>
                {/* <Gallery/> */}
            </main>
            {/* <Footer /> */}
        </div>
    )
}
export default Home