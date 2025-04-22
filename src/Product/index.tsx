import { ProductArea } from './style'
import { ReactElement } from 'react'

type Props = {
  id: any
  imagePath: string
  title: string
  description: string
  productButton: ReactElement
}

const Product = ({
  id,
  imagePath,
  title,
  description,
  productButton
}: Props) => (
  <ProductArea id={id}>
    <div id="imgarea" style={{ backgroundImage: `url(${imagePath})` }} />
    <div id="title">
      <h3>{title}</h3>
    </div>
    <div id="description">
      <p>{description}</p>
    </div>
    <div id="btnarea">{productButton}</div>
  </ProductArea>
)

export default Product
