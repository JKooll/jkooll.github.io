webpackJsonp([8],{

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppConfig; });
var AppConfig = /** @class */ (function () {
    function AppConfig() {
    }
    AppConfig.getUrl = function () {
        switch (AppConfig.APP_ENV) {
            case 'dev':
                return AppConfig.getDevUrl();
            case 'product':
                return AppConfig.getProUrl();
        }
    };
    AppConfig.getDevUrl = function () {
        return 'http://localhost:8300/index.php';
    };
    AppConfig.getProUrl = function () {
        return 'http://18.191.214.24/index.php';
    };
    AppConfig.setApiAuthParams = function (data) {
        AppConfig.API_TOKEN_TYPE = data.token_type;
        AppConfig.API_EXPIRES_IN = data.expires_in;
        AppConfig.API_ACCESS_TOKEN = data.access_token;
        AppConfig.API_REFRESH_TOKEN = data.refresh_token;
    };
    AppConfig.getApiAuthorization = function () {
        if (!AppConfig.API_TOKEN_TYPE || !AppConfig.API_ACCESS_TOKEN) {
            return null;
        }
        return AppConfig.API_TOKEN_TYPE + " " + AppConfig.API_ACCESS_TOKEN;
    };
    AppConfig.loadUserSettings = function () {
        return {
            range: 500
        };
    };
    AppConfig.saveUserSettings = function (settings) {
    };
    AppConfig.APP_ENV = 'dev';
    AppConfig.API_TOKEN_TYPE = '';
    AppConfig.API_EXPIRES_IN = '';
    AppConfig.API_ACCESS_TOKEN = '';
    AppConfig.API_REFRESH_TOKEN = '';
    return AppConfig;
}());

//# sourceMappingURL=app.config.js.map

/***/ }),

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__notification_notification__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pass_pass__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__user_user__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__map_map__ = __webpack_require__(164);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var TabsPage = /** @class */ (function () {
    function TabsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.tabMap = __WEBPACK_IMPORTED_MODULE_6__map_map__["a" /* MapPage */];
        this.tabHome = __WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */];
        this.tabNotification = __WEBPACK_IMPORTED_MODULE_3__notification_notification__["a" /* NotificationPage */];
        this.tabPass = __WEBPACK_IMPORTED_MODULE_4__pass_pass__["a" /* PassPage */];
        this.tabUser = __WEBPACK_IMPORTED_MODULE_5__user_user__["a" /* UserPage */];
        this.displayWelcome = true;
        if (navParams.get('displayWelcome') === false) {
            this.displayWelcome = false;
        }
        if (this.displayWelcome) {
            navCtrl.push('WelcomePage');
        }
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"D:\AppServ\www\scu\footprint_prototype\src\pages\tabs\tabs.html"*/'<ion-tabs>\n  <ion-tab [root]="tabMap" tabTitle="Home" tabIcon="home"></ion-tab>\n  <!-- <ion-tab [root]="tabHome" tabTitle="Home" tabIcon="home"></ion-tab> -->\n  <ion-tab [root]="tabPass" tabTitle="Pass" tabIcon="walk"></ion-tab>\n  <ion-tab [root]="tabNotification" tabTitle="notification" tabIcon="notifications"></ion-tab>\n  <ion-tab [root]="tabUser" tabTitle="User" tabIcon="person"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"D:\AppServ\www\scu\footprint_prototype\src\pages\tabs\tabs.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 114:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 114;

/***/ }),

