import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';

@Component({
  selector: 'app-products', // Custom directive
  templateUrl: './products.component.html', // Teplate encapsulation
  styleUrls: ['./products.component.sass'] // Css encapsulation
})
export class ProductsComponent implements OnInit {

  constructor() {
    this.filteredProducts = this.products;
    this.listFilter = 'twig';
  }

  pageTitle = 'Product List';
  imageWidth = 50;
  imageMargin = 2;
  showImage = false;

  // tslint:disable-next-line: variable-name -- disables checing for variable name convention break on the next line
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
  products: IProduct[] = [
    {
      productId: 1,
      productName: 'Bin',
      productCode: 'BIN-01',
      releaseDate: '21-01-2019',
      description: 'Big ol\' barrel of nothing ready to be filled with the crap you dont want anymore.',
      price: 2000.99,
      starRating: 5,
      imageUrl: 'assets/images/bin.png'
    },
    {
      productId: 2,
      productName: 'Twig',
      productCode: 'TWIG-01',
      releaseDate: '21-01-2019',
      description: 'Big ol\' twig.',
      price: 20.99,
      starRating: 3.2,
      imageUrl: 'assets/images/twig.png'
    }
  ];

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
  }

}
