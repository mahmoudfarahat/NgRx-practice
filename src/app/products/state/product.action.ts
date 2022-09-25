import { createAction, props } from "@ngrx/store"
import { Product } from "../product"

export const toggleProductCode = createAction(
  '[product] Toggle Product Code'
);
export const setCurrentProduct = createAction(
  '[product] set Current Product',
  props<{ currentProductId: number }>()
);

export const clearCurrentProduct = createAction(
  '[product] clear Current Product'
);

export const initializeCurrentProduct = createAction(
  '[product] initialize Current Product'
)


export const loadProducts = createAction(
  '[product] load'
)
export const loadProductsSuccess = createAction(
  '[product] load Success',
  props<{products: Product[]}>()
)
export const loadProductsFailure = createAction(
  '[product] load Failure ',
  props<{error: string}>()

)

export const updateProduct = createAction(
  "[Product] update Product", 
    props<{ product: Product }>()
  )
export const updateProductSuccess = createAction(
    "[Product] update Product Success", 
      props<{ product: Product }>()
    )
    
  export const updateProductFailure= createAction(
      "[Product] update Product Failure", 
        props<{ error: any }>()
      )
      export const createProduct = createAction(
        '[Product] Create Product',
        props<{ product: Product }>()
      );
      
      export const createProductSuccess = createAction(
        '[Product] Create Product Success',
        props<{ product: Product }>()
      );
      
      export const createProductFailure = createAction(
        '[Product] Create Product Fail',
        props<{ error: string }>()
      );
      
      export const deleteProduct = createAction(
        '[Product] Delete Product',
        props<{ productId: number }>()
      );
      
      export const deleteProductSuccess = createAction(
        '[Product] Delete Product Success',
        props<{ productId: number }>()
      );
      
      export const deleteProductFailure = createAction(
        '[Product] Delete Product Fail',
        props<{ error: string }>()
      );    
