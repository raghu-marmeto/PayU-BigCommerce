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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Index; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _bigcommerce_big_design__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @bigcommerce/big-design */ \"./node_modules/@bigcommerce/big-design/dist/es/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_error__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/error */ \"./components/error.tsx\");\n/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_app */ \"./pages/_app.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst handleButtonClick = async (item, setLoadingStates, loadingStates, e)=>{\n    console.log(item, e);\n    setLoadingStates({\n        ...loadingStates,\n        [item._id]: true\n    });\n    //show alert popup when script injected and ejected from channels \n    const alertId = _app__WEBPACK_IMPORTED_MODULE_3__.alertsManager.add({\n        messages: [\n            {\n                text: item.uuid ? \"Script is ejected from \".concat(item.name) : \"Script is injected to \".concat(item.name)\n            }\n        ],\n        type: \"error\",\n        onClose: ()=>null\n    });\n    // Remove the alert after 2 seconds\n    setTimeout(()=>{\n        setLoadingStates({\n            ...loadingStates,\n            [item._id]: false\n        });\n        _app__WEBPACK_IMPORTED_MODULE_3__.alertsManager.remove(alertId);\n    }, 2000);\n};\nfunction Index() {\n    _s();\n    const [Channel, setChannel] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [loadingStates, setLoadingStates] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});\n    const data = [\n        {\n            \"_id\": \"66689410213783aab5d0fed9\",\n            \"channelId\": 1,\n            \"name\": \"Marmeto IN\",\n            \"__v\": 0,\n            \"createdAt\": \"2024-06-11T18:14:40.494Z\",\n            \"domain\": \"https://marmetotest1.mybigcommerce.com\",\n            \"ejectedAt\": null,\n            \"injectedAt\": null,\n            \"isEnabled\": true,\n            \"updatedAt\": \"2024-06-11T18:14:40.494Z\",\n            \"uuid\": \"1af05d4c-27c5-4f60-a9c1-47cda42fcf14\"\n        },\n        {\n            \"_id\": \"66689410213783aab5d0ff13\",\n            \"channelId\": 1588903,\n            \"name\": \"Marmeto US\",\n            \"__v\": 0,\n            \"createdAt\": \"2024-06-11T18:14:40.608Z\",\n            \"domain\": \"https://test1-1588903.mybigcommerce.com\",\n            \"ejectedAt\": null,\n            \"injectedAt\": null,\n            \"isEnabled\": false,\n            \"updatedAt\": \"2024-06-11T18:14:40.608Z\",\n            \"uuid\": \"1af05d4c-27c5-4f60-a9c1-47cda42fcf14\"\n        },\n        {\n            \"_id\": \"66689410213783aab5d0ff14\",\n            \"channelId\": 1588904,\n            \"name\": \"Marmeto AU\",\n            \"__v\": 0,\n            \"createdAt\": \"2024-06-11T18:14:40.608Z\",\n            \"domain\": \"https://test1-1588903.mybigcommerce.com\",\n            \"ejectedAt\": null,\n            \"injectedAt\": null,\n            \"isEnabled\": true,\n            \"updatedAt\": \"2024-06-11T18:14:40.608Z\"\n        },\n        {\n            \"_id\": \"66689410213783aab5d0ff15\",\n            \"channelId\": 1588905,\n            \"name\": \"Marmeto CN\",\n            \"__v\": 0,\n            \"createdAt\": \"2024-06-11T18:14:40.608Z\",\n            \"domain\": \"https://test1-1588903.mybigcommerce.com\",\n            \"ejectedAt\": null,\n            \"injectedAt\": null,\n            \"isEnabled\": true,\n            \"updatedAt\": \"2024-06-11T18:14:40.608Z\"\n        },\n        {\n            \"_id\": \"66689410213783aab5d0ff16\",\n            \"channelId\": 1588906,\n            \"name\": \"Marmeto SG\",\n            \"__v\": 0,\n            \"createdAt\": \"2024-06-11T18:14:40.608Z\",\n            \"domain\": \"https://test1-1588903.mybigcommerce.com\",\n            \"ejectedAt\": null,\n            \"injectedAt\": null,\n            \"isEnabled\": false,\n            \"updatedAt\": \"2024-06-11T18:14:40.608Z\"\n        }\n    ];\n    const getChannelList = async ()=>{\n        setLoading(true);\n        setError(null);\n        try {\n            const response = await fetch(\"https://randomuser.me/api/\");\n            if (!response.ok) {\n                throw new Error(\"Network response was not ok\");\n            }\n            const result = await response.json();\n            setChannel(data); // Store data in state\n            console.log(Channel, \"Channels\", Channel.length);\n        } catch (error) {\n            setError(error.message);\n        } finally{\n            setLoading(false);\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        getChannelList();\n    }, []);\n    if (error) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_error__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        error: error\n    }, void 0, false, {\n        fileName: \"/home/raghu/Marmeto/Bigcommerce/payu-bigcommerce/pages/index.tsx\",\n        lineNumber: 121,\n        columnNumber: 21\n    }, this);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_bigcommerce_big_design__WEBPACK_IMPORTED_MODULE_4__.Panel, {\n        margin: \"xxxLarge\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_bigcommerce_big_design__WEBPACK_IMPORTED_MODULE_4__.Box, {\n            children: Channel.length > 0 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                children: Channel.map((item)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_bigcommerce_big_design__WEBPACK_IMPORTED_MODULE_4__.Box, {\n                        backgroundColor: \"secondary20\",\n                        border: \"box\",\n                        borderRadius: \"normal\",\n                        padding: \"small\",\n                        marginBottom: \"medium\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_bigcommerce_big_design__WEBPACK_IMPORTED_MODULE_4__.Flex, {\n                            justifyContent: \"space-between\",\n                            alignItems: \"center\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_bigcommerce_big_design__WEBPACK_IMPORTED_MODULE_4__.FlexItem, {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_bigcommerce_big_design__WEBPACK_IMPORTED_MODULE_4__.Text, {\n                                        children: item.name\n                                    }, void 0, false, {\n                                        fileName: \"/home/raghu/Marmeto/Bigcommerce/payu-bigcommerce/pages/index.tsx\",\n                                        lineNumber: 141,\n                                        columnNumber: 29\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/home/raghu/Marmeto/Bigcommerce/payu-bigcommerce/pages/index.tsx\",\n                                    lineNumber: 141,\n                                    columnNumber: 19\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_bigcommerce_big_design__WEBPACK_IMPORTED_MODULE_4__.FlexItem, {\n                                    children: item.isEnabled ? item.uuid ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_bigcommerce_big_design__WEBPACK_IMPORTED_MODULE_4__.Button, {\n                                        marginLeft: \"medium\",\n                                        actionType: \"destructive\",\n                                        isLoading: loadingStates[item._id] || false,\n                                        onClick: (e)=>handleButtonClick(item, setLoadingStates, loadingStates, e),\n                                        children: \"Eject\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/raghu/Marmeto/Bigcommerce/payu-bigcommerce/pages/index.tsx\",\n                                        lineNumber: 145,\n                                        columnNumber: 25\n                                    }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_bigcommerce_big_design__WEBPACK_IMPORTED_MODULE_4__.Button, {\n                                        marginLeft: \"medium\",\n                                        actionType: \"normal\",\n                                        isLoading: loadingStates[item._id] || false,\n                                        onClick: (e)=>handleButtonClick(item, setLoadingStates, loadingStates, e),\n                                        children: \"Inject\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/raghu/Marmeto/Bigcommerce/payu-bigcommerce/pages/index.tsx\",\n                                        lineNumber: 154,\n                                        columnNumber: 25\n                                    }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_bigcommerce_big_design__WEBPACK_IMPORTED_MODULE_4__.Tooltip, {\n                                        placement: \"right\",\n                                        trigger: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_bigcommerce_big_design__WEBPACK_IMPORTED_MODULE_4__.Button, {\n                                            marginLeft: \"medium\",\n                                            variant: \"secondary\",\n                                            children: \"Disabled\"\n                                        }, void 0, false, {\n                                            fileName: \"/home/raghu/Marmeto/Bigcommerce/payu-bigcommerce/pages/index.tsx\",\n                                            lineNumber: 164,\n                                            columnNumber: 59\n                                        }, void 0),\n                                        children: \"This channel is not active\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/raghu/Marmeto/Bigcommerce/payu-bigcommerce/pages/index.tsx\",\n                                        lineNumber: 164,\n                                        columnNumber: 23\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/home/raghu/Marmeto/Bigcommerce/payu-bigcommerce/pages/index.tsx\",\n                                    lineNumber: 142,\n                                    columnNumber: 19\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/raghu/Marmeto/Bigcommerce/payu-bigcommerce/pages/index.tsx\",\n                            lineNumber: 140,\n                            columnNumber: 19\n                        }, this)\n                    }, item._id, false, {\n                        fileName: \"/home/raghu/Marmeto/Bigcommerce/payu-bigcommerce/pages/index.tsx\",\n                        lineNumber: 132,\n                        columnNumber: 17\n                    }, this))\n            }, void 0, false)\n        }, void 0, false, {\n            fileName: \"/home/raghu/Marmeto/Bigcommerce/payu-bigcommerce/pages/index.tsx\",\n            lineNumber: 125,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/home/raghu/Marmeto/Bigcommerce/payu-bigcommerce/pages/index.tsx\",\n        lineNumber: 124,\n        columnNumber: 5\n    }, this);\n} // async function makePostRequest(url, data) {\n //   try {\n //     const response = await fetch(url, {\n //       method: 'POST',\n //       headers: {\n //         'Content-Type': 'application/json'\n //       },\n //       body: JSON.stringify(data)\n //     });\n //     if (!response.ok) {\n //       throw new Error('Network response was not ok' + response.statusText);\n //     }\n //     const responseData = await response.json();\n //     console.log(responseData);\n //   } catch (error) {\n //     console.error('There has been a problem with your fetch operation:', error);\n //   }\n // }\n_s(Index, \"jvKUiZidxUgVNiZJJzNvI+BmD60=\");\n_c = Index;\nvar _c;\n$RefreshReg$(_c, \"Index\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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eEIsbUJBQW1CO0NBQ25CLDZDQUE2QztDQUM3QyxXQUFXO0NBQ1gsbUNBQW1DO0NBQ25DLFVBQVU7Q0FDViwwQkFBMEI7Q0FDMUIsOEVBQThFO0NBQzlFLFFBQVE7Q0FDUixrREFBa0Q7Q0FDbEQsaUNBQWlDO0NBQ2pDLHNCQUFzQjtDQUN0QixtRkFBbUY7Q0FDbkYsTUFBTTtDQUNOLElBQUk7R0EzS29CVztLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC50c3g/MDdmZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQYW5lbCwgQm94LCBCdXR0b24sIFRvb2x0aXAsIFRleHQsIEZsZXgsIEZsZXhJdGVtfSBmcm9tICdAYmlnY29tbWVyY2UvYmlnLWRlc2lnbic7XG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBFcnJvck1lc3NhZ2UgZnJvbSAnLi4vY29tcG9uZW50cy9lcnJvcic7XG5pbXBvcnQgeyBhbGVydHNNYW5hZ2VyIH0gZnJvbSAnLi9fYXBwJztcblxuY29uc3QgaGFuZGxlQnV0dG9uQ2xpY2sgPSBhc3luYyAoaXRlbSwgc2V0TG9hZGluZ1N0YXRlcywgbG9hZGluZ1N0YXRlcywgZSkgPT4ge1xuXG4gIGNvbnNvbGUubG9nKGl0ZW0sIGUpO1xuXG4gIHNldExvYWRpbmdTdGF0ZXMoeyAuLi5sb2FkaW5nU3RhdGVzLCBbaXRlbS5faWRdOiB0cnVlIH0pO1xuXG4gIC8vc2hvdyBhbGVydCBwb3B1cCB3aGVuIHNjcmlwdCBpbmplY3RlZCBhbmQgZWplY3RlZCBmcm9tIGNoYW5uZWxzIFxuICBjb25zdCBhbGVydElkID0gYWxlcnRzTWFuYWdlci5hZGQoe1xuICAgIG1lc3NhZ2VzOiBbeyB0ZXh0OiBpdGVtLnV1aWQgPyBgU2NyaXB0IGlzIGVqZWN0ZWQgZnJvbSAke2l0ZW0ubmFtZX1gIDogYFNjcmlwdCBpcyBpbmplY3RlZCB0byAke2l0ZW0ubmFtZX1gIH1dLFxuICAgIHR5cGU6ICdlcnJvcicsXG4gICAgb25DbG9zZTogKCkgPT4gbnVsbFxuICB9KTtcblxuICAvLyBSZW1vdmUgdGhlIGFsZXJ0IGFmdGVyIDIgc2Vjb25kc1xuICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICBzZXRMb2FkaW5nU3RhdGVzKHsgLi4ubG9hZGluZ1N0YXRlcywgW2l0ZW0uX2lkXTogZmFsc2UgfSk7XG4gICAgYWxlcnRzTWFuYWdlci5yZW1vdmUoYWxlcnRJZCk7XG4gIH0sIDIwMDApO1xuXG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJbmRleCgpIHtcbiAgY29uc3QgW0NoYW5uZWwsIHNldENoYW5uZWxdID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtlcnJvciwgc2V0RXJyb3JdID0gdXNlU3RhdGUobnVsbCk7XG4gIGNvbnN0IFtsb2FkaW5nU3RhdGVzLCBzZXRMb2FkaW5nU3RhdGVzXSA9IHVzZVN0YXRlKHt9KTtcblxuICBjb25zdCBkYXRhID0gW1xuICAgIHtcbiAgICAgIFwiX2lkXCI6IFwiNjY2ODk0MTAyMTM3ODNhYWI1ZDBmZWQ5XCIsXG4gICAgICBcImNoYW5uZWxJZFwiOiAxLFxuICAgICAgXCJuYW1lXCI6IFwiTWFybWV0byBJTlwiLFxuICAgICAgXCJfX3ZcIjogMCxcbiAgICAgIFwiY3JlYXRlZEF0XCI6IFwiMjAyNC0wNi0xMVQxODoxNDo0MC40OTRaXCIsXG4gICAgICBcImRvbWFpblwiOiBcImh0dHBzOi8vbWFybWV0b3Rlc3QxLm15YmlnY29tbWVyY2UuY29tXCIsXG4gICAgICBcImVqZWN0ZWRBdFwiOiBudWxsLFxuICAgICAgXCJpbmplY3RlZEF0XCI6IG51bGwsXG4gICAgICBcImlzRW5hYmxlZFwiOiB0cnVlLFxuICAgICAgXCJ1cGRhdGVkQXRcIjogXCIyMDI0LTA2LTExVDE4OjE0OjQwLjQ5NFpcIixcbiAgICAgIFwidXVpZFwiOiBcIjFhZjA1ZDRjLTI3YzUtNGY2MC1hOWMxLTQ3Y2RhNDJmY2YxNFwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcIl9pZFwiOiBcIjY2Njg5NDEwMjEzNzgzYWFiNWQwZmYxM1wiLFxuICAgICAgXCJjaGFubmVsSWRcIjogMTU4ODkwMyxcbiAgICAgIFwibmFtZVwiOiBcIk1hcm1ldG8gVVNcIixcbiAgICAgIFwiX192XCI6IDAsXG4gICAgICBcImNyZWF0ZWRBdFwiOiBcIjIwMjQtMDYtMTFUMTg6MTQ6NDAuNjA4WlwiLFxuICAgICAgXCJkb21haW5cIjogXCJodHRwczovL3Rlc3QxLTE1ODg5MDMubXliaWdjb21tZXJjZS5jb21cIixcbiAgICAgIFwiZWplY3RlZEF0XCI6IG51bGwsXG4gICAgICBcImluamVjdGVkQXRcIjogbnVsbCxcbiAgICAgIFwiaXNFbmFibGVkXCI6IGZhbHNlLFxuICAgICAgXCJ1cGRhdGVkQXRcIjogXCIyMDI0LTA2LTExVDE4OjE0OjQwLjYwOFpcIixcbiAgICAgIFwidXVpZFwiOiBcIjFhZjA1ZDRjLTI3YzUtNGY2MC1hOWMxLTQ3Y2RhNDJmY2YxNFwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcIl9pZFwiOiBcIjY2Njg5NDEwMjEzNzgzYWFiNWQwZmYxNFwiLFxuICAgICAgXCJjaGFubmVsSWRcIjogMTU4ODkwNCxcbiAgICAgIFwibmFtZVwiOiBcIk1hcm1ldG8gQVVcIixcbiAgICAgIFwiX192XCI6IDAsXG4gICAgICBcImNyZWF0ZWRBdFwiOiBcIjIwMjQtMDYtMTFUMTg6MTQ6NDAuNjA4WlwiLFxuICAgICAgXCJkb21haW5cIjogXCJodHRwczovL3Rlc3QxLTE1ODg5MDMubXliaWdjb21tZXJjZS5jb21cIixcbiAgICAgIFwiZWplY3RlZEF0XCI6IG51bGwsXG4gICAgICBcImluamVjdGVkQXRcIjogbnVsbCxcbiAgICAgIFwiaXNFbmFibGVkXCI6IHRydWUsXG4gICAgICBcInVwZGF0ZWRBdFwiOiBcIjIwMjQtMDYtMTFUMTg6MTQ6NDAuNjA4WlwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcIl9pZFwiOiBcIjY2Njg5NDEwMjEzNzgzYWFiNWQwZmYxNVwiLFxuICAgICAgXCJjaGFubmVsSWRcIjogMTU4ODkwNSxcbiAgICAgIFwibmFtZVwiOiBcIk1hcm1ldG8gQ05cIixcbiAgICAgIFwiX192XCI6IDAsXG4gICAgICBcImNyZWF0ZWRBdFwiOiBcIjIwMjQtMDYtMTFUMTg6MTQ6NDAuNjA4WlwiLFxuICAgICAgXCJkb21haW5cIjogXCJodHRwczovL3Rlc3QxLTE1ODg5MDMubXliaWdjb21tZXJjZS5jb21cIixcbiAgICAgIFwiZWplY3RlZEF0XCI6IG51bGwsXG4gICAgICBcImluamVjdGVkQXRcIjogbnVsbCxcbiAgICAgIFwiaXNFbmFibGVkXCI6IHRydWUsXG4gICAgICBcInVwZGF0ZWRBdFwiOiBcIjIwMjQtMDYtMTFUMTg6MTQ6NDAuNjA4WlwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcIl9pZFwiOiBcIjY2Njg5NDEwMjEzNzgzYWFiNWQwZmYxNlwiLFxuICAgICAgXCJjaGFubmVsSWRcIjogMTU4ODkwNixcbiAgICAgIFwibmFtZVwiOiBcIk1hcm1ldG8gU0dcIixcbiAgICAgIFwiX192XCI6IDAsXG4gICAgICBcImNyZWF0ZWRBdFwiOiBcIjIwMjQtMDYtMTFUMTg6MTQ6NDAuNjA4WlwiLFxuICAgICAgXCJkb21haW5cIjogXCJodHRwczovL3Rlc3QxLTE1ODg5MDMubXliaWdjb21tZXJjZS5jb21cIixcbiAgICAgIFwiZWplY3RlZEF0XCI6IG51bGwsXG4gICAgICBcImluamVjdGVkQXRcIjogbnVsbCxcbiAgICAgIFwiaXNFbmFibGVkXCI6IGZhbHNlLFxuICAgICAgXCJ1cGRhdGVkQXRcIjogXCIyMDI0LTA2LTExVDE4OjE0OjQwLjYwOFpcIlxuICAgIH1cbiAgXTtcblxuICBjb25zdCBnZXRDaGFubmVsTGlzdCA9IGFzeW5jICgpID0+IHtcbiAgICBzZXRMb2FkaW5nKHRydWUpO1xuICAgIHNldEVycm9yKG51bGwpO1xuXG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJ2h0dHBzOi8vcmFuZG9tdXNlci5tZS9hcGkvJyk7XG4gICAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignTmV0d29yayByZXNwb25zZSB3YXMgbm90IG9rJyk7XG4gICAgICB9XG4gICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgICBzZXRDaGFubmVsKGRhdGEpOyAvLyBTdG9yZSBkYXRhIGluIHN0YXRlXG4gICAgICBjb25zb2xlLmxvZyhDaGFubmVsLCBcIkNoYW5uZWxzXCIsIENoYW5uZWwubGVuZ3RoKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgc2V0RXJyb3IoZXJyb3IubWVzc2FnZSk7XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xuICAgIH1cbiAgfTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGdldENoYW5uZWxMaXN0KCk7XG4gIH0sIFtdKVxuXG4gIGlmIChlcnJvcikgcmV0dXJuIDxFcnJvck1lc3NhZ2UgZXJyb3I9e2Vycm9yfSAvPjtcblxuICByZXR1cm4gKFxuICAgIDxQYW5lbCBtYXJnaW49XCJ4eHhMYXJnZVwiPlxuICAgICAgPEJveD5cbiAgICAgICAgey8qIDxCdXR0b24gYWN0aW9uVHlwZT1cIm5vcm1hbFwiIGlzTG9hZGluZz17bG9hZGluZ30gdmFyaWFudD1cInByaW1hcnlcIiBvbkNsaWNrPXtnZXRDaGFubmVsTGlzdH0+XG4gICAgICAgICAgQXV0aGVudGljYXRlXG4gICAgICAgIDwvQnV0dG9uPiAqL31cbiAgICAgICAge0NoYW5uZWwubGVuZ3RoID4gMCAmJiAoXG4gICAgICAgICAgICA8PlxuICAgICAgICAgICAgICB7Q2hhbm5lbC5tYXAoKGl0ZW0pID0+IChcbiAgICAgICAgICAgICAgICA8Qm94XG4gICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I9XCJzZWNvbmRhcnkyMFwiXG4gICAgICAgICAgICAgICAgICBib3JkZXI9XCJib3hcIlxuICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzPVwibm9ybWFsXCJcbiAgICAgICAgICAgICAgICAgIHBhZGRpbmc9XCJzbWFsbFwiXG4gICAgICAgICAgICAgICAgICBtYXJnaW5Cb3R0b209XCJtZWRpdW1cIlxuICAgICAgICAgICAgICAgICAga2V5PXtpdGVtLl9pZH1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8RmxleCBqdXN0aWZ5Q29udGVudD1cInNwYWNlLWJldHdlZW5cIiBhbGlnbkl0ZW1zPVwiY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICA8RmxleEl0ZW0+PFRleHQ+e2l0ZW0ubmFtZX08L1RleHQ+PC9GbGV4SXRlbT5cbiAgICAgICAgICAgICAgICAgIDxGbGV4SXRlbT5cbiAgICAgICAgICAgICAgICAgICAge2l0ZW0uaXNFbmFibGVkID8gKFxuICAgICAgICAgICAgICAgICAgICAgIGl0ZW0udXVpZCA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luTGVmdD1cIm1lZGl1bVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGFjdGlvblR5cGU9XCJkZXN0cnVjdGl2ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlzTG9hZGluZz17bG9hZGluZ1N0YXRlc1tpdGVtLl9pZF0gfHwgZmFsc2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiBoYW5kbGVCdXR0b25DbGljayhpdGVtLCBzZXRMb2FkaW5nU3RhdGVzLCBsb2FkaW5nU3RhdGVzLCBlKX1cbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgRWplY3RcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbkxlZnQ9XCJtZWRpdW1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBhY3Rpb25UeXBlPVwibm9ybWFsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaXNMb2FkaW5nPXtsb2FkaW5nU3RhdGVzW2l0ZW0uX2lkXSB8fCBmYWxzZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KGUpID0+IGhhbmRsZUJ1dHRvbkNsaWNrKGl0ZW0sIHNldExvYWRpbmdTdGF0ZXMsIGxvYWRpbmdTdGF0ZXMsIGUpfVxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICBJbmplY3RcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgICAgICA8VG9vbHRpcCBwbGFjZW1lbnQ9XCJyaWdodFwiIHRyaWdnZXI9ezxCdXR0b24gbWFyZ2luTGVmdD1cIm1lZGl1bVwiIHZhcmlhbnQ9XCJzZWNvbmRhcnlcIj5EaXNhYmxlZDwvQnV0dG9uPn0+XG4gICAgICAgICAgICAgICAgICAgICAgICBUaGlzIGNoYW5uZWwgaXMgbm90IGFjdGl2ZVxuICAgICAgICAgICAgICAgICAgICAgIDwvVG9vbHRpcD5cbiAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgIDwvRmxleEl0ZW0+XG4gICAgICAgICAgICAgICAgPC9GbGV4PlxuICAgICAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgPC8+XG4gICAgICAgICl9XG4gICAgICA8L0JveD5cbiAgICA8L1BhbmVsPlxuICApO1xufVxuXG5cblxuLy8gYXN5bmMgZnVuY3Rpb24gbWFrZVBvc3RSZXF1ZXN0KHVybCwgZGF0YSkge1xuLy8gICB0cnkge1xuLy8gICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsLCB7XG4vLyAgICAgICBtZXRob2Q6ICdQT1NUJyxcbi8vICAgICAgIGhlYWRlcnM6IHtcbi8vICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuLy8gICAgICAgfSxcbi8vICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGRhdGEpXG4vLyAgICAgfSk7XG4vLyAgICAgaWYgKCFyZXNwb25zZS5vaykge1xuLy8gICAgICAgdGhyb3cgbmV3IEVycm9yKCdOZXR3b3JrIHJlc3BvbnNlIHdhcyBub3Qgb2snICsgcmVzcG9uc2Uuc3RhdHVzVGV4dCk7XG4vLyAgICAgfVxuLy8gICAgIGNvbnN0IHJlc3BvbnNlRGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbi8vICAgICBjb25zb2xlLmxvZyhyZXNwb25zZURhdGEpO1xuLy8gICB9IGNhdGNoIChlcnJvcikge1xuLy8gICAgIGNvbnNvbGUuZXJyb3IoJ1RoZXJlIGhhcyBiZWVuIGEgcHJvYmxlbSB3aXRoIHlvdXIgZmV0Y2ggb3BlcmF0aW9uOicsIGVycm9yKTtcbi8vICAgfVxuLy8gfVxuIl0sIm5hbWVzIjpbIlBhbmVsIiwiQm94IiwiQnV0dG9uIiwiVG9vbHRpcCIsIlRleHQiLCJGbGV4IiwiRmxleEl0ZW0iLCJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiRXJyb3JNZXNzYWdlIiwiYWxlcnRzTWFuYWdlciIsImhhbmRsZUJ1dHRvbkNsaWNrIiwiaXRlbSIsInNldExvYWRpbmdTdGF0ZXMiLCJsb2FkaW5nU3RhdGVzIiwiZSIsImNvbnNvbGUiLCJsb2ciLCJfaWQiLCJhbGVydElkIiwiYWRkIiwibWVzc2FnZXMiLCJ0ZXh0IiwidXVpZCIsIm5hbWUiLCJ0eXBlIiwib25DbG9zZSIsInNldFRpbWVvdXQiLCJyZW1vdmUiLCJJbmRleCIsIkNoYW5uZWwiLCJzZXRDaGFubmVsIiwibG9hZGluZyIsInNldExvYWRpbmciLCJlcnJvciIsInNldEVycm9yIiwiZGF0YSIsImdldENoYW5uZWxMaXN0IiwicmVzcG9uc2UiLCJmZXRjaCIsIm9rIiwiRXJyb3IiLCJyZXN1bHQiLCJqc29uIiwibGVuZ3RoIiwibWVzc2FnZSIsIm1hcmdpbiIsIm1hcCIsImJhY2tncm91bmRDb2xvciIsImJvcmRlciIsImJvcmRlclJhZGl1cyIsInBhZGRpbmciLCJtYXJnaW5Cb3R0b20iLCJqdXN0aWZ5Q29udGVudCIsImFsaWduSXRlbXMiLCJpc0VuYWJsZWQiLCJtYXJnaW5MZWZ0IiwiYWN0aW9uVHlwZSIsImlzTG9hZGluZyIsIm9uQ2xpY2siLCJwbGFjZW1lbnQiLCJ0cmlnZ2VyIiwidmFyaWFudCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.tsx\n"));

/***/ })

});