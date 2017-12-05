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

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/**\n * Copyright 2017 Google Inc. All Rights Reserved.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\nmain, #messages-card {\n  height: 100%;\n  padding-bottom: 0;\n}\n#messages-card-container {\n  height: calc(100% - 150px);\n  padding-bottom: 0;\n}\n#messages-card {\n  margin-top: 15px;\n}\n.mdl-layout__header-row span {\n  margin-left: 15px;\n  margin-top: 17px;\n}\n.mdl-grid {\n  max-width: 1024px;\n  margin: auto;\n}\n.material-icons {\n  font-size: 36px;\n  top: 8px;\n  position: relative;\n}\n.mdl-layout__header-row {\n  padding: 0;\n  margin: 0 auto;\n}\n.mdl-card__supporting-text {\n  width: auto;\n  height: 100%;\n  padding-top: 0;\n  padding-bottom: 0;\n}\n#messages {\n  overflow-y: auto;\n  margin-bottom: 10px;\n  height: calc(100% - 80px);\n}\n#message-filler {\n  -webkit-box-flex: 1;\n      -ms-flex-positive: 1;\n          flex-grow: 1;\n}\n.message-container:first-of-type {\n  border-top-width: 0;\n}\n.message-container {\n  display: block;\n  margin-top: 10px;\n  border-top: 1px solid #f3f3f3;\n  padding-top: 10px;\n  /*opacity: 0;*/\n  transition: opacity 1s ease-in-out;\n}\n.message-container.visible {\n  opacity: 1;\n}\n.message-container .pic {\n  background-image: url('/assets/images/profile_placeholder.png');\n  background-repeat: no-repeat;\n  width: 30px;\n  height: 30px;\n  background-size: 30px;\n  border-radius: 20px;\n}\n.message-container .spacing {\n  display: table-cell;\n  vertical-align: top;\n}\n.message-container .message {\n  display: table-cell;\n  width: calc(100% - 40px);\n  padding: 5px 0 5px 10px;\n}\n.message-container .name {\n  display: inline-block;\n  width: 100%;\n  padding-left: 40px;\n  color: #bbb;\n  font-style: italic;\n  font-size: 12px;\n  box-sizing: border-box;\n}\n#message-form {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  width: calc(100% - 48px);\n  float: left;\n}\n#image-form {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  width: 48px;\n  float: right;\n}\n#message-form .mdl-textfield {\n  width: calc(100% - 100px);\n}\n#message-form button, #image-form button {\n  width: 100px;\n  margin: 15px 0 0 10px;\n}\n.mdl-card {\n  min-height: 0;\n}\n.mdl-card {\n  background: linear-gradient(white, #f9f9f9);\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n}\n#user-container {\n  position: absolute;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  top: 22px;\n  width: 100%;\n  right: 0;\n  padding-left: 10px;\n  -webkit-box-pack: end;\n      -ms-flex-pack: end;\n          justify-content: flex-end;\n  padding-right: 10px;\n}\n#user-container #user-pic {\n  top: -3px;\n  position: relative;\n  display: inline-block;\n  background-image: url('/assets/images/profile_placeholder.png');\n  background-repeat: no-repeat;\n  width: 40px;\n  height: 40px;\n  background-size: 40px;\n  border-radius: 20px;\n}\n#user-container #user-name {\n  font-size: 16px;\n  line-height: 36px;\n  padding-right: 10px;\n  padding-left: 20px;\n}\n#image-form #submitImage {\n  width: auto;\n  padding: 0 6px 0 1px;\n  min-width: 0;\n}\n#image-form #submitImage .material-icons {\n  top: -1px;\n}\n.message img {\n  max-width: 300px;\n  max-height: 200px;\n}\n#mediaCapture {\n  display: none;\n}\n@media screen and (max-width: 610px) {\n  header {\n    height: 113px;\n    padding-bottom: 80px !important;\n  }\n  #user-container {\n    top: 72px;\n    background-color: rgb(3,155,229);\n    height: 38px;\n    padding-top: 3px;\n    padding-right: 2px;\n  }\n  #user-container #user-pic {\n    top: 2px;\n    width: 33px;\n    height: 33px;\n    background-size: 33px;\n  }\n}\n.mdl-textfield__label:after {\n  background-color: #0288D1;\n}\n.mdl-textfield--floating-label.is-focused .mdl-textfield__label {\n  color: #0288D1;\n}\n.mdl-button .material-icons {\n  top: -1px;\n  margin-right: 5px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"demo-layout mdl-layout mdl-js-layout mdl-layout--fixed-header\">\n  <!-- Header section containing logo -->\n  <header class=\"mdl-layout__header mdl-color-text--white mdl-color--light-blue-700\">\n    <div class=\"mdl-cell mdl-cell--12-col mdl-cell--12-col-tablet mdl-grid\">\n      <div class=\"mdl-layout__header-row mdl-cell mdl-cell--12-col mdl-cell--12-col-tablet mdl-cell--12-col-desktop\">\n        <h3><i class=\"material-icons\">chat_bubble_outline</i> Friendly Chat</h3>\n      </div>\n      <div id=\"user-container\">\n        <div *ngIf=\"currentUser\" id=\"user-pic\" [ngStyle]=\"profilePicStyles\"></div>\n        <div *ngIf=\"currentUser\" id=\"user-name\">{{ (user | async)?.displayName }}</div>\n        <button *ngIf=\"currentUser\" id=\"sign-out\" (click)=\"logout()\" class=\"mdl-button mdl-js-button mdl-js-ripple-effect mdl-color-text--white\">\n          Sign-out\n        </button>\n        <button *ngIf=\"!currentUser\" id=\"sign-in\" (click)=\"login()\" class=\"mdl-button mdl-js-button mdl-js-ripple-effect mdl-color-text--white\">\n          <i class=\"material-icons\">account_circle</i>Sign-in with Google\n        </button>\n      </div>\n    </div>\n  </header>\n\n  <main class=\"mdl-layout__content mdl-color--grey-100\">\n    <div id=\"messages-card-container\" class=\"mdl-cell mdl-cell--12-col mdl-grid\">\n\n      <!-- Messages container -->\n      <div id=\"messages-card\" class=\"mdl-card mdl-shadow--2dp mdl-cell mdl-cell--12-col mdl-cell--6-col-tablet mdl-cell--6-col-desktop\">\n        <div class=\"mdl-card__supporting-text mdl-color-text--grey-600\">\n          <div id=\"messages\">\n            <span id=\"message-filler\"></span>\n            <div class=\"message-container\" *ngFor=\"let message of messages | async\">\n              <div class=\"spacing\">\n                <div class=\"pic\" [style.background-image]=\"'url(' + message.photoUrl + ')'\"></div>\n              </div>\n              <div class=\"message\">\n                <span *ngIf=\"message.text\" [style]=\"message.sentiment | stylize\">{{ message.text }}</span>\n                <img *ngIf=\"message.imageUrl\" [src]=\"message.imageUrl + (message.moderated ? '&amp;moderated=1' : '')\">\n              </div>\n              <div class=\"name\">{{ message.name }}</div>\n            </div>\n          </div>\n          <div *ngIf=\"topics\"><em>Recent topics: {{ topics }}</em></div>\n          <form id=\"message-form\" (submit)=\"saveMessage($event, box)\">\n            <div class=\"mdl-textfield mdl-js-textfield mdl-textfield--floating-label\">\n              <input #box class=\"mdl-textfield__input\" type=\"text\" id=\"message\"\n                (keyup)=\"update(box.value)\" (blur)=\"update(box.value)\"\n                placeholder=\"Message...\">\n            </div>\n            <button id=\"submit\" [disabled]=\"!value\" type=\"submit\" class=\"mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect\">\n              Send\n            </button>\n          </form>\n          <form id=\"image-form\" action=\"#\">\n            <input id=\"mediaCapture\" type=\"file\" accept=\"image/*,capture=camera\" (change)=\"saveImageMessage($event)\">\n            <button id=\"submitImage\" title=\"Add an image\" (click)=\"onImageClick($event)\"\n              class=\"mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-color--amber-400 mdl-color-text--white\">\n              <i class=\"material-icons\">image</i>\n            </button>\n          </form>\n        </div>\n      </div>\n    </div>\n  </main>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__("../../../../angularfire2/auth/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
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
/**
 * Copyright 2017 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */





var LOADING_IMAGE_URL = 'https://www.google.com/images/spin-32.gif';
var PROFILE_PLACEHOLDER_IMAGE_URL = '/assets/images/profile_placeholder.png';
var AppComponent = (function () {
    function AppComponent(db, afAuth, snackBar) {
        var _this = this;
        this.db = db;
        this.afAuth = afAuth;
        this.snackBar = snackBar;
        this.topics = '';
        this.value = '';
        this.user = afAuth.authState;
        this.user.subscribe(function (user) {
            console.log(user);
            _this.currentUser = user;
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
                    // Calculate list of recently discussed topics
                    var topicsMap = {};
                    var topics = [];
                    var hasEntities = false;
                    messages.forEach(function (message) {
                        if (message.entities) {
                            for (var _i = 0, _a = message.entities; _i < _a.length; _i++) {
                                var entity = _a[_i];
                                if (!topicsMap.hasOwnProperty(entity.name)) {
                                    topicsMap[entity.name] = 0;
                                }
                                topicsMap[entity.name] += entity.salience;
                                hasEntities = true;
                            }
                        }
                    });
                    if (hasEntities) {
                        for (var name in topicsMap) {
                            topics.push({ name: name, score: topicsMap[name] });
                        }
                        topics.sort(function (a, b) { return b.score - a.score; });
                        _this.topics = topics.map(function (topic) { return topic.name; }).join(', ');
                    }
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
                _this.topics = '';
            }
        });
    }
    AppComponent.prototype.login = function () {
        this.afAuth.auth.signInWithPopup(new __WEBPACK_IMPORTED_MODULE_4_firebase__["auth"].GoogleAuthProvider());
    };
    AppComponent.prototype.logout = function () {
        this.afAuth.auth.signOut();
    };
    // TODO: Refactor into text message form component
    AppComponent.prototype.update = function (value) {
        this.value = value;
    };
    // Returns true if user is signed-in. Otherwise false and displays a message.
    AppComponent.prototype.checkSignedInWithMessage = function () {
        var _this = this;
        // Return true if the user is signed in Firebase
        if (this.currentUser) {
            return true;
        }
        this.snackBar
            .open('You must sign-in first', 'Sign in', {
            duration: 5000
        })
            .onAction()
            .subscribe(function () { return _this.login(); });
        return false;
    };
    ;
    // TODO: Refactor into text message form component
    AppComponent.prototype.saveMessage = function (event, el) {
        var _this = this;
        event.preventDefault();
        if (this.value && this.checkSignedInWithMessage()) {
            // Add a new message entry to the Firebase Database.
            var messages = this.db.list('/messages');
            messages.push({
                name: this.currentUser.displayName,
                text: this.value,
                photoUrl: this.currentUser.photoURL || PROFILE_PLACEHOLDER_IMAGE_URL
            }).then(function () {
                // Clear message text field and SEND button state.
                el.value = '';
            }).catch(function (err) {
                _this.snackBar.open('Error writing new message to Firebase Database.', null, {
                    duration: 5000
                });
                console.error(err);
            });
        }
    };
    // TODO: Refactor into image message form component
    AppComponent.prototype.saveImageMessage = function (event) {
        var _this = this;
        event.preventDefault();
        var file = event.target.files[0];
        // Clear the selection in the file picker input.
        var imageForm = document.getElementById('image-form');
        imageForm.reset();
        // Check if the file is an image.
        if (!file.type.match('image.*')) {
            this.snackBar.open('You can only share images', null, {
                duration: 5000
            });
            return;
        }
        // Check if the user is signed-in
        if (this.checkSignedInWithMessage()) {
            // We add a message with a loading icon that will get updated with the shared image.
            var messages = this.db.list('/messages');
            messages.push({
                name: this.currentUser.displayName,
                imageUrl: LOADING_IMAGE_URL,
                photoUrl: this.currentUser.photoURL || PROFILE_PLACEHOLDER_IMAGE_URL
            }).then(function (data) {
                // Upload the image to Cloud Storage.
                var filePath = _this.currentUser.uid + "/" + data.key + "/" + file.name;
                return __WEBPACK_IMPORTED_MODULE_4_firebase__["storage"]().ref(filePath).put(file)
                    .then(function (snapshot) {
                    // Get the file's Storage URI and update the chat message placeholder.
                    var fullPath = snapshot.metadata.fullPath;
                    var imageUrl = __WEBPACK_IMPORTED_MODULE_4_firebase__["storage"]().ref(fullPath).toString();
                    return __WEBPACK_IMPORTED_MODULE_4_firebase__["storage"]().refFromURL(imageUrl).getMetadata();
                }).then(function (metadata) {
                    // TODO: Instead of saving the download URL, save the GCS URI and
                    //       dynamically load the download URL when displaying the image
                    //       message.
                    return data.update({
                        imageUrl: metadata.downloadURLs[0]
                    });
                });
            }).catch(function (err) {
                _this.snackBar.open('There was an error uploading a file to Cloud Storage.', null, {
                    duration: 5000
                });
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
                console.log('Got FCM device token:', currentToken);
                // Save the Device Token to the datastore.
                __WEBPACK_IMPORTED_MODULE_4_firebase__["database"]()
                    .ref('/fcmTokens')
                    .child(currentToken)
                    .set(_this.currentUser.uid);
            }
            else {
                // Need to request permissions to show notifications.
                return _this.requestNotificationsPermissions();
            }
        }).catch(function (err) {
            _this.snackBar.open('Unable to get messaging token.', null, {
                duration: 5000
            });
            console.error(err);
        });
    };
    ;
    // Requests permissions to show notifications.
    AppComponent.prototype.requestNotificationsPermissions = function () {
        var _this = this;
        console.log('Requesting notifications permission...');
        return __WEBPACK_IMPORTED_MODULE_4_firebase__["messaging"]().requestPermission()
            .then(function () { return _this.saveMessagingDeviceToken(); })
            .catch(function (err) {
            _this.snackBar.open('Unable to get permission to notify.', null, {
                duration: 5000
            });
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
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_material__["a" /* MatSnackBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_material__["a" /* MatSnackBar */]) === "function" && _c || Object])
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__stylize_pipe__ = __webpack_require__("../../../../../src/app/stylize.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * Copyright 2017 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */












var configErrMsg = "You have not configured and imported the Firebase SDK.\nMake sure you go through the codelab setup instructions.";
var bucketErrMsg = "Your Firebase Storage bucket has not been enabled. Sorry\nabout that. This is actually a Firebase bug that occurs rarely. Please go and\nre-generate the Firebase initialization snippet (step 4 of the codelab) and make\nsure the storageBucket attribute is not empty. You may also need to visit the\nStorage tab and paste the name of your bucket which is displayed there.";
if (!__WEBPACK_IMPORTED_MODULE_11__environments_environment__["a" /* environment */].firebase) {
    if (!__WEBPACK_IMPORTED_MODULE_11__environments_environment__["a" /* environment */].firebase.apiKey) {
        window.alert(configErrMsg);
    }
    else if (__WEBPACK_IMPORTED_MODULE_11__environments_environment__["a" /* environment */].firebase.storageBucket === '') {
        window.alert(bucketErrMsg);
    }
}
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_10__stylize_pipe__["a" /* StylizePipe */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_8__angular_material__["b" /* MatSnackBarModule */],
            __WEBPACK_IMPORTED_MODULE_5_angularfire2__["a" /* AngularFireModule */].initializeApp(__WEBPACK_IMPORTED_MODULE_11__environments_environment__["a" /* environment */].firebase),
            __WEBPACK_IMPORTED_MODULE_6_angularfire2_database__["b" /* AngularFireDatabaseModule */],
            __WEBPACK_IMPORTED_MODULE_7_angularfire2_auth__["b" /* AngularFireAuthModule */]
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/stylize.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StylizePipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
 * Styles a message based on its sentiment.
 */
var StylizePipe = (function () {
    function StylizePipe(sanitizer) {
        this.sanitizer = sanitizer;
    }
    StylizePipe.prototype.transform = function (sentiment) {
        if (!sentiment) {
            return '';
        }
        var style = '';
        // Change font based on positive/negative score.
        if (sentiment.score >= 0.9) {
            style += "font-family: 'Bonbon', 'Roboto', 'Helvetica', sans-serif;";
        }
        else if (sentiment.score >= 0.5) {
            style += "font-family: 'Crafty Girls', 'Roboto', 'Helvetica', sans-serif;";
        }
        else if (sentiment.score <= -0.9) {
            style += "font-family: 'Creepster', 'Roboto', 'Helvetica', sans-serif;";
        }
        else if (sentiment.score <= -0.5) {
            style += "font-family: 'Julee', 'Roboto', 'Helvetica', sans-serif;";
        }
        // Make bold if the magnitude is greater than 1.
        if (sentiment.magnitude >= 1) {
            style += "font-weight: bold;";
        }
        return style ? this.sanitizer.bypassSecurityTrustStyle(style) : '';
    };
    return StylizePipe;
}());
StylizePipe = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["V" /* Pipe */])({ name: 'stylize' }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["c" /* DomSanitizer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["c" /* DomSanitizer */]) === "function" && _a || Object])
], StylizePipe);

var _a;
//# sourceMappingURL=stylize.pipe.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
/**
 * Copyright 2017 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Copyright 2017 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ var environment = {
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