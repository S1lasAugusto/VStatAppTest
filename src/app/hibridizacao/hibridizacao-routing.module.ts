import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HibridizacaoPage } from './hibridizacao.page';

const routes: Routes = [
  {
    path: '',
    component: HibridizacaoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HibridizacaoPageRoutingModule {}
