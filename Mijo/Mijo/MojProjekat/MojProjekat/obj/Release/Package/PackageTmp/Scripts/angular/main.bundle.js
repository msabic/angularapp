webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/about/about.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div ng-if=\"showData\">\n  <table class=\"table\">\n    <thead>\n        <tr>\n            <th>Student ID</th>\n            <th>Name</th>\n            <th>Gender</th>\n            <th>Age</th>\n            <th>Course</th>\n            <th>DOB</th>\n            <th>Grade</th>\n            <th>Details</th>\n        </tr>\n    </thead>\n    <tbody>\n        <tr *ngFor=\"let s of students;\">\n            <td>{{s.studentID}}</td>\n            <td>{{s.studentName | uppercase}}</td>\n            <td>{{s.gender | lowercase}}</td>\n            <td>{{s.age}}</td>\n\n            <td>{{s.DOB | date:'yMMMMd' | uppercase }}</td>\n            <td>{{s.grade | percent:'.2'}}</td>\n            <td>{{s.rating | number:'2.1-2'}}</td>\n            <td routerLink=\"/detail/{{s.studentID}}\"> Details</td>\n        </tr>\n    </tbody>\n</table>\n\n</div>\n<div>\n  <p>API vratio</p>\n<div  *ngFor=\"let s of result;\">\n  <p>\n    {{s}}\n  </p>\n</div>\n</div>\n<div>\n<a routerLink=\"/ma\" class=\"btn btn-primary\">Course List</a>\n</div>\n"

/***/ }),