/***/ 155:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/login/login.module": [
		308,
		7
	],
	"../pages/new-post/new-post.module": [
		309,
		6
	],
	"../pages/register/register.module": [
		310,
		5
	],
	"../pages/settings-account-and-privacy/settings-account-and-privacy.module": [
		311,
		4
	],
	"../pages/settings-account-password/settings-account-password.module": [
		312,
		3
	],
	"../pages/settings-notification/settings-notification.module": [
		313,
		2
	],
	"../pages/settings/settings.module": [
		314,
		1
	],
	"../pages/welcome/welcome.module": [
		315,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 155;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 156:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__ = __webpack_require__(104);
// author: JKol
// wesite: https://jkooll.github.io  
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, geolocation) {
        this.navCtrl = navCtrl;
        this.geolocation = geolocation;
        this.currentLat = -28.198025;
        this.currentLon = 153.535773;
        this.i = 0;
        this.posts = [
            {
                "id": 1,
                "user_id": 1,
                "latitude": -28.194694,
                "longitude": 153.533340,
                "visuable_range": 500,
                "is_like": 0,
                "total_likes_count": 45,
                "comments_count": 3,
                "body": 'really like a new game, I\'ll stop playing it mid-way through because I don\'t want it to be over. But then I move onto another great game and never finish the original.',
                "create_at": '2018-07-15 05:57:41',
                "updated_at": '2018-07-15 05:57:41',
            },
            {
                "id": 2,
                "user_id": 1,
                "latitude": -28.196387,
                "longitude": 153.539337,
                "visuable_range": 500,
                "is_like": 0,
                "total_likes_count": 256,
                "comments_count": 13,
                "body": 'Site News: Popular Posts for This Week (07.20.2018): Popular posts from',
                "create_at": '2018-07-15 05:57:41',
                "updated_at": '2018-07-15 05:57:41',
            },
            {
                "id": 3,
                "user_id": 1,
                "latitude": -28.201323,
                "longitude": 153.535711,
                "visuable_range": 500,
                "is_like": 0,
                "total_likes_count": 456,
                "comments_count": 78,
                "body": 'We’re honored to sponsor today’s #DC4D event on #API’s. Make sure you have your ticket ready, it all starts in less then an hour!!!',
                "create_at": '2018-07-15 05:57:41',
                "updated_at": '2018-07-15 05:57:41',
            },
            {
                "id": 4,
                "user_id": 1,
                "latitude": -28.199857,
                "longitude": 153.537996,
                "visuable_range": 500,
                "is_like": 0,
                "total_likes_count": 256,
                "comments_count": 4,
                "body": 'Some community collaboration with the awesome folks of',
                "create_at": '2018-07-15 05:57:41',
                "updated_at": '2018-07-15 05:57:41',
            }
        ];
        this.markerType = 'user';
        this.currentPost = null;
        this.postAddress = '66/2 Falcon Way, Tweed Heads South NSW 2486';
        this.curPostTime = '06:22';
        // user position marker
        this.userMarker = null;
        this.app = this;
    }
    HomePage.prototype.ionViewDidLoad = function () {
        this.loadMap();
    };
    HomePage.prototype.loadMap = function () {
        var location = new google.maps.LatLng(this.currentLat, this.currentLon);
        var options = {
            center: location,
            zoom: 15,
            zoomControl: false,
            mapTypeControl: false,
            scaleControl: false,
            streetViewControl: false,
            rotateControl: false,
            fullscreenControl: false,
        };
        this.map = new google.maps.Map(this.mapRef.nativeElement, options);
        this.updateMap();
    };
    HomePage.prototype.addMarker = function (position, map, icon) {
        if (icon) {
            return new google.maps.Marker({
                position: position,
                map: map,
                icon: icon,
            });
        }
        return new google.maps.Marker({
            position: position,
            map: map
        });
    };
    HomePage.prototype.updateMap = function () {
        // update user current location
        this.updateCurrentLocation(this.currentLat, this.currentLon);
        // update near post
        this.updateNearPosts();
    };
    HomePage.prototype.updateCurrentLocation = function (latitude, longitude) {
        if (this.userMarker) {
            this.userMarker.setMap(null);
        }
        this.userMarker = this.addMarker(new google.maps.LatLng(latitude, longitude), this.map, './assets/imgs/focus.png');
    };
    HomePage.prototype.openNewPostPage = function () {
        this.navCtrl.push("NewPostPage", { latitude: this.currentLat, longitude: this.currentLon });
    };
    HomePage.prototype.updateNearPosts = function () {
        var _this = this;
        for (var i = 0; i < this.posts.length; i++) {
            var post = this.posts[i];
            var lat = post.latitude;
            var lon = post.longitude;
            var postMaker = this.addMarker(new google.maps.LatLng(lat, lon), this.map);
            if (postMaker) {
                postMaker.addListener('click', (function (post) {
                    _this.currentPost = post;
                    console.log(post);
                    // this.getGeoName(post.latitude, post.longitude);
                    // this.curPostTime = moment(post.created_at).format('HH:mm');
                    // this.displayPost(post);
                }).bind(this, post));
            }
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('map'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], HomePage.prototype, "mapRef", void 0);
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"D:\AppServ\www\scu\footprint_prototype\src\pages\home\home.html"*/'<ion-header>\n  <ion-navbar class="page-title-center">\n    <ion-title>Home</ion-title>\n\n    <ion-buttons end>\n    <button ion-button icon-only clear (click)="openNewPostPage()">\n        <ion-icon name="paper-plane"></ion-icon>\n      </button>\n    </ion-buttons>\n    \n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n  <div id="floating-panel">\n    <button ion-button>\n      <ion-icon name="sync"></ion-icon>\n    </button>\n  </div>\n\n  <div #map id="map"></div>\n\n  <div id="post-area" *ngIf="currentPost">\n    <post \n      [post]="currentPost"\n      [postAddress]="postAddress"\n      [curPostTime]="curPostTime"></post>\n  </div>\n  \n</ion-content>\n'/*ion-inline-end:"D:\AppServ\www\scu\footprint_prototype\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__["a" /* Geolocation */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 158:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__notification_detail_notification_detail__ = __webpack_require__(159);
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
 * Generated class for the NotificationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var NotificationPage = /** @class */ (function () {
    function NotificationPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    NotificationPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad NotificationPage');
    };
    NotificationPage.prototype.onViewButtonClick = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__notification_detail_notification_detail__["a" /* NotificationDetailPage */]);
    };
    NotificationPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-notification',template:/*ion-inline-start:"D:\AppServ\www\scu\footprint_prototype\src\pages\notification\notification.html"*/'<!--\n  Generated template for the NotificationPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar class="page-title-center">\n    <ion-title>Notification</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-list>\n    <ion-item>\n      <ion-thumbnail item-start>\n        <img src="./assets/imgs/avatar.jpg" alt="avatar">\n      </ion-thumbnail>\n      <h2>System Update Notification</h2>\n      <p>\n        System will be updated at this afternoon.\n      </p>\n      <button ion-button clear item-end (click)="onViewButtonClick()">View</button>\n    </ion-item>\n\n    <!-- <ion-item>\n      <ion-thumbnail item-start>\n        <img src="./assets/imgs/avatar.jpg" alt="avatar">\n      </ion-thumbnail>\n      <h2>New Comment</h2>\n      <p>\n        Sissi comments your post!\n      </p>\n      <button ion-button clear item-end>View</button>\n    </ion-item>\n\n    <ion-item>\n      <ion-thumbnail item-start>\n        <img src="./assets/imgs/avatar.jpg" alt="avatar">\n      </ion-thumbnail>\n      <h2>Near Post</h2>\n      <p>\n        A new post was borned nearby, try to find it!\n      </p>\n      <button ion-button clear item-end>View</button>\n    </ion-item>\n\n    <ion-item>\n      <ion-thumbnail item-start>\n        <img src="./assets/imgs/avatar.jpg" alt="avatar">\n      </ion-thumbnail>\n      <h2>System Update Notification</h2>\n      <p>\n        System will be updated at this afternoon.\n      </p>\n      <button ion-button clear item-end>View</button>\n    </ion-item> -->\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"D:\AppServ\www\scu\footprint_prototype\src\pages\notification\notification.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], NotificationPage);
    return NotificationPage;
}());

