import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PredictComponent } from './predict.component';
import { PredictRoutingModule } from './predict-routing.module';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { ServiceItemComponent } from '../../../components/service-item/service-item.component';
import { ServiceItemModule } from '@/components/service-item/service-item.module';



@NgModule({
  declarations: [
    PredictComponent,
    // ServiceItemComponent
  ],
  imports: [
    CommonModule,
    PredictRoutingModule,
    ServiceItemModule,
    NzButtonModule,
    NzDropDownModule
  ]
})
export class PredictModule { }
