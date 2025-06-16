import { Soverlay } from '../../components/Modal/style'
import { Scart } from '../../components/Cart/style'
import CheckData from './CheckoutData/CheckData'

const Checkout = () => (
  <Soverlay className="open">
    <Scart>
      <CheckData />
    </Scart>
  </Soverlay>
)

export default Checkout
