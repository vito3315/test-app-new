"use strict";(self.webpackChunktest_app_new=self.webpackChunktest_app_new||[]).push([[994,4812,2902,8872],{"./node_modules/@mui/material/Typography/Typography.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>Typography_Typography});var objectWithoutPropertiesLoose=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js"),esm_extends=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),clsx=__webpack_require__("./node_modules/clsx/dist/clsx.mjs"),extendSxProp=__webpack_require__("./node_modules/@mui/system/esm/styleFunctionSx/extendSxProp.js"),composeClasses=__webpack_require__("./node_modules/@mui/utils/composeClasses/composeClasses.js"),styled=__webpack_require__("./node_modules/@mui/material/styles/styled.js"),useThemeProps=__webpack_require__("./node_modules/@mui/material/styles/useThemeProps.js"),capitalize=__webpack_require__("./node_modules/@mui/material/utils/capitalize.js"),generateUtilityClasses=__webpack_require__("./node_modules/@mui/utils/generateUtilityClasses/generateUtilityClasses.js"),generateUtilityClass=__webpack_require__("./node_modules/@mui/utils/generateUtilityClass/generateUtilityClass.js");function getTypographyUtilityClass(slot){return(0,generateUtilityClass.Ay)("MuiTypography",slot)}(0,generateUtilityClasses.A)("MuiTypography",["root","h1","h2","h3","h4","h5","h6","subtitle1","subtitle2","body1","body2","inherit","button","caption","overline","alignLeft","alignRight","alignCenter","alignJustify","noWrap","gutterBottom","paragraph"]);var jsx_runtime=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js");const _excluded=["align","className","component","gutterBottom","noWrap","paragraph","variant","variantMapping"],TypographyRoot=(0,styled.Ay)("span",{name:"MuiTypography",slot:"Root",overridesResolver:(props,styles)=>{const{ownerState}=props;return[styles.root,ownerState.variant&&styles[ownerState.variant],"inherit"!==ownerState.align&&styles[`align${(0,capitalize.A)(ownerState.align)}`],ownerState.noWrap&&styles.noWrap,ownerState.gutterBottom&&styles.gutterBottom,ownerState.paragraph&&styles.paragraph]}})((({theme,ownerState})=>(0,esm_extends.A)({margin:0},"inherit"===ownerState.variant&&{font:"inherit"},"inherit"!==ownerState.variant&&theme.typography[ownerState.variant],"inherit"!==ownerState.align&&{textAlign:ownerState.align},ownerState.noWrap&&{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},ownerState.gutterBottom&&{marginBottom:"0.35em"},ownerState.paragraph&&{marginBottom:16}))),defaultVariantMapping={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p",inherit:"p"},colorTransformations={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},Typography_Typography=react.forwardRef((function Typography(inProps,ref){const themeProps=(0,useThemeProps.A)({props:inProps,name:"MuiTypography"}),color=(color=>colorTransformations[color]||color)(themeProps.color),props=(0,extendSxProp.A)((0,esm_extends.A)({},themeProps,{color})),{align="inherit",className,component,gutterBottom=!1,noWrap=!1,paragraph=!1,variant="body1",variantMapping=defaultVariantMapping}=props,other=(0,objectWithoutPropertiesLoose.A)(props,_excluded),ownerState=(0,esm_extends.A)({},props,{align,color,className,component,gutterBottom,noWrap,paragraph,variant,variantMapping}),Component=component||(paragraph?"p":variantMapping[variant]||defaultVariantMapping[variant])||"span",classes=(ownerState=>{const{align,gutterBottom,noWrap,paragraph,variant,classes}=ownerState,slots={root:["root",variant,"inherit"!==ownerState.align&&`align${(0,capitalize.A)(align)}`,gutterBottom&&"gutterBottom",noWrap&&"noWrap",paragraph&&"paragraph"]};return(0,composeClasses.A)(slots,getTypographyUtilityClass,classes)})(ownerState);return(0,jsx_runtime.jsx)(TypographyRoot,(0,esm_extends.A)({as:Component,ref,ownerState,className:(0,clsx.A)(classes.root,className)},other))}))},"./node_modules/@mui/material/utils/capitalize.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__=__webpack_require__("./node_modules/@mui/utils/capitalize/capitalize.js").A},"./stories/Badge/Badge.stories.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Hit:()=>Hit,New:()=>New,Sale:()=>Sale,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _Hit_parameters,_Hit_parameters_docs,_Hit_parameters1,_New_parameters,_New_parameters_docs,_New_parameters1,_Sale_parameters,_Sale_parameters_docs,_Sale_parameters1,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),_Badge__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./stories/Badge/Badge.jsx");const __WEBPACK_DEFAULT_EXPORT__={title:"Главная страница / Товар / Тэг",component:_Badge__WEBPACK_IMPORTED_MODULE_1__.E,tags:["autodocs"],argTypes:{size:{type:"string",description:"Размер бейджа",control:{type:"radio"},options:["big","small"]},view:{type:"string",description:"Тип устройства"},type:{type:"string",description:"Значение бейджа",control:{type:"radio"},options:["hit","new","sale"]}}},Template=args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Badge__WEBPACK_IMPORTED_MODULE_1__.E,{...args,size:"small"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Badge__WEBPACK_IMPORTED_MODULE_1__.E,{...args,size:"big"})]}),Hit=Template.bind({}),New=Template.bind({}),Sale=Template.bind({});Hit.args={view:"pc",type:"hit"},New.args={view:"pc",type:"new"},Sale.args={view:"pc",type:"sale"},Hit.parameters={...Hit.parameters,docs:{...null===(_Hit_parameters=Hit.parameters)||void 0===_Hit_parameters?void 0:_Hit_parameters.docs,source:{originalSource:"args => <><Badge {...args} size={'small'} /><Badge {...args} size={'big'} /></>",...null===(_Hit_parameters1=Hit.parameters)||void 0===_Hit_parameters1||null===(_Hit_parameters_docs=_Hit_parameters1.docs)||void 0===_Hit_parameters_docs?void 0:_Hit_parameters_docs.source}}},New.parameters={...New.parameters,docs:{...null===(_New_parameters=New.parameters)||void 0===_New_parameters?void 0:_New_parameters.docs,source:{originalSource:"args => <><Badge {...args} size={'small'} /><Badge {...args} size={'big'} /></>",...null===(_New_parameters1=New.parameters)||void 0===_New_parameters1||null===(_New_parameters_docs=_New_parameters1.docs)||void 0===_New_parameters_docs?void 0:_New_parameters_docs.source}}},Sale.parameters={...Sale.parameters,docs:{...null===(_Sale_parameters=Sale.parameters)||void 0===_Sale_parameters?void 0:_Sale_parameters.docs,source:{originalSource:"args => <><Badge {...args} size={'small'} /><Badge {...args} size={'big'} /></>",...null===(_Sale_parameters1=Sale.parameters)||void 0===_Sale_parameters1||null===(_Sale_parameters_docs=_Sale_parameters1.docs)||void 0===_Sale_parameters_docs?void 0:_Sale_parameters_docs.source}}};const __namedExportsOrder=["Hit","New","Sale"]},"./stories/Badge/Badge.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{E:()=>Badge_Badge_Badge});var jsx_runtime=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),Typography=__webpack_require__("./node_modules/@mui/material/Typography/Typography.js"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),Badge=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[4]!./stories/Badge/Badge.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(Badge.A,options);Badge.A&&Badge.A.locals&&Badge.A.locals;const arrColor={new:{color:"#EE7900",text:"новинка"},hit:{color:"#AF00DB",text:"хит"},sale:{color:"#DB0021",text:"скидка"}},Badge_Badge_Badge=param=>{let{size,view,type}=param;return(0,jsx_runtime.jsxs)("div",{className:"badge container "+size,children:[(0,jsx_runtime.jsx)("div",{className:"shadow"}),(0,jsx_runtime.jsx)("div",{className:"box",style:{backgroundColor:arrColor[type].color},children:(0,jsx_runtime.jsx)(Typography.A,{component:"span",children:arrColor[type].text})})]})};Badge_Badge_Badge.__docgenInfo={description:"",methods:[],displayName:"Badge"}},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[4]!./stories/Badge/Badge.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".badge{position:relative;display:flex}.badge>.shadow{background-color:rgba(255,255,255,.6);border-radius:1.083032491vw;z-index:1;position:absolute;bottom:0.0722021661vw;right:0.0722021661vw}.badge>.box{display:flex;justify-content:center;align-items:center;z-index:2;border-radius:1.083032491vw}.badge span{color:#fff !important;text-transform:uppercase}.badge.big{width:6.8592057762vw;height:2.238267148vw}.badge.big>.shadow{width:6.8592057762vw;height:2.238267148vw}.badge.big .box{width:6.714801444vw;height:2.0938628159vw}.badge.big span{font-size:0.9386281588vw !important;font-family:var(--inter-font) !important;color:rgba(0,0,0,.8);font-style:normal;font-weight:400;line-height:0.9386281588vw;padding-top:0.0722021661vw}.badge.small{width:2.8880866426vw;height:1.083032491vw}.badge.small>.shadow{width:2.8880866426vw;height:1.083032491vw}.badge.small .box{width:2.7797833935vw;height:0.9386281588vw}.badge.small span{font-size:0.4332129964vw !important;font-family:var(--inter-font) !important;color:rgba(0,0,0,.8);font-style:normal;font-weight:400;line-height:0.4332129964vw}","",{version:3,sources:["webpack://./stories/Badge/Badge.scss","webpack://./stories/global.scss"],names:[],mappings:"AAEA,OACE,iBAAA,CACA,YAAA,CAEA,eACE,qCAAA,CACA,2BAAA,CACA,SAAA,CACA,iBAAA,CACA,qBAAA,CACA,oBAAA,CAEF,YACE,YAAA,CACA,sBAAA,CACA,kBAAA,CACA,SAAA,CACA,2BAAA,CAEF,YACE,qBAAA,CACA,wBAAA,CAGF,WACE,oBAAA,CACA,oBAAA,CACA,mBACE,oBAAA,CACA,oBAAA,CAEF,gBACE,mBAAA,CACA,qBAAA,CAEF,gBC1BF,mCAAA,CACA,wCAAA,CACA,oBAVU,CAYV,iBAAA,CACA,eDsByB,CACrB,0BAAA,CACA,0BAAA,CAIJ,aACE,oBAAA,CACA,oBAAA,CACA,qBACE,oBAAA,CACA,oBAAA,CAEF,kBACE,oBAAA,CACA,qBAAA,CAEF,kBC5CF,mCAAA,CACA,wCAAA,CACA,oBAVU,CAYV,iBAAA,CACA,eDwCyB,CACrB,0BAAA",sourcesContent:["@import '../global';\n\n.badge {\n  position: relative;\n  display: flex;\n\n  & > .shadow{\n    background-color: rgba(255, 255, 255, 0.6);\n    border-radius: calcSize(30);\n    z-index: 1;\n    position: absolute;\n    bottom: calcSize(2);\n    right: calcSize(2);\n  }\n  & > .box {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    z-index: 2;\n    border-radius: calcSize(30);\n  }\n  & span {\n    color: #fff!important;\n    text-transform: uppercase;\n  }\n\n  &.big {\n    width: calcSize(190);\n    height: calcSize(62);\n    & > .shadow {\n      width: calcSize(190);\n      height: calcSize(62);\n    }\n    & .box {\n      width: calcSize(186);\n      height: calcSize(58);\n    }\n    & span{\n      @include MyFonts(26, 400);\n      line-height: calcSize(26);\n      padding-top: calcSize(2);\n    }\n  }\n\n  &.small {\n    width: calcSize(80);\n    height: calcSize(30);\n    & > .shadow {\n      width: calcSize(80);\n      height: calcSize(30);\n    }\n    & .box {\n      width: calcSize(77);\n      height: calcSize(26);\n    }\n    & span{\n      @include MyFonts(12, 400);\n      line-height: calcSize(12);\n    }\n  }\n  \n}\n",'@charset "utf-8";\n\n$Roboto: var(--inter-font);\n$ColorText: rgba(0, 0, 0, 0.8);\n$ColorMain: #cc0033;\n\n@function calcSize($size) {\n  @return calc(100 * calc($size / 2770)) + vw;\n}\n\n@mixin MyFonts($size: 32, $weight: 400) {\n  font-size: calcSize($size) !important;\n  font-family: $Roboto !important;\n  color: $ColorText;\n\n  font-style: normal;\n  font-weight: $weight;\n}\n\n@mixin fonsNew($size: 1rem, $family: $Roboto) {\n  font-size: $size !important;\n  font-family: $family !important;\n  color: $ColorText;\n}\n'],sourceRoot:""}]);const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/css-loader/dist/runtime/api.js":module=>{module.exports=function(cssWithMappingToString){var list=[];return list.toString=function toString(){return this.map((function(item){var content="",needLayer=void 0!==item[5];return item[4]&&(content+="@supports (".concat(item[4],") {")),item[2]&&(content+="@media ".concat(item[2]," {")),needLayer&&(content+="@layer".concat(item[5].length>0?" ".concat(item[5]):""," {")),content+=cssWithMappingToString(item),needLayer&&(content+="}"),item[2]&&(content+="}"),item[4]&&(content+="}"),content})).join("")},list.i=function i(modules,media,dedupe,supports,layer){"string"==typeof modules&&(modules=[[null,modules,void 0]]);var alreadyImportedModules={};if(dedupe)for(var k=0;k<this.length;k++){var id=this[k][0];null!=id&&(alreadyImportedModules[id]=!0)}for(var _k=0;_k<modules.length;_k++){var item=[].concat(modules[_k]);dedupe&&alreadyImportedModules[item[0]]||(void 0!==layer&&(void 0===item[5]||(item[1]="@layer".concat(item[5].length>0?" ".concat(item[5]):""," {").concat(item[1],"}")),item[5]=layer),media&&(item[2]?(item[1]="@media ".concat(item[2]," {").concat(item[1],"}"),item[2]=media):item[2]=media),supports&&(item[4]?(item[1]="@supports (".concat(item[4],") {").concat(item[1],"}"),item[4]=supports):item[4]="".concat(supports)),list.push(item))}},list}},"./node_modules/css-loader/dist/runtime/sourceMaps.js":module=>{module.exports=function(item){var content=item[1],cssMapping=item[3];if(!cssMapping)return content;if("function"==typeof btoa){var base64=btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping)))),data="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64),sourceMapping="/*# ".concat(data," */");return[content].concat([sourceMapping]).join("\n")}return[content].join("\n")}},"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":module=>{var stylesInDOM=[];function getIndexByIdentifier(identifier){for(var result=-1,i=0;i<stylesInDOM.length;i++)if(stylesInDOM[i].identifier===identifier){result=i;break}return result}function modulesToDom(list,options){for(var idCountMap={},identifiers=[],i=0;i<list.length;i++){var item=list[i],id=options.base?item[0]+options.base:item[0],count=idCountMap[id]||0,identifier="".concat(id," ").concat(count);idCountMap[id]=count+1;var indexByIdentifier=getIndexByIdentifier(identifier),obj={css:item[1],media:item[2],sourceMap:item[3],supports:item[4],layer:item[5]};if(-1!==indexByIdentifier)stylesInDOM[indexByIdentifier].references++,stylesInDOM[indexByIdentifier].updater(obj);else{var updater=addElementStyle(obj,options);options.byIndex=i,stylesInDOM.splice(i,0,{identifier,updater,references:1})}identifiers.push(identifier)}return identifiers}function addElementStyle(obj,options){var api=options.domAPI(options);api.update(obj);return function updater(newObj){if(newObj){if(newObj.css===obj.css&&newObj.media===obj.media&&newObj.sourceMap===obj.sourceMap&&newObj.supports===obj.supports&&newObj.layer===obj.layer)return;api.update(obj=newObj)}else api.remove()}}module.exports=function(list,options){var lastIdentifiers=modulesToDom(list=list||[],options=options||{});return function update(newList){newList=newList||[];for(var i=0;i<lastIdentifiers.length;i++){var index=getIndexByIdentifier(lastIdentifiers[i]);stylesInDOM[index].references--}for(var newLastIdentifiers=modulesToDom(newList,options),_i=0;_i<lastIdentifiers.length;_i++){var _index=getIndexByIdentifier(lastIdentifiers[_i]);0===stylesInDOM[_index].references&&(stylesInDOM[_index].updater(),stylesInDOM.splice(_index,1))}lastIdentifiers=newLastIdentifiers}}},"./node_modules/style-loader/dist/runtime/insertBySelector.js":module=>{var memo={};module.exports=function insertBySelector(insert,style){var target=function getTarget(target){if(void 0===memo[target]){var styleTarget=document.querySelector(target);if(window.HTMLIFrameElement&&styleTarget instanceof window.HTMLIFrameElement)try{styleTarget=styleTarget.contentDocument.head}catch(e){styleTarget=null}memo[target]=styleTarget}return memo[target]}(insert);if(!target)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");target.appendChild(style)}},"./node_modules/style-loader/dist/runtime/insertStyleElement.js":module=>{module.exports=function insertStyleElement(options){var element=document.createElement("style");return options.setAttributes(element,options.attributes),options.insert(element,options.options),element}},"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=function setAttributesWithoutAttributes(styleElement){var nonce=__webpack_require__.nc;nonce&&styleElement.setAttribute("nonce",nonce)}},"./node_modules/style-loader/dist/runtime/styleDomAPI.js":module=>{module.exports=function domAPI(options){if("undefined"==typeof document)return{update:function update(){},remove:function remove(){}};var styleElement=options.insertStyleElement(options);return{update:function update(obj){!function apply(styleElement,options,obj){var css="";obj.supports&&(css+="@supports (".concat(obj.supports,") {")),obj.media&&(css+="@media ".concat(obj.media," {"));var needLayer=void 0!==obj.layer;needLayer&&(css+="@layer".concat(obj.layer.length>0?" ".concat(obj.layer):""," {")),css+=obj.css,needLayer&&(css+="}"),obj.media&&(css+="}"),obj.supports&&(css+="}");var sourceMap=obj.sourceMap;sourceMap&&"undefined"!=typeof btoa&&(css+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))))," */")),options.styleTagTransform(css,styleElement,options.options)}(styleElement,options,obj)},remove:function remove(){!function removeStyleElement(styleElement){if(null===styleElement.parentNode)return!1;styleElement.parentNode.removeChild(styleElement)}(styleElement)}}}},"./node_modules/style-loader/dist/runtime/styleTagTransform.js":module=>{module.exports=function styleTagTransform(css,styleElement){if(styleElement.styleSheet)styleElement.styleSheet.cssText=css;else{for(;styleElement.firstChild;)styleElement.removeChild(styleElement.firstChild);styleElement.appendChild(document.createTextNode(css))}}}}]);