webpackJsonp([4],{

/***/ 311:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsAccountAndPrivacyPageModule", function() { return SettingsAccountAndPrivacyPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__settings_account_and_privacy__ = __webpack_require__(319);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SettingsAccountAndPrivacyPageModule = /** @class */ (function () {
    function SettingsAccountAndPrivacyPageModule() {
    }
    SettingsAccountAndPrivacyPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__settings_account_and_privacy__["a" /* SettingsAccountAndPrivacyPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__settings_account_and_privacy__["a" /* SettingsAccountAndPrivacyPage */]),
            ],
        })
    ], SettingsAccountAndPrivacyPageModule);
    return SettingsAccountAndPrivacyPageModule;
}());

//# sourceMappingURL=settings-account-and-privacy.module.js.map

/***/ }),

/***/ 319:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsAccountAndPrivacyPage; });
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
 * Generated class for the SettingsAccountAndPrivacyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SettingsAccountAndPrivacyPage = /** @class */ (function () {
    function SettingsAccountAndPrivacyPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.UserName = 'Tom';
    }
    SettingsAccountAndPrivacyPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SettingsAccountAndPrivacyPage');
    };
    SettingsAccountAndPrivacyPage.prototype.onPasswordButtonClick = function () {
        this.navCtrl.push('SettingsAccountPasswordPage');
    };
    SettingsAccountAndPrivacyPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-settings-account-and-privacy',template:/*ion-inline-start:"D:\AppServ\www\scu\footprint_prototype\src\pages\settings-account-and-privacy\settings-account-and-privacy.html"*/'<!--\n  Generated template for the SettingsAccountAndPrivacyPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>settings-account-and-privacy</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-card>\n    <ion-list>\n      <ion-item>\n        <div item-start>\n          Account\n        </div>\n\n        <div item-end>\n          {{ UserName }}\n        </div>\n      </ion-item>\n    </ion-list>\n  </ion-card>\n\n  <ion-card>\n    <ion-list>\n      <button ion-item (click)="onPasswordButtonClick()">\n        <div item-start>\n          Password\n        </div>\n\n        <ion-icon name="arrow-forward" item-end></ion-icon>\n      </button>\n    </ion-list>\n  </ion-card>\n</ion-content>\n'/*ion-inline-end:"D:\AppServ\www\scu\footprint_prototype\src\pages\settings-account-and-privacy\settings-account-and-privacy.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], SettingsAccountAndPrivacyPage);
    return SettingsAccountAndPrivacyPage;
}());

//# sourceMappingURL=settings-account-and-privacy.js.map

/***/ })

});
//# sourceMappingURL=4.js.map