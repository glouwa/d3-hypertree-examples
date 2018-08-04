/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var i = __webpack_require__(4);
var t = __webpack_require__(5);
exports.spinner_html = "\n<div id=\"rslidy-spinner\" class=\"rslidy-spinner-overlay\">\n<div class=\"rslidy-spinner\"></div></div>";
exports.help_text = "\n<div id=\"rslidy-help\" class=\"rslidy-help-overlay\">\n  <div class=\"rslidy-help-popup\">\n  <h2>" + t.help[0] + "</h2>\n  <a class=\"rslidy-help-close\" href=\"#\">&times;</a>\n    <div class=\"rslidy-help-content\">\n    <p>" + t.help[1] + "</p>\n    <ul><li>\n    " + t.help[2] + "\n    </li><li>\n    " + t.help[3] + "\n    </li><li>\n    " + t.help[4] + "\n    </li><li>\n    " + t.help[5] + "\n    </li><li>\n    " + t.help[6] + "\n    </li><li>\n    " + t.help[7] + "\n    </li><li>\n    " + t.help[8] + "\n    </li></ul>\n    </div>\n  </div>\n</div>";
exports.content_section = "\n<div id=\"rslidy-content-section\">\n  <div id=\"rslidy-margin-tap\">\n    <div id=\"rslidy-left-margin\" class=\"rslidy-margin-tap-button\"></div>\n    <div id=\"rslidy-right-margin\" class=\"rslidy-margin-tap-button\"></div>\n  </div>\n</div>";
exports.notes_text = "\n<div id=\"rslidy-speakernotes-overlay\"></div>";
exports.image_viewer = "\n<div class=\"rslidy-image-viewer rslidy-ui\">\n  <div class=\"rslidy-image-viewer-container\">\n    <img draggable=\"false\" class=\"rslidy-image-viewer-content\">\n  </div>\n\n  <span class=\"rslidy-iv-button rslidy-iv-zoom-reset\">&#x25A2;</span>\n  <span class=\"rslidy-iv-button rslidy-iv-zoom-in\">&plus;</span>\n  <span class=\"rslidy-iv-button rslidy-iv-zoom-out\">&minus;</span>\n  <span class=\"rslidy-iv-button rslidy-iv-close\">&times;</span>\n</div>";
exports.html_toc = "\n<div id=\"rslidy-overview-toc\" class=\"rslidy-ui\"></div>";
exports.html_slides = "\n<div id=\"rslidy-overview-slides\" class=\"rslidy-ui\"></div>";
exports.thumbnail_html = function (idx, title, xofy, slide) { return "\n<div class=\"rslidy-slide-thumbnail\" data-slideindex=\"" + idx + "\">\n  <div class=\"rslidy-thumbnail-caption rslidy-noselect\">" + xofy + "</div>\n  <div class=\"rslidy-slide-clickelement\" data-slideindex=\"" + idx + "\">\n    <div class=\"rslidy-overview-item rslidy-noselect\" data-slideindex=\"" + idx + "\">" + slide + "</div>\n  </div>\n</div>"; };
exports.link_html = function (idx, title, xofy) { return "\n<div class=\"rslidy-slide-link\" data-slideindex=\"" + idx + "\">" + title + "</div>"; };
exports.settings_html = "\n<div id=\"rslidy-menu\" class=\"rslidy-hidden rslidy-ui\">\n  <div class=\"rslidy-menu-content\">\n    <a id=\"rslidy-button-help\" href=\"#rslidy-help\"><i class=\"rslidy-menu-button\">" + i.help_icon + "</i></a>\n  </div>\n  <div class=\"rslidy-menu-content\">\n    <label id=\"rslidy-checkbox-tilt-text\" class=\"rslidy-disabled\">\n      " + t.settings[0] + " \n      <input type=\"checkbox\" value=\"Tilt\" id=\"rslidy-checkbox-tilt\" disabled>\n      <label for=\"rslidy-checkbox-tilt\">" + i.slider_icon + "</label>\n    </label>\n  </div>\n  <div class=\"rslidy-menu-content\">\n    <label id=\"rslidy-checkbox-shake-text\" class=\"rslidy-disabled\">\n      " + t.settings[1] + " \n      <input type=\"checkbox\" value=\"Shake\" id=\"rslidy-checkbox-shake\" disabled>\n      <label for=\"rslidy-checkbox-shake\">" + i.slider_icon + "</label>\n    </label>\n  </div>\n  <div class=\"rslidy-menu-content\">\n    <label>\n      " + t.settings[2] + " \n      <input type=\"checkbox\" value=\"Tap\" id=\"rslidy-checkbox-margintap\"  checked>\n      <label for=\"rslidy-checkbox-margintap\">" + i.slider_icon + "</label>\n    </label>\n  </div>\n  <div class=\"rslidy-menu-content\">\n    <label>\n      " + t.settings[3] + " \n      <input type=\"checkbox\" value=\"Low Light Mode\" id=\"rslidy-checkbox-lowlightmode\">\n      <label for=\"rslidy-checkbox-lowlightmode\">" + i.slider_icon + "</label>\n    </label>\n  </div>\n  <div class=\"rslidy-menu-content\">\n    <a href=\"#\" id=\"rslidy-button-zoom-less\"><span class=\"rslidy-menu-button\">" + i.zoom_minus_icon + "</span></a>\n    <a href=\"#\" id=\"rslidy-button-zoom-reset\"><span class=\"rslidy-menu-button\">" + i.zoom_reset_icon + "</span></a>\n    <a href=\"#\" id=\"rslidy-button-zoom-more\"><span class=\"rslidy-menu-button\">" + i.zoom_plus_icon + "</span></a>\n  </div>\n</div>";
exports.statusbar_html = "\n<div id=\"rslidy-status-bar-area\" class=\"rslidy-ui\">\n  <div id=\"rslidy-sb-show-trapezoid\" class=\"rslidy-hidden\">\n  <button id=\"rslidy-status-bar-show-button\" class=\"rslidy-show-button\" title=\"" + t.statusbar[0] + "\">\n    <i class=\"rslidy-sb-button rslidy-sb-show\">" + i.hide_icon + "</i>\n  </button>\n  </div>\n  <div id=\"rslidy-status-bar\">\n    <div id=\"rslidy-progress-bar\"></div>\n    <div id=\"rslidy-progress-bar-bg\"></div>\n    <div id=\"rslidy-progress-bar-nubs\"></div>\n    <div id=\"rslidy-status-bar-content\">\n      <button id=\"rslidy-button-overview\" class=\"rslidy-status-bar-button rslidy-float-left\" title=\"" + t.statusbar[1] + "\">\n        <i class=\"rslidy-sb-button\">" + i.overview_icon + "</i>\n      </button>\n      <button id=\"rslidy-status-bar-hide-button\" class=\"rslidy-status-bar-button rslidy-float-left\" title=\"" + t.statusbar[2] + "\">\n        <i class=\"rslidy-sb-button\">" + i.hide_icon + "</i>\n      </button>\n\n      <div id=\"rslidy-status-bar-button-nav\">\n        <button id=\"rslidy-status-bar-nav-button-first\" class=\"rslidy-status-bar-button\" title=\"" + t.statusbar[3] + "\">\n            <i class=\"rslidy-sb-button rslidy-mirror\">" + i.last_icon + "</i>\n        </button>\n\n        <button id=\"rslidy-status-bar-nav-button-previous\" class=\"rslidy-status-bar-button\" title=\"" + t.statusbar[4] + "\">\n            <i class=\"rslidy-sb-button rslidy-mirror\">" + i.next_icon + "</i>\n        </button> \n        <div class=\"rslidy-status-bar-slide\"><input value=\"1\" id=\"rslidy-slide-input\" type=\"textbox\" maxlength=\"3\"></div>\n        <div class=\"rslidy-status-bar-slide\" id=\"rslidy-slide-caption\"></div>\n        <button id=\"rslidy-status-bar-nav-button-next\" class=\"rslidy-status-bar-button\"  title=\"" + t.statusbar[5] + "\">\n            <i class=\"rslidy-sb-button\">" + i.next_icon + "</i>\n        </button>\n        <button id=\"rslidy-status-bar-nav-button-last\" class=\"rslidy-status-bar-button\" title=\"" + t.statusbar[6] + "\">\n            <i class=\"rslidy-sb-button\">" + i.last_icon + "</i>                \n        </button>\n      </div>\n      \n      <button id=\"rslidy-button-toc\" class=\"rslidy-status-bar-button rslidy-float-right\" title=\"" + t.statusbar[7] + "\">\n        <i class=\"rslidy-sb-button\">" + i.toc_icon + "</i>\n      </button>\n      <button id=\"rslidy-button-menu\" class=\"rslidy-status-bar-button rslidy-float-right\" title=\"" + t.statusbar[8] + "\">            \n        <i class=\"rslidy-sb-button\">" + i.settings_icon + "</i>\n      </button>\n\n      <div class=\"rslidy-float-right\" id=\"rslidy-timer\">00:00</div>\n    </div>\n  </div>\n</div>";


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = __webpack_require__(2);
var settings_1 = __webpack_require__(3);
var status_bar_1 = __webpack_require__(6);
var overview_1 = __webpack_require__(7);
var content_1 = __webpack_require__(8);
var image_viewer_1 = __webpack_require__(10);
var html_definitions_1 = __webpack_require__(0);
// Implements the core functionality.
var Rslidy = /** @class */ (function () {
    function Rslidy() {
        // Members
        this.utils = new utils_1.Utils();
        this.os = window.navigator.platform;
        this.num_slides = 0;
        this.url_delimiter = "#";
        this.shift_pressed = false;
        this.ctrl_pressed = false;
        this.alt_pressed = false;
        this.meta_pressed = false;
        this.low_light_mode = false;
        this.timer_enabled = false;
        this.timer_time = 0;
        this.timer_thread = null;
        this.key_enter = 13;
        this.key_space = 32;
        this.key_pg_up = 33;
        this.key_pg_down = 34;
        this.key_end = 35;
        this.key_home = 36;
        this.key_left = 37;
        this.key_up = 38;
        this.key_right = 39;
        this.key_down = 40;
        this.key_n = 78;
        this.key_t = 84;
        //Custom settings
        this.image_viewer = true;
        this.presentation_time = 0; // Presentation time in seconds. 0 to disable (hides timer).
        this.close_menu_on_selection = false;
        this.close_navigation_on_selection = false;
        this.start_in_low_light_mode = false;
        this.block_slide_text_selection = false;
        this.custom_aspect_ratio = 4 / 3; // Use of custom aspect ratio for slides. Possible values are e.g. 4/3 or 16/9. 0 disables it and makes it calculate dynamically.
        this.custom_width = 800; // Used when custom_aspect_ratio is set to a value greater than zero.
        this.overview_slide_zoom = 1.2;
        this.doubletap_delay = 200; // Double tap delay in ms
        this.min_slide_zoom = 0.1; // in em
        this.max_slide_zoom = 5.0; // in em
        this.zoom_step = 0.1; // in em
        this.swipe_max_duration = 400; // maximum duration of swipe in ms
        this.swipe_threshold = 60; // swipe distance
        this.swipe_y_limiter = 1.0; // how many times the x distance should be greater than the y distance (1.0 means x has to be > y, 2.0 means x has to be > 2 * y, 0.0 means disabled)
        // Members storing relevant data for touch gestures
        this.tap_last = 0;
        this.start_x = 0;
        this.start_y = 0;
        this.delta_x = 0;
        this.delta_y = 0;
        // Members storing relevant data for TILT/SHAKE movements
        this.shake_sensitivity = 0.5; // Shake sensitivity, higher sensitivity = less shake required
        this.tilt_lower = 20; // Range ~ 15-40
        this.tilt_upper = 35;
        this.tilt_allowed = false;
        this.tilt_action = null;
    }
    // ---
    // Description: Handles the initialization of rslidy, e.g. setting up the menus.
    // ---
    Rslidy.prototype.init = function () {
        //check for section over slide and add classes for compatibility
        var sections = document.getElementsByTagName("section");
        for (var i = 0; i < sections.length; i++)
            if (sections[i].parentElement.nodeName == "BODY")
                sections[i].classList.add("slide");
        var slides_old = document.querySelectorAll(".slide");
        this.num_slides = slides_old.length;
        if (this.num_slides == 0)
            return;
        var slides_html = new Array(this.num_slides);
        for (var i = 0; i < this.num_slides; i++) {
            //makes slides stack on top of each other so slide animations look smooth
            slides_old[i].style.position = "absolute";
            slides_html[i] = slides_old[i].outerHTML;
        }
        //create a wrapper for the new body
        var wrapper = document.createElement("div");
        wrapper.id = "rslidy-body";
        //add content section to the wrapper
        var cs = this.utils.appendHtmlString(wrapper, html_definitions_1.content_section);
        //move the old body's children into the content section
        while (document.body.firstChild)
            cs.appendChild(document.body.firstChild);
        // Append the wrapper to the body
        document.body.appendChild(wrapper);
        this.overview = new overview_1.OverviewComponent(slides_html);
        this.content = new content_1.ContentComponent(cs);
        this.imageViewer = new image_viewer_1.ImageViewerComponent();
        this.utils.prependHtmlString(document.body, html_definitions_1.notes_text);
        this.utils.prependHtmlString(document.body, html_definitions_1.help_text);
        this.statusbar = new status_bar_1.StatusbarComponent();
        this.settings = new settings_1.SettingsComponent();
        this.addListeners();
        this.initTimer();
        this.onHashchange();
    };
    // ---
    // Description: Adds event listeners like left/right keys.
    // ---
    Rslidy.prototype.addListeners = function () {
        var _this = this;
        // Key listeners
        window.onkeyup = function (e) { return _this.keyPressed(e); };
        window.addEventListener("wheel", function (e) { return _this.mouseWheelNavigation(e); });
        var links = document.getElementsByTagName("a");
        for (var i = 0; i < links.length; i++) {
            links[i].addEventListener("mouseup", function (e) {
                e.stopPropagation();
            }.bind(this));
        }
        // Window listeners
        window.addEventListener("hashchange", function () {
            this.onHashchange();
        }.bind(this));
        // Allow simple touch events on speaker notes overlay (for double tap to hide)
        var speaker_notes_overlay = document.getElementById("rslidy-speakernotes-overlay");
        speaker_notes_overlay.addEventListener("touchstart", function (e) {
            return _this.content.onTouchstart(e);
        });
        // Window listeners
        window.onresize = function (e) {
            this.overview.adjustOverviewPanel();
        }.bind(this);
        // Device listeners used for TILT and SHAKE
        if (window.DeviceOrientationEvent) {
            window.addEventListener("deviceorientation", function (e) {
                this.onDeviceOrientation(e);
            }.bind(this));
        }
        if (window.DeviceMotionEvent) {
            window.addEventListener("devicemotion", function (e) {
                this.onDeviceMotion(e);
            }.bind(this));
        }
        // Set motion break if device changes from PORTRAIT to LANDSCAPE or vice versa (prevent unintended slide navigation)
        window.addEventListener("orientationchange", function (e) {
            this.motion_last = new Date().getTime();
        }.bind(this));
    };
    // ---
    // Description: Initializes the timer.
    // ---
    Rslidy.prototype.initTimer = function () {
        // Initialize the timer or hide it if this.presentation_time <= 0
        var timer = document.getElementById("rslidy-timer");
        // Hide timer or set time
        if (this.presentation_time <= 0)
            timer.classList.add("rslidy-hidden");
        else {
            var minutes = Math.floor(this.presentation_time / 60);
            var seconds = this.presentation_time % 60;
            timer.innerHTML =
                this.utils.toTwoDigits(minutes) + ":" + this.utils.toTwoDigits(seconds);
            this.timer_time = this.presentation_time;
        }
    };
    // ---
    // Description: Toggles the timer. Works only if this.presentation_time > 0.
    // ---
    Rslidy.prototype.toggleTimer = function () {
        // Return if this.presentation_time <= 0
        if (this.presentation_time <= 0)
            return;
        // Reset and return if this.timer_time <= 0
        if (this.timer_time <= 0) {
            this.initTimer();
            return;
        }
        if (this.timer_enabled == false) {
            // Run
            this.timer_thread = setInterval(function () {
                // Break out if this.presentation_time is <= 0
                if (this.timer_time <= 0) {
                    clearInterval(this.timer_thread);
                    this.timer_enabled = false;
                    return;
                }
                this.timer_time -= 1;
                var timer = document.getElementById("rslidy-timer");
                var minutes = Math.floor(this.timer_time / 60);
                var seconds = this.timer_time % 60;
                timer.innerHTML =
                    this.utils.toTwoDigits(minutes) +
                        ":" +
                        this.utils.toTwoDigits(seconds);
            }.bind(this), 1000);
            this.timer_enabled = true;
        }
        else {
            // Stop
            clearInterval(this.timer_thread);
            this.timer_enabled = false;
        }
    };
    //
    // Key/Mouse event methods and listeners
    //
    // ---
    // Description: Handles wheel right/left navigation
    // e: Event.
    // ---
    Rslidy.prototype.mouseWheelNavigation = function (e) {
        if (e.deltaX != 0)
            e.deltaX > 0 ? this.content.navNext(true) : this.content.navPrevious(true);
    };
    // ---
    // Description: Called whenever a key is pressed.
    // e: Event.
    // ---
    Rslidy.prototype.keyPressed = function (e) {
        var key = e.keyCode ? e.keyCode : e.which;
        // Modifier keys (CTRL, SHIFT, ALT, META (WIN on Windows, CMD on Mac))
        this.ctrl_pressed = e.ctrlKey;
        this.shift_pressed = e.shiftKey;
        this.alt_pressed = e.altKey;
        this.meta_pressed = e.metaKey;
        // Normal key codes
        switch (key) {
            case this.key_space:
            case this.key_pg_down:
            case this.key_right:
            case this.key_down:
                this.content.navNext(true);
                break;
            case this.key_pg_up:
            case this.key_left:
            case this.key_up:
                this.content.navPrevious(true);
                break;
            case this.key_end:
                this.content.navLast();
                break;
            case this.key_home:
                this.content.navFirst();
                break;
            case this.key_n:
                this.toggleSpeakerNotes(null, false);
                break;
            case this.key_t:
                this.toggleTimer();
                break;
            default:
                console.log("Unknown key event: " + key);
        }
    };
    // ---
    // Description: Called whenever a key in the slide input text box was pressed.
    // e: The event.
    // ---
    Rslidy.prototype.slideInputKeyPressed = function (e) {
        var key = e.keyCode ? e.keyCode : e.which;
        var slide_input = document.getElementById("rslidy-slide-input");
        var value = slide_input.value;
        if (key == this.key_enter) {
            var is_number = /^[0-9]+$/.test(value);
            if (is_number == true)
                this.content.showSlide(this.utils.toInt(value) - 1, false);
            else
                slide_input.value = this.content.getCurrentSlideIndex() + 1;
            // Take away focus
            slide_input.blur();
        }
    };
    // ---
    // Description: Called whenever the night mode button is clicked.
    // ---
    Rslidy.prototype.toggleLowLightMode = function () {
        // Vars
        var class_color_invert = "rslidy-color-invert";
        var class_low_light_mode = "rslidy-night-mode";
        // Inverts everything, then invert individual elements again after "html" which should stay the same (e.g. images)
        var invert = ["html", "img"];
        for (var i = 0; i < invert.length; i++) {
            var element = document.getElementsByTagName(invert[i]);
            this.utils.switchElementsClass(element, class_color_invert);
        }
        // Add custom classes to h1, h2, h3, p, span, li, ul, ol, pre and a
        var custom_classes = [
            "h1",
            "h2",
            "h3",
            "p",
            //"span",
            "li",
            "ul",
            "ol",
            "pre",
            "a"
        ];
        for (var i = 0; i < custom_classes.length; i++) {
            var element = document.getElementsByTagName(custom_classes[i]);
            this.utils.switchElementsClass(element, class_low_light_mode);
            this.utils.invertElementsColor(element, this.low_light_mode);
        }
        this.low_light_mode = !this.low_light_mode;
    };
    // ---
    // Description: Called whenever the address field content changes.
    // ---
    Rslidy.prototype.onHashchange = function () {
        if (!isNaN(this.content.getCurrentSlideIndex()))
            this.content.showSlide(this.content.getCurrentSlideIndex(), false);
    };
    // ---
    // Description: Called whenever the orientation of a device changes.
    // e: Event.
    // ---
    Rslidy.prototype.onDeviceOrientation = function (e) {
        var _this = this;
        //chrome fires this event with all values being null on all devices
        if (e.alpha == null && e.beta == null && e.gamma == null)
            return;
        // Init if event was fired and necessary
        var checkbox_tilt = document.getElementById("rslidy-checkbox-tilt");
        if (checkbox_tilt.disabled == true) {
            checkbox_tilt.disabled = false;
            checkbox_tilt.checked = true;
            document
                .getElementById("rslidy-checkbox-tilt-text")
                .classList.remove("rslidy-disabled");
        }
        // Return if not activated
        if (checkbox_tilt.checked == false)
            return;
        // Store values
        var value = 0;
        var tilt_multiplier = 1;
        if (window.innerHeight > window.innerWidth) {
            // Portrait mode
            value = Math.round(e.gamma);
            tilt_multiplier = 2;
        }
        else {
            // Landscape mode
            value = Math.round(e.beta);
        }
        // Upside down Portrait/Landscape mode
        if (window.orientation < 0 || window.orientation == 180)
            value = -value;
        // Only allow tilt gestures after holding the device upright again
        if (value > -10 && value < 10) {
            if (this.tilt_allowed && this.tilt_action != null) {
                this.shift_pressed = true;
                this.tilt_action();
                this.tilt_action = null;
                this.shift_pressed = false;
            }
            this.tilt_allowed = true;
        }
        if (value >= this.tilt_lower * tilt_multiplier &&
            value <= this.tilt_upper * tilt_multiplier)
            this.tilt_action = function () { return _this.content.navNext(true); };
        if (value <= -this.tilt_lower * tilt_multiplier &&
            value >= -this.tilt_upper * tilt_multiplier)
            this.tilt_action = function () { return _this.content.navPrevious(true); };
        if (value >= this.tilt_upper * tilt_multiplier ||
            value <= -this.tilt_upper * tilt_multiplier) {
            this.tilt_action = null;
            this.tilt_allowed = false;
        }
    };
    // ---
    // Description: Called whenever the movement of the device changes (acceleration).
    // e: Event.
    // ---
    Rslidy.prototype.onDeviceMotion = function (e) {
        //chrome fires this event with all values being null on all devices
        if (e.acceleration.x == null &&
            e.acceleration.y == null &&
            e.acceleration.z == null)
            return;
        // Init if event was fired and necessary
        var checkbox_shake = document.getElementById("rslidy-checkbox-shake");
        if (checkbox_shake.disabled == true) {
            checkbox_shake.disabled = false;
            checkbox_shake.checked = true;
            document
                .getElementById("rslidy-checkbox-shake-text")
                .classList.remove("rslidy-disabled");
        }
        // Return if not activated
        if (checkbox_shake.checked == false)
            return;
        var acc_threshold = 10.0 / this.shake_sensitivity;
        // Show first slide if shake is stronger than threshold
        if (e.acceleration.x > acc_threshold ||
            e.acceleration.y > acc_threshold ||
            e.acceleration.z > acc_threshold)
            this.content.navFirst();
    };
    // ---
    // Description: Toggles speaker nodes for current slide if available.
    // e: Event coming from double tap, null otherwise.
    // always_hide: If true, speaker nodes are hidden regardless of the current status.
    // ---
    Rslidy.prototype.toggleSpeakerNotes = function (e, always_hide) {
        always_hide = always_hide || false;
        // Get current status
        var speaker_notes_overlay = document.getElementById("rslidy-speakernotes-overlay");
        var hidden = speaker_notes_overlay.classList.contains("rslidy-hidden");
        // Hide speaker notes if necessary
        if (hidden == false || always_hide == true) {
            speaker_notes_overlay.classList.add("rslidy-hidden");
            // Prevent default double tap event if notes were visible
            if (e != null && hidden == false) {
                e.preventDefault();
                e.stopPropagation();
            }
            return;
        }
        // Get current speaker notes (if there are any)
        var content_section = document.getElementById("rslidy-content-section");
        var current_slide = content_section.getElementsByClassName("slide")[this.content.getCurrentSlideIndex()];
        var speaker_notes = current_slide.getElementsByClassName("speakernotes").length == 1
            ? current_slide.getElementsByClassName("speakernotes")[0]
            : null;
        // Show speaker notes and set new text if necessary
        if (speaker_notes != null) {
            speaker_notes_overlay.classList.remove("rslidy-hidden");
            speaker_notes_overlay.innerHTML =
                '<div class="rslidy-speakernotes-container">' +
                    speaker_notes.innerHTML +
                    "</div>";
            // Prevent default double tap event if notes were hidden
            if (e != null && hidden == true) {
                e.preventDefault();
                e.stopPropagation();
            }
        }
    };
    return Rslidy;
}());
exports.Rslidy = Rslidy;
function start() {
    var t0 = performance.now();
    //inject loading spinner and hide body overflowing behind the spinner
    document.body.insertAdjacentHTML('afterbegin', html_definitions_1.spinner_html);
    document.body.style.overflow = 'hidden';
    //timeout allows the browser to repaint and display the spinner
    setTimeout(function () {
        window.rslidy.init();
        //hide the spinner again after rslidy is done
        document.body.style.overflow = 'visible';
        document.getElementById('rslidy-spinner').classList.add('rslidy-hidden');
        var t1 = performance.now();
        console.log("Time to first slide: " + (t1 - t0) + " milliseconds.");
    }, 1);
}
window.rslidy = new Rslidy();
document.addEventListener("DOMContentLoaded", start);


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
// Class Utils
// Implements utility functions.
var Utils = /** @class */ (function () {
    function Utils() {
    }
    // ---
    // Description: Returns the width of the slide.
    // aspect_ratio: The desired aspect ratio (or 0 for dynamic calculation).
    // custom_width: The custom width.
    // ---
    Utils.prototype.getSlideWidth = function (aspect_ratio, custom_width) {
        aspect_ratio = aspect_ratio || 0;
        if (aspect_ratio == 0)
            return window.outerWidth;
        var width = custom_width; // ...
        return width;
    };
    // ---
    // Description: Returns the height of the slide.
    // aspect_ratio: The desired aspect ratio (or 0 for dynamic calculation).
    // custom_width: The custom width.
    // ---
    Utils.prototype.getSlideHeight = function (aspect_ratio, custom_width) {
        aspect_ratio = aspect_ratio || 0;
        if (aspect_ratio == 0)
            return window.outerHeight;
        var width = custom_width;
        var height = width / aspect_ratio;
        return height;
    };
    // ---
    // Description: Returns the current aspect ratio.
    // ---
    Utils.prototype.getCurrentAspectRatio = function () {
        var window_width = window.innerWidth;
        var window_height = window.innerHeight;
        var current_aspect_ratio = window_width / window_height;
        return current_aspect_ratio;
    };
    // ---
    // Description: Gets the relative width of an element, with respect to the whole window.
    // element: Specifies the element to consider.
    // aspect_ratio: The desired aspect ratio (or 0 for dynamic calculation).
    // custom_width: The custom width.
    // ---
    Utils.prototype.getRelativeWidth = function (element, aspect_ratio, custom_width) {
        var window_width = aspect_ratio == 0 ? window.outerWidth : custom_width;
        var element_width = element.clientWidth;
        var relative_width = element_width / window_width;
        return relative_width;
    };
    // ---
    // Description: Returns the integer representation of a character.
    // character: Specifies the character to convert.
    // ---
    Utils.prototype.toInt = function (character) {
        return 1 * character;
    };
    // ---
    // Description: Returns a 2-digit-representation of a number (e.g. "6" becomes "06", but "11" will still be "11").
    // num: Specify the number.
    // ---
    Utils.prototype.toTwoDigits = function (num) {
        return ("0" + num).slice(-2);
    };
    // ---
    // Description: Switches the existence of a class of each element in a specified list (ignores elements with class "ignore").
    // element_list: The list of elements.
    // class_name: The name of the class.
    // ---
    Utils.prototype.switchElementsClass = function (element_list, class_name) {
        for (var i = 0; i < element_list.length; i++) {
            if (element_list[i].classList.contains("ignore") == true)
                continue;
            if (element_list[i].classList.contains(class_name) == true)
                element_list[i].classList.remove(class_name);
            else
                element_list[i].classList.add(class_name);
        }
    };
    // ---
    // Description: Adds a class to an element if not already present
    // element_list: The list of elements.
    // class_name: The name of the class.
    // ---
    Utils.prototype.addElementsClass = function (element_list, class_name) {
        for (var i = 0; i < element_list.length; i++) {
            if (element_list[i].classList.length == 0 ||
                element_list[i].classList.contains(class_name) == false) {
                element_list[i].classList.add(class_name);
            }
        }
    };
    // ---
    // Description: Inverts the color attribute of all elements in the specified list.
    // element_list: The list of elements.
    // low_light_mode: Specified whether colors should be inverted or reset.
    // ---
    Utils.prototype.invertElementsColor = function (element_list, low_light_mode) {
        low_light_mode = low_light_mode || false;
        for (var i = 0; i < element_list.length; i++) {
            // Continue if night mode is to be disabled
            if (low_light_mode == true) {
                element_list[i].style.color = "";
                continue;
            }
            // Invert color
            var color_rgb = getComputedStyle(element_list[i]).getPropertyValue("color");
            var color_hex = "#";
            var rgx = /\d+/g;
            var match;
            while ((match = rgx.exec(color_rgb)) != null) {
                var inverted = 255 - match[0];
                if (inverted < 16)
                    color_hex += "0";
                color_hex += inverted.toString(16);
            }
            element_list[i].style.color = color_hex;
        }
    };
    Utils.prototype.htmlParse = function (htmlstr) {
        var template = document.createElement("div");
        template.innerHTML = htmlstr;
        return template.firstElementChild;
    };
    Utils.prototype.prependHtmlString = function (parent, html) {
        var view = this.htmlParse(html);
        parent.insertBefore(view, parent.firstChild);
        return view;
    };
    Utils.prototype.appendHtmlString = function (parent, html) {
        var view = this.htmlParse(html);
        parent.appendChild(view);
        return view;
    };
    return Utils;
}());
exports.Utils = Utils;


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var html_definitions_1 = __webpack_require__(0);
var SettingsComponent = /** @class */ (function () {
    function SettingsComponent() {
        var _this = this;
        this.view =
            window.rslidy.utils.prependHtmlString(document.body, html_definitions_1.settings_html);
        this.default = parseInt(window.getComputedStyle(document.querySelectorAll("#rslidy-content-section .slide")[0]).getPropertyValue("font-size")) / parseInt(window.getComputedStyle(document.body).getPropertyValue("font-size"));
        this.view
            .querySelector("#rslidy-button-zoom-more")
            .addEventListener("click", function (e) { return _this.changeSlideZoom(e, 1); });
        this.view
            .querySelector("#rslidy-button-zoom-reset")
            .addEventListener("click", function (e) { return _this.changeSlideZoom(e, 0); });
        this.view
            .querySelector("#rslidy-button-zoom-less")
            .addEventListener("click", function (e) { return _this.changeSlideZoom(e, -1); });
        this.view
            .querySelector("#rslidy-button-help")
            .addEventListener("click", function (e) { return _this.closeMenuWrapper(); });
        this.view
            .querySelector("#rslidy-checkbox-tilt")
            .addEventListener("click", function (e) { return _this.closeMenuWrapper(); });
        this.view
            .querySelector("#rslidy-checkbox-shake")
            .addEventListener("click", function (e) { return _this.closeMenuWrapper(); });
        this.view
            .querySelector("#rslidy-checkbox-margintap")
            .addEventListener("click", function (e) { return _this.closeMenuWrapper(); });
        this.view
            .querySelector("#rslidy-checkbox-lowlightmode")
            .addEventListener("click", function (e) {
            return _this.closeMenuWrapper(function () { return window.rslidy.toggleLowLightMode(); });
        });
    }
    SettingsComponent.prototype.closeMenuWrapper = function (fun) {
        if (fun === void 0) { fun = null; }
        if (fun)
            fun();
        if (window.rslidy.close_menu_on_selection)
            window.rslidy.statusbar.menuToggleClicked(false);
    };
    // ---
    // Description: Called whenever one of the text size buttons is clicked.
    // e: The event.
    // value: Specifies the zoom modifier (1 = more, -1 = less).
    // ---
    SettingsComponent.prototype.changeSlideZoom = function (e, value) {
        var slides_large = document.querySelectorAll("#rslidy-content-section .slide");
        var rs = window.rslidy;
        for (var i = 0; i < slides_large.length; i++) {
            if (value == 0)
                slides_large[i].style.fontSize = this.default + "em";
            var current_font_size = parseFloat(slides_large[i].style.fontSize);
            console.log(current_font_size);
            if ((current_font_size > rs.min_slide_zoom && value == -1) ||
                (current_font_size < rs.max_slide_zoom && value == 1))
                slides_large[i].style.fontSize =
                    current_font_size + rs.zoom_step * value + "em";
            else if (isNaN(current_font_size))
                slides_large[i].style.fontSize =
                    this.default + rs.zoom_step * value + "em";
        }
        // Prevent default actions after event handling
        e.preventDefault();
    };
    return SettingsComponent;
}());
exports.SettingsComponent = SettingsComponent;


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.help_icon = "<svg viewBox=\"0 0 100 100\" baseProfile=\"full\" xmlns=\"http://www.w3.org/2000/svg\"><path fill=\"none\" stroke-width=\"14\" d=\"M31.5 46.9c0-9.1.7-13.3 5.6-18.2 4.9-6.3 12.6-7 19.6-5.6 7 1.4 15.4 8.4 15.4 18.2 0 9.8-7.7 13.3-10.5 15.4-4.9 1.4-7 4.2-7.7 7.7v14m0 8.4V98\"/></svg>";
exports.hide_icon = "<svg viewBox=\"0 0 100 100\" baseProfile=\"full\" xmlns=\"http://www.w3.org/2000/svg\"><path stroke-linecap=\"round\" stroke-width=\"15\" d=\"M20 15l30 30M50 45l30-30M20 55l30 30M50 85l30-30\"/></svg>";
exports.last_icon = "<svg viewBox=\"0 0 100 100\" baseProfile=\"full\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M5 5v90l65-45z\"/><path stroke-width=\"15\" d=\"M85 5v90\"/></svg>";
exports.next_icon = "<svg viewBox=\"0 0 100 100\" baseProfile=\"full\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M15 5v90l70-45z\"/></svg>";
exports.overview_icon = "<svg viewBox=\"0 0 100 100\" baseProfile=\"full\" xmlns=\"http://www.w3.org/2000/svg\"><path fill=\"none\" stroke-width=\"8\" d=\"M0 0h100v100H0z\"/><path stroke-width=\"4\" d=\"M48 0v100\"/><path d=\"M8 7h33v25H8zM8 37.5h33v25H8zM8 68h33v25H8z\"/></svg>";
exports.settings_icon = "<svg viewBox=\"0 0 100 100\" baseProfile=\"full\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\"><defs><g id=\"a\"><path d=\"M40 75l3 20h14l3-20zM40 25l3-20h14l3 20zM25 40L5 43v14l20 3zM75 40l20 3v14l-20 3z\"/></g></defs><circle cx=\"50\" cy=\"50\" r=\"25\" fill=\"none\" stroke-width=\"15\"/><use xlink:href=\"#a\"/><use xlink:href=\"#a\" transform=\"rotate(45 50 50)\"/></svg>";
exports.slider_icon = "<svg viewBox=\"0 0 100 50\" baseProfile=\"full\" xmlns=\"http://www.w3.org/2000/svg\"><path stroke-linecap=\"round\" stroke-width=\"30\" d=\"M20 25h60\"/><circle cx=\"25\" cy=\"25\" r=\"23\"/></svg>";
exports.toc_icon = "<svg viewBox=\"0 0 100 100\" baseProfile=\"full\" xmlns=\"http://www.w3.org/2000/svg\"><path stroke-dasharray=\"15, 15\" stroke-width=\"20\" d=\"M5 10v85\"/><path stroke-width=\"10\" d=\"M25 17.5h75M25 47.5h75M25 77.5h75\"/></svg>";
exports.zoom_minus_icon = "<svg viewBox=\"0 0 100 100\" baseProfile=\"full\" xmlns=\"http://www.w3.org/2000/svg\"><text x=\"15\" y=\"90\" font-size=\"85\">A</text><text x=\"55\" y=\"45\" font-size=\"100\">-</text></svg>";
exports.zoom_plus_icon = "<svg viewBox=\"0 0 100 100\" baseProfile=\"full\" xmlns=\"http://www.w3.org/2000/svg\"><text x=\"5\" y=\"95\" font-size=\"115\">A</text><text x=\"50\" y=\"50\" font-size=\"95\">+</text></svg>";
exports.zoom_reset_icon = "<svg viewBox=\"0 0 100 100\" baseProfile=\"full\" xmlns=\"http://www.w3.org/2000/svg\"><text x=\"20\" y=\"90\" font-size=\"100\">A</text></svg>";


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.help = [
    "Welcome to rslidy!",
    "Rslidy transforms HTML pages into presentation slides. Its usage is very similar to common presentation software.",
    "Use the buttons LEFT and RIGHT to navigate through the slide show. On devices with a touchscreen, it's possible to use swipe gestures.",
    "All available slides and a table of contents can be shown by clicking the corresponding buttons in the status bar on the bottom of the page.",
    "Settings for gestures and the night mode can be changed by clicking the Menu button in the status bar.",
    "When using mobile devices, Shake and Tilt gestures are enabled by default. These can be disabled in the menu. Tilting can be used for navigating, while shaking resets the presentation to the first slide.",
    "If available, speaker notes can be toggled by pressing N or by double-tapping on touch devices.",
    "If enabled, the timer can be started/paused by pressing T or by clicking the timer in the status bar below.",
    "Custom settings, like the aspect ratio of the slides or the zoom level of the thumbnails, can be changed by using javascript overrides. See the overrides.html example for more information."
];
exports.settings = [
    "Tilt",
    "Shake",
    "Margin Tap Nav",
    "Low Light Mode"
];
exports.statusbar = [
    "Show the Status Bar",
    "Slide Overview",
    "Hide the Status Bar",
    "First Slide",
    "Previous Slide",
    "Next Slide",
    "Last Slide",
    "Table of Contents",
    "Settings"
];


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var html_definitions_1 = __webpack_require__(0);
var StatusbarComponent = /** @class */ (function () {
    function StatusbarComponent() {
        var _this = this;
        this.view =
            window.rslidy.utils.prependHtmlString(document.body, html_definitions_1.statusbar_html);
        this.view
            .querySelector("#rslidy-button-overview")
            .addEventListener("click", function () { return _this.overviewToggleClicked(); });
        this.view
            .querySelector("#rslidy-button-toc")
            .addEventListener("click", function () { return _this.tocToggleClicked(); });
        this.view
            .querySelector("#rslidy-status-bar-nav-button-first")
            .addEventListener("click", function () { return window.rslidy.content.navFirst(); });
        this.view
            .querySelector("#rslidy-status-bar-nav-button-previous")
            .addEventListener("click", function () { return window.rslidy.content.navPrevious(true); });
        this.view
            .querySelector("#rslidy-status-bar-nav-button-next")
            .addEventListener("click", function () { return window.rslidy.content.navNext(true); });
        this.view
            .querySelector("#rslidy-status-bar-nav-button-last")
            .addEventListener("click", function () { return window.rslidy.content.navLast(); });
        this.view
            .querySelector("#rslidy-status-bar-hide-button")
            .addEventListener("click", function () { return _this.hideToggleClicked(); });
        this.view
            .querySelector("#rslidy-status-bar-show-button")
            .addEventListener("click", function () { return _this.showToggleClicked(); });
        this.view
            .querySelector("#rslidy-timer")
            .addEventListener("click", function () { return window.rslidy.toggleTimer(); });
        this.view
            .querySelector("#rslidy-slide-caption")
            .addEventListener("click", function () { return _this.tocToggleClicked(); });
        this.view
            .querySelector("#rslidy-button-menu")
            .addEventListener("click", function () { return _this.menuToggleClicked(); });
        this.view
            .querySelector("#rslidy-slide-input")
            .addEventListener("keyup", function (e) { return window.rslidy.slideInputKeyPressed(e); });
    }
    // ---
    // Description: Called whenever the overview button is clicked.
    // ---
    StatusbarComponent.prototype.overviewToggleClicked = function () {
        var rs = window.rslidy;
        rs.utils.switchElementsClass([document.getElementById("rslidy-content-section")], "rslidy-shifted-left");
        rs.utils.switchElementsClass([document.getElementById("rslidy-left-margin")], "rslidy-shifted-left");
    };
    // ---
    // Description: Called whenever the toc button is clicked.
    // ---
    StatusbarComponent.prototype.tocToggleClicked = function () {
        var rs = window.rslidy;
        rs.utils.switchElementsClass([document.getElementById("rslidy-content-section")], "rslidy-shifted-right");
        rs.utils.switchElementsClass([document.getElementById("rslidy-right-margin")], "rslidy-shifted-right");
    };
    // ---
    // Description: Called whenever the menu button is clicked.
    // ---
    StatusbarComponent.prototype.menuToggleClicked = function () {
        // Toggle menu show status
        var menu = document.getElementById("rslidy-menu");
        if (menu.classList.contains("rslidy-hidden") == true)
            menu.classList.remove("rslidy-hidden");
        else
            menu.classList.add("rslidy-hidden");
    };
    StatusbarComponent.prototype.hideToggleClicked = function () {
        var show_button = document.getElementById("rslidy-sb-show-trapezoid");
        show_button.classList.remove("rslidy-hidden");
        this.statusBarTransitionBottom("rslidy-status-bar", "-3.3em");
        this.statusBarTransitionMargin("rslidy-overview-toc", "0.3em");
        this.statusBarTransitionMargin("rslidy-overview-slides", "0.3em");
        this.statusBarTransitionMargin("rslidy-content-section", "0.3em");
    };
    StatusbarComponent.prototype.showToggleClicked = function () {
        var show_button = document.getElementById("rslidy-sb-show-trapezoid");
        show_button.classList.add("rslidy-hidden");
        this.statusBarTransitionBottom("rslidy-status-bar", "0em");
        this.statusBarTransitionMargin("rslidy-overview-toc", "3.2em");
        this.statusBarTransitionMargin("rslidy-overview-slides", "3.2em");
        if (window.matchMedia("(max-width: 27rem)").matches)
            this.statusBarTransitionMargin("rslidy-content-section", "1.6em");
        else if (window.matchMedia("(min-width: 27rem) and (max-width: 32.5rem)").matches)
            this.statusBarTransitionMargin("rslidy-content-section", "2.56em");
        else
            this.statusBarTransitionMargin("rslidy-content-section", "3.2em");
    };
    StatusbarComponent.prototype.statusBarTransitionBottom = function (name, value) {
        var element = document.getElementById(name);
        element.style.bottom = value;
    };
    StatusbarComponent.prototype.statusBarTransitionMargin = function (name, value) {
        var element = document.getElementById(name);
        element.style.marginBottom = value;
    };
    return StatusbarComponent;
}());
exports.StatusbarComponent = StatusbarComponent;


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var html_definitions_1 = __webpack_require__(0);
var shiftLeft = "rslidy-shifted-left";
var shiftRight = "rslidy-shifted-right";
var OverviewComponent = /** @class */ (function () {
    function OverviewComponent(model) {
        var _this = this;
        this.slide_view =
            window.rslidy.utils.prependHtmlString(document.body, html_definitions_1.html_slides);
        this.toc_view =
            window.rslidy.utils.prependHtmlString(document.body, html_definitions_1.html_toc);
        for (var i = 0; i < window.rslidy.num_slides; i++) {
            var slideHtml = model[i];
            var title = i + 1 + ". " + this.getSlideHeading(slideHtml);
            var xofy = i + 1 + " / " + window.rslidy.num_slides;
            var thumbnail = window.rslidy.utils.appendHtmlString(this.slide_view, html_definitions_1.thumbnail_html(i, title, xofy, slideHtml));
            thumbnail.addEventListener("click", function (e) {
                return _this.slideSelected(e);
            });
            var link = window.rslidy.utils.appendHtmlString(this.toc_view, html_definitions_1.link_html(i, title, xofy));
            link.addEventListener("click", function (e) {
                return _this.slideSelected(e);
            });
        }
        this.slide_view.classList.add("rslidy-overview");
        this.toc_view.classList.add("rslidy-overview");
        //this.toc_view.classList.add("rslidy-hidden");
        this.adjustOverviewPanel();
    }
    // ---
    // Description: Adjusts the aspect ratio and display sizes of the thumbnail images in the overview menu.
    // ---
    OverviewComponent.prototype.adjustOverviewPanel = function () {
        // Get items
        var thumbnail_wrappers = document.getElementsByClassName("rslidy-slide-thumbnail");
        var overview_items = document.getElementsByClassName("rslidy-overview-item");
        // Get the percentage of width pixels of the overview section with respect to window.outerWidth
        var aspect_ratio = window.rslidy.custom_aspect_ratio != 0
            ? window.rslidy.custom_aspect_ratio
            : window.rslidy.utils.getCurrentAspectRatio();
        var overview_slide_zoom = window.rslidy.overview_slide_zoom;
        var custom_width = window.rslidy.custom_width;
        var final_width = custom_width / overview_slide_zoom;
        var overview_element = document.getElementsByClassName("rslidy-overview")["rslidy-overview-slides"];
        var relative_width = window.rslidy.utils.getRelativeWidth(overview_element, aspect_ratio, final_width);
        for (var i = 0; i < window.rslidy.num_slides; i++) {
            // 1. Set width and height of the overview element to outerWidth and outerHeight, respectively
            overview_items[i].style.width =
                window.rslidy.utils.getSlideWidth(aspect_ratio, final_width) / 16 +
                    "em";
            overview_items[i].style.height =
                window.rslidy.utils.getSlideHeight(aspect_ratio, final_width) / 16 +
                    "em";
            // 2. Do the transformation of the overview element now with relative_width (browser compatibility)
            var scale_value = "scale3d(" +
                relative_width + ", " + relative_width + ", " + relative_width + ")";
            var origin_value = "0em 0em 0em";
            overview_items[i].style.transform = scale_value; // safety first
            overview_items[i].style.transformOrigin = origin_value; // safety first
            overview_items[i].style.MozTransform = scale_value;
            overview_items[i].style.MozTransformOrigin = origin_value;
            overview_items[i].style.webkitTransform = scale_value;
            overview_items[i].style.webkitTransformOrigin = origin_value;
            overview_items[i].style.msTransform = scale_value;
            overview_items[i].style.msTransformOrigin = origin_value;
            // 3. Now, set the width pixels of the wrapper element to the overview width pixels and calculate its height with the aspect ratio
            var w = overview_element.clientWidth;
            var h = w /
                (window.rslidy.utils.getSlideWidth(aspect_ratio, final_width) /
                    window.rslidy.utils.getSlideHeight(aspect_ratio, final_width));
            thumbnail_wrappers[i].style.width = (w - 20) / 16 + "em";
            thumbnail_wrappers[i].style.height = (h - 20) / 16 + "em";
        }
    };
    // ---
    // Description: Returns the heading of a slide if available (or "slide" if not found).
    // slide_element: The slide element to get the heading from.
    // ---
    OverviewComponent.prototype.getSlideHeading = function (slide_element) {
        if (slide_element.indexOf("<h1>") !== -1)
            return slide_element.substring(slide_element.indexOf("<h1>") + 4, slide_element.indexOf("</h1>"));
        else if (slide_element.indexOf("<h2>") !== -1)
            return slide_element.substring(slide_element.indexOf("<h2>") + 4, slide_element.indexOf("</h2>"));
        else if (slide_element.indexOf("<h3>") !== -1)
            return slide_element.substring(slide_element.indexOf("<h3>") + 4, slide_element.indexOf("</h3>"));
        else
            return "slide";
    };
    // ---
    // Description: Called whenever a slide thumbnail in the overview gets clicked.
    // e: Event.
    // ---
    OverviewComponent.prototype.slideSelected = function (e) {
        // Get the click target
        var target = e.target;
        // Fix for z-index bug on iOS
        while (target.className != "rslidy-slide-clickelement" &&
            target.className != "rslidy-slide-link")
            target = target.parentElement;
        // Get the index of the slide
        var slide_index = Number(target.dataset.slideindex);
        // Switch to this slide
        window.rslidy.content.showSlide(slide_index, false);
        // Close overview menu if desired
        if (window.rslidy.close_navigation_on_selection == true) {
            var content_section = document.getElementById("rslidy-content-section");
            if (content_section.classList.contains(shiftLeft))
                window.rslidy.statusbar.overviewToggleClicked();
            if (content_section.classList.contains(shiftRight))
                window.rslidy.statusbar.tocToggleClicked();
        }
        // Prevent link clicking (iOS)
        e.preventDefault();
    };
    return OverviewComponent;
}());
exports.OverviewComponent = OverviewComponent;


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var slide_transition_1 = __webpack_require__(9);
var ContentComponent = /** @class */ (function () {
    function ContentComponent(view) {
        var _this = this;
        this.currentSlideIndex = -1;
        this.view = view;
        this.slideTransition = new slide_transition_1.SlideTransition();
        var rs = window.rslidy;
        this.view.addEventListener("mousedown", function (e) {
            rs.start_x = e.clientX;
            rs.start_y = e.clientY;
        });
        this.view
            .querySelector("#rslidy-left-margin")
            .addEventListener("click", function () {
            if (document.getElementById("rslidy-checkbox-margintap").checked)
                _this.navPrevious(true);
        });
        this.view
            .querySelector("#rslidy-right-margin")
            .addEventListener("click", function () {
            if (document.getElementById("rslidy-checkbox-margintap").checked)
                _this.navNext(true);
        });
        this.view.addEventListener("touchstart", function (e) { return _this.onTouchstart(e); });
        this.view.addEventListener("touchmove", function (e) { return _this.onTouchmove(e); });
        this.view.addEventListener("touchend", function (e) { return _this.onTouchend(e); });
        this.doStyleAdaptions();
    }
    // ---
    // Description: Used for final style adaptions.
    // ---
    ContentComponent.prototype.doStyleAdaptions = function () {
        var rs = window.rslidy;
        // Start in night mode if set
        if (rs.start_in_low_light_mode == true) {
            rs.toggleLowLightMode();
            document.getElementById("rslidy-checkbox-lowlightmode").checked = true;
        }
        // Block slide text selection if set
        if (rs.block_slide_text_selection == true) {
            var content_section = document.getElementById("rslidy-content-section");
            var original_slides = content_section.getElementsByClassName("slide");
            for (var i = 0; i < original_slides.length; i++)
                original_slides[i].classList.add("rslidy-noselect");
        }
    };
    // ---
    // Description: Called whenever the user begins to touch the body area.
    // e: Event.
    // ---
    ContentComponent.prototype.onTouchstart = function (e) {
        var rs = window.rslidy;
        // Register last tap
        var tap_previous = rs.tap_last;
        rs.tap_last = new Date().getTime();
        var tap_delay = rs.tap_last - tap_previous;
        // Toggle speaker notes on double tap
        if (tap_delay <= rs.doubletap_delay) {
            rs.toggleSpeakerNotes(e, false);
        }
        // Register touch event
        var touch = e.touches[0];
        // Set new values and reset old values
        rs.start_x = touch.pageX;
        rs.start_y = touch.pageY;
        rs.delta_x = 0;
        rs.delta_y = 0;
    };
    // ---
    // Description: Called whenever the user moves the finger while touching the body area.
    // e: Event.
    // ---
    ContentComponent.prototype.onTouchmove = function (e) {
        var rs = window.rslidy;
        // Update values
        var touch = e.touches[0];
        var delta_x_old = rs.delta_x;
        rs.delta_x = touch.pageX - rs.start_x;
        rs.delta_y = touch.pageY - rs.start_y;
        // If the delta_x position has changed a lot, the user is swiping and the content does not need to be scrolled!
        if (Math.abs(rs.delta_x - delta_x_old) > 10)
            e.preventDefault();
    };
    // ---
    // Description: Called whenever the stops touching the body area.
    // e: Event.
    // ---
    ContentComponent.prototype.onTouchend = function (e) {
        var rs = window.rslidy;
        // Register old values and calculate absolutes
        var touch_duration = new Date().getTime() - rs.tap_last;
        var delta_x = rs.delta_x;
        var delta_y = rs.delta_y;
        var delta_x_abs = Math.abs(delta_x);
        var delta_y_abs = Math.abs(delta_y);
        // Handle the swipe event if the touch duration was shorter than a specified threshold
        // Also, the movement should be mainly on the x axis (x_movement > rs.swipe_y_limiter * y_movement)
        if (touch_duration < rs.swipe_max_duration &&
            (delta_x_abs > rs.swipe_threshold || delta_y_abs > rs.swipe_threshold)) {
            if (delta_x_abs > rs.swipe_y_limiter * delta_y_abs) {
                rs.shift_pressed = true;
                if (delta_x < 0)
                    this.navNext(true);
                else
                    this.navPrevious(true);
                rs.shift_pressed = false;
                e.preventDefault(); // Seems to improve scrolling experience on iOS devices somehow
            }
        }
    };
    // ---
    // Description: Returns the number of incremental list items on a slide.
    // slide_index: The index of the slide (0-indexed).
    // only_visible: Returns only the number of currently visible items (optional).
    // ---
    ContentComponent.prototype.getNumIncrItems = function (slide_index, only_visible) {
        only_visible = only_visible || false;
        // Out of bounds check
        if (slide_index < 0 || slide_index >= window.rslidy.num_slides)
            return -1;
        var content_section = document.getElementById("rslidy-content-section");
        var slide = content_section.getElementsByClassName("slide")[slide_index];
        var incremental_items = slide.querySelectorAll("ul.incremental li");
        if (only_visible == false)
            return incremental_items.length;
        else {
            var counter = 0;
            for (var i = 0; i < incremental_items.length; i++) {
                if (incremental_items[i].classList.contains("rslidy-invisible") == false)
                    counter++;
            }
            return counter;
        }
    };
    // ---
    // Description: Jumps to the next slide (or next bullet point).
    // ---
    ContentComponent.prototype.navNext = function (animate) {
        var current_index = this.currentSlideIndex;
        var rs = window.rslidy;
        rs.imageViewer.close();
        // Check for incremental items on current slide
        if (this.getNumIncrItems(current_index, false) > 0) {
            var num_incr_items = this.getNumIncrItems(current_index, false);
            var num_incr_items_shown = this.getNumIncrItems(current_index, true);
            if (num_incr_items > num_incr_items_shown) {
                if (rs.shift_pressed == false)
                    this.showItemsUpToN(num_incr_items_shown + 1);
                else
                    this.showItemsUpToN(num_incr_items);
                return;
            }
        }
        // Change slide
        var new_index = current_index + 1;
        this.showSlide(new_index, animate);
        // Check for incremental items on next slide
        if (this.getNumIncrItems(new_index, false) > 0) {
            var num_incr_items = this.getNumIncrItems(new_index, false);
            if (rs.shift_pressed == false)
                this.showItemsUpToN(1);
            else
                this.showItemsUpToN(num_incr_items);
        }
    };
    ContentComponent.prototype.navLast = function () {
        // Change slide
        var rs = window.rslidy;
        var new_index = rs.num_slides - 1;
        this.showSlide(new_index, false);
        // Check for incremental items on next slide
        if (this.getNumIncrItems(new_index, false) > 0) {
            var num_incr_items = this.getNumIncrItems(new_index, false);
            if (rs.shift_pressed == false)
                this.showItemsUpToN(1);
            else
                this.showItemsUpToN(num_incr_items);
        }
    };
    // ---
    // Description: Jumps to the previous slide (or previous bullet point).
    // ---
    ContentComponent.prototype.navPrevious = function (animate) {
        var current_index = this.currentSlideIndex;
        // Check for incremental items on current slide
        var num_incr_items_shown = this.getNumIncrItems(current_index, true);
        if (this.getNumIncrItems(current_index, false) > 0 &&
            num_incr_items_shown > 1) {
            if (window.rslidy.shift_pressed == false) {
                this.showItemsUpToN(num_incr_items_shown - 1);
                return;
            }
        }
        // Change slide
        var new_index = current_index - 1;
        this.showSlide(new_index, animate);
        // Check for incremental items on previous slide
        if (this.getNumIncrItems(new_index, false) > 0) {
            var num_incr_items = this.getNumIncrItems(new_index, false);
            this.showItemsUpToN(num_incr_items);
        }
    };
    ContentComponent.prototype.navFirst = function () {
        var new_index = 0;
        this.showSlide(new_index, false);
        // Check for incremental items on previous slide
        if (this.getNumIncrItems(new_index, false) > 0) {
            var num_incr_items = this.getNumIncrItems(new_index, false);
            this.showItemsUpToN(num_incr_items);
        }
    };
    // ---
    // Description: Shows the first n bullet points and hides the rest.
    // n: Specifies the last incremental item to show.
    // ---
    ContentComponent.prototype.showItemsUpToN = function (n) {
        var content_section = document.getElementById("rslidy-content-section");
        var current_slide = content_section.getElementsByClassName("slide")[this.currentSlideIndex];
        var incr_items = current_slide.querySelectorAll("ul.incremental li");
        // Show items with index < n, hide items with index >= n
        var counter = 0;
        for (var i = 0; i < incr_items.length; i++) {
            if (counter < n)
                incr_items[i].classList.remove("rslidy-invisible");
            else
                incr_items[i].classList.add("rslidy-invisible");
            counter++;
        }
    };
    //
    // Slide navigation methods
    //
    // ---
    // Description: Hides all slides and shows specified slide then.
    // slide_index: The index of the slide (0-indexed).
    // ---
    ContentComponent.prototype.showSlide = function (targetSlideIndex, animate) {
        var rs = window.rslidy;
        rs.imageViewer.close();
        if (targetSlideIndex < 0 && this.currentSlideIndex < 0)
            targetSlideIndex = 0;
        if (targetSlideIndex < 0 ||
            targetSlideIndex >= rs.num_slides ||
            this.currentSlideIndex == targetSlideIndex)
            return;
        this.slideTransition.doSlideTransition(this.currentSlideIndex, targetSlideIndex, animate);
        var progress_bar = document.getElementById("rslidy-progress-bar");
        progress_bar.style.width =
            "calc(100%*" + (targetSlideIndex + 1) / rs.num_slides + ")";
        //var nubs = document.getElementById("rslidy-progress-bar-nubs");
        //nubs.style.background = 'repeating-linear-gradient(to right, #000000, #90A4AE, #90A4AE, #90A4AE, #90A4AE, #90A4AE, #90A4AE, #90A4AE, #90A4AE, #90A4AE, #90A4AE, #90A4AE, #90A4AE, #90A4AE, #90A4AE, #90A4AE, #90A4AE, #90A4AE, #000000 calc(100%/' + rs.num_slides + '))';
        // Hide speaker nodes
        rs.toggleSpeakerNotes(null, true);
        var url_parts = window.location.href.split(rs.url_delimiter);
        // Set 1-indexed value and new url
        var slide_index_one_indexed = rs.utils.toInt(targetSlideIndex) + 1;
        window.location.href =
            url_parts[0] + rs.url_delimiter + slide_index_one_indexed;
        // Update slide caption
        var slide_caption = document.getElementById("rslidy-slide-caption");
        slide_caption.innerHTML = " /" + rs.num_slides;
        var slide_input = document.getElementById("rslidy-slide-input");
        slide_input.value = slide_index_one_indexed;
        this.currentSlideIndex = targetSlideIndex;
        return;
    };
    // ---
    // Description: Returns the currently displayed slide index (0-indexed).
    // ---
    ContentComponent.prototype.getCurrentSlideIndex = function () {
        var url_parts = window.location.href.split(window.rslidy.url_delimiter);
        if (url_parts.length > 1) {
            var displayed = +url_parts[1];
            return displayed - 1;
        }
        return -1;
    };
    return ContentComponent;
}());
exports.ContentComponent = ContentComponent;


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var SlideTransition = /** @class */ (function () {
    function SlideTransition() {
        this.animationTypeFade = "fade";
        this.animationTypeSlideIn = "slidein";
        this.animationTypeZoom = "zoom";
        this.hideTimeout = 500;
        this.rs = window.rslidy;
        this.contentSection = document.getElementById("rslidy-content-section");
        this.slides = this.contentSection.getElementsByClassName("slide");
        this.slideThumbnails = document.getElementsByClassName("rslidy-slide-thumbnail");
        var bodyClasses = document.getElementsByTagName("body")[0]
            .classList;
        if (!bodyClasses.contains("unanimated")) {
            if (bodyClasses.contains(this.animationTypeFade)) {
                this.setSlideTransitionClass(this.animationTypeFade);
            }
            else if (bodyClasses.contains(this.animationTypeZoom)) {
                this.setSlideTransitionClass(this.animationTypeZoom);
            }
            else {
                document
                    .getElementsByTagName("body")[0]
                    .classList.add(this.animationTypeSlideIn);
                this.setSlideTransitionClass(this.animationTypeSlideIn);
            }
        }
        else
            this.hideTimeout = 0;
        this.slideTimeouts = new Array(this.slides.length);
        // Hide all slides and remove selected effect
        for (var i = 0; i < this.slides.length; i++) {
            this.slides[i].classList.add("rslidy-hidden");
            this.slideThumbnails[i].classList.remove("rslidy-slide-selected");
        }
    }
    SlideTransition.prototype.setSlideTransitionClass = function (transitionClass) {
        for (var i = 0; i < this.slides.length; i++) {
            this.slides[i].classList.add(transitionClass);
        }
    };
    SlideTransition.prototype.doSlideTransition = function (currentSlideIndex, targetSlideIndex, animate) {
        var _this = this;
        if (currentSlideIndex == targetSlideIndex) {
            return;
        }
        if (currentSlideIndex >= 0) {
            this.slides[currentSlideIndex].classList.remove("animated");
            //Don't animate when skipping slides
            if (!animate) {
                this.slides[targetSlideIndex].classList.remove("animated");
                this.slides[currentSlideIndex].classList.add("rslidy-hidden");
            }
            else {
                this.slides[targetSlideIndex].classList.add("animated");
                setTimeout(function () {
                    // restarts the animation
                    _this.slides[currentSlideIndex].classList.add("animated");
                }, 10);
                this.slideTimeouts[currentSlideIndex] = setTimeout(function () {
                    _this.slides[currentSlideIndex].classList.add("rslidy-hidden");
                }, this.hideTimeout);
            }
            this.slideThumbnails[currentSlideIndex].classList.remove("rslidy-slide-selected");
        }
        if (document
            .getElementsByTagName("body")[0]
            .classList.contains(this.animationTypeSlideIn)) {
            //Fix classes
            if (currentSlideIndex >= 0) {
                if (this.slides[currentSlideIndex].classList.contains("slideout")) {
                    this.slides[currentSlideIndex].classList.remove("slideout");
                    this.slides[currentSlideIndex].classList.add("slidein");
                }
            }
            if (this.slides[targetSlideIndex].classList.contains("slideout")) {
                this.slides[targetSlideIndex].classList.remove("slideout");
                this.slides[targetSlideIndex].classList.add("slidein");
            }
            //We move backwards, so change from slidein to slideout
            if (currentSlideIndex > targetSlideIndex) {
                this.slides[currentSlideIndex].classList.remove("slidein");
                this.slides[currentSlideIndex].classList.add("slideout");
                this.slides[targetSlideIndex].classList.remove("slidein");
                this.slides[targetSlideIndex].classList.add("slideout");
            }
        }
        if (currentSlideIndex >= 0) {
            this.slides[currentSlideIndex].classList.remove("forwards");
            this.slides[currentSlideIndex].classList.add("backwards");
        }
        this.slides[targetSlideIndex].classList.remove("backwards");
        this.slides[targetSlideIndex].classList.add("forwards");
        // Show specified slide and add selected effect
        if (this.slideTimeouts[targetSlideIndex] > 0) {
            clearTimeout(this.slideTimeouts[targetSlideIndex]);
        }
        this.slides[targetSlideIndex].classList.remove("rslidy-hidden");
        this.slideThumbnails[targetSlideIndex].classList.add("rslidy-slide-selected");
        // Scroll to it in the overview and center it if possible
        this.slideThumbnails[targetSlideIndex].scrollIntoView({
            behavior: 'auto',
            block: 'center',
            inline: 'center'
        });
        // Scroll to the top of this slide
        this.contentSection.scrollTop = 0;
    };
    return SlideTransition;
}());
exports.SlideTransition = SlideTransition;


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var html_definitions_1 = __webpack_require__(0);
var ImageViewerComponent = /** @class */ (function () {
    function ImageViewerComponent() {
        this.zoomFactor = 1.0;
        this.mouseDragStartX = 0;
        this.mouseDragStartY = 0;
        this.imageOffsetX = 0;
        this.imageOffsetY = 0;
        this.setImageViewerTags();
        this.view =
            window.rslidy.utils.prependHtmlString(document.body, html_definitions_1.image_viewer);
        this.images = document.getElementsByClassName("rslidy-slide-image");
        this.container = this.view.getElementsByClassName("rslidy-image-viewer-container")[0];
        this.modalImg = this.view.getElementsByClassName("rslidy-image-viewer-content")[0];
        this.addImageOnClickHandlers();
        this.addButtonHandlers();
        this.addMouseEventListeners();
    }
    ImageViewerComponent.prototype.close = function () {
        this.modalImg.classList.add("rslidy-transition-enabled");
        this.modalImg.style.width = "";
        this.modalImg.style.height = "";
        this.modalImg.style.top = "";
        this.modalImg.style.left = "";
        this.view.style.display = "none";
        this.zoomFactor = 1.0;
    };
    ImageViewerComponent.prototype.setImageViewerTags = function () {
        var slides = document.getElementsByClassName("slide");
        var imgs = new Array();
        for (var _i = 0, slides_1 = slides; _i < slides_1.length; _i++) {
            var slide = slides_1[_i];
            var imgsThisSlide = slide.getElementsByTagName("img");
            for (var _a = 0, imgsThisSlide_1 = imgsThisSlide; _a < imgsThisSlide_1.length; _a++) {
                var img = imgsThisSlide_1[_a];
                imgs.push(img);
            }
        }
        window.rslidy.utils.addElementsClass(imgs, "rslidy-slide-image");
    };
    ImageViewerComponent.prototype.addImageOnClickHandlers = function () {
        var _this = this;
        var _loop_1 = function () {
            var image = this_1.images.item(i);
            image.ontouchend = function () {
                _this.touch = true;
            };
            image.onclick = function () {
                if (!window.rslidy.image_viewer)
                    return;
                if (_this.touch) {
                    _this.touch = false;
                    return;
                }
                _this.view.style.display = "block";
                _this.modalImg.src = image.src;
                var theImage = new Image();
                theImage.src = image.src;
                _this.imageWidth = theImage.width;
                _this.imageHeight = theImage.height;
                // fix for firefox, which cannot
                if (_this.imageWidth == 0) {
                    _this.imageWidth = _this.modalImg.width;
                }
                if (_this.imageHeight == 0) {
                    _this.imageHeight = _this.modalImg.height;
                }
                _this.containerWidth = _this.container.clientWidth;
                _this.containerHeight = _this.container.clientHeight;
                _this.initialZoom();
                _this.isInsideContainer = true;
            };
        };
        var this_1 = this;
        for (var i = 0; i < this.images.length; i++) {
            _loop_1();
        }
    };
    ImageViewerComponent.prototype.addButtonHandlers = function () {
        var _this = this;
        var spanClose = this.view.getElementsByClassName("rslidy-iv-close")[0];
        spanClose.addEventListener("click", function () {
            _this.close();
        });
        var spanZoomIn = this.view.getElementsByClassName("rslidy-iv-zoom-in")[0];
        spanZoomIn.addEventListener("click", function () {
            _this.zoomIn();
        });
        var spanZoomOut = this.view.getElementsByClassName("rslidy-iv-zoom-out")[0];
        spanZoomOut.addEventListener("click", function () {
            _this.zoomOut();
        });
        var spanZoomReset = document.getElementsByClassName("rslidy-iv-zoom-reset")[0];
        spanZoomReset.addEventListener("click", function () {
            _this.initialZoom();
        });
    };
    ImageViewerComponent.prototype.addMouseEventListeners = function () {
        var _this = this;
        var mouseDown = false;
        this.container.addEventListener("mouseenter", function (mouseDownEvent) {
            _this.isInsideContainer = true;
        });
        this.container.addEventListener("mouseleave", function (mouseDownEvent) {
            _this.isInsideContainer = false;
        });
        this.view.addEventListener("wheel", function (mouseWheelEvent) {
            mouseWheelEvent.preventDefault();
            var delta = Math.max(-1, Math.min(1, mouseWheelEvent.wheelDelta || -mouseWheelEvent.deltaY));
            if (delta > 0) {
                _this.zoomIn();
                var factor = 1 - _this.zoomFactor * 1.2 / _this.zoomFactor;
                _this.imageOffsetX +=
                    (mouseWheelEvent.clientX - window.innerWidth / 2) * factor;
                _this.imageOffsetY +=
                    (mouseWheelEvent.clientY - window.innerHeight / 2) * factor;
                _this.applyOffset(false);
            }
            else {
                _this.zoomOut();
                var factor = 1 - _this.zoomFactor / 1.2 / _this.zoomFactor;
                if (_this.zoomFactor / 1.2 > _this.initialZoomFactor / 10) {
                    _this.imageOffsetX +=
                        (mouseWheelEvent.clientX - window.innerWidth / 2) * factor;
                    _this.imageOffsetY +=
                        (mouseWheelEvent.clientY - window.innerHeight / 2) * factor;
                    _this.applyOffset(false);
                }
            }
        });
        this.view.addEventListener("mousedown", function (mouseDownEvent) {
            mouseDownEvent.preventDefault();
            if (!_this.isInsideContainer) {
                return;
            }
            _this.mouseDragStartX = mouseDownEvent.clientX;
            _this.mouseDragStartY = mouseDownEvent.clientY;
            _this.modalImg.classList.remove("rslidy-transition-enabled");
            mouseDown = true;
        });
        this.view.addEventListener("mousemove", function (mouseMoveEvent) {
            mouseMoveEvent.preventDefault();
            if (!mouseDown) {
                return;
            }
            _this.imageOffsetX =
                _this.imageOffsetX + mouseMoveEvent.clientX - _this.mouseDragStartX;
            _this.imageOffsetY =
                _this.imageOffsetY + mouseMoveEvent.clientY - _this.mouseDragStartY;
            _this.mouseDragStartX = mouseMoveEvent.clientX;
            _this.mouseDragStartY = mouseMoveEvent.clientY;
            _this.applyOffset(false);
        });
        this.view.addEventListener("mouseup", function (mouseUpEvent) {
            mouseDown = false;
        });
    };
    ImageViewerComponent.prototype.zoomIn = function () {
        this.modalImg.classList.add("rslidy-transition-enabled");
        this.zoomFactor *= 1.2;
        this.imageOffsetX =
            this.containerWidth / 2.0 -
                (-this.imageOffsetX + this.containerWidth / 2.0) * 1.2;
        this.imageOffsetY =
            this.containerHeight / 2.0 -
                (-this.imageOffsetY + this.containerHeight / 2.0) * 1.2;
        this.modalImg.style.width = this.imageWidth * this.zoomFactor / 16 + "em";
        this.modalImg.style.height = this.imageHeight * this.zoomFactor / 16 + "em";
        this.applyOffset(false);
    };
    ImageViewerComponent.prototype.zoomOut = function () {
        this.modalImg.classList.add("rslidy-transition-enabled");
        var zoomBefore = this.zoomFactor;
        this.zoomFactor /= 1.2;
        if (this.zoomFactor < this.initialZoomFactor / 10) {
            this.zoomFactor = this.initialZoomFactor / 10;
        }
        this.imageOffsetX =
            this.containerWidth / 2.0 -
                (-this.imageOffsetX + this.containerWidth / 2.0) /
                    (zoomBefore / this.zoomFactor);
        this.imageOffsetY =
            this.containerHeight / 2.0 -
                (-this.imageOffsetY + this.containerHeight / 2.0) /
                    (zoomBefore / this.zoomFactor);
        this.modalImg.style.width = this.imageWidth * this.zoomFactor / 16 + "em";
        this.modalImg.style.height = this.imageHeight * this.zoomFactor / 16 + "em";
        this.applyOffset(false);
    };
    ImageViewerComponent.prototype.applyOffset = function (center) {
        var currentImageWidth = this.imageWidth * this.zoomFactor;
        var currentImageHeight = this.imageHeight * this.zoomFactor;
        if (center) {
            if (currentImageWidth <= this.containerWidth) {
                this.imageOffsetX = (this.containerWidth - currentImageWidth) / 2.0;
            }
            else {
                if (this.containerWidth - this.imageOffsetX >= currentImageWidth) {
                    this.imageOffsetX = this.containerWidth - currentImageWidth;
                }
                else if (this.imageOffsetX > 0) {
                    this.imageOffsetX = 0;
                }
            }
            if (currentImageHeight <= this.containerHeight) {
                this.imageOffsetY = (this.containerHeight - currentImageHeight) / 2.0;
            }
            else {
                if (this.containerHeight - this.imageOffsetY >= currentImageHeight) {
                    this.imageOffsetY = this.containerHeight - currentImageHeight;
                }
                else if (this.imageOffsetY > 0) {
                    this.imageOffsetY = 0;
                }
            }
        }
        this.modalImg.style.left = this.imageOffsetX / 16 + "em";
        this.modalImg.style.top = this.imageOffsetY / 16 + "em";
    };
    ImageViewerComponent.prototype.initialZoom = function () {
        var aspectImg = this.imageWidth / this.imageHeight;
        var aspectContainer = this.containerWidth / this.containerHeight;
        if (aspectContainer > aspectImg) {
            this.initialZoomFactor = this.containerHeight / this.imageHeight;
            this.imageOffsetX =
                (this.containerWidth - this.imageWidth * this.zoomFactor) / 2.0;
        }
        else {
            this.initialZoomFactor = this.containerWidth / this.imageWidth;
            this.imageOffsetY =
                (this.containerHeight - this.imageHeight * this.zoomFactor) / 2.0;
        }
        this.zoomFactor = this.initialZoomFactor;
        this.modalImg.style.width = this.imageWidth * this.zoomFactor / 16 + "em";
        this.modalImg.style.height = this.imageHeight * this.zoomFactor / 16 + "em";
        this.applyOffset(true);
    };
    return ImageViewerComponent;
}());
exports.ImageViewerComponent = ImageViewerComponent;


/***/ })
/******/ ]);
//# sourceMappingURL=rslidy.js.map