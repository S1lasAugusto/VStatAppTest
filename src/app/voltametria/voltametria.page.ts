import { Component } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-voltametria',
  templateUrl: './voltametria.page.html',
  styleUrls: ['./voltametria.page.scss'],
})
export class VoltametriaPage {

  params = {
    op: 'DPV',
    fEsc: "5",
    pIni: -0.6,
    pFim: 0.0,
    pPas: 0.005,
    pPul: 0.01,
    tPul: 0.01,
    tPas: 0.025,
    tEqu: 5,
    nome: "",
    cpf: "",
    idade: '',
    peso: '',

  };

  estimatedParams = {
    sRat: Math.round((this.params.pPas / this.params.tPas)*10)/10,
    nPnt: Math.round(Math.abs(this.params.pFim - this.params.pIni) / this.params.pPas),
    tEst: Math.abs(this.params.pFim - this.params.pIni) / (this.params.pPas / this.params.tPas)
  };

  constructor(private router: Router) {}

  goToChart(){
    const navigationExtras: NavigationExtras = {
      state: {
        params: {...this.params, ...this.estimatedParams}
      }
    };
    this.router.navigate(['/chart'], navigationExtras);
  }
}
