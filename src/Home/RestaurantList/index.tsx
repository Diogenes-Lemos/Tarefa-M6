import { useEffect, useState } from 'react'
import { MainArea } from './style'
import Restaurant from '../Restaurant'
import { Btn } from '../../buttons'
import { restaurantInput } from '../../types/types'

export const RestaurantList = () => {
  const [restaurant, setRestaurant] = useState<restaurantInput[]>([])

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
      .then((res) => res.json())
      .then((res) => setRestaurant(res))
  }, [])
  return (
    <MainArea>
      <ul id="itensarea">
        {restaurant.map((rest) => (
          <Restaurant
            key={rest.id}
            imagePath={rest.capa}
            btnComponent1={
              rest.destacado ? (
                <Btn title="Destaque da Semana" link="#" />
              ) : null
            }
            btnComponent2={<Btn title={rest.tipo} link="#" />}
            title={rest.titulo}
            avaliation={rest.avaliacao}
            restaurantText={rest.descricao}
            btnComponent3={
              <Btn title="Saiba mais" link={`/profile/${rest.id}`} />
            }
          />
        ))}
      </ul>
    </MainArea>
  )
}
