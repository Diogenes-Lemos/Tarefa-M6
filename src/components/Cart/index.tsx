import { useSelector, useDispatch } from 'react-redux'
import { useNavigate, useLocation } from 'react-router-dom'
import { RootState } from '../../redux/store'
import { close } from '../../redux/slices/cartSlice'
import ItemCart from './ItemCart'
import { Scartarea, Scart } from './style'

const Cart = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const toCheckout = () => {
    navigate('/checkout', {
      state: { backgroundLocation: location }
    })
  }
  const dispatch = useDispatch()
  const isOpen = useSelector((state: RootState) => state.cart.isOpen)
  const items = useSelector((state: RootState) => state.cart.items)
  const Clicked = () => {
    dispatch(close())
  }
  const total = items.reduce((acc, item) => acc + (item.price || 0), 0)

  return (
    <Scartarea className={isOpen ? 'openCart' : 'closedCart'} onClick={Clicked}>
      <Scart>
        {items.length > 0 ? (
          <>
            {items.map((item) => (
              <ItemCart
                id={item.id!}
                key={item.id}
                img={item.imagePath!}
                title={item.title!}
                price={item.price!}
              />
            ))}
            <div id="cartprice">
              <h3>Valor total</h3>
              <h3>R$ {total.toFixed(2)}</h3>
            </div>
            <div id="btnarea">
              <button type="button" onClick={toCheckout}>
                <h4>Continuar com a entrega</h4>
              </button>
            </div>
          </>
        ) : (
          <p id="noitem">Sem itens no carrinho</p>
        )}
      </Scart>
    </Scartarea>
  )
}

export default Cart
