"use strict";(self.webpackChunkcado_test=self.webpackChunkcado_test||[]).push([[197],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(n),m=i,g=u["".concat(l,".").concat(m)]||u[m]||d[m]||a;return n?r.createElement(g,o(o({ref:t},p),{},{components:n})):r.createElement(g,o({ref:t},p))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var c=2;c<a;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},7853:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return p},default:function(){return u}});var r=n(7462),i=n(3366),a=(n(7294),n(3905)),o=["components"],s={title:"Investigate",hide_title:!0,sidebar_position:3},l="Investigating a Project",c={unversionedId:"cado-response/investigating/investigate",id:"cado-response/investigating/investigate",isDocsHomePage:!1,title:"Investigate",description:"Evidence is processed into Projects and investigation starts by analyzing the project evidence.  The project view provides an overview of the key information for all evidence items in a given project.",source:"@site/docs/cado-response/investigating/investigate.md",sourceDirName:"cado-response/investigating",slug:"/cado-response/investigating/investigate",permalink:"/docs/cado-response/investigating/investigate",editUrl:"https://github.com/cado-security/product-help/tree/master/docs/cado-response/investigating/investigate.md",tags:[],version:"current",lastUpdatedAt:1629479189,formattedLastUpdatedAt:"8/20/2021",sidebarPosition:3,frontMatter:{title:"Investigate",hide_title:!0,sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Memory Forensics",permalink:"/docs/cado-response/importing-data/memory"},next:{title:"Advanced Search (beta)",permalink:"/docs/cado-response/investigating/search"}},p=[{value:"System View",id:"system-view",children:[]},{value:"Browsing Files",id:"browsing-files",children:[]},{value:"Searching",id:"searching",children:[]},{value:"Indicators",id:"indicators",children:[]},{value:"Usernames",id:"usernames",children:[]}],d={toc:p};function u(e){var t=e.components,s=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},d,s,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"investigating-a-project"},"Investigating a Project"),(0,a.kt)("p",null,"Evidence is processed into Projects and investigation starts by analyzing the project evidence.  The project view provides an overview of the key information for all evidence items in a given project."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Project Overview",src:n(8658).Z})),(0,a.kt)("p",null,"The tabs available on the Project Overview page are:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Tab Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Overview"),(0,a.kt)("td",{parentName:"tr",align:null},"Shows all the evidence items, and an interactive timeline of key events.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Timeline"),(0,a.kt)("td",{parentName:"tr",align:null},"A timeline of key events.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Alarms"),(0,a.kt)("td",{parentName:"tr",align:null},"Malicious events.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Suspicious"),(0,a.kt)("td",{parentName:"tr",align:null},"Possibly malicious events.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Users"),(0,a.kt)("td",{parentName:"tr",align:null},"A unique list of users on the system.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Processes"),(0,a.kt)("td",{parentName:"tr",align:null},"Processes execution.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Network"),(0,a.kt)("td",{parentName:"tr",align:null},"Network connections.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Files"),(0,a.kt)("td",{parentName:"tr",align:null},"File Access.")))),(0,a.kt)("h3",{id:"system-view"},"System View"),(0,a.kt)("p",null,"By clicking on an individual Evidence item, you bring up the System View.  The System View provides the same details as the Project View, but limited to a single evidence item."),(0,a.kt)("h3",{id:"browsing-files"},"Browsing Files"),(0,a.kt)("p",null,"You can browse the filesystem of certain evidence items. When browsing a ",(0,a.kt)("strong",{parentName:"p"},"Disk")," folders with a red dot  indicate the presence of a known malicious file.  You can browse the folder structure of a disk by clicking on individual folders."),(0,a.kt)("h3",{id:"searching"},"Searching"),(0,a.kt)("p",null,"The search interface allows you to search both file and event contents."),(0,a.kt)("p",null,"Click ",(0,a.kt)("strong",{parentName:"p"},"Investigate")," then ",(0,a.kt)("strong",{parentName:"p"},"Search")," to open the search interface. Cado Response uses ",(0,a.kt)("a",{parentName:"p",href:"https://www.elastic.co/guide/en/elasticsearch/reference/current/analysis-ngram-tokenizer.html"},"n-gram indexing")," to provide fast searches across files and events. Due to the way indexing works, you may get less results than if you performed a traditional slow byte by byte search of each file."),(0,a.kt)("h3",{id:"indicators"},"Indicators"),(0,a.kt)("p",null,"The Indicators page provides a summary of indicators of compromise detected within a project, and which systems they matched."),(0,a.kt)("p",null,"Click ",(0,a.kt)("strong",{parentName:"p"},"Investigate")," then ",(0,a.kt)("strong",{parentName:"p"},"Indicators"),"."),(0,a.kt)("h3",{id:"usernames"},"Usernames"),(0,a.kt)("p",null,"The Usernames page provides a summary of usernames identified in the project."),(0,a.kt)("p",null,"Click ",(0,a.kt)("strong",{parentName:"p"},"Investigate")," then ",(0,a.kt)("strong",{parentName:"p"},"Usernames"),"."))}u.isMDXComponent=!0},8658:function(e,t,n){t.Z=n.p+"assets/images/project-view-6796868a81148f5f8309fddadd4306c7.png"}}]);