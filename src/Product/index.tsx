import { ProductArea } from './style'
import { ProductBtn } from '../buttons/index'

type Props = {
  id: string
  imagePath: string
  title: string
  description: string
}

const Product = ({ id, imagePath, title, description }: Props) => (
  <ProductArea id={id}>
    <div id="imgarea" style={{ backgroundImage: `url(${imagePath})` }} />
    <div id="title">
      <h3>{title}</h3>
    </div>
    <div id="description">
      <p>{description}</p>
    </div>
    <div id="btnarea">
      <ProductBtn link="#" title="Mais detalhes" />
    </div>
  </ProductArea>
)

export default Product
