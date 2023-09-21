import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PredictComponent } from './predict.component';
import { PredictRoutingModule } from './predict-routing.module';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { ServiceItemModule } from '@/components/service-item/service-item.module';
import { PredictEditItemModule } from '@/components/predict-edit-item/predict-edit-item.module';
import { NzMessageModule } from 'ng-zorro-antd/message';



@NgModule({
  declarations: [
    PredictComponent
  ],
  imports: [
    CommonModule,
    PredictRoutingModule,
    ServiceItemModule,
    NzButtonModule,
    NzDropDownModule,
    PredictEditItemModule,
    NzMessageModule
  ]
})
export class PredictModule { }
