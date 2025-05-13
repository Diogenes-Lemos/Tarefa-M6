import { Harea } from './style'

type Props = {
  background?: string
  tipo?: string
  titulo?: string
}

const Hero = ({ background, tipo, titulo }: Props) => (
  <Harea style={{ backgroundImage: `url(${background})` }}>
    <div id="typearea">
      <h3>{tipo}</h3>
    </div>
    <div id="namearea">
      <h3>{titulo}</h3>
    </div>
  </Harea>
)

export default Hero
