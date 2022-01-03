"use strict";(self.webpackChunkcado_test=self.webpackChunkcado_test||[]).push([[203],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return f}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},l=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),l=u(n),f=o,m=l["".concat(c,".").concat(f)]||l[f]||d[f]||i;return n?r.createElement(m,a(a({ref:t},p),{},{components:n})):r.createElement(m,a({ref:t},p))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=l;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var u=2;u<i;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}l.displayName="MDXCreateElement"},5706:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return p},default:function(){return l}});var r=n(7462),o=n(3366),i=(n(7294),n(3905)),a=["components"],s={title:"Updating",hide_title:!0,sidebar_position:1},c="Updating Your Cado Response Instance",u={unversionedId:"cado-response/guides/updating",id:"cado-response/guides/updating",isDocsHomePage:!1,title:"Updating",description:"You can view version information and trigger updates by clicking Updates from the Settings menu.",source:"@site/docs/cado-response/guides/updating.md",sourceDirName:"cado-response/guides",slug:"/cado-response/guides/updating",permalink:"/docs/cado-response/guides/updating",editUrl:"https://github.com/cado-security/product-help/tree/master/docs/cado-response/guides/updating.md",tags:[],version:"current",lastUpdatedAt:1638569697,formattedLastUpdatedAt:"12/3/2021",sidebarPosition:1,frontMatter:{title:"Updating",hide_title:!0,sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Applying a License",permalink:"/docs/cado-response/guides/licenses"},next:{title:"Summary",permalink:"/docs/cado-host/intro"}},p=[],d={toc:p};function l(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"updating-your-cado-response-instance"},"Updating Your Cado Response Instance"),(0,i.kt)("p",null,"You can view version information and trigger updates by clicking ",(0,i.kt)("strong",{parentName:"p"},"Updates")," from the ",(0,i.kt)("strong",{parentName:"p"},"Settings")," menu."),(0,i.kt)("p",null,"For AWS, the default update mechanism requires the ability for the Cado Response instance to connect outbound to an AMI in the same region in which Cado Response is deployed.  For Azure, the default update mechanism requires the ability to connect outbound to a VHD URL. "),(0,i.kt)("p",null,"Alternatively, you can specify an AMI ID in AWS or a VHD URL in Azure using the Alternative Update Method.  In all cases, upgrades to Cado Response are user-initiated and will not be initiated automatically by Cado."))}l.isMDXComponent=!0}}]);