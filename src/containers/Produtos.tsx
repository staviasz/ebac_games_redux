import Produto from '../components/Produto'

import { useGetJogosQuery } from '../services/apis'
import * as S from './styles'

const Produtos = () => {
  const { data: jogos, isLoading } = useGetJogosQuery()

  if (isLoading) return <h2>Carregango...</h2>

  return (
    <>
      <S.Produtos>
        {jogos?.map((game) => (
          <Produto key={game.id} game={game} />
        ))}
      </S.Produtos>
    </>
  )
}

export default Produtos
