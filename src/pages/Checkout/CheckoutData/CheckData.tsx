import { useFormik } from 'formik'
import * as Yup from 'yup'
import ReactInputMask from 'react-input-mask'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { clientAccepted, orderReset } from '../../../redux/slices/checkoutSlice'
import { open } from '../../../redux/slices/cartSlice'
import { setRecipientData } from '../../../redux/slices/orderSlice'
import { FormBtn } from '../../../components/buttons'
import {
  FormArea,
  InputArea,
  DoubleInputArea,
  HalfForm,
  BtnArea
} from '../Style'

const CheckData = () => {
  const clientForm = useFormik({
    initialValues: {
      Recipient: '',
      Adress: '',
      City: '',
      PostalCode: '',
      Number: '',
      Complement: ''
    },
    validationSchema: Yup.object({
      Recipient: Yup.string().min(5, 'Campo inválido').required('Campo Obrigatório'),
      Adress: Yup.string().min(5, 'Campo inválido').required('Campo Obrigatório'),
      City: Yup.string().min(2, 'Campo inválido').required('Campo Obrigatório'),
      PostalCode: Yup.string().length(9, 'Campo inválido').required('Campo Obrigatório'),
      Number: Yup.string().required('Campo Obrigatório'),
      Complement: Yup.string(),
    }),
    onSubmit: (values) => {
      console.log (values)
    }
  }
  )

  const getErrorMessage = (fieldName: string, message?: string) => {
    const modified = fieldName in clientForm.touched
    const invalid = fieldName in clientForm.errors

    if (modified && invalid) return message; return ''
  }

  const navigate = useNavigate()

  const dispatch = useDispatch()

  const toPayment = async () => {
    const isValid = await clientForm.validateForm().then(errors => Object.keys(errors).length === 0)

    if (isValid) {
      dispatch(setRecipientData({
        receiver: clientForm.values.Recipient,
        description: clientForm.values.Adress,
        city: clientForm.values.City,
        zipCode: clientForm.values.PostalCode,
        number: Number(clientForm.values.Number),
        complement: clientForm.values.Complement
      }))
      dispatch(clientAccepted())
    } else {
      clientForm.handleSubmit()
    }
  }

  const toCart = () => {
    dispatch(orderReset())
    navigate(-1)
    dispatch(open())
  }

  
  return (
    <form onSubmit={clientForm.handleSubmit}>
      <FormArea>
        <h4 id="Stitle">Entrega</h4>
        <InputArea>
          <label htmlFor="Recipient">Quem irá receber</label>
          <input type="text" id="Recipient" name="Recipient" value={clientForm.values.Recipient} onChange={clientForm.handleChange} onBlur={clientForm.handleBlur}/>
          <small>{getErrorMessage('Recipient', clientForm.errors.Recipient)}</small>
        </InputArea>
        <InputArea>
          <label htmlFor="Adress">Endereço</label>
          <input type="text" id="Adress" name="Adress" value={clientForm.values.Adress} onChange={clientForm.handleChange} onBlur={clientForm.handleBlur}/>
          <small>{getErrorMessage('Adress', clientForm.errors.Adress)}</small>
        </InputArea>
        <InputArea>
          <label htmlFor="City">Cidade</label>
          <input type="text" id="City" name="City" value={clientForm.values.City} onChange={clientForm.handleChange} onBlur={clientForm.handleBlur}/>
          <small>{getErrorMessage('City', clientForm.errors.City)}</small>
        </InputArea>
        <DoubleInputArea>
          <HalfForm>
            <label htmlFor="PostalCode">CEP</label>
            <ReactInputMask mask="99999-999" type="text" id="PostalCode" name="PostalCode" value={clientForm.values.PostalCode} onChange={clientForm.handleChange} onBlur={clientForm.handleBlur}/>
            <small>{getErrorMessage('PostalCode', clientForm.errors.PostalCode)}</small>
          </HalfForm>
          <HalfForm>
            <label htmlFor="Number">Numero</label>
            <input type="text" id="Number" name="Number" value={clientForm.values.Number} onChange={clientForm.handleChange} onBlur={clientForm.handleBlur}/>
            <small>{getErrorMessage('Number', clientForm.errors.Number)}</small>
          </HalfForm>
        </DoubleInputArea>
        <InputArea>
          <label htmlFor="Complement">Complemento (opcional)</label>
          <input type="text" id="Complement" name="Complement" value={clientForm.values.Complement} onChange={clientForm.handleChange} onBlur={clientForm.handleBlur}/>
          <small>{getErrorMessage('Complement', clientForm.errors.Complement)}</small>
        </InputArea>
      </FormArea>
      <BtnArea>
        <FormBtn formLevel='Continuar com o pagamento' onClick={toPayment} type='button' />
      </BtnArea>
      <BtnArea>
        <FormBtn formLevel='Voltar para o carrinho' onClick={toCart} type='button' />
      </BtnArea>
    </form>
  )
}

export default CheckData