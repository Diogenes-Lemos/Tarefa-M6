import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../../redux/store'
import { open } from '../../../redux/slices/cartSlice'
import { Link } from 'react-router-dom'
import { ProfileHdr, SLink, ScartCounter } from './style'
import bckheader from '../../../assets/bckheader.png'
import logo from '../../../assets/logo.png'

const ProfileHeader = () => {
  const dispatch = useDispatch()
  const itemCount = useSelector((state: RootState) => state.cart.items.length)
  const Clicked = () => {
    dispatch(open())
  }
  return (
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
        <ScartCounter id="cart" onClick={Clicked}>
          {itemCount} produto(s) no carrinho
        </ScartCounter>
      </ProfileHdr>
    </>
  )
}

export default ProfileHeader
