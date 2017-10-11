import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { CrudService } from '../../Crud.Service'
import { ProductCategory } from '../../ProductCategory.models';
//import { Pipe, PipeTransform } from '@angular/core';
@Component({
    selector: 'productCategoryDetail',
    templateUrl: './productCategoryDetail.Component.html',
    providers: [CrudService],
    styleUrls: ['./productCategory.component.css']
})
export class ProductCategoryDetailComponent {
    public productCategory: ProductCategory[];
    p: number = 1;
    constructor(private crudService: CrudService) {
        this.getListData();
    }

    getListData() {
        this.crudService.getData().subscribe(data => {
            //this.productCategory = null;
            this.productCategory = data.json() as ProductCategory[];
            console.log(this.productCategory);
        },
            error => console.log(error)
        );
    }

    onDelete(id: number) {
        this.crudService.deleteData(id).subscribe(data => {
            this.getListData();
        },
            error => console.log(error)
        );
    }
}