import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';



@NgModule({
  declarations: [LayoutComponent, HeaderComponent],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class LayoutModule { }
