(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{"13ld":function(l,n,t){"use strict";t.r(n);var u=t("CcnG"),e=function(){},o=t("ZYCi"),c=t("Ip0R"),i=t("6FXh"),r=t("psW0"),s=t("t9fZ"),a=(t("dJ3e"),function(l,n,t,u){return new(t||(t=Promise))(function(e,o){function c(l){try{r(u.next(l))}catch(l){o(l)}}function i(l){try{r(u.throw(l))}catch(l){o(l)}}function r(l){l.done?e(l.value):new t(function(n){n(l.value)}).then(c,i)}r((u=u.apply(l,n||[])).next())})}),d=function(){function l(l,n){this.state=l,this.api=n,this.currentBlocks=[],this.loading=!0,this.displayedBlocks=[],this.displayBlockNum=5}return l.prototype.ngOnInit=function(){var l=this;this.initBlock(),this.state.startStateUpdate(),this.state.topBlockHash.pipe(Object(r.a)(function(n){return l.api.getBlockInfo(n)})).subscribe(function(n){l.currentBlocks.length>0&&l.currentBlocks[0].height>=n.height||(l.currentBlocks.unshift(n),l.displayedBlocks=l.currentBlocks.slice(l.currentBlockIndex-l.displayBlockNum,l.currentBlockIndex))})},l.prototype.ngOnDestroy=function(){this.state.stopStateUpdate()},l.prototype.initBlock=function(){var l=this;this.state.topBlockHash.pipe(Object(s.a)(1)).subscribe(function(n){console.log("Init explorer with block "+n),l.topBlock=n,l.getBlocks(l.topBlock).then(function(l){return console.log("Blocks loaded")}).catch(function(l){return console.error(l)}),l.currentBlockIndex=l.displayBlockNum})},Object.defineProperty(l.prototype,"isMoreNext",{get:function(){return this.currentBlockIndex>this.displayBlockNum},enumerable:!0,configurable:!0}),Object.defineProperty(l.prototype,"isMorePrev",{get:function(){return this.currentBlocks[this.currentBlocks.length-1].height>0},enumerable:!0,configurable:!0}),l.prototype.getPrev=function(){var l=this.currentBlocks.length;if(this.isMorePrev){this.currentBlockIndex+=this.displayBlockNum;var n=this.currentBlockIndex-l;n<=this.displayBlockNum&&n>0?this.getBlocks(this.currentBlocks[l-1].previousblockhash,n).catch(function(l){return console.error(l)}):this.displayedBlocks=this.currentBlocks.slice(this.currentBlockIndex-this.displayBlockNum,this.currentBlockIndex)}},l.prototype.getNext=function(){this.isMoreNext&&(this.currentBlockIndex-=this.displayBlockNum,this.displayedBlocks=this.currentBlocks.slice(this.currentBlockIndex-this.displayBlockNum,this.currentBlockIndex))},l.prototype.getBlockHash=function(l){var n=this.currentBlocks.find(function(n){return n.height===l});if(n)return n.hash;console.error("No block found for height "+l)},l.prototype.getBlocks=function(l,n){return void 0===n&&(n=5),a(this,void 0,void 0,function(){var t=this;return function(l,n){var t,u,e,o,c={label:0,sent:function(){if(1&e[0])throw e[1];return e[1]},trys:[],ops:[]};return o={next:i(0),throw:i(1),return:i(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function i(o){return function(i){return function(o){if(t)throw new TypeError("Generator is already executing.");for(;c;)try{if(t=1,u&&(e=u[2&o[0]?"return":o[0]?"throw":"next"])&&!(e=e.call(u,o[1])).done)return e;switch(u=0,e&&(o=[0,e.value]),o[0]){case 0:case 1:e=o;break;case 4:return c.label++,{value:o[1],done:!1};case 5:c.label++,u=o[1],o=[0];continue;case 7:o=c.ops.pop(),c.trys.pop();continue;default:if(!(e=(e=c.trys).length>0&&e[e.length-1])&&(6===o[0]||2===o[0])){c=0;continue}if(3===o[0]&&(!e||o[1]>e[0]&&o[1]<e[3])){c.label=o[1];break}if(6===o[0]&&c.label<e[1]){c.label=e[1],e=o;break}if(e&&c.label<e[2]){c.label=e[2],c.ops.push(o);break}e[2]&&c.ops.pop(),c.trys.pop();continue}o=n.call(l,c)}catch(l){o=[6,l],u=0}finally{t=e=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,i])}}}(this,function(u){return n>0?(this.loading=!0,this.api.getBlockInfo(l).subscribe(function(l){t.displayedBlocks.push(l),t.displayedBlocks.length>t.displayBlockNum&&t.displayedBlocks.splice(0,1),t.currentBlocks.push(l),l.previousblockhash&&t.getBlocks(l.previousblockhash,n-1).catch(function(l){console.error(l),t.loading=!1})})):this.loading=!1,[2]})})},l}(),p=t("4J96"),h=t("qc5V"),f=u["\u0275crt"]({encapsulation:0,styles:[[""]],data:{}});function k(l){return u["\u0275vid"](0,[(l()(),u["\u0275eld"](0,0,null,null,21,"tr",[["class","text-center"]],null,null,null,null,null)),(l()(),u["\u0275eld"](1,0,null,null,4,"th",[["scope","row"]],null,null,null,null,null)),(l()(),u["\u0275eld"](2,0,null,null,3,"a",[],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(l,n,t){var e=!0;return"click"===n&&(e=!1!==u["\u0275nov"](l,3).onClick(t.button,t.ctrlKey,t.metaKey,t.shiftKey)&&e),e},null,null)),u["\u0275did"](3,671744,null,0,o.m,[o.k,o.a,c.LocationStrategy],{routerLink:[0,"routerLink"]},null),u["\u0275pad"](4,2),(l()(),u["\u0275ted"](5,null,[""," "])),(l()(),u["\u0275eld"](6,0,null,null,9,"td",[],null,null,null,null,null)),(l()(),u["\u0275eld"](7,0,null,null,3,"span",[["class","text-nowrap"]],null,null,null,null,null)),(l()(),u["\u0275ted"](8,null,[" "," "])),u["\u0275ppd"](9,1),u["\u0275ppd"](10,2),(l()(),u["\u0275eld"](11,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),u["\u0275eld"](12,0,null,null,3,"span",[],null,null,null,null,null)),(l()(),u["\u0275ted"](13,null,["",""])),u["\u0275ppd"](14,1),u["\u0275ppd"](15,2),(l()(),u["\u0275eld"](16,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),u["\u0275ted"](17,null,["",""])),(l()(),u["\u0275eld"](18,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),u["\u0275ted"](19,null,["",""])),(l()(),u["\u0275eld"](20,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),u["\u0275ted"](21,null,["",""]))],function(l,n){l(n,3,0,l(n,4,0,"/blocks",n.component.getBlockHash(n.context.$implicit.height)))},function(l,n){l(n,2,0,u["\u0275nov"](n,3).target,u["\u0275nov"](n,3).href),l(n,5,0,n.context.$implicit.height),l(n,8,0,u["\u0275unv"](n,8,0,l(n,10,0,u["\u0275nov"](n.parent,0),u["\u0275unv"](n,8,0,l(n,9,0,u["\u0275nov"](n.parent,1),n.context.$implicit.time)),"MMM dd, yyyy "))),l(n,13,0,u["\u0275unv"](n,13,0,l(n,15,0,u["\u0275nov"](n.parent,0),u["\u0275unv"](n,13,0,l(n,14,0,u["\u0275nov"](n.parent,1),n.context.$implicit.time))," hh:mm a"))),l(n,17,0,n.context.$implicit.tx.length),l(n,19,0,n.context.$implicit.size),l(n,21,0,n.context.$implicit.confirmations)})}function m(l){return u["\u0275vid"](0,[u["\u0275pid"](0,c.DatePipe,[u.LOCALE_ID]),u["\u0275pid"](0,i.a,[]),(l()(),u["\u0275eld"](2,0,null,null,24,"div",[["class","container"],["style","margin-top: 100px"]],null,null,null,null,null)),(l()(),u["\u0275eld"](3,0,null,null,1,"h3",[["class","text-center m-4"]],null,null,null,null,null)),(l()(),u["\u0275ted"](-1,null,["Latest Blocks"])),(l()(),u["\u0275eld"](5,0,null,null,4,"div",[["class","text-right col-lg-12 col-md-12"]],null,null,null,null,null)),(l()(),u["\u0275eld"](6,0,null,null,1,"button",[["class","btn btn-primary btn-lg m-2"],["type","button"]],[[8,"disabled",0]],[[null,"click"]],function(l,n,t){var u=!0;return"click"===n&&(u=!1!==l.component.getPrev()&&u),u},null,null)),(l()(),u["\u0275eld"](7,0,null,null,0,"i",[["class","fa fa-backward"]],null,null,null,null,null)),(l()(),u["\u0275eld"](8,0,null,null,1,"button",[["class","btn btn-primary btn-lg m-2"],["type","button"]],[[8,"disabled",0]],[[null,"click"]],function(l,n,t){var u=!0;return"click"===n&&(u=!1!==l.component.getNext()&&u),u},null,null)),(l()(),u["\u0275eld"](9,0,null,null,0,"i",[["class","fa fa-forward"]],null,null,null,null,null)),(l()(),u["\u0275eld"](10,0,null,null,16,"div",[["class","table-responsive col-lg-12 col-md-12 "]],null,null,null,null,null)),(l()(),u["\u0275eld"](11,0,null,null,15,"table",[["class","table"]],null,null,null,null,null)),(l()(),u["\u0275eld"](12,0,null,null,11,"thead",[],null,null,null,null,null)),(l()(),u["\u0275eld"](13,0,null,null,10,"tr",[["class","text-center"]],null,null,null,null,null)),(l()(),u["\u0275eld"](14,0,null,null,1,"th",[["scope","col"]],null,null,null,null,null)),(l()(),u["\u0275ted"](-1,null,["Height"])),(l()(),u["\u0275eld"](16,0,null,null,1,"th",[["class","text-nowrap"],["scope","col"]],null,null,null,null,null)),(l()(),u["\u0275ted"](-1,null,["Mined On"])),(l()(),u["\u0275eld"](18,0,null,null,1,"th",[["scope","col"]],null,null,null,null,null)),(l()(),u["\u0275ted"](-1,null,["Transactions"])),(l()(),u["\u0275eld"](20,0,null,null,1,"th",[["scope","col"]],null,null,null,null,null)),(l()(),u["\u0275ted"](-1,null,["Size"])),(l()(),u["\u0275eld"](22,0,null,null,1,"th",[["scope","col"]],null,null,null,null,null)),(l()(),u["\u0275ted"](-1,null,["Confirmations"])),(l()(),u["\u0275eld"](24,0,null,null,2,"tbody",[],null,null,null,null,null)),(l()(),u["\u0275and"](16777216,null,null,1,null,k)),u["\u0275did"](26,802816,null,0,c.NgForOf,[u.ViewContainerRef,u.TemplateRef,u.IterableDiffers],{ngForOf:[0,"ngForOf"]},null)],function(l,n){l(n,26,0,n.component.displayedBlocks)},function(l,n){var t=n.component;l(n,6,0,t.loading||!t.isMorePrev),l(n,8,0,t.loading||!t.isMoreNext)})}var g=u["\u0275ccf"]("app-latest-blocks",d,function(l){return u["\u0275vid"](0,[(l()(),u["\u0275eld"](0,0,null,null,1,"app-latest-blocks",[],null,null,null,m,f)),u["\u0275did"](1,245760,null,0,d,[p.a,h.a],null,null)],function(l,n){l(n,1,0)},null)},{},{},[]),y=t("t/Na"),b=t("gZGI"),B=t("OiFK"),v=function(){},x=t("pKmL");t.d(n,"LatestBlocksModuleNgFactory",function(){return N});var N=u["\u0275cmf"](e,[],function(l){return u["\u0275mod"]([u["\u0275mpd"](512,u.ComponentFactoryResolver,u["\u0275CodegenComponentFactoryResolver"],[[8,[g]],[3,u.ComponentFactoryResolver],u.NgModuleRef]),u["\u0275mpd"](4608,c.NgLocalization,c.NgLocaleLocalization,[u.LOCALE_ID,[2,c["\u0275angular_packages_common_common_a"]]]),u["\u0275mpd"](4608,y.h,y.n,[c.DOCUMENT,u.PLATFORM_ID,y.l]),u["\u0275mpd"](4608,y.o,y.o,[y.h,y.m]),u["\u0275mpd"](5120,y.a,function(l){return[l]},[y.o]),u["\u0275mpd"](4608,y.k,y.k,[]),u["\u0275mpd"](6144,y.i,null,[y.k]),u["\u0275mpd"](4608,y.g,y.g,[y.i]),u["\u0275mpd"](6144,y.b,null,[y.g]),u["\u0275mpd"](4608,y.f,y.j,[y.b,u.Injector]),u["\u0275mpd"](4608,y.c,y.c,[y.f]),u["\u0275mpd"](4608,b.a,b.a,[]),u["\u0275mpd"](4608,h.a,h.a,[y.c,b.a]),u["\u0275mpd"](4608,p.a,p.a,[h.a]),u["\u0275mpd"](4608,B.a,B.a,[]),u["\u0275mpd"](1073742336,c.CommonModule,c.CommonModule,[]),u["\u0275mpd"](1073742336,o.n,o.n,[[2,o.s],[2,o.k]]),u["\u0275mpd"](1073742336,v,v,[]),u["\u0275mpd"](1073742336,y.e,y.e,[]),u["\u0275mpd"](1073742336,y.d,y.d,[]),u["\u0275mpd"](1073742336,x.a,x.a,[]),u["\u0275mpd"](1073742336,e,e,[]),u["\u0275mpd"](1024,o.i,function(){return[[{path:"",component:d}]]},[]),u["\u0275mpd"](256,y.l,"XSRF-TOKEN",[]),u["\u0275mpd"](256,y.m,"X-XSRF-TOKEN",[])])})},"6FXh":function(l,n,t){"use strict";t.d(n,"a",function(){return u});var u=function(){function l(){}return l.prototype.transform=function(l,n){return l?new Date(l):null},l}()}}]);