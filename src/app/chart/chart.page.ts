import { Component, OnInit, NgZone, ViewChild } from '@angular/core';
import { IonContent } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { Serial } from '@ionic-native/serial/ngx';
import { ChartDataSets, ChartType } from 'chart.js';
import { Label } from 'ng2-charts';
import { BehaviorSubject } from 'rxjs';
import { NativeAudio } from '@ionic-native/native-audio/ngx';

export interface TimeSpan {
  minutes: number;
  seconds: number;
}

@Component({
  selector: 'app-chart',
  templateUrl: './chart.page.html',
  styleUrls: ['./chart.page.scss'],
})
export class ChartPage implements OnInit {
  @ViewChild('terminalView') content: IonContent;

  // Data Line Chart
  public chartData: ChartDataSets[] = [{ data: [], label: '' }];
  public chartType: ChartType = "line";
  public showLegend = false;
  public chartLabels: Label[] = [];

  // Options
  chartOptions = {
    responsive: false,
    title: {
      display: false,
      text: 'title'
    },
    pan: {
      enabled: true,
      mode: 'xy'
    },
    zoom: {
      enabled: true,
      mode: 'xy'
    }
  };

  // Data Scatter Chart
  public chartDataScatter: ChartDataSets[] = [{ data: [], label: '' }];
  public chartTypeScatter: ChartType = "scatter";
  public showLegendScatter = false;
  public chartLabelsScatter: Label[] = [];

  // Scatter Options 
  chartOptionsScatter = {
    responsive: true,
    title: {
      display: false,
      text: 'title'
    },
    pan: {
      enabled: true,
      mode: 'xy'
    },
    zoom: {
      enabled: true,
      mode: 'xy'
    }
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
    tEqu: 5
  };
  estimatedParams = {
    sRat: Math.round((this.params.pPas / this.params.tPas) * 10) / 10,
    nPnt: Math.round(Math.abs(this.params.pFim - this.params.pIni) / this.params.pPas),
    tEst: Math.abs(this.params.pFim - this.params.pIni) / (this.params.pPas / this.params.tPas)
  };

  public ready: Boolean = false;
  public iconCntBtn = 'refresh-sharp';
  public receivedString: string = '';
  public terminal: any[] = [];
  public temperature: number = 0;
  public iconViews: any = {
    graphIcon: 'eye-outline',
    chartIcon: 'stats-chart',
    infoIcon: 'eye-outline',
    terminalIcon: 'eye-outline',
    paramsIcon: 'options-outline'
  };
  public infoPainel: any = {
    title_1: 'Campo 1',
    title_2: 'Campo 2',
    value_1: '0'
  };
  public btnDef: any = {
    style: 'primary',
    text: 'iniciar'
  };

  time: BehaviorSubject<string>;

  timer: number;

  startTimer(duration: number) {
    this.timer = duration * 60;
    setInterval(() => {
      this.updateTimeValue();
    }, 1000)
  }

  updateTimeValue() {
    let minutes: any = this.timer / 60;
    let seconds: any = this.timer % 60;

    minutes = String('0' + Math.floor(minutes)).slice(-2);
    seconds = String('0' + Math.floor(seconds)).slice(-2);

    const text = minutes + ':' + seconds;
    this.time.next(text);

    --this.timer;

    if (this.timer < 0) {
      this.time.next('00:00')
      this.alarm();
      if (this.btnDef.text === 'hibridizando') {
        this.sendParams('{\"op\":\"end\",\"sTmp\":\"0\"}');
      }
    }

    this.infoPainel.value_2 = this.time;
  }

  alarm() {
    this.nativeAudio.play('alarm');
    setInterval(() => {
      this.nativeAudio.stop('alarm');
    }, 10000);
  }

  constructor(
    private serial: Serial,
    private route: ActivatedRoute,
    private router: Router,
    private zone: NgZone,
    private nativeAudio: NativeAudio
  ) { }