//# sourceMappingURL=notification.js.map

/***/ }),

/***/ 159:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificationDetailPage; });
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
 * Generated class for the NotificationDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var NotificationDetailPage = /** @class */ (function () {
    function NotificationDetailPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    NotificationDetailPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad NotificationDetailPage');
    };
    NotificationDetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-notification-detail',template:/*ion-inline-start:"D:\AppServ\www\scu\footprint_prototype\src\pages\notification-detail\notification-detail.html"*/'<!--\n  Generated template for the NotificationDetailPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>notification-detail</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-card>\n    <ion-list no-lines>\n      <ion-item>\n        <h3>Systme Update 1.1</h3>\n      </ion-item>\n      <ion-item>\n        Thanks you for use our application. We resolve some bugs in this version.\n      </ion-item>\n      <ion-item>\n        <ol>\n          <li>home page uncorrect format</li>\n        </ol>\n      </ion-item>\n    </ion-list>\n  </ion-card>\n</ion-content>\n'/*ion-inline-end:"D:\AppServ\www\scu\footprint_prototype\src\pages\notification-detail\notification-detail.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], NotificationDetailPage);
    return NotificationDetailPage;
}());

//# sourceMappingURL=notification-detail.js.map

/***/ }),

/***/ 160:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PassPage; });
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
 * Generated class for the PassPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PassPage = /** @class */ (function () {
    function PassPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.pass = 'myPost';
        this.postAddress = "Some place C";
        this.curPostTime = "09:41";
        this.posts = [
            {
                "id": 1,
                "user_id": 1,
                "latitude": -28.194694,
                "longitude": 153.533340,
                "visuable_range": 500,
                "is_like": 1,
                "total_likes_count": 45,
                "comments_count": 3,
                "body": 'I have this problem where if I really like a new game, I\'ll stop playing it mid-way through because I don\'t want it to be over. But then I move onto another great game and never finish the original.',
                "create_at": '2018-07-15 05:57:41',
                "updated_at": '2018-07-15 05:57:41',
            },
            {
                "id": 1,
                "user_id": 1,
                "latitude": -28.196387,
                "longitude": 153.539337,
                "visuable_range": 500,
                "is_like": 0,
                "total_likes_count": 256,
                "comments_count": 13,
                "body": 'I have this problem where if I really like a new game, I\'ll stop playing it mid-way through because I don\'t want it to be over. But then I move onto another great game and never finish the original.',
                "create_at": '2018-07-15 05:57:41',
                "updated_at": '2018-07-15 05:57:41',
            },
            {
                "id": 1,
                "user_id": 1,
                "latitude": -28.201323,
                "longitude": 153.535711,
                "visuable_range": 500,
                "is_like": 0,
                "total_likes_count": 456,
                "comments_count": 78,
                "body": 'I have this problem where if I really like a new game, I\'ll stop playing it mid-way through because I don\'t want it to be over. But then I move onto another great game and never finish the original.',
                "create_at": '2018-07-15 05:57:41',
                "updated_at": '2018-07-15 05:57:41',
            },
            {
                "id": 1,
                "user_id": 1,
                "latitude": -28.199857,
                "longitude": 153.537996,
                "visuable_range": 500,
                "is_like": 0,
                "total_likes_count": 256,
                "comments_count": 4,
                "body": 'I have this problem where if I really like a new game, I\'ll stop playing it mid-way through because I don\'t want it to be over. But then I move onto another great game and never finish the original.',
                "create_at": '2018-07-15 05:57:41',
                "updated_at": '2018-07-15 05:57:41',
            }
        ];
        this.currentPost = this.posts[0];
    }
    PassPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PassPage');
    };
    PassPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-pass',template:/*ion-inline-start:"D:\AppServ\www\scu\footprint_prototype\src\pages\pass\pass.html"*/'<!--\n  Generated template for the PassPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar class="page-title-center">\n    <ion-title>Pass</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <div padding>\n    <ion-segment [(ngModel)]="pass">\n      <ion-segment-button value="myPost" style="color: white;">\n        My Post\n      </ion-segment-button>\n      <ion-segment-button value="myComment" style="color: white;">\n        My Comment\n      </ion-segment-button>\n    </ion-segment>\n  </div>\n\n  <div [ngSwitch]="pass">\n    <div *ngSwitchCase="\'myPost\'">\n      <ion-list>\n        <ion-item *ngFor="let post of posts">\n          <post \n        [post]="post"\n        [postAddress]="postAddress"\n        [curPostTime]="curPostTime"></post>\n        </ion-item>\n      </ion-list>\n    </div>\n\n    <div *ngSwitchCase="\'myComment\'">\n      <ion-list>\n        <ion-item *ngFor="let post of posts">\n          <post \n        [post]="post"\n        [postAddress]="postAddress"\n        [curPostTime]="curPostTime"></post>\n        </ion-item>\n      </ion-list>\n    </div>\n  </div>\n</ion-content>\n'/*ion-inline-end:"D:\AppServ\www\scu\footprint_prototype\src\pages\pass\pass.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], PassPage);
    return PassPage;
}());

