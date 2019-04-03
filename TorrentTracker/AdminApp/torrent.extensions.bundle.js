webpackJsonp([1000],{

/***/ 100000:
/*!*******************************!*\
  !*** ./__extensions_index.ts ***!
  \*******************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var grid_extender_1 = __webpack_require__(/*! ./grid-extender */ 100017);
var custom_fields_1 = __webpack_require__(/*! ./custom-fields */ 100020);
var commands_extender_1 = __webpack_require__(/*! ./commands-extender */ 100027);
var editor_extender_1 = __webpack_require__(/*! ./editor-extender */ 100031);
var item_extender_1 = __webpack_require__(/*! ./item-extender */ 100052);
var theme_1 = __webpack_require__(/*! ./theme */ 100054);
/**
 * The entry point of the extensions. Each extension bundle needs to have exactly one export
 * of the Extensions interface and it needs to be placed in the __extensions_index file.
 * Here all of the NgModules are returned and are loaded into the main module.
 */
var SamplesExtension = /** @class */ (function () {
    function SamplesExtension() {
    }
    /**
     * On application bootstrap this method is called to get all extensions as angular modules.
     */
    SamplesExtension.prototype.getNgModules = function () {
        return [
            grid_extender_1.GridExtenderModule,
            custom_fields_1.CustomFieldsModule,
            commands_extender_1.CommandsExtenderModule,
            editor_extender_1.EditorExtenderModule,
            item_extender_1.ItemExtenderModule,
            theme_1.ThemeModule
        ];
    };
    return SamplesExtension;
}());
exports.SamplesExtension = SamplesExtension;arguments[1].metadata = { compatibleVersionsTags: "HEAD, tag: 11.2.6922.0, tag: 11.2.6921.0, tag: 11.2.6900.0, tag: 11.1.6825.0, tag: 11.1.6824.0, origin/patches\n", name: "sample.extensions" };


/***/ }),

/***/ 100001:
/*!*******************************************************************************!*\
  !*** delegated ./node_modules/tslib/tslib.es6.js from dll-reference adminapp ***!
  \*******************************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(0).__iris_require__('./node_modules/tslib/tslib.es6.js')

/***/ }),

/***/ 100002:
/*!****************************************************************************************!*\
  !*** delegated ./node_modules/@angular/core/fesm5/core.js from dll-reference adminapp ***!
  \****************************************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(0).__iris_require__('./node_modules/@angular/core/fesm5/core.js')

/***/ }),

/***/ 100003:
/*!*****************************************************************************************************************!*\
  !*** delegated ./node_modules/progress-sitefinity-adminapp-sdk/app/api/v1/index.js from dll-reference adminapp ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(0).__iris_require__('./node_modules/progress-sitefinity-adminapp-sdk/app/api/v1/index.js')

/***/ }),

/***/ 100004:
/*!***************************!*\
  !*** external "adminapp" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = adminapp;

/***/ }),

/***/ 100005:
/*!*************************************************!*\
  !*** ./node_modules/css-loader/lib/css-base.js ***!
  \*************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),

/***/ 100006:
/*!********************************************************************************!*\
  !*** delegated ./node_modules/rxjs/_esm5/index.js from dll-reference adminapp ***!
  \********************************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(0).__iris_require__('./node_modules/rxjs/_esm5/index.js')

/***/ }),

/***/ 100007:
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target) {
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ 100035);

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertInto + " " + options.insertAt.before);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	options.attrs.type = "text/css";

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	options.attrs.type = "text/css";
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ 100008:
/*!******************************************************************************************!*\
  !*** delegated ./node_modules/@angular/common/fesm5/http.js from dll-reference adminapp ***!
  \******************************************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(0).__iris_require__('./node_modules/@angular/common/fesm5/http.js')

/***/ }),

/***/ 100009:
/*!********************************************************************************************!*\
  !*** delegated ./node_modules/@angular/router/fesm5/router.js from dll-reference adminapp ***!
  \********************************************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(0).__iris_require__('./node_modules/@angular/router/fesm5/router.js')

/***/ }),

/***/ 100010:
/*!********************************************************************************************!*\
  !*** delegated ./node_modules/@angular/common/fesm5/common.js from dll-reference adminapp ***!
  \********************************************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(0).__iris_require__('./node_modules/@angular/common/fesm5/common.js')

/***/ }),

/***/ 100011:
/*!******************************************!*\
  !*** ./grid-extender/image.component.ts ***!
  \******************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ 100001);
var core_1 = __webpack_require__(/*! @angular/core */ 100002);
var v1_1 = __webpack_require__(/*! progress-sitefinity-adminapp-sdk/app/api/v1 */ 100003);
var http_1 = __webpack_require__(/*! @angular/common/http */ 100008);
/**
 * A custom component to be displayed in each cell in a specific column in the grid.
 */
var ImageComponent = /** @class */ (function () {
    function ImageComponent(http) {
        // Sample height of the image
        this.imageHeight = 50;
        this._httpClient = http;
    }
    ImageComponent.prototype.ngOnInit = function () {
        var _this = this;
        var torrentGuid = this.context.dataItem.key;
        var url = v1_1.HTTP_PREFIX + "/sf/system/torrents(" + torrentGuid + ")?$select=*&$expand=ImageFile";
        // request with url below returns 404 Not Found
        // let url = `${HTTP_PREFIX}/sf/system/torrents(${torrentGuid})?$select=*&$expand=ImageFile&sf_provider=OpenAccessDataProvider&sf_culture=en&sf_fallback_prop_names=ImageFile.Title`;
        this._httpClient.get(url)
            .subscribe(function (data) {
            if (data.ImageFile) {
                _this.imageSource = data.ImageFile.Url;
            }
        }, function (error) {
            console.log(error);
        });
    };
    ImageComponent = tslib_1.__decorate([
        core_1.Component({
            template: __webpack_require__(/*! ./image.component.html */ 100018)
        }),
        tslib_1.__metadata("design:paramtypes", [http_1.HttpClient])
    ], ImageComponent);
    return ImageComponent;
}());
exports.ImageComponent = ImageComponent;


/***/ }),

/***/ 100012:
/*!******************************************************************************************!*\
  !*** delegated ./node_modules/@angular/forms/fesm5/forms.js from dll-reference adminapp ***!
  \******************************************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(0).__iris_require__('./node_modules/@angular/forms/fesm5/forms.js')

/***/ }),

/***/ 100013:
/*!**********************************************************!*\
  !*** ./custom-fields/custom-field-readonly.component.ts ***!
  \**********************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ 100001);
var core_1 = __webpack_require__(/*! @angular/core */ 100002);
var v1_1 = __webpack_require__(/*! progress-sitefinity-adminapp-sdk/app/api/v1 */ 100003);
/**
 * The component used to display the field in read only mode.
 * One can use inline template & styles OR templateUrl & styleUrls OR a mixture of that like here. See the -write.component.ts version for the write mode type.
 */
var CustomInputReadonlyComponent = /** @class */ (function (_super) {
    tslib_1.__extends(CustomInputReadonlyComponent, _super);
    function CustomInputReadonlyComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CustomInputReadonlyComponent = tslib_1.__decorate([
        core_1.Component({
            template: __webpack_require__(/*! ./custom-field-readonly.component.html */ 100021),
            styles: ["\n        .custom-title-input {\n            border: 0;\n            padding: 0;\n            font-weight: 700;\n            font-size: 3em;\n            width: 100%;\n            color: #666;\n        }\n        "]
        })
    ], CustomInputReadonlyComponent);
    return CustomInputReadonlyComponent;
}(v1_1.FieldBase));
exports.CustomInputReadonlyComponent = CustomInputReadonlyComponent;


/***/ }),

/***/ 100014:
/*!*******************************************************!*\
  !*** ./custom-fields/custom-field-write.component.ts ***!
  \*******************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ 100001);
var core_1 = __webpack_require__(/*! @angular/core */ 100002);
var v1_1 = __webpack_require__(/*! progress-sitefinity-adminapp-sdk/app/api/v1 */ 100003);
/**
 * The component used to display the field in write mode.
 * One can use inline template & styles OR templateUrl & styleUrls, like here OR mixture of that. See -readonly.component.ts version for the read mode type.
 */
var CustomInputWriteComponent = /** @class */ (function (_super) {
    tslib_1.__extends(CustomInputWriteComponent, _super);
    function CustomInputWriteComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CustomInputWriteComponent.prototype.processErrors = function (errors) {
        // the pattern validator in the custom-field.settings file sets a pattern object
        // that holds information regarding the validation. If the pattern property exists
        // the validation has not passed and we can return an error message
        if (errors.pattern) {
            return ["Invalid email !"];
        }
        return [];
    };
    CustomInputWriteComponent = tslib_1.__decorate([
        core_1.Component({
            template: __webpack_require__(/*! ./custom-field-write.component.html */ 100022),
            styles: [__webpack_require__(/*! ./custom-field-write.component.css */ 100023)]
        })
    ], CustomInputWriteComponent);
    return CustomInputWriteComponent;
}(v1_1.FieldBase));
exports.CustomInputWriteComponent = CustomInputWriteComponent;


/***/ }),

/***/ 100015:
/*!****************************************************!*\
  !*** ./commands-extender/print-preview.command.ts ***!
  \****************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ 100001);
var core_1 = __webpack_require__(/*! @angular/core */ 100002);
var router_1 = __webpack_require__(/*! @angular/router */ 100009);
var rxjs_1 = __webpack_require__(/*! rxjs */ 100006);
/**
 * Serves as a command that gets invoked when the print preview action
 * in the actions menu is clicked.
 */
var PrintPreviewCommand = /** @class */ (function () {
    /**
     * Initializes a new instance of the PrintPreviewCommand.
     * @param router The router that is used to navigate.
     */
    function PrintPreviewCommand(router) {
        this.router = router;
    }
    /**
     * This method gets invoked when the print preview action is clicked.
     * @param context The context that contains the data item and the custom properties from the CommandProvider.
     */
    PrintPreviewCommand.prototype.execute = function (context) {
        // get the data item from the context.
        var dataItem = context.data.dataItem;
        // construct the query params so the component that we navigate to
        // will know which data item to fetch
        var currentQueryParams = {
            entitySet: dataItem.metadata.setName,
            id: dataItem.key,
            provider: dataItem.provider
        };
        // navigate to the print-preview route using the query params.
        // return an observable here, because this might be a time consuming operation
        var url = "/print-preview";
        var navPromise = this.router.navigate([url], { queryParams: currentQueryParams });
        return rxjs_1.from(navPromise);
    };
    PrintPreviewCommand = tslib_1.__decorate([
        core_1.Injectable(),
        tslib_1.__metadata("design:paramtypes", [router_1.Router])
    ], PrintPreviewCommand);
    return PrintPreviewCommand;
}());
exports.PrintPreviewCommand = PrintPreviewCommand;


/***/ }),

/***/ 100016:
/*!******************************************************************************************!*\
  !*** delegated ./node_modules/rxjs/_esm5/operators/index.js from dll-reference adminapp ***!
  \******************************************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(0).__iris_require__('./node_modules/rxjs/_esm5/operators/index.js')

/***/ }),

/***/ 100017:
/*!********************************!*\
  !*** ./grid-extender/index.ts ***!
  \********************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ 100001);
var core_1 = __webpack_require__(/*! @angular/core */ 100002);
var image_component_1 = __webpack_require__(/*! ./image.component */ 100011);
var columns_provider_1 = __webpack_require__(/*! ./columns-provider */ 100019);
/**
 * The grid extender module.
 */
var GridExtenderModule = /** @class */ (function () {
    function GridExtenderModule() {
    }
    GridExtenderModule = tslib_1.__decorate([
        core_1.NgModule({
            declarations: [
                image_component_1.ImageComponent
            ],
            entryComponents: [
                // The component needs to be registered here as it is instantiated dynamically.
                image_component_1.ImageComponent
            ],
            providers: [
                columns_provider_1.COLUMNS_PROVIDER
            ]
        })
    ], GridExtenderModule);
    return GridExtenderModule;
}());
exports.GridExtenderModule = GridExtenderModule;


/***/ }),

/***/ 100018:
/*!********************************************!*\
  !*** ./grid-extender/image.component.html ***!
  \********************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = "<img [style.height.px]=\"imageHeight\" [src]='imageSource' />\r\n";

/***/ }),

/***/ 100019:
/*!*******************************************!*\
  !*** ./grid-extender/columns-provider.ts ***!
  \*******************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ 100001);
var rxjs_1 = __webpack_require__(/*! rxjs */ 100006);
var v1_1 = __webpack_require__(/*! progress-sitefinity-adminapp-sdk/app/api/v1 */ 100003);
var image_component_1 = __webpack_require__(/*! ./image.component */ 100011);
var core_1 = __webpack_require__(/*! @angular/core */ 100002);
/**
 * The index provider provides the custom columns back to the AdminApp.
 */
var DynamicItemIndexColumnsProvider = /** @class */ (function () {
    function DynamicItemIndexColumnsProvider() {
        this.columnName = "image3";
        this.columnTitle = "Image";
    }
    /**
     * This method gets invoked by the AdminApp when the columns from all of the providers are needed.
     * @param entityData Provides metadata for the current type.
     */
    DynamicItemIndexColumnsProvider.prototype.getColumns = function (entityData) {
        // return the column model
        var column = {
            name: this.columnName,
            title: this.columnTitle,
            // The componentData object holds the type of component to initialize
            // properties can be passed as well. They will be set on the component once it is initialized.
            componentData: {
                type: image_component_1.ImageComponent
            }
        };
        // return an observable here, because this might be a time consuming operation
        return rxjs_1.of([column]);
    };
    DynamicItemIndexColumnsProvider = tslib_1.__decorate([
        core_1.Injectable()
    ], DynamicItemIndexColumnsProvider);
    return DynamicItemIndexColumnsProvider;
}());
/**
 * Export a 'multi' class provider so that multiple instances of the same provider can coexist.
 * This allows for more than one provider to be registered within one or more bundles.
 */
exports.COLUMNS_PROVIDER = {
    useClass: DynamicItemIndexColumnsProvider,
    multi: true,
    provide: v1_1.COLUMNS_TOKEN
};


/***/ }),

/***/ 100020:
/*!********************************!*\
  !*** ./custom-fields/index.ts ***!
  \********************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ 100001);
var core_1 = __webpack_require__(/*! @angular/core */ 100002);
var forms_1 = __webpack_require__(/*! @angular/forms */ 100012);
var custom_field_readonly_component_1 = __webpack_require__(/*! ./custom-field-readonly.component */ 100013);
var custom_field_write_component_1 = __webpack_require__(/*! ./custom-field-write.component */ 100014);
var custom_fields_provider_1 = __webpack_require__(/*! ./custom-fields-provider */ 100025);
var v1_1 = __webpack_require__(/*! progress-sitefinity-adminapp-sdk/app/api/v1 */ 100003);
/**
 * The custom fields module.
 */
var CustomFieldsModule = /** @class */ (function () {
    function CustomFieldsModule() {
    }
    CustomFieldsModule = tslib_1.__decorate([
        core_1.NgModule({
            declarations: [
                custom_field_readonly_component_1.CustomInputReadonlyComponent,
                custom_field_write_component_1.CustomInputWriteComponent
            ],
            entryComponents: [
                // The components need to be registered here as they are instantiated dynamically.
                custom_field_readonly_component_1.CustomInputReadonlyComponent,
                custom_field_write_component_1.CustomInputWriteComponent
            ],
            providers: [
                custom_fields_provider_1.CUSTOM_FIELDS_PROVIDER
            ],
            // import the framework module as it holds the components that the AdminApp uses
            // for a list of components see
            imports: [forms_1.FormsModule, v1_1.FrameworkModule]
        })
    ], CustomFieldsModule);
    return CustomFieldsModule;
}());
exports.CustomFieldsModule = CustomFieldsModule;


/***/ }),

/***/ 100021:
/*!************************************************************!*\
  !*** ./custom-fields/custom-field-readonly.component.html ***!
  \************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = " <input class=\"custom-title-input\" [value]=\"value\" readonly />\r\n";

/***/ }),

