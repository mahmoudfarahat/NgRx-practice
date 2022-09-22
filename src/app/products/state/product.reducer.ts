import { createAction, createReducer, on } from "@ngrx/store";


export const productReducer = createReducer(
  {showProductCode: true},
  on(createAction('[product] Toggle Product Code'), state => {
    return{
      ...state,
      showProductCode: !state.showProductCode
    }
  })
)

// console.log('original state: '+ JSON.stringify(state))
