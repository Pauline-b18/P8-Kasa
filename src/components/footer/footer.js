import Logo_white from '../../assets/logo-white.png';
import '../../assets/style/components/footer.scss';

function Footer(){
    return(
        <div className='Footer'>
            <img src={Logo_white} alt='Logo de kasa'className='LogoWhite'/>
            <p className='FooterText'>© 2020 Kasa. All rights reserved</p>
        </div>
    )
}
export default Footer