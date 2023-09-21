import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientDetailRoutingModule } from './client-detail-routing.module';
import { ClientDetailComponent } from './client-detail.component';
import { InfoItemModule } from '@/components/info-item/info-item.module';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { ServiceItemModule } from '@/components/service-item/service-item.module';

@NgModule({
  declarations: [
    ClientDetailComponent
  ],
  imports: [
    CommonModule,
    ClientDetailRoutingModule,
    ServiceItemModule,
    InfoItemModule,
    NzButtonModule,
  ]
})
export class ClientDetailModule { }