/***/ "./src/app/about/about.component.less":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/about/about.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__appShared_user_service__ = __webpack_require__("./src/appShared/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AboutComponent = /** @class */ (function () {
    function AboutComponent(userService) {
        this.userService = userService;
        this.showData = false;
    }
    AboutComponent.prototype.LoadStudents = function (filterText) {
        // tslint:disable-next-line:no-trailing-whitespace
        this.students = [
            { studentID: 1, studentName: 'Steve', gender: 'Male', age: 35, course: 'MCA', DOB: '10/12/1982', grade: 0.7500, rating: 7.5123 },
            { studentID: 2, studentName: 'Bobby', gender: 'Male', age: 32, course: 'MBA', DOB: '12/1/1985', grade: 0.7850, rating: 7.8223 },
            // tslint:disable-next-line:max-line-length
            { studentID: 3, studentName: 'Rina', gender: 'Female', age: 45, course: 'B.Tech', DOB: '9/11/1972', grade: 0.8525, rating: 8.5263 },
            // tslint:disable-next-line:max-line-length
            { studentID: 4, studentName: 'Alex', gender: 'Female', age: 24, course: 'M.Tech', DOB: '1/1/1993', grade: 0.5540, rating: 5.5123 },
            { studentID: 5, studentName: 'Rahul', gender: 'Male', age: 26, course: 'MCA', DOB: '1/21/1991', grade: 0.9550, rating: 9.5534 },
        ];
        if (filterText !== '') {
            // tslint:disable-next-line:prefer-const
            var filterStudentList_1 = [];
            this.students.forEach(function (stu) {
                if (stu.studentName.toLowerCase().includes(filterText)) {
                    filterStudentList_1.push(stu);
                }
            });
            this.students = filterStudentList_1;
        }
    };
    AboutComponent.prototype.ngOnInit = function () {
        this.checkUserStatus();
    };
    AboutComponent.prototype.checkUserStatus = function () {
        var _this = this;
        this.userSubscription = this.userService.search().subscribe(function (status) {
            _this.isAuthorized = status;
            _this.result = status;
            if (_this.result.length > 0) {
                _this.showData = true;
                _this.LoadStudents('');
            }
            else {
                _this.showData = false;
            }
        });
    };
    AboutComponent.prototype.OnStudentSearch = function (searchTerm) {
        this.LoadStudents(searchTerm);
    };
    AboutComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-about',
            template: __webpack_require__("./src/app/about/about.component.html"),
            styles: [__webpack_require__("./src/app/about/about.component.less")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__appShared_user_service__["a" /* UserService */]])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<app-header></app-header>\n<router-outlet></router-outlet>\n\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/app.component.less":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Moje nesto';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.less")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__appShared_user_service__ = __webpack_require__("./src/appShared/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__appShared_value_services__ = __webpack_require__("./src/appShared/value.services.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__appShared_doktor_service__ = __webpack_require__("./src/appShared/doktor.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__appShared_pacijenti_service__ = __webpack_require__("./src/appShared/pacijenti.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ma_ma_component__ = __webpack_require__("./src/app/ma/ma.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__about_about_component__ = __webpack_require__("./src/app/about/about.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__header_header_component__ = __webpack_require__("./src/app/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__footer_footer_component__ = __webpack_require__("./src/app/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__home_home_component__ = __webpack_require__("./src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__hero_details_hero_details_component__ = __webpack_require__("./src/app/hero-details/hero-details.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__technology_technology_component__ = __webpack_require__("./src/app/technology/technology.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__design_design_component__ = __webpack_require__("./src/app/design/design.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__culture_culture_component__ = __webpack_require__("./src/app/culture/culture.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__business_business_component__ = __webpack_require__("./src/app/business/business.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__politics_politics_component__ = __webpack_require__("./src/app/politics/politics.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__opinion_opinion_component__ = __webpack_require__("./src/app/opinion/opinion.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__travel_travel_component__ = __webpack_require__("./src/app/travel/travel.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__login_login_component__ = __webpack_require__("./src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__doctor_doctor_component__ = __webpack_require__("./src/app/doctor/doctor.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pregledi_pregledi_component__ = __webpack_require__("./src/app/pregledi/pregledi.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__app_routes__ = __webpack_require__("./src/app/app.routes.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



 // <-- NgModel lives here






















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_9__ma_ma_component__["a" /* MaComponent */],
                __WEBPACK_IMPORTED_MODULE_10__about_about_component__["a" /* AboutComponent */],
                __WEBPACK_IMPORTED_MODULE_11__header_header_component__["a" /* HeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_12__footer_footer_component__["a" /* FooterComponent */],
                __WEBPACK_IMPORTED_MODULE_13__home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_14__hero_details_hero_details_component__["a" /* HeroDetailsComponent */],
                __WEBPACK_IMPORTED_MODULE_15__technology_technology_component__["a" /* TechnologyComponent */],
                __WEBPACK_IMPORTED_MODULE_16__design_design_component__["a" /* DesignComponent */],
                __WEBPACK_IMPORTED_MODULE_17__culture_culture_component__["a" /* CultureComponent */],
                __WEBPACK_IMPORTED_MODULE_18__business_business_component__["a" /* BusinessComponent */],
                __WEBPACK_IMPORTED_MODULE_19__politics_politics_component__["a" /* PoliticsComponent */],
                __WEBPACK_IMPORTED_MODULE_20__opinion_opinion_component__["a" /* OpinionComponent */],
                __WEBPACK_IMPORTED_MODULE_21__travel_travel_component__["a" /* TravelComponent */],
                __WEBPACK_IMPORTED_MODULE_22__login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_23__doctor_doctor_component__["a" /* DoctorComponent */],
                __WEBPACK_IMPORTED_MODULE_24__pregledi_pregledi_component__["a" /* PreglediComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_25__app_routes__["a" /* routing */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_4__appShared_user_service__["a" /* UserService */],
                __WEBPACK_IMPORTED_MODULE_5__appShared_value_services__["a" /* ValueService */],
                __WEBPACK_IMPORTED_MODULE_7__appShared_pacijenti_service__["a" /* PacijentiService */],
                __WEBPACK_IMPORTED_MODULE_6__appShared_doktor_service__["a" /* DoktorService */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export routes */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routing; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__about_about_component__ = __webpack_require__("./src/app/about/about.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ma_ma_component__ = __webpack_require__("./src/app/ma/ma.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home_component__ = __webpack_require__("./src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__hero_details_hero_details_component__ = __webpack_require__("./src/app/hero-details/hero-details.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__technology_technology_component__ = __webpack_require__("./src/app/technology/technology.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__opinion_opinion_component__ = __webpack_require__("./src/app/opinion/opinion.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__design_design_component__ = __webpack_require__("./src/app/design/design.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__business_business_component__ = __webpack_require__("./src/app/business/business.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__culture_culture_component__ = __webpack_require__("./src/app/culture/culture.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__login_login_component__ = __webpack_require__("./src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__doctor_doctor_component__ = __webpack_require__("./src/app/doctor/doctor.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pregledi_pregledi_component__ = __webpack_require__("./src/app/pregledi/pregledi.component.ts");













var routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_3__home_home_component__["a" /* HomeComponent */] },
    { path: 'about', component: __WEBPACK_IMPORTED_MODULE_1__about_about_component__["a" /* AboutComponent */] },
    { path: 'ma', component: __WEBPACK_IMPORTED_MODULE_2__ma_ma_component__["a" /* MaComponent */] },
    { path: 'detail/:id', component: __WEBPACK_IMPORTED_MODULE_4__hero_details_hero_details_component__["a" /* HeroDetailsComponent */] },
    { path: 'opinion', component: __WEBPACK_IMPORTED_MODULE_6__opinion_opinion_component__["a" /* OpinionComponent */] },
    { path: 'technology', component: __WEBPACK_IMPORTED_MODULE_5__technology_technology_component__["a" /* TechnologyComponent */] },
    { path: 'design', component: __WEBPACK_IMPORTED_MODULE_7__design_design_component__["a" /* DesignComponent */] },
    { path: 'business', component: __WEBPACK_IMPORTED_MODULE_8__business_business_component__["a" /* BusinessComponent */] },
    { path: 'culture', component: __WEBPACK_IMPORTED_MODULE_9__culture_culture_component__["a" /* CultureComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_10__login_login_component__["a" /* LoginComponent */] },
    { path: 'doctor', component: __WEBPACK_IMPORTED_MODULE_11__doctor_doctor_component__["a" /* DoctorComponent */] },
    { path: 'pregledi', component: __WEBPACK_IMPORTED_MODULE_12__pregledi_pregledi_component__["a" /* PreglediComponent */] }
];
var routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* RouterModule */].forRoot(routes);


/***/ }),

/***/ "./src/app/business/business.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>Bootstrap grid examples</h1>\n<p class=\"lead\">Basic grid layouts to get you familiar with building within the Bootstrap grid system.</p>\n<h3 class=\"fontHr\">Five grid tiers</h3>\n<p>There are five tiers to the Bootstrap grid system, one for each range of devices we support. Each tier starts at a minimum viewport size and automatically applies to the larger devices unless overridden.</p>\n<div class=\"row\">\n    <div class=\"col-4 fo\">.col-4</div>\n    <div class=\"col-4 fo\">.col-4</div>\n    <div class=\"col-4 fo\">.col-4</div>\n\n</div>\n<br/>\n<div class=\"row\">\n    <div class=\"col-sm-4 fo\">.col-sm-4</div>\n    <div class=\"col-sm-4 fo\">.col-sm-4</div>\n    <div class=\"col-sm-4 fo\">.col-sm-4</div>\n  </div>\n  <br/>\n  <div class=\"row\">\n      <div class=\"col-sm-4 fo\">.col-sm-4</div>\n      <div class=\"col-sm-4 fo\">.col-sm-4</div>\n      <div class=\"col-sm-4 fo\">.col-sm-4</div>\n    </div>\n    <br/>\n    <div class=\"row\">\n        <div class=\"col-lg-4 fo\">.col-lg-4</div>\n        <div class=\"col-lg-4 fo\">.col-lg-4</div>\n        <div class=\"col-lg-4 fo\">.col-lg-4</div>\n      </div>\n      <h3>Three equal columns</h3>\n      <p>Get three equal-width columns <strong>starting at desktops and scaling to large desktops</strong>. On mobile devices, tablets and below, the columns will automatically stack.</p>\n      <div class=\"row\">\n          <div class=\"col-md-4 fo\">.col-md-4</div>\n          <div class=\"col-md-4 fo\">.col-md-4</div>\n          <div class=\"col-md-4 fo\">.col-md-4</div>\n        </div>\n        <h3>Three unequal columns</h3>\n        <p>Get three columns <strong>starting at desktops and scaling to large desktops</strong> of various widths. Remember, grid columns should add up to twelve for a single horizontal block. More than that, and columns start stacking no matter the viewport.</p>\n        <div class=\"row\">\n            <div class=\"col-md-3 fo\">.col-md-3</div>\n            <div class=\"col-md-6 fo\">.col-md-6</div>\n            <div class=\"col-md-3 fo\">.col-md-3</div>\n          </div>\n<div ng-if=\"showData\">\n  <p>Vrijednost Rezultata: {{result}}</p>\n<h3>Two columns</h3>\n<p>Get two columns <strong>starting at desktops and scaling to large desktops</strong>.</p>\n\n<div class=\"row\">\n    <div class=\"col-md-8\">.col-md-8</div>\n    <div class=\"col-md-4\">.col-md-4</div>\n  </div>\n  <h3>Full width, single column</h3>\n  <p class=\"text-warning\">No grid classes are necessary for full-width elements.</p>\n<hr>\n<h3>Two columns with two nested columns</h3>\n<p>Per the documentation, nesting is easy—just put a row of columns within an existing column. This gives you two columns <strong>starting at desktops and scaling to large desktops</strong>, with another two (equal widths) within the larger column.</p>\n<p>At mobile device sizes, tablets and down, these columns and their nested columns will stack.</p>\n\n</div>\n"

/***/ }),

/***/ "./src/app/business/business.component.less":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/business/business.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BusinessComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__appShared_value_services__ = __webpack_require__("./src/appShared/value.services.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BusinessComponent = /** @class */ (function () {
    function BusinessComponent(valueService) {
        this.valueService = valueService;
        this.showData = false;
    }
    BusinessComponent.prototype.ngOnInit = function () {
        // this.takeValue();
    };
    BusinessComponent.prototype.takeValue = function () {
        // this.userSubscription = this.valueService.search().subscribe(status => {
        //       this.result = status;
        //     if (this.result !== '') {
        //       this.showData = true;
        //    } else {
        //      this.showData = false;
        //   }
        // });
    };
    BusinessComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-business',
            template: __webpack_require__("./src/app/business/business.component.html"),
            styles: [__webpack_require__("./src/app/business/business.component.less")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__appShared_value_services__["a" /* ValueService */]])
    ], BusinessComponent);
    return BusinessComponent;
}());



/***/ }),

/***/ "./src/app/culture/culture.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  culture works!\n</p>\n"

/***/ }),

/***/ "./src/app/culture/culture.component.less":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/culture/culture.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CultureComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CultureComponent = /** @class */ (function () {
    function CultureComponent() {
    }
    CultureComponent.prototype.ngOnInit = function () {
    };
    CultureComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-culture',
            template: __webpack_require__("./src/app/culture/culture.component.html"),
            styles: [__webpack_require__("./src/app/culture/culture.component.less")]
        }),
        __metadata("design:paramtypes", [])
    ], CultureComponent);
    return CultureComponent;
}());



