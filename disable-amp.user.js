// ==UserScript==
// @name Disable AMP Dev
// @name:ar تعطيل AMP Dev
// @name:be Адключыць AMP Dev
// @name:bg Деактивирайте AMP Dev
// @name:bn-IN AMP নিষ্ক্রিয় করুন Dev
// @name:cs Zakázat AMP Dev
// @name:da Deaktiver AMP Dev
// @name:de AMP deaktivieren Dev
// @name:el Απενεργοποίηση AMP Dev
// @name:es Deshabilitar AMP Dev
// @name:et Keela AMP Dev
// @name:fa غيرفعالسازي شتاب دهنده صفحات موبایل Dev
// @name:fi Poista AMP käytöstä Dev
// @name:fr Désactiver AMP Dev
// @name:he AMP השבת Dev
// @name:hr Onemogući AMP Dev
// @name:hu AMP letiltása Dev
// @name:id Nonaktifkan AMP Dev
// @name:it Disattiva AMP Dev
// @name:ja AMPを無効化 Dev
// @name:ko AMP 비활성화 Dev
// @name:lt Išjungti AMP Dev
// @name:lv Atspējot AMP Dev
// @name:ms Nyahdayakan AMP Dev
// @name:ne-NP AMP लाई असक्षम पार्नुहोस् Dev
// @name:nl AMP uitschakelen Dev
// @name:no Skru av AMP Dev
// @name:pl Wyłącz AMP Dev
// @name:pt-PT Desativar AMP Dev
// @name:pt Desativar AMP Dev
// @name:ro Dezactivare AMP Dev
// @name:ru Отключить AMP Dev
// @name:sk Vypnúť AMP Dev
// @name:sl Onemogoči AMP Dev
// @name:sr Isključi sve Dev
// @name:sv Stäng av AMP Dev
// @name:tr AMP'yi devre dışı bırak Dev
// @name:uk Вимкнути AMP Dev
// @name:vi Vô hiệu hóa AMP Dev
// @name:zh-HK 停用 AMP Dev
// @name:zh-TW 禁用加速的行動頁面（AMP） Dev
// @name:zh 禁用 AMP Dev
// @namespace    adguard
// @version      1.0.48
// @description This is a very simple userscript that disables AMP on the Google search results page. 
// @description:ar هذا سكربت بسيط جدا، يعمل على تعطل AMP في صفحات بحث Google. 
// @description:be Гэта - вельмі просты скрыпт, які прыбірае AMP з вынікаў пошуку Google. 
// @description:bg Това е много прост потребителски скрипт, който деактивира AMP на страницата с резултати от търсенето с Google. 
// @description:bn-IN এটি একটি খুব সাধারণ ইউজারস্ক্রিপ্ট যা গুগল অনুসন্ধান ফলাফল পৃষ্ঠায় AMP নিষ্ক্রিয় করে। 
// @description:cs Jedná se o velmi jednoduchý uživatelský skript, který zakáže AMP na stránce s výsledky vyhledávání Google. 
// @description:da Dette er et meget simpelt userscript, der deaktiverer AMP på Googles søgeresultatside. 
// @description:de Dies ist ein sehr einfaches Userscript, das AMP auf der Seite der Google-Suchergebnisse deaktiviert. 
// @description:el Αυτό είναι ένα πολύ απλό userscript που απενεργοποιεί το AMP στη σελίδα αποτελεσμάτων αναζήτησης Google. 
// @description:es Este es un userscript muy simple que deshabilita AMP en la página de resultados de búsqueda de Google. 
// @description:et Tegemist on lihtsa kasutajaskriptiga, mis keelab Google otsingutulemustes AMP-i. 
// @description:fa این یک یوزراسکریپت بسیار ساده است که شتاب دهنده صفحات موبایل را در نتایج صفحه جستجو گوگل غیرفعال می کند. 
// @description:fi Tämä on hyvin yksinkertainen käyttäjäskripti, jolla AMP kytketään pois käytöstä Googlen hakutulossivulla. 
// @description:fr C'est un script utilisateur très simple pour désactiver AMP sur les pages de résultats de Google. 
// @description:he זהו סקריפט משתמש פשוט מאוד שמשבית את AMP בדף תוצאות החיפוש של גוגל 
// @description:hr Ovo je jednostavan userscript koji onemogućuje AMP u Google rezultatima pretraživanja. 
// @description:hu Ez egy nagyon egyszerű szkript, amely letiltja az AMP szolgáltatást a Google keresési eredményoldalán. 
// @description:id Ini adalah userscript yang sangat mudah yang dapat menonaktifkan AMP pada halaman hasil pencarian Google. 
// @description:it Questo è uno script utente molto semplice che rimuove AMP dai risultati nelle pagine di ricerca di Google. 
// @description:ja Google検索結果ページでAMPを無効にするシンプルなユーザースクリプトです。 
// @description:ko 이것은 Google 검색 결과 페이지에서 AMP를 비활성화하는 매우 간단한 사용자 스크립트입니다. 
// @description:lt Tai labai paprastas naudotojo skriptas, atjungiantis AMP Google paieškos rezultatų puslapyje. 
// @description:lv Tas ir ļoti vienkāršs lietotāja skripts, kas atspējo AMP Google meklēšanas rezultātu lapā. 
// @description:ms Ini adalah skrip pengguna sangat ringkas yang menyahdayakan AMP pada laman hasil carian Google. 
// @description:ne-NP यो एक धेरै साधारण उपयोगकर्ता स्क्रिप्ट हो जसले गुगल खोज परिणाम पृष्ठमा AMP असक्षम गर्दछ। 
// @description:nl Dit is een eenvoudig userscript dat AMP uitschakelt op de Google zoek resultaatspagina. 
// @description:no Dette er et veldig enkelt brukerskript som skrur av AMP på Google-søkeresultatssider. 
// @description:pl Jest to bardzo prosty skrypt użytkownika, który wyłącza AMP na stronie wyników wyszukiwania Google. 
// @description:pt-PT Este é um script muito simples que desativa as AMP na página de resultados de pesquisa do Google. 
// @description:pt Este é um script muito simples que desativa o AMP na página de resultados de pesquisa do Google. 
// @description:ro Dezactivați AMP în pagina de rezultate căutare Google cu acest foarte simplu script utilizator. 
// @description:ru Это очень простой скрипт, который убирает AMP из результатов поиска Google. 
// @description:sk Toto je veľmi jednoduchý používateľský skript, ktorý na stránke s výsledkami vyhľadávania Google zakáže AMP. 
// @description:sl To je zelo preprost uporabniški skript, ki onemogoči AMP na Googlovi strani z rezultati iskanja. 
// @description:sr Ovo je veoma jednostavan userscript koji isključuje AMP na stranici sa rezultatima Google pretrage. 
// @description:sv Det här är ett väldigt enkelt användarskript som förhindrar AMP i Googles sökresultat. 
// @description:tr Bu, Google arama sonuçları sayfasında AMP’yi devre dışı bırakan çok basit bir kullanıcı betiğidir. 
// @description:uk Це дуже простий користувацький скрипт, який вимикає AMP на сторінці результатів пошуку Google. 
// @description:vi Đây là một mô tả người dùng rất đơn giản, vô hiệu hóa AMP trên trang kết quả tìm kiếm của Google. 
// @description:zh-HK 這是個簡單輕巧的腳本，用來停用 Google 搜尋結果的 AMP 功能。 
// @description:zh-TW 這是一個非常簡單的使用者腳本，其禁用於 Google 搜尋結果頁面上之加速的行動頁面（AMP）。 
// @description:zh 这是一个非常简单的用于在 Google 搜索结果页禁用 AMP 的用户脚本。 
// @downloadURL  
// @updateURL    
// @homepageURL  https://adguard.com/
// @author       AdGuard
// @include      https://www.google.*/*
// @include      https://news.google.*/*
// @include      https://yandex.*/*
// @include      https://*.turbopages.org/*
// @include      https://*/amp/*
// @include      https://*/*/amp/*
// @include      https://amp.*
// @include      https://*/*.amp*
// @include      https://*/*-amp*
// @include      https://*/*/amp
// @include      https://*/amp-*/*
// @include      https://*/?amp*
// @include      https://*?amp=1*
// @include      https://*/*&amp*
// @include      https://*/*&amp=1*
// @exclude      https://www.orfonline.org/*
// @exclude      https://tehnichka.pro/*
// @exclude      https://yandex.ru/turbo/s/terrnews.com/*
// @exclude      https://amp.dev/*
// @run-at       document-end
// ==/UserScript==
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/amp-project.js":
/*!****************************!*\
  !*** ./src/amp-project.js ***!
  \****************************/
