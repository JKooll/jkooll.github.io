webpackJsonp([6],{

/***/ 309:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewPostModule", function() { return NewPostModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__new_post__ = __webpack_require__(317);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var NewPostModule = /** @class */ (function () {
    function NewPostModule() {
    }
    NewPostModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__new_post__["a" /* NewPostPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__new_post__["a" /* NewPostPage */]),
            ],
        })
    ], NewPostModule);
    return NewPostModule;
}());

//# sourceMappingURL=new-post.module.js.map

/***/ }),

/***/ 317:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewPostPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_config__ = __webpack_require__(102);
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
 * Generated class for the NewPostPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var NewPostPage = /** @class */ (function () {
    function NewPostPage(navCtrl, navParams, geolocation) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.geolocation = geolocation;
        this.displayStatus = 'displayForm';
        this.visibleRange = 0;
        this.body = '';
        this.address = '66/2 Falcon Way, Tweed Heads South NSW 2486';
        this.createPostUrl = __WEBPACK_IMPORTED_MODULE_3__app_app_config__["a" /* AppConfig */].getUrl() + '/api/post/create';
        this.postFail = false;
        this.postFailMsg = '';
        this.latitude = navParams.get('latitude');
        this.longitude = navParams.get('longitude');
    }
    NewPostPage.prototype.ionViewDidLoad = function () {
        // console.log(this.latitude, this.longitude);
    };
    NewPostPage.prototype.onPostButtonClick = function () {
        if (!this.latitude || !this.longitude) {
            this.postFailMsg = 'Not get position information!';
            this.postFail = true;
            return;
        }
        if (this.body.trim() == "") {
            this.postFailMsg = 'Please type post content!';
            this.postFail = true;
            return;
        }
        this.postFail = false;
        // this.navCtrl.pop();
        this.displayStatus = 'displayResult';
    };
    NewPostPage.prototype.initForm = function () {
        this.visibleRange = 10;
        this.body = '';
    };
    NewPostPage.prototype.startNew = function () {
        this.initForm();
        this.displayStatus = "displayForm";
    };
    NewPostPage.prototype.backHome = function () {
        this.navCtrl.popToRoot();
    };
    NewPostPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-new-post',template:/*ion-inline-start:"D:\AppServ\www\scu\footprint_prototype\src\pages\new-post\new-post.html"*/'<!--\n  Generated template for the NewPostPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>New Post</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <div [ngSwitch]="displayStatus">\n    <div *ngSwitchCase="\'displayForm\'">\n      <ion-list>\n\n        <ion-item no-lines>\n          <div style="text-align: center;">\n            <img src="./assets/imgs/avatar.jpg" alt="avatar" class="avatar">\n          </div>\n\n          <div *ngIf="postFail" style="color: red;">\n            {{ postFailMsg }}\n          </div>\n          \n          <div>\n            <ion-icon name="pin"></ion-icon>\n            {{ address }}\n            <p>\n              Visible Range: {{ visibleRange }} m\n            </p>\n          </div>\n        </ion-item>\n\n        <ion-item no-lines>\n          <ion-range min="10" max="1000" [(ngModel)]="visibleRange">\n            <ion-label range-left>10 m</ion-label>\n            <ion-label range-right>1000 m</ion-label>\n          </ion-range>\n        </ion-item>\n\n        <ion-item>\n          <ion-label floating>Put your text in here...</ion-label>\n          <ion-textarea [(ngModel)]="body"></ion-textarea>\n        </ion-item>\n\n        <ion-item no-lines>\n          <div style="background: gray; width: 80px; height: 80px; padding: 5px; color: white;">\n            <span style="font-size: 20px;">Photo</span>\n            <p style="font-size: 43px;">\n              <ion-icon name="add"></ion-icon>\n            </p>\n          </div>\n        </ion-item>\n\n        <button ion-button full (click)="onPostButtonClick()">Post</button>\n      </ion-list> \n    </div>\n\n    <div *ngSwitchCase="\'displayResult\'">\n      <ion-list style="text-align: center; margin: 50px;">\n        <h1>\n          Post Success!!!\n        </h1>\n\n        <button ion-button (click)="startNew()">Start New</button>\n        <button ion-button (click)="backHome()">Back Home</button>\n      </ion-list>\n    </div>\n    \n  </div>\n\n</ion-content>\n'/*ion-inline-end:"D:\AppServ\www\scu\footprint_prototype\src\pages\new-post\new-post.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__["a" /* Geolocation */]])
    ], NewPostPage);
    return NewPostPage;
}());

//# sourceMappingURL=new-post.js.map

/***/ })

});
//# sourceMappingURL=6.js.map