import { useFormik } from 'formik'
import { ProductBtn } from '../../../components/buttons'
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
    onSubmit: (values) => {
      /* Aqui vou fazer o envio do formulário */
      console.log (values)
    }
  }
  )
  return (
    <form onSubmit={clientForm.handleSubmit}>
      <FormArea>
        <h4 id="Stitle">Entrega</h4>
        <InputArea>
          <label htmlFor="Recipient">Quem irá receber</label>
          <input type="text" id="Recipient" name="Recipient" value={clientForm.values.Recipient} />
        </InputArea>
        <InputArea>
          <label htmlFor="Adress">Endereço</label>
          <input type="text" id="Adress" name="Adress" value={clientForm.values.Adress} />
        </InputArea>
        <InputArea>
          <label htmlFor="City">Cidade</label>
          <input type="text" id="City" name="City" value={clientForm.values.City} />
        </InputArea>
        <DoubleInputArea>
          <HalfForm>
            <label htmlFor="PostalCode">CEP</label>
            <input type="text" id="PostalCode" name="PostalCode" value={clientForm.values.PostalCode} />
          </HalfForm>
          <HalfForm>
            <label htmlFor="Number">Numero</label>
            <input type="text" id="Number" name="Number" value={clientForm.values.Number}/>
          </HalfForm>
        </DoubleInputArea>
        <InputArea>
          <label htmlFor="Complement">Complemento (opcional)</label>
          <input type="text" id="Complement" name="Complement" value={clientForm.values.Complement} />
        </InputArea>
      </FormArea>
      <BtnArea>
        <ProductBtn title="Continuar com a entrega" link="#" swidth="336px" />
      </BtnArea>
      <BtnArea>
        <ProductBtn title="Voltar para o carrinho" link="#" swidth="336px" />
      </BtnArea>
    </form>
  )
}

export default CheckData
