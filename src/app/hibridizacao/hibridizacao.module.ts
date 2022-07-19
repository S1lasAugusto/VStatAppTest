import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HibridizacaoPageRoutingModule } from './hibridizacao-routing.module';

import { HibridizacaoPage } from './hibridizacao.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HibridizacaoPageRoutingModule
  ],
  declarations: [HibridizacaoPage]
})
export class HibridizacaoPageModule {}
