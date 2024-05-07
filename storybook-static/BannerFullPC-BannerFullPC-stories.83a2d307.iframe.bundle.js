"use strict";(self.webpackChunktest_app_new=self.webpackChunktest_app_new||[]).push([[9968],{"./stories/BannerFullPC/BannerFullPC.stories.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>BannerFullPC_stories});var jsx_runtime=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),prop_types=__webpack_require__("./node_modules/prop-types/index.js"),prop_types_default=__webpack_require__.n(prop_types),Grid=__webpack_require__("./node_modules/@mui/material/Grid/Grid.js"),KeyboardArrowUp=__webpack_require__("./node_modules/@mui/icons-material/KeyboardArrowUp.js"),BannerPCImg=__webpack_require__("./stories/BannerPCImg/BannerPCImg.jsx"),BannerItemPC=__webpack_require__("./stories/BannerItemPC/BannerItemPC.jsx"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),BannerFullPC=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[4]!./stories/BannerFullPC/BannerFullPC.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(BannerFullPC.A,options);BannerFullPC.A&&BannerFullPC.A.locals&&BannerFullPC.A.locals;const BannerFullPC_BannerFullPC_BannerFullPC=param=>{let{title,img,text,typePromo,count,items}=param;return(0,jsx_runtime.jsxs)(Grid.Ay,{container:!0,justifyContent:"center",className:"BannerFull",children:[(0,jsx_runtime.jsxs)(Grid.Ay,{className:"ImgItem",children:[(0,jsx_runtime.jsx)(BannerPCImg.h,{title,img}),(0,jsx_runtime.jsxs)("span",{className:"ItemOther",children:["Условия акции",(0,jsx_runtime.jsx)(KeyboardArrowUp.A,{})]})]}),(0,jsx_runtime.jsxs)(Grid.Ay,{className:"DescItem",children:[(0,jsx_runtime.jsxs)(Grid.Ay,{className:"FirstItem",children:[(0,jsx_runtime.jsx)("span",{className:"title",children:"Состав"}),(0,jsx_runtime.jsx)("div",{className:"List",children:null==items?void 0:items.map(((item,key)=>(0,jsx_runtime.jsx)(BannerItemPC.H,{number:key+1,title:item.title,img_app:item.img_app,desc:item.desc,price:item.price,typePrice:2==parseInt(typePromo)?"active":"text",count},key)))}),0!=parseInt(typePromo)&&(0,jsx_runtime.jsx)("button",{className:"buttonPromo",children:"Воспользоватся акцией"})]}),(0,jsx_runtime.jsxs)(Grid.Ay,{className:"SecondItem",children:[(0,jsx_runtime.jsx)("span",{className:"title",style:{marginBottom:"1.2vw"},children:title}),(0,jsx_runtime.jsx)(Grid.Ay,{dangerouslySetInnerHTML:{__html:text}})]})]})]})};var _Default_parameters,_Default_parameters_docs,_Default_parameters1;BannerFullPC_BannerFullPC_BannerFullPC.propTypes={title:prop_types_default().string.isRequired,img:prop_types_default().string.isRequired,text:prop_types_default().string.isRequired,typePromo:prop_types_default().string.isRequired,count:prop_types_default().number,items:prop_types_default().array},BannerFullPC_BannerFullPC_BannerFullPC.__docgenInfo={description:"",methods:[],displayName:"BannerFullPC",props:{title:{description:"",type:{name:"string"},required:!0},img:{description:"",type:{name:"string"},required:!0},text:{description:"",type:{name:"string"},required:!0},typePromo:{description:"",type:{name:"string"},required:!0},count:{description:"",type:{name:"number"},required:!1},items:{description:"",type:{name:"array"},required:!1}}};const BannerFullPC_stories={title:"Акции / Акция",component:BannerFullPC_BannerFullPC_BannerFullPC,tags:["autodocs"],argTypes:{title:{type:"string",description:"Имя для картинки"},img:{type:"string",description:"Название картинки"},text:{type:"string",description:"Описание акции"},typePromo:{type:"string",description:"Тип промика"},count:{type:"number",description:"Количество товара"}}},Default=(args=>(0,jsx_runtime.jsx)(BannerFullPC_BannerFullPC_BannerFullPC,{...args})).bind({});Default.args={title:"НОВОЕ КОМБО: пицца Пепперони + сет Атлантида!",img:"https://storage.yandexcloud.net/site-home-img/Kombo1_Tlt_3700x1000.jpg",text:"<p><strong>КОМБО: пицца Пепперони + сет Атлантида!</strong><br>Получите большой набор вкусных блюд всего за <strong>1365 ₽</strong>:<br>- пицца Пепперони<br>- ролл Филадельфия Лайт<br>- ролл Калифорния с лососем Люкс<br>- ролл Акваланг запечённый унаги<br>- ролл Цезарь с курицей запечённый унаги</p>\n<p>Чтобы воспользоваться предложением:<br>Введите промокод <strong>МАМБО</strong> в специальном поле для промокода. Товары автоматически добавятся в корзину.<br>Откройте для себя многообразие вкусовых сочетаний!<br>Пусть каждый найдёт блюдо по душе!</p>\n<p><strong>Акция действует ежедневно</strong> до 29.02.2024 г. на доставку, самовывоз и заказы в кафе. Возможны изменения или приостановление акции. Один промокод можно применить неограниченное количество раз. Промокод не суммируется с другими акциями.</p>",typePromo:2,count:0,items:[{title:"Водопад сет",img_app:"Cezar_s_kuricei_zapechionnyi_unagi",desc:"Сёрфинг запечённый, Цезарь с курицей, Цезарь с курицей запечённый, Каравелла, Ролл Жако",price:"1129"},{title:"Цезарь с курицей запечённый унаги",img_app:"Cezar_s_kuricei_zapechionnyi_unagi",desc:"Куриное филе, запечённое со специями, салат айсберг, творожный сыр, румяная сырная шапочка с унаги и кунжутом",price:"229"}]},Default.parameters={...Default.parameters,docs:{...null===(_Default_parameters=Default.parameters)||void 0===_Default_parameters?void 0:_Default_parameters.docs,source:{originalSource:"args => <BannerFullPC {...args} />",...null===(_Default_parameters1=Default.parameters)||void 0===_Default_parameters1||null===(_Default_parameters_docs=_Default_parameters1.docs)||void 0===_Default_parameters_docs?void 0:_Default_parameters_docs.source}}};const __namedExportsOrder=["Default"]},"./stories/BannerItemPC/BannerItemPC.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{H:()=>BannerItemPC_BannerItemPC_BannerItemPC});var jsx_runtime=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),prop_types=__webpack_require__("./node_modules/prop-types/index.js"),prop_types_default=__webpack_require__.n(prop_types),next_image=__webpack_require__("./node_modules/@storybook/nextjs/dist/images/next-image.mjs"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),BannerItemPC=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[4]!./stories/BannerItemPC/BannerItemPC.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(BannerItemPC.A,options);BannerItemPC.A&&BannerItemPC.A.locals&&BannerItemPC.A.locals;const BannerItemPC_BannerItemPC_BannerItemPC=param=>{let{number,title,img_app,desc,typePrice,price,count}=param;return(0,jsx_runtime.jsxs)("div",{className:"itemBannerPCNew BannerFontPC",children:[(0,jsx_runtime.jsxs)("span",{className:"number",children:[number,"."]}),(0,jsx_runtime.jsx)(next_image.A,{alt:title,src:"https://cdnimg.jacofood.ru/"+img_app+"_1420x1420.jpg",width:1420,height:1420,priority:!0}),(0,jsx_runtime.jsxs)("div",{className:"itemDesc",children:[(0,jsx_runtime.jsx)("span",{className:"title",children:title}),(0,jsx_runtime.jsx)("span",{className:"desc",children:desc}),"text"==typePrice&&(0,jsx_runtime.jsx)("div",{className:"price text",children:(0,jsx_runtime.jsxs)("span",{children:[new Intl.NumberFormat("ru-RU").format(price)," ₽"]})}),"active"==typePrice&&(0==parseInt(count)?(0,jsx_runtime.jsxs)("button",{className:"price button",children:[new Intl.NumberFormat("ru-RU").format(price)," ₽"]}):(0,jsx_runtime.jsxs)("div",{className:"price button",children:[(0,jsx_runtime.jsx)("button",{className:"minus",children:"–"}),(0,jsx_runtime.jsx)("span",{children:count}),(0,jsx_runtime.jsx)("button",{className:"plus",children:"+"})]}))]})]})};BannerItemPC_BannerItemPC_BannerItemPC.propTypes={number:prop_types_default().number.isRequired,title:prop_types_default().string.isRequired,img_app:prop_types_default().string.isRequired,desc:prop_types_default().string.isRequired,price:prop_types_default().string.isRequired,count:prop_types_default().number,typePrice:prop_types_default().oneOf(["active","text"])},BannerItemPC_BannerItemPC_BannerItemPC.__docgenInfo={description:"",methods:[],displayName:"BannerItemPC",props:{number:{description:"",type:{name:"number"},required:!0},title:{description:"",type:{name:"string"},required:!0},img_app:{description:"",type:{name:"string"},required:!0},desc:{description:"",type:{name:"string"},required:!0},price:{description:"",type:{name:"string"},required:!0},count:{description:"",type:{name:"number"},required:!1},typePrice:{description:"",type:{name:"enum",value:[{value:"'active'",computed:!1},{value:"'text'",computed:!1}]},required:!1}}}},"./stories/BannerPCImg/BannerPCImg.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{h:()=>BannerPCImg_BannerPCImg_BannerPCImg});var jsx_runtime=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),prop_types=__webpack_require__("./node_modules/prop-types/index.js"),prop_types_default=__webpack_require__.n(prop_types),next_image=__webpack_require__("./node_modules/@storybook/nextjs/dist/images/next-image.mjs"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),BannerPCImg=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[4]!./stories/BannerPCImg/BannerPCImg.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(BannerPCImg.A,options);BannerPCImg.A&&BannerPCImg.A.locals&&BannerPCImg.A.locals;const BannerPCImg_BannerPCImg_BannerPCImg=param=>{let{img,title}=param;return(0,jsx_runtime.jsx)(next_image.A,{alt:title,src:img,width:3700,height:1e3,priority:!0,className:"BannerPCImg"})};BannerPCImg_BannerPCImg_BannerPCImg.propTypes={img:prop_types_default().string.isRequired,title:prop_types_default().string.isRequired},BannerPCImg_BannerPCImg_BannerPCImg.__docgenInfo={description:"",methods:[],displayName:"BannerPCImg",props:{img:{description:"",type:{name:"string"},required:!0},title:{description:"",type:{name:"string"},required:!0}}}},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[4]!./stories/BannerFullPC/BannerFullPC.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".BannerFull>div{width:90.9747292419vw}.BannerFull .DescItem{display:flex;justify-content:space-between;margin-top:2.1660649819vw;margin-bottom:2.1660649819vw}.BannerFull .DescItem>.FirstItem{width:38.9891696751vw}.BannerFull .DescItem>.FirstItem>.title{width:38.9891696751vw;height:2.1660649819vw;font-size:1.8050541516vw !important;font-family:var(--inter-font) !important;color:rgba(0,0,0,.8);font-style:normal;font-weight:500;line-height:1.8050541516vw;margin-bottom:1.083032491vw;margin-left:2.1660649819vw;display:block}.BannerFull .DescItem>.FirstItem .buttonPromo{margin-left:2.1660649819vw;margin-top:1.083032491vw;width:15.1624548736vw;border-radius:1.6245487365vw;border:0.1083032491vw solid rgba(0,0,0,.2);color:rgba(0,0,0,.6) !important;height:2.8880866426vw;font-size:1.083032491vw !important;font-family:var(--inter-font) !important;color:rgba(0,0,0,.8);font-style:normal;font-weight:400;display:flex;align-items:center;justify-content:center;white-space:nowrap;cursor:pointer}.BannerFull .DescItem>.FirstItem .buttonPromo:hover{background-color:#f2f2f2;border:0.0722021661vw solid #ccc}.BannerFull .DescItem>.FirstItem .buttonPromo:target{background-color:#f2f2f2;border:0.0722021661vw solid #ccc}.BannerFull .DescItem>.FirstItem .buttonPromo:active{background-color:#f2f2f2;border:0.0722021661vw solid #ccc}.BannerFull .DescItem>.SecondItem{width:38.9891696751vw}.BannerFull .DescItem>.SecondItem>.title{font-size:1.8050541516vw !important;font-family:var(--inter-font) !important;color:rgba(0,0,0,.8);font-style:normal;font-weight:500}.BannerFull .DescItem>.SecondItem p,.BannerFull .DescItem>.SecondItem span{font-size:1.083032491vw !important;font-family:var(--inter-font) !important;color:rgba(0,0,0,.8);font-style:normal;font-weight:400;line-height:1.4440433213vw}.BannerFull .DescItem>.SecondItem strong,.BannerFull .DescItem>.SecondItem b{font-size:1.4440433213vw !important;font-family:var(--inter-font) !important;color:rgba(0,0,0,.8);font-style:normal;font-weight:500;line-height:1.4440433213vw}.BannerFull .ImgItem{position:relative}.BannerFull .ImgItem img{cursor:default}.BannerFull .ImgItem span{left:5.7761732852vw;bottom:3.2490974729vw;position:absolute;height:2.8880866426vw;width:14.440433213vw;display:flex;align-items:center;cursor:pointer;font-size:1.083032491vw !important;font-family:var(--inter-font) !important;color:rgba(0,0,0,.8);font-style:normal;font-weight:400;color:#fff !important}.BannerFull .ImgItem span svg{width:0.9025270758vw;height:0.9025270758vw}","",{version:3,sources:["webpack://./stories/BannerFullPC/BannerFullPC.scss","webpack://./stories/global.scss"],names:[],mappings:"AAGE,gBACE,qBAAA,CAGF,sBACE,YAAA,CACA,6BAAA,CACA,yBAAA,CACA,4BAAA,CAEA,iCACE,qBAAA,CACA,wCACE,qBAAA,CACA,qBAAA,CCNN,mCAAA,CACA,wCAAA,CACA,oBAVU,CAYV,iBAAA,CACA,eDE2B,CACrB,0BAAA,CACA,2BAAA,CACA,0BAAA,CACA,aAAA,CAEF,8CACE,0BAAA,CACA,wBAAA,CACA,qBAAA,CACA,4BAAA,CACA,0CAAA,CACA,+BAAA,CACA,qBAAA,CCpBN,kCAAA,CACA,wCAAA,CACA,oBAVU,CAYV,iBAAA,CACA,eDiB2B,CACrB,YAAA,CACA,kBAAA,CACA,sBAAA,CACA,kBAAA,CAEA,cAAA,CAEA,oDACE,wBAAA,CACA,gCAAA,CAEF,qDACE,wBAAA,CACA,gCAAA,CAEF,qDACE,wBAAA,CACA,gCAAA,CAIN,kCACE,qBAAA,CACA,yCC9CJ,mCAAA,CACA,wCAAA,CACA,oBAVU,CAYV,iBAAA,CACA,eD0C2B,CAEvB,2ECjDJ,kCAAA,CACA,wCAAA,CACA,oBAVU,CAYV,iBAAA,CACA,eD6C2B,CACrB,0BAAA,CAEF,6ECrDJ,mCAAA,CACA,wCAAA,CACA,oBAVU,CAYV,iBAAA,CACA,eDiD2B,CACrB,0BAAA,CAKN,qBACE,iBAAA,CACA,yBACE,cAAA,CAEF,0BACE,mBAAA,CACA,qBAAA,CACA,iBAAA,CACA,qBAAA,CACA,oBAAA,CACA,YAAA,CACA,kBAAA,CACA,cAAA,CCzEJ,kCAAA,CACA,wCAAA,CACA,oBAVU,CAYV,iBAAA,CACA,eDqEyB,CACrB,qBAAA,CACA,8BACE,oBAAA,CACA,qBAAA",sourcesContent:["@import '../global';\n\n.BannerFull{\n  & > div{\n    width: calcSize(2520);\n  }\n\n  & .DescItem {\n    display: flex;\n    justify-content: space-between;\n    margin-top: calcSize(60);\n    margin-bottom: calcSize(60);\n\n    & > .FirstItem{\n      width: calcSize(1080);\n      & > .title{\n        width: calcSize(1080);\n        height: calcSize(60);\n        @include MyFonts(50, 500);\n        line-height: calcSize(50);\n        margin-bottom: calcSize(30);\n        margin-left: calcSize(60);\n        display: block;\n      }\n      & .buttonPromo{\n        margin-left: calcSize(60);\n        margin-top: calcSize(30);\n        width: calcSize(420);\n        border-radius: calcSize(45);\n        border: calcSize(3) solid rgba(0, 0, 0, 0.2);\n        color: rgba(0, 0, 0, 0.6) !important;\n        height: calcSize(80);\n\n        @include MyFonts(30, 400);\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        white-space: nowrap;\n\n        cursor: pointer;\n\n        &:hover {\n          background-color: #f2f2f2;\n          border: calcSize(2) solid #cccccc;\n        }\n        &:target {\n          background-color: #f2f2f2;\n          border: calcSize(2) solid #cccccc;\n        }\n        &:active {\n          background-color: #f2f2f2;\n          border: calcSize(2) solid #cccccc;\n        }\n      }\n    }\n    & > .SecondItem{\n      width: calcSize(1080);\n      & > .title{\n        @include MyFonts(50, 500);\n      }\n      & p, span{\n        @include MyFonts(30, 400);\n        line-height: calcSize(40);\n      }\n      & strong, b{\n        @include MyFonts(40, 500);\n        line-height: calcSize(40);\n      }\n    }\n  }\n\n  & .ImgItem {\n    position: relative;\n    & img{\n      cursor: default;\n    }\n    & span {\n      left: calcSize(160);\n      bottom: calcSize(90);\n      position: absolute;\n      height: calcSize(80);\n      width: calcSize(400);\n      display: flex;\n      align-items: center;\n      cursor: pointer;\n      @include MyFonts(30, 400);\n      color: #fff!important;\n      & svg {\n        width: calcSize(25);\n        height: calcSize(25);\n      }\n    }\n  }\n}",'@charset "utf-8";\n\n$Roboto: var(--inter-font);\n$ColorText: rgba(0, 0, 0, 0.8);\n$ColorMain: #cc0033;\n\n@function calcSize($size) {\n  @return calc(100 * calc($size / 2770)) + vw;\n}\n\n@mixin MyFonts($size: 32, $weight: 400) {\n  font-size: calcSize($size) !important;\n  font-family: $Roboto !important;\n  color: $ColorText;\n\n  font-style: normal;\n  font-weight: $weight;\n}\n\n@mixin fonsNew($size: 1rem, $family: $Roboto) {\n  font-size: $size !important;\n  font-family: $family !important;\n  color: $ColorText;\n}\n'],sourceRoot:""}]);const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[4]!./stories/BannerItemPC/BannerItemPC.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".itemBannerPCNew{width:35.3790613718vw;height:12.274368231vw;display:flex;flex-direction:row}.itemBannerPCNew .number{width:2.1660649819vw;height:1.083032491vw;font-size:1.4440433213vw !important;font-family:var(--inter-font) !important;color:rgba(0,0,0,.8);font-style:normal;font-weight:400;line-height:1.4440433213vw;color:rgba(0,0,0,.6);text-align:end}.itemBannerPCNew img{width:10.1083032491vw;height:10.1083032491vw;object-fit:contain;image-rendering:auto}.itemBannerPCNew .itemDesc{display:flex;justify-content:flex-start;flex-direction:column;margin-left:1.4440433213vw}.itemBannerPCNew .itemDesc .title{width:21.6606498195vw;height:4.3321299639vw;font-size:1.4440433213vw !important;font-family:var(--inter-font) !important;color:rgba(0,0,0,.8);font-style:normal;font-weight:400}.itemBannerPCNew .itemDesc .desc{width:21.6606498195vw;height:4.3321299639vw;font-size:0.9025270758vw !important;font-family:var(--inter-font) !important;color:rgba(0,0,0,.8);font-style:normal;font-weight:400;overflow:hidden;display:-webkit-box;-webkit-line-clamp:3;-webkit-box-orient:vertical}.itemBannerPCNew .itemDesc div.price.button{display:flex;align-items:center;justify-content:space-between !important}.itemBannerPCNew .itemDesc button.price.button{border:0.1083032491vw solid rgba(0,0,0,.2)}.itemBannerPCNew .itemDesc button.price.button:hover{background-color:#f2f2f2;border:0.1083032491vw solid #ccc}.itemBannerPCNew .itemDesc button.price.button:target{background-color:#f2f2f2;border:0.1083032491vw solid #ccc}.itemBannerPCNew .itemDesc button.price.button:active{background-color:#f2f2f2;border:0.1083032491vw solid #ccc}.itemBannerPCNew .itemDesc .price{width:9.2057761733vw;height:2.1660649819vw}.itemBannerPCNew .itemDesc .price.text>span{font-size:1.083032491vw !important;font-family:var(--inter-font) !important;color:rgba(0,0,0,.8);font-style:normal;font-weight:400;color:rgba(0,0,0,.6) !important}.itemBannerPCNew .itemDesc .price.button{width:9.2057761733vw;height:2.1660649819vw;border-radius:1.6245487365vw;color:rgba(0,0,0,.6) !important;font-size:1.083032491vw !important;font-family:var(--inter-font) !important;color:rgba(0,0,0,.8);font-style:normal;font-weight:400;line-height:1.4440433213vw;display:flex;align-items:center;justify-content:center;white-space:nowrap;cursor:pointer}.itemBannerPCNew .itemDesc .price.button>button{width:9.2057761733vw;border-radius:1.6245487365vw;display:flex;justify-content:space-between;align-items:center;height:2.1660649819vw;margin-bottom:0 !important}.itemBannerPCNew .itemDesc .price.button>button.minus{padding:0;display:flex;justify-content:center;align-items:center;border:none;background-color:#e6e6e6;font-size:1.8050541516vw !important;font-family:var(--inter-font) !important;color:rgba(0,0,0,.8);font-style:normal;font-weight:300;width:2.1660649819vw;height:2.1660649819vw;border-radius:1.4440433213vw;cursor:pointer}.itemBannerPCNew .itemDesc .price.button>button.plus{padding:0;display:flex;justify-content:center;align-content:center;align-items:center;border:none;background-color:#e6e6e6;font-size:1.8050541516vw !important;font-family:var(--inter-font) !important;color:rgba(0,0,0,.8);font-style:normal;font-weight:300;width:2.1660649819vw;height:2.1660649819vw;border-radius:1.4440433213vw;cursor:pointer}.itemBannerPCNew .itemDesc .price.button>span{color:rgba(0,0,0,.6) !important;font-size:1.083032491vw !important;font-family:var(--inter-font) !important;color:rgba(0,0,0,.8);font-style:normal;font-weight:400}.itemBannerPC{display:flex;margin-bottom:0.7220216606vw}.itemBannerPC .itemNumber{width:2.1660649819vw;display:flex;flex-direction:column;justify-content:flex-start;align-items:flex-end;margin-top:1.083032491vw}.itemBannerPC .itemImg{width:10.1083032491vw}.itemBannerPC .itemImg img{object-fit:contain;image-rendering:auto;width:100%;height:auto}.itemBannerPC .itemDesc{width:21.6606498195vw;display:flex;justify-content:flex-start;flex-direction:column}.itemBannerPC .itemDesc .desc{line-height:1.083032491vw;display:-webkit-box;-webkit-line-clamp:4;-webkit-box-orient:vertical;overflow:hidden}.itemBannerPC .itemDesc span{height:4.3321299639vw;margin-left:1.4440433213vw;text-align:left;display:flex;align-items:center}.BannerFontPC .ItemTitle{font-size:1.8050541516vw !important;font-family:var(--inter-font) !important;color:rgba(0,0,0,.8);font-style:normal;font-weight:500}.BannerFontPC .ItemName{font-size:1.4440433213vw !important;font-family:var(--inter-font) !important;color:rgba(0,0,0,.8);font-style:normal;font-weight:400}.BannerFontPC .ItemOther{font-size:1.083032491vw !important;font-family:var(--inter-font) !important;color:rgba(0,0,0,.8);font-style:normal;font-weight:400}.BannerFontPC .ItemSpan{font-size:1.4440433213vw !important;font-family:var(--inter-font) !important;color:rgba(0,0,0,.8);font-style:normal;font-weight:500}.BannerFontPC .ItemDesk{font-size:0.9025270758vw !important;font-family:var(--inter-font) !important;color:rgba(0,0,0,.8);font-style:normal;font-weight:400}.BannerFontPC .ItemTime{font-size:0.7942238267vw !important;font-family:var(--inter-font) !important;color:rgba(0,0,0,.8);font-style:normal;font-weight:400}","",{version:3,sources:["webpack://./stories/BannerItemPC/BannerItemPC.scss","webpack://./stories/global.scss"],names:[],mappings:"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",sourcesContent:["@import '../global';\n\n.itemBannerPCNew{\n  width: calcSize(980);\n  height: calcSize(340);\n\n  display: flex;\n  flex-direction: row;\n\n  & .number{\n    width: calcSize(60);\n    height: calcSize(30);\n    @include MyFonts(40, 400);\n    line-height: calcSize(40);\n    color: rgba(0, 0, 0, 0.6);\n    text-align: end;\n  }\n\n  & img{\n    width: calcSize(280);\n    height: calcSize(280);\n    object-fit: contain;\n    image-rendering: auto;\n  }\n\n  & .itemDesc{\n    display: flex;\n    justify-content: flex-start;\n    flex-direction: column;\n    margin-left: calcSize(40);\n    \n    & .title{\n      width: calcSize(600);\n      height: calcSize(120);\n      @include MyFonts(40, 400);\n    }\n    & .desc{\n      width: calcSize(600);\n      height: calcSize(120);\n      @include MyFonts(25, 400);\n      //line-height: calcSize(36);\n      overflow: hidden;\n      display: -webkit-box;\n      -webkit-line-clamp: 3;\n      -webkit-box-orient: vertical;\n    }\n    & div.price.button{\n      display: flex;\n      align-items: center;\n      justify-content: space-between!important;\n    }\n    & button.price.button{\n      border: calcSize(3) solid rgba(0, 0, 0, 0.2);\n      &:hover {\n        background-color: #f2f2f2;\n        border: calcSize(3) solid #cccccc;\n      }\n      &:target {\n        background-color: #f2f2f2;\n        border: calcSize(3) solid #cccccc;\n      }\n      &:active {\n        background-color: #f2f2f2;\n        border: calcSize(3) solid #cccccc;\n      }\n    }\n\n    & .price{\n      width: calcSize(255);\n      height: calcSize(60);\n\n      &.text{\n        & > span{\n          @include MyFonts(30, 400);\n          color: rgba(0, 0, 0, 0.6) !important;\n        }\n      }\n\n      &.button {\n        width: calcSize(255);\n        height: calcSize(60);\n        border-radius: calcSize(45);\n        color: rgba(0, 0, 0, 0.6) !important;\n        \n        @include MyFonts(30, 400);\n        line-height: calcSize(40);\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        white-space: nowrap;\n        cursor: pointer;\n        \n        & > button {\n          width: calcSize(255);\n          border-radius: calcSize(45);\n          display: flex;\n          justify-content: space-between;\n          align-items: center;\n          height: calcSize(60);\n          margin-bottom: 0 !important;\n      \n          &.minus {\n            padding: 0;\n            display: flex;\n            justify-content: center;\n            align-items: center;\n            border: none;\n            background-color: #e6e6e6;\n      \n            @include MyFonts(50, 300);\n            width: calcSize(60);\n            height: calcSize(60);\n            border-radius: calcSize(40);\n            cursor: pointer;\n          }\n          &.plus {\n            padding: 0;\n            display: flex;\n            justify-content: center;\n            align-content: center;\n            align-items: center;\n            border: none;\n            background-color: #e6e6e6;\n      \n            @include MyFonts(50, 300);\n            width: calcSize(60);\n            height: calcSize(60);\n            border-radius: calcSize(40);\n            cursor: pointer;\n          }\n          \n        }\n      \n        & > span {\n          color: rgba(0, 0, 0, 0.6) !important;\n          @include MyFonts(30, 400);\n        }\n      }\n    }\n  }\n\n}\n\n\n\n\n.itemBannerPC {\n  display: flex;\n  margin-bottom: calcSize(20);\n\n  .itemNumber {\n    width: calcSize(60);\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-start;\n    align-items: flex-end;\n    margin-top: calcSize(30);\n  }\n\n  .itemImg {\n    width: calcSize(280);\n\n    & img {\n      object-fit: contain;\n      image-rendering: auto;\n      width: 100%;\n      height: auto;\n    }\n  }\n\n  .itemDesc {\n    width: calcSize(600);\n    display: flex;\n    justify-content: flex-start;\n    flex-direction: column;\n\n    & .desc {\n      line-height: calcSize(30);\n      display: -webkit-box;\n      -webkit-line-clamp: 4;\n      -webkit-box-orient: vertical;\n      overflow: hidden;\n    }\n\n    & span {\n      height: calcSize(120);\n      margin-left: calcSize(40);\n      text-align: left;\n      display: flex;\n      align-items: center;\n    }\n  }\n}\n\n\n\n.BannerFontPC {\n  & .ItemTitle {\n    @include MyFonts(50, 500);\n  }\n\n  & .ItemName {\n    @include MyFonts(40, 400);\n  }\n\n  & .ItemOther {\n    @include MyFonts(30, 400);\n  }\n\n  & .ItemSpan {\n    @include MyFonts(40, 500);\n  }\n\n  & .ItemDesk {\n    @include MyFonts(25, 400);\n  }\n\n  & .ItemTime {\n    @include MyFonts(22, 400);\n  }\n}\n",'@charset "utf-8";\n\n$Roboto: var(--inter-font);\n$ColorText: rgba(0, 0, 0, 0.8);\n$ColorMain: #cc0033;\n\n@function calcSize($size) {\n  @return calc(100 * calc($size / 2770)) + vw;\n}\n\n@mixin MyFonts($size: 32, $weight: 400) {\n  font-size: calcSize($size) !important;\n  font-family: $Roboto !important;\n  color: $ColorText;\n\n  font-style: normal;\n  font-weight: $weight;\n}\n\n@mixin fonsNew($size: 1rem, $family: $Roboto) {\n  font-size: $size !important;\n  font-family: $family !important;\n  color: $ColorText;\n}\n'],sourceRoot:""}]);const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[4]!./stories/BannerPCImg/BannerPCImg.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".BannerPCImg{border-radius:2.8880866426vw;object-fit:contain;image-rendering:auto;width:90.9747292419vw;height:24.6209386282vw;cursor:pointer}","",{version:3,sources:["webpack://./stories/BannerPCImg/BannerPCImg.scss"],names:[],mappings:"AAEA,aACE,4BAAA,CACA,kBAAA,CACA,oBAAA,CACA,qBAAA,CACA,sBAAA,CAEA,cAAA",sourcesContent:["@import '../global';\n\n.BannerPCImg{\n  border-radius: calcSize(80);\n  object-fit: contain;\n  image-rendering: auto;\n  width: calcSize(2520);\n  height: calcSize(682);\n  //height: auto;\n  cursor: pointer;\n}"],sourceRoot:""}]);const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___}}]);