//# sourceMappingURL=pass.js.map

/***/ }),

/***/ 161:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_help_user_help__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__user_privacy_statement_user_privacy_statement__ = __webpack_require__(163);
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
 * Generated class for the UserPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var UserPage = /** @class */ (function () {
    function UserPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    UserPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad UserPage');
    };
    UserPage.prototype.onClickSettingsButton = function () {
        this.navCtrl.push('SettingsPage');
    };
    UserPage.prototype.onClickLogoutButton = function () {
        this.navCtrl.push('WelcomePage');
    };
    UserPage.prototype.onClickHelpButton = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__user_help_user_help__["a" /* UserHelpPage */]);
    };
    UserPage.prototype.onClickPrivacyStatementButton = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__user_privacy_statement_user_privacy_statement__["a" /* UserPrivacyStatementPage */]);
    };
    UserPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-user',template:/*ion-inline-start:"D:\AppServ\www\scu\footprint_prototype\src\pages\user\user.html"*/'<!--\n  Generated template for the UserPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar class="page-title-center">\n    <ion-title>User</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <div class="user-info">\n<img class="avatar" src="./assets/imgs/avatar.jpg" alt="">\n    <div>\n      <h1>Sherlock</h1>\n      <h2>Holmes</h2>\n    </div>\n  </div>\n  <ion-card>\n    <ion-list>\n      <button ion-item (click)="onClickSettingsButton()">\n        Settings\n        <ion-icon name=\'arrow-forward\' item-end></ion-icon>\n      </button>\n    </ion-list>\n  </ion-card>\n\n  <ion-card>\n    <ion-list>\n      <button ion-item (click)="onClickHelpButton()">\n        Help\n        <ion-icon name=\'arrow-forward\' item-end></ion-icon>\n      </button>\n\n      <button ion-item (click)="onClickPrivacyStatementButton()">\n        Privacy Statement\n        <ion-icon name=\'arrow-forward\' item-end></ion-icon>\n      </button>\n    </ion-list>\n  </ion-card>\n\n  <button ion-button full (click)="onClickLogoutButton()">\n    Logout\n  </button>\n</ion-content>\n'/*ion-inline-end:"D:\AppServ\www\scu\footprint_prototype\src\pages\user\user.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], UserPage);
    return UserPage;
}());

//# sourceMappingURL=user.js.map

/***/ }),

