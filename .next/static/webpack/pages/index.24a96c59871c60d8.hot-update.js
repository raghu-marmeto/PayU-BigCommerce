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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Index; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _bigcommerce_big_design__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @bigcommerce/big-design */ \"./node_modules/@bigcommerce/big-design/dist/es/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_error__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/error */ \"./components/error.tsx\");\n/* harmony import */ var _components_loading__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/loading */ \"./components/loading.tsx\");\n/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_app */ \"./pages/_app.tsx\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/navigation */ \"./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_5__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst handleButtonClick = async (item, setLoadingStates, loadingStates, setChannel, inject)=>{\n    setLoadingStates({\n        ...loadingStates,\n        [item._id]: true\n    });\n    //initial alert popup with null value\n    let alertId = null;\n    let url = \"\"; //API Url\n    const authToken = \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1dWlkIjoiMWFmMDVkNGMtMjdjNS00ZjYwLWE5YzEtNDdjZGE0MmZjZjE0IiwiaWF0IjoxNzE4Njg5NzY5LCJleHAiOjE3MTg3NzYxNjl9.shNhfpImxvAYEaR6VpiNFdhhLBziraVI7yFcDrInKso\";\n    let requestOptions; //Authentication token\n    const channelId = item.channelId //Chanel Id\n    ;\n    console.log(item.channelId);\n    try {\n        //Inject Script\n        if (inject) {\n            url = \"https://payu.in.ngrok.io/api/channel/inject\";\n            requestOptions = {\n                method: \"POST\",\n                headers: {\n                    \"Content-Type\": \"application/json\",\n                    \"authorization\": authToken\n                },\n                body: JSON.stringify({\n                    channel_id: channelId\n                })\n            };\n        } else {\n            //Eject Script\n            url = \"https://payu.in.ngrok.io/api/channel/eject\";\n            requestOptions = {\n                method: \"DELETE\",\n                headers: {\n                    \"Content-Type\": \"application/json\",\n                    \"authorization\": authToken\n                },\n                body: JSON.stringify({\n                    channel_id: channelId\n                })\n            };\n        }\n        console.log(url, requestOptions);\n        const response = await fetch(url, requestOptions);\n        if (!response.ok) {\n            throw new Error(\"Network response was not ok: \" + response.statusText);\n        }\n        const result = await response.json();\n        setChannel(result.data);\n        console.log(result.data, \"data\");\n        // Update the alert type to success on successful response\n        alertId = _app__WEBPACK_IMPORTED_MODULE_4__.alertsManager.add({\n            messages: [\n                {\n                    text: item.injectedAt != null ? \"Script is ejecting from \".concat(item.name) : \"Script is injecting to \".concat(item.name)\n                }\n            ],\n            type: \"success\",\n            onClose: ()=>null\n        });\n    } catch (error) {\n        console.error(\"There has been a problem with your fetch operation:\", error);\n        // Update the alert type to error on failure\n        alertId = _app__WEBPACK_IMPORTED_MODULE_4__.alertsManager.add({\n            messages: [\n                {\n                    text: \"There was a problem with your request.\"\n                }\n            ],\n            type: \"error\",\n            onClose: ()=>null\n        });\n        //remove alert manager after 2 seconds\n        setTimeout(()=>{\n            _app__WEBPACK_IMPORTED_MODULE_4__.alertsManager.remove(alertId);\n        }, 2000);\n    } finally{\n        //remove button loading\n        setLoadingStates({\n            ...loadingStates,\n            [item._id]: false\n        });\n        //remove alert manager after 2 seconds\n        setTimeout(()=>{\n            _app__WEBPACK_IMPORTED_MODULE_4__.alertsManager.remove(alertId);\n        }, 2000);\n    }\n};\nfunction Index() {\n    _s();\n    const [Channel, setChannel] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [loadingStates, setLoadingStates] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});\n    const [Token, setToken] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [searchParams] = (0,next_navigation__WEBPACK_IMPORTED_MODULE_5__.useSearchParams)();\n    const getChannelList = async ()=>{\n        setLoading(true);\n        setError(null);\n        try {\n            let url = \"https://payu.in.ngrok.io/api/channel/list\";\n            const response = await fetch(url, {\n                method: \"GET\",\n                headers: {\n                    \"Content-Type\": \"application/json\",\n                    \"authorization\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1dWlkIjoiMWFmMDVkNGMtMjdjNS00ZjYwLWE5YzEtNDdjZGE0MmZjZjE0IiwiaWF0IjoxNzE4Njg5NzY5LCJleHAiOjE3MTg3NzYxNjl9.shNhfpImxvAYEaR6VpiNFdhhLBziraVI7yFcDrInKso\"\n                }\n            });\n            if (!response.ok) {\n                throw new Error(\"Network response was not ok\");\n            }\n            const result = await response.json();\n            setChannel(result.data); // Store data in state\n            console.log(result, \"result\");\n        } catch (error) {\n            setError(error.message);\n            setLoading(true);\n        } finally{\n            setLoading(false);\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        setToken(searchParams);\n        getChannelList();\n    }, [\n        Token\n    ]);\n    if (loading) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_loading__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n        fileName: \"/home/raghu/Marmeto/Bigcommerce/payu-bigcommerce/pages/index.tsx\",\n        lineNumber: 136,\n        columnNumber: 23\n    }, this);\n    if (error) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_bigcommerce_big_design__WEBPACK_IMPORTED_MODULE_6__.Panel, {\n        margin: \"xxLarge\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_error__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                error: error\n            }, void 0, false, {\n                fileName: \"/home/raghu/Marmeto/Bigcommerce/payu-bigcommerce/pages/index.tsx\",\n                lineNumber: 139,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_bigcommerce_big_design__WEBPACK_IMPORTED_MODULE_6__.Button, {\n                actionType: \"normal\",\n                isLoading: loading,\n                variant: \"primary\",\n                onClick: ()=>getChannelList(),\n                children: \"Reload\"\n            }, void 0, false, {\n                fileName: \"/home/raghu/Marmeto/Bigcommerce/payu-bigcommerce/pages/index.tsx\",\n                lineNumber: 140,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/raghu/Marmeto/Bigcommerce/payu-bigcommerce/pages/index.tsx\",\n        lineNumber: 138,\n        columnNumber: 5\n    }, this);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_bigcommerce_big_design__WEBPACK_IMPORTED_MODULE_6__.Panel, {\n        margin: \"xxxLarge\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_bigcommerce_big_design__WEBPACK_IMPORTED_MODULE_6__.Box, {\n            children: Channel.length > 0 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                children: Channel.map((item)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_bigcommerce_big_design__WEBPACK_IMPORTED_MODULE_6__.Box, {\n                        backgroundColor: \"secondary20\",\n                        border: \"box\",\n                        borderRadius: \"normal\",\n                        padding: \"small\",\n                        marginBottom: \"medium\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_bigcommerce_big_design__WEBPACK_IMPORTED_MODULE_6__.Flex, {\n                            justifyContent: \"space-between\",\n                            alignItems: \"center\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_bigcommerce_big_design__WEBPACK_IMPORTED_MODULE_6__.FlexItem, {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_bigcommerce_big_design__WEBPACK_IMPORTED_MODULE_6__.Text, {\n                                        bold: true,\n                                        children: item.channelName\n                                    }, void 0, false, {\n                                        fileName: \"/home/raghu/Marmeto/Bigcommerce/payu-bigcommerce/pages/index.tsx\",\n                                        lineNumber: 159,\n                                        columnNumber: 29\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/home/raghu/Marmeto/Bigcommerce/payu-bigcommerce/pages/index.tsx\",\n                                    lineNumber: 159,\n                                    columnNumber: 19\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_bigcommerce_big_design__WEBPACK_IMPORTED_MODULE_6__.FlexItem, {\n                                    children: item.isEnabled ? item.injectedAt != null ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_bigcommerce_big_design__WEBPACK_IMPORTED_MODULE_6__.Button, {\n                                        marginLeft: \"medium\",\n                                        actionType: \"destructive\",\n                                        isLoading: loadingStates[item._id] || false,\n                                        onClick: ()=>handleButtonClick(item, setLoadingStates, loadingStates, setChannel, false),\n                                        children: \"Eject\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/raghu/Marmeto/Bigcommerce/payu-bigcommerce/pages/index.tsx\",\n                                        lineNumber: 163,\n                                        columnNumber: 25\n                                    }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_bigcommerce_big_design__WEBPACK_IMPORTED_MODULE_6__.Button, {\n                                        marginLeft: \"medium\",\n                                        actionType: \"normal\",\n                                        isLoading: loadingStates[item._id] || false,\n                                        onClick: ()=>handleButtonClick(item, setLoadingStates, loadingStates, setChannel, true),\n                                        children: \"Inject\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/raghu/Marmeto/Bigcommerce/payu-bigcommerce/pages/index.tsx\",\n                                        lineNumber: 172,\n                                        columnNumber: 25\n                                    }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_bigcommerce_big_design__WEBPACK_IMPORTED_MODULE_6__.Tooltip, {\n                                        placement: \"right\",\n                                        trigger: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                            className: \"disabled\",\n                                            children: \"Disabled\"\n                                        }, void 0, false, {\n                                            fileName: \"/home/raghu/Marmeto/Bigcommerce/payu-bigcommerce/pages/index.tsx\",\n                                            lineNumber: 182,\n                                            columnNumber: 59\n                                        }, void 0),\n                                        children: \"This channel is not active\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/raghu/Marmeto/Bigcommerce/payu-bigcommerce/pages/index.tsx\",\n                                        lineNumber: 182,\n                                        columnNumber: 23\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/home/raghu/Marmeto/Bigcommerce/payu-bigcommerce/pages/index.tsx\",\n                                    lineNumber: 160,\n                                    columnNumber: 19\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/raghu/Marmeto/Bigcommerce/payu-bigcommerce/pages/index.tsx\",\n                            lineNumber: 158,\n                            columnNumber: 17\n                        }, this)\n                    }, item._id, false, {\n                        fileName: \"/home/raghu/Marmeto/Bigcommerce/payu-bigcommerce/pages/index.tsx\",\n                        lineNumber: 150,\n                        columnNumber: 15\n                    }, this))\n            }, void 0, false)\n        }, void 0, false, {\n            fileName: \"/home/raghu/Marmeto/Bigcommerce/payu-bigcommerce/pages/index.tsx\",\n            lineNumber: 146,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/home/raghu/Marmeto/Bigcommerce/payu-bigcommerce/pages/index.tsx\",\n        lineNumber: 145,\n        columnNumber: 5\n    }, this);\n}\n_s(Index, \"yablNt4F4f5NlpbvULfn/ws3oUE=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_5__.useSearchParams\n    ];\n});\n_c = Index;\nvar _c;\n$RefreshReg$(_c, \"Index\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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ZSxHQUFHLENBQUMsQ0FBQ3JELHFCQUNaLDhEQUFDZCx3REFBR0E7d0JBQ0ZvRSxpQkFBZ0I7d0JBQ2hCQyxRQUFPO3dCQUNQQyxjQUFhO3dCQUNiQyxTQUFRO3dCQUNSQyxjQUFhO2tDQUdiLDRFQUFDcEUseURBQUlBOzRCQUFDcUUsZ0JBQWU7NEJBQWdCQyxZQUFXOzs4Q0FDOUMsOERBQUNyRSw2REFBUUE7OENBQUMsNEVBQUNGLHlEQUFJQTt3Q0FBQ3dFLElBQUk7a0RBQUU3RCxLQUFLOEQsV0FBVzs7Ozs7Ozs7Ozs7OENBQ3RDLDhEQUFDdkUsNkRBQVFBOzhDQUNOUyxLQUFLK0QsU0FBUyxHQUNiL0QsS0FBSzhCLFVBQVUsSUFBSSxxQkFDakIsOERBQUMzQywyREFBTUE7d0NBQ0w2RSxZQUFXO3dDQUNYaEIsWUFBVzt3Q0FDWEMsV0FBVy9DLGFBQWEsQ0FBQ0YsS0FBS0ssR0FBRyxDQUFDLElBQUk7d0NBQ3RDOEMsU0FBUyxJQUFNcEQsa0JBQWtCQyxNQUFNQyxrQkFBa0JDLGVBQWVDLFlBQVk7a0RBQ3JGOzs7Ozs2REFJRCw4REFBQ2hCLDJEQUFNQTt3Q0FDTDZFLFlBQVc7d0NBQ1hoQixZQUFXO3dDQUNYQyxXQUFXL0MsYUFBYSxDQUFDRixLQUFLSyxHQUFHLENBQUMsSUFBSTt3Q0FDdEM4QyxTQUFTLElBQU1wRCxrQkFBa0JDLE1BQU1DLGtCQUFrQkMsZUFBZUMsWUFBWTtrREFDckY7Ozs7OzZEQUtILDhEQUFDZiw0REFBT0E7d0NBQUM2RSxXQUFVO3dDQUFRQyx1QkFBUyw4REFBQ0M7NENBQU9DLFdBQVU7c0RBQVc7Ozs7OztrREFBbUI7Ozs7Ozs7Ozs7Ozs7Ozs7O3VCQTFCckZwRSxLQUFLSyxHQUFHOzs7Ozs7Ozs7Ozs7Ozs7O0FBdUM3QjtHQXRHd0JnQzs7UUFNQ3ZDLDREQUFlQTs7O0tBTmhCdUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4PzA3ZmYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGFuZWwsIEJveCwgQnV0dG9uLCBUb29sdGlwLCBUZXh0LCBGbGV4LCBGbGV4SXRlbSB9IGZyb20gJ0BiaWdjb21tZXJjZS9iaWctZGVzaWduJztcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IEVycm9yTWVzc2FnZSBmcm9tICcuLi9jb21wb25lbnRzL2Vycm9yJztcbmltcG9ydCBMb2FkaW5nIGZyb20gJy4uL2NvbXBvbmVudHMvbG9hZGluZyc7XG5pbXBvcnQgeyBhbGVydHNNYW5hZ2VyIH0gZnJvbSAnLi9fYXBwJztcbmltcG9ydCB7IHVzZVNlYXJjaFBhcmFtcyB9IGZyb20gJ25leHQvbmF2aWdhdGlvbic7XG5cbmNvbnN0IGhhbmRsZUJ1dHRvbkNsaWNrID0gYXN5bmMgKGl0ZW0sIHNldExvYWRpbmdTdGF0ZXMsIGxvYWRpbmdTdGF0ZXMsIHNldENoYW5uZWwsIGluamVjdCkgPT4ge1xuICBzZXRMb2FkaW5nU3RhdGVzKHsgLi4ubG9hZGluZ1N0YXRlcywgW2l0ZW0uX2lkXTogdHJ1ZSB9KTtcblxuICAvL2luaXRpYWwgYWxlcnQgcG9wdXAgd2l0aCBudWxsIHZhbHVlXG4gIGxldCBhbGVydElkID0gbnVsbDtcbiAgbGV0IHVybCA9ICcnOyAvL0FQSSBVcmxcbiAgY29uc3QgYXV0aFRva2VuID0gJ2V5SmhiR2NpT2lKSVV6STFOaUlzSW5SNWNDSTZJa3BYVkNKOS5leUoxZFdsa0lqb2lNV0ZtTURWa05HTXRNamRqTlMwMFpqWXdMV0U1WXpFdE5EZGpaR0UwTW1aalpqRTBJaXdpYVdGMElqb3hOekU0TmpnNU56WTVMQ0psZUhBaU9qRTNNVGczTnpZeE5qbDkuc2hOaGZwSW14dkFZRWFSNlZwaU5GZGhoTEJ6aXJhVkk3eUZjRHJJbktzbyc7XG4gIGxldCByZXF1ZXN0T3B0aW9uczsgLy9BdXRoZW50aWNhdGlvbiB0b2tlblxuICBjb25zdCBjaGFubmVsSWQgPSBpdGVtLmNoYW5uZWxJZCAvL0NoYW5lbCBJZFxuICBjb25zb2xlLmxvZyhpdGVtLmNoYW5uZWxJZCk7XG4gIFxuXG4gIHRyeSB7XG4gICAgLy9JbmplY3QgU2NyaXB0XG4gICAgaWYgKGluamVjdCkge1xuICAgICAgdXJsID0gJ2h0dHBzOi8vcGF5dS5pbi5uZ3Jvay5pby9hcGkvY2hhbm5lbC9pbmplY3QnO1xuXG4gICAgICByZXF1ZXN0T3B0aW9ucyA9IHtcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgIGhlYWRlcnM6IHsgXG4gICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyAsXG4gICAgICAgICAgJ2F1dGhvcml6YXRpb24nOiBhdXRoVG9rZW5cbiAgICAgICAgfSxcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyBjaGFubmVsX2lkOiBjaGFubmVsSWQgfSksXG4gICAgICB9O1xuICAgIH0gZWxzZSB7XG4gICAgICAvL0VqZWN0IFNjcmlwdFxuICAgICAgdXJsID0gJ2h0dHBzOi8vcGF5dS5pbi5uZ3Jvay5pby9hcGkvY2hhbm5lbC9lamVjdCc7XG5cbiAgICAgIHJlcXVlc3RPcHRpb25zID0ge1xuICAgICAgICBtZXRob2Q6ICdERUxFVEUnLFxuICAgICAgICBoZWFkZXJzOiB7IFxuICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgLFxuICAgICAgICAgICdhdXRob3JpemF0aW9uJzogYXV0aFRva2VuXG4gICAgICAgIH0sXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgY2hhbm5lbF9pZDogY2hhbm5lbElkIH0pLFxuICAgICAgfTtcbiAgICB9XG5cbiAgICBjb25zb2xlLmxvZyh1cmwsIHJlcXVlc3RPcHRpb25zKTtcbiAgICBcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybCwgcmVxdWVzdE9wdGlvbnMpO1xuXG4gICAgaWYgKCFyZXNwb25zZS5vaykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdOZXR3b3JrIHJlc3BvbnNlIHdhcyBub3Qgb2s6ICcgKyByZXNwb25zZS5zdGF0dXNUZXh0KTtcbiAgICB9XG5cbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgc2V0Q2hhbm5lbChyZXN1bHQuZGF0YSk7XG4gICAgY29uc29sZS5sb2cocmVzdWx0LmRhdGEsICdkYXRhJyk7XG5cbiAgICAvLyBVcGRhdGUgdGhlIGFsZXJ0IHR5cGUgdG8gc3VjY2VzcyBvbiBzdWNjZXNzZnVsIHJlc3BvbnNlXG4gICAgYWxlcnRJZCA9IGFsZXJ0c01hbmFnZXIuYWRkKHtcbiAgICAgIG1lc3NhZ2VzOiBbeyB0ZXh0OiBpdGVtLmluamVjdGVkQXQgIT0gbnVsbCA/IGBTY3JpcHQgaXMgZWplY3RpbmcgZnJvbSAke2l0ZW0ubmFtZX1gIDogYFNjcmlwdCBpcyBpbmplY3RpbmcgdG8gJHtpdGVtLm5hbWV9YCB9XSxcbiAgICAgIHR5cGU6ICdzdWNjZXNzJywgLy8gSW5pdGlhbGx5IHNldCB0byBsb2FkaW5nXG4gICAgICBvbkNsb3NlOiAoKSA9PiBudWxsLFxuICAgIH0pO1xuXG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcignVGhlcmUgaGFzIGJlZW4gYSBwcm9ibGVtIHdpdGggeW91ciBmZXRjaCBvcGVyYXRpb246JywgZXJyb3IpO1xuXG4gICAgLy8gVXBkYXRlIHRoZSBhbGVydCB0eXBlIHRvIGVycm9yIG9uIGZhaWx1cmVcbiAgICBhbGVydElkID0gYWxlcnRzTWFuYWdlci5hZGQoe1xuICAgICAgbWVzc2FnZXM6IFt7IHRleHQ6ICdUaGVyZSB3YXMgYSBwcm9ibGVtIHdpdGggeW91ciByZXF1ZXN0LicgfV0sXG4gICAgICB0eXBlOiAnZXJyb3InLFxuICAgICAgb25DbG9zZTogKCkgPT4gbnVsbCxcbiAgICB9KTtcblxuICAgIC8vcmVtb3ZlIGFsZXJ0IG1hbmFnZXIgYWZ0ZXIgMiBzZWNvbmRzXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBhbGVydHNNYW5hZ2VyLnJlbW92ZShhbGVydElkKTtcbiAgICB9LCAyMDAwKTtcblxuICB9IGZpbmFsbHkge1xuICAgIC8vcmVtb3ZlIGJ1dHRvbiBsb2FkaW5nXG4gICAgc2V0TG9hZGluZ1N0YXRlcyh7IC4uLmxvYWRpbmdTdGF0ZXMsIFtpdGVtLl9pZF06IGZhbHNlIH0pO1xuXG4gICAgLy9yZW1vdmUgYWxlcnQgbWFuYWdlciBhZnRlciAyIHNlY29uZHNcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGFsZXJ0c01hbmFnZXIucmVtb3ZlKGFsZXJ0SWQpO1xuICAgIH0sIDIwMDApO1xuICB9XG59O1xuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEluZGV4KCkge1xuICBjb25zdCBbQ2hhbm5lbCwgc2V0Q2hhbm5lbF0gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSB1c2VTdGF0ZShudWxsKTtcbiAgY29uc3QgW2xvYWRpbmdTdGF0ZXMsIHNldExvYWRpbmdTdGF0ZXNdID0gdXNlU3RhdGUoe30pO1xuICBjb25zdCBbVG9rZW4sIHNldFRva2VuXSA9IHVzZVN0YXRlKG51bGwpO1xuICBjb25zdCBbc2VhcmNoUGFyYW1zXSA9IHVzZVNlYXJjaFBhcmFtcygpO1xuICBcblxuICBjb25zdCBnZXRDaGFubmVsTGlzdCA9IGFzeW5jICgpID0+IHtcbiAgICBzZXRMb2FkaW5nKHRydWUpO1xuICAgIHNldEVycm9yKG51bGwpO1xuXG4gICAgdHJ5IHtcbiAgICAgIGxldCB1cmwgPSAnaHR0cHM6Ly9wYXl1LmluLm5ncm9rLmlvL2FwaS9jaGFubmVsL2xpc3QnO1xuXG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybCwge1xuICAgICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgICAnYXV0aG9yaXphdGlvbic6ICdleUpoYkdjaU9pSklVekkxTmlJc0luUjVjQ0k2SWtwWFZDSjkuZXlKMWRXbGtJam9pTVdGbU1EVmtOR010TWpkak5TMDBaall3TFdFNVl6RXRORGRqWkdFME1tWmpaakUwSWl3aWFXRjBJam94TnpFNE5qZzVOelk1TENKbGVIQWlPakUzTVRnM056WXhOamw5LnNoTmhmcElteHZBWUVhUjZWcGlORmRoaExCemlyYVZJN3lGY0RySW5Lc28nXG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignTmV0d29yayByZXNwb25zZSB3YXMgbm90IG9rJyk7XG4gICAgICB9XG4gICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgICBzZXRDaGFubmVsKHJlc3VsdC5kYXRhKTsgLy8gU3RvcmUgZGF0YSBpbiBzdGF0ZVxuICAgICAgY29uc29sZS5sb2cocmVzdWx0LCBcInJlc3VsdFwiKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgc2V0RXJyb3IoZXJyb3IubWVzc2FnZSk7XG4gICAgICBzZXRMb2FkaW5nKHRydWUpO1xuICAgIH0gZmluYWxseSB7XG4gICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgICB9XG4gIH07XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBzZXRUb2tlbihzZWFyY2hQYXJhbXMpXG4gICAgZ2V0Q2hhbm5lbExpc3QoKTtcbiAgfSwgW1Rva2VuXSk7XG5cbiAgaWYgKGxvYWRpbmcpIHJldHVybiA8TG9hZGluZyAvPjtcbiAgaWYgKGVycm9yKSByZXR1cm4gKFxuICAgIDxQYW5lbCBtYXJnaW49XCJ4eExhcmdlXCI+XG4gICAgICA8RXJyb3JNZXNzYWdlIGVycm9yPXtlcnJvcn0gLz5cbiAgICAgIDxCdXR0b24gYWN0aW9uVHlwZT1cIm5vcm1hbFwiIGlzTG9hZGluZz17bG9hZGluZ30gdmFyaWFudD1cInByaW1hcnlcIiBvbkNsaWNrPXsoKSA9PiBnZXRDaGFubmVsTGlzdCgpfT5SZWxvYWQ8L0J1dHRvbj5cbiAgICA8L1BhbmVsPlxuICApO1xuXG4gIHJldHVybiAoXG4gICAgPFBhbmVsIG1hcmdpbj1cInh4eExhcmdlXCI+XG4gICAgICA8Qm94PlxuICAgICAgICB7Q2hhbm5lbC5sZW5ndGggPiAwICYmIChcbiAgICAgICAgICA8PlxuICAgICAgICAgICAge0NoYW5uZWwubWFwKChpdGVtKSA9PiAoXG4gICAgICAgICAgICAgIDxCb3hcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I9XCJzZWNvbmRhcnkyMFwiXG4gICAgICAgICAgICAgICAgYm9yZGVyPVwiYm94XCJcbiAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM9XCJub3JtYWxcIlxuICAgICAgICAgICAgICAgIHBhZGRpbmc9XCJzbWFsbFwiXG4gICAgICAgICAgICAgICAgbWFyZ2luQm90dG9tPVwibWVkaXVtXCJcbiAgICAgICAgICAgICAgICBrZXk9e2l0ZW0uX2lkfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPEZsZXgganVzdGlmeUNvbnRlbnQ9XCJzcGFjZS1iZXR3ZWVuXCIgYWxpZ25JdGVtcz1cImNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgPEZsZXhJdGVtPjxUZXh0IGJvbGQ+e2l0ZW0uY2hhbm5lbE5hbWV9PC9UZXh0PjwvRmxleEl0ZW0+XG4gICAgICAgICAgICAgICAgICA8RmxleEl0ZW0+XG4gICAgICAgICAgICAgICAgICAgIHtpdGVtLmlzRW5hYmxlZCA/IChcbiAgICAgICAgICAgICAgICAgICAgICBpdGVtLmluamVjdGVkQXQgIT0gbnVsbCA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luTGVmdD1cIm1lZGl1bVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGFjdGlvblR5cGU9XCJkZXN0cnVjdGl2ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlzTG9hZGluZz17bG9hZGluZ1N0YXRlc1tpdGVtLl9pZF0gfHwgZmFsc2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZUJ1dHRvbkNsaWNrKGl0ZW0sIHNldExvYWRpbmdTdGF0ZXMsIGxvYWRpbmdTdGF0ZXMsIHNldENoYW5uZWwsIGZhbHNlKX1cbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgRWplY3RcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbkxlZnQ9XCJtZWRpdW1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBhY3Rpb25UeXBlPVwibm9ybWFsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaXNMb2FkaW5nPXtsb2FkaW5nU3RhdGVzW2l0ZW0uX2lkXSB8fCBmYWxzZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlQnV0dG9uQ2xpY2soaXRlbSwgc2V0TG9hZGluZ1N0YXRlcywgbG9hZGluZ1N0YXRlcywgc2V0Q2hhbm5lbCwgdHJ1ZSl9XG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIEluamVjdFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgICAgICAgIDxUb29sdGlwIHBsYWNlbWVudD1cInJpZ2h0XCIgdHJpZ2dlcj17PGJ1dHRvbiBjbGFzc05hbWU9J2Rpc2FibGVkJz5EaXNhYmxlZDwvYnV0dG9uPn0+XG4gICAgICAgICAgICAgICAgICAgICAgICBUaGlzIGNoYW5uZWwgaXMgbm90IGFjdGl2ZVxuICAgICAgICAgICAgICAgICAgICAgIDwvVG9vbHRpcD5cbiAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgIDwvRmxleEl0ZW0+XG4gICAgICAgICAgICAgICAgPC9GbGV4PlxuICAgICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgIDwvPlxuICAgICAgICApfVxuICAgICAgPC9Cb3g+XG4gICAgPC9QYW5lbD5cbiAgKTtcbn1cblxuIl0sIm5hbWVzIjpbIlBhbmVsIiwiQm94IiwiQnV0dG9uIiwiVG9vbHRpcCIsIlRleHQiLCJGbGV4IiwiRmxleEl0ZW0iLCJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiRXJyb3JNZXNzYWdlIiwiTG9hZGluZyIsImFsZXJ0c01hbmFnZXIiLCJ1c2VTZWFyY2hQYXJhbXMiLCJoYW5kbGVCdXR0b25DbGljayIsIml0ZW0iLCJzZXRMb2FkaW5nU3RhdGVzIiwibG9hZGluZ1N0YXRlcyIsInNldENoYW5uZWwiLCJpbmplY3QiLCJfaWQiLCJhbGVydElkIiwidXJsIiwiYXV0aFRva2VuIiwicmVxdWVzdE9wdGlvbnMiLCJjaGFubmVsSWQiLCJjb25zb2xlIiwibG9nIiwibWV0aG9kIiwiaGVhZGVycyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwiY2hhbm5lbF9pZCIsInJlc3BvbnNlIiwiZmV0Y2giLCJvayIsIkVycm9yIiwic3RhdHVzVGV4dCIsInJlc3VsdCIsImpzb24iLCJkYXRhIiwiYWRkIiwibWVzc2FnZXMiLCJ0ZXh0IiwiaW5qZWN0ZWRBdCIsIm5hbWUiLCJ0eXBlIiwib25DbG9zZSIsImVycm9yIiwic2V0VGltZW91dCIsInJlbW92ZSIsIkluZGV4IiwiQ2hhbm5lbCIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwic2V0RXJyb3IiLCJUb2tlbiIsInNldFRva2VuIiwic2VhcmNoUGFyYW1zIiwiZ2V0Q2hhbm5lbExpc3QiLCJtZXNzYWdlIiwibWFyZ2luIiwiYWN0aW9uVHlwZSIsImlzTG9hZGluZyIsInZhcmlhbnQiLCJvbkNsaWNrIiwibGVuZ3RoIiwibWFwIiwiYmFja2dyb3VuZENvbG9yIiwiYm9yZGVyIiwiYm9yZGVyUmFkaXVzIiwicGFkZGluZyIsIm1hcmdpbkJvdHRvbSIsImp1c3RpZnlDb250ZW50IiwiYWxpZ25JdGVtcyIsImJvbGQiLCJjaGFubmVsTmFtZSIsImlzRW5hYmxlZCIsIm1hcmdpbkxlZnQiLCJwbGFjZW1lbnQiLCJ0cmlnZ2VyIiwiYnV0dG9uIiwiY2xhc3NOYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.tsx\n"));

/***/ })

});