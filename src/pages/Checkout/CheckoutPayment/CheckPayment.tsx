import { FormArea, InputArea } from '../Style'

const CheckPayment = () => {
  return (
    <FormArea>
      <InputArea>
        <label htmlFor="Cardowner">Nome no cartão</label>
        <input type="text" id="Cardowner" />
      </InputArea>
      <InputArea>
        <label htmlFor="Cardnumber">Numero do cartão</label>
        <input type="text" id="Cardnumber" />
      </InputArea>
      <InputArea>
        <label htmlFor="Cvv">Cvv</label>
        <input type="text" id="Cvv" />
      </InputArea>
      <InputArea>
        <label htmlFor="expmonth">Mês de vencimento</label>
        <input type="number" id="expmonth" />
      </InputArea>
      <InputArea>
        <label htmlFor="expyear">Ano de vencimento</label>
        <input type="number" id="expyear" />
      </InputArea>
    </FormArea>
  )
}

export default CheckPayment