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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Index; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _bigcommerce_big_design__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @bigcommerce/big-design */ \"./node_modules/@bigcommerce/big-design/dist/es/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_error__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/error */ \"./components/error.tsx\");\n/* harmony import */ var _components_loading__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/loading */ \"./components/loading.tsx\");\n/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_app */ \"./pages/_app.tsx\");\n/* harmony import */ var _context_session__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../context/session */ \"./context/session.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst handleButtonClick = async (item, setLoadingStates, loadingStates, setChannel, inject)=>{\n    setLoadingStates({\n        ...loadingStates,\n        [item._id]: true\n    });\n    //initial alert popup with null value\n    let alertId = null;\n    let url = \"\"; //API Url\n    const authToken = \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1dWlkIjoiMWFmMDVkNGMtMjdjNS00ZjYwLWE5YzEtNDdjZGE0MmZjZjE0IiwiaWF0IjoxNzE4Njg5NzY5LCJleHAiOjE3MTg3NzYxNjl9.shNhfpImxvAYEaR6VpiNFdhhLBziraVI7yFcDrInKso\";\n    let requestOptions; //Authentication token\n    const channelId = item.channelId //Chanel Id\n    ;\n    console.log(item.channelId);\n    try {\n        //Inject Script\n        if (inject) {\n            url = \"https://payu.in.ngrok.io/api/channel/inject\";\n            requestOptions = {\n                method: \"POST\",\n                headers: {\n                    \"Content-Type\": \"application/json\",\n                    \"authorization\": authToken\n                },\n                body: JSON.stringify({\n                    channel_id: channelId\n                })\n            };\n        } else {\n            //Eject Script\n            url = \"https://payu.in.ngrok.io/api/channel/eject\";\n            requestOptions = {\n                method: \"DELETE\",\n                headers: {\n                    \"Content-Type\": \"application/json\",\n                    \"authorization\": authToken\n                },\n                body: JSON.stringify({\n                    channel_id: channelId\n                })\n            };\n        }\n        console.log(url, requestOptions);\n        const response = await fetch(url, requestOptions);\n        if (!response.ok) {\n            throw new Error(\"Network response was not ok: \" + response.statusText);\n        }\n        const result = await response.json();\n        setChannel(result.data);\n        console.log(result.data, \"data\");\n        // Update the alert type to success on successful response\n        alertId = _app__WEBPACK_IMPORTED_MODULE_4__.alertsManager.add({\n            messages: [\n                {\n                    text: item.injectedAt != null ? \"Script is ejecting from \".concat(item.name) : \"Script is injecting to \".concat(item.name)\n                }\n            ],\n            type: \"success\",\n            onClose: ()=>null\n        });\n    } catch (error) {\n        console.error(\"There has been a problem with your fetch operation:\", error);\n        // Update the alert type to error on failure\n        alertId = _app__WEBPACK_IMPORTED_MODULE_4__.alertsManager.add({\n            messages: [\n                {\n                    text: \"There was a problem with your request.\"\n                }\n            ],\n            type: \"error\",\n            onClose: ()=>null\n        });\n        //remove alert manager after 2 seconds\n        setTimeout(()=>{\n            _app__WEBPACK_IMPORTED_MODULE_4__.alertsManager.remove(alertId);\n        }, 2000);\n    } finally{\n        //remove button loading\n        setLoadingStates({\n            ...loadingStates,\n            [item._id]: false\n        });\n        //remove alert manager after 2 seconds\n        setTimeout(()=>{\n            _app__WEBPACK_IMPORTED_MODULE_4__.alertsManager.remove(alertId);\n        }, 2000);\n    }\n};\nfunction Index() {\n    _s();\n    const [Channel, setChannel] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [loadingStates, setLoadingStates] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});\n    const [Token, setToken] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const searchParams = (0,_context_session__WEBPACK_IMPORTED_MODULE_5__.useQuery)();\n    const getChannelList = async ()=>{\n        setLoading(true);\n        setError(null);\n        console.log(Token);\n    // try {\n    //   let url = 'https://payu.in.ngrok.io/api/channel/list';\n    //   const response = await fetch(url, {\n    //     method: 'GET',\n    //     headers: {\n    //       'Content-Type': 'application/json',\n    //       'authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1dWlkIjoiMWFmMDVkNGMtMjdjNS00ZjYwLWE5YzEtNDdjZGE0MmZjZjE0IiwiaWF0IjoxNzE4Njg5NzY5LCJleHAiOjE3MTg3NzYxNjl9.shNhfpImxvAYEaR6VpiNFdhhLBziraVI7yFcDrInKso'\n    //     }\n    //   });\n    //   if (!response.ok) {\n    //     throw new Error('Network response was not ok');\n    //   }\n    //   const result = await response.json();\n    //   setChannel(result.data); // Store data in state\n    //   console.log(result, \"result\");\n    // } catch (error) {\n    //   setError(error.message);\n    //   setLoading(true);\n    // } finally {\n    //   setLoading(false);\n    // }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (searchParams) {\n            setToken(searchParams[1]);\n            return;\n        }\n    }, [\n        searchParams\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        getChannelList();\n    }, []);\n    if (loading) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_loading__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n        fileName: \"/home/raghu/Marmeto/Bigcommerce/payu-bigcommerce/pages/index.tsx\",\n        lineNumber: 146,\n        columnNumber: 23\n    }, this);\n    if (error) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_bigcommerce_big_design__WEBPACK_IMPORTED_MODULE_6__.Panel, {\n        margin: \"xxLarge\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_error__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                error: error\n            }, void 0, false, {\n                fileName: \"/home/raghu/Marmeto/Bigcommerce/payu-bigcommerce/pages/index.tsx\",\n                lineNumber: 149,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_bigcommerce_big_design__WEBPACK_IMPORTED_MODULE_6__.Button, {\n                actionType: \"normal\",\n                isLoading: loading,\n                variant: \"primary\",\n                onClick: ()=>getChannelList(),\n                children: \"Reload\"\n            }, void 0, false, {\n                fileName: \"/home/raghu/Marmeto/Bigcommerce/payu-bigcommerce/pages/index.tsx\",\n                lineNumber: 150,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/raghu/Marmeto/Bigcommerce/payu-bigcommerce/pages/index.tsx\",\n        lineNumber: 148,\n        columnNumber: 5\n    }, this);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_bigcommerce_big_design__WEBPACK_IMPORTED_MODULE_6__.Panel, {\n        margin: \"xxxLarge\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_bigcommerce_big_design__WEBPACK_IMPORTED_MODULE_6__.Box, {\n            children: Channel.length > 0 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                children: Channel.map((item)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_bigcommerce_big_design__WEBPACK_IMPORTED_MODULE_6__.Box, {\n                        backgroundColor: \"secondary20\",\n                        border: \"box\",\n                        borderRadius: \"normal\",\n                        padding: \"small\",\n                        marginBottom: \"medium\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_bigcommerce_big_design__WEBPACK_IMPORTED_MODULE_6__.Flex, {\n                            justifyContent: \"space-between\",\n                            alignItems: \"center\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_bigcommerce_big_design__WEBPACK_IMPORTED_MODULE_6__.FlexItem, {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_bigcommerce_big_design__WEBPACK_IMPORTED_MODULE_6__.Text, {\n                                        bold: true,\n                                        children: item.channelName\n                                    }, void 0, false, {\n                                        fileName: \"/home/raghu/Marmeto/Bigcommerce/payu-bigcommerce/pages/index.tsx\",\n                                        lineNumber: 169,\n                                        columnNumber: 29\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/home/raghu/Marmeto/Bigcommerce/payu-bigcommerce/pages/index.tsx\",\n                                    lineNumber: 169,\n                                    columnNumber: 19\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_bigcommerce_big_design__WEBPACK_IMPORTED_MODULE_6__.FlexItem, {\n                                    children: item.isEnabled ? item.injectedAt != null ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_bigcommerce_big_design__WEBPACK_IMPORTED_MODULE_6__.Button, {\n                                        marginLeft: \"medium\",\n                                        actionType: \"destructive\",\n                                        isLoading: loadingStates[item._id] || false,\n                                        onClick: ()=>handleButtonClick(item, setLoadingStates, loadingStates, setChannel, false),\n                                        children: \"Eject\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/raghu/Marmeto/Bigcommerce/payu-bigcommerce/pages/index.tsx\",\n                                        lineNumber: 173,\n                                        columnNumber: 25\n                                    }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_bigcommerce_big_design__WEBPACK_IMPORTED_MODULE_6__.Button, {\n                                        marginLeft: \"medium\",\n                                        actionType: \"normal\",\n                                        isLoading: loadingStates[item._id] || false,\n                                        onClick: ()=>handleButtonClick(item, setLoadingStates, loadingStates, setChannel, true),\n                                        children: \"Inject\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/raghu/Marmeto/Bigcommerce/payu-bigcommerce/pages/index.tsx\",\n                                        lineNumber: 182,\n                                        columnNumber: 25\n                                    }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_bigcommerce_big_design__WEBPACK_IMPORTED_MODULE_6__.Tooltip, {\n                                        placement: \"right\",\n                                        trigger: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                            className: \"disabled\",\n                                            children: \"Disabled\"\n                                        }, void 0, false, {\n                                            fileName: \"/home/raghu/Marmeto/Bigcommerce/payu-bigcommerce/pages/index.tsx\",\n                                            lineNumber: 192,\n                                            columnNumber: 59\n                                        }, void 0),\n                                        children: \"This channel is not active\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/raghu/Marmeto/Bigcommerce/payu-bigcommerce/pages/index.tsx\",\n                                        lineNumber: 192,\n                                        columnNumber: 23\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/home/raghu/Marmeto/Bigcommerce/payu-bigcommerce/pages/index.tsx\",\n                                    lineNumber: 170,\n                                    columnNumber: 19\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/raghu/Marmeto/Bigcommerce/payu-bigcommerce/pages/index.tsx\",\n                            lineNumber: 168,\n                            columnNumber: 17\n                        }, this)\n                    }, item._id, false, {\n                        fileName: \"/home/raghu/Marmeto/Bigcommerce/payu-bigcommerce/pages/index.tsx\",\n                        lineNumber: 160,\n                        columnNumber: 15\n                    }, this))\n            }, void 0, false)\n        }, void 0, false, {\n            fileName: \"/home/raghu/Marmeto/Bigcommerce/payu-bigcommerce/pages/index.tsx\",\n            lineNumber: 156,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/home/raghu/Marmeto/Bigcommerce/payu-bigcommerce/pages/index.tsx\",\n        lineNumber: 155,\n        columnNumber: 5\n    }, this);\n}\n_s(Index, \"eDgVWUqeh0Cvj7dmQZJ/bDAN2is=\", false, function() {\n    return [\n        _context_session__WEBPACK_IMPORTED_MODULE_5__.useQuery\n    ];\n});\n_c = Index;\nvar _c;\n$RefreshReg$(_c, \"Index\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNaLDhEQUFDZCx3REFBR0E7d0JBQ0ZtRSxpQkFBZ0I7d0JBQ2hCQyxRQUFPO3dCQUNQQyxjQUFhO3dCQUNiQyxTQUFRO3dCQUNSQyxjQUFhO2tDQUdiLDRFQUFDbkUseURBQUlBOzRCQUFDb0UsZ0JBQWU7NEJBQWdCQyxZQUFXOzs4Q0FDOUMsOERBQUNwRSw2REFBUUE7OENBQUMsNEVBQUNGLHlEQUFJQTt3Q0FBQ3VFLElBQUk7a0RBQUU1RCxLQUFLNkQsV0FBVzs7Ozs7Ozs7Ozs7OENBQ3RDLDhEQUFDdEUsNkRBQVFBOzhDQUNOUyxLQUFLOEQsU0FBUyxHQUNiOUQsS0FBSzhCLFVBQVUsSUFBSSxxQkFDakIsOERBQUMzQywyREFBTUE7d0NBQ0w0RSxZQUFXO3dDQUNYaEIsWUFBVzt3Q0FDWEMsV0FBVzlDLGFBQWEsQ0FBQ0YsS0FBS0ssR0FBRyxDQUFDLElBQUk7d0NBQ3RDNkMsU0FBUyxJQUFNbkQsa0JBQWtCQyxNQUFNQyxrQkFBa0JDLGVBQWVDLFlBQVk7a0RBQ3JGOzs7Ozs2REFJRCw4REFBQ2hCLDJEQUFNQTt3Q0FDTDRFLFlBQVc7d0NBQ1hoQixZQUFXO3dDQUNYQyxXQUFXOUMsYUFBYSxDQUFDRixLQUFLSyxHQUFHLENBQUMsSUFBSTt3Q0FDdEM2QyxTQUFTLElBQU1uRCxrQkFBa0JDLE1BQU1DLGtCQUFrQkMsZUFBZUMsWUFBWTtrREFDckY7Ozs7OzZEQUtILDhEQUFDZiw0REFBT0E7d0NBQUM0RSxXQUFVO3dDQUFRQyx1QkFBUyw4REFBQ0M7NENBQU9DLFdBQVU7c0RBQVc7Ozs7OztrREFBbUI7Ozs7Ozs7Ozs7Ozs7Ozs7O3VCQTFCckZuRSxLQUFLSyxHQUFHOzs7Ozs7Ozs7Ozs7Ozs7O0FBdUM3QjtHQS9Hd0JnQzs7UUFNRHZDLHNEQUFRQTs7O0tBTlB1QyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC50c3g/MDdmZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQYW5lbCwgQm94LCBCdXR0b24sIFRvb2x0aXAsIFRleHQsIEZsZXgsIEZsZXhJdGVtIH0gZnJvbSAnQGJpZ2NvbW1lcmNlL2JpZy1kZXNpZ24nO1xuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgRXJyb3JNZXNzYWdlIGZyb20gJy4uL2NvbXBvbmVudHMvZXJyb3InO1xuaW1wb3J0IExvYWRpbmcgZnJvbSAnLi4vY29tcG9uZW50cy9sb2FkaW5nJztcbmltcG9ydCB7IGFsZXJ0c01hbmFnZXIgfSBmcm9tICcuL19hcHAnO1xuaW1wb3J0IHsgdXNlUXVlcnkgfSBmcm9tICcuLi9jb250ZXh0L3Nlc3Npb24nO1xuXG5cbmNvbnN0IGhhbmRsZUJ1dHRvbkNsaWNrID0gYXN5bmMgKGl0ZW0sIHNldExvYWRpbmdTdGF0ZXMsIGxvYWRpbmdTdGF0ZXMsIHNldENoYW5uZWwsIGluamVjdCkgPT4ge1xuICBzZXRMb2FkaW5nU3RhdGVzKHsgLi4ubG9hZGluZ1N0YXRlcywgW2l0ZW0uX2lkXTogdHJ1ZSB9KTtcblxuICAvL2luaXRpYWwgYWxlcnQgcG9wdXAgd2l0aCBudWxsIHZhbHVlXG4gIGxldCBhbGVydElkID0gbnVsbDtcbiAgbGV0IHVybCA9ICcnOyAvL0FQSSBVcmxcbiAgY29uc3QgYXV0aFRva2VuID0gJ2V5SmhiR2NpT2lKSVV6STFOaUlzSW5SNWNDSTZJa3BYVkNKOS5leUoxZFdsa0lqb2lNV0ZtTURWa05HTXRNamRqTlMwMFpqWXdMV0U1WXpFdE5EZGpaR0UwTW1aalpqRTBJaXdpYVdGMElqb3hOekU0TmpnNU56WTVMQ0psZUhBaU9qRTNNVGczTnpZeE5qbDkuc2hOaGZwSW14dkFZRWFSNlZwaU5GZGhoTEJ6aXJhVkk3eUZjRHJJbktzbyc7XG4gIGxldCByZXF1ZXN0T3B0aW9uczsgLy9BdXRoZW50aWNhdGlvbiB0b2tlblxuICBjb25zdCBjaGFubmVsSWQgPSBpdGVtLmNoYW5uZWxJZCAvL0NoYW5lbCBJZFxuICBjb25zb2xlLmxvZyhpdGVtLmNoYW5uZWxJZCk7XG4gIFxuXG4gIHRyeSB7XG4gICAgLy9JbmplY3QgU2NyaXB0XG4gICAgaWYgKGluamVjdCkge1xuICAgICAgdXJsID0gJ2h0dHBzOi8vcGF5dS5pbi5uZ3Jvay5pby9hcGkvY2hhbm5lbC9pbmplY3QnO1xuXG4gICAgICByZXF1ZXN0T3B0aW9ucyA9IHtcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgIGhlYWRlcnM6IHsgXG4gICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyAsXG4gICAgICAgICAgJ2F1dGhvcml6YXRpb24nOiBhdXRoVG9rZW5cbiAgICAgICAgfSxcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyBjaGFubmVsX2lkOiBjaGFubmVsSWQgfSksXG4gICAgICB9O1xuICAgIH0gZWxzZSB7XG4gICAgICAvL0VqZWN0IFNjcmlwdFxuICAgICAgdXJsID0gJ2h0dHBzOi8vcGF5dS5pbi5uZ3Jvay5pby9hcGkvY2hhbm5lbC9lamVjdCc7XG5cbiAgICAgIHJlcXVlc3RPcHRpb25zID0ge1xuICAgICAgICBtZXRob2Q6ICdERUxFVEUnLFxuICAgICAgICBoZWFkZXJzOiB7IFxuICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgLFxuICAgICAgICAgICdhdXRob3JpemF0aW9uJzogYXV0aFRva2VuXG4gICAgICAgIH0sXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgY2hhbm5lbF9pZDogY2hhbm5lbElkIH0pLFxuICAgICAgfTtcbiAgICB9XG5cbiAgICBjb25zb2xlLmxvZyh1cmwsIHJlcXVlc3RPcHRpb25zKTtcbiAgICBcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybCwgcmVxdWVzdE9wdGlvbnMpO1xuXG4gICAgaWYgKCFyZXNwb25zZS5vaykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdOZXR3b3JrIHJlc3BvbnNlIHdhcyBub3Qgb2s6ICcgKyByZXNwb25zZS5zdGF0dXNUZXh0KTtcbiAgICB9XG5cbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgc2V0Q2hhbm5lbChyZXN1bHQuZGF0YSk7XG4gICAgY29uc29sZS5sb2cocmVzdWx0LmRhdGEsICdkYXRhJyk7XG5cbiAgICAvLyBVcGRhdGUgdGhlIGFsZXJ0IHR5cGUgdG8gc3VjY2VzcyBvbiBzdWNjZXNzZnVsIHJlc3BvbnNlXG4gICAgYWxlcnRJZCA9IGFsZXJ0c01hbmFnZXIuYWRkKHtcbiAgICAgIG1lc3NhZ2VzOiBbeyB0ZXh0OiBpdGVtLmluamVjdGVkQXQgIT0gbnVsbCA/IGBTY3JpcHQgaXMgZWplY3RpbmcgZnJvbSAke2l0ZW0ubmFtZX1gIDogYFNjcmlwdCBpcyBpbmplY3RpbmcgdG8gJHtpdGVtLm5hbWV9YCB9XSxcbiAgICAgIHR5cGU6ICdzdWNjZXNzJywgLy8gSW5pdGlhbGx5IHNldCB0byBsb2FkaW5nXG4gICAgICBvbkNsb3NlOiAoKSA9PiBudWxsLFxuICAgIH0pO1xuXG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcignVGhlcmUgaGFzIGJlZW4gYSBwcm9ibGVtIHdpdGggeW91ciBmZXRjaCBvcGVyYXRpb246JywgZXJyb3IpO1xuXG4gICAgLy8gVXBkYXRlIHRoZSBhbGVydCB0eXBlIHRvIGVycm9yIG9uIGZhaWx1cmVcbiAgICBhbGVydElkID0gYWxlcnRzTWFuYWdlci5hZGQoe1xuICAgICAgbWVzc2FnZXM6IFt7IHRleHQ6ICdUaGVyZSB3YXMgYSBwcm9ibGVtIHdpdGggeW91ciByZXF1ZXN0LicgfV0sXG4gICAgICB0eXBlOiAnZXJyb3InLFxuICAgICAgb25DbG9zZTogKCkgPT4gbnVsbCxcbiAgICB9KTtcblxuICAgIC8vcmVtb3ZlIGFsZXJ0IG1hbmFnZXIgYWZ0ZXIgMiBzZWNvbmRzXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBhbGVydHNNYW5hZ2VyLnJlbW92ZShhbGVydElkKTtcbiAgICB9LCAyMDAwKTtcblxuICB9IGZpbmFsbHkge1xuICAgIC8vcmVtb3ZlIGJ1dHRvbiBsb2FkaW5nXG4gICAgc2V0TG9hZGluZ1N0YXRlcyh7IC4uLmxvYWRpbmdTdGF0ZXMsIFtpdGVtLl9pZF06IGZhbHNlIH0pO1xuXG4gICAgLy9yZW1vdmUgYWxlcnQgbWFuYWdlciBhZnRlciAyIHNlY29uZHNcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGFsZXJ0c01hbmFnZXIucmVtb3ZlKGFsZXJ0SWQpO1xuICAgIH0sIDIwMDApO1xuICB9XG59O1xuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEluZGV4KCkge1xuICBjb25zdCBbQ2hhbm5lbCwgc2V0Q2hhbm5lbF0gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSB1c2VTdGF0ZShudWxsKTtcbiAgY29uc3QgW2xvYWRpbmdTdGF0ZXMsIHNldExvYWRpbmdTdGF0ZXNdID0gdXNlU3RhdGUoe30pO1xuICBjb25zdCBbVG9rZW4sIHNldFRva2VuXSA9IHVzZVN0YXRlKG51bGwpO1xuICBjb25zdCBzZWFyY2hQYXJhbXMgPSB1c2VRdWVyeSgpO1xuXG4gIFxuICBjb25zdCBnZXRDaGFubmVsTGlzdCA9IGFzeW5jICgpID0+IHtcbiAgICBzZXRMb2FkaW5nKHRydWUpO1xuICAgIHNldEVycm9yKG51bGwpO1xuICAgIGNvbnNvbGUubG9nKFRva2VuKTtcbiAgICBcblxuICAgIC8vIHRyeSB7XG4gICAgLy8gICBsZXQgdXJsID0gJ2h0dHBzOi8vcGF5dS5pbi5uZ3Jvay5pby9hcGkvY2hhbm5lbC9saXN0JztcblxuICAgIC8vICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwsIHtcbiAgICAvLyAgICAgbWV0aG9kOiAnR0VUJyxcbiAgICAvLyAgICAgaGVhZGVyczoge1xuICAgIC8vICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgLy8gICAgICAgJ2F1dGhvcml6YXRpb24nOiAnZXlKaGJHY2lPaUpJVXpJMU5pSXNJblI1Y0NJNklrcFhWQ0o5LmV5SjFkV2xrSWpvaU1XRm1NRFZrTkdNdE1qZGpOUzAwWmpZd0xXRTVZekV0TkRkalpHRTBNbVpqWmpFMElpd2lhV0YwSWpveE56RTROamc1TnpZNUxDSmxlSEFpT2pFM01UZzNOell4TmpsOS5zaE5oZnBJbXh2QVlFYVI2VnBpTkZkaGhMQnppcmFWSTd5RmNEckluS3NvJ1xuICAgIC8vICAgICB9XG4gICAgLy8gICB9KTtcblxuICAgIC8vICAgaWYgKCFyZXNwb25zZS5vaykge1xuICAgIC8vICAgICB0aHJvdyBuZXcgRXJyb3IoJ05ldHdvcmsgcmVzcG9uc2Ugd2FzIG5vdCBvaycpO1xuICAgIC8vICAgfVxuICAgIC8vICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgIC8vICAgc2V0Q2hhbm5lbChyZXN1bHQuZGF0YSk7IC8vIFN0b3JlIGRhdGEgaW4gc3RhdGVcbiAgICAvLyAgIGNvbnNvbGUubG9nKHJlc3VsdCwgXCJyZXN1bHRcIik7XG4gICAgLy8gfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAvLyAgIHNldEVycm9yKGVycm9yLm1lc3NhZ2UpO1xuICAgIC8vICAgc2V0TG9hZGluZyh0cnVlKTtcbiAgICAvLyB9IGZpbmFsbHkge1xuICAgIC8vICAgc2V0TG9hZGluZyhmYWxzZSk7XG4gICAgLy8gfVxuICB9O1xuXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgIGlmKHNlYXJjaFBhcmFtcykge1xuICAgICAgICBzZXRUb2tlbihzZWFyY2hQYXJhbXNbMV0pO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgfSwgW3NlYXJjaFBhcmFtc10pO1xuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgIGdldENoYW5uZWxMaXN0KCk7XG4gICAgfSwgW10pO1xuXG4gIGlmIChsb2FkaW5nKSByZXR1cm4gPExvYWRpbmcgLz47XG4gIGlmIChlcnJvcikgcmV0dXJuIChcbiAgICA8UGFuZWwgbWFyZ2luPVwieHhMYXJnZVwiPlxuICAgICAgPEVycm9yTWVzc2FnZSBlcnJvcj17ZXJyb3J9IC8+XG4gICAgICA8QnV0dG9uIGFjdGlvblR5cGU9XCJub3JtYWxcIiBpc0xvYWRpbmc9e2xvYWRpbmd9IHZhcmlhbnQ9XCJwcmltYXJ5XCIgb25DbGljaz17KCkgPT4gZ2V0Q2hhbm5lbExpc3QoKX0+UmVsb2FkPC9CdXR0b24+XG4gICAgPC9QYW5lbD5cbiAgKTtcblxuICByZXR1cm4gKFxuICAgIDxQYW5lbCBtYXJnaW49XCJ4eHhMYXJnZVwiPlxuICAgICAgPEJveD5cbiAgICAgICAge0NoYW5uZWwubGVuZ3RoID4gMCAmJiAoXG4gICAgICAgICAgPD5cbiAgICAgICAgICAgIHtDaGFubmVsLm1hcCgoaXRlbSkgPT4gKFxuICAgICAgICAgICAgICA8Qm94XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yPVwic2Vjb25kYXJ5MjBcIlxuICAgICAgICAgICAgICAgIGJvcmRlcj1cImJveFwiXG4gICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzPVwibm9ybWFsXCJcbiAgICAgICAgICAgICAgICBwYWRkaW5nPVwic21hbGxcIlxuICAgICAgICAgICAgICAgIG1hcmdpbkJvdHRvbT1cIm1lZGl1bVwiXG4gICAgICAgICAgICAgICAga2V5PXtpdGVtLl9pZH1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxGbGV4IGp1c3RpZnlDb250ZW50PVwic3BhY2UtYmV0d2VlblwiIGFsaWduSXRlbXM9XCJjZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgIDxGbGV4SXRlbT48VGV4dCBib2xkPntpdGVtLmNoYW5uZWxOYW1lfTwvVGV4dD48L0ZsZXhJdGVtPlxuICAgICAgICAgICAgICAgICAgPEZsZXhJdGVtPlxuICAgICAgICAgICAgICAgICAgICB7aXRlbS5pc0VuYWJsZWQgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgaXRlbS5pbmplY3RlZEF0ICE9IG51bGwgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbkxlZnQ9XCJtZWRpdW1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBhY3Rpb25UeXBlPVwiZGVzdHJ1Y3RpdmVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBpc0xvYWRpbmc9e2xvYWRpbmdTdGF0ZXNbaXRlbS5faWRdIHx8IGZhbHNlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVCdXR0b25DbGljayhpdGVtLCBzZXRMb2FkaW5nU3RhdGVzLCBsb2FkaW5nU3RhdGVzLCBzZXRDaGFubmVsLCBmYWxzZSl9XG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIEVqZWN0XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5MZWZ0PVwibWVkaXVtXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYWN0aW9uVHlwZT1cIm5vcm1hbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlzTG9hZGluZz17bG9hZGluZ1N0YXRlc1tpdGVtLl9pZF0gfHwgZmFsc2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZUJ1dHRvbkNsaWNrKGl0ZW0sIHNldExvYWRpbmdTdGF0ZXMsIGxvYWRpbmdTdGF0ZXMsIHNldENoYW5uZWwsIHRydWUpfVxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICBJbmplY3RcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgICAgICA8VG9vbHRpcCBwbGFjZW1lbnQ9XCJyaWdodFwiIHRyaWdnZXI9ezxidXR0b24gY2xhc3NOYW1lPSdkaXNhYmxlZCc+RGlzYWJsZWQ8L2J1dHRvbj59PlxuICAgICAgICAgICAgICAgICAgICAgICAgVGhpcyBjaGFubmVsIGlzIG5vdCBhY3RpdmVcbiAgICAgICAgICAgICAgICAgICAgICA8L1Rvb2x0aXA+XG4gICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICA8L0ZsZXhJdGVtPlxuICAgICAgICAgICAgICAgIDwvRmxleD5cbiAgICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICA8Lz5cbiAgICAgICAgKX1cbiAgICAgIDwvQm94PlxuICAgIDwvUGFuZWw+XG4gICk7XG59XG5cbiJdLCJuYW1lcyI6WyJQYW5lbCIsIkJveCIsIkJ1dHRvbiIsIlRvb2x0aXAiLCJUZXh0IiwiRmxleCIsIkZsZXhJdGVtIiwiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkVycm9yTWVzc2FnZSIsIkxvYWRpbmciLCJhbGVydHNNYW5hZ2VyIiwidXNlUXVlcnkiLCJoYW5kbGVCdXR0b25DbGljayIsIml0ZW0iLCJzZXRMb2FkaW5nU3RhdGVzIiwibG9hZGluZ1N0YXRlcyIsInNldENoYW5uZWwiLCJpbmplY3QiLCJfaWQiLCJhbGVydElkIiwidXJsIiwiYXV0aFRva2VuIiwicmVxdWVzdE9wdGlvbnMiLCJjaGFubmVsSWQiLCJjb25zb2xlIiwibG9nIiwibWV0aG9kIiwiaGVhZGVycyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwiY2hhbm5lbF9pZCIsInJlc3BvbnNlIiwiZmV0Y2giLCJvayIsIkVycm9yIiwic3RhdHVzVGV4dCIsInJlc3VsdCIsImpzb24iLCJkYXRhIiwiYWRkIiwibWVzc2FnZXMiLCJ0ZXh0IiwiaW5qZWN0ZWRBdCIsIm5hbWUiLCJ0eXBlIiwib25DbG9zZSIsImVycm9yIiwic2V0VGltZW91dCIsInJlbW92ZSIsIkluZGV4IiwiQ2hhbm5lbCIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwic2V0RXJyb3IiLCJUb2tlbiIsInNldFRva2VuIiwic2VhcmNoUGFyYW1zIiwiZ2V0Q2hhbm5lbExpc3QiLCJtYXJnaW4iLCJhY3Rpb25UeXBlIiwiaXNMb2FkaW5nIiwidmFyaWFudCIsIm9uQ2xpY2siLCJsZW5ndGgiLCJtYXAiLCJiYWNrZ3JvdW5kQ29sb3IiLCJib3JkZXIiLCJib3JkZXJSYWRpdXMiLCJwYWRkaW5nIiwibWFyZ2luQm90dG9tIiwianVzdGlmeUNvbnRlbnQiLCJhbGlnbkl0ZW1zIiwiYm9sZCIsImNoYW5uZWxOYW1lIiwiaXNFbmFibGVkIiwibWFyZ2luTGVmdCIsInBsYWNlbWVudCIsInRyaWdnZXIiLCJidXR0b24iLCJjbGFzc05hbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.tsx\n"));

/***/ })

});