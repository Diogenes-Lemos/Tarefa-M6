import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../../redux/store'
import { close } from '../../redux/slices/cartSlice'
import ItemCart from './ItemCart'
import { Scartarea, Scart } from './style'

const Cart = () => {
  const dispatch = useDispatch()
  const isOpen = useSelector((state: RootState) => state.cart.isOpen)
  const items = useSelector((state: RootState) => state.cart.items)
  const Clicked = () => {
    dispatch(close())
  }
  const total = items.reduce((acc, item) => acc + (item.price || 0), 0)

  return (
    <Scartarea className={isOpen ? 'open' : 'closed'} onClick={Clicked}>
      <Scart>
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
          <button type="button">
            <h4>Continuar com a entrega</h4>
          </button>
        </div>
      </Scart>
    </Scartarea>
  )
}

export default Cart