/***/ }),

/***/ "./src/app/design/design.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>Bootstrap grid examples</h1>\n<p class=\"lead\">Basic grid layouts to get you familiar with building within the Bootstrap grid system.</p>\n<h3 class=\"fontHr\">Five grid tiers</h3>\n<p>There are five tiers to the Bootstrap grid system, one for each range of devices we support. Each tier starts at a minimum viewport size and automatically applies to the larger devices unless overridden.</p>\n<div class=\"row\">\n    <div class=\"col-4 fo\">.col-4</div>\n    <div class=\"col-4 fo\">.col-4</div>\n    <div class=\"col-4 fo\">.col-4</div>\n\n</div>\n<br/>\n<div class=\"row\">\n    <div class=\"col-sm-4 fo\">.col-sm-4</div>\n    <div class=\"col-sm-4 fo\">.col-sm-4</div>\n    <div class=\"col-sm-4 fo\">.col-sm-4</div>\n  </div>\n  <br/>\n  <div class=\"row\">\n      <div class=\"col-sm-4 fo\">.col-sm-4</div>\n      <div class=\"col-sm-4 fo\">.col-sm-4</div>\n      <div class=\"col-sm-4 fo\">.col-sm-4</div>\n    </div>\n    <br/>\n    <div class=\"row\">\n        <div class=\"col-lg-4 fo\">.col-lg-4</div>\n        <div class=\"col-lg-4 fo\">.col-lg-4</div>\n        <div class=\"col-lg-4 fo\">.col-lg-4</div>\n      </div>\n      <h3>Three equal columns</h3>\n      <p>Get three equal-width columns <strong>starting at desktops and scaling to large desktops</strong>. On mobile devices, tablets and below, the columns will automatically stack.</p>\n      <div class=\"row\">\n          <div class=\"col-md-4 fo\">.col-md-4</div>\n          <div class=\"col-md-4 fo\">.col-md-4</div>\n          <div class=\"col-md-4 fo\">.col-md-4</div>\n        </div>\n        <h3>Three unequal columns</h3>\n        <p>Get three columns <strong>starting at desktops and scaling to large desktops</strong> of various widths. Remember, grid columns should add up to twelve for a single horizontal block. More than that, and columns start stacking no matter the viewport.</p>\n        <div class=\"row\">\n            <div class=\"col-md-3 fo\">.col-md-3</div>\n            <div class=\"col-md-6 fo\">.col-md-6</div>\n            <div class=\"col-md-3 fo\">.col-md-3</div>\n          </div>\n\n<h3>Two columns</h3>\n<p>Get two columns <strong>starting at desktops and scaling to large desktops</strong>.</p>\n\n<div class=\"row\">\n    <div class=\"col-md-8\">.col-md-8</div>\n    <div class=\"col-md-4\">.col-md-4</div>\n  </div>\n  <h3>Full width, single column</h3>\n  <p class=\"text-warning\">No grid classes are necessary for full-width elements.</p>\n<hr>\n<h3>Two columns with two nested columns</h3>\n<p>Per the documentation, nesting is easy—just put a row of columns within an existing column. This gives you two columns <strong>starting at desktops and scaling to large desktops</strong>, with another two (equal widths) within the larger column.</p>\n<p>At mobile device sizes, tablets and down, these columns and their nested columns will stack.</p>\n<div class=\"row\">\n    <div class=\"col-md-8\">\n      .col-md-8\n      <div class=\"row\">\n        <div class=\"col-md-6\">.col-md-6</div>\n        <div class=\"col-md-6\">.col-md-6</div>\n      </div>\n    </div>\n    <div class=\"col-md-4\">.col-md-4</div>\n  </div>\n\n  <h3>Mixed: mobile and desktop</h3>\n"

/***/ }),

/***/ "./src/app/design/design.component.less":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/design/design.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DesignComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DesignComponent = /** @class */ (function () {
    function DesignComponent() {
    }
    DesignComponent.prototype.ngOnInit = function () {
    };
    DesignComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-design',
            template: __webpack_require__("./src/app/design/design.component.html"),
            styles: [__webpack_require__("./src/app/design/design.component.less")]
        }),
        __metadata("design:paramtypes", [])
    ], DesignComponent);
    return DesignComponent;
}());



/***/ }),

/***/ "./src/app/doctor/doctor.component.html":
/***/ (function(module, exports) {

module.exports = "<p>Doktor</p>\r\n\r\n\r\n<section class=\"about text-center\" id=\"about\">\r\n    <div ng-if=\"showData\">\r\n\r\n        <table class=\"table\">\r\n          <thead>\r\n              <tr>\r\n                  <th>Ime prezime</th>\r\n\r\n              </tr>\r\n          </thead>\r\n          <tbody>\r\n          </tbody>\r\n      </table>\r\n\r\n\r\n\r\n<ul>\r\n    <li *ngFor=\"let hero of bonusRules\">\r\n      <p> Količina: {{hero.kolicina}}</p>\r\n    <p> Lijek: {{hero.lijek}}</p>\r\n    <p>  Opis upotrebe: {{hero.opisUpotrebe}}</p>\r\n      </li>\r\n</ul>\r\n\r\n<div>\r\n\r\n      <label>Title</label>\r\n      <input ng-model=\"user.title\">\r\n\r\n\r\n\r\n      <label>Email</label>\r\n      <input ng-model=\"user.email\" type=\"email\">\r\n\r\n  </div>\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/doctor/doctor.component.less":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/doctor/doctor.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DoctorComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__appShared_value_services__ = __webpack_require__("./src/appShared/value.services.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DoctorComponent = /** @class */ (function () {
    function DoctorComponent(valueService) {
        this.valueService = valueService;
        this.showData = false;
        this.serial = '';
    }
    DoctorComponent.prototype.ngOnInit = function () {
        this.getDoctors();
    };
    DoctorComponent.prototype.getDoctors = function () {
        var _this = this;
        this.valueSubscription = this.valueService.GetBonusRules().subscribe(function (status) {
            // this.bonusRules = status;
            _this.showData = true;
        });
    };
    DoctorComponent.prototype.onSelectedChange = function (value) {
        // do something else with the value
        console.log(value);
        // rememberto update the selectedValue
    };
    DoctorComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-doctor',
            template: __webpack_require__("./src/app/doctor/doctor.component.html"),
            styles: [__webpack_require__("./src/app/doctor/doctor.component.less")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__appShared_value_services__["a" /* ValueService */]])
    ], DoctorComponent);
    return DoctorComponent;
}());



