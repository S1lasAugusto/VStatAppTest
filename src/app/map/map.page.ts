import { Component, OnInit } from '@angular/core';
import { Geolocation } from '@awesome-cordova-plugins/geolocation/ngx';
import * as L from 'leaflet';

@Component({
  selector: 'app-map',
  templateUrl: './map.page.html',
  styleUrls: ['./map.page.scss'],
})
export class MapPage {
  
  reports: any[] = [];
  map: L.Map;

  constructor(private geolocation: Geolocation) { }

  ionViewDidEnter(){
    L.Icon.Default.imagePath = "assets/leaflet/"
    let reportJson = localStorage.getItem('reportDB');
    if (reportJson != null) {
      this.reports = JSON.parse(reportJson);
    }
    
    this.loadMap();
  }

  async loadMap() {
    const position = await this.geolocation.getCurrentPosition();
    const location = {
      latitude: position.coords.latitude,
      longitude: position.coords.longitude,
    };
      
    this.map = L.map('map', {
      center: [location.latitude, location.longitude],
      zoom: 13
    });

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(this.map);

    this.reports.forEach(report => {
      L.marker([report.latitude, report.longitude]).addTo(this.map).bindPopup(report.nameOperator)
      .openPopup();
    });
  }

}
