import { useSelector } from 'react-redux'
import { RootState } from '../../redux/store'

import { Soverlay } from '../../components/Modal/style'
import { Scart } from '../../components/Cart/style'
import CheckData from './CheckoutData/CheckData'
import CheckPayment from './CheckoutPayment/CheckPayment'
import CheckOrder from './CheckoutOrder/CheckOrder'

const Checkout = () => {
  const clientSucess = useSelector((state: RootState) => state.checkout.client.sucess)
  const paymentSucess = useSelector((state: RootState) => state.checkout.payment.sucess)
  const orderSucess = useSelector((state: RootState) => state.checkout.order.sucess)

  const showCheckData = !clientSucess && !paymentSucess && !orderSucess
  const showPaymentData = clientSucess && !paymentSucess && !orderSucess
  const showCheckOrder = clientSucess && paymentSucess && !orderSucess

  return (
  <Soverlay className="open">
    <Scart>
      {showCheckData && <CheckData />}
      {showPaymentData && <CheckPayment />}
      {showCheckOrder && <CheckOrder />}
    </Scart>
  </Soverlay>
  )
}

export default Checkout

