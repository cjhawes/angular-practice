import { Component, OnInit } from '@angular/core';
import { IProduct } from '../product';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/Services/product.service';

@Component({
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.sass']
})
export class ProductDetailComponent implements OnInit {
  pageTitle = 'Product Detail';
  product: IProduct;
  id: number;
  imageWidth = 50;
  imageMargin = 2;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private productService: ProductService) {
    console.log(this.route.snapshot.paramMap.get('id'));
   }

  ngOnInit() {
    this.id = +this.route.snapshot.paramMap.get('id');
    this.product = this.productService.getProductById(this.id);
  }

  onBack(): void {
    this.router.navigate(['/products']);
  }
}
