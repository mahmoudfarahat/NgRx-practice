import { ProductService } from './../product.service';
import { Injectable } from "@angular/core";
import { Actions } from '@ngrx/effects';

@Injectable()

export class ProductEffects{
  constructor(private actions$:Actions,
    private productService:ProductService
    ){}


}
