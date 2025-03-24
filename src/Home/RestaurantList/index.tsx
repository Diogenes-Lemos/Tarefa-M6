import { MainArea } from './style'
import Restaurant from '../Restaurant'
import Btn from '../../buttons'
import Hioki from '../../assets/Hioki.png'
import Dvita from '../../assets/dolce-vita.png'

export const RestaurantList = () => (
  <MainArea>
    <ul id="itensarea">
      <Restaurant
        id="01"
        imagePath={Hioki}
        btnComponent1={<Btn title="Destaque da Semana" link="#" />}
        btnComponent2={<Btn title="Japonesa" link="#" />}
        title="Hioki Sushi"
        avaliation={4.9}
        restaurantText="Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!"
        btnComponent3={<Btn title="Saiba mais" link="#" />}
      />

      <Restaurant
        id="02"
        imagePath={Dvita}
        btnComponent2={<Btn title="Italiana" link="#" />}
        title="La Dolce Vita Trattoria"
        avaliation={4.6}
        restaurantText="A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!"
        btnComponent3={<Btn title="Saiba mais" link="/profile1" />}
      />

      <Restaurant
        id="03"
        imagePath={Dvita}
        btnComponent2={<Btn title="Italiana" link="#" />}
        title="La Dolce Vita Trattoria"
        avaliation={4.6}
        restaurantText="A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!"
        btnComponent3={<Btn title="Saiba mais" link="/profile1" />}
      />

      <Restaurant
        id="04"
        imagePath={Dvita}
        btnComponent2={<Btn title="Italiana" link="#" />}
        title="La Dolce Vita Trattoria"
        avaliation={4.6}
        restaurantText="A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!"
        btnComponent3={<Btn title="Saiba mais" link="/profile1" />}
      />

      <Restaurant
        id="05"
        imagePath={Dvita}
        btnComponent2={<Btn title="Italiana" link="#" />}
        title="La Dolce Vita Trattoria"
        avaliation={4.6}
        restaurantText="A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!"
        btnComponent3={<Btn title="Saiba mais" link="/profile1" />}
      />

      <Restaurant
        id="06"
        imagePath={Dvita}
        btnComponent2={<Btn title="Italiana" link="#" />}
        title="La Dolce Vita Trattoria"
        avaliation={4.6}
        restaurantText="A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!"
        btnComponent3={<Btn title="Saiba mais" link="/profile1" />}
      />
    </ul>
  </MainArea>
)
