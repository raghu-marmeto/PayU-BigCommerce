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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Index; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _bigcommerce_big_design__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @bigcommerce/big-design */ \"./node_modules/@bigcommerce/big-design/dist/es/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_error__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/error */ \"./components/error.tsx\");\n/* harmony import */ var _components_loading__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/loading */ \"./components/loading.tsx\");\n/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_app */ \"./pages/_app.tsx\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/navigation */ \"./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_5__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst handleButtonClick = async (item, setLoadingStates, loadingStates, setChannel, inject)=>{\n    setLoadingStates({\n        ...loadingStates,\n        [item._id]: true\n    });\n    //initial alert popup with null value\n    let alertId = null;\n    let url = \"\"; //API Url\n    const authToken = \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1dWlkIjoiMWFmMDVkNGMtMjdjNS00ZjYwLWE5YzEtNDdjZGE0MmZjZjE0IiwiaWF0IjoxNzE4Njg5NzY5LCJleHAiOjE3MTg3NzYxNjl9.shNhfpImxvAYEaR6VpiNFdhhLBziraVI7yFcDrInKso\";\n    let requestOptions; //Authentication token\n    const channelId = item.channelId //Chanel Id\n    ;\n    console.log(item.channelId);\n    try {\n        //Inject Script\n        if (inject) {\n            url = \"https://payu.in.ngrok.io/api/channel/inject\";\n            requestOptions = {\n                method: \"POST\",\n                headers: {\n                    \"Content-Type\": \"application/json\",\n                    \"authorization\": authToken\n                },\n                body: JSON.stringify({\n                    channel_id: channelId\n                })\n            };\n        } else {\n            //Eject Script\n            url = \"https://payu.in.ngrok.io/api/channel/eject\";\n            requestOptions = {\n                method: \"DELETE\",\n                headers: {\n                    \"Content-Type\": \"application/json\",\n                    \"authorization\": authToken\n                },\n                body: JSON.stringify({\n                    channel_id: channelId\n                })\n            };\n        }\n        console.log(url, requestOptions);\n        const response = await fetch(url, requestOptions);\n        if (!response.ok) {\n            throw new Error(\"Network response was not ok: \" + response.statusText);\n        }\n        const result = await response.json();\n        setChannel(result.data);\n        console.log(result.data, \"data\");\n        // Update the alert type to success on successful response\n        alertId = _app__WEBPACK_IMPORTED_MODULE_4__.alertsManager.add({\n            messages: [\n                {\n                    text: item.injectedAt != null ? \"Script is ejecting from \".concat(item.name) : \"Script is injecting to \".concat(item.name)\n                }\n            ],\n            type: \"success\",\n            onClose: ()=>null\n        });\n    } catch (error) {\n        console.error(\"There has been a problem with your fetch operation:\", error);\n        // Update the alert type to error on failure\n        alertId = _app__WEBPACK_IMPORTED_MODULE_4__.alertsManager.add({\n            messages: [\n                {\n                    text: \"There was a problem with your request.\"\n                }\n            ],\n            type: \"error\",\n            onClose: ()=>null\n        });\n        //remove alert manager after 2 seconds\n        setTimeout(()=>{\n            _app__WEBPACK_IMPORTED_MODULE_4__.alertsManager.remove(alertId);\n        }, 2000);\n    } finally{\n        //remove button loading\n        setLoadingStates({\n            ...loadingStates,\n            [item._id]: false\n        });\n        //remove alert manager after 2 seconds\n        setTimeout(()=>{\n            _app__WEBPACK_IMPORTED_MODULE_4__.alertsManager.remove(alertId);\n        }, 2000);\n    }\n};\nfunction Index() {\n    _s();\n    const [Channel, setChannel] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [loadingStates, setLoadingStates] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});\n    const [Token] = (0,next_navigation__WEBPACK_IMPORTED_MODULE_5__.useSearchParams)();\n    // console.log(Token[0]);\n    const getChannelList = async ()=>{\n        setLoading(true);\n        setError(null);\n        try {\n            let url = \"https://payu.in.ngrok.io/api/channel/list\";\n            const response = await fetch(url, {\n                method: \"GET\",\n                headers: {\n                    \"Content-Type\": \"application/json\",\n                    \"authorization\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1dWlkIjoiMWFmMDVkNGMtMjdjNS00ZjYwLWE5YzEtNDdjZGE0MmZjZjE0IiwiaWF0IjoxNzE4Njg5NzY5LCJleHAiOjE3MTg3NzYxNjl9.shNhfpImxvAYEaR6VpiNFdhhLBziraVI7yFcDrInKso\"\n                }\n            });\n            if (!response.ok) {\n                throw new Error(\"Network response was not ok\");\n            }\n            const result = await response.json();\n            setChannel(result.data); // Store data in state\n            console.log(result, \"result\");\n        } catch (error) {\n            setError(error.message);\n            setLoading(true);\n        } finally{\n            setLoading(false);\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        getChannelList();\n    }, []);\n    if (loading) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_loading__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n        fileName: \"/home/raghu/Marmeto/Bigcommerce/payu-bigcommerce/pages/index.tsx\",\n        lineNumber: 135,\n        columnNumber: 23\n    }, this);\n    if (error) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_bigcommerce_big_design__WEBPACK_IMPORTED_MODULE_6__.Panel, {\n        margin: \"xxLarge\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_error__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                error: error\n            }, void 0, false, {\n                fileName: \"/home/raghu/Marmeto/Bigcommerce/payu-bigcommerce/pages/index.tsx\",\n                lineNumber: 138,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_bigcommerce_big_design__WEBPACK_IMPORTED_MODULE_6__.Button, {\n                actionType: \"normal\",\n                isLoading: loading,\n                variant: \"primary\",\n                onClick: ()=>getChannelList(),\n                children: \"Reload\"\n            }, void 0, false, {\n                fileName: \"/home/raghu/Marmeto/Bigcommerce/payu-bigcommerce/pages/index.tsx\",\n                lineNumber: 139,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/raghu/Marmeto/Bigcommerce/payu-bigcommerce/pages/index.tsx\",\n        lineNumber: 137,\n        columnNumber: 5\n    }, this);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_bigcommerce_big_design__WEBPACK_IMPORTED_MODULE_6__.Panel, {\n        margin: \"xxxLarge\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_bigcommerce_big_design__WEBPACK_IMPORTED_MODULE_6__.Box, {\n            children: Channel.length > 0 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                children: Channel.map((item)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_bigcommerce_big_design__WEBPACK_IMPORTED_MODULE_6__.Box, {\n                        backgroundColor: \"secondary20\",\n                        border: \"box\",\n                        borderRadius: \"normal\",\n                        padding: \"small\",\n                        marginBottom: \"medium\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_bigcommerce_big_design__WEBPACK_IMPORTED_MODULE_6__.Flex, {\n                            justifyContent: \"space-between\",\n                            alignItems: \"center\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_bigcommerce_big_design__WEBPACK_IMPORTED_MODULE_6__.FlexItem, {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_bigcommerce_big_design__WEBPACK_IMPORTED_MODULE_6__.Text, {\n                                        bold: true,\n                                        children: item.channelName\n                                    }, void 0, false, {\n                                        fileName: \"/home/raghu/Marmeto/Bigcommerce/payu-bigcommerce/pages/index.tsx\",\n                                        lineNumber: 158,\n                                        columnNumber: 29\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/home/raghu/Marmeto/Bigcommerce/payu-bigcommerce/pages/index.tsx\",\n                                    lineNumber: 158,\n                                    columnNumber: 19\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_bigcommerce_big_design__WEBPACK_IMPORTED_MODULE_6__.FlexItem, {\n                                    children: item.isEnabled ? item.injectedAt != null ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_bigcommerce_big_design__WEBPACK_IMPORTED_MODULE_6__.Button, {\n                                        marginLeft: \"medium\",\n                                        actionType: \"destructive\",\n                                        isLoading: loadingStates[item._id] || false,\n                                        onClick: ()=>handleButtonClick(item, setLoadingStates, loadingStates, setChannel, false),\n                                        children: \"Eject\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/raghu/Marmeto/Bigcommerce/payu-bigcommerce/pages/index.tsx\",\n                                        lineNumber: 162,\n                                        columnNumber: 25\n                                    }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_bigcommerce_big_design__WEBPACK_IMPORTED_MODULE_6__.Button, {\n                                        marginLeft: \"medium\",\n                                        actionType: \"normal\",\n                                        isLoading: loadingStates[item._id] || false,\n                                        onClick: ()=>handleButtonClick(item, setLoadingStates, loadingStates, setChannel, true),\n                                        children: \"Inject\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/raghu/Marmeto/Bigcommerce/payu-bigcommerce/pages/index.tsx\",\n                                        lineNumber: 171,\n                                        columnNumber: 25\n                                    }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_bigcommerce_big_design__WEBPACK_IMPORTED_MODULE_6__.Tooltip, {\n                                        placement: \"right\",\n                                        trigger: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                            className: \"disabled\",\n                                            children: \"Disabled\"\n                                        }, void 0, false, {\n                                            fileName: \"/home/raghu/Marmeto/Bigcommerce/payu-bigcommerce/pages/index.tsx\",\n                                            lineNumber: 181,\n                                            columnNumber: 59\n                                        }, void 0),\n                                        children: \"This channel is not active\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/raghu/Marmeto/Bigcommerce/payu-bigcommerce/pages/index.tsx\",\n                                        lineNumber: 181,\n                                        columnNumber: 23\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/home/raghu/Marmeto/Bigcommerce/payu-bigcommerce/pages/index.tsx\",\n                                    lineNumber: 159,\n                                    columnNumber: 19\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/raghu/Marmeto/Bigcommerce/payu-bigcommerce/pages/index.tsx\",\n                            lineNumber: 157,\n                            columnNumber: 17\n                        }, this)\n                    }, item._id, false, {\n                        fileName: \"/home/raghu/Marmeto/Bigcommerce/payu-bigcommerce/pages/index.tsx\",\n                        lineNumber: 149,\n                        columnNumber: 15\n                    }, this))\n            }, void 0, false)\n        }, void 0, false, {\n            fileName: \"/home/raghu/Marmeto/Bigcommerce/payu-bigcommerce/pages/index.tsx\",\n            lineNumber: 145,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/home/raghu/Marmeto/Bigcommerce/payu-bigcommerce/pages/index.tsx\",\n        lineNumber: 144,\n        columnNumber: 5\n    }, this);\n}\n_s(Index, \"mStOw460YIsLNJR0/JwCg984PyM=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_5__.useSearchParams\n    ];\n});\n_c = Index;\nvar _c;\n$RefreshReg$(_c, \"Index\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O3dCQUNoQkMsUUFBTzt3QkFDUEMsY0FBYTt3QkFDYkMsU0FBUTt3QkFDUkMsY0FBYTtrQ0FHYiw0RUFBQ2xFLHlEQUFJQTs0QkFBQ21FLGdCQUFlOzRCQUFnQkMsWUFBVzs7OENBQzlDLDhEQUFDbkUsNkRBQVFBOzhDQUFDLDRFQUFDRix5REFBSUE7d0NBQUNzRSxJQUFJO2tEQUFFM0QsS0FBSzRELFdBQVc7Ozs7Ozs7Ozs7OzhDQUN0Qyw4REFBQ3JFLDZEQUFRQTs4Q0FDTlMsS0FBSzZELFNBQVMsR0FDYjdELEtBQUs4QixVQUFVLElBQUkscUJBQ2pCLDhEQUFDM0MsMkRBQU1BO3dDQUNMMkUsWUFBVzt3Q0FDWGhCLFlBQVc7d0NBQ1hDLFdBQVc3QyxhQUFhLENBQUNGLEtBQUtLLEdBQUcsQ0FBQyxJQUFJO3dDQUN0QzRDLFNBQVMsSUFBTWxELGtCQUFrQkMsTUFBTUMsa0JBQWtCQyxlQUFlQyxZQUFZO2tEQUNyRjs7Ozs7NkRBSUQsOERBQUNoQiwyREFBTUE7d0NBQ0wyRSxZQUFXO3dDQUNYaEIsWUFBVzt3Q0FDWEMsV0FBVzdDLGFBQWEsQ0FBQ0YsS0FBS0ssR0FBRyxDQUFDLElBQUk7d0NBQ3RDNEMsU0FBUyxJQUFNbEQsa0JBQWtCQyxNQUFNQyxrQkFBa0JDLGVBQWVDLFlBQVk7a0RBQ3JGOzs7Ozs2REFLSCw4REFBQ2YsNERBQU9BO3dDQUFDMkUsV0FBVTt3Q0FBUUMsdUJBQVMsOERBQUNDOzRDQUFPQyxXQUFVO3NEQUFXOzs7Ozs7a0RBQW1COzs7Ozs7Ozs7Ozs7Ozs7Ozt1QkExQnJGbEUsS0FBS0ssR0FBRzs7Ozs7Ozs7Ozs7Ozs7OztBQXVDN0I7R0FyR3dCZ0M7O1FBS052Qyw0REFBZUE7OztLQUxUdUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4PzA3ZmYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGFuZWwsIEJveCwgQnV0dG9uLCBUb29sdGlwLCBUZXh0LCBGbGV4LCBGbGV4SXRlbSB9IGZyb20gJ0BiaWdjb21tZXJjZS9iaWctZGVzaWduJztcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IEVycm9yTWVzc2FnZSBmcm9tICcuLi9jb21wb25lbnRzL2Vycm9yJztcbmltcG9ydCBMb2FkaW5nIGZyb20gJy4uL2NvbXBvbmVudHMvbG9hZGluZyc7XG5pbXBvcnQgeyBhbGVydHNNYW5hZ2VyIH0gZnJvbSAnLi9fYXBwJztcbmltcG9ydCB7IHVzZVNlYXJjaFBhcmFtcyB9IGZyb20gJ25leHQvbmF2aWdhdGlvbic7XG5cbmNvbnN0IGhhbmRsZUJ1dHRvbkNsaWNrID0gYXN5bmMgKGl0ZW0sIHNldExvYWRpbmdTdGF0ZXMsIGxvYWRpbmdTdGF0ZXMsIHNldENoYW5uZWwsIGluamVjdCkgPT4ge1xuICBzZXRMb2FkaW5nU3RhdGVzKHsgLi4ubG9hZGluZ1N0YXRlcywgW2l0ZW0uX2lkXTogdHJ1ZSB9KTtcblxuICAvL2luaXRpYWwgYWxlcnQgcG9wdXAgd2l0aCBudWxsIHZhbHVlXG4gIGxldCBhbGVydElkID0gbnVsbDtcbiAgbGV0IHVybCA9ICcnOyAvL0FQSSBVcmxcbiAgY29uc3QgYXV0aFRva2VuID0gJ2V5SmhiR2NpT2lKSVV6STFOaUlzSW5SNWNDSTZJa3BYVkNKOS5leUoxZFdsa0lqb2lNV0ZtTURWa05HTXRNamRqTlMwMFpqWXdMV0U1WXpFdE5EZGpaR0UwTW1aalpqRTBJaXdpYVdGMElqb3hOekU0TmpnNU56WTVMQ0psZUhBaU9qRTNNVGczTnpZeE5qbDkuc2hOaGZwSW14dkFZRWFSNlZwaU5GZGhoTEJ6aXJhVkk3eUZjRHJJbktzbyc7XG4gIGxldCByZXF1ZXN0T3B0aW9uczsgLy9BdXRoZW50aWNhdGlvbiB0b2tlblxuICBjb25zdCBjaGFubmVsSWQgPSBpdGVtLmNoYW5uZWxJZCAvL0NoYW5lbCBJZFxuICBjb25zb2xlLmxvZyhpdGVtLmNoYW5uZWxJZCk7XG4gIFxuXG4gIHRyeSB7XG4gICAgLy9JbmplY3QgU2NyaXB0XG4gICAgaWYgKGluamVjdCkge1xuICAgICAgdXJsID0gJ2h0dHBzOi8vcGF5dS5pbi5uZ3Jvay5pby9hcGkvY2hhbm5lbC9pbmplY3QnO1xuXG4gICAgICByZXF1ZXN0T3B0aW9ucyA9IHtcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgIGhlYWRlcnM6IHsgXG4gICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyAsXG4gICAgICAgICAgJ2F1dGhvcml6YXRpb24nOiBhdXRoVG9rZW5cbiAgICAgICAgfSxcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyBjaGFubmVsX2lkOiBjaGFubmVsSWQgfSksXG4gICAgICB9O1xuICAgIH0gZWxzZSB7XG4gICAgICAvL0VqZWN0IFNjcmlwdFxuICAgICAgdXJsID0gJ2h0dHBzOi8vcGF5dS5pbi5uZ3Jvay5pby9hcGkvY2hhbm5lbC9lamVjdCc7XG5cbiAgICAgIHJlcXVlc3RPcHRpb25zID0ge1xuICAgICAgICBtZXRob2Q6ICdERUxFVEUnLFxuICAgICAgICBoZWFkZXJzOiB7IFxuICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgLFxuICAgICAgICAgICdhdXRob3JpemF0aW9uJzogYXV0aFRva2VuXG4gICAgICAgIH0sXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgY2hhbm5lbF9pZDogY2hhbm5lbElkIH0pLFxuICAgICAgfTtcbiAgICB9XG5cbiAgICBjb25zb2xlLmxvZyh1cmwsIHJlcXVlc3RPcHRpb25zKTtcbiAgICBcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybCwgcmVxdWVzdE9wdGlvbnMpO1xuXG4gICAgaWYgKCFyZXNwb25zZS5vaykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdOZXR3b3JrIHJlc3BvbnNlIHdhcyBub3Qgb2s6ICcgKyByZXNwb25zZS5zdGF0dXNUZXh0KTtcbiAgICB9XG5cbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgc2V0Q2hhbm5lbChyZXN1bHQuZGF0YSk7XG4gICAgY29uc29sZS5sb2cocmVzdWx0LmRhdGEsICdkYXRhJyk7XG5cbiAgICAvLyBVcGRhdGUgdGhlIGFsZXJ0IHR5cGUgdG8gc3VjY2VzcyBvbiBzdWNjZXNzZnVsIHJlc3BvbnNlXG4gICAgYWxlcnRJZCA9IGFsZXJ0c01hbmFnZXIuYWRkKHtcbiAgICAgIG1lc3NhZ2VzOiBbeyB0ZXh0OiBpdGVtLmluamVjdGVkQXQgIT0gbnVsbCA/IGBTY3JpcHQgaXMgZWplY3RpbmcgZnJvbSAke2l0ZW0ubmFtZX1gIDogYFNjcmlwdCBpcyBpbmplY3RpbmcgdG8gJHtpdGVtLm5hbWV9YCB9XSxcbiAgICAgIHR5cGU6ICdzdWNjZXNzJywgLy8gSW5pdGlhbGx5IHNldCB0byBsb2FkaW5nXG4gICAgICBvbkNsb3NlOiAoKSA9PiBudWxsLFxuICAgIH0pO1xuXG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcignVGhlcmUgaGFzIGJlZW4gYSBwcm9ibGVtIHdpdGggeW91ciBmZXRjaCBvcGVyYXRpb246JywgZXJyb3IpO1xuXG4gICAgLy8gVXBkYXRlIHRoZSBhbGVydCB0eXBlIHRvIGVycm9yIG9uIGZhaWx1cmVcbiAgICBhbGVydElkID0gYWxlcnRzTWFuYWdlci5hZGQoe1xuICAgICAgbWVzc2FnZXM6IFt7IHRleHQ6ICdUaGVyZSB3YXMgYSBwcm9ibGVtIHdpdGggeW91ciByZXF1ZXN0LicgfV0sXG4gICAgICB0eXBlOiAnZXJyb3InLFxuICAgICAgb25DbG9zZTogKCkgPT4gbnVsbCxcbiAgICB9KTtcblxuICAgIC8vcmVtb3ZlIGFsZXJ0IG1hbmFnZXIgYWZ0ZXIgMiBzZWNvbmRzXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBhbGVydHNNYW5hZ2VyLnJlbW92ZShhbGVydElkKTtcbiAgICB9LCAyMDAwKTtcblxuICB9IGZpbmFsbHkge1xuICAgIC8vcmVtb3ZlIGJ1dHRvbiBsb2FkaW5nXG4gICAgc2V0TG9hZGluZ1N0YXRlcyh7IC4uLmxvYWRpbmdTdGF0ZXMsIFtpdGVtLl9pZF06IGZhbHNlIH0pO1xuXG4gICAgLy9yZW1vdmUgYWxlcnQgbWFuYWdlciBhZnRlciAyIHNlY29uZHNcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGFsZXJ0c01hbmFnZXIucmVtb3ZlKGFsZXJ0SWQpO1xuICAgIH0sIDIwMDApO1xuICB9XG59O1xuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEluZGV4KCkge1xuICBjb25zdCBbQ2hhbm5lbCwgc2V0Q2hhbm5lbF0gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSB1c2VTdGF0ZShudWxsKTtcbiAgY29uc3QgW2xvYWRpbmdTdGF0ZXMsIHNldExvYWRpbmdTdGF0ZXNdID0gdXNlU3RhdGUoe30pO1xuICBjb25zdCBbVG9rZW5dID0gdXNlU2VhcmNoUGFyYW1zKCk7XG5cbiAgLy8gY29uc29sZS5sb2coVG9rZW5bMF0pO1xuXG4gIGNvbnN0IGdldENoYW5uZWxMaXN0ID0gYXN5bmMgKCkgPT4ge1xuICAgIHNldExvYWRpbmcodHJ1ZSk7XG4gICAgc2V0RXJyb3IobnVsbCk7XG5cbiAgICB0cnkge1xuICAgICAgbGV0IHVybCA9ICdodHRwczovL3BheXUuaW4ubmdyb2suaW8vYXBpL2NoYW5uZWwvbGlzdCc7XG5cbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsLCB7XG4gICAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgICdhdXRob3JpemF0aW9uJzogJ2V5SmhiR2NpT2lKSVV6STFOaUlzSW5SNWNDSTZJa3BYVkNKOS5leUoxZFdsa0lqb2lNV0ZtTURWa05HTXRNamRqTlMwMFpqWXdMV0U1WXpFdE5EZGpaR0UwTW1aalpqRTBJaXdpYVdGMElqb3hOekU0TmpnNU56WTVMQ0psZUhBaU9qRTNNVGczTnpZeE5qbDkuc2hOaGZwSW14dkFZRWFSNlZwaU5GZGhoTEJ6aXJhVkk3eUZjRHJJbktzbydcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIGlmICghcmVzcG9uc2Uub2spIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdOZXR3b3JrIHJlc3BvbnNlIHdhcyBub3Qgb2snKTtcbiAgICAgIH1cbiAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICAgIHNldENoYW5uZWwocmVzdWx0LmRhdGEpOyAvLyBTdG9yZSBkYXRhIGluIHN0YXRlXG4gICAgICBjb25zb2xlLmxvZyhyZXN1bHQsIFwicmVzdWx0XCIpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBzZXRFcnJvcihlcnJvci5tZXNzYWdlKTtcbiAgICAgIHNldExvYWRpbmcodHJ1ZSk7XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xuICAgIH1cbiAgfTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGdldENoYW5uZWxMaXN0KCk7XG4gIH0sIFtdKVxuXG4gIGlmIChsb2FkaW5nKSByZXR1cm4gPExvYWRpbmcgLz47XG4gIGlmIChlcnJvcikgcmV0dXJuIChcbiAgICA8UGFuZWwgbWFyZ2luPVwieHhMYXJnZVwiPlxuICAgICAgPEVycm9yTWVzc2FnZSBlcnJvcj17ZXJyb3J9IC8+XG4gICAgICA8QnV0dG9uIGFjdGlvblR5cGU9XCJub3JtYWxcIiBpc0xvYWRpbmc9e2xvYWRpbmd9IHZhcmlhbnQ9XCJwcmltYXJ5XCIgb25DbGljaz17KCkgPT4gZ2V0Q2hhbm5lbExpc3QoKX0+UmVsb2FkPC9CdXR0b24+XG4gICAgPC9QYW5lbD5cbiAgKTtcblxuICByZXR1cm4gKFxuICAgIDxQYW5lbCBtYXJnaW49XCJ4eHhMYXJnZVwiPlxuICAgICAgPEJveD5cbiAgICAgICAge0NoYW5uZWwubGVuZ3RoID4gMCAmJiAoXG4gICAgICAgICAgPD5cbiAgICAgICAgICAgIHtDaGFubmVsLm1hcCgoaXRlbSkgPT4gKFxuICAgICAgICAgICAgICA8Qm94XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yPVwic2Vjb25kYXJ5MjBcIlxuICAgICAgICAgICAgICAgIGJvcmRlcj1cImJveFwiXG4gICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzPVwibm9ybWFsXCJcbiAgICAgICAgICAgICAgICBwYWRkaW5nPVwic21hbGxcIlxuICAgICAgICAgICAgICAgIG1hcmdpbkJvdHRvbT1cIm1lZGl1bVwiXG4gICAgICAgICAgICAgICAga2V5PXtpdGVtLl9pZH1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxGbGV4IGp1c3RpZnlDb250ZW50PVwic3BhY2UtYmV0d2VlblwiIGFsaWduSXRlbXM9XCJjZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgIDxGbGV4SXRlbT48VGV4dCBib2xkPntpdGVtLmNoYW5uZWxOYW1lfTwvVGV4dD48L0ZsZXhJdGVtPlxuICAgICAgICAgICAgICAgICAgPEZsZXhJdGVtPlxuICAgICAgICAgICAgICAgICAgICB7aXRlbS5pc0VuYWJsZWQgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgaXRlbS5pbmplY3RlZEF0ICE9IG51bGwgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbkxlZnQ9XCJtZWRpdW1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBhY3Rpb25UeXBlPVwiZGVzdHJ1Y3RpdmVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBpc0xvYWRpbmc9e2xvYWRpbmdTdGF0ZXNbaXRlbS5faWRdIHx8IGZhbHNlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVCdXR0b25DbGljayhpdGVtLCBzZXRMb2FkaW5nU3RhdGVzLCBsb2FkaW5nU3RhdGVzLCBzZXRDaGFubmVsLCBmYWxzZSl9XG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIEVqZWN0XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5MZWZ0PVwibWVkaXVtXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYWN0aW9uVHlwZT1cIm5vcm1hbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlzTG9hZGluZz17bG9hZGluZ1N0YXRlc1tpdGVtLl9pZF0gfHwgZmFsc2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZUJ1dHRvbkNsaWNrKGl0ZW0sIHNldExvYWRpbmdTdGF0ZXMsIGxvYWRpbmdTdGF0ZXMsIHNldENoYW5uZWwsIHRydWUpfVxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICBJbmplY3RcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgICAgICA8VG9vbHRpcCBwbGFjZW1lbnQ9XCJyaWdodFwiIHRyaWdnZXI9ezxidXR0b24gY2xhc3NOYW1lPSdkaXNhYmxlZCc+RGlzYWJsZWQ8L2J1dHRvbj59PlxuICAgICAgICAgICAgICAgICAgICAgICAgVGhpcyBjaGFubmVsIGlzIG5vdCBhY3RpdmVcbiAgICAgICAgICAgICAgICAgICAgICA8L1Rvb2x0aXA+XG4gICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICA8L0ZsZXhJdGVtPlxuICAgICAgICAgICAgICAgIDwvRmxleD5cbiAgICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICA8Lz5cbiAgICAgICAgKX1cbiAgICAgIDwvQm94PlxuICAgIDwvUGFuZWw+XG4gICk7XG59XG5cbiJdLCJuYW1lcyI6WyJQYW5lbCIsIkJveCIsIkJ1dHRvbiIsIlRvb2x0aXAiLCJUZXh0IiwiRmxleCIsIkZsZXhJdGVtIiwiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkVycm9yTWVzc2FnZSIsIkxvYWRpbmciLCJhbGVydHNNYW5hZ2VyIiwidXNlU2VhcmNoUGFyYW1zIiwiaGFuZGxlQnV0dG9uQ2xpY2siLCJpdGVtIiwic2V0TG9hZGluZ1N0YXRlcyIsImxvYWRpbmdTdGF0ZXMiLCJzZXRDaGFubmVsIiwiaW5qZWN0IiwiX2lkIiwiYWxlcnRJZCIsInVybCIsImF1dGhUb2tlbiIsInJlcXVlc3RPcHRpb25zIiwiY2hhbm5lbElkIiwiY29uc29sZSIsImxvZyIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsImNoYW5uZWxfaWQiLCJyZXNwb25zZSIsImZldGNoIiwib2siLCJFcnJvciIsInN0YXR1c1RleHQiLCJyZXN1bHQiLCJqc29uIiwiZGF0YSIsImFkZCIsIm1lc3NhZ2VzIiwidGV4dCIsImluamVjdGVkQXQiLCJuYW1lIiwidHlwZSIsIm9uQ2xvc2UiLCJlcnJvciIsInNldFRpbWVvdXQiLCJyZW1vdmUiLCJJbmRleCIsIkNoYW5uZWwiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsInNldEVycm9yIiwiVG9rZW4iLCJnZXRDaGFubmVsTGlzdCIsIm1lc3NhZ2UiLCJtYXJnaW4iLCJhY3Rpb25UeXBlIiwiaXNMb2FkaW5nIiwidmFyaWFudCIsIm9uQ2xpY2siLCJsZW5ndGgiLCJtYXAiLCJiYWNrZ3JvdW5kQ29sb3IiLCJib3JkZXIiLCJib3JkZXJSYWRpdXMiLCJwYWRkaW5nIiwibWFyZ2luQm90dG9tIiwianVzdGlmeUNvbnRlbnQiLCJhbGlnbkl0ZW1zIiwiYm9sZCIsImNoYW5uZWxOYW1lIiwiaXNFbmFibGVkIiwibWFyZ2luTGVmdCIsInBsYWNlbWVudCIsInRyaWdnZXIiLCJidXR0b24iLCJjbGFzc05hbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.tsx\n"));

/***/ })

});