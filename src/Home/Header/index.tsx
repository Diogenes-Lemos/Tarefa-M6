import { Link } from 'react-router-dom'
import { Hdr } from './styles'
import bckheader from '../../assets/bckheader.png'
import logo from '../../assets/logo.png'

export const Header = () => (
  <>
    <Hdr style={{ backgroundImage: `url(${bckheader})` }}>
      <div id="imgarea">
        <Link to="/">
          <img src={logo} alt="E-food" />
        </Link>
      </div>
      <h1 id="title">
        Viva experiências gastronômicas <br />
        no conforto da sua casa
      </h1>
    </Hdr>
  </>
)
