import { Sitem, Sdescription } from './style'
import Pizza from '../../assets/Pizza1.png'
import { ProductBtn } from '../../buttons/index'

const Item = () => (
  <Sitem>
    <Sdescription>
      <img src={Pizza} alt="Pizza" id="imgarea" />
      <div id="itemdescription">
        <h3 id="itemtitle">Pizza Marguerita</h3>
        <p id="itemtext">
          A pizza Margherita é uma pizza clássica da culinária italiana,
          reconhecida por sua simplicidade e sabor inigualável. Ela é feita com
          uma base de massa fina e crocante, coberta com molho de tomate fresco,
          queijo mussarela de alta qualidade, manjericão fresco e azeite de
          oliva extra-virgem. A combinação de sabores é perfeita, com o molho de
          tomate suculento e ligeiramente ácido, o queijo derretido e cremoso e
          as folhas de manjericão frescas, que adicionam um toque de sabor
          herbáceo. É uma pizza simples, mas deliciosa, que agrada a todos os
          paladares e é uma ótima opção para qualquer ocasião.
        </p>
        <br />
        <p id="itemtext">Serve: de 2 a 3 pessoas</p>
        <br />
        <ProductBtn link="#" title="Adicionar ao carrinho - R$ 60,90" />
      </div>
    </Sdescription>
  </Sitem>
)

export default Item
