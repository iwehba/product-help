"use strict";(self.webpackChunkcado_test=self.webpackChunkcado_test||[]).push([[146],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return g}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=c(n),g=i,h=d["".concat(l,".").concat(g)]||d[g]||p[g]||a;return n?r.createElement(h,s(s({ref:t},u),{},{components:n})):r.createElement(h,s({ref:t},u))}));function g(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,s=new Array(a);s[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:i,s[1]=o;for(var c=2;c<a;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3113:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return u},default:function(){return d}});var r=n(7462),i=n(3366),a=(n(7294),n(3905)),s=["components"],o={title:"General Settings",hide_title:!0,sidebar_position:5},l="General Settings",c={unversionedId:"cado-response/settings/general-settings",id:"cado-response/settings/general-settings",isDocsHomePage:!1,title:"General Settings",description:"You can access the settings by clicking Settings on the left menu",source:"@site/docs/cado-response/settings/general-settings.md",sourceDirName:"cado-response/settings",slug:"/cado-response/settings/general-settings",permalink:"/docs/cado-response/settings/general-settings",editUrl:"https://github.com/cado-security/product-help/tree/master/docs/cado-response/settings/general-settings.md",tags:[],version:"current",lastUpdatedAt:1629407229,formattedLastUpdatedAt:"8/19/2021",sidebarPosition:5,frontMatter:{title:"General Settings",hide_title:!0,sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Advanced Search (beta)",permalink:"/docs/cado-response/investigating/search"},next:{title:"Cross Account Creation",permalink:"/docs/cado-response/guides/cross-account-creation"}},u=[{value:"Processing Settings",id:"processing-settings",children:[]},{value:"Cloud Connectivity",id:"cloud-connectivity",children:[]},{value:"Threat Intelligence",id:"threat-intelligence",children:[]}],p={toc:u};function d(e){var t=e.components,n=(0,i.Z)(e,s);return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"general-settings"},"General Settings"),(0,a.kt)("p",null,"You can access the settings by clicking ",(0,a.kt)("strong",{parentName:"p"},"Settings")," on the left menu"),(0,a.kt)("h3",{id:"processing-settings"},"Processing Settings"),(0,a.kt)("p",null,"The ",(0,a.kt)("strong",{parentName:"p"},"Maximum Filesize")," is used to determine how file-based plugins analyse individual files. For example, if a Log file is 1 GB and the Maximum File size is 5 Mb:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The full 1 GB of events in the log will be processed;"),(0,a.kt)("li",{parentName:"ul"},"But the file-based plugins (for example Yara, String extraction) will only look at the first 5 Mb of the 1 GB file, and the original file will not be available for download.")),(0,a.kt)("p",null,"This number can be increased, however large values can slow down processing and retrieval significantly. Cado recommends leaving this value at 5Mb as it represents the best balance. Where you have a project that will need to specifically target very large files you may increase this at the time as needed, and decrease after your project is completed."),(0,a.kt)("p",null,"The ",(0,a.kt)("strong",{parentName:"p"},"Elastic Search Hostname")," sets where the data is stored. By default Cado Response connects to a database that is only accessible locally to the server, and for security purposes it is highly recommended you do not change this value."),(0,a.kt)("p",null,"The ",(0,a.kt)("strong",{parentName:"p"},"Worker Instance Size")," limits the size of data that can be imported. The default setting in AWS (i3.4xlarge) has 1.9 TB of disk space, allowing the processing of disks up to approximately 1.5 TB in size. The default Azure setting allows the processing of disks up to approximately 800 GB in size. Please set a large instance size (see for AWS or Azure) to increase the working space."),(0,a.kt)("h3",{id:"cloud-connectivity"},"Cloud Connectivity"),(0,a.kt)("p",null,"These settings are used to authenticate against cloud providers."),(0,a.kt)("p",null,"An AWS Role is created at installation to authenticate against AWS. This is the recommended method of authentication. Optionally, you can set an ",(0,a.kt)("strong",{parentName:"p"},"AWS Access Key")," and ",(0,a.kt)("strong",{parentName:"p"},"AWS Secret Key")," to authenticate against AWS."),(0,a.kt)("h3",{id:"threat-intelligence"},"Threat Intelligence"),(0,a.kt)("p",null,"The ",(0,a.kt)("strong",{parentName:"p"},"VirusTotal API Key")," is used to enhance the analysis of already detected files by checking their file-hash against the VirusTotal database. It is not used to detect files. "),(0,a.kt)("p",null,"The ",(0,a.kt)("strong",{parentName:"p"},"Yara Rules")," text-box allows you to run your own set of Yara rules against files. These are run in addition to a set built-in to Cado Response. Rules that match will trigger a ",(0,a.kt)("inlineCode",{parentName:"p"},"Malicious")," detection, unless the yara rule name starts with the keyword suspicious - in which case it will create a ",(0,a.kt)("inlineCode",{parentName:"p"},"Suspicious")," detection."))}d.isMDXComponent=!0}}]);