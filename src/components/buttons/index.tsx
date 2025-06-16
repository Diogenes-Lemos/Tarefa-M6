import { Sbtn, SproductBtn, ScloseBtn } from './styles'
import CloseImg from '../../assets/close.png'
import { SproductBtnProps } from '../../types/types'

type Props = {
  title: string
  link: string
  onclick?: () => void
  swidth?: string
}

type PropClose = {
  onclick?: () => void
}

export const Btn = ({ title, link }: Props) => <Sbtn to={link}>{title}</Sbtn>

export const ProductBtn = ({ title, link, onclick, swidth }: Props) => (
  <SproductBtn to={link} onClick={onclick} swidth={swidth}>
    {title}
  </SproductBtn>
)

export const CloseBtn = ({ onclick }: PropClose) => (
  <ScloseBtn src={CloseImg} onClick={onclick} />
)
