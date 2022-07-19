import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VoltametriaPageRoutingModule } from './voltametria-routing.module';

import { VoltametriaPage } from './voltametria.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VoltametriaPageRoutingModule
  ],
  declarations: [VoltametriaPage]
})
export class VoltametriaPageModule {}
