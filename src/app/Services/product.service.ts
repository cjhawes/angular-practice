import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';

import { IProduct } from '../products/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private productUrl = 'assets/api-fake/products/products.json'; // Chamge this to valid api url when wanting to use an api
  private products: IProduct[];

  constructor(private http: HttpClient) {  }

  getProducts(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(this.productUrl).pipe(
      tap(data => console.log(`All: ${JSON.stringify(data)}`)),
      catchError(this.handleError)
    );
  }

  getProductById(id: number): IProduct {
    let product: IProduct;

    this.getProducts().subscribe({ // Use of a service to get from an api
      next: products => {                         // Also subscription to an observable
        this.products = products;
      }
    });

    this.products.forEach((value: IProduct): void => {
      if (value.productId === id) {
        product = value;
      }
    }); // Dont use this normally -- just cba

    return product;
  }

  private handleError(err: HttpErrorResponse) { // Error handling
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      errorMessage = `An error occured: ${err.error.message}`;
    } else {
      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  }
}
