import { useFormik } from 'formik'
import * as Yup from 'yup'
import ReactInputMask from 'react-input-mask'
import { useDispatch, useSelector } from 'react-redux'

import { useCheckoutOrderMutation } from '../../../services/api'
import { RootState } from '../../../redux/store'
import { paymentAccepted, orderReset } from '../../../redux/slices/checkoutSlice'
import { setPaymentData, setOrderId, setProducts } from '../../../redux/slices/orderSlice'
import { FormBtn } from '../../../components/buttons'
import {
  FormArea,
  InputArea,
  DoubleInputArea,
  HalfForm,
  BtnArea
} from '../Style'

const CheckPayment = () => {

  const [checkoutOrder, { isLoading }] = useCheckoutOrderMutation()
  
  const orderInfo = useSelector((state: RootState) => state.orderInformation.information)

  const paymentForm = useFormik({
    initialValues: {
      cardName: '',
      cardNumber: '',
      cvv: '',
      expmonth: '',
      expYear: ''
    },
    validationSchema: Yup.object({
      cardName: Yup.string().min(5, 'Campo inválido').required('Campo Obrigatório'),
      cardNumber: Yup.string().length(19, 'Campo inválido').required('Campo Obrigatório'),
      cvv: Yup.string().length(3, 'Campo inválido').required('Campo Obrigatório'),
      expmonth: Yup.string().length(2, 'Campo inválido').required('Campo Obrigatório'),
      expYear: Yup.string().length(4, 'Campo inválido').required('Campo Obrigatório'),
    }),
    onSubmit: (values) => {
      console.log (values)
      }
    }
  )

  const getErrorMessage = (fieldName: string, message?: string) => {
    const modified = fieldName in paymentForm.touched
    const invalid = fieldName in paymentForm.errors

    if (modified && invalid) return message; return ''
  }

  const dispatch = useDispatch()

  //Abaixo a função que faz o gerenciamento do estado que está em orderSLice, bem como chama o hook "useCheckoutOrderMutation()" que está em services/api.ts
  const toOrder = async () => { 
  const isValid = await paymentForm.validateForm().then(errors => Object.keys(errors).length === 0)

  if (isValid) {
    dispatch(setPaymentData({
      name: paymentForm.values.cardName,
      number: paymentForm.values.cardNumber,
      code: parseInt(paymentForm.values.cvv),
      month: parseInt(paymentForm.values.expmonth),
      year: parseInt(paymentForm.values.expYear)
    }))

    const products = items
      .filter((item) => item.id !== null && item.price !== null)
      .map((item) => ({
        id: Number(item.id),
        price: item.price!
      }))

    dispatch(setProducts(products))
    dispatch(paymentAccepted())

    try {
      const { orderId } = await checkoutOrder(orderInfo).unwrap()
      dispatch(setOrderId(orderId))
    } catch (error: any) {
      console.error('Erro no processamento', error)
      if (error.data) console.error('Detalhes da API:', error.data)
    }
  } else {
    paymentForm.handleSubmit()
  }
}

  const toRecipient = () => {
    dispatch(orderReset())
  }

  const items = useSelector((state: RootState) => state.cart.items)
  const total = items.reduce((acc, item) => acc + (item.price || 0), 0)

  return (
    <form onSubmit={paymentForm.handleSubmit}>
      <FormArea>
        <h4 id="Stitle">Pagamento - Valor a pagar R$ {total.toFixed(2)}</h4>
        <InputArea>
          <label htmlFor="cardName">Nome no cartão</label>
          <input type="text" id="cardName" name="cardName" value={paymentForm.values.cardName} onChange={paymentForm.handleChange} onBlur={paymentForm.handleBlur}/>
          <small>{getErrorMessage('cardName', paymentForm.errors.cardName)}</small>
        </InputArea>
        <DoubleInputArea>
          <HalfForm>
            <label htmlFor="cardNumber">Número do cartão</label>
            <ReactInputMask mask="9999-9999-9999-9999" type="text" id="cardNumber" name="cardNumber" value={paymentForm.values.cardNumber} onChange={paymentForm.handleChange} onBlur={paymentForm.handleBlur}/>
            <small>{getErrorMessage('cardNumber', paymentForm.errors.cardNumber)}</small>
          </HalfForm>
          <HalfForm>
            <label htmlFor="cvv">CVV</label>
            <ReactInputMask mask="999" type="text" id="cvv" name="cvv" value={paymentForm.values.cvv} onChange={paymentForm.handleChange} onBlur={paymentForm.handleBlur}/>
            <small>{getErrorMessage('cvv', paymentForm.errors.cvv)}</small>
          </HalfForm>
        </DoubleInputArea>
        <DoubleInputArea>
          <HalfForm>
            <label htmlFor="expmonth">Mês de vencimento</label>
            <ReactInputMask mask="99" type="text" id="expmonth" name="expmonth" value={paymentForm.values.expmonth} onChange={paymentForm.handleChange} onBlur={paymentForm.handleBlur}/>
            <small>{getErrorMessage('expmonth', paymentForm.errors.expmonth)}</small>
          </HalfForm>
          <HalfForm>
            <label htmlFor="expYear">Ano de vencimento</label>
            <ReactInputMask mask="9999" type="text" id="expYear" name="expYear" value={paymentForm.values.expYear} onChange={paymentForm.handleChange} onBlur={paymentForm.handleBlur}/>
            <small>{getErrorMessage('expYear', paymentForm.errors.expYear)}</small>
          </HalfForm>
        </DoubleInputArea>
      </FormArea>
      <BtnArea>
        <FormBtn 
          formLevel={isLoading ? 'Finalizando' : 'Finalizar pagamento'} 
          onClick={toOrder} 
          type='button'
          disabled={isLoading}
          />
      </BtnArea>
      <BtnArea>
        <FormBtn formLevel='Voltar para a edição de endereço' onClick={toRecipient} type='button' />
      </BtnArea>
    </form>
  )
}

export default CheckPayment

