import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ProductComponent } from './product.component';
import { FormsModule } from '@angular/forms';
import { SummaryPipe } from './summary.pipe';
import { InputEmailDirective } from './input-email.directive';
import { AdminProductComponent } from './admin-product/admin-product.component';

@NgModule({
  declarations: [
    ProductComponent,
    SummaryPipe,
    InputEmailDirective,
    AdminProductComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
    
  ],
  providers: [],
  bootstrap: [ProductComponent]
})
export class AppModule { }
