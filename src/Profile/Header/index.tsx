import { Link } from 'react-router-dom'
import { ProfileHdr, SLink } from './style'
import bckheader from '../../assets/bckheader.png'
import logo from '../../assets/logo.png'

const ProfileHeader = () => (
  <>
    <ProfileHdr style={{ backgroundImage: `url(${bckheader})` }}>
      <SLink to="/">
        <h3 id="title">Restaurantes</h3>
      </SLink>
      <div id="logoarea">
        <Link to="/">
          <img src={logo} alt="E-food" />
        </Link>
      </div>
      <h3 id="type">0 produto(s) no carrinho</h3>
    </ProfileHdr>
  </>
)

export default ProfileHeader