/***/ }),

/***/ "./src/app/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/footer/footer.component.less":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-footer',
            template: __webpack_require__("./src/app/footer/footer.component.html"),
            styles: [__webpack_require__("./src/app/footer/footer.component.less")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/header/header.component.html":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/header/header.component.less":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-header',
            template: __webpack_require__("./src/app/header/header.component.html"),
            styles: [__webpack_require__("./src/app/header/header.component.less")]
        }),
        __metadata("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/hero-details/hero-details.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\nName of Student is: {{student.name}}\n</p>\n<p>\n    Age of Student is: {{student.age}}\n    </p>\n    <p>\n        Gender of Student is: {{student.gender}}\n        </p>\n        <p>\n            Dob of Student is: {{student.Don}}\n            </p>\n"

/***/ }),

/***/ "./src/app/hero-details/hero-details.component.less":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/hero-details/hero-details.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeroDetailsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mock_heroes__ = __webpack_require__("./src/app/mock-heroes.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HeroDetailsComponent = /** @class */ (function () {
    function HeroDetailsComponent(router) {
        this.router = router;
        this.student = {
            name: '',
            gender: '',
            age: 0,
            Don: '',
        };
        this.students = [
            { studentID: 1, studentName: 'Steve', gender: 'Male', age: 35, course: 'MCA', DOB: '10/12/1982', grade: 0.7500, rating: 7.5123 },
            { studentID: 2, studentName: 'Bobby', gender: 'Male', age: 32, course: 'MBA', DOB: '12/1/1985', grade: 0.7850, rating: 7.8223 },
            // tslint:disable-next-line:max-line-length
            { studentID: 3, studentName: 'Rina', gender: 'Female', age: 45, course: 'B.Tech', DOB: '9/11/1972', grade: 0.8525, rating: 8.5263 },
            // tslint:disable-next-line:max-line-length
            { studentID: 4, studentName: 'Alex', gender: 'Female', age: 24, course: 'M.Tech', DOB: '1/1/1993', grade: 0.5540, rating: 5.5123 },
            { studentID: 5, studentName: 'Rahul', gender: 'Male', age: 26, course: 'MCA', DOB: '1/21/1991', grade: 0.9550, rating: 9.5534 },
        ];
    }
    HeroDetailsComponent.prototype.getHero = function () {
        var _this = this;
        var id = +this.router.snapshot.paramMap.get('id');
        this.students.forEach(function (item) {
            if (item.studentID === id) {
                _this.student.name = item.studentName;
                _this.student.gender = item.gender;
                _this.student.age = item.age;
                _this.student.Don = item.DOB;
            }
        });
    };
    HeroDetailsComponent.prototype.ngOnInit = function () {
        this.heroes = __WEBPACK_IMPORTED_MODULE_2__mock_heroes__["a" /* HEROES */];
        var id = +this.router.snapshot.paramMap.get('id');
        console.log(id);
        this.getHero();
    };
    HeroDetailsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-hero-details',
            template: __webpack_require__("./src/app/hero-details/hero-details.component.html"),
            styles: [__webpack_require__("./src/app/hero-details/hero-details.component.less")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]])
    ], HeroDetailsComponent);
    return HeroDetailsComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "\n  <div class=\"jumbotron p-3 p-md-5 text-white rounded bg-dark\">\n      <div class=\"col-md-6 px-0\">\n        <h1 class=\"display-4 font-italic\">Title of a longer featured blog post</h1>\n        <p class=\"lead my-3\">Multiple lines of text that form the lede, informing new readers quickly and efficiently about what's most interesting in this post's contents.</p>\n        <p class=\"lead mb-0\"><a href=\"#\" class=\"text-white font-weight-bold\">Continue reading...</a></p>\n      </div>\n    </div>\n    <div class=\"row mb-2\">\n        <div class=\"col-md-6\">\n          <div class=\"card flex-md-row mb-4 box-shadow h-md-250\">\n            <div class=\"card-body d-flex flex-column align-items-start\">\n              <strong class=\"d-inline-block mb-2 text-primary\">World</strong>\n              <h3 class=\"mb-0\">\n                <a class=\"text-dark\" href=\"#\">Featured post</a>\n              </h3>\n              <div class=\"mb-1 text-muted\">Nov 12</div>\n              <p class=\"card-text mb-auto\">This is a wider card with supporting text below as a natural lead-in to additional content.</p>\n              <a href=\"#\">Continue reading</a>\n            </div>\n            <img class=\"card-img-right flex-auto d-none d-lg-block\" data-src=\"holder.js/200x250?theme=thumb\" alt=\"Thumbnail [200x250]\" style=\"width: 200px; height: 250px;\" src=\"data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22200%22%20height%3D%22250%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20200%20250%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_162bded5bf7%20text%20%7B%20fill%3A%23eceeef%3Bfont-weight%3Abold%3Bfont-family%3AArial%2C%20Helvetica%2C%20Open%20Sans%2C%20sans-serif%2C%20monospace%3Bfont-size%3A13pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_162bded5bf7%22%3E%3Crect%20width%3D%22200%22%20height%3D%22250%22%20fill%3D%22%2355595c%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%2256.203125%22%20y%3D%22131%22%3EThumbnail%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E\" data-holder-rendered=\"true\">\n          </div>\n        </div>\n        <div class=\"col-md-6\">\n          <div class=\"card flex-md-row mb-4 box-shadow h-md-250\">\n            <div class=\"card-body d-flex flex-column align-items-start\">\n              <strong class=\"d-inline-block mb-2 text-success\">Design</strong>\n              <h3 class=\"mb-0\">\n                <a class=\"text-dark\" href=\"#\">Post title</a>\n              </h3>\n              <div class=\"mb-1 text-muted\">Nov 11</div>\n              <p class=\"card-text mb-auto\">This is a wider card with supporting text below as a natural lead-in to additional content.</p>\n              <a href=\"#\">Continue reading</a>\n            </div>\n            <img class=\"card-img-right flex-auto d-none d-lg-block\" data-src=\"holder.js/200x250?theme=thumb\" alt=\"Thumbnail [200x250]\" src=\"data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22200%22%20height%3D%22250%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20200%20250%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_162bded5bfb%20text%20%7B%20fill%3A%23eceeef%3Bfont-weight%3Abold%3Bfont-family%3AArial%2C%20Helvetica%2C%20Open%20Sans%2C%20sans-serif%2C%20monospace%3Bfont-size%3A13pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_162bded5bfb%22%3E%3Crect%20width%3D%22200%22%20height%3D%22250%22%20fill%3D%22%2355595c%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%2256.203125%22%20y%3D%22131%22%3EThumbnail%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E\" data-holder-rendered=\"true\" style=\"width: 200px; height: 250px;\">\n          </div>\n        </div>\n      </div>\n\n      <main role=\"main\" class=\"container\">\n          <div class=\"row\">\n            <div class=\"col-md-8 blog-main\">\n              <h3 class=\"pb-3 mb-4 font-italic border-bottom\">\n                From the Firehose\n              </h3>\n\n              <div class=\"blog-post\">\n                <h2 class=\"blog-post-title\">Sample blog post</h2>\n                <p class=\"blog-post-meta\">January 1, 2014 by <a href=\"#\">Mark</a></p>\n\n                <p>This blog post shows a few different types of content that's supported and styled with Bootstrap. Basic typography, images, and code are all supported.</p>\n                <hr>\n                <p>Cum sociis natoque penatibus et magnis <a href=\"#\">dis parturient montes</a>, nascetur ridiculus mus. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Sed posuere consectetur est at lobortis. Cras mattis consectetur purus sit amet fermentum.</p>\n                <blockquote>\n                  <p>Curabitur blandit tempus porttitor. <strong>Nullam quis risus eget urna mollis</strong> ornare vel eu leo. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>\n                </blockquote>\n                <p>Etiam porta <em>sem malesuada magna</em> mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.</p>\n                <h2>Heading</h2>\n                <p>Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>\n                <h3>Sub-heading</h3>\n                <p>Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>\n                <pre><code>Example code block</code></pre>\n                <p>Aenean lacinia bibendum nulla sed consectetur. Etiam porta sem malesuada magna mollis euismod. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa.</p>\n                <h3>Sub-heading</h3>\n                <p>Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean lacinia bibendum nulla sed consectetur. Etiam porta sem malesuada magna mollis euismod. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</p>\n                <ul>\n                  <li>Praesent commodo cursus magna, vel scelerisque nisl consectetur et.</li>\n                  <li>Donec id elit non mi porta gravida at eget metus.</li>\n                  <li>Nulla vitae elit libero, a pharetra augue.</li>\n                </ul>\n                <p>Donec ullamcorper nulla non metus auctor fringilla. Nulla vitae elit libero, a pharetra augue.</p>\n                <ol>\n                  <li>Vestibulum id ligula porta felis euismod semper.</li>\n                  <li>Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</li>\n                  <li>Maecenas sed diam eget risus varius blandit sit amet non magna.</li>\n                </ol>\n                <p>Cras mattis consectetur purus sit amet fermentum. Sed posuere consectetur est at lobortis.</p>\n              </div><!-- /.blog-post -->\n\n              <div class=\"blog-post\">\n                <h2 class=\"blog-post-title\">Another blog post</h2>\n                <p class=\"blog-post-meta\">December 23, 2013 by <a href=\"#\">Jacob</a></p>\n\n                <p>Cum sociis natoque penatibus et magnis <a href=\"#\">dis parturient montes</a>, nascetur ridiculus mus. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Sed posuere consectetur est at lobortis. Cras mattis consectetur purus sit amet fermentum.</p>\n                <blockquote>\n                  <p>Curabitur blandit tempus porttitor. <strong>Nullam quis risus eget urna mollis</strong> ornare vel eu leo. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>\n                </blockquote>\n                <p>Etiam porta <em>sem malesuada magna</em> mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.</p>\n                <p>Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>\n              </div><!-- /.blog-post -->\n\n              <div class=\"blog-post\">\n                <h2 class=\"blog-post-title\">New feature</h2>\n                <p class=\"blog-post-meta\">December 14, 2013 by <a href=\"#\">Chris</a></p>\n\n                <p>Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean lacinia bibendum nulla sed consectetur. Etiam porta sem malesuada magna mollis euismod. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</p>\n                <ul>\n                  <li>Praesent commodo cursus magna, vel scelerisque nisl consectetur et.</li>\n                  <li>Donec id elit non mi porta gravida at eget metus.</li>\n                  <li>Nulla vitae elit libero, a pharetra augue.</li>\n                </ul>\n                <p>Etiam porta <em>sem malesuada magna</em> mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.</p>\n                <p>Donec ullamcorper nulla non metus auctor fringilla. Nulla vitae elit libero, a pharetra augue.</p>\n              </div><!-- /.blog-post -->\n\n              <nav class=\"blog-pagination\">\n                <a class=\"btn btn-outline-primary\" href=\"#\">Older</a>\n                <a class=\"btn btn-outline-secondary disabled\" href=\"#\">Newer</a>\n              </nav>\n\n            </div><!-- /.blog-main -->\n\n            <aside class=\"col-md-4 blog-sidebar\">\n              <div class=\"p-3 mb-3 bg-light rounded\">\n                <h4 class=\"font-italic\">About</h4>\n                <p class=\"mb-0\">Etiam porta <em>sem malesuada magna</em> mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.</p>\n              </div>\n\n              <div class=\"p-3\">\n                <h4 class=\"font-italic\">Archives</h4>\n                <ol class=\"list-unstyled mb-0\">\n                  <li><a href=\"#\">March 2014</a></li>\n                  <li><a href=\"#\">February 2014</a></li>\n                  <li><a href=\"#\">January 2014</a></li>\n                  <li><a href=\"#\">December 2013</a></li>\n                  <li><a href=\"#\">November 2013</a></li>\n                  <li><a href=\"#\">October 2013</a></li>\n                  <li><a href=\"#\">September 2013</a></li>\n                  <li><a href=\"#\">August 2013</a></li>\n                  <li><a href=\"#\">July 2013</a></li>\n                  <li><a href=\"#\">June 2013</a></li>\n                  <li><a href=\"#\">May 2013</a></li>\n                  <li><a href=\"#\">April 2013</a></li>\n                </ol>\n              </div>\n\n              <div class=\"p-3\">\n                <h4 class=\"font-italic\">Elsewhere</h4>\n                <ol class=\"list-unstyled\">\n                  <li><a href=\"#\">GitHub</a></li>\n                  <li><a href=\"#\">Twitter</a></li>\n                  <li><a href=\"#\">Facebook</a></li>\n                </ol>\n              </div>\n            </aside><!-- /.blog-sidebar -->\n\n          </div><!-- /.row -->\n\n        </main>\n\n"

