import { RestaurantArea } from './style'
import estrela from '../../../assets/estrela.png'

type Props = {
  imagePath: string
  title: string
  avaliation: number
  restaurantText: string
  btnComponent1?: React.ReactElement | null
  btnComponent2?: React.ReactElement
  btnComponent3?: React.ReactElement
}

const Restaurant = ({
  imagePath,
  title,
  avaliation,
  restaurantText,
  btnComponent1,
  btnComponent2,
  btnComponent3
}: Props) => (
  <RestaurantArea>
    <div id="productimg" style={{ backgroundImage: `url(${imagePath})` }}>
      <div id="producttag">
        {btnComponent1}
        {btnComponent2}
      </div>
    </div>
    <div id="producttitle">
      <div id="title">
        <h3>{title}</h3>
      </div>
      <div id="avaliation">
        <h3>{avaliation}</h3>
        <img src={estrela} alt="*" />
      </div>
    </div>
    <div id="restauranttext">
      <p>{restaurantText}</p>
    </div>
    <div id="btnarea">{btnComponent3}</div>
  </RestaurantArea>
)

export default Restaurant
