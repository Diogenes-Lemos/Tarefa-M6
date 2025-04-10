import { Sbtn, SproductBtn } from './styles'

type Props = {
  title: string
  link: string
}

export const Btn = ({ title, link }: Props) => <Sbtn to={link}>{title}</Sbtn>

export const ProductBtn = ({ title, link }: Props) => (
  <SproductBtn to={link}>{title}</SproductBtn>
)
