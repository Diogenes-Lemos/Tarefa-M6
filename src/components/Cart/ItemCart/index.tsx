import { useDispatch } from 'react-redux'
import { remove } from '../../../redux/slices/cartSlice'

import { SitemCart } from './style'
import trash from '../../../assets/trash.png'

type ItemProps = {
  id: string | number
  img: string
  title: string
  price: number
}

const ItemCart = ({ id, img, title, price }: ItemProps) => {
  const dispatch = useDispatch()

  const prodRemove = () => {
    dispatch(remove(id))
  }

  return (
    <SitemCart>
      <div id="imgarea">
        <img src={img} alt={title} />
      </div>
      <div id="txtarea">
        <h3 id="title">{title}</h3>
        <p id="price">R$ {price.toFixed(2)}</p>
        <div id="btnarea">
          <button type="button" onClick={prodRemove}>
            <img src={trash} alt="X" />
          </button>
        </div>
      </div>
    </SitemCart>
  )
}

export default ItemCart
