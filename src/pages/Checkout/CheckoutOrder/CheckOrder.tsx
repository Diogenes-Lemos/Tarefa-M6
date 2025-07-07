import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { FormArea, BtnArea } from '../Style'
import { FormBtn } from '../../../components/buttons'
import { OrderArea } from './styles'
import { resetOrderInformations } from '../../../redux/slices/orderSlice'
import { clearCart } from '../../../redux/slices/cartSlice'
import { RootState } from '../../../redux/store'

const CheckOrder = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const orderId = useSelector(
    (state: RootState) => state.orderInformation.orderId
  )

  const toFinish = () => {
    dispatch(resetOrderInformations())
    dispatch(clearCart())
    navigate('/')
  }

  return (
    <OrderArea>
      <FormArea>
        <h3 id="id=Stitle">Pedido realizado - {orderId}</h3>

        <p>
          Estamos felizes em informar que seu pedido já está em processo de
          preparação e, em breve, será entregue no endereço fornecido.
          Gostaríamos de ressaltar que nossos entregadores não estão autorizados
          a realizar cobranças extras. Lembre-se da importância de higienizar as
          mãos após o recebimento do pedido, garantindo assim sua segurança e
          bem-estar durante a refeição. Esperamos que desfrute de uma deliciosa
          e agradável experiência gastronômica. Bom apetite!
        </p>
      </FormArea>
      <FormBtn formLevel="Concluir" type="button" onClick={toFinish} />
    </OrderArea>
  )
}

export default CheckOrder
