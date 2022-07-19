import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./voltametria/voltametria.module').then( m => m.VoltametriaPageModule)
  },
  {
    path: 'chart',
    loadChildren: () => import('./chart/chart.module').then( m => m.ChartPageModule)
  },
  {
    path: 'hibridizacao',
    loadChildren: () => import('./hibridizacao/hibridizacao.module').then( m => m.HibridizacaoPageModule)
  },
  {
    path: 'voltametria',
    loadChildren: () => import('./voltametria/voltametria.module').then( m => m.VoltametriaPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
