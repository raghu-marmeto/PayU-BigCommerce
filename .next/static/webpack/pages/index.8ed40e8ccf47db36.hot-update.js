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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Index; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _bigcommerce_big_design__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @bigcommerce/big-design */ \"./node_modules/@bigcommerce/big-design/dist/es/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_error__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/error */ \"./components/error.tsx\");\n/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_app */ \"./pages/_app.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst handleButtonClick = async (item, setLoadingStates, loadingStates, e)=>{\n    console.log(item, e);\n    setLoadingStates({\n        ...loadingStates,\n        [item._id]: true\n    });\n    //show alert popup when script injected and ejected from channels \n    const alertId = _app__WEBPACK_IMPORTED_MODULE_3__.alertsManager.add({\n        messages: [\n            {\n                text: item.uuid ? \"Script is ejected from \".concat(item.name) : \"Script is injected to \".concat(item.name)\n            }\n        ],\n        type: \"error\",\n        onClose: ()=>null\n    });\n    // Remove the alert after 2 seconds\n    setTimeout(()=>{\n        setLoadingStates({\n            ...loadingStates,\n            [item._id]: false\n        });\n        _app__WEBPACK_IMPORTED_MODULE_3__.alertsManager.remove(alertId);\n    }, 2000);\n};\nfunction Index() {\n    _s();\n    const [Channel, setChannel] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [loadingStates, setLoadingStates] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});\n    const data = [\n        {\n            \"_id\": \"66689410213783aab5d0fed9\",\n            \"channelId\": 1,\n            \"name\": \"Marmeto IN\",\n            \"__v\": 0,\n            \"createdAt\": \"2024-06-11T18:14:40.494Z\",\n            \"domain\": \"https://marmetotest1.mybigcommerce.com\",\n            \"ejectedAt\": null,\n            \"injectedAt\": null,\n            \"isEnabled\": true,\n            \"updatedAt\": \"2024-06-11T18:14:40.494Z\",\n            \"uuid\": \"1af05d4c-27c5-4f60-a9c1-47cda42fcf14\"\n        },\n        {\n            \"_id\": \"66689410213783aab5d0ff13\",\n            \"channelId\": 1588903,\n            \"name\": \"Marmeto US\",\n            \"__v\": 0,\n            \"createdAt\": \"2024-06-11T18:14:40.608Z\",\n            \"domain\": \"https://test1-1588903.mybigcommerce.com\",\n            \"ejectedAt\": null,\n            \"injectedAt\": null,\n            \"isEnabled\": false,\n            \"updatedAt\": \"2024-06-11T18:14:40.608Z\",\n            \"uuid\": \"1af05d4c-27c5-4f60-a9c1-47cda42fcf14\"\n        },\n        {\n            \"_id\": \"66689410213783aab5d0ff14\",\n            \"channelId\": 1588904,\n            \"name\": \"Marmeto AU\",\n            \"__v\": 0,\n            \"createdAt\": \"2024-06-11T18:14:40.608Z\",\n            \"domain\": \"https://test1-1588903.mybigcommerce.com\",\n            \"ejectedAt\": null,\n            \"injectedAt\": null,\n            \"isEnabled\": true,\n            \"updatedAt\": \"2024-06-11T18:14:40.608Z\"\n        }\n    ];\n    const getChannelList = async ()=>{\n        setLoading(true);\n        setError(null);\n        try {\n            const response = await fetch(\"https://randomuser.me/api/\");\n            if (!response.ok) {\n                throw new Error(\"Network response was not ok\");\n            }\n            const result = await response.json();\n            setChannel(data); // Store data in state\n            console.log(Channel, \"Channels\", Channel.length);\n        } catch (error) {\n            setError(error.message);\n        } finally{\n            setLoading(false);\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        getChannelList();\n    }, []);\n    if (error) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_error__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        error: error\n    }, void 0, false, {\n        fileName: \"/home/raghu/Marmeto/Bigcommerce/payu-bigcommerce/pages/index.tsx\",\n        lineNumber: 97,\n        columnNumber: 21\n    }, this);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_bigcommerce_big_design__WEBPACK_IMPORTED_MODULE_4__.Panel, {\n        margin: \"xxLarge\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_bigcommerce_big_design__WEBPACK_IMPORTED_MODULE_4__.Box, {\n            marginBottom: \"xxLarge\",\n            children: Channel.length > 0 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                children: Channel.map((item)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_bigcommerce_big_design__WEBPACK_IMPORTED_MODULE_4__.Box, {\n                        backgroundColor: \"secondary20\",\n                        border: \"box\",\n                        borderRadius: \"normal\",\n                        padding: \"medium\",\n                        shadow: \"floating\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_bigcommerce_big_design__WEBPACK_IMPORTED_MODULE_4__.Flex, {\n                            justifyContent: \"space-between\",\n                            alignItems: \"center\",\n                            flexRowGap: \"medium\",\n                            flexGap: \"medium\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_bigcommerce_big_design__WEBPACK_IMPORTED_MODULE_4__.FlexItem, {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_bigcommerce_big_design__WEBPACK_IMPORTED_MODULE_4__.Text, {\n                                        children: item.name\n                                    }, void 0, false, {\n                                        fileName: \"/home/raghu/Marmeto/Bigcommerce/payu-bigcommerce/pages/index.tsx\",\n                                        lineNumber: 117,\n                                        columnNumber: 29\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/home/raghu/Marmeto/Bigcommerce/payu-bigcommerce/pages/index.tsx\",\n                                    lineNumber: 117,\n                                    columnNumber: 19\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_bigcommerce_big_design__WEBPACK_IMPORTED_MODULE_4__.FlexItem, {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                                        children: item.isEnabled ? item.uuid ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_bigcommerce_big_design__WEBPACK_IMPORTED_MODULE_4__.Button, {\n                                            marginLeft: \"medium\",\n                                            actionType: \"destructive\",\n                                            isLoading: loadingStates[item._id] || false,\n                                            onClick: (e)=>handleButtonClick(item, setLoadingStates, loadingStates, e),\n                                            children: \"Eject\"\n                                        }, void 0, false, {\n                                            fileName: \"/home/raghu/Marmeto/Bigcommerce/payu-bigcommerce/pages/index.tsx\",\n                                            lineNumber: 122,\n                                            columnNumber: 25\n                                        }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_bigcommerce_big_design__WEBPACK_IMPORTED_MODULE_4__.Button, {\n                                            marginLeft: \"medium\",\n                                            actionType: \"normal\",\n                                            isLoading: loadingStates[item._id] || false,\n                                            onClick: (e)=>handleButtonClick(item, setLoadingStates, loadingStates, e),\n                                            children: \"Inject\"\n                                        }, void 0, false, {\n                                            fileName: \"/home/raghu/Marmeto/Bigcommerce/payu-bigcommerce/pages/index.tsx\",\n                                            lineNumber: 131,\n                                            columnNumber: 25\n                                        }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_bigcommerce_big_design__WEBPACK_IMPORTED_MODULE_4__.Tooltip, {\n                                            placement: \"right\",\n                                            trigger: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_bigcommerce_big_design__WEBPACK_IMPORTED_MODULE_4__.Button, {\n                                                marginLeft: \"medium\",\n                                                variant: \"secondary\",\n                                                children: \"Disabled\"\n                                            }, void 0, false, {\n                                                fileName: \"/home/raghu/Marmeto/Bigcommerce/payu-bigcommerce/pages/index.tsx\",\n                                                lineNumber: 141,\n                                                columnNumber: 59\n                                            }, void 0),\n                                            children: \"This channel is not active\"\n                                        }, void 0, false, {\n                                            fileName: \"/home/raghu/Marmeto/Bigcommerce/payu-bigcommerce/pages/index.tsx\",\n                                            lineNumber: 141,\n                                            columnNumber: 23\n                                        }, this)\n                                    }, void 0, false)\n                                }, void 0, false, {\n                                    fileName: \"/home/raghu/Marmeto/Bigcommerce/payu-bigcommerce/pages/index.tsx\",\n                                    lineNumber: 118,\n                                    columnNumber: 19\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/raghu/Marmeto/Bigcommerce/payu-bigcommerce/pages/index.tsx\",\n                            lineNumber: 116,\n                            columnNumber: 19\n                        }, this)\n                    }, item._id, false, {\n                        fileName: \"/home/raghu/Marmeto/Bigcommerce/payu-bigcommerce/pages/index.tsx\",\n                        lineNumber: 108,\n                        columnNumber: 17\n                    }, this))\n            }, void 0, false)\n        }, void 0, false, {\n            fileName: \"/home/raghu/Marmeto/Bigcommerce/payu-bigcommerce/pages/index.tsx\",\n            lineNumber: 101,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/home/raghu/Marmeto/Bigcommerce/payu-bigcommerce/pages/index.tsx\",\n        lineNumber: 100,\n        columnNumber: 5\n    }, this);\n}\n_s(Index, \"jvKUiZidxUgVNiZJJzNvI+BmD60=\");\n_c = Index;\nvar _c;\n$RefreshReg$(_c, \"Index\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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REFBSUE7NEJBQUNrRCxnQkFBZTs0QkFBZ0JDLFlBQVc7NEJBQVNDLFlBQVc7NEJBQVNDLFNBQVE7OzhDQUNyRiw4REFBQ3BELDZEQUFRQTs4Q0FBQyw0RUFBQ0YseURBQUlBO2tEQUFFUyxLQUFLWSxJQUFJOzs7Ozs7Ozs7Ozs4Q0FDMUIsOERBQUNuQiw2REFBUUE7OENBQ1A7a0RBQ0NPLEtBQUs4QyxTQUFTLEdBQ2I5QyxLQUFLVyxJQUFJLGlCQUNQLDhEQUFDdEIsMkRBQU1BOzRDQUNMMEQsWUFBVzs0Q0FDWEMsWUFBVzs0Q0FDWEMsV0FBVy9DLGFBQWEsQ0FBQ0YsS0FBS00sR0FBRyxDQUFDLElBQUk7NENBQ3RDNEMsU0FBUyxDQUFDL0MsSUFBTUosa0JBQWtCQyxNQUFNQyxrQkFBa0JDLGVBQWVDO3NEQUMxRTs7Ozs7aUVBSUQsOERBQUNkLDJEQUFNQTs0Q0FDTDBELFlBQVc7NENBQ1hDLFlBQVc7NENBQ1hDLFdBQVcvQyxhQUFhLENBQUNGLEtBQUtNLEdBQUcsQ0FBQyxJQUFJOzRDQUN0QzRDLFNBQVMsQ0FBQy9DLElBQU1KLGtCQUFrQkMsTUFBTUMsa0JBQWtCQyxlQUFlQztzREFDMUU7Ozs7O2lFQUtILDhEQUFDYiw0REFBT0E7NENBQUM2RCxXQUFVOzRDQUFRQyx1QkFBUyw4REFBQy9ELDJEQUFNQTtnREFBQzBELFlBQVc7Z0RBQVNNLFNBQVE7MERBQVk7Ozs7OztzREFBbUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozt1QkEzQnRHckQsS0FBS00sR0FBRzs7Ozs7Ozs7Ozs7Ozs7OztBQXlDL0I7R0FoSXdCVztLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC50c3g/MDdmZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQYW5lbCwgQm94LCBCdXR0b24sIFRvb2x0aXAsIFRleHQsIEZsZXgsIEZsZXhJdGVtfSBmcm9tICdAYmlnY29tbWVyY2UvYmlnLWRlc2lnbic7XG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBFcnJvck1lc3NhZ2UgZnJvbSAnLi4vY29tcG9uZW50cy9lcnJvcic7XG5pbXBvcnQgeyBhbGVydHNNYW5hZ2VyIH0gZnJvbSAnLi9fYXBwJztcblxuY29uc3QgaGFuZGxlQnV0dG9uQ2xpY2sgPSBhc3luYyAoaXRlbSwgc2V0TG9hZGluZ1N0YXRlcywgbG9hZGluZ1N0YXRlcywgZSkgPT4ge1xuXG4gIGNvbnNvbGUubG9nKGl0ZW0sIGUpO1xuXG4gIHNldExvYWRpbmdTdGF0ZXMoeyAuLi5sb2FkaW5nU3RhdGVzLCBbaXRlbS5faWRdOiB0cnVlIH0pO1xuXG4gIC8vc2hvdyBhbGVydCBwb3B1cCB3aGVuIHNjcmlwdCBpbmplY3RlZCBhbmQgZWplY3RlZCBmcm9tIGNoYW5uZWxzIFxuICBjb25zdCBhbGVydElkID0gYWxlcnRzTWFuYWdlci5hZGQoe1xuICAgIG1lc3NhZ2VzOiBbeyB0ZXh0OiBpdGVtLnV1aWQgPyBgU2NyaXB0IGlzIGVqZWN0ZWQgZnJvbSAke2l0ZW0ubmFtZX1gIDogYFNjcmlwdCBpcyBpbmplY3RlZCB0byAke2l0ZW0ubmFtZX1gIH1dLFxuICAgIHR5cGU6ICdlcnJvcicsXG4gICAgb25DbG9zZTogKCkgPT4gbnVsbFxuICB9KTtcblxuICAvLyBSZW1vdmUgdGhlIGFsZXJ0IGFmdGVyIDIgc2Vjb25kc1xuICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICBzZXRMb2FkaW5nU3RhdGVzKHsgLi4ubG9hZGluZ1N0YXRlcywgW2l0ZW0uX2lkXTogZmFsc2UgfSk7XG4gICAgYWxlcnRzTWFuYWdlci5yZW1vdmUoYWxlcnRJZCk7XG4gIH0sIDIwMDApO1xuXG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJbmRleCgpIHtcbiAgY29uc3QgW0NoYW5uZWwsIHNldENoYW5uZWxdID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtlcnJvciwgc2V0RXJyb3JdID0gdXNlU3RhdGUobnVsbCk7XG4gIGNvbnN0IFtsb2FkaW5nU3RhdGVzLCBzZXRMb2FkaW5nU3RhdGVzXSA9IHVzZVN0YXRlKHt9KTtcblxuICBjb25zdCBkYXRhID0gW1xuICAgIHtcbiAgICAgIFwiX2lkXCI6IFwiNjY2ODk0MTAyMTM3ODNhYWI1ZDBmZWQ5XCIsXG4gICAgICBcImNoYW5uZWxJZFwiOiAxLFxuICAgICAgXCJuYW1lXCI6IFwiTWFybWV0byBJTlwiLFxuICAgICAgXCJfX3ZcIjogMCxcbiAgICAgIFwiY3JlYXRlZEF0XCI6IFwiMjAyNC0wNi0xMVQxODoxNDo0MC40OTRaXCIsXG4gICAgICBcImRvbWFpblwiOiBcImh0dHBzOi8vbWFybWV0b3Rlc3QxLm15YmlnY29tbWVyY2UuY29tXCIsXG4gICAgICBcImVqZWN0ZWRBdFwiOiBudWxsLFxuICAgICAgXCJpbmplY3RlZEF0XCI6IG51bGwsXG4gICAgICBcImlzRW5hYmxlZFwiOiB0cnVlLFxuICAgICAgXCJ1cGRhdGVkQXRcIjogXCIyMDI0LTA2LTExVDE4OjE0OjQwLjQ5NFpcIixcbiAgICAgIFwidXVpZFwiOiBcIjFhZjA1ZDRjLTI3YzUtNGY2MC1hOWMxLTQ3Y2RhNDJmY2YxNFwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcIl9pZFwiOiBcIjY2Njg5NDEwMjEzNzgzYWFiNWQwZmYxM1wiLFxuICAgICAgXCJjaGFubmVsSWRcIjogMTU4ODkwMyxcbiAgICAgIFwibmFtZVwiOiBcIk1hcm1ldG8gVVNcIixcbiAgICAgIFwiX192XCI6IDAsXG4gICAgICBcImNyZWF0ZWRBdFwiOiBcIjIwMjQtMDYtMTFUMTg6MTQ6NDAuNjA4WlwiLFxuICAgICAgXCJkb21haW5cIjogXCJodHRwczovL3Rlc3QxLTE1ODg5MDMubXliaWdjb21tZXJjZS5jb21cIixcbiAgICAgIFwiZWplY3RlZEF0XCI6IG51bGwsXG4gICAgICBcImluamVjdGVkQXRcIjogbnVsbCxcbiAgICAgIFwiaXNFbmFibGVkXCI6IGZhbHNlLFxuICAgICAgXCJ1cGRhdGVkQXRcIjogXCIyMDI0LTA2LTExVDE4OjE0OjQwLjYwOFpcIixcbiAgICAgIFwidXVpZFwiOiBcIjFhZjA1ZDRjLTI3YzUtNGY2MC1hOWMxLTQ3Y2RhNDJmY2YxNFwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcIl9pZFwiOiBcIjY2Njg5NDEwMjEzNzgzYWFiNWQwZmYxNFwiLFxuICAgICAgXCJjaGFubmVsSWRcIjogMTU4ODkwNCxcbiAgICAgIFwibmFtZVwiOiBcIk1hcm1ldG8gQVVcIixcbiAgICAgIFwiX192XCI6IDAsXG4gICAgICBcImNyZWF0ZWRBdFwiOiBcIjIwMjQtMDYtMTFUMTg6MTQ6NDAuNjA4WlwiLFxuICAgICAgXCJkb21haW5cIjogXCJodHRwczovL3Rlc3QxLTE1ODg5MDMubXliaWdjb21tZXJjZS5jb21cIixcbiAgICAgIFwiZWplY3RlZEF0XCI6IG51bGwsXG4gICAgICBcImluamVjdGVkQXRcIjogbnVsbCxcbiAgICAgIFwiaXNFbmFibGVkXCI6IHRydWUsXG4gICAgICBcInVwZGF0ZWRBdFwiOiBcIjIwMjQtMDYtMTFUMTg6MTQ6NDAuNjA4WlwiXG4gICAgfVxuICBdO1xuXG4gIGNvbnN0IGdldENoYW5uZWxMaXN0ID0gYXN5bmMgKCkgPT4ge1xuICAgIHNldExvYWRpbmcodHJ1ZSk7XG4gICAgc2V0RXJyb3IobnVsbCk7XG5cbiAgICB0cnkge1xuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnaHR0cHM6Ly9yYW5kb211c2VyLm1lL2FwaS8nKTtcbiAgICAgIGlmICghcmVzcG9uc2Uub2spIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdOZXR3b3JrIHJlc3BvbnNlIHdhcyBub3Qgb2snKTtcbiAgICAgIH1cbiAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICAgIHNldENoYW5uZWwoZGF0YSk7IC8vIFN0b3JlIGRhdGEgaW4gc3RhdGVcbiAgICAgIGNvbnNvbGUubG9nKENoYW5uZWwsIFwiQ2hhbm5lbHNcIiwgQ2hhbm5lbC5sZW5ndGgpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBzZXRFcnJvcihlcnJvci5tZXNzYWdlKTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XG4gICAgfVxuICB9O1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZ2V0Q2hhbm5lbExpc3QoKTtcbiAgfSwgW10pXG5cbiAgaWYgKGVycm9yKSByZXR1cm4gPEVycm9yTWVzc2FnZSBlcnJvcj17ZXJyb3J9IC8+O1xuXG4gIHJldHVybiAoXG4gICAgPFBhbmVsIG1hcmdpbj1cInh4TGFyZ2VcIj5cbiAgICAgIDxCb3ggbWFyZ2luQm90dG9tPVwieHhMYXJnZVwiPlxuICAgICAgICB7LyogPEJ1dHRvbiBhY3Rpb25UeXBlPVwibm9ybWFsXCIgaXNMb2FkaW5nPXtsb2FkaW5nfSB2YXJpYW50PVwicHJpbWFyeVwiIG9uQ2xpY2s9e2dldENoYW5uZWxMaXN0fT5cbiAgICAgICAgICBBdXRoZW50aWNhdGVcbiAgICAgICAgPC9CdXR0b24+ICovfVxuICAgICAgICB7Q2hhbm5lbC5sZW5ndGggPiAwICYmIChcbiAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgIHtDaGFubmVsLm1hcCgoaXRlbSkgPT4gKFxuICAgICAgICAgICAgICAgIDxCb3hcbiAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcj1cInNlY29uZGFyeTIwXCJcbiAgICAgICAgICAgICAgICAgIGJvcmRlcj1cImJveFwiXG4gICAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM9XCJub3JtYWxcIlxuICAgICAgICAgICAgICAgICAgcGFkZGluZz1cIm1lZGl1bVwiXG4gICAgICAgICAgICAgICAgICBzaGFkb3c9XCJmbG9hdGluZ1wiXG4gICAgICAgICAgICAgICAgICBrZXk9e2l0ZW0uX2lkfVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxGbGV4IGp1c3RpZnlDb250ZW50PVwic3BhY2UtYmV0d2VlblwiIGFsaWduSXRlbXM9XCJjZW50ZXJcIiBmbGV4Um93R2FwPVwibWVkaXVtXCIgZmxleEdhcD1cIm1lZGl1bVwiPlxuICAgICAgICAgICAgICAgICAgPEZsZXhJdGVtPjxUZXh0PntpdGVtLm5hbWV9PC9UZXh0PjwvRmxleEl0ZW0+XG4gICAgICAgICAgICAgICAgICA8RmxleEl0ZW0+XG4gICAgICAgICAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgICAgIHtpdGVtLmlzRW5hYmxlZCA/IChcbiAgICAgICAgICAgICAgICAgICAgICBpdGVtLnV1aWQgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbkxlZnQ9XCJtZWRpdW1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBhY3Rpb25UeXBlPVwiZGVzdHJ1Y3RpdmVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBpc0xvYWRpbmc9e2xvYWRpbmdTdGF0ZXNbaXRlbS5faWRdIHx8IGZhbHNlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4gaGFuZGxlQnV0dG9uQ2xpY2soaXRlbSwgc2V0TG9hZGluZ1N0YXRlcywgbG9hZGluZ1N0YXRlcywgZSl9XG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIEVqZWN0XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5MZWZ0PVwibWVkaXVtXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYWN0aW9uVHlwZT1cIm5vcm1hbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlzTG9hZGluZz17bG9hZGluZ1N0YXRlc1tpdGVtLl9pZF0gfHwgZmFsc2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiBoYW5kbGVCdXR0b25DbGljayhpdGVtLCBzZXRMb2FkaW5nU3RhdGVzLCBsb2FkaW5nU3RhdGVzLCBlKX1cbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgSW5qZWN0XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgICAgICAgPFRvb2x0aXAgcGxhY2VtZW50PVwicmlnaHRcIiB0cmlnZ2VyPXs8QnV0dG9uIG1hcmdpbkxlZnQ9XCJtZWRpdW1cIiB2YXJpYW50PVwic2Vjb25kYXJ5XCI+RGlzYWJsZWQ8L0J1dHRvbj59PlxuICAgICAgICAgICAgICAgICAgICAgICAgVGhpcyBjaGFubmVsIGlzIG5vdCBhY3RpdmVcbiAgICAgICAgICAgICAgICAgICAgICA8L1Rvb2x0aXA+XG4gICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgIDwvPlxuICAgICAgICAgICAgICAgICAgPC9GbGV4SXRlbT5cbiAgICAgICAgICAgICAgICA8L0ZsZXg+XG4gICAgICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgKX1cbiAgICAgIDwvQm94PlxuICAgIDwvUGFuZWw+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiUGFuZWwiLCJCb3giLCJCdXR0b24iLCJUb29sdGlwIiwiVGV4dCIsIkZsZXgiLCJGbGV4SXRlbSIsIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJFcnJvck1lc3NhZ2UiLCJhbGVydHNNYW5hZ2VyIiwiaGFuZGxlQnV0dG9uQ2xpY2siLCJpdGVtIiwic2V0TG9hZGluZ1N0YXRlcyIsImxvYWRpbmdTdGF0ZXMiLCJlIiwiY29uc29sZSIsImxvZyIsIl9pZCIsImFsZXJ0SWQiLCJhZGQiLCJtZXNzYWdlcyIsInRleHQiLCJ1dWlkIiwibmFtZSIsInR5cGUiLCJvbkNsb3NlIiwic2V0VGltZW91dCIsInJlbW92ZSIsIkluZGV4IiwiQ2hhbm5lbCIsInNldENoYW5uZWwiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsImVycm9yIiwic2V0RXJyb3IiLCJkYXRhIiwiZ2V0Q2hhbm5lbExpc3QiLCJyZXNwb25zZSIsImZldGNoIiwib2siLCJFcnJvciIsInJlc3VsdCIsImpzb24iLCJsZW5ndGgiLCJtZXNzYWdlIiwibWFyZ2luIiwibWFyZ2luQm90dG9tIiwibWFwIiwiYmFja2dyb3VuZENvbG9yIiwiYm9yZGVyIiwiYm9yZGVyUmFkaXVzIiwicGFkZGluZyIsInNoYWRvdyIsImp1c3RpZnlDb250ZW50IiwiYWxpZ25JdGVtcyIsImZsZXhSb3dHYXAiLCJmbGV4R2FwIiwiaXNFbmFibGVkIiwibWFyZ2luTGVmdCIsImFjdGlvblR5cGUiLCJpc0xvYWRpbmciLCJvbkNsaWNrIiwicGxhY2VtZW50IiwidHJpZ2dlciIsInZhcmlhbnQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.tsx\n"));

/***/ })

});