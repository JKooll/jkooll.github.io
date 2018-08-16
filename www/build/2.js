webpackJsonp([2],{

/***/ 313:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsNotificationPageModule", function() { return SettingsNotificationPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__settings_notification__ = __webpack_require__(321);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SettingsNotificationPageModule = /** @class */ (function () {
    function SettingsNotificationPageModule() {
    }
    SettingsNotificationPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__settings_notification__["a" /* SettingsNotificationPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__settings_notification__["a" /* SettingsNotificationPage */]),
            ],
        })
    ], SettingsNotificationPageModule);
    return SettingsNotificationPageModule;
}());

//# sourceMappingURL=settings-notification.module.js.map

/***/ }),

/***/ 321:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsNotificationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the SettingsNotificationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SettingsNotificationPage = /** @class */ (function () {
    function SettingsNotificationPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    SettingsNotificationPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SettingsNotificationPage');
    };
    SettingsNotificationPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-settings-notification',template:/*ion-inline-start:"D:\AppServ\www\scu\footprint_prototype\src\pages\settings-notification\settings-notification.html"*/'<!--\n  Generated template for the SettingsNotificationPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Notification</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-card>\n    <ion-card-header>\n      When FootPrint is close\n    </ion-card-header>\n\n    <ion-card-content>\n      <ion-list>\n        <ion-item>\n          <ion-label>New Comment Notification</ion-label>\n          <ion-toggle checked="true" color="secondary"></ion-toggle>\n        </ion-item>\n\n        <ion-item>\n          <ion-label>Near Post Notification</ion-label>\n          <ion-toggle checked="true" color="secondary"></ion-toggle>\n        </ion-item>\n      </ion-list>\n    </ion-card-content>\n  </ion-card>\n  \n  <ion-card>\n    <ion-card-header>\n      When FootPrint is open\n    </ion-card-header>\n\n    <ion-card-content>\n      <ion-list>\n        <ion-item>\n          <ion-label>In-App Alert Sound</ion-label>\n          <ion-toggle checked="true" color="secondary"></ion-toggle>\n        </ion-item>\n\n        <ion-item>\n          <ion-label>Vibrate</ion-label>\n          <ion-toggle checked="false" color="secondary"></ion-toggle>\n        </ion-item>\n      </ion-list>\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n'/*ion-inline-end:"D:\AppServ\www\scu\footprint_prototype\src\pages\settings-notification\settings-notification.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], SettingsNotificationPage);
    return SettingsNotificationPage;
}());

//# sourceMappingURL=settings-notification.js.map

/***/ })

});
//# sourceMappingURL=2.js.map