  entryTerminal(color, entry) {
    this.terminal.splice(this.terminal.length - 1, 0, { color: color, class: ' entry', text: entry });
  }

  toObject(entry) {
    entry = entry.replace('{', '');
    entry = entry.replace('}', '');
    entry = entry.replace(/"/gi, '');
    let lista = entry.split(',');
    interface Obj {
      [key: string]: any,
    }

    //let lista2 = [];
    let ob: Obj = {};

    lista.forEach(pair => {
      let pairArray = pair.split(':');
      ob[pairArray[0]] = pairArray[1];
      //lista2.push(pairArray[1]);
    });

    return ob;//lista2;
  }

  actionBtn(state) {
    const stateActions = {
      iniciar(scope) { // Primary
        scope.btnDef.style = 'medium';
        scope.params.op === 'DPV' ? scope.btnDef.text = 'analisando' : scope.btnDef.text = 'aquecendo';
        scope.sendParams();
      },
      analisando() { }, // style Medium
      aquecendo() { }, // style Medium
      hibridizar(scope) {
        scope.startTimer(scope.params.dTim);
        scope.btnDef.style = 'medium';
        scope.btnDef.text = 'hibridizando';
      }, // Chamar contador, style warning
      hibridizando() { }, //style Medium
    }
    const action = stateActions[state];
    action(this);
  }

  actionToReceive(ob) {
    const opActions = {
      pt(scope) {
        const x = + ob.x;
        const y1 = +ob.y1;
        const y = y1;
        scope.chartData[0].data.push(y);
        scope.chartLabels.push(x + '');
      },
      end(scope) {
        scope.closeConn();
        scope.btnDef.style = 'primary';
        scope.btnDef.text = 'iniciar';
      }
    }
    const op = ob.op
    if (opActions[op]) {
      const action = opActions[op];
      action(this)
    }
  }

  configView() {
    if (this.params.op === 'DPV') {
      this.iconViews.graphIcon = 'eye-off-outline';
      /* this.infoPainel.title_1 = 'Tempo estimado (s)';
       this.infoPainel.title_2 = 'Nº Pontos';
       this.infoPainel.value_1 = this.params.tEst;
       this.time = new BehaviorSubject(this.params.nPnt);
       this.chartData[0].label = 'DPV';*/
      this.chartData[0].label = 'DPV';
    } else {
      this.iconViews.infoIcon = 'eye-off-outline';
      /*   this.infoPainel.title_1 = 'Temperatura';
        this.infoPainel.title_2 = 'Duração';
        this.infoPainel.value_1 = `0/${this.params.sTmp}`;
        this.time = new BehaviorSubject(`${this.params.dTim}:00`);
        this.chartData[0].label = 'Aquecimento';*/
      this.chartData[0].label = 'Aquecimento';
    }
  }

  ngOnInit() {
    this.nativeAudio.preloadComplex('alarm', 'assets/sound/alarm.mp3', 1, 1, 0).then(
      () => { console.log('Deu certo'); },
      (err) => { console.log(err); }
    );
    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        //this.params = this.router.getCurrentNavigation().extras.state.params;
        this.configView();
      }
    });
    this.communicate();
  }

  communicate() {
    //Line
    this.chartData[0].data = [];
    this.chartLabels = [];
    //Scatter
    this.chartDataScatter[0].data = [{
      x: 0,
      y: 10
    }, {
      x: -10,
      y: 0
    }, {
      x: 10,
      y: 5
    }, {
      x: 5,
      y: 5
    }, {
      x: 5,
      y: -6
    }, {
      x: -5.5,
      y: 2
    }]

    for(let x = 0; x <10 ; x++){

      this.chartDataScatter[0].data.push({x:x,y:x});
      
    }

    for(let x = 0; x <10 ; x++){

      this.chartDataScatter[0].data.push({x:(x*-1),y:(x*-1)});
      
    }

    this.chartLabelsScatter = [];
    this.terminal = [
      { color: "entrySystem", class: " pointer", text: "_" }
    ];
    //this.serial.requestPermission({vid: '2886', pid: '802F', driver: 'CdcAcmSerialDriver'}).then(() => {
    this.serial.requestPermission({ vid: '2341', pid: '804D', driver: 'CdcAcmSerialDriver' }).then(() => {

      this.entryTerminal('entrySystem', 'Abrindo conexão serial');
      this.serial.open({
        baudRate: 115200,
        dataBits: 8,
        stopBits: 1,
        parity: 0,
        dtr: true,
        rts: true,
        sleepOnPause: true
      }).then(() => {
        console.log('Serial connection opened');
        this.entryTerminal('entrySystem', 'Conexão serial aberta.');
        this.ready = true;
        this.iconCntBtn = 'close-outline';
        this.serial.registerReadCallback().subscribe(data => {
          let now = new Uint8Array(data);

          this.zone.run(() => {
            if (now + '' === '10') {

              try {
                const ob = this.toObject(this.receivedString);

                this.actionToReceive(ob);

                this.entryTerminal('entryIn', this.receivedString);
                //this.entryTerminal('entryIn', 'Quebra de linha reconhecida');

                this.receivedString = '';
                this.content.scrollToBottom();
              } catch (error) {
                this.entryTerminal('entryIn', error);
              }
            } else {
              // this.entryTerminal('entryIn', 'Else da Quebra de Linha');
              let currentChar = '';

              now.forEach(c => {
                currentChar += String.fromCharCode(c);
              });

              this.receivedString += currentChar;

              now.forEach(c => {
                if (c == 10) {
                  this.funcaoTeste();
                }
              });


            }
          })
        }, error => {
          this.entryTerminal('entrySystem', JSON.stringify(error));
        });
      });
    }).catch((error: any) => this.entryTerminal('entrySystem', error));
  }

  sendParams(params) {
    if (params) {
      this.entryTerminal('entryOut', JSON.stringify(params, (k, v) => v && typeof v === 'object' ? v : '' + v));
      this.entryTerminal('entryOut', "Deveria imprimir tudo em texto.");
      this.serial.write(JSON.stringify(params, (k, v) => v && typeof v === 'object' ? v : '' + v));
    } else {
      this.entryTerminal('entryOut', JSON.stringify(this.params, (k, v) => v && typeof v === 'object' ? v : '' + v));
      this.entryTerminal('entryOut', "Deveria imprimir tudo em texto.");
      this.serial.write(JSON.stringify(this.params, (k, v) => v && typeof v === 'object' ? v : '' + v));
    }
    this.serial.write('\n');
  }

  connbtn() {
    if (this.ready) {
      this.closeConn();
    } else {
      this.communicate();
    }
  }

  closeConn() {
    this.serial.close().then(() => {
      this.ready = false;
      this.iconCntBtn = 'swap-vertical-outline';
      this.entryTerminal('entrySystem', 'Conexão encerrada.');
      this.content.scrollToBottom();
    }).catch((error: any) => this.entryTerminal('entrySystem', error));
  }

  hideView(view) {
    this.iconViews[view] === 'eye-outline' ?
      this.iconViews[view] = 'eye-off-outline' :
      this.iconViews[view] = 'eye-outline';
  }

  chartView(view) {
    this.iconViews[view] === 'stats-chart-outline' ?
      this.iconViews[view] = 'stats-chart' :
      this.iconViews[view] = 'stats-chart-outline';
  }

  paramsView(view) {
    this.iconViews[view] === 'options' ?
      this.iconViews[view] = 'options-outline' :
      this.iconViews[view] = 'options';
  }

  funcaoTeste() {
    try {
      const ob = this.toObject(this.receivedString);
      //this.entryTerminal('entryIn', 'Ob receive Teste');

      this.actionToReceive(ob);

      this.entryTerminal('entryIn', this.receivedString);
      //this.entryTerminal('entryIn', 'Função Teste');

      this.receivedString = '';
      this.content.scrollToBottom();
    } catch (error) {
      this.entryTerminal('entryIn', error);
    }
  }

}
