import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { AppComponent } from './components/app/app.component';
import { NavMenuComponent } from './components/navmenu/navmenu.component';
import { HomeComponent } from './components/home/home.component';
import { FetchDataComponent } from './components/fetchdata/fetchdata.component';
import { CounterComponent } from './components/counter/counter.component';
import { ProductCategoryDetailComponent } from './components/crud/productCategoryDetail.component';
import { ProductCategoryComponent } from './components/crud/ProductCategory.component';
import { ProductSubCategoryComponent } from './components/crud/ProductSubCategory.component';
import { ProductSubCategoryDetailComponent } from './components/crud/productSubCategoryDetail.component';
import { ProductDetailComponent } from './components/crud/productDetail.component';
import { ProductComponent } from './components/crud/product.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { SearchFilter } from './searchfilter.pipe';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { ModalModule } from 'ngx-bootstrap/modal';


//import { MatpickerModule, MatFormField } from '@angular-material';
//import { MatButtonModule, MatCardModule, MatMenuModule, MatToolbarModule, MatIconModule, MatSelectModule } from '@angular-material';


//import { MaterialModule } from '@angular/material';

//import {MatDatepickerModule} from '@angular/material';

//import { DatePickerModule } from 'ng2-datepicker-bootstrap';

//import { NgDatepickerModule } from 'ng2-datepicker';

//import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//import { MatSelectModule } from '@angular/material';
//import { BrowserModule } from '@angular/platform-browser';


@NgModule({
    declarations: [
        AppComponent,
        NavMenuComponent,
        CounterComponent,
        FetchDataComponent,
        HomeComponent,
        ProductCategoryDetailComponent,
        ProductCategoryComponent,
        ProductSubCategoryComponent,
        ProductSubCategoryDetailComponent,
        ProductDetailComponent,
        ProductComponent,
        SearchFilter
        //MatFormField
    ],
    imports: [
        CommonModule,
        HttpModule,
        FormsModule,
        NgxPaginationModule,
        //BrowserModule,
       // BrowserAnimationsModule,
        //OverlayModule,
       // DatePickerModule,
       // Ng2DropdownModule,
        //NgDatepickerModule,
       // MatSelectModule,    
        //BrowserModule,
      // MatFormField,
        //BrowserAnimationsModule,
        //  MatDatepickerModule,
        BsDatepickerModule.forRoot(),
        ModalModule.forRoot(),
        RouterModule.forRoot([
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'home', component: HomeComponent },
            { path: 'counter', component: CounterComponent },
            { path: 'fetch-data', component: FetchDataComponent },
            { path: 'product-category/:id', component: ProductCategoryComponent },
            { path: 'product-sub-category/:id', component: ProductSubCategoryComponent },
            { path: 'product-sub-category-detail', component: ProductSubCategoryDetailComponent },
            { path: 'product-category-detail', component: ProductCategoryDetailComponent },
            { path: 'product-page/:id', component: ProductComponent },
            { path: 'product-page-detail', component: ProductDetailComponent },

            { path: '**', redirectTo: 'home' }
        ])
    ],
    })
export class AppModuleShared {
}
