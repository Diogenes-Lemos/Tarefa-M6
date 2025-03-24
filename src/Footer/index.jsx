import { Farea } from "./styles"
import Logo from '../assets/logo.png'
import Instagram from '../assets/instagram.png'
import Twitter from '../assets/twitter.png'
import Facebook from '../assets/facebook.png'

const Ftr = () => (
    <Farea>
        <div id="logoarea">
            <img src={Logo} alt="logo" />
        </div>
        <div id="iconsarea">
            <div id="icon1">
                <img src={Instagram} alt="I" />
            </div>
            <div id="icon2">
                <img src={Facebook} alt="I" />
            </div>
            <div id="icon3">
                <img src={Twitter} alt="I" />
            </div>
        </div>
        <div id="legal">
            <p>A efood é uma plataforma para divulgação de estabelecimentos, a responsabilidade pela entrega, qualidade <br /> dos produtos é toda do estabelecimento contratado. </p>
        </div>
    </Farea>
)

export default Ftr