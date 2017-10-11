import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { CrudService } from '../../crud.Service'
import { ProductSubCategory } from '../../productSubCategory.models';
import { ProductCategory } from '../../productCategory.models';

@Component({
    selector: 'productSubCategory',
    templateUrl: './productSubCategory.Component.html',
    providers: [CrudService],
    styleUrls: ['./productSubCategory.component.css']
})
export class ProductSubCategoryComponent {
    productCategory: ProductCategory[];
    selectedProductCategory: ProductCategory = new ProductCategory(0, 'Shoes'); 
    public productSubCategory: ProductSubCategory = new ProductSubCategory(0,0,"Sub Cat");
    private id: number;
    constructor(private crudService: CrudService, private route: ActivatedRoute, private redirect: Router) {

        this.route.params.subscribe((params: Params) => {
            this.id = params['id'];
            console.log(this.id)
        });

        this.crudService.getSubDetail(this.id).subscribe(data => {
            // this.productCategory = null;
            this.productSubCategory = data.json();
        },
            error => console.log(error)
        );

        this.crudService.getData().subscribe(data => {
            // this.productCategory = null;
            this.productCategory = data.json();
        },
            error => console.log(error)
        );

    }

    list() {
        this.redirect.navigateByUrl('/product-sub-category-detail');
    }

    save() {
        this.crudService.postSubData(this.productSubCategory)
            .subscribe(
            (response) => {
                console.log(response);
                this.list();
            },
            (error) => console.log(error)
            );
    }
}