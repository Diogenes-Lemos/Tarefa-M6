import { MainArea } from './style'
import Restaurant from '../../../components/Restaurant'
import { Btn } from '../../../components/buttons'
import { useGetRestaurantsQuery } from '../../../services/api'
import { Loading, Error } from '../../../components/Loads/Loads'

export const RestaurantList = () => {
  const { data: restaurants, isLoading, error } = useGetRestaurantsQuery()

  if (isLoading) {
    return <Loading />
  }

  if (error || !restaurants) {
    return <Error />
  }

  return (
    <MainArea>
      <ul id="itensarea">
        {restaurants.map((rest) => (
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