/***/ 100022:
/*!*********************************************************!*\
  !*** ./custom-fields/custom-field-write.component.html ***!
  \*********************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = "<sf-input\r\n    [name]=\"settings.key\"\r\n    [look]=\"settings.look\"\r\n    [placeholder]=\"settings.placeholder\"\r\n    [recommendedCharacters]=\"settings.recommendedCharacters\"\r\n    #inputField\r\n    ngDefaultControl\r\n    [(ngModel)]=\"value\"\r\n    (onBlur)=\"onBlur()\"\r\n    (onFocus)=\"onFocus()\">\r\n</sf-input>\r\n";

/***/ }),

/***/ 100023:
/*!********************************************************!*\
  !*** ./custom-fields/custom-field-write.component.css ***!
  \********************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

// css-to-string-loader: transforms styles from css-loader to a string output

// Get the styles
var styles = __webpack_require__(/*! !../node_modules/css-loader!./custom-field-write.component.css */ 100024);

if (typeof styles === 'string') {
  // Return an existing string
  module.exports = styles;
} else {
  // Call the custom toString method from css-loader module
  module.exports = styles.toString();
}

/***/ }),

/***/ 100024:
/*!**********************************************************************************!*\
  !*** ./node_modules/css-loader!./custom-fields/custom-field-write.component.css ***!
  \**********************************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/lib/css-base.js */ 100005)(false);
// imports


// module
exports.push([module.i, ".custom-title-input {\r\n    border: 0;\r\n    border-bottom: 2px dashed #38ab63;\r\n    padding: .2em;\r\n    font-weight: 700;\r\n    font-size: 3em;\r\n    width: 100%;\r\n    color: #38ab63;\r\n}\r\n", ""]);

// exports


/***/ }),

/***/ 100025:
/*!*************************************************!*\
  !*** ./custom-fields/custom-fields-provider.ts ***!
  \*************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ 100001);
var core_1 = __webpack_require__(/*! @angular/core */ 100002);
var v1_1 = __webpack_require__(/*! progress-sitefinity-adminapp-sdk/app/api/v1 */ 100003);
var custom_field_readonly_component_1 = __webpack_require__(/*! ./custom-field-readonly.component */ 100013);
var custom_field_write_component_1 = __webpack_require__(/*! ./custom-field-write.component */ 100014);
var custom_field_settings_1 = __webpack_require__(/*! ./custom-field.settings */ 100026);
/**
 * The fields provider provides the overridden fields back to the AdminApp.
 */
var CustomFieldsProvider = /** @class */ (function () {
    function CustomFieldsProvider() {
        this.customFieldsMappings = [];
        this.registerCustomComponents();
    }
    /**
     * This method gets called before each field is instantiated, allowing custom fields to be plugged in for any type.
     * @param fieldRegistryKey The metadata needed to determine which field to display.
     */
    CustomFieldsProvider.prototype.overrideField = function (fieldRegistryKey) {
        var registration = this.findRegistration(fieldRegistryKey);
        return registration;
    };
    /**
     * This method finds an implementation of the field to be overridden.
     * @param fieldRegistryKey The metadata needed to determine which field to display.
     */
    CustomFieldsProvider.prototype.findRegistration = function (fieldRegistryKey) {
        for (var _i = 0, _a = this.customFieldsMappings; _i < _a.length; _i++) {
            var pair = _a[_i];
            if (fieldRegistryKey.fieldName === pair.key.fieldName &&
                fieldRegistryKey.fieldType === pair.key.fieldType &&
                fieldRegistryKey.typeName === pair.key.typeName) {
                return pair.registration;
            }
        }
        return null;
    };
    /**
     * Initializes the custom field(component) registrations.
     */
    CustomFieldsProvider.prototype.registerCustomComponents = function () {
        // The field name is the name which identifies the field uniquely.
        // The typename is the OData entity set name. It matches the url segment when navigating
        // to the list view of the specific type.
        var customInputKey = {
            fieldName: "Title",
            fieldType: "sf-short-text-default",
            typeName: "newsitems"
        };
        // The result field registration that will be returned to the AdminApp.
        var customInputRegistration = {
            writeComponent: custom_field_write_component_1.CustomInputWriteComponent,
            readComponent: custom_field_readonly_component_1.CustomInputReadonlyComponent,
            settingsType: custom_field_settings_1.CustomShortTextSettings
        };
        var customFieldRegistrationPair = {
            key: customInputKey,
            registration: customInputRegistration
        };
        this.customFieldsMappings.push(customFieldRegistrationPair);
    };
    CustomFieldsProvider = tslib_1.__decorate([
        core_1.Injectable(),
        tslib_1.__metadata("design:paramtypes", [])
    ], CustomFieldsProvider);
    return CustomFieldsProvider;
}());
exports.CustomFieldsProvider = CustomFieldsProvider;
/**
 * Export a 'multi' class provider so that multiple instances of the same provider can coexist.
 * This allows for more than one provider to be registered within one or more bundles.
 */
exports.CUSTOM_FIELDS_PROVIDER = {
    provide: v1_1.FIELDS_PROVIDER_TOKEN,
    useClass: CustomFieldsProvider,
    multi: true
};


/***/ }),

/***/ 100026:
/*!************************************************!*\
  !*** ./custom-fields/custom-field.settings.ts ***!
  \************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ 100001);
var v1_1 = __webpack_require__(/*! progress-sitefinity-adminapp-sdk/app/api/v1 */ 100003);
var forms_1 = __webpack_require__(/*! @angular/forms */ 100012);
/**
 * A settings object to configure the fields behavior. This object is assigned to the field via the settings property on the FieldBase class.
 * Examples of such are validations, the title to be shown and so on.
 */
var CustomShortTextSettings = /** @class */ (function (_super) {
    tslib_1.__extends(CustomShortTextSettings, _super);
    function CustomShortTextSettings() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CustomShortTextSettings.prototype.init = function (metadata) {
        _super.prototype.init.call(this, metadata);
        // set the recommended characters for this field to 20
        this.recommendedCharacters = 20;
    };
    CustomShortTextSettings.prototype.getValidators = function () {
        var baseValidators = _super.prototype.getValidators.call(this);
        // add an email pattern validator
        var emailPattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        var emailValidator = forms_1.Validators.pattern(emailPattern);
        baseValidators.push(emailValidator);
        return baseValidators;
    };
    return CustomShortTextSettings;
}(v1_1.SettingsBase));
exports.CustomShortTextSettings = CustomShortTextSettings;


/***/ }),

/***/ 100027:
/*!************************************!*\
  !*** ./commands-extender/index.ts ***!
  \************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ 100001);
var core_1 = __webpack_require__(/*! @angular/core */ 100002);
var router_1 = __webpack_require__(/*! @angular/router */ 100009);
var common_1 = __webpack_require__(/*! @angular/common */ 100010);
var http_1 = __webpack_require__(/*! @angular/common/http */ 100008);
var commands_provider_1 = __webpack_require__(/*! ./commands-provider */ 100028);
var print_preview_component_1 = __webpack_require__(/*! ./print-preview.component */ 100029);
var print_preview_command_1 = __webpack_require__(/*! ./print-preview.command */ 100015);
/**
 * The command extender module.
 */
var CommandsExtenderModule = /** @class */ (function () {
    function CommandsExtenderModule() {
    }
    CommandsExtenderModule = tslib_1.__decorate([
        core_1.NgModule({
            declarations: [
                print_preview_component_1.PrintPreviewComponent
            ],
            entryComponents: [
                print_preview_component_1.PrintPreviewComponent
            ],
            providers: [
                commands_provider_1.COMMANDS_PROVIDER,
                print_preview_command_1.PrintPreviewCommand
            ],
            imports: [
                router_1.RouterModule.forChild([{ path: "print-preview", component: print_preview_component_1.PrintPreviewComponent }]),
                common_1.CommonModule,
                http_1.HttpClientModule
            ]
        })
    ], CommandsExtenderModule);
    return CommandsExtenderModule;
}());
exports.CommandsExtenderModule = CommandsExtenderModule;


/***/ }),

/***/ 100028:
/*!************************************************!*\
  !*** ./commands-extender/commands-provider.ts ***!
  \************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ 100001);
var v1_1 = __webpack_require__(/*! progress-sitefinity-adminapp-sdk/app/api/v1 */ 100003);
var rxjs_1 = __webpack_require__(/*! rxjs */ 100006);
var core_1 = __webpack_require__(/*! @angular/core */ 100002);
var print_preview_command_1 = __webpack_require__(/*! ./print-preview.command */ 100015);
/**
 * The category name in which to place the custom commands.
 */
var CUSTOM_CATEGORY_NAME = "Custom";
/**
 * The command model containing the metadata of the command.
 * The ordinal indicates where to place the command in the dropdown.
 */
var CUSTOM_COMMAND_BASE = {
    name: "Custom",
    title: "Print preview",
    ordinal: -1,
    category: CUSTOM_CATEGORY_NAME
};
/**
 * The category model.
 */
var CUSTOM_CATEGORY = {
    name: CUSTOM_CATEGORY_NAME,
    title: "Custom commands"
};
/**
 * The command provider provides the necessary commands back to the AdminApp.
 */
var DynamicItemIndexCommandProvider = /** @class */ (function () {
    function DynamicItemIndexCommandProvider() {
    }
    /**
     * The method that gets invoked asking for the command models when the action menu is constructed.
     * @param data The data needed to determine the types of command to return
     * and where to place them - in the list or in edit mode
     */
    DynamicItemIndexCommandProvider.prototype.getCommands = function (data) {
        // the commands to be returned
        var commands = [];
        // we wish to inject this command only in the list view
        if (data.target === v1_1.CommandsTarget.List && data.dataItem) {
            var previewCommand = Object.assign({}, CUSTOM_COMMAND_BASE);
            // assign an injection token or just the class
            previewCommand.token = {
                type: print_preview_command_1.PrintPreviewCommand,
                // assign custom properties to be passed in the context
                properties: {
                    dataItem: data.dataItem
                }
            };
            commands.push(previewCommand);
        }
        // return an observable here, because generating the actions might be a time consuming operation
        return rxjs_1.of(commands);
    };
    /**
     * The method that gets invoked asking for the category models when the action menu is constructed.
     * Categories are used to group similar commands in the action menu
     * @param data The data needed to determine the types of command to return and where to place them - in the list or in edit mode
     */
    DynamicItemIndexCommandProvider.prototype.getCategories = function (data) {
        return rxjs_1.of([CUSTOM_CATEGORY]);
    };
    DynamicItemIndexCommandProvider = tslib_1.__decorate([
        core_1.Injectable()
    ], DynamicItemIndexCommandProvider);
    return DynamicItemIndexCommandProvider;
}());
/**
 * Export a 'multi' class provider so that multiple instances of the same provider can coexist.
 * This allows for more than one provider to be registered within one or more bundles.
 */
exports.COMMANDS_PROVIDER = {
    useClass: DynamicItemIndexCommandProvider,
    multi: true,
    provide: v1_1.COMMANDS_TOKEN
};


/***/ }),

/***/ 100029:
/*!******************************************************!*\
  !*** ./commands-extender/print-preview.component.ts ***!
  \******************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ 100001);
var core_1 = __webpack_require__(/*! @angular/core */ 100002);
var router_1 = __webpack_require__(/*! @angular/router */ 100009);
var http_1 = __webpack_require__(/*! @angular/common/http */ 100008);
var v1_1 = __webpack_require__(/*! progress-sitefinity-adminapp-sdk/app/api/v1 */ 100003);
var operators_1 = __webpack_require__(/*! rxjs/operators */ 100016);
/**
 * A component that loads the data item from the OData rest services and displays the title of the data item.
 */
var PrintPreviewComponent = /** @class */ (function () {
    /**
     * Initializes a new instance of the PrintPreviewComponent
     * @param http The http client service used for making http requests.
     * @param route The current navigated route.
     */
    function PrintPreviewComponent(http, route) {
        this.http = http;
        this.route = route;
    }
    /**
     * ngOnInit lifecycle hook. Attached here so we can fetch the data on initialization
     */
    PrintPreviewComponent.prototype.ngOnInit = function () {
        var _this = this;
        // get the route params that contain the metadata needed to load the data item
        var routeParams = this.route.snapshot.queryParams;
        // http prefix is dynamically replaced with the actual url of sitefinity
        var url = v1_1.HTTP_PREFIX + "/sf/system/" + routeParams.entitySet + "(" + routeParams.id + ")" + (routeParams.provider ? "?sf_provider=" + routeParams.provider : "");
        // delay so there is always a minimum loading time
        this.http.get(url).pipe(operators_1.delay(500)).subscribe(function (dataItem) {
            _this.dataItem = dataItem;
        });
    };
    PrintPreviewComponent = tslib_1.__decorate([
        core_1.Component({
            template: __webpack_require__(/*! ./print-preview.component.html */ 100030)
        }),
        tslib_1.__metadata("design:paramtypes", [http_1.HttpClient,
            router_1.ActivatedRoute])
    ], PrintPreviewComponent);
    return PrintPreviewComponent;
}());
exports.PrintPreviewComponent = PrintPreviewComponent;


/***/ }),

/***/ 100030:
/*!********************************************************!*\
  !*** ./commands-extender/print-preview.component.html ***!
  \********************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = "<div style=\"position: fixed;top: 50%;left: 50%;\">\r\n    <h1 *ngIf=\"dataItem\">{{dataItem.Title}}</h1>\r\n    <h1 *ngIf=\"!dataItem\">Loading..</h1>\r\n</div>\r\n";

/***/ }),

/***/ 100031:
/*!**********************************!*\
  !*** ./editor-extender/index.ts ***!
  \**********************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ 100001);
var core_1 = __webpack_require__(/*! @angular/core */ 100002);
var common_1 = __webpack_require__(/*! @angular/common */ 100010);
var word_count_provider_1 = __webpack_require__(/*! ./word-count/word-count-provider */ 100032);
var sitefinity_videos_toolbar_item_provider_1 = __webpack_require__(/*! ./sitefinity-videos/sitefinity-videos-toolbar-item-provider */ 100036);
var switch_text_direction_provider_1 = __webpack_require__(/*! ./switch-text-direction/switch-text-direction.provider */ 100039);
var insert_symbol_provider_1 = __webpack_require__(/*! ./insert-symbol/insert-symbol.provider */ 100042);
var edit_menu_spell_check_provider_1 = __webpack_require__(/*! ./spell-check/edit-menu-spell-check-provider */ 100048);
var editor_spell_check_provider_1 = __webpack_require__(/*! ./spell-check/editor-spell-check-provider */ 100049);
/**
 * The toolbar extender module.
 */
var EditorExtenderModule = /** @class */ (function () {
    function EditorExtenderModule() {
    }
    EditorExtenderModule = tslib_1.__decorate([
        core_1.NgModule({
            providers: [
                word_count_provider_1.WORD_COUNT_PROVIDER,
                sitefinity_videos_toolbar_item_provider_1.VIDEO_TOOLBAR_ITEM_PROVIDER,
                switch_text_direction_provider_1.SWITCH_TEXT_DIRECTION_PROVIDER,
                insert_symbol_provider_1.INSERT_SYMBOL_PROVIDER,
                editor_spell_check_provider_1.EDITOR_SPELL_CHECK_PROVIDER,
                edit_menu_spell_check_provider_1.EDIT_MENU_SPELL_CHECK_PROVIDER
            ],
            imports: [
                common_1.CommonModule
            ]
        })
    ], EditorExtenderModule);
    return EditorExtenderModule;
}());
exports.EditorExtenderModule = EditorExtenderModule;


/***/ }),

/***/ 100032:
/*!***********************************************************!*\
  !*** ./editor-extender/word-count/word-count-provider.ts ***!
  \***********************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ 100001);
var core_1 = __webpack_require__(/*! @angular/core */ 100002);
var v1_1 = __webpack_require__(/*! progress-sitefinity-adminapp-sdk/app/api/v1 */ 100003);
// This is webpack specific loader syntax for injecting css as <style> tag in header
__webpack_require__(/*! style-loader!css-loader!./editor-config-provider.css */ 100033);
/**
 * A custom toolbar provider implementation for counting the words in the html editor.
 * Kendo UI Editor custom tools documentation -> https://demos.telerik.com/kendo-ui/editor/custom-tools
 */
