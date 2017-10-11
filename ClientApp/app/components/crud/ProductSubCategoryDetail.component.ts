import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { CrudService } from '../../Crud.Service'
import { ProductSubCategory } from '../../ProductSubCategory.models';
import { Pipe, PipeTransform } from '@angular/core';

@Component({
    selector: 'productsubCategoryDetail',
    templateUrl: './productSubCategoryDetail.Component.html',
    providers: [CrudService],
    styleUrls: ['./productSubCategory.component.css']
})
export class ProductSubCategoryDetailComponent {
    public productSubCategory: ProductSubCategory[];
    p: number = 1;
    constructor(private crudService: CrudService) {
        this.getListData();
    }

    getListData() {
        this.crudService.getSubData().subscribe(data => {
            //this.productCategory = null;
            this.productSubCategory = data.json() as ProductSubCategory[];
        },
            error => console.log(error)
        );
    }

    onDelete(id: number) {
        this.crudService.deleteSubData(id).subscribe(data => {
            this.getListData();
        },
            error => console.log(error)
        );
    }
}