/***/ 162:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserHelpPage; });
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
 * Generated class for the UserHelpPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var UserHelpPage = /** @class */ (function () {
    function UserHelpPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    UserHelpPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad UserHelpPage');
    };
    UserHelpPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-user-help',template:/*ion-inline-start:"D:\AppServ\www\scu\footprint_prototype\src\pages\user-help\user-help.html"*/'<!--\n  Generated template for the UserHelpPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Help</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n Sorry this part is not available: This section will be a block of text which provide users with a guide to the operation\nof the software, and we will finish this part later in the next step.\n</ion-content>\n'/*ion-inline-end:"D:\AppServ\www\scu\footprint_prototype\src\pages\user-help\user-help.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], UserHelpPage);
    return UserHelpPage;
}());

//# sourceMappingURL=user-help.js.map

/***/ }),

/***/ 163:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserPrivacyStatementPage; });
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
 * Generated class for the UserPrivacyStatementPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var UserPrivacyStatementPage = /** @class */ (function () {
    function UserPrivacyStatementPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    UserPrivacyStatementPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad UserPrivacyStatementPage');
    };
    UserPrivacyStatementPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-user-privacy-statement',template:/*ion-inline-start:"D:\AppServ\www\scu\footprint_prototype\src\pages\user-privacy-statement\user-privacy-statement.html"*/'<!--\n  Generated template for the UserPrivacyStatementPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Privacy Statement</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\nSorry this part is not available: This section will be a block of text which provide users with a privacy statement of the\nsoftware, and we will finish this part later in the next step.\n</ion-content>\n'/*ion-inline-end:"D:\AppServ\www\scu\footprint_prototype\src\pages\user-privacy-statement\user-privacy-statement.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], UserPrivacyStatementPage);
    return UserPrivacyStatementPage;
}());

//# sourceMappingURL=user-privacy-statement.js.map

/***/ }),

/***/ 164:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapPage; });
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


