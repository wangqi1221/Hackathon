import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { OverviewComponent } from './overview/overview.component';
import { HomeComponent } from './home.component';
import { ClientDetailModule } from './client-detail/client-detail.module';
import { InfoItemModule } from '@/components/info-item/info-item.module';
import { BarChartModule } from '@/components/bar-chart/bar-chart.module';


@NgModule({
  declarations: [
    HomeComponent,
    OverviewComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    ClientDetailModule,
    InfoItemModule,
    BarChartModule
  ]
})
export class HomeModule { }
