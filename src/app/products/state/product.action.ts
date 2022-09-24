import { createAction, props } from "@ngrx/store"
import { Product } from "../product"

export const toggleProductCode = createAction(
  '[product] Toggle Product Code'
  )

  export const setCurrentProduct = createAction(
    '[product] set Current Product',
    props<{product: Product}>
    )

    export const clearCurrentProduct = createAction(
      '[product] clear Current Product'
      )

      export const initializeCurrentProduct = createAction(
        '[product] initialize Current Product'
        )
