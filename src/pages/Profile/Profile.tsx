import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { add, remove, open } from '../../redux/slices/cartSlice'

import ProfileHeader from './Header'
import { ProductBtn, CloseBtn } from '../../components/buttons/index'
import Hero from './Hero'
import { ListArea } from './style'
import Item from './Modal/Item'
import Ftr from '../../components/Footer'
import Product from '../../components/Product'
import { restaurantInput, cardapioInput } from '../../types/types'
import Cart from '../../components/Cart'

const Profile1 = () => {
  const { id } = useParams()
  const [isopen, setisopen] = useState(false)
  const [restaurant, setRestaurant] = useState<restaurantInput | null>(null)
  const [selectedItem, setSelectedItem] = useState<cardapioInput | null>(null)
  const dispatch = useDispatch()
  const setCart = () => {
    if (!selectedItem) return
    dispatch(
      add({
        id: selectedItem.id,
        imagePath: selectedItem.foto,
        title: selectedItem.nome,
        price: selectedItem.preco
      })
    )
  }
  const OpenCart = () => {
    dispatch(open())
  }

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
      .then((res) => res.json())
      .then((data: restaurantInput[]) => {
        const found = data.find((rest) => String(rest.id) === id)
        setRestaurant(found || null)
      })
  }, [id])
  return (
    <body id={id}>
      <ProfileHeader />
      {restaurant && (
        <Hero
          background={restaurant?.capa}
          tipo={restaurant?.tipo}
          titulo={restaurant?.titulo}
        />
      )}
      <ListArea>
        <div id="itensarea">
          {restaurant?.cardapio.map((item) => (
            <Product
              key={item.id}
              id={String(item.id)}
              imagePath={item.foto}
              title={item.nome}
              description={item.descricao}
              productButton={
                <ProductBtn
                  link="#"
                  title="Mais detalhes"
                  onclick={() => {
                    setisopen(true)
                    setSelectedItem(item)
                  }}
                />
              }
            />
          ))}
        </div>
      </ListArea>
      {selectedItem && (
        <>
          <Item
            key={selectedItem.id}
            acessed={isopen ? 'open' : 'close'}
            imgpatch={selectedItem.foto}
            prodtitle={selectedItem.nome}
            description={selectedItem.descricao}
            prodsize={selectedItem.porcao}
            valor={selectedItem.preco}
            close={<CloseBtn onclick={() => setisopen(false)} />}
            close2={() => setisopen(false)}
            setCart={setCart}
            setOpen={OpenCart}
          />
          <Cart />
        </>
      )}
      <Ftr />
    </body>
  )
}

export default Profile1