var MapPage = /** @class */ (function () {
    function MapPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.currentLat = -28.198025;
        this.currentLon = 153.535773;
        this.currentPost = null;
        this.posts = [
            {
                "id": 1,
                "user_id": 1,
                "latitude": -28.194694,
                "longitude": 153.533340,
                "visuable_range": 500,
                "is_like": 0,
                "total_likes_count": 45,
                "comments_count": 3,
                "body": 'really like a new game, I\'ll stop playing it mid-way through because I don\'t want it to be over. But then I move onto another great game and never finish the original.',
                "create_at": '2018-07-15 05:57:41',
                "updated_at": '2018-07-15 05:57:41',
            },
            {
                "id": 2,
                "user_id": 1,
                "latitude": -28.196387,
                "longitude": 153.539337,
                "visuable_range": 500,
                "is_like": 0,
                "total_likes_count": 256,
                "comments_count": 13,
                "body": 'Site News: Popular Posts for This Week (07.20.2018): Popular posts from',
                "create_at": '2018-07-15 05:57:41',
                "updated_at": '2018-07-15 05:57:41',
            },
            {
                "id": 3,
                "user_id": 1,
                "latitude": -28.201323,
                "longitude": 153.535711,
                "visuable_range": 500,
                "is_like": 0,
                "total_likes_count": 456,
                "comments_count": 78,
                "body": 'We’re honored to sponsor today’s #DC4D event on #API’s. Make sure you have your ticket ready, it all starts in less then an hour!!!',
                "create_at": '2018-07-15 05:57:41',
                "updated_at": '2018-07-15 05:57:41',
            },
            {
                "id": 4,
                "user_id": 1,
                "latitude": -28.199857,
                "longitude": 153.537996,
                "visuable_range": 500,
                "is_like": 0,
                "total_likes_count": 256,
                "comments_count": 4,
                "body": 'Some community collaboration with the awesome folks of',
                "create_at": '2018-07-15 05:57:41',
                "updated_at": '2018-07-15 05:57:41',
            }
        ];
        this.postAddress = '66/2 Falcon Way, Tweed Heads South NSW 2486';
        this.curPostTime = '06:22';
    }
    MapPage.prototype.ionViewDidLoad = function () {
        this.loadMap();
    };
    MapPage.prototype.loadMap = function () {
        var location = new google.maps.LatLng(this.currentLat, this.currentLon);
        var options = {
            center: location,
            zoom: 15,
            zoomControl: false,
            mapTypeControl: false,
            scaleControl: false,
            streetViewControl: false,
            rotateControl: false,
            fullscreenControl: false,
        };
        this.map = new google.maps.Map(this.mapRef.nativeElement, options);
        this.updateMap();
    };
    MapPage.prototype.addMarker = function (position, map, icon) {
        if (icon) {
            return new google.maps.Marker({
                position: position,
                map: map,
                icon: icon,
            });
        }
        return new google.maps.Marker({
            position: position,
            map: map
        });
    };
    MapPage.prototype.updateMap = function () {
        // update user current location
        this.updateCurrentLocation(this.currentLat, this.currentLon);
        // update near post
        this.updateNearPosts();
    };
    MapPage.prototype.updateCurrentLocation = function (latitude, longitude) {
        this.addMarker(new google.maps.LatLng(latitude, longitude), this.map, './assets/imgs/focus.png');
    };
    MapPage.prototype.updateNearPosts = function () {
        var _this = this;
        for (var i = 0; i < this.posts.length; i++) {
            var post = this.posts[i];
            var lat = post.latitude;
            var lon = post.longitude;
            var postMaker = this.addMarker(new google.maps.LatLng(lat, lon), this.map);
            if (postMaker) {
                postMaker.addListener('click', (function (post) {
                    _this.currentPost = post;
                    console.log(post);
                    // this.getGeoName(post.latitude, post.longitude);
                    // this.curPostTime = moment(post.created_at).format('HH:mm');
                    // this.displayPost(post);
                }).bind(this, post));
            }
        }
    };
    MapPage.prototype.openNewPostPage = function () {
        this.navCtrl.push("NewPostPage", { latitude: this.currentLat, longitude: this.currentLon });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('map'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], MapPage.prototype, "mapRef", void 0);
    MapPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-map',template:/*ion-inline-start:"D:\AppServ\www\scu\footprint_prototype\src\pages\map\map.html"*/'<!--\n  Generated template for the MapPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar class="page-title-center">\n    <ion-title>Home</ion-title>\n\n    <ion-buttons end>\n    <button ion-button icon-only clear (click)="openNewPostPage()">\n        <ion-icon name="paper-plane"></ion-icon>\n      </button>\n    </ion-buttons>\n    \n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <div #map id="map"></div>\n  <div id="post-area" *ngIf="currentPost">\n    <post \n      [post]="currentPost"\n      [postAddress]="postAddress"\n      [curPostTime]="curPostTime"></post>\n  </div>\n</ion-content>\n'/*ion-inline-end:"D:\AppServ\www\scu\footprint_prototype\src\pages\map\map.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], MapPage);
    return MapPage;
}());

//# sourceMappingURL=map.js.map

/***/ }),

/***/ 206:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PostPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_config__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_axios__ = __webpack_require__(288);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_axios__);
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
 * Generated class for the PostPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PostPage = /** @class */ (function () {
    function PostPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.post = null;
        this.postAddress = '';
        this.curPostTime = '';
        this.comments = null;
        this.post = navParams.get('post');
        this.postAddress = navParams.get('postAddress');
        this.curPostTime = navParams.get('curPostTime');
    }
    PostPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PostPage');
    };
    PostPage.prototype.loadComments = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_3_axios___default()({
            method: 'get',
            url: __WEBPACK_IMPORTED_MODULE_2__app_app_config__["a" /* AppConfig */].getUrl() + '/api/comments',
            headers: {
                'Authorization': __WEBPACK_IMPORTED_MODULE_2__app_app_config__["a" /* AppConfig */].getApiAuthorization(),
            }
        }).then(function (resp) {
            console.log('Get comments success!');
            _this.comments = resp;
        }).catch(function (err) {
            console.log('Get comments fail!');
        });
    };
    PostPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-post',template:/*ion-inline-start:"D:\AppServ\www\scu\footprint_prototype\src\pages\post\post.html"*/'<!--\n  Generated template for the PostPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>post</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <post \n      [post]="post"\n      [postAddress]="postAddress"\n      [curPostTime]="curPostTime"\n      [isFull]="true"></post>\n</ion-content>\n'/*ion-inline-end:"D:\AppServ\www\scu\footprint_prototype\src\pages\post\post.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], PostPage);
    return PostPage;
}());

//# sourceMappingURL=post.js.map

/***/ }),

