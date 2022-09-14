import { Component } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-voltametria',
  templateUrl: './voltametria.page.html',
  styleUrls: ['./voltametria.page.scss'],
})
export class VoltametriaPage {

  operators: any[] = [];

  public iconViews: any = {
    operatorsIcon: 'people-circle-outline'
  };

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
  };

  patientParams = {
    nome: "",
    cpf: "",
    idade: '',
    peso: '',
  };

  currentUser = {
    name: "Default",
    registerOperator: "0000",
  }

  estimatedParams = {
    sRat: Math.round((this.params.pPas / this.params.tPas) * 10) / 10,
    nPnt: Math.round(Math.abs(this.params.pFim - this.params.pIni) / this.params.pPas),
    tEst: Math.abs(this.params.pFim - this.params.pIni) / (this.params.pPas / this.params.tPas)
  };

  constructor(private router: Router, private alertController: AlertController, private toastController: ToastController) {
    let operatorsJson = localStorage.getItem('operatorDB');
    let currentUserJson = localStorage.getItem('currentUserDB');
    if (operatorsJson != null) {
      this.operators = JSON.parse(operatorsJson);
    }
    if (currentUserJson != null) {
      this.currentUser = JSON.parse(currentUserJson);
    }
  }

  operatorsView(view) {
    this.iconViews[view] === 'people-circle' ?
      this.iconViews[view] = 'people-circle-outline' :
      this.iconViews[view] = 'people-circle';
  }

  async addOperator() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Fill in operator information!',
      inputs: [
        {
          name: 'nameOperator',
          type: 'text',
          placeholder: 'Name',
        },
        {
          name: 'registerOperator',
          type: 'text',
          id: 'name2-id',
          placeholder: 'Registration Number',
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          },
        },
        {
          text: 'Ok',
          handler: (form) => {
            let operator = { name: form.nameOperator, registerOperator: form.registerOperator }
            this.add(operator);
          },
        },
      ],
    });

    await alert.present();
  }

  async add(operator: any) {
    if (operator.name.trim().length < 1 || operator.registerOperator.trim().length < 1) {
      const toast = await this.toastController.create({
        message: "Fill in the fields correctly!",
        duration: 2000,
        position: 'middle',
      });
      toast.present();
      return;
    } else {
      this.operators.push(operator);
      this.updateLocalStorage();
    }
  }

  goToChart() {

    if (this.patientParams.nome == '' || this.patientParams.cpf == '' || this.patientParams.idade == '' || this.patientParams.peso == '') {
      this.presentAlertConfirm();
    } else {
      const navigationExtras: NavigationExtras = {
        state: {
          params: { ...this.params, ...this.estimatedParams, ...this.patientParams, ...this.currentUser }
        }
      };
      this.router.navigate(['/chart'], navigationExtras);
    }

  }

  updateLocalStorage() {
    localStorage.setItem('operatorDB', JSON.stringify(this.operators));
  }

  delete(operator: any) {
    this.operators = this.operators.filter(operatorArray => operator != operatorArray);
    this.updateLocalStorage();
  }

  setCurrentUser(operator: any) {
    this.currentUser = operator;
    localStorage.setItem('currentUserDB', JSON.stringify(this.currentUser));
    this.iconViews.operatorsIcon = 'people-circle-outline';
  }

  async presentAlertConfirm() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Some patient information was not filled in!',
      message: '<strong> Continue ?</strong>',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          },
        },
        {
          text: 'Okay',
          handler: () => {
            if (this.patientParams.nome == '') {
              this.patientParams.nome = 'Not Provided'
            }
            if (this.patientParams.cpf == '') {
              this.patientParams.cpf = 'Not Provided'
            }
            if (this.patientParams.idade == '') {
              this.patientParams.idade = 'Not Provided'
            }
            if (this.patientParams.peso == '') {
              this.patientParams.peso = 'Not Provided'
            }
            console.log('Confirm Okay');
            const navigationExtras: NavigationExtras = {
              state: {
                params: { ...this.params, ...this.estimatedParams, ...this.patientParams, ...this.currentUser }
              }
            };
            this.router.navigate(['/chart'], navigationExtras);
          },
        },
      ],
    });

    await alert.present();
  }

}
