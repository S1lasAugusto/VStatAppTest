(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{Aibk:function(n,t,a){"use strict";a.r(t),a.d(t,"VoltametriaPageModule",function(){return p});var e=a("ofXK"),o=a("3Pt+"),i=a("TEn/"),b=a("tyNb"),s=a("fXoL");const r=[{path:"",component:(()=>{class n{constructor(n){this.router=n,this.params={op:"DPV",fEsc:"0",pIni:-.6,pFim:0,pPas:.005,pPul:.01,tPul:.01,tPas:.025,tEqu:5},this.estimatedParams={sRat:Math.round(this.params.pPas/this.params.tPas*10)/10,nPnt:Math.round(Math.abs(this.params.pFim-this.params.pIni)/this.params.pPas),tEst:Math.abs(this.params.pFim-this.params.pIni)/(this.params.pPas/this.params.tPas)}}goToChart(){const n={state:{params:Object.assign(Object.assign({},this.params),this.estimatedParams)}};this.router.navigate(["/chart"],n)}}return n.\u0275fac=function(t){return new(t||n)(s.Kb(b.g))},n.\u0275cmp=s.Eb({type:n,selectors:[["app-voltametria"]],decls:62,vars:13,consts:[[3,"translucent"],["slot","end"],[3,"click"],["slot","icon-only","name","analytics-outline"],[3,"fullscreen"],[1,"item-padding"],["position","stacked"],[3,"ngModel","ngModelChange"],["value","0"],["value","5"],["value","10"],["value","20"],["value","50"]],template:function(n,t){1&n&&(s.Nb(0,"ion-header",0),s.Nb(1,"ion-toolbar"),s.Nb(2,"ion-buttons",1),s.Nb(3,"ion-button",2),s.Ub("click",function(){return t.goToChart()}),s.Lb(4,"ion-icon",3),s.Mb(),s.Mb(),s.Nb(5,"ion-title"),s.fc(6," An\xe1lise "),s.Mb(),s.Mb(),s.Mb(),s.Nb(7,"ion-content",4),s.Nb(8,"ion-item",5),s.Nb(9,"ion-label",6),s.fc(10,"Potencial Inicial (V)"),s.Mb(),s.Nb(11,"ion-input",7),s.Ub("ngModelChange",function(n){return t.params.pIni=n}),s.Mb(),s.Mb(),s.Nb(12,"ion-item",5),s.Nb(13,"ion-label",6),s.fc(14,"Potencial Final (V)"),s.Mb(),s.Nb(15,"ion-input",7),s.Ub("ngModelChange",function(n){return t.params.pFim=n}),s.Mb(),s.Mb(),s.Nb(16,"ion-item",5),s.Nb(17,"ion-label",6),s.fc(18,"Potencial do passo (V)"),s.Mb(),s.Nb(19,"ion-input",7),s.Ub("ngModelChange",function(n){return t.params.pPas=n}),s.Mb(),s.Mb(),s.Nb(20,"ion-item",5),s.Nb(21,"ion-label",6),s.fc(22,"Tempo do passo (s)"),s.Mb(),s.Nb(23,"ion-input",7),s.Ub("ngModelChange",function(n){return t.params.tPas=n}),s.Mb(),s.Mb(),s.Nb(24,"ion-item",5),s.Nb(25,"ion-label",6),s.fc(26,"Potencial do pulso (V)"),s.Mb(),s.Nb(27,"ion-input",7),s.Ub("ngModelChange",function(n){return t.params.pPul=n}),s.Mb(),s.Mb(),s.Nb(28,"ion-item",5),s.Nb(29,"ion-label",6),s.fc(30,"Tempo do pulso (s)"),s.Mb(),s.Nb(31,"ion-input",7),s.Ub("ngModelChange",function(n){return t.params.tPul=n}),s.Mb(),s.Mb(),s.Nb(32,"ion-item",5),s.Nb(33,"ion-label",6),s.fc(34,"Tempo de equil\xedbrio (s)"),s.Mb(),s.Nb(35,"ion-input",7),s.Ub("ngModelChange",function(n){return t.params.tEqu=n}),s.Mb(),s.Mb(),s.Nb(36,"ion-item",5),s.Nb(37,"ion-label",6),s.fc(38,"Int. Corrent"),s.Mb(),s.Nb(39,"ion-select",7),s.Ub("ngModelChange",function(n){return t.params.fEsc=n}),s.Nb(40,"ion-select-option",8),s.fc(41,"Auto"),s.Mb(),s.Nb(42,"ion-select-option",9),s.fc(43,"+/- 5uA"),s.Mb(),s.Nb(44,"ion-select-option",10),s.fc(45,"+/- 10uA"),s.Mb(),s.Nb(46,"ion-select-option",11),s.fc(47,"+/- 20uA"),s.Mb(),s.Nb(48,"ion-select-option",12),s.fc(49,"+/- 50uA"),s.Mb(),s.Mb(),s.Mb(),s.Nb(50,"ion-item",5),s.Nb(51,"ion-label",6),s.fc(52,"SRate (V/s)"),s.Mb(),s.Nb(53,"ion-input",7),s.Ub("ngModelChange",function(n){return t.estimatedParams.sRat=n}),s.Mb(),s.Mb(),s.Nb(54,"ion-item",5),s.Nb(55,"ion-label",6),s.fc(56,"Tempo estimado (s)"),s.Mb(),s.Nb(57,"ion-input",7),s.Ub("ngModelChange",function(n){return t.estimatedParams.tEst=n}),s.Mb(),s.Mb(),s.Nb(58,"ion-item",5),s.Nb(59,"ion-label",6),s.fc(60,"N\xfamero de Pontos"),s.Mb(),s.Nb(61,"ion-input",7),s.Ub("ngModelChange",function(n){return t.estimatedParams.nPnt=n}),s.Mb(),s.Mb(),s.Mb()),2&n&&(s.Yb("translucent",!0),s.zb(7),s.Yb("fullscreen",!0),s.zb(4),s.Yb("ngModel",t.params.pIni),s.zb(4),s.Yb("ngModel",t.params.pFim),s.zb(4),s.Yb("ngModel",t.params.pPas),s.zb(4),s.Yb("ngModel",t.params.tPas),s.zb(4),s.Yb("ngModel",t.params.pPul),s.zb(4),s.Yb("ngModel",t.params.tPul),s.zb(4),s.Yb("ngModel",t.params.tEqu),s.zb(4),s.Yb("ngModel",t.params.fEsc),s.zb(14),s.Yb("ngModel",t.estimatedParams.sRat),s.zb(4),s.Yb("ngModel",t.estimatedParams.tEst),s.zb(4),s.Yb("ngModel",t.estimatedParams.nPnt))},directives:[i.i,i.v,i.e,i.d,i.j,i.u,i.g,i.l,i.m,i.k,i.z,o.d,o.e,i.p,i.y,i.q],styles:[""]}),n})()}];let l=(()=>{class n{}return n.\u0275mod=s.Ib({type:n}),n.\u0275inj=s.Hb({factory:function(t){return new(t||n)},imports:[[b.i.forChild(r)],b.i]}),n})(),p=(()=>{class n{}return n.\u0275mod=s.Ib({type:n}),n.\u0275inj=s.Hb({factory:function(t){return new(t||n)},imports:[[e.b,o.a,i.w,l]]}),n})()}}]);