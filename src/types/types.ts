export type cardapioInput = {
    id: number
    foto: string
    preco: number
    nome: string
    descricao: string
    porcao: string
}

export type restaurantInput = {
  id: number
  titulo: string
  destacado: boolean
  tipo: string
  avaliacao: number
  descricao: string
  capa: string
  cardapio: cardapioInput[]
}

export interface SproductBtnProps {
  swidth?: string
}