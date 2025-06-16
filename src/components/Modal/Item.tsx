import { Soverlay, Sdescription } from './style'
import { ProductBtn } from '../buttons/index'
import { ReactElement } from 'react'

type Props = {
  acessed?: string
  imgpatch: string
  prodtitle: string
  description: string
  prodsize: string | number
  valor: number
  close: ReactElement
  close2: () => null | void
  setCart: () => null | void
  setOpen: () => null | void
}

const Item = ({
  acessed,
  imgpatch,
  prodtitle,
  description,
  prodsize,
  valor,
  close,
  close2,
  setCart,
  setOpen
}: Props) => (
  <Soverlay className={acessed}>
    <Sdescription>
      <div id="btnClose">{close}</div>
      <img src={imgpatch} alt={prodtitle} id="imgarea" />
      <div id="itemdescription">
        <h3 id="itemtitle">{prodtitle}</h3>
        <p id="itemtext">{description}</p>
        <br />
        <p id="itemtext">{prodsize}</p>
        <br />
        <ProductBtn
          onclick={() => {
            setCart()
            setOpen()
            close2()
          }}
          link="#"
          title={`Adicionar ao carrinho - R$ ${valor.toFixed(2)}`}
        />
      </div>
    </Sdescription>
  </Soverlay>
)

export default Item