var WordCountProvider = /** @class */ (function () {
    function WordCountProvider() {
    }
    /**
     * The method that gets invoked when the editor constructs the toolbar actions.
     * @param editorHost The instance of the editor.
     */
    WordCountProvider.prototype.getToolBarItems = function (editorHost) {
        var _this = this;
        var wordsCount = function () {
            var editor = editorHost.getKendoEditor();
            var editorValue = _this.stripHTML(editor.value());
            var count = editorValue ? editorValue.split(" ").length : 0;
            alert("Words count: " + count);
        };
        /**
         * A custom toolbar item
         */
        var CUSTOM_TOOLBAR_ITEM = {
            name: "Words-count",
            tooltip: "Words count",
            ordinal: 5,
            exec: wordsCount
        };
        return [CUSTOM_TOOLBAR_ITEM];
    };
    WordCountProvider.prototype.getToolBarItemsNamesToRemove = function () {
        /**
         * If you want to remove some toolbar items return their names as strings in the array. Order is insignificant.
         * Otherwise return an empty array.
         * Example: return [ "embed" ];
         * The above code will remove the embed toolbar item from the editor.
         * Documentation where you can find all tools' names: https://docs.telerik.com/kendo-ui/api/javascript/ui/editor/configuration/tools
         */
        return [];
    };
    /**
     * This gives access to the Kendo UI Editor configuration object
     * that is used to initialize the editor upon creation
     * Kendo UI Editor configuration overview documentation -> https://docs.telerik.com/kendo-ui/controls/editors/editor/overview#configuration
     */
    WordCountProvider.prototype.configureEditor = function (configuration) {
        configuration.pasteCleanup.span = false;
        return configuration;
    };
    WordCountProvider.prototype.stripHTML = function (html) {
        var tmp = document.createElement("DIV");
        tmp.innerHTML = html;
        return tmp.textContent || tmp.innerText || "";
    };
    WordCountProvider = tslib_1.__decorate([
        core_1.Injectable()
    ], WordCountProvider);
    return WordCountProvider;
}());
/**
 * Export a 'multi' class provider so that multiple instances of the same provider can coexist.
 * This allows for more than one provider to be registered within one or more bundles.
 */
exports.WORD_COUNT_PROVIDER = {
    multi: true,
    provide: v1_1.EDITOR_CONFIG_TOKEN,
    useClass: WordCountProvider
};


/***/ }),

/***/ 100033:
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./editor-extender/word-count/editor-config-provider.css ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader!./editor-config-provider.css */ 100034);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ 100007)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {
	module.hot.accept("!!../../node_modules/css-loader/index.js!./editor-config-provider.css", function() {
		var newContent = require("!!../../node_modules/css-loader/index.js!./editor-config-provider.css");

		if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 100034:
/*!*****************************************************************************************!*\
  !*** ./node_modules/css-loader!./editor-extender/word-count/editor-config-provider.css ***!
  \*****************************************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/lib/css-base.js */ 100005)(false);
// imports


// module
exports.push([module.i, ".k-editor-toolbar .k-i-Words-count::before {\r\n    /* Kendo UI Icons: https://docs.telerik.com/kendo-ui/styles-and-layout/icons-web */\r\n    content: \"\\E696\";\r\n}\r\n", ""]);

// exports


/***/ }),

/***/ 100035:
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ 100036:
/*!**************************************************************************************!*\
  !*** ./editor-extender/sitefinity-videos/sitefinity-videos-toolbar-item-provider.ts ***!
  \**************************************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ 100001);
var core_1 = __webpack_require__(/*! @angular/core */ 100002);
var v1_1 = __webpack_require__(/*! progress-sitefinity-adminapp-sdk/app/api/v1 */ 100003);
// This is webpack specific loader syntax for injecting css as <style> tag in header
__webpack_require__(/*! style-loader!css-loader!./sitefinity-videos-toolbar-item-provider.css */ 100037);
var TRAILING_BREAK = "<br class='k-br'>";
exports.ensureTrailingBreaks = function (html) {
    return "" + TRAILING_BREAK + html + TRAILING_BREAK;
};
/**
 * A custom toolbar provider implementation for inserting existing videos in the editor.
 * Kendo UI Editor custom tools documentation -> https://demos.telerik.com/kendo-ui/editor/custom-tools
 */
var VideosToolbarItemProvider = /** @class */ (function () {
    function VideosToolbarItemProvider(selectorService) {
        this.selectorService = selectorService;
    }
    VideosToolbarItemProvider.prototype.getToolBarItems = function (editorHost) {
        var _this = this;
        var CUSTOM_TOOLBAR_ITEM = {
            name: "Sitefinity-videos",
            tooltip: "Sitefinity videos",
            ordinal: 6,
            exec: function () {
                var editor = editorHost.getKendoEditor();
                // Save editor's current range, so we can insert
                // later the HTML at this position.
                var currentRange = editor.getRange();
                var selectorOptions = {
                    multiple: true
                };
                // open the selector and subscribe to the result
                _this.selectorService.openVideoLibrarySelector(selectorOptions).subscribe(function (videos) {
                    if (videos.length) {
                        // Restore editor's saved position.
                        editor.selectRange(currentRange);
                        videos.forEach(function (video) {
                            var videoElement = document.createElement("video");
                            // Disable video playing, but show controls,
                            // so the video can be playable on the frontend.
                            videoElement.contentEditable = "false";
                            videoElement.src = video.url;
                            videoElement.setAttribute("controls", "true");
                            // Insert the HTML and trigger editor's change, so the
                            // HTML can be saved.
                            editor.paste(exports.ensureTrailingBreaks(videoElement.outerHTML));
                            editor.trigger("change");
                        });
                    }
                });
            }
        };
        return [CUSTOM_TOOLBAR_ITEM];
    };
    VideosToolbarItemProvider.prototype.getToolBarItemsNamesToRemove = function () {
        // If you want to remove some toolbar items return their names as strings in the array. Order is insignificant.
        // Otherwise return an empty array.
        // Example: return [ "embed" ];
        // The above code will remove the embed toolbar item from the editor.
        return [];
    };
    VideosToolbarItemProvider = tslib_1.__decorate([
        core_1.Injectable(),
        tslib_1.__param(0, core_1.Inject(v1_1.SELECTOR_SERVICE)),
        tslib_1.__metadata("design:paramtypes", [Object])
    ], VideosToolbarItemProvider);
    return VideosToolbarItemProvider;
}());
/**
 * Export a 'multi' class provider so that multiple instances of the same provider can coexist.
 * This allows for more than one provider to be registered within one or more bundles.
 */
exports.VIDEO_TOOLBAR_ITEM_PROVIDER = {
    multi: true,
    provide: v1_1.TOOLBARITEMS_TOKEN,
    useClass: VideosToolbarItemProvider
};


/***/ }),

/***/ 100037:
/*!*********************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./editor-extender/sitefinity-videos/sitefinity-videos-toolbar-item-provider.css ***!
  \*********************************************************************************************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader!./sitefinity-videos-toolbar-item-provider.css */ 100038);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ 100007)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {
	module.hot.accept("!!../../node_modules/css-loader/index.js!./sitefinity-videos-toolbar-item-provider.css", function() {
		var newContent = require("!!../../node_modules/css-loader/index.js!./sitefinity-videos-toolbar-item-provider.css");

		if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 100038:
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./editor-extender/sitefinity-videos/sitefinity-videos-toolbar-item-provider.css ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/lib/css-base.js */ 100005)(false);
// imports


// module
exports.push([module.i, ".k-editor-toolbar .k-i-Sitefinity-videos::before {\r\n    /* Kendo UI Icons: https://docs.telerik.com/kendo-ui/styles-and-layout/icons-web */\r\n    content: \"\\E659\";\r\n}\r\n", ""]);

// exports


/***/ }),

/***/ 100039:
/*!*********************************************************************************!*\
  !*** ./editor-extender/switch-text-direction/switch-text-direction.provider.ts ***!
  \*********************************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ 100001);
var core_1 = __webpack_require__(/*! @angular/core */ 100002);
var v1_1 = __webpack_require__(/*! progress-sitefinity-adminapp-sdk/app/api/v1 */ 100003);
var rxjs_1 = __webpack_require__(/*! rxjs */ 100006);
var operators_1 = __webpack_require__(/*! rxjs/operators */ 100016);
// These classes are defined in the application's styles.
var RTL_CLASS = "-sf-direction-rtl";
var LTR_CLASS = "-sf-direction-ltr";
var SELECTED_CLASS = "k-state-selected";
var LTR_BUTTON_SELECTOR = ".k-i-Left-to-right";
var RTL_BUTTON_SELECTOR = ".k-i-Right-to-left";
var KENDO_EDITOR_CLASS = "k-editor";
var SF_EDITOR_TAG_NAME = "sf-editor";
var EDIT_MENU_SELECTOR = "sf-edit-menu";
var TOOLBAR_BUTTONS_DATA = {
    LTR: {
        name: "Left-to-right",
        tooltip: "Left-to-right"
    },
    RTL: {
        name: "Right-to-left",
        tooltip: "Right-to-left"
    }
};
var arrowKeycodes = new Set([37, 38, 39, 40]);
var SelectionDirection;
(function (SelectionDirection) {
    SelectionDirection[SelectionDirection["topToBottom"] = 0] = "topToBottom";
    SelectionDirection[SelectionDirection["bottomToTop"] = 1] = "bottomToTop";
})(SelectionDirection || (SelectionDirection = {}));
__webpack_require__(/*! style-loader!css-loader!./switch-text-direction.provider.css */ 100040);
var SwitchTextDirectionProvider = /** @class */ (function () {
    function SwitchTextDirectionProvider() {
    }
    /**
     * The method that gets invoked when the editor constructs the toolbar actions.
     *
     * @param {*} editorHost The Kendo's editor object.
     * @returns {ToolBarItem[]} The custom toolbar items that will be added to the Kendo's toolbar.
     * @memberof SwitchTextDirectionProvider
     */
    SwitchTextDirectionProvider.prototype.getToolBarItems = function (editorHost) {
        var _this = this;
        this.handleCursorMove(editorHost);
        var SWITCH_LEFT_TO_RIGHT_TOOL = {
            name: TOOLBAR_BUTTONS_DATA.LTR.name,
            tooltip: TOOLBAR_BUTTONS_DATA.LTR.tooltip,
            ordinal: 6,
            exec: function () {
                var ltrButtonParent = jQuery(LTR_BUTTON_SELECTOR).parent()[0];
                _this.handleExec(ltrButtonParent, editorHost, LTR_CLASS, function () { return _this.handleButtonStylesOnLTRButtonClicked(editorHost); });
            }
        };
        var SWITCH_RIGHT_TO_LEFT_TOOL = {
            name: TOOLBAR_BUTTONS_DATA.RTL.name,
            tooltip: TOOLBAR_BUTTONS_DATA.RTL.tooltip,
            ordinal: 7,
            exec: function () {
                var rtlButtonParent = jQuery(RTL_BUTTON_SELECTOR).parent()[0];
                _this.handleExec(rtlButtonParent, editorHost, RTL_CLASS, function () { return _this.handleButtonStylesOnRTLButtonClicked(editorHost); });
            }
        };
        // Should group the direction buttons once the editor is loaded and focused.
        rxjs_1.fromEvent(editorHost.context, "focusin")
            .pipe(operators_1.first())
            .subscribe(function () {
            var toolbar = editorHost.getKendoEditor().toolbar.element;
            v1_1.groupToolbarButtons(toolbar, RTL_BUTTON_SELECTOR, LTR_BUTTON_SELECTOR, false);
        });
        return [SWITCH_LEFT_TO_RIGHT_TOOL, SWITCH_RIGHT_TO_LEFT_TOOL];
    };
    /**
     * If you want to remove some toolbar items return their names as strings in the array. Order is insignificant.
     * Otherwise return an empty array.
     * Example: return [ "embed" ];
     * The above code will remove the embed toolbar item from the editor.
     *
     * @returns {string[]}
     * @memberof SwitchTextDirectionProvider
     */
    SwitchTextDirectionProvider.prototype.getToolBarItemsNamesToRemove = function () {
        return [];
    };
    /**
     * This gives access to the Kendo UI Editor configuration object
     * that is used to initialize the editor upon creation
     * Kendo UI Editor configuration overview documentation -> https://docs.telerik.com/kendo-ui/controls/editors/editor/overview#configuration
     *
     * @param {*} configuration
     * @returns The modified configuration.
     * @memberof SwitchTextDirectionProvider
     */
    SwitchTextDirectionProvider.prototype.configureEditor = function (configuration) {
        return configuration;
    };
    /**
     * Finds the parent element of the one that is the caret on.
     *
     * @private
     * @param {*} editorHost The Kendo's editor object.
     * @returns {HTMLElement}
     * @memberof SwitchTextDirectionProvider
     */
    SwitchTextDirectionProvider.prototype.findParent = function (editorHost) {
        var editor = editorHost.getKendoEditor();
        var currentNode = editor.getRange().startContainer;
        if (currentNode.nodeName === "#text") {
            currentNode = currentNode.parentElement;
        }
        // When the editor returns itself as current element, we should find the first child
        // where the actual content is. The hierarchy is sf-editor -> div.k-editor -> actual content
        if (currentNode.tagName && currentNode.tagName.toLocaleLowerCase() === SF_EDITOR_TAG_NAME) {
            return currentNode.firstElementChild.firstElementChild;
        }
        while (this.isInlineElement(currentNode)) {
            currentNode = currentNode.parentElement;
        }
        // When the editor returns div.k-editor that means there isn't any formatting,
        // so we have to wrap the raw content in some element because otherwise we add
        // the class globally for the whole editor.
        if (currentNode.classList.contains(KENDO_EDITOR_CLASS)) {
            var wrapper = document.createElement("p");
            wrapper.innerHTML = currentNode.innerHTML;
            currentNode.innerHTML = "";
            currentNode.appendChild(wrapper);
            currentNode = wrapper;
        }
        return currentNode;
    };
    /**
     * Make the LTR button selected, and the RTL button unselected.
     *
     * @private
     * @param {*} editorHost The Kendo's editor object.
     * @memberof SwitchTextDirectionProvider
     */
    SwitchTextDirectionProvider.prototype.handleButtonStylesOnLTRButtonClicked = function (editorHost) {
        this.getToolbarButton(editorHost, LTR_BUTTON_SELECTOR).classList.add(SELECTED_CLASS);
        this.getToolbarButton(editorHost, RTL_BUTTON_SELECTOR).classList.remove(SELECTED_CLASS);
    };
    /**
     * Make the RTL button selected, and the LTR button unselected.
     *
     * @private
     * @param {*} editorHost The Kendo's editor object.
     * @memberof SwitchTextDirectionProvider
     */
    SwitchTextDirectionProvider.prototype.handleButtonStylesOnRTLButtonClicked = function (editorHost) {
        this.getToolbarButton(editorHost, RTL_BUTTON_SELECTOR).classList.add(SELECTED_CLASS);
        this.getToolbarButton(editorHost, LTR_BUTTON_SELECTOR).classList.remove(SELECTED_CLASS);
    };
    /**
     * Determines if the passed element has display: inline.
     *
     * @private
     * @param {HTMLElement} element The element which will be checked.
     * @returns True if the element is inline, otherwise false.
     * @memberof SwitchTextDirectionProvider
     */
    SwitchTextDirectionProvider.prototype.isInlineElement = function (element) {
        var style = getComputedStyle(element, "");
        return style.display === "inline";
    };
    /**
     * Retrieves toolbar button by given class.
     *
     * @private
     * @param {*} editorHost The Kendo's editor object.
     * @param {string} selector The selector for which the button will be queried.
     * @returns {HTMLElement}
     * @memberof SwitchTextDirectionProvider
     */
    SwitchTextDirectionProvider.prototype.getToolbarButton = function (editorHost, selector) {
        return editorHost
            .getKendoEditor()
            .toolbar
            .element[0]
            .querySelector(selector)
            .parentElement;
    };
    /**
     * When the caret's position is changed by clicking in the editor or
     * by navigating with the arrows, the toolbar's buttons should have
     * the correct selected state, depending on the direction of the element
     * on which the caret is.
     *
     * @private
     * @param {*} editorHost The Kendo's editor object.
     * @memberof SwitchTextDirectionProvider
     */
    SwitchTextDirectionProvider.prototype.handleCursorMove = function (editorHost) {
        var _this = this;
        var editorElement = editorHost.context;
        var toggleToolbarButtonsSelectedClasses = function () {
            var parent = _this.findParent(editorHost);
            if (!parent) {
                return;
            }
            // When the parent doesn't have classes, this means it is just a kendo wrapper.
            if (!parent.classList.length) {
                parent = parent.parentElement;
            }
            if (parent.classList.contains(LTR_CLASS)) {
                _this.handleButtonStylesOnLTRButtonClicked(editorHost);
            }
            else if (parent.classList.contains(RTL_CLASS) && !parent.classList.contains(KENDO_EDITOR_CLASS)) {
                _this.handleButtonStylesOnRTLButtonClicked(editorHost);
            }
            else {
                _this.turnOffSelectedButtons(editorHost);
            }
        };
        editorElement.addEventListener("click", function () { return toggleToolbarButtonsSelectedClasses(); });
        editorElement.addEventListener("keydown", function (ev) {
            if (arrowKeycodes.has(ev.keyCode)) {
                toggleToolbarButtonsSelectedClasses();
            }
            else if (!editorElement.textContent) {
                _this.turnOffSelectedButtons(editorHost);
            }
        });
    };
    /**
     * When there is selection, all the selected nodes should have the specified
     * direction.
     *
     * @private
     * @param {*} editorHost The Kendo's editor object.
     * @param {string} classToAdd The class that should be added on each of the nodes that are in the selection.
     * @param {Function} doneCb Function that is called when the processing of the selection is done. It's called only when there is particular selection.
     * @returns {boolean}
     * @memberof SwitchTextDirectionProvider
     */
    SwitchTextDirectionProvider.prototype.tryHandleSelection = function (toolbarButton, editorHost, classToAdd, doneCb) {
        var selection = editorHost.getKendoEditor().getSelection();
        var selectionDirection = this.getSelectionDirection(selection);
        var baseNode = selection.baseNode || selection.anchorNode;
        if (!selection.isCollapsed && selection.focusNode !== baseNode) {
            var node = selection.focusNode;
            while (selection.containsNode(node)) {
                if (toolbarButton.classList.contains(SELECTED_CLASS)) {
                    this.removeDirection(toolbarButton, node.parentElement, classToAdd);
                }
                else {
                    this.setDirection(node.parentElement, classToAdd);
                }
                if (selectionDirection === SelectionDirection.topToBottom) {
                    if (!node.parentElement.previousElementSibling || !node.parentElement.previousElementSibling.firstChild) {
                        break;
                    }
                    node = node.parentElement.previousElementSibling.firstChild;
                }
                else {
                    if (!node.parentElement.nextElementSibling || !node.parentElement.nextElementSibling.firstChild) {
                        break;
                    }
                    node = node.parentElement.nextElementSibling.firstChild;
                }
            }
            doneCb();
            return true;
        }
        return false;
    };
    /**
     * Determines when the selections starts from top to bottom
     * or from bottom to top.
     *
     * @private
     * @param {*} selection Current selection.
     * @returns {SelectionDirection} Selection's direction.
     * @memberof SwitchTextDirectionProvider
     */
    SwitchTextDirectionProvider.prototype.getSelectionDirection = function (selection) {
        var focusNode = selection.focusNode;
        // Workaround for firefox. The selection API does not provide baseNode. The alternative is anchorNode.
        var baseNode = selection.baseNode || selection.anchorNode;
        var positionA = focusNode.compareDocumentPosition(baseNode);
        var positionB = baseNode.compareDocumentPosition(focusNode);
        var isBefore = positionB > positionA;
        if (isBefore) {
            return SelectionDirection.topToBottom;
        }
        return SelectionDirection.bottomToTop;
    };
    /**
     * Handles toolbar button click.
     *
     * @private
     * @param {*} toolbarButton kendo toolbar button for rtl or ltr direction.
     * @param {*} editorHost The Kendo's editor object.
     * @param {string} dirClassToAdd Text direction class that will be added to the current element or the elements in the selection.
     * @param {Function} applyButtonStyles Function that applies styles to the toolbar buttons.
     * @memberof SwitchTextDirectionProvider
     */
    SwitchTextDirectionProvider.prototype.handleExec = function (toolbarButton, editorHost, dirClassToAdd, applyButtonStyles) {
        jQuery(EDIT_MENU_SELECTOR).hide();
        if (!this.tryHandleSelection(toolbarButton, editorHost, dirClassToAdd, function () { return applyButtonStyles(); })) {
            var elementContainer = this.findParent(editorHost);
            if (toolbarButton.classList.contains(SELECTED_CLASS)) {
                this.removeDirection(toolbarButton, elementContainer, dirClassToAdd);
            }
            else {
                this.setDirection(elementContainer, dirClassToAdd);
                applyButtonStyles();
            }
        }
    };
    /**
     * Returns toolbar buttons to their normal state.
     *
     * @private
     * @param {*} editorHost The Kendo's editor object.
     * @memberof SwitchTextDirectionProvider
     */
    SwitchTextDirectionProvider.prototype.turnOffSelectedButtons = function (editorHost) {
        this.getToolbarButton(editorHost, LTR_BUTTON_SELECTOR).classList.remove(SELECTED_CLASS);
        this.getToolbarButton(editorHost, RTL_BUTTON_SELECTOR).classList.remove(SELECTED_CLASS);
    };
    /**
     * Checks desired text direction and sets required styles.
     *
     * @private
     * @param {*} elementToStyle the element that has to be styled.
     * @param {*} classToAdd RTL or LTR class to be added to the element.
     * @memberof SwitchTextDirectionProvider
     */
    SwitchTextDirectionProvider.prototype.setDirection = function (elementToStyle, classToAdd) {
        if (classToAdd === RTL_CLASS) {
            this.setDirectionStyles(elementToStyle, LTR_CLASS, "rtl", "right", RTL_CLASS);
        }
        else {
            this.setDirectionStyles(elementToStyle, RTL_CLASS, "ltr", "left", LTR_CLASS);
        }
    };
    /**
     * Removes text direction styles.
     *
     * @private
     * @param {*} toolbarButton kendo toolbar button for rtl or ltr direction.
     * @param {*} elementToStyle the element that has to be styled.
     * @param {*} classToRemove RTL or LTR class to be removed to the element.
     * @memberof SwitchTextDirectionProvider
     */
    SwitchTextDirectionProvider.prototype.removeDirection = function (toolbarButton, elementToStyle, classToRemove) {
        this.setDirectionStyles(elementToStyle, classToRemove, null, null);
        toolbarButton.classList.remove(SELECTED_CLASS);
    };
    /**
     * Sets required styles for text direction.
     *
     * @private
     * @param {*} elementToStyle the element that has to be styled.
     * @param {*} classToAdd RTL or LTR class to be added to the element.
     * @param {*} classToRemove RTL or LTR class to be removed from the element.
     * @param {*} directionStyle rtl or ltr css direction property value to be set to the element.
     * @param {*} alignmentStyle right or left css text-align property value to be set to the element.
     * @memberof SwitchTextDirectionProvider
     */
    SwitchTextDirectionProvider.prototype.setDirectionStyles = function (elementToStyle, classToRemove, directionStyle, alignmentStyle, classToAdd) {
        elementToStyle.classList.remove(classToRemove);
        if (classToAdd) {
            elementToStyle.classList.add(classToAdd);
        }
        elementToStyle.style.direction = directionStyle;
        elementToStyle.style.textAlign = alignmentStyle;
    };
    SwitchTextDirectionProvider = tslib_1.__decorate([
        core_1.Injectable()
    ], SwitchTextDirectionProvider);
    return SwitchTextDirectionProvider;
}());
exports.SWITCH_TEXT_DIRECTION_PROVIDER = {
    multi: true,
    provide: v1_1.TOOLBARITEMS_TOKEN,
    useClass: SwitchTextDirectionProvider
};


