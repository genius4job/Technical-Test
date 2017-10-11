import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { CrudService } from '../../crud.Service'
import { Product } from '../../product.models';
import { ProductCategory } from '../../ProductCategory.models';
import { ProductSubCategory } from '../../ProductSubCategory.models';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
declare var $: any;
declare var jquery: any;
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';

@Component({
    selector: 'product',
    templateUrl: './product.Component.html',
    providers: [CrudService, BsDatepickerConfig],
    styleUrls: ['./product.component.css']
})
export class ProductComponent {

    colorTheme = 'theme-green';

    bsConfig: Partial<BsDatepickerConfig>;

    applyTheme(pop: any) {
        this.bsConfig = Object.assign({}, { containerClass: this.colorTheme });
        setTimeout(() => {
            pop.show();
        });
    }

    productType = [
        { pvalue: '0', pview: 'Single' },
        { pvalue: '1', pview: 'Mixture' },
    ];


    productCategory: ProductCategory[];
    productSubCategory: ProductSubCategory[];
    public product: Product = new Product();
    private id: number;
    public catname: string;
    constructor(private crudService: CrudService, private route: ActivatedRoute, private redirect: Router) {

        this.route.params.subscribe((params: Params) => {
            this.id = params['id'];
            console.log(this.id)
        });

        this.crudService.getProductDetail(this.id).subscribe(data => {
            this.product = data.json();
        },
            error => console.log(error)
        );

        this.crudService.getData().subscribe(data => {
            this.productCategory = data.json();
        },
            error => console.log(error)
        );

      
    }

    onSelect(productCategoryId: number) {
        this.crudService.getSubData().subscribe((data) => {
            console.log(data);
            this.productSubCategory = data.json() as ProductSubCategory[];
        });
    }

   

    getListData() {
        this.crudService.getSubData().subscribe(data => {
            //this.productCategory = null;
            this.productSubCategory = data.json() as ProductSubCategory[];
        },
            error => console.log(error)
        );
    }

    
   
list() {
    this.redirect.navigateByUrl('/product-page-detail');
}

save() {
    this.crudService.postProductData(this.product)
        .subscribe(
        (response) => {
            console.log(response);
            this.list();
        },
        (error) => console.log(error)
        );
}
}