import { Sbtn, SproductBtn, ScloseBtn, SformBtn } from './styles'
import CloseImg from '../../assets/close.png'

type Props = {
  title: string
  link: string
  onclick?: () => void
  swidth?: string
}

type PropClose = {
  onclick?: () => void
}

type TitleFormButton = {
  formLevel: string
  type?: "button" | "submit" | "reset"
  onClick?: () => void
  disabled?: boolean
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

export const FormBtn = ({ formLevel, type = 'button', onClick }: TitleFormButton) => (
  <SformBtn type={type} onClick={onClick}>
    {formLevel}
  </SformBtn>
)