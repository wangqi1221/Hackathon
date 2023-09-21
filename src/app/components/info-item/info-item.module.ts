import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzProgressModule } from 'ng-zorro-antd/progress';
import { InfoItemComponent } from './info-item.component';


@NgModule({
  declarations: [
    InfoItemComponent
  ],
  imports: [
    CommonModule,
    NzProgressModule
  ],
  exports: [
    InfoItemComponent
  ]
})
export class InfoItemModule { }