/***/ }),

/***/ "./src/app/home/home.component.less":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mock_heroes__ = __webpack_require__("./src/app/mock-heroes.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomeComponent = /** @class */ (function () {
    function HomeComponent(router) {
        this.router = router;
        this.id = 0;
        this.routeLink = '';
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.heroes = __WEBPACK_IMPORTED_MODULE_2__mock_heroes__["a" /* HEROES */];
    };
    HomeComponent.prototype.OpenDetails = function (hero) {
        this.id = hero.id;
        this.routeLink = '/detail/' + hero.id;
        this.router.navigate([this.routeLink]);
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-home',
            template: __webpack_require__("./src/app/home/home.component.html"),
            styles: [__webpack_require__("./src/app/home/home.component.less")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<p>Login page</p>\r\n\r\n<form #loginForm=\"ngForm\" class=\"col s12 white\">\r\n    <div class=\"row\">\r\n      <div class=\"input-field col s12\">\r\n        <i class=\"material-icons prefix\">account_circle</i>\r\n        <input type=\"text\" #UserName ngModel name=\"UserName\" placeholder=\"Username\" required>\r\n      </div>\r\n    </div>\r\n    <div class=\"row\">\r\n       <div class=\"input-field col s12\">\r\n         <i class=\"material-icons prefix\">vpn_key</i>\r\n         <input type=\"password\" #Password ngModel name=\"Password\" placeholder=\"Password\" required>\r\n       </div>\r\n     </div>\r\n     <div class=\"row\">\r\n         <div class=\"input-field col s12\">\r\n           <button [disabled]=\"!loginForm.valid\" class=\"btn-large btn-submit\" type=\"submit\">Login</button>\r\n         </div>\r\n       </div>\r\n </form>\r\n"

/***/ }),

/***/ "./src/app/login/login.component.less":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__appShared_user_service__ = __webpack_require__("./src/appShared/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginComponent = /** @class */ (function () {
    function LoginComponent(userService, router) {
        this.userService = userService;
        this.router = router;
        this.isLoginError = false;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-login',
            template: __webpack_require__("./src/app/login/login.component.html"),
            styles: [__webpack_require__("./src/app/login/login.component.less")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__appShared_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/ma/ma.component.html":
/***/ (function(module, exports) {

module.exports = "<table class=\"table table-responsive table-bordered table-striped\">  \n    <thead>  \n        <tr>  \n            <th>Course ID</th>  \n            <th>Name</th>  \n            <th>Category</th>  \n        </tr>  \n    </thead>  \n    <tbody>  \n        <tr *ngFor=\"let s of courseList;\">  \n            <td>{{s.courseID}}</td>  \n            <td>{{s.courseName | uppercase}}</td>  \n            <td>{{s.category}}</td>  \n        </tr>  \n    </tbody>  \n</table> "

/***/ }),

/***/ "./src/app/ma/ma.component.less":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/ma/ma.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MaComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MaComponent = /** @class */ (function () {
    function MaComponent() {
    }
    MaComponent.prototype.getCourses = function () {
        this.courseList = [
            { courseID: 101, courseName: 'BCA', category: 'IT' },
            { courseID: 102, courseName: 'MCA', category: 'IT' },
            { courseID: 103, courseName: 'MBA', category: 'MANAGEMENT' },
            { courseID: 104, courseName: 'B.TECH', category: 'CS' },
            { courseID: 105, courseName: 'B.ARCH', category: 'ARCHITECTURE' },
            { courseID: 106, courseName: 'BBA', category: 'MANAGEMENT' },
        ];
    };
    MaComponent.prototype.ngOnInit = function () {
        this.getCourses();
    };
    MaComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-ma',
            template: __webpack_require__("./src/app/ma/ma.component.html"),
            styles: [__webpack_require__("./src/app/ma/ma.component.less")]
        }),
        __metadata("design:paramtypes", [])
    ], MaComponent);
    return MaComponent;
}());



