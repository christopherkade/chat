webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
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
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"demo-layout mdl-layout mdl-js-layout mdl-layout--fixed-header\">\n  <nav class=\"navbar\" role=\"navigation\" aria-label=\"main navigation\">\n    <div class=\"navbar-brand\">\n      <a class=\"navbar-item\" href=\"https://christopherkade.com\">\n        <img src=\"./../assets/images/logo_ck.svg\">\n      </a>\n    </div>\n\n    <div class=\"navbar-end\">\n      <div class=\"navbar-item\">\n        <div *ngIf=\"currentUser\" id=\"user-pic\" [ngStyle]=\"profilePicStyles\"></div>\n        <div *ngIf=\"currentUser\" id=\"user-name\">{{ (user | async)?.displayName }}</div>\n        <button *ngIf=\"currentUser\" id=\"sign-out\" (click)=\"logout()\" class=\"button\">\n            Sign-out\n        </button>\n        <button *ngIf=\"!currentUser\" id=\"sign-in\" (click)=\"login()\" class=\"button\">\n            <i class=\"fa fa-user-circle-o sign-in-icon\" aria-hidden=\"true\"></i> Sign-in with Google\n        </button>\n      </div>\n    </div>\n\n    <!-- <button class=\"button navbar-burger\">\n      <span></span>\n      <span></span>\n      <span></span>\n    </button> -->\n  </nav>\n\n  <div class=\"container messages-container\">\n    <div class=\"card messages\" id=\"messages\">\n      <div class=\"card-content messages-card-container\">\n        <span id=\"message-filler\"></span>\n        <div class=\"message-container\" *ngFor=\"let message of messages | async\">\n          <div class=\"spacing\">\n            <div class=\"pic\" [style.background-image]=\"'url(' + message.photoUrl + ')'\"></div>\n          </div>\n          <div class=\"message\">\n            <span *ngIf=\"message.text\" [style]=\"message.sentiment\">{{ message.text }}</span>\n            <img *ngIf=\"message.imageUrl\" [src]=\"message.imageUrl + (message.moderated ? '&amp;moderated=1' : '')\">\n          </div>\n          <div class=\"name\">{{ message.name }}</div>\n        </div>\n      </div>\n    </div>\n\n    <form id=\"message-form\" (submit)=\"saveMessage()\" [formGroup]=\"messageForm\">\n      <div class=\"field is-grouped\">\n        <p class=\"control is-expanded\">\n          <input class=\"input\" id=\"message\" formControlName=\"message\" placeholder=\"Message...\" [(ngModel)]=\"value\">\n        </p>\n        <p class=\"control\">\n          <!-- TODO: Add disabled -->\n          <a type=\"submit\" class=\"button is-info\">\n            Send\n          </a>\n        </p>\n      </div>\n    </form>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.sass":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".messages-card-container {\n  height: calc(100% - 150px);\n  padding-bottom: 0; }\n\n#messages-card {\n  margin-top: 15px; }\n\n.messages-container {\n  margin-top: 15vh; }\n\n.messages {\n  overflow-y: auto;\n  margin-bottom: 10px;\n  height: 50vh; }\n\n#message-filler {\n  -webkit-box-flex: 1;\n      -ms-flex-positive: 1;\n          flex-grow: 1; }\n\n.message-container {\n  display: block;\n  margin-top: 10px;\n  border-top: 1px solid #f3f3f3;\n  padding-top: 10px;\n  transition: opacity 1s ease-in-out; }\n  .message-container:first-of-type {\n    border-top-width: 0; }\n  .message-container.visible {\n    opacity: 1; }\n  .message-container .pic {\n    background-image: url(\"/assets/images/profile_placeholder.png\");\n    background-repeat: no-repeat;\n    width: 30px;\n    height: 30px;\n    background-size: 30px;\n    border-radius: 20px; }\n  .message-container .spacing {\n    display: table-cell;\n    vertical-align: top; }\n  .message-container .message {\n    display: table-cell;\n    width: calc(100% - 40px);\n    padding: 5px 10px 5px 10px; }\n  .message-container .name {\n    display: inline-block;\n    width: 100%;\n    padding-left: 40px;\n    color: #bbb;\n    font-style: italic;\n    font-size: 12px;\n    box-sizing: border-box; }\n\n#message-form {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  width: calc(100% - 48px);\n  float: left; }\n\n#message-form .mdl-textfield {\n  width: calc(100% - 100px); }\n\n#message-form button {\n  width: 100px;\n  margin: 15px 0 0 10px; }\n\n#user-pic {\n  top: -3px;\n  position: relative;\n  display: inline-block;\n  background-image: url(\"/assets/images/profile_placeholder.png\");\n  background-repeat: no-repeat;\n  width: 40px;\n  height: 40px;\n  background-size: 40px;\n  border-radius: 20px; }\n\n#user-name {\n  font-size: 16px;\n  line-height: 36px;\n  padding-right: 10px;\n  padding-left: 10px; }\n\n.sign-in-icon {\n  font-size: 1.5em;\n  margin-right: 5px; }\n\n.message img {\n  max-width: 300px;\n  max-height: 200px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__ = __webpack_require__("../../../../angularfire2/auth/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase__ = __webpack_require__("../../../../firebase/firebase-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LOADING_IMAGE_URL = 'https://www.google.com/images/spin-32.gif';
var PROFILE_PLACEHOLDER_IMAGE_URL = '/assets/images/profile_placeholder.png';
var AppComponent = (function () {
    function AppComponent(db, afAuth, fb) {
        var _this = this;
        this.db = db;
        this.afAuth = afAuth;
        this.fb = fb;
        this.value = '';
        this.messageForm = fb.group({
            'message': [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required]
        });
        this.user = afAuth.authState;
        this.user.subscribe(function (user) {
            _this.currentUser = user;
            // User is signed in!
            if (user) {
                _this.profilePicStyles = {
                    'background-image': "url(" + _this.currentUser.photoURL + ")"
                };
                // We load currently existing chat messages.
                _this.messages = _this.db.list('/messages', {
                    query: {
                        limitToLast: 12
                    }
                });
                _this.messages.subscribe(function (messages) {
                    // Make sure new message scroll into view
                    setTimeout(function () {
                        var messageList = document.getElementById('messages');
                        messageList.scrollTop = messageList.scrollHeight;
                        document.getElementById('message').focus();
                    }, 500);
                });
                // We save the Firebase Messaging Device token and enable notifications.
                _this.saveMessagingDeviceToken();
            }
            else {
                _this.profilePicStyles = {
                    'background-image': PROFILE_PLACEHOLDER_IMAGE_URL
                };
            }
        });
    }
    AppComponent.prototype.login = function () {
        this.afAuth.auth.signInWithPopup(new __WEBPACK_IMPORTED_MODULE_4_firebase__["auth"].GoogleAuthProvider());
    };
    AppComponent.prototype.logout = function () {
        this.messages = null;
        this.afAuth.auth.signOut();
    };
    // Returns true if user is signed-in. Otherwise false and displays a message.
    AppComponent.prototype.checkSignedInWithMessage = function () {
        // Return true if the user is signed in Firebase
        if (this.currentUser) {
            return true;
        }
        return false;
    };
    ;
    AppComponent.prototype.saveMessage = function () {
        var _this = this;
        if (this.value && this.checkSignedInWithMessage()) {
            // Add a new message entry to the Firebase Database.
            var messages = this.db.list('/messages');
            messages.push({
                name: this.currentUser.displayName,
                text: this.value,
                photoUrl: this.currentUser.photoURL || PROFILE_PLACEHOLDER_IMAGE_URL
            }).then(function () {
                // Clear message text field and SEND button state.
                _this.value = '';
            }).catch(function (err) {
                console.error(err);
            });
        }
    };
    // TODO: Refactor into image message form component
    AppComponent.prototype.onImageClick = function (event) {
        event.preventDefault();
        document.getElementById('mediaCapture').click();
    };
    // Saves the messaging device token to the datastore.
    AppComponent.prototype.saveMessagingDeviceToken = function () {
        var _this = this;
        return __WEBPACK_IMPORTED_MODULE_4_firebase__["messaging"]().getToken()
            .then(function (currentToken) {
            if (currentToken) {
                // Save the Device Token to the datastore.
                __WEBPACK_IMPORTED_MODULE_4_firebase__["database"]()
                    .ref('/fcmTokens')
                    .child(currentToken)
                    .set(_this.currentUser.uid);
            }
            else {
                // Need to request permissions to show notifications.
                // TODO: Add Notifications
                // return this.requestNotificationsPermissions();
            }
        }).catch(function (err) {
            console.error(err);
        });
    };
    ;
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.sass")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__["a" /* AngularFireAuth */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__["a" /* AngularFireAuth */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */]) === "function" && _c || Object])
], AppComponent);

var _a, _b, _c;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2__ = __webpack_require__("../../../../angularfire2/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angularfire2_auth__ = __webpack_require__("../../../../angularfire2/auth/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_5_angularfire2__["a" /* AngularFireModule */].initializeApp(__WEBPACK_IMPORTED_MODULE_9__environments_environment__["a" /* environment */].firebase),
            __WEBPACK_IMPORTED_MODULE_6_angularfire2_database__["b" /* AngularFireDatabaseModule */],
            __WEBPACK_IMPORTED_MODULE_7_angularfire2_auth__["b" /* AngularFireAuthModule */]
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: true,
    firebase: {
        apiKey: "AIzaSyDIporHDDONHfiavfq9Sd5l2Upvuk9_JEk",
        authDomain: "kade-chat.firebaseapp.com",
        databaseURL: "https://kade-chat.firebaseio.com",
        projectId: "kade-chat",
        storageBucket: "",
        messagingSenderId: "42634767407"
    }
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_20" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map