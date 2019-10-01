import { Component, OnInit } from '@angular/core';
import { IProduct } from '../product';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.sass']
})
export class ProductDetailComponent implements OnInit {
  pageTitle = 'Product Detail';
  product: IProduct;
  id: number;

  constructor(private route: ActivatedRoute,
              private router: Router) {
    console.log(this.route.snapshot.paramMap.get('id'));
   }

  ngOnInit() {
    this.id = +this.route.snapshot.paramMap.get('id');
  }

  onBack(): void {
    this.router.navigate(['/products']);
  }
}