/***/ }),

/***/ 100040:
/*!****************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./editor-extender/switch-text-direction/switch-text-direction.provider.css ***!
  \****************************************************************************************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader!./switch-text-direction.provider.css */ 100041);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ 100007)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {
	module.hot.accept("!!../../node_modules/css-loader/index.js!./switch-text-direction.provider.css", function() {
		var newContent = require("!!../../node_modules/css-loader/index.js!./switch-text-direction.provider.css");

		if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 100041:
/*!************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./editor-extender/switch-text-direction/switch-text-direction.provider.css ***!
  \************************************************************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/lib/css-base.js */ 100005)(false);
// imports


// module
exports.push([module.i, ".k-icon.k-i-Left-to-right,\r\n.k-icon.k-i-Right-to-left {\r\n    font-family: FontAwesome;\r\n    font-size: 16px !important;\r\n    width: auto !important;\r\n}\r\n\r\n.k-i-Right-to-left::after {\r\n    content: \"\\F0D9\";\r\n}\r\n\r\n.k-i-Right-to-left::before {\r\n    content: \"\\F1DD\";\r\n}\r\n\r\n.k-i-Left-to-right::after {\r\n    content: \"\\F1DD\";\r\n}\r\n\r\n.k-i-Left-to-right::before {\r\n    content: \"\\F0DA\";\r\n}\r\n\r\n.k-tool-icon.k-i-Left-to-right::before,\r\n.k-tool-icon.k-i-Right-to-left::before {\r\n    padding-right: 0;\r\n}\r\n\r\n.k-tool-icon.k-i-Left-to-right::after,\r\n.k-tool-icon.k-i-Right-to-left::after {\r\n    padding: 5px 5px 5px 0;\r\n}\r\n\r\n.k-tool-icon.k-i-Right-to-left::before {\r\n    margin-right: 0 !important;\r\n}\r\n\r\n.k-tool-icon.k-i-Right-to-left::after {\r\n    margin-right: 15px;\r\n}\r\n\r\n.k-state-selected .k-icon::after {\r\n    background-color: #e4e4e4;\r\n    border-radius: 0;\r\n}\r\n", ""]);

// exports


/***/ }),

/***/ 100042:
/*!*****************************************************************!*\
  !*** ./editor-extender/insert-symbol/insert-symbol.provider.ts ***!
  \*****************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ 100001);
var core_1 = __webpack_require__(/*! @angular/core */ 100002);
var v1_1 = __webpack_require__(/*! progress-sitefinity-adminapp-sdk/app/api/v1 */ 100003);
var insert_symbol_generator_1 = __webpack_require__(/*! ./symbol-list/insert-symbol-generator */ 100043);
var tool_builder_1 = __webpack_require__(/*! ../../helpers/tool-builder */ 100044);
var TOOLBAR_BUTTON_DATA = {
    DEFAULT: {
        name: "insertsymbol",
        tooltip: "Insert symbol"
    }
};
__webpack_require__(/*! style-loader!css-loader!./insert-symbol.provider.css */ 100045);
var InsertSymbolProvider = /** @class */ (function () {
    function InsertSymbolProvider() {
    }
    /**
     * If you want to remove some toolbar items return their names as strings in the array. Order is insignificant.
     * Otherwise return an empty array.
     * Example: return [ "embed" ];
     * The above code will remove the embed toolbar item from the editor.
     * Documentation where you can find all tools' names: https://docs.telerik.com/kendo-ui/api/javascript/ui/editor/configuration/tools
     *
     * @returns {string[]}
     * @memberof InsertSymbolProvider
     */
    InsertSymbolProvider.prototype.getToolBarItemsNamesToRemove = function () {
        return [];
    };
    /**
     * This gives access to the Kendo UI Editor configuration object
     * that is used to initialize the editor upon creation
     * Kendo UI Editor configuration overview documentation -> https://docs.telerik.com/kendo-ui/controls/editors/editor/overview#configuration
     *
     * @param {*} configuration
     * @returns The modified configuration.
     * @memberof InsertSymbolProvider
     */
    InsertSymbolProvider.prototype.configureEditor = function (configuration) {
        return configuration;
    };
    /**
     * The method that gets invoked when the editor constructs the toolbar actions.
     *
     * @param {*} editorHost The Kendo's editor object.
     * @returns {ToolBarItem[]} The custom toolbar items that will be added to the Kendo's toolbar.
     * @memberof InsertSymbolProvider
     */
    InsertSymbolProvider.prototype.getToolBarItems = function (editorHost) {
        /**
         * The custom tool.
         */
        var DEFAULT_TOOL = {
            name: TOOLBAR_BUTTON_DATA.DEFAULT.name,
            tooltip: TOOLBAR_BUTTON_DATA.DEFAULT.tooltip,
            ordinal: 30,
            exec: function () { return; }
        };
        this.configureInsertSymbolTool();
        return [DEFAULT_TOOL];
    };
    InsertSymbolProvider.prototype.configureInsertSymbolTool = function () {
        var buttonTemplate = kendo.ui.editor.EditorUtils.buttonTemplate;
        var NS = "kendoEditor";
        var popupTemplateGenerator = function () {
            var symbolList = __webpack_require__(/*! ./symbol-list/symbol-list.json */ 100047);
            var symbolGenerator = new insert_symbol_generator_1.InsertSymbolGenerator(symbolList);
            var generatedHtml = symbolGenerator.generateHtml();
            return "<div class='k-ct-popup symbol-popup'><div class='k-status symbol-title'>INSERT SPECIAL CHARACTERS</div>" + generatedHtml + "</div>";
        };
        var config = {
            _activate: function () {
                var that = this;
                var element = that.popup().element;
                element.autoApplyNS(NS).on("down", function (e) {
                    e.preventDefault();
                    var symbolCell = e.target;
                    var symbolValue = symbolCell.getAttribute(insert_symbol_generator_1.DATA_ATTRIBUTE_NAME);
                    that._exec(symbolValue);
                });
            },
            _exec: function (sym) {
                // adds the chosen symbol to the editor
                this._editor.paste(sym);
                this._editor.trigger("change");
                this.popup().close();
            },
            _close: function () {
                this.popup().element.off("." + NS);
            }
        };
        var insertSymbolTool = tool_builder_1.ToolBuilder.createPopupTool(kendo, TOOLBAR_BUTTON_DATA.DEFAULT.name, config, null, popupTemplateGenerator);
        tool_builder_1.ToolBuilder.registerTool(kendo, insertSymbolTool, TOOLBAR_BUTTON_DATA.DEFAULT.name, buttonTemplate, true);
    };
    InsertSymbolProvider = tslib_1.__decorate([
        core_1.Injectable()
    ], InsertSymbolProvider);
    return InsertSymbolProvider;
}());
exports.INSERT_SYMBOL_PROVIDER = {
    multi: true,
    provide: v1_1.EDITOR_CONFIG_TOKEN,
    useClass: InsertSymbolProvider
};


/***/ }),

/***/ 100043:
/*!******************************************************************************!*\
  !*** ./editor-extender/insert-symbol/symbol-list/insert-symbol-generator.ts ***!
  \******************************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.DATA_ATTRIBUTE_NAME = "data-value";
/**
 * Represents a helper class for importing a symbol list JSON and  generating html to populate the tool's popup.
 */
var InsertSymbolGenerator = /** @class */ (function () {
    function InsertSymbolGenerator(symbolList) {
        this.symbolConfig = symbolList;
    }
    /**
     * Generates html from a JSON list of symbol models.
     */
    InsertSymbolGenerator.prototype.generateHtml = function () {
        var _this = this;
        var html = "";
        this.symbolConfig.forEach(function (symbol) {
            html = html + _this.generateCell(symbol);
        });
        return html;
    };
    InsertSymbolGenerator.prototype.generateCell = function (symbol) {
        return "<div class=\"symbol-cell\" " + exports.DATA_ATTRIBUTE_NAME + "='" + symbol.value + "' title=\"" + symbol.tooltip + "\">" + symbol.value + "</div>";
    };
    return InsertSymbolGenerator;
}());
exports.InsertSymbolGenerator = InsertSymbolGenerator;
var SymbolModel = /** @class */ (function () {
    function SymbolModel() {
    }
    return SymbolModel;
}());


/***/ }),

/***/ 100044:
/*!*********************************!*\
  !*** ./helpers/tool-builder.ts ***!
  \*********************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Provides an interface for creating and registering custom tools in the Kendo editor.
 */
