import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductDetailGuard implements CanActivate {
  constructor(private router: Router) { }

  id: number;

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    this.id = +next.url[1].path;
    if (isNaN(this.id) || this.id < 1) {
      alert('Invalid product id');
      this.router.navigate(['/products']);
      return false;
    }
    return true;
  }

}
