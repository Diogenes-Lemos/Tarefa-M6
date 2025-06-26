import { FormArea, BtnArea } from "../Style"
import { FormBtn } from "../../../components/buttons"
import { OrderArea } from "./styles"

const CheckOrder = () => {

    return (
        <OrderArea>
            <FormArea>
                <h3 id="id=Stitle">Pedido realizado - ORDER_ID</h3>

                <p>Estamos felizes em informar que seu pedido já está em processo de preparação e, em breve, será entregue no endereço fornecido.
                Gostaríamos de ressaltar que nossos entregadores não estão autorizados a realizar cobranças extras. 
                Lembre-se da importância de higienizar as mãos após o recebimento do pedido, garantindo assim sua segurança e bem-estar durante a refeição.
                Esperamos que desfrute de uma deliciosa e agradável experiência gastronômica. Bom apetite!</p>
            </FormArea>
            <FormBtn formLevel='Concluir' type='button' />
        </OrderArea>
    )
    }


export default CheckOrder