/***/ 213:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ForgotPasswordPage; });
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
 * Generated class for the ForgotPasswordPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ForgotPasswordPage = /** @class */ (function () {
    function ForgotPasswordPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.step = 1;
    }
    ForgotPasswordPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ForgotPasswordPage');
    };
    ForgotPasswordPage.prototype.onClickConfirmButton = function () {
        this.step++;
        if (this.step == 4) {
            this.navCtrl.push('WelcomePage');
        }
    };
    ForgotPasswordPage.prototype.displayStep = function (curStep) {
        return curStep == this.step;
    };
    ForgotPasswordPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-forgot-password',template:/*ion-inline-start:"D:\AppServ\www\scu\footprint_prototype\src\pages\forgot-password\forgot-password.html"*/'<!-- \n  author: JKol\n  wesite: https://jkooll.github.io  \n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Forgot Password</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n<ion-card>\n  <ion-card-content>\n    <ion-card-title>\n      Forgot Your Password?\n      <div style="font-size: 15px;">\n        Please do the following steps:\n      </div>\n    </ion-card-title>\n    <div *ngIf="step == 1">\n      <p>\n        Please input your registration email address and confirm. We will sent a verification code to the email address.\n\n        <ion-input type="text" placeholder="Email"></ion-input>\n      </p>\n    </div>\n\n    <div *ngIf="step == 2">\n      <p>\n        The verification code is send to you email, please check and input it in the following box:\n\n        <ion-input type="text" placeholder="Enter verificaiton code"></ion-input>\n        <button ion-button>Resend</button>\n      </p>\n    </div>\n\n    <div *ngIf="step == 3">\n      <p>\n        The verification code is send to you email, please check and input it in the following box:\n\n        <ion-input type="password" placeholder="Enter New Password"></ion-input>\n        <ion-input type="password" placeholder="Enter New Password Again"></ion-input>\n      </p>\n    </div>\n    \n  </ion-card-content>\n</ion-card>\n  \n  <button ion-button full (click)="onClickConfirmButton()">\n    Confirm\n  </button>\n\n</ion-content>\n'/*ion-inline-end:"D:\AppServ\www\scu\footprint_prototype\src\pages\forgot-password\forgot-password.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], ForgotPasswordPage);
    return ForgotPasswordPage;
}());

//# sourceMappingURL=forgot-password.js.map

/***/ }),

