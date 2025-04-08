import { ProfileHdr } from './style'
import bckheader from '../../assets/bckheader.png'
import logo from '../../assets/logo.png'

const ProfileHeader = () => (
  <>
    <ProfileHdr style={{ backgroundImage: `url(${bckheader})` }}>
      <h3 id="type">Restaurantes</h3>
      <div id="logoarea">
        <a href="#">
          <img src={logo} alt="E-food" />
        </a>
      </div>
      <h3 id="type">0 produto(s) no carrinho</h3>
    </ProfileHdr>
  </>
)

export default ProfileHeader
