import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'hibridizacao',
        loadChildren: () => import('../hibridizacao/hibridizacao.module').then(m => m.HibridizacaoPageModule)
      },
      {
        path: 'voltametria',
        loadChildren: () => import('../voltametria/voltametria.module').then(m => m.VoltametriaPageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/hibridizacao',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/hibridizacao',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
