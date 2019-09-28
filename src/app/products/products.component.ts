import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.sass']
})
export class ProductsComponent implements OnInit {
  pageTitle = 'Product List';
  imageWidth = 50;
  imageMargin = 2;
  showImage = false;
  listFilter = 'twig';

  products: IProduct[] = [
    {
      productId: 1,
      productName: 'Bin',
      productCode: 'BIN01',
      releaseDate: '21-01-2019',
      description: 'Big ol\' barrel of nothing ready to be filled with the crap you dont want anymore.',
      price: 2000.99,
      starRating: 5,
      imageUrl: 'assets/images/bin.png'
    },
    {
      productId: 2,
      productName: 'Twig',
      productCode: 'TWIG01',
      releaseDate: '21-01-2019',
      description: 'Big ol\' twig.',
      price: 20.99,
      starRating: 3.2,
      imageUrl: 'assets/images/twig.png'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

  toggleImage(): void {
    this.showImage = !this.showImage;
  }

}