/***/ }),

/***/ "./src/app/mock-heroes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HEROES; });
var HEROES = [
    { id: 11, name: 'Mr. Nice' },
    { id: 12, name: 'Narco' },
    { id: 13, name: 'Bombasto' },
    { id: 14, name: 'Celeritas' },
    { id: 15, name: 'Magneta' },
    { id: 16, name: 'RubberMan' },
    { id: 17, name: 'Dynama' },
    { id: 18, name: 'Dr IQ' },
    { id: 19, name: 'Magma' },
    { id: 20, name: 'Tornado' }
];


/***/ }),

/***/ "./src/app/opinion/opinion.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>Bootstrap grid examples</h1>\n<p class=\"lead\">Basic grid layouts to get you familiar with building within the Bootstrap grid system.</p>\n<h3 class=\"fontHr\">Five grid tiers</h3>\n<p>There are five tiers to the Bootstrap grid system, one for each range of devices we support. Each tier starts at a minimum viewport size and automatically applies to the larger devices unless overridden.</p>\n<div class=\"row\">\n    <div class=\"col-4 fo\">.col-4</div>\n    <div class=\"col-4 fo\">.col-4</div>\n    <div class=\"col-4 fo\">.col-4</div>\n\n</div>\n<br/>\n<div class=\"row\">\n    <div class=\"col-sm-4 fo\">.col-sm-4</div>\n    <div class=\"col-sm-4 fo\">.col-sm-4</div>\n    <div class=\"col-sm-4 fo\">.col-sm-4</div>\n  </div>\n  <br/>\n  <div class=\"row\">\n      <div class=\"col-sm-4 fo\">.col-sm-4</div>\n      <div class=\"col-sm-4 fo\">.col-sm-4</div>\n      <div class=\"col-sm-4 fo\">.col-sm-4</div>\n    </div>\n    <br/>\n    <div class=\"row\">\n        <div class=\"col-lg-4 fo\">.col-lg-4</div>\n        <div class=\"col-lg-4 fo\">.col-lg-4</div>\n        <div class=\"col-lg-4 fo\">.col-lg-4</div>\n      </div>\n      <h3>Three equal columns</h3>\n      <p>Get three equal-width columns <strong>starting at desktops and scaling to large desktops</strong>. On mobile devices, tablets and below, the columns will automatically stack.</p>\n      <div class=\"row\">\n          <div class=\"col-md-4 fo\">.col-md-4</div>\n          <div class=\"col-md-4 fo\">.col-md-4</div>\n          <div class=\"col-md-4 fo\">.col-md-4</div>\n        </div>\n        <h3>Three unequal columns</h3>\n        <p>Get three columns <strong>starting at desktops and scaling to large desktops</strong> of various widths. Remember, grid columns should add up to twelve for a single horizontal block. More than that, and columns start stacking no matter the viewport.</p>\n        <div class=\"row\">\n            <div class=\"col-md-3 fo\">.col-md-3</div>\n            <div class=\"col-md-6 fo\">.col-md-6</div>\n            <div class=\"col-md-3 fo\">.col-md-3</div>\n          </div>\n\n<h3>Two columns</h3>\n<p>Get two columns <strong>starting at desktops and scaling to large desktops</strong>.</p>\n\n<div class=\"row\">\n    <div class=\"col-md-8\">.col-md-8</div>\n    <div class=\"col-md-4\">.col-md-4</div>\n  </div>\n  <h3>Full width, single column</h3>\n  <p class=\"text-warning\">No grid classes are necessary for full-width elements.</p>\n<hr>\n<h3>Two columns with two nested columns</h3>\n<p>Per the documentation, nesting is easy—just put a row of columns within an existing column. This gives you two columns <strong>starting at desktops and scaling to large desktops</strong>, with another two (equal widths) within the larger column.</p>\n<p>At mobile device sizes, tablets and down, these columns and their nested columns will stack.</p>\n<div class=\"row\">\n    <div class=\"col-md-8\">\n      .col-md-8\n      <div class=\"row\">\n        <div class=\"col-md-6\">.col-md-6</div>\n        <div class=\"col-md-6\">.col-md-6</div>\n      </div>\n    </div>\n    <div class=\"col-md-4\">.col-md-4</div>\n  </div>\n\n  <h3>Mixed: mobile and desktop</h3>\n"

