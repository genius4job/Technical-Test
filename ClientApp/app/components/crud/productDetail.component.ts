import { Component, OnInit, TemplateRef } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { CrudService } from '../../Crud.Service'
import { Product } from '../../Product.models';
import { ProductCategory } from '../../ProductCategory.models';
import { ProductSubCategory } from '../../productSubCategory.models';
//import * as _ from "lodash";
import { Pipe, PipeTransform } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/modal-options.class';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
@Component({
    selector: 'productDetail',
    templateUrl: './productDetail.Component.html',
    providers: [CrudService, BsDatepickerConfig],
    styleUrls: ['./productDetail.component.css']
})
export class ProductDetailComponent {


    colorTheme = 'theme-green';

    bsConfig: Partial<BsDatepickerConfig>;

    applyTheme(pop: any) {
        // create new object on each property change
        // so Angular can catch object reference change
        this.bsConfig = Object.assign({}, { containerClass: this.colorTheme });
        setTimeout(() => {
            pop.show();
        });
    }

    productCategory: ProductCategory[];
    productSubaCategory: ProductSubCategory[];
    public product: Product = new Product();
    private id: number;
    public catname: string;

    productType = [
        { pvalue: '0', pview: 'Single' },
        { pvalue: '1', pview: 'Mixture' },
    ];


    public modalRef: BsModalRef;
    public productSubCategory: ProductSubCategory = new ProductSubCategory(0,1, "Select");
    p: number = 1;
    constructor(private crudService: CrudService, private modalService: BsModalService, private route: ActivatedRoute, private redirect: Router) {
        this.getGoal(3);
        this.getProductListData();


        this.route.params.subscribe((params: Params) => {
            this.id = params['id'];
            console.log(this.id)
        });

        this.crudService.getProductDetail(this.id).subscribe(data => {
            // this.productCategory = null;
            this.product = data.json();
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
    onSelect(productCategoryId: number) {
        alert(productCategoryId);
        this.crudService.getSubData().subscribe((data) => {
            console.log(data);
            this.productSubaCategory = data.json() as ProductSubCategory[];
        });
        alert(this.productSubaCategory[0].name);
    }

    getListData() {
        this.crudService.getSubData().subscribe(data => {
            this.productSubaCategory = data.json() as ProductSubCategory[];
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
    public openModal(template: TemplateRef<any>) {
        this.modalRef = this.modalService.show(template);
    }


    getProductListData() {
        this.crudService.getProductData().subscribe(data => {
            this.product = data.json();

        },
            error => console.log(error)
        );
    }

    getGoal(id: number) {

        this.crudService.getSubDetail(id).subscribe(data => {
            this.productSubCategory = data.json();
            this.catname = this.productSubCategory.name;
        },
            error => console.log(error)
        );

    }

    onDelete(id: number) {
        this.crudService.deleteProductData(id).subscribe(data => {
            this.getProductListData();
        },
            error => console.log(error)
        );
    }
}