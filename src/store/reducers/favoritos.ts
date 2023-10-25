import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Produto } from '../../App'

type FavoritosState = {
  itens: Produto[]
}

const initialState: FavoritosState = {
  itens: []
}

const favoritosSlice = createSlice({
  name: 'favoritos',
  initialState,

  reducers: {
    favoritar: (state, action: PayloadAction<Produto>) => {
      const artigoEsportivo = action.payload

      if (state.itens.find((produto) => produto.id === artigoEsportivo.id)) {
        const favoritosSemProduto = state.itens.filter(
          (produto) => produto.id !== produto.id
        )
        state.itens = favoritosSemProduto
      } else {
        state.itens.push(artigoEsportivo)
      }
    }
  }
})

export const { favoritar } = favoritosSlice.actions
export default favoritosSlice.reducer