var ToolBuilder = /** @class */ (function () {
    function ToolBuilder() {
    }
    /**
     * Creates a custom tool that extends the default Kendo popup tool with given configuration.
     * @param kendo Reference to the global kendo script
     * @param toolTitle The title to be used for the tool
     * @param config Configuration object that holds the needed functionality
     * @param command Command name
     * @param popupTemplateGenerator Popup template generator function
     */
    ToolBuilder.createPopupTool = function (kendo, toolTitle, config, command, popupTemplateGenerator) {
        var PopupTool = kendo.ui.editor.PopupTool;
        var defaultConfig = {
            init: function (options) {
                if (config.init) {
                    config.init.bind(this)();
                }
                PopupTool.fn.init.call(this, jQuery.extend(options, {
                    command: command,
                    popupTemplate: popupTemplateGenerator.bind(this)()
                }));
            },
            _open: function () {
                PopupTool.fn._open.call(this);
                if (config._open) {
                    config._open.bind(this)();
                }
            },
            _close: function () {
                PopupTool.fn._close.call(this);
                if (config._close) {
                    config._close.bind(this)();
                }
            }
        };
        for (var functionName in config) {
            if (functionName === "init" || functionName === "_open" || functionName === "_close") {
                continue;
            }
            defaultConfig[functionName] = config[functionName];
        }
        return PopupTool.extend(defaultConfig);
    };
    /**
     * Registers a new custom tool in the Kendo editor, to be inserted later in the toolbar.
     * @param kendo Reference to the global Kendo script
     * @param Tool The generated tool
     * @param toolTitle The title of the tool
     * @param toolTemplate Template for the tool's appearance in the toolbar
     * @param isPopup Whether the tool is a popup or not
     */
    ToolBuilder.registerTool = function (kendo, Tool, toolTitle, toolTemplate, isPopup) {
        if (isPopup === void 0) { isPopup = false; }
        var EditorUtils = kendo.ui.editor.EditorUtils;
        var ToolTemplate = kendo.ui.editor.ToolTemplate;
        EditorUtils.registerTool(toolTitle, new Tool({
            template: new ToolTemplate({
                template: toolTemplate,
                popup: isPopup,
                title: toolTitle
            })
        }));
    };
    return ToolBuilder;
}());
exports.ToolBuilder = ToolBuilder;


/***/ }),

/***/ 100045:
/*!************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./editor-extender/insert-symbol/insert-symbol.provider.css ***!
  \************************************************************************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader!./insert-symbol.provider.css */ 100046);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ 100007)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {
	module.hot.accept("!!../../node_modules/css-loader/index.js!./insert-symbol.provider.css", function() {
		var newContent = require("!!../../node_modules/css-loader/index.js!./insert-symbol.provider.css");

		if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 100046:
/*!********************************************************************************************!*\
  !*** ./node_modules/css-loader!./editor-extender/insert-symbol/insert-symbol.provider.css ***!
  \********************************************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/lib/css-base.js */ 100005)(false);
// imports


// module
exports.push([module.i, ".k-icon.k-i-insertsymbol {\r\n    font-family: WebComponentsIcons;\r\n    font-size: 1.4em;\r\n}\r\n\r\n.k-i-insertsymbol::before {\r\n    font-family: WebComponentsIcons;\r\n    content: \"\\3A9\";\r\n}\r\n\r\n.k-i-insertsymbol::after {\r\n    font-family: WebComponentsIcons;\r\n    content: \"\\E006\";\r\n}\r\n\r\n.k-tool-icon.k-i-insert-symbol::before {\r\n    padding-right: 0;\r\n}\r\n\r\n.k-state-selected .k-icon::after {\r\n    background-color: #e4e4e4;\r\n    border-radius: 0;\r\n}\r\n\r\n.symbol-cell {\r\n    font-size: 15px;\r\n    text-align: center;\r\n    display: inline-block;\r\n    cursor: pointer;\r\n    font-size: 1.1em;\r\n    color: #333333;\r\n    padding: 0px 5px 0px 5px;\r\n}\r\n\r\n.symbol-cell:hover {\r\n    color: #999999;\r\n}\r\n\r\n.k-ct-popup.symbol-popup {\r\n    width: 350px !important;\r\n    padding: 5px 10px 10px 10px !important;\r\n}\r\n\r\n.symbol-title {\r\n    font-size: 10px;\r\n    color: #999999;\r\n    margin: 10px 5px;\r\n}\r\n", ""]);

// exports


/***/ }),

/***/ 100047:
/*!********************************************************************!*\
  !*** ./editor-extender/insert-symbol/symbol-list/symbol-list.json ***!
  \********************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = [
	{
		"name": "\"",
		"value": "\"",
		"escapedValue": "&amp;quot; &amp;QUOT;",
		"tooltip": "QUOTATION MARK"
	},
	{
		"name": "¢",
		"value": "¢",
		"escapedValue": "&amp;cent;",
		"tooltip": "CENT SIGN"
	},
	{
		"name": "€",
		"value": "€",
		"escapedValue": "&amp;euro;",
		"tooltip": "EURO SIGN"
	},
	{
		"name": "£",
		"value": "£",
		"escapedValue": "&amp;pound;",
		"tooltip": "POUND SIGN"
	},
	{
		"name": "¥",
		"value": "¥",
		"escapedValue": "&amp;yen;",
		"tooltip": "YEN SIGN"
	},
	{
		"name": "©",
		"value": "©",
		"escapedValue": "&amp;copy; &amp;COPY;",
		"tooltip": "COPYRIGHT SIGN"
	},
	{
		"name": "®",
		"value": "®",
		"escapedValue": "&amp;reg; &amp;circledR; &amp;REG;",
		"tooltip": "REGISTERED SIGN"
	},
	{
		"name": "™",
		"value": "™",
		"escapedValue": "&amp;trade; &amp;TRADE;",
		"tooltip": "TRADE MARK SIGN"
	},
	{
		"name": "‰",
		"value": "‰",
		"escapedValue": "&amp;permil;",
		"tooltip": "PER MILLE SIGN"
	},
	{
		"name": "µ",
		"value": "µ",
		"escapedValue": "&amp;micro;",
		"tooltip": "MICRO SIGN"
	},
	{
		"name": "·",
		"value": "·",
		"escapedValue": "&amp;middot; &amp;centerdot; &amp;CenterDot;",
		"tooltip": "MIDDLE DOT"
	},
	{
		"name": "•",
		"value": "•",
		"escapedValue": "&amp;bull; &amp;bullet;",
		"tooltip": "BULLET"
	},
	{
		"name": "…",
		"value": "…",
		"escapedValue": "&amp;hellip; &amp;mldr;",
		"tooltip": "HORIZONTAL ELLIPSIS"
	},
	{
		"name": "′",
		"value": "′",
		"escapedValue": "&amp;prime;",
		"tooltip": "PRIME"
	},
	{
		"name": "″",
		"value": "″",
		"escapedValue": "&amp;Prime;",
		"tooltip": "DOUBLE PRIME"
	},
	{
		"name": "§",
		"value": "§",
		"escapedValue": "&amp;sect;",
		"tooltip": "SECTION SIGN"
	},
	{
		"name": "¶",
		"value": "¶",
		"escapedValue": "&amp;para;",
		"tooltip": "PILCROW SIGN"
	},
	{
		"name": "ß",
		"value": "ß",
		"escapedValue": "&amp;szlig;",
		"tooltip": "LATIN SMALL LETTER SHARP S"
	},
	{
		"name": "‹",
		"value": "‹",
		"escapedValue": "&amp;lsaquo;",
		"tooltip": "SINGLE LEFT-POINTING ANGLE QUOTATION MARK"
	},
	{
		"name": "›",
		"value": "›",
		"escapedValue": "&amp;rsaquo;",
		"tooltip": "SINGLE RIGHT-POINTING ANGLE QUOTATION MARK"
	},
	{
		"name": "«",
		"value": "«",
		"escapedValue": "&amp;laquo;",
		"tooltip": "LEFT-POINTING DOUBLE ANGLE QUOTATION MARK"
	},
	{
		"name": "»",
		"value": "»",
		"escapedValue": "&amp;raquo;",
		"tooltip": "RIGHT-POINTING DOUBLE ANGLE QUOTATION MARK"
	},
	{
		"name": "‘",
		"value": "‘",
		"escapedValue": "&amp;lsquo; &amp;OpenCurlyQuote;",
		"tooltip": "LEFT SINGLE QUOTATION MARK"
	},
	{
		"name": "’",
		"value": "’",
		"escapedValue": "&amp;rsquo; &amp;rsquor; &amp;CloseCurlyQuote;",
		"tooltip": "RIGHT SINGLE QUOTATION MARK"
	},
	{
		"name": "“",
		"value": "“",
		"escapedValue": "&amp;ldquo; &amp;OpenCurlyDoubleQuote;",
		"tooltip": "LEFT DOUBLE QUOTATION MARK"
	},
	{
		"name": "”",
		"value": "”",
		"escapedValue": "&amp;rdquo; &amp;rdquor; &amp;CloseCurlyDoubleQuote;",
		"tooltip": "RIGHT DOUBLE QUOTATION MARK"
	},
	{
		"name": "‚",
		"value": "‚",
		"escapedValue": "&amp;lsquor; &amp;sbquo;",
		"tooltip": "SINGLE LOW-9 QUOTATION MARK"
	},
	{
		"name": "„",
		"value": "„",
		"escapedValue": "&amp;ldquor; &amp;bdquo;",
		"tooltip": "DOUBLE LOW-9 QUOTATION MARK"
	},
	{
		"name": "<",
		"value": "<",
		"escapedValue": "&amp;lt; &amp;LT;",
		"tooltip": "LESS-THAN SIGN"
	},
	{
		"name": ">",
		"value": ">",
		"escapedValue": "&amp;gt; &amp;GT;",
		"tooltip": "GREATER-THAN SIGN"
	},
	{
		"name": "≤",
		"value": "≤",
		"escapedValue": "&amp;le; &amp;leq;",
		"tooltip": "LESS-THAN OR EQUAL TO"
	},
	{
		"name": "≥",
		"value": "≥",
		"escapedValue": "&amp;ge; &amp;GreaterEqual; &amp;geq;",
		"tooltip": "GREATER-THAN OR EQUAL TO"
	},
	{
		"name": "–",
		"value": "–",
		"escapedValue": "&amp;ndash;",
		"tooltip": "EN DASH"
	},
	{
		"name": "—",
		"value": "—",
		"escapedValue": "&amp;mdash;",
		"tooltip": "EM DASH"
	},
	{
		"name": "¯",
		"value": "¯",
		"escapedValue": "&amp;macr; &amp;OverBar; &amp;strns;",
		"tooltip": "MACRON"
	},
	{
		"name": "‾",
		"value": "‾",
		"escapedValue": "&amp;oline;",
		"tooltip": "OVERLINE"
	},
	{
		"name": "¤",
		"value": "¤",
		"escapedValue": "&amp;curren;",
		"tooltip": "CURRENCY SIGN"
	},
	{
		"name": "¦",
		"value": "¦",
		"escapedValue": "&amp;brvbar;",
		"tooltip": "BROKEN BAR"
	},
	{
		"name": "¨",
		"value": "¨",
		"escapedValue": "&amp;Dot; &amp;die; &amp;DoubleDot; &amp;uml;",
		"tooltip": "DIAERESIS"
	},
	{
		"name": "¡",
		"value": "¡",
		"escapedValue": "&amp;iexcl;",
		"tooltip": "INVERTED EXCLAMATION MARK"
	},
	{
		"name": "¿",
		"value": "¿",
		"escapedValue": "&amp;iquest;",
		"tooltip": "INVERTED QUESTION MARK"
	},
	{
		"name": "ˆ",
		"value": "ˆ",
		"escapedValue": "&amp;circ;",
		"tooltip": "MODIFIER LETTER CIRCUMFLEX ACCENT"
	},
	{
		"name": "˜",
		"value": "˜",
		"escapedValue": "&amp;tilde; &amp;DiacriticalTilde;",
		"tooltip": "SMALL TILDE"
	},
	{
		"name": "°",
		"value": "°",
		"escapedValue": "&amp;deg;",
		"tooltip": "DEGREE SIGN"
	},
	{
		"name": "−",
		"value": "−",
		"escapedValue": "&amp;minus;",
		"tooltip": "MINUS SIGN"
	},
	{
		"name": "±",
		"value": "±",
		"escapedValue": "&amp;plusmn; &amp;pm; &amp;PlusMinus;",
		"tooltip": "PLUS-MINUS SIGN"
	},
	{
		"name": "÷",
		"value": "÷",
		"escapedValue": "&amp;divide; &amp;div;",
		"tooltip": "DIVISION SIGN"
	},
	{
		"name": "⁄",
		"value": "⁄",
		"escapedValue": "&amp;frasl;",
		"tooltip": "FRACTION SLASH"
	},
	{
		"name": "×",
		"value": "×",
		"escapedValue": "&amp;times;",
		"tooltip": "MULTIPLICATION SIGN"
	},
	{
		"name": "¼",
		"value": "¼",
		"escapedValue": "&amp;frac14;",
		"tooltip": "VULGAR FRACTION ONE QUARTER"
	},
	{
		"name": "½",
		"value": "½",
		"escapedValue": "&amp;frac12; &amp;half;",
		"tooltip": "VULGAR FRACTION ONE HALF"
	},
	{
		"name": "¾",
		"value": "¾",
		"escapedValue": "&amp;frac34;",
		"tooltip": "VULGAR FRACTION THREE QUARTERS"
	},
	{
		"name": "ƒ",
		"value": "ƒ",
		"escapedValue": "&amp;fnof;",
		"tooltip": "LATIN SMALL LETTER F WITH HOOK"
	},
	{
		"name": "∫",
		"value": "∫",
		"escapedValue": "&amp;int; &amp;Integral;",
		"tooltip": "INTEGRAL"
	},
	{
		"name": "∑",
		"value": "∑",
		"escapedValue": "&amp;sum; &amp;Sum;",
		"tooltip": "N-ARY SUMMATION"
	},
	{
		"name": "∞",
		"value": "∞",
		"escapedValue": "&amp;infin;",
		"tooltip": "INFINITY"
	},
	{
		"name": "√",
		"value": "√",
		"escapedValue": "&amp;radic; &amp;Sqrt;",
		"tooltip": "SQUARE ROOT"
	},
	{
		"name": "∼",
		"value": "∼",
		"escapedValue": "&amp;sim; &amp;Tilde; &amp;thksim; &amp;thicksim;",
		"tooltip": "TILDE OPERATOR"
	},
	{
		"name": "≅",
		"value": "≅",
		"escapedValue": "&amp;cong; &amp;TildeFullEqual;",
		"tooltip": "APPROXIMATELY EQUAL TO"
	},
	{
		"name": "≈",
		"value": "≈",
		"escapedValue": "&amp;asymp; &amp;ap; &amp;TildeTilde; &amp;approx; &amp;thkap; &amp;thickapprox;",
		"tooltip": "ALMOST EQUAL TO"
	},
	{
		"name": "≠",
		"value": "≠",
		"escapedValue": "&amp;ne; &amp;NotEqual;",
		"tooltip": "NOT EQUAL TO"
	},
	{
		"name": "≡",
		"value": "≡",
		"escapedValue": "&amp;equiv; &amp;Congruent;",
		"tooltip": "IDENTICAL TO"
	},
	{
		"name": "∈",
		"value": "∈",
		"escapedValue": "&amp;isin; &amp;isinv; &amp;Element; &amp;in;",
		"tooltip": "ELEMENT OF"
	},
	{
		"name": "∉",
		"value": "∉",
		"escapedValue": "&amp;notin; &amp;NotElement; &amp;notinva;",
		"tooltip": "NOT AN ELEMENT OF"
	},
	{
		"name": "∋",
		"value": "∋",
		"escapedValue": "&amp;niv; &amp;ReverseElement; &amp;ni; &amp;SuchThat;",
		"tooltip": "CONTAINS AS MEMBER"
	},
	{
		"name": "∏",
		"value": "∏",
		"escapedValue": "&amp;prod; &amp;Product;",
		"tooltip": "N-ARY PRODUCT"
	},
	{
		"name": "∧",
		"value": "∧",
		"escapedValue": "&amp;and; &amp;wedge;",
		"tooltip": "LOGICAL AND"
	},
	{
		"name": "∨",
		"value": "∨",
		"escapedValue": "&amp;or; &amp;vee;",
		"tooltip": "LOGICAL OR"
	},
	{
		"name": "¬",
		"value": "¬",
		"escapedValue": "&amp;not;",
		"tooltip": "NOT SIGN"
	},
	{
		"name": "∩",
		"value": "∩",
		"escapedValue": "&amp;cap;",
		"tooltip": "INTERSECTION"
	},
	{
		"name": "∪",
		"value": "∪",
		"escapedValue": "&amp;cup;",
		"tooltip": "UNION"
	},
	{
		"name": "∂",
		"value": "∂",
		"escapedValue": "&amp;part; &amp;PartialD;",
		"tooltip": "PARTIAL DIFFERENTIAL"
	},
	{
		"name": "∀",
		"value": "∀",
		"escapedValue": "&amp;forall; &amp;ForAll;",
		"tooltip": "FOR ALL"
	},
	{
		"name": "∃",
		"value": "∃",
		"escapedValue": "&amp;exist; &amp;Exists;",
		"tooltip": "THERE EXISTS"
	},
	{
		"name": "∅",
		"value": "∅",
		"escapedValue": "&amp;empty; &amp;emptyset; &amp;emptyv; &amp;varnothing;",
		"tooltip": "EMPTY SET"
	},
	{
		"name": "∇",
		"value": "∇",
		"escapedValue": "&amp;nabla; &amp;Del;",
		"tooltip": "NABLA"
	},
	{
		"name": "∗",
		"value": "∗",
		"escapedValue": "&amp;lowast;",
		"tooltip": "ASTERISK OPERATOR"
	},
	{
		"name": "∝",
		"value": "∝",
		"escapedValue": "&amp;prop; &amp;propto; &amp;Proportional; &amp;vprop; &amp;varpropto;",
		"tooltip": "PROPORTIONAL TO"
	},
	{
		"name": "∠",
		"value": "∠",
		"escapedValue": "&amp;ang; &amp;angle;",
		"tooltip": "ANGLE"
	},
	{
		"name": "ª",
		"value": "ª",
		"escapedValue": "&amp;ordf;",
		"tooltip": "FEMININE ORDINAL INDICATOR"
	},
	{
		"name": "º",
		"value": "º",
		"escapedValue": "&amp;ordm;",
		"tooltip": "MASCULINE ORDINAL INDICATOR"
	},
	{
		"name": "†",
		"value": "†",
		"escapedValue": "&amp;dagger;",
		"tooltip": "DAGGER"
	},
	{
		"name": "‡",
		"value": "‡",
		"escapedValue": "&amp;Dagger; &amp;ddagger;",
		"tooltip": "DOUBLE DAGGER"
	},
	{
		"name": "À",
		"value": "À",
		"escapedValue": "&amp;Agrave;",
		"tooltip": "LATIN CAPITAL LETTER A WITH GRAVE"
	},
	{
		"name": "Á",
		"value": "Á",
		"escapedValue": "&amp;Aacute;",
		"tooltip": "LATIN CAPITAL LETTER A WITH ACUTE"
	},
	{
		"name": "Â",
		"value": "Â",
		"escapedValue": "&amp;Acirc;",
		"tooltip": "LATIN CAPITAL LETTER A WITH CIRCUMFLEX"
	},
	{
		"name": "Ã",
		"value": "Ã",
		"escapedValue": "&amp;Atilde;",
		"tooltip": "LATIN CAPITAL LETTER A WITH TILDE"
	},
	{
		"name": "Ä",
		"value": "Ä",
		"escapedValue": "&amp;Auml;",
		"tooltip": "LATIN CAPITAL LETTER A WITH DIAERESIS"
	},
	{
		"name": "Å",
		"value": "Å",
		"escapedValue": "&amp;Aring;",
		"tooltip": "LATIN CAPITAL LETTER A WITH RING ABOVE"
	},
	{
		"name": "Æ",
		"value": "Æ",
		"escapedValue": "&amp;AElig;",
		"tooltip": "LATIN CAPITAL LETTER AE"
	},
	{
		"name": "Ç",
		"value": "Ç",
		"escapedValue": "&amp;Ccedil;",
		"tooltip": "LATIN CAPITAL LETTER C WITH CEDILLA"
	},
	{
		"name": "È",
		"value": "È",
		"escapedValue": "&amp;Egrave;",
		"tooltip": "LATIN CAPITAL LETTER E WITH GRAVE"
	},
	{
		"name": "É",
		"value": "É",
		"escapedValue": "&amp;Eacute;",
		"tooltip": "LATIN CAPITAL LETTER E WITH ACUTE"
	},
	{
		"name": "Ê",
		"value": "Ê",
		"escapedValue": "&amp;Ecirc;",
		"tooltip": "LATIN CAPITAL LETTER E WITH CIRCUMFLEX"
	},
	{
		"name": "Ë",
		"value": "Ë",
		"escapedValue": "&amp;Euml;",
		"tooltip": "LATIN CAPITAL LETTER E WITH DIAERESIS"
	},
	{
		"name": "Ì",
		"value": "Ì",
		"escapedValue": "&amp;Igrave;",
		"tooltip": "LATIN CAPITAL LETTER I WITH GRAVE"
	},
	{
		"name": "Í",
		"value": "Í",
		"escapedValue": "&amp;Iacute;",
		"tooltip": "LATIN CAPITAL LETTER I WITH ACUTE"
	},
	{
		"name": "Î",
		"value": "Î",
		"escapedValue": "&amp;Icirc;",
		"tooltip": "LATIN CAPITAL LETTER I WITH CIRCUMFLEX"
	},
	{
		"name": "Ï",
		"value": "Ï",
		"escapedValue": "&amp;Iuml;",
		"tooltip": "LATIN CAPITAL LETTER I WITH DIAERESIS"
	},
	{
		"name": "Ð",
		"value": "Ð",
		"escapedValue": "&amp;ETH;",
		"tooltip": "LATIN CAPITAL LETTER ETH"
	},
	{
		"name": "Ñ",
		"value": "Ñ",
		"escapedValue": "&amp;Ntilde;",
		"tooltip": "LATIN CAPITAL LETTER N WITH TILDE"
	},
	{
		"name": "Ò",
		"value": "Ò",
		"escapedValue": "&amp;Ograve;",
		"tooltip": "LATIN CAPITAL LETTER O WITH GRAVE"
	},
	{
		"name": "Ó",
		"value": "Ó",
		"escapedValue": "&amp;Oacute;",
		"tooltip": "LATIN CAPITAL LETTER O WITH ACUTE"
	},
	{
		"name": "Ô",
		"value": "Ô",
		"escapedValue": "&amp;Ocirc;",
		"tooltip": "LATIN CAPITAL LETTER O WITH CIRCUMFLEX"
	},
	{
		"name": "Õ",
		"value": "Õ",
		"escapedValue": "&amp;Otilde;",
		"tooltip": "LATIN CAPITAL LETTER O WITH TILDE"
	},
	{
		"name": "Ö",
		"value": "Ö",
		"escapedValue": "&amp;Ouml;",
		"tooltip": "LATIN CAPITAL LETTER O WITH DIAERESIS"
	},
	{
		"name": "Ø",
		"value": "Ø",
		"escapedValue": "&amp;Oslash;",
		"tooltip": "LATIN CAPITAL LETTER O WITH STROKE"
	},
	{
		"name": "Œ",
		"value": "Œ",
		"escapedValue": "&amp;OElig;",
		"tooltip": "LATIN CAPITAL LIGATURE OE"
	},
	{
		"name": "Š",
		"value": "Š",
		"escapedValue": "&amp;Scaron;",
		"tooltip": "LATIN CAPITAL LETTER S WITH CARON"
	},
	{
		"name": "Ù",
		"value": "Ù",
		"escapedValue": "&amp;Ugrave;",
		"tooltip": "LATIN CAPITAL LETTER U WITH GRAVE"
	},
	{
		"name": "Ú",
		"value": "Ú",
		"escapedValue": "&amp;Uacute;",
		"tooltip": "LATIN CAPITAL LETTER U WITH ACUTE"
	},
	{
		"name": "Û",
		"value": "Û",
		"escapedValue": "&amp;Ucirc;",
		"tooltip": "LATIN CAPITAL LETTER U WITH CIRCUMFLEX"
	},
	{
		"name": "Ü",
		"value": "Ü",
		"escapedValue": "&amp;Uuml;",
		"tooltip": "LATIN CAPITAL LETTER U WITH DIAERESIS"
	},
	{
		"name": "Ý",
		"value": "Ý",
		"escapedValue": "&amp;Yacute;",
		"tooltip": "LATIN CAPITAL LETTER Y WITH ACUTE"
	},
	{
		"name": "Ÿ",
		"value": "Ÿ",
		"escapedValue": "&amp;Yuml;",
		"tooltip": "LATIN CAPITAL LETTER Y WITH DIAERESIS"
	},
	{
		"name": "Þ",
		"value": "Þ",
		"escapedValue": "&amp;THORN;",
		"tooltip": "LATIN CAPITAL LETTER THORN"
	},
	{
		"name": "à",
		"value": "à",
		"escapedValue": "&amp;agrave;",
		"tooltip": "LATIN SMALL LETTER A WITH GRAVE"
	},
	{
		"name": "á",
		"value": "á",
		"escapedValue": "&amp;aacute;",
		"tooltip": "LATIN SMALL LETTER A WITH ACUTE"
	},
	{
		"name": "â",
		"value": "â",
		"escapedValue": "&amp;acirc;",
		"tooltip": "LATIN SMALL LETTER A WITH CIRCUMFLEX"
	},
	{
		"name": "ã",
		"value": "ã",
		"escapedValue": "&amp;atilde;",
		"tooltip": "LATIN SMALL LETTER A WITH TILDE"
	},
	{
		"name": "ä",
		"value": "ä",
		"escapedValue": "&amp;auml;",
		"tooltip": "LATIN SMALL LETTER A WITH DIAERESIS"
	},
	{
		"name": "å",
		"value": "å",
		"escapedValue": "&amp;aring;",
		"tooltip": "LATIN SMALL LETTER A WITH RING ABOVE"
	},
	{
		"name": "æ",
		"value": "æ",
		"escapedValue": "&amp;aelig;",
		"tooltip": "LATIN SMALL LETTER AE"
	},
	{
		"name": "ç",
		"value": "ç",
		"escapedValue": "&amp;ccedil;",
		"tooltip": "LATIN SMALL LETTER C WITH CEDILLA"
	},
	{
		"name": "è",
		"value": "è",
		"escapedValue": "&amp;egrave;",
		"tooltip": "LATIN SMALL LETTER E WITH GRAVE"
	},
	{
		"name": "é",
		"value": "é",
		"escapedValue": "&amp;eacute;",
		"tooltip": "LATIN SMALL LETTER E WITH ACUTE"
	},
	{
		"name": "ê",
		"value": "ê",
		"escapedValue": "&amp;ecirc;",
		"tooltip": "LATIN SMALL LETTER E WITH CIRCUMFLEX"
	},
	{
		"name": "ë",
		"value": "ë",
		"escapedValue": "&amp;euml;",
		"tooltip": "LATIN SMALL LETTER E WITH DIAERESIS"
	},
	{
		"name": "ì",
		"value": "ì",
		"escapedValue": "&amp;igrave;",
		"tooltip": "LATIN SMALL LETTER I WITH GRAVE"
	},
	{
		"name": "í",
		"value": "í",
		"escapedValue": "&amp;iacute;",
		"tooltip": "LATIN SMALL LETTER I WITH ACUTE"
	},
	{
		"name": "î",
		"value": "î",
		"escapedValue": "&amp;icirc;",
		"tooltip": "LATIN SMALL LETTER I WITH CIRCUMFLEX"
	},
	{
		"name": "ï",
		"value": "ï",
		"escapedValue": "&amp;iuml;",
		"tooltip": "LATIN SMALL LETTER I WITH DIAERESIS"
	},
	{
		"name": "ð",
		"value": "ð",
		"escapedValue": "&amp;eth;",
		"tooltip": "LATIN SMALL LETTER ETH"
	},
	{
		"name": "ñ",
		"value": "ñ",
		"escapedValue": "&amp;ntilde;",
		"tooltip": "LATIN SMALL LETTER N WITH TILDE"
	},
	{
		"name": "ò",
		"value": "ò",
		"escapedValue": "&amp;ograve;",
		"tooltip": "LATIN SMALL LETTER O WITH GRAVE"
	},
	{
		"name": "ó",
		"value": "ó",
		"escapedValue": "&amp;oacute;",
		"tooltip": "LATIN SMALL LETTER O WITH ACUTE"
	},
	{
		"name": "ô",
		"value": "ô",
		"escapedValue": "&amp;ocirc;",
		"tooltip": "LATIN SMALL LETTER O WITH CIRCUMFLEX"
	},
	{
		"name": "õ",
		"value": "õ",
		"escapedValue": "&amp;otilde;",
		"tooltip": "LATIN SMALL LETTER O WITH TILDE"
	},
	{
		"name": "ö",
		"value": "ö",
		"escapedValue": "&amp;ouml;",
		"tooltip": "LATIN SMALL LETTER O WITH DIAERESIS"
	},
	{
		"name": "ø",
		"value": "ø",
		"escapedValue": "&amp;oslash;",
		"tooltip": "LATIN SMALL LETTER O WITH STROKE"
	},
	{
		"name": "œ",
		"value": "œ",
		"escapedValue": "&amp;oelig;",
		"tooltip": "LATIN SMALL LIGATURE OE"
	},
	{
		"name": "š",
		"value": "š",
		"escapedValue": "&amp;scaron;",
		"tooltip": "LATIN SMALL LETTER S WITH CARON"
	},
	{
		"name": "ù",
		"value": "ù",
		"escapedValue": "&amp;ugrave;",
		"tooltip": "LATIN SMALL LETTER U WITH GRAVE"
	},
	{
		"name": "ú",
		"value": "ú",
		"escapedValue": "&amp;uacute;",
		"tooltip": "LATIN SMALL LETTER U WITH ACUTE"
	},
	{
		"name": "û",
		"value": "û",
		"escapedValue": "&amp;ucirc;",
		"tooltip": "LATIN SMALL LETTER U WITH CIRCUMFLEX"
	},
	{
		"name": "ü",
		"value": "ü",
		"escapedValue": "&amp;uuml;",
		"tooltip": "LATIN SMALL LETTER U WITH DIAERESIS"
	},
	{
		"name": "ý",
		"value": "ý",
		"escapedValue": "&amp;yacute;",
		"tooltip": "LATIN SMALL LETTER Y WITH ACUTE"
	},
	{
		"name": "þ",
		"value": "þ",
		"escapedValue": "&amp;thorn;",
		"tooltip": "LATIN SMALL LETTER THORN"
	},
	{
		"name": "ÿ",
		"value": "ÿ",
		"escapedValue": "&amp;yuml;",
		"tooltip": "LATIN SMALL LETTER Y WITH DIAERESIS"
	},
	{
		"name": "Α",
		"value": "Α",
		"escapedValue": "&amp;Alpha;",
		"tooltip": "GREEK CAPITAL LETTER ALPHA"
	},
	{
		"name": "Β",
		"value": "Β",
		"escapedValue": "&amp;Beta;",
		"tooltip": "GREEK CAPITAL LETTER BETA"
	},
	{
		"name": "Γ",
		"value": "Γ",
		"escapedValue": "&amp;Gamma;",
		"tooltip": "GREEK CAPITAL LETTER GAMMA"
	},
	{
		"name": "Ε",
		"value": "Ε",
		"escapedValue": "&amp;Epsilon;",
		"tooltip": "GREEK CAPITAL LETTER EPSILON"
	},
	{
		"name": "Ζ",
		"value": "Ζ",
		"escapedValue": "&amp;Zeta;",
		"tooltip": "GREEK CAPITAL LETTER ZETA"
	},
	{
		"name": "Η",
		"value": "Η",
		"escapedValue": "&amp;Eta;",
		"tooltip": "GREEK CAPITAL LETTER ETA"
	},
	{
		"name": "Θ",
		"value": "Θ",
		"escapedValue": "&amp;Theta;",
		"tooltip": "GREEK CAPITAL LETTER THETA"
	},
	{
		"name": "Ι",
		"value": "Ι",
		"escapedValue": "&amp;Iota;",
		"tooltip": "GREEK CAPITAL LETTER IOTA"
	},
	{
		"name": "Κ",
		"value": "Κ",
		"escapedValue": "&amp;Kappa;",
		"tooltip": "GREEK CAPITAL LETTER KAPPA"
	},
	{
		"name": "Λ",
		"value": "Λ",
		"escapedValue": "&amp;Lambda;",
		"tooltip": "GREEK CAPITAL LETTER LAMDA"
	},
	{
		"name": "Μ",
		"value": "Μ",
		"escapedValue": "&amp;Mu;",
		"tooltip": "GREEK CAPITAL LETTER MU"
	},
	{
		"name": "Ν",
		"value": "Ν",
		"escapedValue": "&amp;Nu;",
		"tooltip": "GREEK CAPITAL LETTER NU"
	},
	{
		"name": "Ξ",
		"value": "Ξ",
		"escapedValue": "&amp;Xi;",
		"tooltip": "GREEK CAPITAL LETTER XI"
	},
	{
		"name": "Ο",
		"value": "Ο",
		"escapedValue": "&amp;Omicron;",
		"tooltip": "GREEK CAPITAL LETTER OMICRON"
	},
	{
		"name": "Π",
		"value": "Π",
		"escapedValue": "&amp;Pi;",
		"tooltip": "GREEK CAPITAL LETTER PI"
	},
	{
		"name": "Ρ",
		"value": "Ρ",
		"escapedValue": "&amp;Rho;",
		"tooltip": "GREEK CAPITAL LETTER RHO"
	},
	{
		"name": "Σ",
		"value": "Σ",
		"escapedValue": "&amp;Sigma;",
		"tooltip": "GREEK CAPITAL LETTER SIGMA"
	},
	{
		"name": "Τ",
		"value": "Τ",
		"escapedValue": "&amp;Tau;",
		"tooltip": "GREEK CAPITAL LETTER TAU"
	},
	{
		"name": "Υ",
		"value": "Υ",
		"escapedValue": "&amp;Upsilon;",
		"tooltip": "GREEK CAPITAL LETTER UPSILON"
	},
	{
		"name": "Φ",
		"value": "Φ",
		"escapedValue": "&amp;Phi;",
		"tooltip": "GREEK CAPITAL LETTER PHI"
	},
	{
		"name": "Χ",
		"value": "Χ",
		"escapedValue": "&amp;Chi;",
		"tooltip": "GREEK CAPITAL LETTER CHI"
	},
	{
		"name": "Ψ",
		"value": "Ψ",
		"escapedValue": "&amp;Psi;",
		"tooltip": "GREEK CAPITAL LETTER PSI"
	},
	{
		"name": "Ω",
		"value": "Ω",
		"escapedValue": "&amp;Omega;",
		"tooltip": "GREEK CAPITAL LETTER OMEGA"
	},
	{
		"name": "α",
		"value": "α",
		"escapedValue": "&amp;alpha;",
		"tooltip": "GREEK SMALL LETTER ALPHA"
	},
	{
		"name": "β",
		"value": "β",
		"escapedValue": "&amp;beta;",
		"tooltip": "GREEK SMALL LETTER BETA"
	},
	{
		"name": "γ",
		"value": "γ",
		"escapedValue": "&amp;gamma;",
		"tooltip": "GREEK SMALL LETTER GAMMA"
	},
	{
		"name": "δ",
		"value": "δ",
		"escapedValue": "&amp;delta;",
		"tooltip": "GREEK SMALL LETTER DELTA"
	},
	{
		"name": "ε",
		"value": "ε",
		"escapedValue": "&amp;epsiv; &amp;varepsilon; &amp;epsilon;",
		"tooltip": "GREEK SMALL LETTER EPSILON"
	},
	{
		"name": "ζ",
		"value": "ζ",
		"escapedValue": "&amp;zeta;",
		"tooltip": "GREEK SMALL LETTER ZETA"
	},
	{
		"name": "η",
		"value": "η",
		"escapedValue": "&amp;eta;",
		"tooltip": "GREEK SMALL LETTER ETA"
	},
	{
		"name": "θ",
		"value": "θ",
		"escapedValue": "&amp;theta;",
		"tooltip": "GREEK SMALL LETTER THETA"
	},
	{
		"name": "ι",
		"value": "ι",
		"escapedValue": "&amp;iota;",
		"tooltip": "GREEK SMALL LETTER IOTA"
	},
	{
		"name": "κ",
		"value": "κ",
		"escapedValue": "&amp;kappa;",
		"tooltip": "GREEK SMALL LETTER KAPPA"
	},
	{
		"name": "λ",
		"value": "λ",
		"escapedValue": "&amp;lambda;",
		"tooltip": "GREEK SMALL LETTER LAMDA"
	},
	{
		"name": "μ",
		"value": "μ",
		"escapedValue": "&amp;mu;",
		"tooltip": "GREEK SMALL LETTER MU"
	},
	{
		"name": "ν",
		"value": "ν",
		"escapedValue": "&amp;nu;",
		"tooltip": "GREEK SMALL LETTER NU"
	},
	{
		"name": "ξ",
		"value": "ξ",
		"escapedValue": "&amp;xi;",
		"tooltip": "GREEK SMALL LETTER XI"
	},
	{
		"name": "ο",
		"value": "ο",
		"escapedValue": "&amp;omicron;",
		"tooltip": "GREEK SMALL LETTER OMICRON"
	},
	{
		"name": "π",
		"value": "π",
		"escapedValue": "&amp;pi;",
		"tooltip": "GREEK SMALL LETTER PI"
	},
	{
		"name": "ρ",
		"value": "ρ",
		"escapedValue": "&amp;rho;",
		"tooltip": "GREEK SMALL LETTER RHO"
	},
	{
		"name": "ς",
		"value": "ς",
		"escapedValue": "&amp;sigmav; &amp;varsigma; &amp;sigmaf;",
		"tooltip": "GREEK SMALL LETTER FINAL SIGMA"
	},
	{
		"name": "σ",
		"value": "σ",
		"escapedValue": "&amp;sigma;",
		"tooltip": "GREEK SMALL LETTER SIGMA"
	},
	{
		"name": "τ",
		"value": "τ",
		"escapedValue": "&amp;tau;",
		"tooltip": "GREEK SMALL LETTER TAU"
	},
	{
		"name": "υ",
		"value": "υ",
		"escapedValue": "&amp;upsi; &amp;upsilon;",
		"tooltip": "GREEK SMALL LETTER UPSILON"
	},
	{
		"name": "φ",
		"value": "φ",
		"escapedValue": "&amp;phi; &amp;phiv; &amp;varphi;",
		"tooltip": "GREEK SMALL LETTER PHI"
	},
	{
		"name": "χ",
		"value": "χ",
		"escapedValue": "&amp;chi;",
		"tooltip": "GREEK SMALL LETTER CHI"
	},
	{
		"name": "ψ",
		"value": "ψ",
		"escapedValue": "&amp;psi;",
		"tooltip": "GREEK SMALL LETTER PSI"
	},
	{
		"name": "ω",
		"value": "ω",
		"escapedValue": "&amp;omega;",
		"tooltip": "GREEK SMALL LETTER OMEGA"
	},
	{
		"name": "←",
		"value": "←",
		"escapedValue": "&amp;larr; &amp;leftarrow; &amp;LeftArrow; &amp;slarr; &amp;ShortLeftArrow;",
		"tooltip": "LEFTWARDS ARROW"
	},
	{
		"name": "↑",
		"value": "↑",
		"escapedValue": "&amp;uarr; &amp;uparrow; &amp;UpArrow; &amp;ShortUpArrow;",
		"tooltip": "UPWARDS ARROW"
	},
	{
		"name": "→",
		"value": "→",
		"escapedValue": "&amp;rarr; &amp;rightarrow; &amp;RightArrow; &amp;srarr; &amp;ShortRightArrow;",
		"tooltip": "RIGHTWARDS ARROW"
	},
	{
		"name": "↓",
		"value": "↓",
		"escapedValue": "&amp;darr; &amp;downarrow; &amp;DownArrow; &amp;ShortDownArrow;",
		"tooltip": "DOWNWARDS ARROW"
	},
	{
		"name": "↔",
		"value": "↔",
		"escapedValue": "&amp;harr; &amp;leftrightarrow; &amp;LeftRightArrow;",
		"tooltip": "LEFT RIGHT ARROW"
	},
	{
		"name": "↵",
		"value": "↵",
		"escapedValue": "&amp;crarr;",
		"tooltip": "DOWNWARDS ARROW WITH CORNER LEFTWARDS"
	},
	{
		"name": "⇐",
		"value": "⇐",
		"escapedValue": "&amp;lArr; &amp;Leftarrow; &amp;DoubleLeftArrow;",
		"tooltip": "LEFTWARDS DOUBLE ARROW"
	},
	{
		"name": "⇑",
		"value": "⇑",
		"escapedValue": "&amp;uArr; &amp;Uparrow; &amp;DoubleUpArrow;",
		"tooltip": "UPWARDS DOUBLE ARROW"
	},
	{
		"name": "⇒",
		"value": "⇒",
		"escapedValue": "&amp;rArr; &amp;Rightarrow; &amp;Implies; &amp;DoubleRightArrow;",
		"tooltip": "RIGHTWARDS DOUBLE ARROW"
	},
	{
		"name": "⇓",
		"value": "⇓",
		"escapedValue": "&amp;dArr; &amp;Downarrow; &amp;DoubleDownArrow;",
		"tooltip": "DOWNWARDS DOUBLE ARROW"
	},
	{
		"name": "⇔",
		"value": "⇔",
		"escapedValue": "&amp;hArr; &amp;Leftrightarrow; &amp;DoubleLeftRightArrow; &amp;iff;",
		"tooltip": "LEFT RIGHT DOUBLE ARROW"
	},
	{
		"name": "∴",
		"value": "∴",
		"escapedValue": "&amp;there4; &amp;therefore; &amp;Therefore;",
		"tooltip": "THEREFORE"
	},
	{
		"name": "⊂",
		"value": "⊂",
		"escapedValue": "&amp;sub; &amp;subset;",
		"tooltip": "SUBSET OF"
	},
	{
		"name": "⊃",
		"value": "⊃",
		"escapedValue": "&amp;sup; &amp;supset; &amp;Superset;",
		"tooltip": "SUPERSET OF"
	},
	{
		"name": "⊄",
		"value": "⊄",
		"escapedValue": "&amp;nsub;",
		"tooltip": "NOT A SUBSET OF"
	},
	{
		"name": "⊆",
		"value": "⊆",
		"escapedValue": "&amp;sube; &amp;SubsetEqual; &amp;subseteq;",
		"tooltip": "SUBSET OF OR EQUAL TO"
	},
	{
		"name": "⊇",
		"value": "⊇",
		"escapedValue": "&amp;supe; &amp;supseteq; &amp;SupersetEqual;",
		"tooltip": "SUPERSET OF OR EQUAL TO"
	},
	{
		"name": "⊕",
		"value": "⊕",
		"escapedValue": "&amp;oplus; &amp;CirclePlus;",
		"tooltip": "CIRCLED PLUS"
	},
	{
		"name": "⊗",
		"value": "⊗",
		"escapedValue": "&amp;otimes; &amp;CircleTimes;",
		"tooltip": "CIRCLED TIMES"
	},
	{
		"name": "⊥",
		"value": "⊥",
		"escapedValue": "&amp;bottom; &amp;bot; &amp;perp; &amp;UpTee;",
		"tooltip": "UP TACK"
	},
	{
		"name": "⌈",
		"value": "⌈",
		"escapedValue": "&amp;lceil; &amp;LeftCeiling;",
		"tooltip": "LEFT CEILING"
	},
	{
		"name": "⌉",
		"value": "⌉",
		"escapedValue": "&amp;rceil; &amp;RightCeiling;",
		"tooltip": "RIGHT CEILING"
	},
	{
		"name": "⌊",
		"value": "⌊",
		"escapedValue": "&amp;lfloor; &amp;LeftFloor;",
		"tooltip": "LEFT FLOOR"
	},
	{
		"name": "⌋",
		"value": "⌋",
		"escapedValue": "&amp;rfloor; &amp;RightFloor;",
		"tooltip": "RIGHT FLOOR"
	},
	{
		"name": "⟨",
		"value": "⟨",
		"escapedValue": "&amp;lang; &amp;LeftAngleBracket; &amp;langle;",
		"tooltip": "MATHEMATICAL LEFT ANGLE BRACKET"
	},
	{
		"name": "⟩",
		"value": "⟩",
		"escapedValue": "&amp;rang; &amp;RightAngleBracket; &amp;rangle;",
		"tooltip": "MATHEMATICAL RIGHT ANGLE BRACKET"
	}
];

/***/ }),

/***/ 100048:
/*!***********************************************************************!*\
  !*** ./editor-extender/spell-check/edit-menu-spell-check-provider.ts ***!
  \***********************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ 100001);
var core_1 = __webpack_require__(/*! @angular/core */ 100002);
var v1_1 = __webpack_require__(/*! progress-sitefinity-adminapp-sdk/app/api/v1 */ 100003);
var EditMenuSpellCheckProvider = /** @class */ (function () {
    function EditMenuSpellCheckProvider() {
    }
    EditMenuSpellCheckProvider.prototype.getButtons = function (element) {
        if (element instanceof HTMLSpanElement && element.attributes["suggestion"]) {
            var spellCheckButtons = this.createSpellCheckButtons(element);
            return spellCheckButtons;
        }
        return [];
    };
    EditMenuSpellCheckProvider.prototype.createSpellCheckButtons = function (element) {
        var suggestion = element.attributes["suggestion"].value;
        var fakeWordButton = {
            name: "suggestion",
            action: null,
            text: "" + suggestion,
            tooltip: "" + suggestion,
            isActive: false,
            closeMenuOnClick: false
        };
        var acceptButton = {
            name: "check",
            action: function () {
                element.outerHTML = suggestion;
            },
            text: null,
            tooltip: "Accept correction",
            isActive: false,
            closeMenuOnClick: true
        };
        var cancelButton = {
            name: "times",
            action: function () {
                element.outerHTML = element.innerText;
            },
            text: null,
            tooltip: "Discard",
            isActive: false,
            closeMenuOnClick: true
        };
        return [
            new v1_1.EditMenuSection(fakeWordButton),
            new v1_1.EditMenuSection(acceptButton),
            new v1_1.EditMenuSection(cancelButton)
        ];
    };
    EditMenuSpellCheckProvider = tslib_1.__decorate([
        core_1.Injectable()
    ], EditMenuSpellCheckProvider);
    return EditMenuSpellCheckProvider;
}());
/**
 * Export a 'multi' class provider so that multiple instances of the same provider can coexist.
 * This allows for more than one provider to be registered within one or more bundles.
 */
exports.EDIT_MENU_SPELL_CHECK_PROVIDER = {
    multi: true,
    provide: v1_1.EDIT_MENU_TOKEN,
    useClass: EditMenuSpellCheckProvider
};


/***/ }),

/***/ 100049:
/*!********************************************************************!*\
  !*** ./editor-extender/spell-check/editor-spell-check-provider.ts ***!
  \********************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ 100001);
var core_1 = __webpack_require__(/*! @angular/core */ 100002);
var v1_1 = __webpack_require__(/*! progress-sitefinity-adminapp-sdk/app/api/v1 */ 100003);
var http_1 = __webpack_require__(/*! @angular/common/http */ 100008);
var rxjs_1 = __webpack_require__(/*! rxjs */ 100006);
// This is webpack specific loader syntax for injecting css as <style> tag in header
__webpack_require__(/*! style-loader!css-loader!./editor-spell-check-provider.css */ 100050);
/*
 * NOTE: Replace this example key with your subscription key.
 * For more information on how to get a key check here: https://azure.microsoft.com/en-us/services/cognitive-services/spell-check/
 */
var AZURE_LANGUAGE_SERVICES_API_KEY = '';
/**
 * Indicates the minimum value of certainty that is needed in order a correction to be applied.
 */
var MIN_CERTAINTY = 0.5;
var HOST = 'https://api.cognitive.microsoft.com';
var PATH = '/bing/v7.0/spellcheck';
/**
 * Mode of spellcheck
 * Proof - Meant to provide Office Word like spelling corrections.
 *         It can correct long queries, provide casing corrections and suppresses aggressive corrections.
 * Spell - Meant to provide Search engine like spelling corrections.
 *         It will correct small queries(up to length 65 tokens) without any casing changes and
 *         will be more optimized (perf and relevance) towards search like queries.
 */
var PROOF_MODE = "proof";
var SPELL_MODE = "spell";
/**
 * Currently the proof mode supports only these 3 cultures. For other cultures spell mode should be used.
 * The list is subject to change.
 * For more information check: https://docs.microsoft.com/bg-bg/azure/cognitive-services/bing-spell-check/proof-text
 */
var proofModeCultures = [
    "en-US",
    "es-ES",
    "pt-BR"
];
/**
 * A custom toolbar provider implementation for checheking and correcting the spelling in the kendo editor.
 * Kendo UI Editor custom tools documentation -> https://demos.telerik.com/kendo-ui/editor/custom-tools
 */
var EditorSpellCheckProvider = /** @class */ (function () {
    function EditorSpellCheckProvider(http) {
        this.http = http;
    }
    /**
     * The method that gets invoked when the editor constructs the toolbar actions.
     * @param editorHost The instance of the editor.
     */
    EditorSpellCheckProvider.prototype.getToolBarItems = function (editorHost) {
        var _this = this;
        var SPELL_CHECK_TOOLBAR_ITEM = {
            name: "Spell-check",
            tooltip: "Spell check",
            ordinal: -1,
            exec: function () { return _this.spellCheck(editorHost, _this.culture); }
        };
        return [SPELL_CHECK_TOOLBAR_ITEM];
    };
    EditorSpellCheckProvider.prototype.getToolBarItemsNamesToRemove = function () {
        /**
         * If you want to remove some toolbar items return their names as strings in the array. Order is insignificant.
         * Otherwise return an empty array.
         * Example: return [ "embed" ];
         * The above code will remove the embed toolbar item from the editor.
         * Documentation where you can find all tools' names: https://docs.telerik.com/kendo-ui/api/javascript/ui/editor/configuration/tools
         */
        return [];
    };
    /**
     * This gives access to the Kendo UI Editor configuration object
     * that is used to initialize the editor upon creation
     * Kendo UI Editor configuration Overiview documentation -> https://docs.telerik.com/kendo-ui/controls/editors/editor/overview#configuration
     */
    EditorSpellCheckProvider.prototype.configureEditor = function (configuration) {
        this.culture = configuration.culture;
        return configuration;
    };
    EditorSpellCheckProvider.prototype.spellCheck = function (editorHost, culture) {
        var _this = this;
        var editor = editorHost.getKendoEditor();
        var text = editor.value();
        var textWithoutHTMLTags = this.stripHTML(text);
        var batches = [{
                text: textWithoutHTMLTags,
                startIndex: 0
            }];
        var mode = PROOF_MODE;
        /*
        * NOTE: Spell mode will make a batch of queries.
        * There is a change your subscription plan does not support multiple queries per second.
        * In such case use proof mode.
        */
        if (culture && proofModeCultures.indexOf(culture) === -1) {
            mode = SPELL_MODE;
            batches = this.splitTextInBatches(textWithoutHTMLTags);
        }
        var requests = [];
        batches.forEach(function (batch) {
            requests.push(_this.makeRequest(batch.text, culture, mode));
        });
        rxjs_1.forkJoin(requests).subscribe(function (responses) {
            var lastMarkedErrorIndex = 0;
            responses.forEach(function (response, index) {
                if (response._type == "SpellCheck") {
                    response.flaggedTokens.forEach(function (token) {
                        // find the token in the text
                        var indexOfMisspelledWord = text.indexOf(token.token, lastMarkedErrorIndex);
                        if (indexOfMisspelledWord < token.offset + batches[index].startIndex)
                            return;
                        if (token.suggestions.length <= 0)
                            return;
                        // get the best suggestion if over the min required certainty
                        var suggestion = token.suggestions[0].suggestion;
                        var certainty = token.suggestions[0].score;
                        if (certainty < MIN_CERTAINTY)
                            return;
                        var markedWord = document.createElement("SPAN");
                        markedWord.setAttribute("suggestion", suggestion);
                        markedWord.setAttribute("data-sf-ec-immutable", "");
                        markedWord.setAttribute("custom-edit-menu", "");
                        markedWord.innerText = token.token;
                        // check if word is already marked
                        var indexOfMarkedWord = text.indexOf(markedWord.outerHTML, lastMarkedErrorIndex);
                        if (indexOfMarkedWord !== -1 && indexOfMarkedWord < indexOfMisspelledWord)
                            return;
                        // apply the mark
                        text = text.slice(0, indexOfMisspelledWord)
                            + text.slice(indexOfMisspelledWord, indexOfMisspelledWord + token.token.length).replace(token.token, markedWord.outerHTML)
                            + text.slice(indexOfMisspelledWord + token.token.length);
                        // bump the counter of fixed words
                        lastMarkedErrorIndex = indexOfMisspelledWord + markedWord.outerHTML.length;
                    });
                    editor.value(text);
                    editor.trigger("change");
                }
            });
        }, function (error) {
            alert(error.error.message + " Contact your administrator to resolve this issue.");
        });
    };
    EditorSpellCheckProvider.prototype.makeRequest = function (text, culture, mode) {
        if (culture === void 0) { culture = "en-US"; }
        if (mode === void 0) { mode = "proof"; }
        var query_string = "?mkt=" + culture + "&mode=" + mode;
        var url = HOST + PATH + query_string;
        var body = new URLSearchParams();
        body.set('text', text);
        var options = {
            headers: {
                'Ocp-Apim-Subscription-Key': AZURE_LANGUAGE_SERVICES_API_KEY,
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        };
        return this.http.post(url, body.toString(), options);
    };
    EditorSpellCheckProvider.prototype.stripHTML = function (html) {
        var tmp = document.createElement("DIV");
        tmp.innerHTML = html;
        return tmp.textContent || tmp.innerText || "";
    };
    EditorSpellCheckProvider.prototype.splitTextInBatches = function (text) {
        var batches = [];
        var words = text.split(' ');
        var batch = {
            text: '',
            startIndex: 0
        };
        var lastMarkedBatchIndex = 0;
        words.forEach(function (word) {
            var newBatchText = batch.text === '' ? word : batch.text + ' ' + word;
            if (newBatchText.length <= 65) {
                batch.text = newBatchText;
            }
            else {
                // find the batch in the text
                var indexOfBatch = text.indexOf(batch.text, lastMarkedBatchIndex);
                batch.startIndex = indexOfBatch;
                lastMarkedBatchIndex = indexOfBatch;
                batches.push(JSON.parse(JSON.stringify(batch)));
                batch.text = word;
            }
        });
        batches.push(batch);
        return batches;
    };
    EditorSpellCheckProvider = tslib_1.__decorate([
        core_1.Injectable(),
        tslib_1.__metadata("design:paramtypes", [http_1.HttpClient])
    ], EditorSpellCheckProvider);
    return EditorSpellCheckProvider;
}());
/**
 * Export a 'multi' class provider so that multiple instances of the same provider can coexist.
 * This allows for more than one provider to be registered within one or more bundles.
 */
exports.EDITOR_SPELL_CHECK_PROVIDER = {
    multi: true,
    provide: v1_1.EDITOR_CONFIG_TOKEN,
    useClass: EditorSpellCheckProvider
};


/***/ }),

/***/ 100050:
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./editor-extender/spell-check/editor-spell-check-provider.css ***!
  \***************************************************************************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader!./editor-spell-check-provider.css */ 100051);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ 100007)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {
	module.hot.accept("!!../../node_modules/css-loader/index.js!./editor-spell-check-provider.css", function() {
		var newContent = require("!!../../node_modules/css-loader/index.js!./editor-spell-check-provider.css");

		if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 100051:
/*!***********************************************************************************************!*\
  !*** ./node_modules/css-loader!./editor-extender/spell-check/editor-spell-check-provider.css ***!
  \***********************************************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/lib/css-base.js */ 100005)(false);
// imports


// module
exports.push([module.i, ".k-editor-toolbar .k-i-Spell-correction::before {\r\n    /* Kendo UI Icons: https://docs.telerik.com/kendo-ui/styles-and-layout/icons-web */\r\n    content: \"\\E13C\";\r\n}\r\n\r\n.k-editor-toolbar .k-i-Spell-check::before {\r\n    /* Kendo UI Icons: https://docs.telerik.com/kendo-ui/styles-and-layout/icons-web */\r\n    content: \"\\E68D\";\r\n}\r\n\r\nspan[suggestion] {\r\n    background-color: yellow;\r\n}\r\n", ""]);

// exports


/***/ }),

/***/ 100052:
/*!********************************!*\
  !*** ./item-extender/index.ts ***!
  \********************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ 100001);
var core_1 = __webpack_require__(/*! @angular/core */ 100002);
var item_hooks_provider_1 = __webpack_require__(/*! ./item-hooks-provider */ 100053);
/**
 * The grid extender module.
 */
var ItemExtenderModule = /** @class */ (function () {
    function ItemExtenderModule() {
    }
    ItemExtenderModule = tslib_1.__decorate([
        core_1.NgModule({
            providers: [
                item_hooks_provider_1.ITEM_HOOKS_PROVIDER
            ]
        })
    ], ItemExtenderModule);
    return ItemExtenderModule;
}());
exports.ItemExtenderModule = ItemExtenderModule;


/***/ }),

/***/ 100053:
/*!**********************************************!*\
  !*** ./item-extender/item-hooks-provider.ts ***!
  \**********************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ 100001);
var core_1 = __webpack_require__(/*! @angular/core */ 100002);
var v1_1 = __webpack_require__(/*! progress-sitefinity-adminapp-sdk/app/api/v1 */ 100003);
var CustomItemHooksProvider = /** @class */ (function () {
    function CustomItemHooksProvider() {
    }
    CustomItemHooksProvider.prototype.onItemLoaded = function (item) {
        if (item.data) {
            console.log("Item is loaded: " + item.data.Title);
        }
        else {
            console.log("A new item is being created");
        }
    };
    CustomItemHooksProvider = tslib_1.__decorate([
        core_1.Injectable()
    ], CustomItemHooksProvider);
    return CustomItemHooksProvider;
}());
/**
 * Export a 'multi' class provider so that multiple instances of the same provider can coexist.
 * This allows for more than one provider to be registered within one or more bundles.
 */
exports.ITEM_HOOKS_PROVIDER = {
    multi: true,
    provide: v1_1.ITEM_HOOKS_PROVIDER_TOKEN,
    useClass: CustomItemHooksProvider
};


/***/ }),

/***/ 100054:
/*!************************!*\
  !*** ./theme/index.ts ***!
  \************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ 100001);
var core_1 = __webpack_require__(/*! @angular/core */ 100002);
var common_1 = __webpack_require__(/*! @angular/common */ 100010);
var theme_provider_1 = __webpack_require__(/*! ./theme-provider */ 100055);
var ThemeModule = /** @class */ (function () {
    function ThemeModule() {
    }
    ThemeModule = tslib_1.__decorate([
        core_1.NgModule({
            providers: [
                theme_provider_1.SAMPLE_THEME_PROVIDER
            ],
            imports: [
                common_1.CommonModule
            ]
        })
    ], ThemeModule);
    return ThemeModule;
}());
exports.ThemeModule = ThemeModule;


/***/ }),

/***/ 100055:
/*!*********************************!*\
  !*** ./theme/theme-provider.ts ***!
  \*********************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ 100001);
var core_1 = __webpack_require__(/*! @angular/core */ 100002);
var theme_provider_1 = __webpack_require__(/*! progress-sitefinity-adminapp-sdk/app/api/v1/theme/theme-provider */ 100056);
var theme_variables_1 = __webpack_require__(/*! progress-sitefinity-adminapp-sdk/app/api/v1/theme/theme-variables */ 100057);
var SampleThemeProvider = /** @class */ (function () {
    function SampleThemeProvider() {
        // #region Sample theme variables
        this.sampleThemeVariables = [{
                key: theme_variables_1.ThemeVariables.DefaultButtonBorderColor,
                value: "#333"
            }, {
                key: theme_variables_1.ThemeVariables.DefaultButtonBackgroundColor,
                value: "#FFF"
            }, {
                key: theme_variables_1.ThemeVariables.DefaultButtonColor,
                value: "#000"
            }, {
                key: theme_variables_1.ThemeVariables.DefaultButtonInteractionBorderColor,
                value: "#E4E4E4"
            }, {
                key: theme_variables_1.ThemeVariables.DefaultButtonInteractionBackgroundColor,
                value: "#E4E4E4"
            }, {
                key: theme_variables_1.ThemeVariables.DefaultButtonInteractionColor,
                value: "#333"
            }, {
                key: theme_variables_1.ThemeVariables.DefaultButtonDisabledBorderColor,
                value: "#C2C2C2"
            }, {
                key: theme_variables_1.ThemeVariables.DeleteButtonDisabledBackgroundColor,
                value: "#FFF"
            }, {
                key: theme_variables_1.ThemeVariables.DefaultButtonDisabledColor,
                value: "#C2C2C2"
            }, {
                key: theme_variables_1.ThemeVariables.ActionButtonBorderColor,
                value: "#006CD9"
            }, {
                key: theme_variables_1.ThemeVariables.ActionButtonBackgroundColor,
                value: "#006CD9"
            }, {
                key: theme_variables_1.ThemeVariables.ActionButtonColor,
                value: "#FFF"
            }, {
                key: theme_variables_1.ThemeVariables.ActionButtonInteractionBorderColor,
                value: "#0053C0"
            }, {
                key: theme_variables_1.ThemeVariables.ActionButtonInteractionBackgroundColor,
                value: "#0053C0"
            }, {
                key: theme_variables_1.ThemeVariables.ActionButtonInteractionColor,
                value: "#FFF"
            }, {
                key: theme_variables_1.ThemeVariables.ActionButtonDisabledBorderColor,
                value: "#BFD4F3"
            }, {
                key: theme_variables_1.ThemeVariables.ActionButtonDisabledBackgroundColor,
                value: "#BFD4F3"
            }, {
                key: theme_variables_1.ThemeVariables.ActionButtonDisabledColor,
                value: "#FFF"
            }];
        // #endregion
        this.themes = [{
                name: "Sample",
                themeVariables: this.sampleThemeVariables
            }];
    }
    SampleThemeProvider.prototype.getThemes = function () {
        return this.themes;
    };
    SampleThemeProvider = tslib_1.__decorate([
        core_1.Injectable()
    ], SampleThemeProvider);
    return SampleThemeProvider;
}());
exports.SAMPLE_THEME_PROVIDER = {
    multi: true,
    provide: theme_provider_1.THEME_TOKEN,
    useClass: SampleThemeProvider
};


/***/ }),

/***/ 100056:
/*!********************************************************************************************************************************!*\
  !*** delegated ./node_modules/progress-sitefinity-adminapp-sdk/app/api/v1/theme/theme-provider.js from dll-reference adminapp ***!
  \********************************************************************************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(0).__iris_require__('./node_modules/progress-sitefinity-adminapp-sdk/app/api/v1/theme/theme-provider.js')

/***/ }),

/***/ 100057:
/*!*********************************************************************************************************************************!*\
  !*** delegated ./node_modules/progress-sitefinity-adminapp-sdk/app/api/v1/theme/theme-variables.js from dll-reference adminapp ***!
  \*********************************************************************************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(0).__iris_require__('./node_modules/progress-sitefinity-adminapp-sdk/app/api/v1/theme/theme-variables.js')

/***/ })

},[100000]);
//# sourceMappingURL=sample.extensions.bundle.js.map