/*! exports provided: redirectAmpProjectPages */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"redirectAmpProjectPages\", function() { return redirectAmpProjectPages; });\n/**\n * Redirects from ampproject.org pages to normal version\n */\nvar redirectAmpProjectPages = function redirectAmpProjectPages() {\n  var canonicalLinkElement = document.querySelector('link[rel=\"canonical\"][href]');\n  if (!canonicalLinkElement) {\n    return;\n  }\n  var canonicalLocationHref = canonicalLinkElement.href;\n  if (canonicalLocationHref) {\n    document.location.href = canonicalLocationHref;\n  }\n};\n\n//# sourceURL=webpack:///./src/amp-project.js?");

/***/ }),

/***/ "./src/google-amp.js":
/*!***************************!*\
  !*** ./src/google-amp.js ***!
  \***************************/
/*! exports provided: ampRedirect, preventAmp, preventNewsAmp */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ampRedirect\", function() { return ampRedirect; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"preventAmp\", function() { return preventAmp; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"preventNewsAmp\", function() { return preventNewsAmp; });\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ \"./src/utils.js\");\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\nfunction _iterableToArray(iter) { if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter); }\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }\n\nvar DISABLE_AMP_REDIRECTED = '__disable_amp_redirected';\nvar URL_PATTERN_REGEX = /^https?:\\/\\/.+/i;\nvar ARTICLE_VIEW_AMP = 'articleViewAmp';\nvar expando = \"__\".concat(Math.random());\nvar HTTPS = 'https://';\n\n/**\n * Redirects amp version to normal\n */\nvar ampRedirect = function ampRedirect() {\n  // timeout to prevent automatic redirects to amp\n  var REDIRECT_WAIT_TIME_OUT_MS = 30000;\n  var disableAmpRedirectedDate = Number(sessionStorage.getItem(DISABLE_AMP_REDIRECTED));\n  if (\n  // Prevent redirecting to another page if run in an iframe\n  window.self !== window.top\n  // Do not redirect if since last redirect past less than REDIRECT_WAIT_TIME_OUT_MS\n  || disableAmpRedirectedDate && Date.now() - disableAmpRedirectedDate < REDIRECT_WAIT_TIME_OUT_MS) {\n    return;\n  }\n  var canonicalLink = document.querySelector('head > link[rel=\"canonical\"]');\n  var ampProjectScript = document.querySelector('head > script[src^=\"https://cdn.ampproject.org\"]');\n  if (ampProjectScript && canonicalLink && URL_PATTERN_REGEX.test(canonicalLink.href)) {\n    sessionStorage.setItem(DISABLE_AMP_REDIRECTED, Date.now());\n    window.top.location.href = canonicalLink.href;\n  }\n};\n\n/**\n * Replaces amp links by data-amp-cur attribute value\n */\nvar replaceByAmpCurAttribute = function replaceByAmpCurAttribute() {\n  var elements = document.querySelectorAll('a[data-amp-cur]');\n  _toConsumableArray(elements).forEach(function (el) {\n    if (el[expando]) {\n      return;\n    }\n\n    // eslint-disable-next-line no-param-reassign\n    el[expando] = true;\n    var url = el.getAttribute('data-amp-cur') || el.getAttribute('data-amp');\n    if (url) {\n      Object(_utils__WEBPACK_IMPORTED_MODULE_0__[\"sanitizeLinkElement\"])(el, Object(_utils__WEBPACK_IMPORTED_MODULE_0__[\"sanitizeUrl\"])(url));\n    }\n\n    // Some websites manage to break the data-amp-cur attribute and use articleViewAmp htmls instead,\n    // e.g http://www.mediatoday.co.kr/news/articleViewAmp.html?idxno=313292\n    var href = el.href;\n    if (href && href.includes(ARTICLE_VIEW_AMP)) {\n      Object(_utils__WEBPACK_IMPORTED_MODULE_0__[\"sanitizeLinkElement\"])(el, href.replace(ARTICLE_VIEW_AMP, 'articleView'));\n    }\n  });\n};\n\n/**\n * Replaces amp links provided by amp cdn\n */\nvar replaceCdnAmp = function replaceCdnAmp() {\n  var ampLinks = document.querySelectorAll('a[data-amp-cdn]');\n  ampLinks.forEach(function (ampLink) {\n    var fixedUrl = ampLink.href;\n    if (fixedUrl.includes('cdn.ampproject.org')) {\n      fixedUrl = HTTPS + fixedUrl.substr(fixedUrl.indexOf('cdn.ampproject.org/wp/s/') + 24);\n    }\n    if (fixedUrl.substr(8).startsWith('amp.')) {\n      fixedUrl = HTTPS + fixedUrl.substr(12);\n    }\n    fixedUrl = fixedUrl.replace('?amp&', '?&');\n    if (fixedUrl !== ampLink.href) {\n      ampLink.setAttribute('href', fixedUrl);\n      ampLink.addEventListener('click', function (e) {\n        e.preventDefault();\n        e.stopPropagation();\n        document.location.href = fixedUrl;\n      }, true);\n      Object(_utils__WEBPACK_IMPORTED_MODULE_0__[\"hideAmpIcon\"])(ampLink);\n    }\n  });\n};\nvar preventAmp = function preventAmp() {\n  replaceByAmpCurAttribute();\n  replaceCdnAmp();\n};\nvar preventNewsAmp = function preventNewsAmp() {\n  if (window.self !== window.top) {\n    return;\n  }\n  var linkElements = document.querySelectorAll('article > a[jslog]');\n  linkElements.forEach(function (el) {\n    // news.google.com keep amp links as encoded `jslog` attribute value\n    var jslog = el.getAttribute('jslog');\n    var canonicalUrl = Object(_utils__WEBPACK_IMPORTED_MODULE_0__[\"extractCanonicalFromJslog\"])(jslog);\n    if (canonicalUrl) {\n      Object(_utils__WEBPACK_IMPORTED_MODULE_0__[\"sanitizeLinkElement\"])(el, canonicalUrl);\n    }\n  });\n};\n\n//# sourceURL=webpack:///./src/google-amp.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _yandex_turbo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./yandex-turbo */ \"./src/yandex-turbo.js\");\n/* harmony import */ var _amp_project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./amp-project */ \"./src/amp-project.js\");\n/* harmony import */ var _google_amp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./google-amp */ \"./src/google-amp.js\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils */ \"./src/utils.js\");\n\n\n\n\n(function () {\n  var _document$location = document.location,\n    href = _document$location.href,\n    origin = _document$location.origin;\n  if (href.includes('https://yandex.ru/turbo') || href.includes('turbopages.org')) {\n    Object(_yandex_turbo__WEBPACK_IMPORTED_MODULE_0__[\"redirectTurboPages\"])();\n    return;\n  }\n  if (!origin.includes('.google.')) {\n    Object(_google_amp__WEBPACK_IMPORTED_MODULE_2__[\"ampRedirect\"])();\n    return;\n  }\n  if (href.includes('-amp') || href.includes('.amp') || href.includes('/amp')) {\n    Object(_amp_project__WEBPACK_IMPORTED_MODULE_1__[\"redirectAmpProjectPages\"])();\n    return;\n  }\n  if (origin.includes('news.google.')) {\n    Object(_utils__WEBPACK_IMPORTED_MODULE_3__[\"observeDomChanges\"])(_google_amp__WEBPACK_IMPORTED_MODULE_2__[\"preventNewsAmp\"]);\n  } else {\n    Object(_utils__WEBPACK_IMPORTED_MODULE_3__[\"observeDomChanges\"])(_google_amp__WEBPACK_IMPORTED_MODULE_2__[\"preventAmp\"]);\n  }\n})();\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/*! exports provided: observeDomChanges, hideAmpIcon, sanitizeLinkElement, sanitizeUrl, extractCanonicalFromJslog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"observeDomChanges\", function() { return observeDomChanges; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"hideAmpIcon\", function() { return hideAmpIcon; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"sanitizeLinkElement\", function() { return sanitizeLinkElement; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"sanitizeUrl\", function() { return sanitizeUrl; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"extractCanonicalFromJslog\", function() { return extractCanonicalFromJslog; });\nvar AMP_TOKEN_REGEXP = /(amp\\/|amp-|\\.amp)/;\nvar observeDomChanges = function observeDomChanges(callback) {\n  new MutationObserver(callback).observe(document, {\n    childList: true,\n    subtree: true\n  });\n};\n\n/**\n * Hide AMP icon for AMP element in google search results\n * @param amp element\n */\nvar hideAmpIcon = function hideAmpIcon(amp) {\n  var ampIcon = amp.querySelector('[aria-label=\"AMP logo\"], [aria-label=\"Logo AMP\"]');\n  if (ampIcon) {\n    ampIcon.style.display = 'none';\n  }\n};\n\n/**\n * Replaces href of amp link by canonical url\n * @param {Element} el link element\n * @param {string} url canonical url\n */\nvar sanitizeLinkElement = function sanitizeLinkElement(el, url) {\n  el.setAttribute('href', url);\n  el.addEventListener('click', function (e) {\n    e.preventDefault();\n    e.stopPropagation();\n    // https://github.com/AdguardTeam/DisableAMP/pull/15\n    document.location.href = url;\n  }, true);\n  hideAmpIcon(el);\n};\n\n/**\n * Removes amp marker from url\n *\n * @param {string} ampUrl amp url\n * @returns {string} url without amp marker\n */\nvar sanitizeUrl = function sanitizeUrl(ampUrl) {\n  return ampUrl.replace(AMP_TOKEN_REGEXP, '');\n};\n\n/**\n * Extracts canonical url from link tags which use jslog attribute to store\n * encoded data. Encoded data may store only canonical url or both canonical\n * and amp urls.\n *\n * @param {string} jslog\n * @returns {string|null} canonical url or null if there is no amp version\n */\nvar extractCanonicalFromJslog = function extractCanonicalFromJslog(jslog) {\n  var encodedData = jslog.substring(jslog.indexOf(':') + 1, jslog.indexOf('; track:click,vis'));\n  var decodedData;\n  try {\n    decodedData = JSON.parse(atob(encodedData));\n  } catch (e) {/* do nothing */}\n  if (!decodedData) {\n    return null;\n  }\n  var urls = decodedData.filter(function (item) {\n    return typeof item === 'string' && (item.startsWith('http') || item.startsWith('https'));\n  });\n\n  // Data may only contain canonical url, this means website does not have amp version\n  if (urls.length < 2) {\n    return null;\n  }\n\n  // Canonical url will be the first one in most cases\n  var canonicalUrl = urls.find(function (url) {\n    return !AMP_TOKEN_REGEXP.test(url);\n  });\n  return canonicalUrl || null;\n};\n\n//# sourceURL=webpack:///./src/utils.js?");

/***/ }),

/***/ "./src/yandex-turbo.js":
/*!*****************************!*\
  !*** ./src/yandex-turbo.js ***!
  \*****************************/
/*! exports provided: redirectTurboPages */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"redirectTurboPages\", function() { return redirectTurboPages; });\n/**\n * Redirects from Yandex Turbo page to normal version\n */\nvar redirectTurboPages = function redirectTurboPages() {\n  var postMessage = document.querySelector('script[data-name=\"post-message\"][data-message]');\n  if (!postMessage) {\n    return;\n  }\n  var dataMessage = postMessage.getAttribute('data-message');\n  var dataJson = JSON.parse(dataMessage);\n  if (dataJson && dataJson.originalUrl) {\n    document.location.href = dataJson.originalUrl;\n  }\n};\n\n//# sourceURL=webpack:///./src/yandex-turbo.js?");

/***/ })

/******/ });