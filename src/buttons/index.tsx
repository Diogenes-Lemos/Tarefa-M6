import { Sbtn, SproductBtn, ScloseBtn } from './styles'
import CloseImg from '../assets/close.png'

type Props = {
  title: string
  link: string
  onclick?: () => void
}

type PropClose = {
  onclick?: () => void
}

export const Btn = ({ title, link }: Props) => <Sbtn to={link}>{title}</Sbtn>

export const ProductBtn = ({ title, link, onclick }: Props) => (
  <SproductBtn to={link} onClick={onclick}>
    {title}
  </SproductBtn>
)

export const CloseBtn = ({ onclick }: PropClose) => (
  <ScloseBtn src={CloseImg} onClick={onclick} />
)
