import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../modules/ListResponseModel';
import { Product } from '../modules/product';
import { ResponseModel } from '../modules/ResponseModel';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  apiUrl = 'https://localhost:44385/api/';

  constructor(private httpClient: HttpClient) {}

  getProducts(): Observable<ListResponseModel<Product>> {
    let newPath = this.apiUrl + 'products/getall';
    return this.httpClient.get<ListResponseModel<Product>>(newPath);
  }

  getProductsByCategory(
    categoryId: number
  ): Observable<ListResponseModel<Product>> {
    let newPath =
      this.apiUrl + 'products/getbycategory?categoryId=' + categoryId;
    return this.httpClient.get<ListResponseModel<Product>>(newPath);
  }
  //gelen datayı presponse entegre edecek
  //js de class yok her şey fonksiyon
  add(product: Product): Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(
      this.apiUrl + '/products/add',
      product
    );
  }
}
