import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.sass']
})
export class ProductsComponent implements OnInit {
  pageTitle = 'Product List';
  products: any[] = [
    {
      productId: 1,
      productsName: 'Bin',
      productCode: 'BIN01',
      releaseDate: '21-01-2019',
      description: 'Big ol\' barrel of nothing ready to be filled with the crap you dont want anymore.',
      price: 2000.99,
      starRating: 5,
      imageUrl: 'assets/images/bin.png'
    },
    {
    productId: 2,
    productsName: 'Twig',
    productCode: 'TWIG01',
    releaseDate: '21-01-2019',
    description: 'Big ol\' twig.',
    price: 20.99,
    starRating: 3.2,
    imageUrl: 'assets/images/twig.png'}
  ];


  constructor() { }

  ngOnInit() {
  }

}
