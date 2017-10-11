import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { ProductCategory } from './productCategory.models'
import { ProductSubCategory } from './productSubCategory.models'
import { Product } from './product.models'

@Injectable()
export class CrudService {

    public productCategory: ProductCategory;
    public headers: Headers;
    public url: string ="http://localhost:2405/api/";

    constructor(private http: Http) {
        this.headers = new Headers();
        this.headers.append('Content-Type', 'application/json; charset=utf-8');
    }

    getData() {
        return this.http.get(this.url+'ProductCategory/GetData');
    }

    getDetail(id: number) {
        return this.http.get(this.url + 'ProductCategory/getdetails/'+ id);

    }

    postData(productCategory: ProductCategory) {

        return this.http.post(this.url +'/ProductCategory/Save', productCategory);
    }

    deleteData(id: number) {
        return this.http.delete(this.url +'/ProductCategory/Delete/', new RequestOptions({
            headers: this.headers,
            body: id
        }));
    }


    getSubData() {
        return this.http.get(this.url +'/ProductSubCategory/GetSubData');
    }

    getSubDetail(id: number) {
        return this.http.get(this.url +'/ProductSubCategory/getSubdetails/' + id);
    }

    postSubData(productSubCategory: ProductSubCategory) {
        return this.http.post(this.url +'/ProductSubCategory/SaveSubCategory', productSubCategory);
    }

    deleteSubData(id: number) {
        return this.http.delete(this.url +'/ProductSubCategory/DeleteSubCategory/', new RequestOptions({
            headers: this.headers,
            body: id
        }));
    }


    getProductData() {
        return this.http.get(this.url +'/Product/GetProductData');
    }

    getProductDetail(id: number) {
        return this.http.get(this.url +'/Product/getProductdetails/' + id);
    }

    postProductData(product: Product) {
        return this.http.post(this.url +'/Product/SaveProduct/', product);
    }

    deleteProductData(id: number) {
        return this.http.delete(this.url +'/Product/DeleteProduct/', new RequestOptions({
            headers: this.headers,
            body: id
        }));
    }


















}