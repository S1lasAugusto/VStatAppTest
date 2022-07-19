import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-hibridizacao',
  templateUrl: './hibridizacao.page.html',
  styleUrls: ['./hibridizacao.page.scss'],
})
export class HibridizacaoPage {

  params = {
    op: "HBZ",
    sTmp: "40",
    dTim: "10"
  };

  constructor(private router: Router) {}

  goToChart(){
    const navigationExtras: NavigationExtras = {
      state: {
        params: this.params
      }
    };
    this.router.navigate(['/chart'], navigationExtras);
  }
}