/***/ 214:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(237);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 237:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(287);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_pass_pass__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_notification_notification__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_user_user__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_tabs_tabs__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_post_post__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_notification_detail_notification_detail__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_forgot_password_forgot_password__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_map_map__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_user_help_user_help__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_user_privacy_statement_user_privacy_statement__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_post_post__ = __webpack_require__(307);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ionic_native_status_bar__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__ionic_native_splash_screen__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__ionic_native_geolocation__ = __webpack_require__(104);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_pass_pass__["a" /* PassPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_notification_notification__["a" /* NotificationPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_user_user__["a" /* UserPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_post_post__["a" /* PostPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_notification_detail_notification_detail__["a" /* NotificationDetailPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_forgot_password_forgot_password__["a" /* ForgotPasswordPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_map_map__["a" /* MapPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_user_help_user_help__["a" /* UserHelpPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_user_privacy_statement_user_privacy_statement__["a" /* UserPrivacyStatementPage */],
                __WEBPACK_IMPORTED_MODULE_15__components_post_post__["a" /* PostComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/new-post/new-post.module#NewPostModule', name: 'NewPostPage', segment: 'new-post', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/register/register.module#RegisterPageModule', name: 'RegisterPage', segment: 'register', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/settings-account-and-privacy/settings-account-and-privacy.module#SettingsAccountAndPrivacyPageModule', name: 'SettingsAccountAndPrivacyPage', segment: 'settings-account-and-privacy', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/settings-account-password/settings-account-password.module#SettingsAccountPasswordPageModule', name: 'SettingsAccountPasswordPage', segment: 'settings-account-password', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/settings-notification/settings-notification.module#SettingsNotificationPageModule', name: 'SettingsNotificationPage', segment: 'settings-notification', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/settings/settings.module#SettingsPageModule', name: 'SettingsPage', segment: 'settings', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/welcome/welcome.module#WelcomePageModule', name: 'WelcomePage', segment: 'welcome', priority: 'low', defaultHistory: [] }
                    ]
                }),
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_pass_pass__["a" /* PassPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_notification_notification__["a" /* NotificationPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_user_user__["a" /* UserPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_post_post__["a" /* PostPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_notification_detail_notification_detail__["a" /* NotificationDetailPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_forgot_password_forgot_password__["a" /* ForgotPasswordPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_map_map__["a" /* MapPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_user_help_user_help__["a" /* UserHelpPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_user_privacy_statement_user_privacy_statement__["a" /* UserPrivacyStatementPage */],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_16__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_17__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_18__ionic_native_geolocation__["a" /* Geolocation */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 287:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(103);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"D:\AppServ\www\scu\footprint_prototype\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"D:\AppServ\www\scu\footprint_prototype\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 307:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PostComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_post_post__ = __webpack_require__(206);
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
 * Generated class for the PostComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var PostComponent = /** @class */ (function () {
    function PostComponent(navCtrl, alertCtrl) {
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.post = null;
        this.postAddress = '';
        this.curPostTime = '';
        this.isFull = false;
        this.comments = [
            "I almost agree with you!",
            "I almost agree with you!",
            "I almost agree with you!",
        ];
        this.newComment = '';
    }
    PostComponent.prototype.onClickLikeButton = function () {
        var like = this.post.is_like ? 0 : 1;
        this.post.is_like = like;
        var url = '';
        if (like) {
            url = __WEBPACK_IMPORTED_MODULE_3__app_app_config__["a" /* AppConfig */].getUrl() + '/api/like/' + this.post.id;
            this.post.total_likes_count++;
        }
        else {
            url = __WEBPACK_IMPORTED_MODULE_3__app_app_config__["a" /* AppConfig */].getUrl() + '/api/unlike/' + this.post.id;
            this.post.total_likes_count--;
        }
    };
    PostComponent.prototype.onViewButtonClick = function () {
        console.log('click view button');
        this.displayFullPostPage();
    };
    PostComponent.prototype.onCommentButtonClick = function () {
        this.displayFullPostPage();
    };
    PostComponent.prototype.displayFullPostPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__pages_post_post__["a" /* PostPage */], {
            post: this.post,
            postAddress: this.postAddress,
            curPostTime: this.curPostTime
        });
    };
    PostComponent.prototype.onClickSubmitCommentButton = function () {
        if (this.newComment == '') {
            this.showAlert();
            return;
        }
        this.comments.unshift(this.newComment);
        this.newComment = '';
        this.post.comments_count++;
    };
    PostComponent.prototype.showAlert = function () {
        var alert = this.alertCtrl.create({
            title: 'Create New Comment Fail!',
            subTitle: 'Comment can not be empty!',
            buttons: ['OK']
        });
        alert.present();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], PostComponent.prototype, "post", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], PostComponent.prototype, "postAddress", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], PostComponent.prototype, "curPostTime", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], PostComponent.prototype, "isFull", void 0);
    PostComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'post',template:/*ion-inline-start:"D:\AppServ\www\scu\footprint_prototype\src\components\post\post.html"*/'\n<ion-card>\n  <ion-list>\n    <ion-item>\n      <ion-avatar item-start>\n        <img src="./assets/imgs/avatar.jpg" alt="avatar">\n      </ion-avatar>\n      <p>\n        <ion-list>\n          <div ion-item>\n            <ion-icon name="pin"></ion-icon>\n            {{postAddress}}\n            <button ion-button clear item-end>\n              {{curPostTime}}\n              <ion-icon *ngIf="!isFull" name="arrow-forward" item-end (click)="onViewButtonClick()"></ion-icon>\n            </button>\n          </div>\n\n          <div ion-item *ngIf="post">\n            {{post.body}}\n          </div>\n\n          <div ion-item>\n            <button ion-button clear (click)="onClickLikeButton()">\n              <ion-icon name="thumbs-up" *ngIf="post.is_like == 1" style="color:red;">{{ post.total_likes_count }}</ion-icon>\n            <ion-icon name="thumbs-up" *ngIf="post.is_like == 0">{{ post.total_likes_count }}</ion-icon>\n            </button>\n            \n            <button ion-button clear>\n              <ion-icon name="albums" >{{ post.comments_count }}</ion-icon>\n            </button>\n          </div>\n        </ion-list>\n      </p>\n    </ion-item>\n  </ion-list>\n</ion-card>\n\n<div *ngIf="isFull">\n<ion-card>\n  <ion-list>\n    <ion-item>\n      <ion-input type="text" placeholder="Create a New Comment!" [(ngModel)]="newComment"></ion-input>\n      <button ion-button item-end (click)="onClickSubmitCommentButton()">\n        <ion-icon name="paper-plane"></ion-icon>\n      </button>\n    </ion-item>\n\n    <ion-item *ngFor="let comment of comments">\n      <img item-start src="./assets/imgs/avatar.jpg" alt="avatar" class="small-avatar"> {{ comment }}\n    </ion-item>\n\n  </ion-list>\n</ion-card>\n\n\n  \n</div>\n\n\n'/*ion-inline-end:"D:\AppServ\www\scu\footprint_prototype\src\components\post\post.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], PostComponent);
    return PostComponent;
}());

//# sourceMappingURL=post.js.map

/***/ })

},[214]);
//# sourceMappingURL=main.js.map