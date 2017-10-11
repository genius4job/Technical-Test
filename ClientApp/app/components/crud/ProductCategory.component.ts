import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { CrudService } from '../../crud.Service'
import { ProductCategory } from '../../productCategory.models';
import { Pipe, PipeTransform } from '@angular/core';

@Component({
    selector: 'productCategory',
    templateUrl: './productCategory.Component.html',
    providers: [CrudService],
    styleUrls: ['./productCategory.component.css']
})
export class ProductCategoryComponent {


    public productCategory: ProductCategory = new ProductCategory(0,"Select");
    private id: number;
    constructor(private crudService: CrudService, private route: ActivatedRoute, private redirect: Router) {

        this.route.params.subscribe((params: Params) => {
            this.id = params['id'];
            console.log(this.id)
        });

        this.crudService.getDetail(this.id).subscribe(data => {
            // this.productCategory = null;
            this.productCategory = data.json();
        },
            error => console.log(error)
        );
    }

    list() {
        this.redirect.navigateByUrl('/product-category-detail');
    }

    save() {
        this.crudService.postData(this.productCategory)
            .subscribe(
            (response) => {
                console.log(response);
                this.list();
            },
            (error) => console.log(error)
            );
    }
}