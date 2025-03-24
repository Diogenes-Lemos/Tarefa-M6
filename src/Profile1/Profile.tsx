import ProfileHeader from './Header'
import Hero from './Hero'
import { ListArea } from './style'
import Ftr from '../Footer'
import Product from '../Product'
import Pizza1 from '../assets/Pizza1.png'

const Profile1 = () => (
  <body>
    <ProfileHeader />
    <Hero />
    <ListArea>
      <div id="itensarea">
        <Product
          id="01"
          imagePath={Pizza1}
          title="Pizza Marguerita"
          description="A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!"
        />

        <Product
          id="01"
          imagePath={Pizza1}
          title="Pizza Marguerita"
          description="A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!"
        />

        <Product
          id="01"
          imagePath={Pizza1}
          title="Pizza Marguerita"
          description="A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!"
        />

        <Product
          id="01"
          imagePath={Pizza1}
          title="Pizza Marguerita"
          description="A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!"
        />

        <Product
          id="01"
          imagePath={Pizza1}
          title="Pizza Marguerita"
          description="A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!"
        />

        <Product
          id="01"
          imagePath={Pizza1}
          title="Pizza Marguerita"
          description="A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!"
        />
      </div>
    </ListArea>
    <Ftr />
  </body>
)

export default Profile1
