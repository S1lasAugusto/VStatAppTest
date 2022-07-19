import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VoltametriaPage } from './voltametria.page';

const routes: Routes = [
  {
    path: '',
    component: VoltametriaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VoltametriaPageRoutingModule {}
