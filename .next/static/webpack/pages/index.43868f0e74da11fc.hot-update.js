"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Index; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _bigcommerce_big_design__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @bigcommerce/big-design */ \"./node_modules/@bigcommerce/big-design/dist/es/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_error__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/error */ \"./components/error.tsx\");\n/* harmony import */ var _components_loading__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/loading */ \"./components/loading.tsx\");\n/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_app */ \"./pages/_app.tsx\");\n/* harmony import */ var _context_session__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../context/session */ \"./context/session.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst handleButtonClick = async (item, setLoadingStates, loadingStates, setChannel, inject)=>{\n    setLoadingStates({\n        ...loadingStates,\n        [item._id]: true\n    });\n    //initial alert popup with null value\n    let alertId = null;\n    let url = \"\"; //API Url\n    const authToken = \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1dWlkIjoiMWFmMDVkNGMtMjdjNS00ZjYwLWE5YzEtNDdjZGE0MmZjZjE0IiwiaWF0IjoxNzE4Njg5NzY5LCJleHAiOjE3MTg3NzYxNjl9.shNhfpImxvAYEaR6VpiNFdhhLBziraVI7yFcDrInKso\";\n    let requestOptions; //Authentication token\n    const channelId = item.channelId //Chanel Id\n    ;\n    console.log(item.channelId);\n    try {\n        //Inject Script\n        if (inject) {\n            url = \"https://payu.in.ngrok.io/api/channel/inject\";\n            requestOptions = {\n                method: \"POST\",\n                headers: {\n                    \"Content-Type\": \"application/json\",\n                    \"authorization\": authToken\n                },\n                body: JSON.stringify({\n                    channel_id: channelId\n                })\n            };\n        } else {\n            //Eject Script\n            url = \"https://payu.in.ngrok.io/api/channel/eject\";\n            requestOptions = {\n                method: \"DELETE\",\n                headers: {\n                    \"Content-Type\": \"application/json\",\n                    \"authorization\": authToken\n                },\n                body: JSON.stringify({\n                    channel_id: channelId\n                })\n            };\n        }\n        console.log(url, requestOptions);\n        const response = await fetch(url, requestOptions);\n        if (!response.ok) {\n            throw new Error(\"Network response was not ok: \" + response.statusText);\n        }\n        const result = await response.json();\n        setChannel(result.data);\n        console.log(result.data, \"data\");\n        // Update the alert type to success on successful response\n        alertId = _app__WEBPACK_IMPORTED_MODULE_4__.alertsManager.add({\n            messages: [\n                {\n                    text: item.injectedAt != null ? \"Script is ejecting from \".concat(item.name) : \"Script is injecting to \".concat(item.name)\n                }\n            ],\n            type: \"success\",\n            onClose: ()=>null\n        });\n    } catch (error) {\n        console.error(\"There has been a problem with your fetch operation:\", error);\n        // Update the alert type to error on failure\n        alertId = _app__WEBPACK_IMPORTED_MODULE_4__.alertsManager.add({\n            messages: [\n                {\n                    text: \"There was a problem with your request.\"\n                }\n            ],\n            type: \"error\",\n            onClose: ()=>null\n        });\n        //remove alert manager after 2 seconds\n        setTimeout(()=>{\n            _app__WEBPACK_IMPORTED_MODULE_4__.alertsManager.remove(alertId);\n        }, 2000);\n    } finally{\n        //remove button loading\n        setLoadingStates({\n            ...loadingStates,\n            [item._id]: false\n        });\n        //remove alert manager after 2 seconds\n        setTimeout(()=>{\n            _app__WEBPACK_IMPORTED_MODULE_4__.alertsManager.remove(alertId);\n        }, 2000);\n    }\n};\nfunction Index() {\n    _s();\n    const [Channel, setChannel] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [loadingStates, setLoadingStates] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});\n    const [Token, setToken] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const searchParams = (0,_context_session__WEBPACK_IMPORTED_MODULE_5__.useQuery)();\n    const getChannelList = async ()=>{\n        setLoading(true);\n        setError(null);\n        console.log(Token);\n    // try {\n    //   let url = 'https://payu.in.ngrok.io/api/channel/list';\n    //   const response = await fetch(url, {\n    //     method: 'GET',\n    //     headers: {\n    //       'Content-Type': 'application/json',\n    //       'authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1dWlkIjoiMWFmMDVkNGMtMjdjNS00ZjYwLWE5YzEtNDdjZGE0MmZjZjE0IiwiaWF0IjoxNzE4Njg5NzY5LCJleHAiOjE3MTg3NzYxNjl9.shNhfpImxvAYEaR6VpiNFdhhLBziraVI7yFcDrInKso'\n    //     }\n    //   });\n    //   if (!response.ok) {\n    //     throw new Error('Network response was not ok');\n    //   }\n    //   const result = await response.json();\n    //   setChannel(result.data); // Store data in state\n    //   console.log(result, \"result\");\n    // } catch (error) {\n    //   setError(error.message);\n    //   setLoading(true);\n    // } finally {\n    //   setLoading(false);\n    // }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (searchParams) {\n            setToken(searchParams[1]);\n            getChannelList();\n            return;\n        }\n    }, [\n        Token\n    ]);\n    if (loading) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_loading__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n        fileName: \"/home/raghu/Marmeto/Bigcommerce/payu-bigcommerce/pages/index.tsx\",\n        lineNumber: 144,\n        columnNumber: 23\n    }, this);\n    if (error) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_bigcommerce_big_design__WEBPACK_IMPORTED_MODULE_6__.Panel, {\n        margin: \"xxLarge\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_error__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                error: error\n            }, void 0, false, {\n                fileName: \"/home/raghu/Marmeto/Bigcommerce/payu-bigcommerce/pages/index.tsx\",\n                lineNumber: 147,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_bigcommerce_big_design__WEBPACK_IMPORTED_MODULE_6__.Button, {\n                actionType: \"normal\",\n                isLoading: loading,\n                variant: \"primary\",\n                onClick: ()=>getChannelList(),\n                children: \"Reload\"\n            }, void 0, false, {\n                fileName: \"/home/raghu/Marmeto/Bigcommerce/payu-bigcommerce/pages/index.tsx\",\n                lineNumber: 148,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/raghu/Marmeto/Bigcommerce/payu-bigcommerce/pages/index.tsx\",\n        lineNumber: 146,\n        columnNumber: 5\n    }, this);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_bigcommerce_big_design__WEBPACK_IMPORTED_MODULE_6__.Panel, {\n        margin: \"xxxLarge\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_bigcommerce_big_design__WEBPACK_IMPORTED_MODULE_6__.Box, {\n            children: Channel.length > 0 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                children: Channel.map((item)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_bigcommerce_big_design__WEBPACK_IMPORTED_MODULE_6__.Box, {\n                        backgroundColor: \"secondary20\",\n                        border: \"box\",\n                        borderRadius: \"normal\",\n                        padding: \"small\",\n                        marginBottom: \"medium\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_bigcommerce_big_design__WEBPACK_IMPORTED_MODULE_6__.Flex, {\n                            justifyContent: \"space-between\",\n                            alignItems: \"center\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_bigcommerce_big_design__WEBPACK_IMPORTED_MODULE_6__.FlexItem, {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_bigcommerce_big_design__WEBPACK_IMPORTED_MODULE_6__.Text, {\n                                        bold: true,\n                                        children: item.channelName\n                                    }, void 0, false, {\n                                        fileName: \"/home/raghu/Marmeto/Bigcommerce/payu-bigcommerce/pages/index.tsx\",\n                                        lineNumber: 167,\n                                        columnNumber: 29\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/home/raghu/Marmeto/Bigcommerce/payu-bigcommerce/pages/index.tsx\",\n                                    lineNumber: 167,\n                                    columnNumber: 19\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_bigcommerce_big_design__WEBPACK_IMPORTED_MODULE_6__.FlexItem, {\n                                    children: item.isEnabled ? item.injectedAt != null ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_bigcommerce_big_design__WEBPACK_IMPORTED_MODULE_6__.Button, {\n                                        marginLeft: \"medium\",\n                                        actionType: \"destructive\",\n                                        isLoading: loadingStates[item._id] || false,\n                                        onClick: ()=>handleButtonClick(item, setLoadingStates, loadingStates, setChannel, false),\n                                        children: \"Eject\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/raghu/Marmeto/Bigcommerce/payu-bigcommerce/pages/index.tsx\",\n                                        lineNumber: 171,\n                                        columnNumber: 25\n                                    }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_bigcommerce_big_design__WEBPACK_IMPORTED_MODULE_6__.Button, {\n                                        marginLeft: \"medium\",\n                                        actionType: \"normal\",\n                                        isLoading: loadingStates[item._id] || false,\n                                        onClick: ()=>handleButtonClick(item, setLoadingStates, loadingStates, setChannel, true),\n                                        children: \"Inject\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/raghu/Marmeto/Bigcommerce/payu-bigcommerce/pages/index.tsx\",\n                                        lineNumber: 180,\n                                        columnNumber: 25\n                                    }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_bigcommerce_big_design__WEBPACK_IMPORTED_MODULE_6__.Tooltip, {\n                                        placement: \"right\",\n                                        trigger: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                            className: \"disabled\",\n                                            children: \"Disabled\"\n                                        }, void 0, false, {\n                                            fileName: \"/home/raghu/Marmeto/Bigcommerce/payu-bigcommerce/pages/index.tsx\",\n                                            lineNumber: 190,\n                                            columnNumber: 59\n                                        }, void 0),\n                                        children: \"This channel is not active\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/raghu/Marmeto/Bigcommerce/payu-bigcommerce/pages/index.tsx\",\n                                        lineNumber: 190,\n                                        columnNumber: 23\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/home/raghu/Marmeto/Bigcommerce/payu-bigcommerce/pages/index.tsx\",\n                                    lineNumber: 168,\n                                    columnNumber: 19\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/raghu/Marmeto/Bigcommerce/payu-bigcommerce/pages/index.tsx\",\n                            lineNumber: 166,\n                            columnNumber: 17\n                        }, this)\n                    }, item._id, false, {\n                        fileName: \"/home/raghu/Marmeto/Bigcommerce/payu-bigcommerce/pages/index.tsx\",\n                        lineNumber: 158,\n                        columnNumber: 15\n                    }, this))\n            }, void 0, false)\n        }, void 0, false, {\n            fileName: \"/home/raghu/Marmeto/Bigcommerce/payu-bigcommerce/pages/index.tsx\",\n            lineNumber: 154,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/home/raghu/Marmeto/Bigcommerce/payu-bigcommerce/pages/index.tsx\",\n        lineNumber: 153,\n        columnNumber: 5\n    }, this);\n}\n_s(Index, \"MORfp68BYFDf9Tk9iCQfKEHYvXU=\", false, function() {\n    return [\n        _context_session__WEBPACK_IMPORTED_MODULE_5__.useQuery\n    ];\n});\n_c = Index;\nvar _c;\n$RefreshReg$(_c, \"Index\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNoQkMsUUFBTzt3QkFDUEMsY0FBYTt3QkFDYkMsU0FBUTt3QkFDUkMsY0FBYTtrQ0FHYiw0RUFBQ25FLHlEQUFJQTs0QkFBQ29FLGdCQUFlOzRCQUFnQkMsWUFBVzs7OENBQzlDLDhEQUFDcEUsNkRBQVFBOzhDQUFDLDRFQUFDRix5REFBSUE7d0NBQUN1RSxJQUFJO2tEQUFFNUQsS0FBSzZELFdBQVc7Ozs7Ozs7Ozs7OzhDQUN0Qyw4REFBQ3RFLDZEQUFRQTs4Q0FDTlMsS0FBSzhELFNBQVMsR0FDYjlELEtBQUs4QixVQUFVLElBQUkscUJBQ2pCLDhEQUFDM0MsMkRBQU1BO3dDQUNMNEUsWUFBVzt3Q0FDWGhCLFlBQVc7d0NBQ1hDLFdBQVc5QyxhQUFhLENBQUNGLEtBQUtLLEdBQUcsQ0FBQyxJQUFJO3dDQUN0QzZDLFNBQVMsSUFBTW5ELGtCQUFrQkMsTUFBTUMsa0JBQWtCQyxlQUFlQyxZQUFZO2tEQUNyRjs7Ozs7NkRBSUQsOERBQUNoQiwyREFBTUE7d0NBQ0w0RSxZQUFXO3dDQUNYaEIsWUFBVzt3Q0FDWEMsV0FBVzlDLGFBQWEsQ0FBQ0YsS0FBS0ssR0FBRyxDQUFDLElBQUk7d0NBQ3RDNkMsU0FBUyxJQUFNbkQsa0JBQWtCQyxNQUFNQyxrQkFBa0JDLGVBQWVDLFlBQVk7a0RBQ3JGOzs7Ozs2REFLSCw4REFBQ2YsNERBQU9BO3dDQUFDNEUsV0FBVTt3Q0FBUUMsdUJBQVMsOERBQUNDOzRDQUFPQyxXQUFVO3NEQUFXOzs7Ozs7a0RBQW1COzs7Ozs7Ozs7Ozs7Ozs7Ozt1QkExQnJGbkUsS0FBS0ssR0FBRzs7Ozs7Ozs7Ozs7Ozs7OztBQXVDN0I7R0E3R3dCZ0M7O1FBTUR2QyxzREFBUUE7OztLQU5QdUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4PzA3ZmYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGFuZWwsIEJveCwgQnV0dG9uLCBUb29sdGlwLCBUZXh0LCBGbGV4LCBGbGV4SXRlbSB9IGZyb20gJ0BiaWdjb21tZXJjZS9iaWctZGVzaWduJztcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IEVycm9yTWVzc2FnZSBmcm9tICcuLi9jb21wb25lbnRzL2Vycm9yJztcbmltcG9ydCBMb2FkaW5nIGZyb20gJy4uL2NvbXBvbmVudHMvbG9hZGluZyc7XG5pbXBvcnQgeyBhbGVydHNNYW5hZ2VyIH0gZnJvbSAnLi9fYXBwJztcbmltcG9ydCB7IHVzZVF1ZXJ5IH0gZnJvbSAnLi4vY29udGV4dC9zZXNzaW9uJztcblxuXG5jb25zdCBoYW5kbGVCdXR0b25DbGljayA9IGFzeW5jIChpdGVtLCBzZXRMb2FkaW5nU3RhdGVzLCBsb2FkaW5nU3RhdGVzLCBzZXRDaGFubmVsLCBpbmplY3QpID0+IHtcbiAgc2V0TG9hZGluZ1N0YXRlcyh7IC4uLmxvYWRpbmdTdGF0ZXMsIFtpdGVtLl9pZF06IHRydWUgfSk7XG5cbiAgLy9pbml0aWFsIGFsZXJ0IHBvcHVwIHdpdGggbnVsbCB2YWx1ZVxuICBsZXQgYWxlcnRJZCA9IG51bGw7XG4gIGxldCB1cmwgPSAnJzsgLy9BUEkgVXJsXG4gIGNvbnN0IGF1dGhUb2tlbiA9ICdleUpoYkdjaU9pSklVekkxTmlJc0luUjVjQ0k2SWtwWFZDSjkuZXlKMWRXbGtJam9pTVdGbU1EVmtOR010TWpkak5TMDBaall3TFdFNVl6RXRORGRqWkdFME1tWmpaakUwSWl3aWFXRjBJam94TnpFNE5qZzVOelk1TENKbGVIQWlPakUzTVRnM056WXhOamw5LnNoTmhmcElteHZBWUVhUjZWcGlORmRoaExCemlyYVZJN3lGY0RySW5Lc28nO1xuICBsZXQgcmVxdWVzdE9wdGlvbnM7IC8vQXV0aGVudGljYXRpb24gdG9rZW5cbiAgY29uc3QgY2hhbm5lbElkID0gaXRlbS5jaGFubmVsSWQgLy9DaGFuZWwgSWRcbiAgY29uc29sZS5sb2coaXRlbS5jaGFubmVsSWQpO1xuXG5cbiAgdHJ5IHtcbiAgICAvL0luamVjdCBTY3JpcHRcbiAgICBpZiAoaW5qZWN0KSB7XG4gICAgICB1cmwgPSAnaHR0cHM6Ly9wYXl1LmluLm5ncm9rLmlvL2FwaS9jaGFubmVsL2luamVjdCc7XG5cbiAgICAgIHJlcXVlc3RPcHRpb25zID0ge1xuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICAgJ2F1dGhvcml6YXRpb24nOiBhdXRoVG9rZW5cbiAgICAgICAgfSxcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyBjaGFubmVsX2lkOiBjaGFubmVsSWQgfSksXG4gICAgICB9O1xuICAgIH0gZWxzZSB7XG4gICAgICAvL0VqZWN0IFNjcmlwdFxuICAgICAgdXJsID0gJ2h0dHBzOi8vcGF5dS5pbi5uZ3Jvay5pby9hcGkvY2hhbm5lbC9lamVjdCc7XG5cbiAgICAgIHJlcXVlc3RPcHRpb25zID0ge1xuICAgICAgICBtZXRob2Q6ICdERUxFVEUnLFxuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgICAnYXV0aG9yaXphdGlvbic6IGF1dGhUb2tlblxuICAgICAgICB9LFxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IGNoYW5uZWxfaWQ6IGNoYW5uZWxJZCB9KSxcbiAgICAgIH07XG4gICAgfVxuXG4gICAgY29uc29sZS5sb2codXJsLCByZXF1ZXN0T3B0aW9ucyk7XG5cbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybCwgcmVxdWVzdE9wdGlvbnMpO1xuXG4gICAgaWYgKCFyZXNwb25zZS5vaykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdOZXR3b3JrIHJlc3BvbnNlIHdhcyBub3Qgb2s6ICcgKyByZXNwb25zZS5zdGF0dXNUZXh0KTtcbiAgICB9XG5cbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgc2V0Q2hhbm5lbChyZXN1bHQuZGF0YSk7XG4gICAgY29uc29sZS5sb2cocmVzdWx0LmRhdGEsICdkYXRhJyk7XG5cbiAgICAvLyBVcGRhdGUgdGhlIGFsZXJ0IHR5cGUgdG8gc3VjY2VzcyBvbiBzdWNjZXNzZnVsIHJlc3BvbnNlXG4gICAgYWxlcnRJZCA9IGFsZXJ0c01hbmFnZXIuYWRkKHtcbiAgICAgIG1lc3NhZ2VzOiBbeyB0ZXh0OiBpdGVtLmluamVjdGVkQXQgIT0gbnVsbCA/IGBTY3JpcHQgaXMgZWplY3RpbmcgZnJvbSAke2l0ZW0ubmFtZX1gIDogYFNjcmlwdCBpcyBpbmplY3RpbmcgdG8gJHtpdGVtLm5hbWV9YCB9XSxcbiAgICAgIHR5cGU6ICdzdWNjZXNzJywgLy8gSW5pdGlhbGx5IHNldCB0byBsb2FkaW5nXG4gICAgICBvbkNsb3NlOiAoKSA9PiBudWxsLFxuICAgIH0pO1xuXG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcignVGhlcmUgaGFzIGJlZW4gYSBwcm9ibGVtIHdpdGggeW91ciBmZXRjaCBvcGVyYXRpb246JywgZXJyb3IpO1xuXG4gICAgLy8gVXBkYXRlIHRoZSBhbGVydCB0eXBlIHRvIGVycm9yIG9uIGZhaWx1cmVcbiAgICBhbGVydElkID0gYWxlcnRzTWFuYWdlci5hZGQoe1xuICAgICAgbWVzc2FnZXM6IFt7IHRleHQ6ICdUaGVyZSB3YXMgYSBwcm9ibGVtIHdpdGggeW91ciByZXF1ZXN0LicgfV0sXG4gICAgICB0eXBlOiAnZXJyb3InLFxuICAgICAgb25DbG9zZTogKCkgPT4gbnVsbCxcbiAgICB9KTtcblxuICAgIC8vcmVtb3ZlIGFsZXJ0IG1hbmFnZXIgYWZ0ZXIgMiBzZWNvbmRzXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBhbGVydHNNYW5hZ2VyLnJlbW92ZShhbGVydElkKTtcbiAgICB9LCAyMDAwKTtcblxuICB9IGZpbmFsbHkge1xuICAgIC8vcmVtb3ZlIGJ1dHRvbiBsb2FkaW5nXG4gICAgc2V0TG9hZGluZ1N0YXRlcyh7IC4uLmxvYWRpbmdTdGF0ZXMsIFtpdGVtLl9pZF06IGZhbHNlIH0pO1xuXG4gICAgLy9yZW1vdmUgYWxlcnQgbWFuYWdlciBhZnRlciAyIHNlY29uZHNcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGFsZXJ0c01hbmFnZXIucmVtb3ZlKGFsZXJ0SWQpO1xuICAgIH0sIDIwMDApO1xuICB9XG59O1xuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEluZGV4KCkge1xuICBjb25zdCBbQ2hhbm5lbCwgc2V0Q2hhbm5lbF0gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSB1c2VTdGF0ZShudWxsKTtcbiAgY29uc3QgW2xvYWRpbmdTdGF0ZXMsIHNldExvYWRpbmdTdGF0ZXNdID0gdXNlU3RhdGUoe30pO1xuICBjb25zdCBbVG9rZW4sIHNldFRva2VuXSA9IHVzZVN0YXRlKG51bGwpO1xuICBjb25zdCBzZWFyY2hQYXJhbXMgPSB1c2VRdWVyeSgpO1xuXG5cbiAgY29uc3QgZ2V0Q2hhbm5lbExpc3QgPSBhc3luYyAoKSA9PiB7XG4gICAgc2V0TG9hZGluZyh0cnVlKTtcbiAgICBzZXRFcnJvcihudWxsKTtcbiAgICBjb25zb2xlLmxvZyhUb2tlbik7XG5cblxuICAgIC8vIHRyeSB7XG4gICAgLy8gICBsZXQgdXJsID0gJ2h0dHBzOi8vcGF5dS5pbi5uZ3Jvay5pby9hcGkvY2hhbm5lbC9saXN0JztcblxuICAgIC8vICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwsIHtcbiAgICAvLyAgICAgbWV0aG9kOiAnR0VUJyxcbiAgICAvLyAgICAgaGVhZGVyczoge1xuICAgIC8vICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgLy8gICAgICAgJ2F1dGhvcml6YXRpb24nOiAnZXlKaGJHY2lPaUpJVXpJMU5pSXNJblI1Y0NJNklrcFhWQ0o5LmV5SjFkV2xrSWpvaU1XRm1NRFZrTkdNdE1qZGpOUzAwWmpZd0xXRTVZekV0TkRkalpHRTBNbVpqWmpFMElpd2lhV0YwSWpveE56RTROamc1TnpZNUxDSmxlSEFpT2pFM01UZzNOell4TmpsOS5zaE5oZnBJbXh2QVlFYVI2VnBpTkZkaGhMQnppcmFWSTd5RmNEckluS3NvJ1xuICAgIC8vICAgICB9XG4gICAgLy8gICB9KTtcblxuICAgIC8vICAgaWYgKCFyZXNwb25zZS5vaykge1xuICAgIC8vICAgICB0aHJvdyBuZXcgRXJyb3IoJ05ldHdvcmsgcmVzcG9uc2Ugd2FzIG5vdCBvaycpO1xuICAgIC8vICAgfVxuICAgIC8vICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgIC8vICAgc2V0Q2hhbm5lbChyZXN1bHQuZGF0YSk7IC8vIFN0b3JlIGRhdGEgaW4gc3RhdGVcbiAgICAvLyAgIGNvbnNvbGUubG9nKHJlc3VsdCwgXCJyZXN1bHRcIik7XG4gICAgLy8gfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAvLyAgIHNldEVycm9yKGVycm9yLm1lc3NhZ2UpO1xuICAgIC8vICAgc2V0TG9hZGluZyh0cnVlKTtcbiAgICAvLyB9IGZpbmFsbHkge1xuICAgIC8vICAgc2V0TG9hZGluZyhmYWxzZSk7XG4gICAgLy8gfVxuICB9O1xuXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoc2VhcmNoUGFyYW1zKSB7XG4gICAgICBzZXRUb2tlbihzZWFyY2hQYXJhbXNbMV0pO1xuICAgICAgZ2V0Q2hhbm5lbExpc3QoKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gIH0sIFtUb2tlbl0pO1xuXG5cbiAgaWYgKGxvYWRpbmcpIHJldHVybiA8TG9hZGluZyAvPjtcbiAgaWYgKGVycm9yKSByZXR1cm4gKFxuICAgIDxQYW5lbCBtYXJnaW49XCJ4eExhcmdlXCI+XG4gICAgICA8RXJyb3JNZXNzYWdlIGVycm9yPXtlcnJvcn0gLz5cbiAgICAgIDxCdXR0b24gYWN0aW9uVHlwZT1cIm5vcm1hbFwiIGlzTG9hZGluZz17bG9hZGluZ30gdmFyaWFudD1cInByaW1hcnlcIiBvbkNsaWNrPXsoKSA9PiBnZXRDaGFubmVsTGlzdCgpfT5SZWxvYWQ8L0J1dHRvbj5cbiAgICA8L1BhbmVsPlxuICApO1xuXG4gIHJldHVybiAoXG4gICAgPFBhbmVsIG1hcmdpbj1cInh4eExhcmdlXCI+XG4gICAgICA8Qm94PlxuICAgICAgICB7Q2hhbm5lbC5sZW5ndGggPiAwICYmIChcbiAgICAgICAgICA8PlxuICAgICAgICAgICAge0NoYW5uZWwubWFwKChpdGVtKSA9PiAoXG4gICAgICAgICAgICAgIDxCb3hcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I9XCJzZWNvbmRhcnkyMFwiXG4gICAgICAgICAgICAgICAgYm9yZGVyPVwiYm94XCJcbiAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM9XCJub3JtYWxcIlxuICAgICAgICAgICAgICAgIHBhZGRpbmc9XCJzbWFsbFwiXG4gICAgICAgICAgICAgICAgbWFyZ2luQm90dG9tPVwibWVkaXVtXCJcbiAgICAgICAgICAgICAgICBrZXk9e2l0ZW0uX2lkfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPEZsZXgganVzdGlmeUNvbnRlbnQ9XCJzcGFjZS1iZXR3ZWVuXCIgYWxpZ25JdGVtcz1cImNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgPEZsZXhJdGVtPjxUZXh0IGJvbGQ+e2l0ZW0uY2hhbm5lbE5hbWV9PC9UZXh0PjwvRmxleEl0ZW0+XG4gICAgICAgICAgICAgICAgICA8RmxleEl0ZW0+XG4gICAgICAgICAgICAgICAgICAgIHtpdGVtLmlzRW5hYmxlZCA/IChcbiAgICAgICAgICAgICAgICAgICAgICBpdGVtLmluamVjdGVkQXQgIT0gbnVsbCA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luTGVmdD1cIm1lZGl1bVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGFjdGlvblR5cGU9XCJkZXN0cnVjdGl2ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlzTG9hZGluZz17bG9hZGluZ1N0YXRlc1tpdGVtLl9pZF0gfHwgZmFsc2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZUJ1dHRvbkNsaWNrKGl0ZW0sIHNldExvYWRpbmdTdGF0ZXMsIGxvYWRpbmdTdGF0ZXMsIHNldENoYW5uZWwsIGZhbHNlKX1cbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgRWplY3RcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbkxlZnQ9XCJtZWRpdW1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBhY3Rpb25UeXBlPVwibm9ybWFsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaXNMb2FkaW5nPXtsb2FkaW5nU3RhdGVzW2l0ZW0uX2lkXSB8fCBmYWxzZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlQnV0dG9uQ2xpY2soaXRlbSwgc2V0TG9hZGluZ1N0YXRlcywgbG9hZGluZ1N0YXRlcywgc2V0Q2hhbm5lbCwgdHJ1ZSl9XG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIEluamVjdFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgICAgICAgIDxUb29sdGlwIHBsYWNlbWVudD1cInJpZ2h0XCIgdHJpZ2dlcj17PGJ1dHRvbiBjbGFzc05hbWU9J2Rpc2FibGVkJz5EaXNhYmxlZDwvYnV0dG9uPn0+XG4gICAgICAgICAgICAgICAgICAgICAgICBUaGlzIGNoYW5uZWwgaXMgbm90IGFjdGl2ZVxuICAgICAgICAgICAgICAgICAgICAgIDwvVG9vbHRpcD5cbiAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgIDwvRmxleEl0ZW0+XG4gICAgICAgICAgICAgICAgPC9GbGV4PlxuICAgICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgIDwvPlxuICAgICAgICApfVxuICAgICAgPC9Cb3g+XG4gICAgPC9QYW5lbD5cbiAgKTtcbn1cblxuIl0sIm5hbWVzIjpbIlBhbmVsIiwiQm94IiwiQnV0dG9uIiwiVG9vbHRpcCIsIlRleHQiLCJGbGV4IiwiRmxleEl0ZW0iLCJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiRXJyb3JNZXNzYWdlIiwiTG9hZGluZyIsImFsZXJ0c01hbmFnZXIiLCJ1c2VRdWVyeSIsImhhbmRsZUJ1dHRvbkNsaWNrIiwiaXRlbSIsInNldExvYWRpbmdTdGF0ZXMiLCJsb2FkaW5nU3RhdGVzIiwic2V0Q2hhbm5lbCIsImluamVjdCIsIl9pZCIsImFsZXJ0SWQiLCJ1cmwiLCJhdXRoVG9rZW4iLCJyZXF1ZXN0T3B0aW9ucyIsImNoYW5uZWxJZCIsImNvbnNvbGUiLCJsb2ciLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJjaGFubmVsX2lkIiwicmVzcG9uc2UiLCJmZXRjaCIsIm9rIiwiRXJyb3IiLCJzdGF0dXNUZXh0IiwicmVzdWx0IiwianNvbiIsImRhdGEiLCJhZGQiLCJtZXNzYWdlcyIsInRleHQiLCJpbmplY3RlZEF0IiwibmFtZSIsInR5cGUiLCJvbkNsb3NlIiwiZXJyb3IiLCJzZXRUaW1lb3V0IiwicmVtb3ZlIiwiSW5kZXgiLCJDaGFubmVsIiwibG9hZGluZyIsInNldExvYWRpbmciLCJzZXRFcnJvciIsIlRva2VuIiwic2V0VG9rZW4iLCJzZWFyY2hQYXJhbXMiLCJnZXRDaGFubmVsTGlzdCIsIm1hcmdpbiIsImFjdGlvblR5cGUiLCJpc0xvYWRpbmciLCJ2YXJpYW50Iiwib25DbGljayIsImxlbmd0aCIsIm1hcCIsImJhY2tncm91bmRDb2xvciIsImJvcmRlciIsImJvcmRlclJhZGl1cyIsInBhZGRpbmciLCJtYXJnaW5Cb3R0b20iLCJqdXN0aWZ5Q29udGVudCIsImFsaWduSXRlbXMiLCJib2xkIiwiY2hhbm5lbE5hbWUiLCJpc0VuYWJsZWQiLCJtYXJnaW5MZWZ0IiwicGxhY2VtZW50IiwidHJpZ2dlciIsImJ1dHRvbiIsImNsYXNzTmFtZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.tsx\n"));

/***/ })

});