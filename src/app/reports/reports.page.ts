import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.page.html',
  styleUrls: ['./reports.page.scss'],
})
export class ReportsPage implements OnInit {

  reports: any[] = [];

  constructor(public alertController: AlertController) {

  }

  ngOnInit() {
    let reportJson = localStorage.getItem('reportDB');
    if (reportJson != null) {
      this.reports = JSON.parse(reportJson);
    }
  }

  delete(report: any) {

    let id = report.id;

    let toKeep: any[] = [];

    for (let i of this.reports) {

      if (i.id !== id) {
        toKeep.push(i);
      }
    }

    this.reports = toKeep;
    localStorage.setItem('reportDB', JSON.stringify(this.reports));
  }

  async viewReport(report) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Report View',
      subHeader: 'ID:' + report.id,
      message: '-----------------------//----------------------- ' + '<br>' +
        '<strong>Operator:<strong> ' + report.nameOperator + '<br>' +
        'N° Register: ' + report.registerOperator + '<br>' +
        '-----------------------//----------------------- ' + '<br>' +
        'Patient´s Name: ' + report.namePatient + '<br>' +
        'CPF: ' + report.cpfPatient + '<br>' +
        'Patient Age: ' + report.agePatient + '<br>' +
        'Patient Weight: ' + report.weightPatient + '<br>' +
        '-----------------------//----------------------- ' +
        'Latitude: ' + report.latitude + '<br>' +
        'Longitude: ' + report.longitude + '<br>',
      buttons: ['OK'],
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }


}