/***/ }),

/***/ "./src/app/opinion/opinion.component.less":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/opinion/opinion.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OpinionComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var OpinionComponent = /** @class */ (function () {
    function OpinionComponent() {
    }
    OpinionComponent.prototype.ngOnInit = function () {
    };
    OpinionComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-opinion',
            template: __webpack_require__("./src/app/opinion/opinion.component.html"),
            styles: [__webpack_require__("./src/app/opinion/opinion.component.less")]
        }),
        __metadata("design:paramtypes", [])
    ], OpinionComponent);
    return OpinionComponent;
}());



/***/ }),

/***/ "./src/app/politics/politics.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  politics works!\n</p>\n"

/***/ }),

/***/ "./src/app/politics/politics.component.less":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/politics/politics.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PoliticsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PoliticsComponent = /** @class */ (function () {
    function PoliticsComponent() {
    }
    PoliticsComponent.prototype.ngOnInit = function () {
    };
    PoliticsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-politics',
            template: __webpack_require__("./src/app/politics/politics.component.html"),
            styles: [__webpack_require__("./src/app/politics/politics.component.less")]
        }),
        __metadata("design:paramtypes", [])
    ], PoliticsComponent);
    return PoliticsComponent;
}());



/***/ }),

/***/ "./src/app/pregledi/pregledi.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n  <div class=\"main-container\">\r\n<div class=\"login-wrap\">\r\n\r\n    <h2>\r\nttt\r\n    </h2>\r\n\r\n    <section id=\"loginForm\">\r\n\r\n        <form name=\"form\" (ngSubmit)=\"f.form.valid  && login(f.value)\" #f=\"ngForm\" novalidate>\r\n            <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !username.valid }\">\r\n                <label for=\"username\">Username</label>\r\n                <input type=\"text\" class=\"form-control\" name=\"username\" [(ngModel)]=\"model.username\" #username=\"ngModel\" required />\r\n                <div *ngIf=\"f.submitted && !username.valid\" class=\"help-block\">Username is required</div>\r\n            </div>\r\n            <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !password.valid }\">\r\n                <label for=\"password\">Password</label>\r\n                <input type=\"password\" class=\"form-control\" name=\"password\" [(ngModel)]=\"model.password\" #password=\"ngModel\" required />\r\n                <div *ngIf=\"f.submitted && !password.valid\" class=\"help-block\">Password is required</div>\r\n            </div>\r\n            <div class=\"form-group\">\r\n                <button  class=\"btn btn-primary\">Login</button>\r\n                <a [routerLink]=\"['/register']\" class=\"btn btn-link\">Register</a>\r\n            </div>\r\n        </form>\r\n    </section>\r\n\r\n</div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/pregledi/pregledi.component.less":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pregledi/pregledi.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PreglediComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__appShared_value_services__ = __webpack_require__("./src/appShared/value.services.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PreglediComponent = /** @class */ (function () {
    function PreglediComponent(valueService) {
        this.valueService = valueService;
        this.model = {};
        this.rece = {};
        this.myModel = {
            username: '',
            password: ''
        };
        this.book = {};
    }
    PreglediComponent.prototype.ngOnInit = function () {
    };
    PreglediComponent.prototype.reset = function () {
        this.book.kolicina = null;
        this.book.lijek = null;
        this.errorMessage = null;
        this.lijekName = null;
        this.model.username = null;
        this.book.opisUpotrebe = null;
    };
    PreglediComponent.prototype.login = function (form) {
        this.book.lijek = form.username,
            this.book.opisUpotrebe = form.password,
            this.book.kolicina = 1;
        this.valueService.addRecepte(this.book);
        this.valueService.addBookWithObservable(this.book).subscribe(function (data) { return console.log(data); });
    };
    PreglediComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-pregledi',
            template: __webpack_require__("./src/app/pregledi/pregledi.component.html"),
            styles: [__webpack_require__("./src/app/pregledi/pregledi.component.less")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__appShared_value_services__["a" /* ValueService */]])
    ], PreglediComponent);
    return PreglediComponent;
}());



/***/ }),

/***/ "./src/app/technology/technology.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>Bootstrap grid examples</h1>\n<p class=\"lead\">Basic grid layouts to get you familiar with building within the Bootstrap grid system.</p>\n<h3 class=\"fontHr\">Five grid tiers</h3>\n<p>There are five tiers to the Bootstrap grid system, one for each range of devices we support. Each tier starts at a minimum viewport size and automatically applies to the larger devices unless overridden.</p>\n<div class=\"row\">\n    <div class=\"col-4 fo\">.col-4</div>\n    <div class=\"col-4 fo\">.col-4</div>\n    <div class=\"col-4 fo\">.col-4</div>\n\n</div>\n<br/>\n<div class=\"row\">\n    <div class=\"col-sm-4 fo\">.col-sm-4</div>\n    <div class=\"col-sm-4 fo\">.col-sm-4</div>\n    <div class=\"col-sm-4 fo\">.col-sm-4</div>\n  </div>\n  <br/>\n  <div class=\"row\">\n      <div class=\"col-sm-4 fo\">.col-sm-4</div>\n      <div class=\"col-sm-4 fo\">.col-sm-4</div>\n      <div class=\"col-sm-4 fo\">.col-sm-4</div>\n    </div>\n    <br/>\n    <div class=\"row\">\n        <div class=\"col-lg-4 fo\">.col-lg-4</div>\n        <div class=\"col-lg-4 fo\">.col-lg-4</div>\n        <div class=\"col-lg-4 fo\">.col-lg-4</div>\n      </div>\n      <h3>Three equal columns</h3>\n      <p>Get three equal-width columns <strong>starting at desktops and scaling to large desktops</strong>. On mobile devices, tablets and below, the columns will automatically stack.</p>\n      <div class=\"row\">\n          <div class=\"col-md-4 fo\">.col-md-4</div>\n          <div class=\"col-md-4 fo\">.col-md-4</div>\n          <div class=\"col-md-4 fo\">.col-md-4</div>\n        </div>\n        <h3>Three unequal columns</h3>\n        <p>Get three columns <strong>starting at desktops and scaling to large desktops</strong> of various widths. Remember, grid columns should add up to twelve for a single horizontal block. More than that, and columns start stacking no matter the viewport.</p>\n        <div class=\"row\">\n            <div class=\"col-md-3 fo\">.col-md-3</div>\n            <div class=\"col-md-6 fo\">.col-md-6</div>\n            <div class=\"col-md-3 fo\">.col-md-3</div>\n          </div>\n\n<h3>Two columns</h3>\n<p>Get two columns <strong>starting at desktops and scaling to large desktops</strong>.</p>\n\n<div class=\"row\">\n    <div class=\"col-md-8\">.col-md-8</div>\n    <div class=\"col-md-4\">.col-md-4</div>\n  </div>\n  <h3>Full width, single column</h3>\n  <p class=\"text-warning\">No grid classes are necessary for full-width elements.</p>\n<hr>\n<h3>Two columns with two nested columns</h3>\n<p>Per the documentation, nesting is easy—just put a row of columns within an existing column. This gives you two columns <strong>starting at desktops and scaling to large desktops</strong>, with another two (equal widths) within the larger column.</p>\n<p>At mobile device sizes, tablets and down, these columns and their nested columns will stack.</p>\n<div class=\"row\">\n    <div class=\"col-md-8\">\n      .col-md-8\n      <div class=\"row\">\n        <div class=\"col-md-6\">.col-md-6</div>\n        <div class=\"col-md-6\">.col-md-6</div>\n      </div>\n    </div>\n    <div class=\"col-md-4\">.col-md-4</div>\n  </div>\n\n  <h3>Mixed: mobile and desktop</h3>\n"

