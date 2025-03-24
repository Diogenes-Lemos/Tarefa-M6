import { Sbtn } from './styles'

type Props = {
  title: string
  link: string
}

const Btn = ({ title, link }: Props) => <Sbtn to={link}>{title}</Sbtn>

export default Btn
