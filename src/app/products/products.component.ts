import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';
import { ProductService } from '../Services/product.service';

@Component({
  templateUrl: './products.component.html', // Template encapsulation
  styleUrls: ['./products.component.sass'] // Css encapsulation
})
export class ProductsComponent implements OnInit {

  constructor(private productService: ProductService) {
  }

  pageTitle = 'Product List';
  imageWidth = 50;
  imageMargin = 2;
  showImage = false;
  errorMessage: string;

  // tslint:disable-next-line: variable-name -- disables checKing for variable name convention break on the next line
  _listFilter: string;
  get listFilter(): string {
    return this._listFilter;
  }
  set listFilter(value: string) {
    this._listFilter = value;
    this.filteredProducts = this.listFilter ? this.performFilter(this.listFilter) : this.products;
  }

  // Examples of an interface implementation
  filteredProducts: IProduct[];
  products: IProduct[] = [];

  onRatingClicked(message: string): void {
    this.pageTitle = `Product List: ${message}`;
  }

  performFilter(filterBy: string): IProduct[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.products.filter((product: IProduct) =>
      product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1);
  }

  // Example of a method
  toggleImage(): void {
    this.showImage = !this.showImage;
  }

  // Example of a lifecycle hook
  ngOnInit() {
    this.productService.getProducts().subscribe({ // Use of a service to get from an api
      next: products => {                         // Also subscription to an observable
        this.products = products;
        this.filteredProducts = this.products;
      },
      error: err => this.errorMessage = err
    });
  }
}
