import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('@/pages/home/home.module').then(m => m.HomeModule)
      },
      {
        path: 'detail',
        loadChildren: () => import('@/pages/home/client-detail/client-detail.module').then(m => m.ClientDetailModule)
      }, 
      {
        path: 'predict',
        loadChildren: () => import('@/pages/home/predict/predict.module').then(m => m.PredictModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