/***/ }),

/***/ "./src/app/technology/technology.component.less":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/technology/technology.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TechnologyComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TechnologyComponent = /** @class */ (function () {
    function TechnologyComponent() {
    }
    TechnologyComponent.prototype.ngOnInit = function () {
    };
    TechnologyComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-technology',
            template: __webpack_require__("./src/app/technology/technology.component.html"),
            styles: [__webpack_require__("./src/app/technology/technology.component.less")]
        }),
        __metadata("design:paramtypes", [])
    ], TechnologyComponent);
    return TechnologyComponent;
}());



/***/ }),

/***/ "./src/app/travel/travel.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  travel works!\n</p>\n"

/***/ }),

/***/ "./src/app/travel/travel.component.less":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/travel/travel.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TravelComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TravelComponent = /** @class */ (function () {
    function TravelComponent() {
    }
    TravelComponent.prototype.ngOnInit = function () {
    };
    TravelComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-travel',
            template: __webpack_require__("./src/app/travel/travel.component.html"),
            styles: [__webpack_require__("./src/app/travel/travel.component.less")]
        }),
        __metadata("design:paramtypes", [])
    ], TravelComponent);
    return TravelComponent;
}());



/***/ }),

/***/ "./src/appShared/doktor.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DoktorService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_operators__ = __webpack_require__("./node_modules/rxjs/_esm5/operators.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DoktorService = /** @class */ (function () {
    /**
     * Constructor.
     *
     * @param {Http} private http
     * @param {ConstantsService} private constants
     * @param {LogService} private logger
     */
    function DoktorService(http) {
        this.http = http;
        this.baseUrl = window.location.origin;
    }
    DoktorService.prototype.getDocotrs = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Accept': 'application/json'
        });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: headers });
        return this.http
            .get('http://localhost:9699/api/v1/doctors/doktori', options).pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["a" /* map */])(function (response) { return extractData(response); }));
        function extractData(response) {
            if (response.status !== 200) {
                return;
            }
            var data = response.json().recepti;
            if (!data.length) {
                return;
            }
            var rules = [];
            if (data.length) {
                rules = data;
            }
            return rules;
        }
    };
    DoktorService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], DoktorService);
    return DoktorService;
}());



/***/ }),

/***/ "./src/appShared/interfaces/pregledi.interfaces.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Book; });
var Book = /** @class */ (function () {
    function Book() {
    }
    return Book;
}());



/***/ }),

/***/ "./src/appShared/pacijenti.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PacijentiService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_operators__ = __webpack_require__("./node_modules/rxjs/_esm5/operators.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PacijentiService = /** @class */ (function () {
    /**
     * Constructor.
     *
     * @param {Http} private http
     * @param {ConstantsService} private constants
     * @param {LogService} private logger
     */
    function PacijentiService(http) {
        this.http = http;
        this.baseUrl = window.location.origin;
    }
    PacijentiService.prototype.PacijentiGet = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Accept': 'application/json'
        });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: headers });
        return this.http
            .get('http://localhost:9699/api/v1/pacients/pacijenti', options).pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["a" /* map */])(function (response) { return extractData(response); }));
        function extractData(response) {
            if (response.status !== 200) {
                return;
            }
            var data = response.json().recepti;
            if (!data.length) {
                return;
            }
            var rules = [];
            if (data.length) {
                rules = data;
            }
            return rules;
        }
    };
    PacijentiService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], PacijentiService);
    return PacijentiService;
}());



/***/ }),

/***/ "./src/appShared/user.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operators__ = __webpack_require__("./node_modules/rxjs/_esm5/operators.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UserService = /** @class */ (function () {
    /**
     * Constructor.
     *
     * @param {Http} private http
     * @param {ConstantsService} private constants
     * @param {LogService} private logger
     */
    function UserService(http, https) {
        this.http = http;
        this.https = https;
        this.rootUrl = 'http://localhost:38454/api/values/';
    }
    /**
     * True if is authorized, otherwise false.
     */
    UserService.prototype.search = function () {
        return this.http.get('http://localhost:38454/api/values').pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["a" /* map */])(function (res) {
            if (res.json().length > 0) {
                return res.json();
            }
        }));
    };
    UserService.prototype.logResponse = function (response) {
        // console.log(response);
        // this.log.debug(response); // ovo ne radi
    };
    UserService.prototype.extractData = function (response) {
        // api ce vratiti clanski broj, ako jeste
        return response.json().length > 0;
    };
    UserService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/appShared/value.services.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ValueService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__appShared_interfaces_pregledi_interfaces__ = __webpack_require__("./src/appShared/interfaces/pregledi.interfaces.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ValueService = /** @class */ (function () {
    /**
     * Constructor.
     *
     * @param {Http} private http
     * @param {ConstantsService} private constants
     * @param {LogService} private logger
     */
    function ValueService(http) {
        this.http = http;
        this.kolici = 0;
        this.totalPairsBonus = 0;
        this.Rules = new __WEBPACK_IMPORTED_MODULE_2__appShared_interfaces_pregledi_interfaces__["a" /* Book */]();
        this.baseUrl = window.location.origin;
    }
    /**
     * True if is authorized, otherwise false.
     */
    ValueService.prototype.GetBonusRules = function () {
        return this.http
            .get('http://localhost:9699/api/v1/recepti/recepti');
        // function extractData(response: Response) {
        //   if (response.status !== 200) {
        //     return;
        //   }
        //   const data = response.json().recepti;
        //   if (!data.length) {
        //     return;
        //   }
        //   let rules: Array<TaxRule> = [];
        //   if (data.length) {
        //     rules = data;
        //   }
        //   return rules;
        // }
    };
    ValueService.prototype.search = function () {
        return null;
    };
    ValueService.prototype.addRecepte = function (rece) {
        var recepti = {
            kolicina: rece.kolicina,
            lijek: rece.lijek,
            opisUpotrebe: rece.opisUpotrebe
        };
        this.Rules = recepti;
    };
    ValueService.prototype.addBook = function () {
        // return this.http.post(
        //   "http://localhost:9699/api/v1/recepti/spasi",
        //   this.Rules
        // );
    };
    ValueService.prototype.addBookWithObservable = function (book) {
        var httpOptions = {
            headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            })
        };
        return this.http.post('http://localhost:9699/api/v1/recepti/spasi', book, httpOptions);
    };
    ValueService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], ValueService);
    return ValueService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map