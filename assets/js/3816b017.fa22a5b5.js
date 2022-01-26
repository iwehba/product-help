"use strict";(self.webpackChunkcado_test=self.webpackChunkcado_test||[]).push([[407],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return u}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),p=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=p(e.components);return a.createElement(o.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,s=d(e,["components","mdxType","originalType","parentName"]),c=p(n),u=r,k=c["".concat(o,".").concat(u)]||c[u]||m[u]||i;return n?a.createElement(k,l(l({ref:t},s),{},{components:n})):a.createElement(k,l({ref:t},s))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=c;var d={};for(var o in t)hasOwnProperty.call(t,o)&&(d[o]=t[o]);d.originalType=e,d.mdxType="string"==typeof e?e:r,l[1]=d;for(var p=2;p<i;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},2889:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return d},contentTitle:function(){return o},metadata:function(){return p},toc:function(){return s},default:function(){return c}});var a=n(7462),r=n(3366),i=(n(7294),n(3905)),l=["components"],d={title:"Advanced Search",hide_title:!0,sidebar_position:4},o="Advanced Timeline Search",p={unversionedId:"cado-response/investigating/search",id:"cado-response/investigating/search",isDocsHomePage:!1,title:"Advanced Search",description:"As of Release 1.2.0, the Cado Response platform includes a new advanced search interface which supports complex queries.",source:"@site/docs/cado-response/investigating/search.md",sourceDirName:"cado-response/investigating",slug:"/cado-response/investigating/search",permalink:"/docs/cado-response/investigating/search",editUrl:"https://github.com/cado-security/product-help/tree/master/docs/cado-response/investigating/search.md",tags:[],version:"current",lastUpdatedAt:1643210638,formattedLastUpdatedAt:"1/26/2022",sidebarPosition:4,frontMatter:{title:"Advanced Search",hide_title:!0,sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Investigate",permalink:"/docs/cado-response/investigating/investigate"},next:{title:"General Settings",permalink:"/docs/cado-response/settings/general-settings"}},s=[{value:"Basic Searches",id:"basic-searches",children:[{value:"Plain search terms",id:"plain-search-terms",children:[],level:4},{value:"Fields",id:"fields",children:[],level:4},{value:"Ranges",id:"ranges",children:[],level:4}],level:3},{value:"Building complex queries",id:"building-complex-queries",children:[],level:3},{value:"Fields",id:"fields-1",children:[],level:2}],m={toc:s};function c(e){var t=e.components,n=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"advanced-timeline-search"},"Advanced Timeline Search"),(0,i.kt)("p",null,"As of Release 1.2.0, the Cado Response platform includes a new advanced search interface which supports complex queries."),(0,i.kt)("h3",{id:"basic-searches"},"Basic Searches"),(0,i.kt)("h4",{id:"plain-search-terms"},"Plain search terms"),(0,i.kt)("p",null,"Providing plain search term will search across all fields, for example: ",(0,i.kt)("inlineCode",{parentName:"p"},"foo")),(0,i.kt)("p",null,"You can quote terms containing spaces: ",(0,i.kt)("inlineCode",{parentName:"p"},'"foo bar"')),(0,i.kt)("h4",{id:"fields"},"Fields"),(0,i.kt)("p",null,"You can search a specific field by prepending it to the search term: ",(0,i.kt)("inlineCode",{parentName:"p"},"user: Chris")," OR  ",(0,i.kt)("inlineCode",{parentName:"p"},'extra: "foo bar"')),(0,i.kt)("h4",{id:"ranges"},"Ranges"),(0,i.kt)("p",null,"You can restrict a field to a range of values: ",(0,i.kt)("inlineCode",{parentName:"p"},"severity: [0 TO 5]")),(0,i.kt)("h3",{id:"building-complex-queries"},"Building complex queries"),(0,i.kt)("p",null,"You can build complex queries using ",(0,i.kt)("inlineCode",{parentName:"p"},"AND"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"OR")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"NOT")," to combine terms, and brackets to group ",(0,i.kt)("inlineCode",{parentName:"p"},"()"),":"),(0,i.kt)("p",null,"For example: ",(0,i.kt)("inlineCode",{parentName:"p"},'alarm_severity: [0 TO 5] AND (user: "Chris" OR user: "James") AND NOT filename: "/foo/bar.txt"')),(0,i.kt)("h2",{id:"fields-1"},"Fields"),(0,i.kt)("p",null,"Searchable fields"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Field"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"macb")),(0,i.kt)("td",{parentName:"tr",align:null},"keyword"),(0,i.kt)("td",{parentName:"tr",align:null},"4 character string which encoding MACB information for this event. An ",(0,i.kt)("inlineCode",{parentName:"td"},"M")," in position 0 indicates this is a Modified event and a ",(0,i.kt)("inlineCode",{parentName:"td"},".")," represents a non-modified event. e.g. ",(0,i.kt)("inlineCode",{parentName:"td"},"M..B")," indicates modified and birth.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"source")),(0,i.kt)("td",{parentName:"tr",align:null},"keyword"),(0,i.kt)("td",{parentName:"tr",align:null},"The type of the file or data that produced this event e.g. ",(0,i.kt)("inlineCode",{parentName:"td"},"EVT"),",  ",(0,i.kt)("inlineCode",{parentName:"td"},"CLOUDTRAIL"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"FILE"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"JAVA_IDX"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"LOG"),".")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"sourcetype")),(0,i.kt)("td",{parentName:"tr",align:null},"keyword"),(0,i.kt)("td",{parentName:"tr",align:null},"More specific subtype of ",(0,i.kt)("inlineCode",{parentName:"td"},"source"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"type")),(0,i.kt)("td",{parentName:"tr",align:null},"keyword"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},";")," separated list of event types, e.g. ",(0,i.kt)("inlineCode",{parentName:"td"},"Last Executed Time"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"Updated Time"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"Content Modification Time"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"Creation Time"),".")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"user")),(0,i.kt)("td",{parentName:"tr",align:null},"keyword"),(0,i.kt)("td",{parentName:"tr",align:null},"User associated with the event")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"host")),(0,i.kt)("td",{parentName:"tr",align:null},"keyword"),(0,i.kt)("td",{parentName:"tr",align:null},"Host name associated with the event")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"filename")),(0,i.kt)("td",{parentName:"tr",align:null},"special"),(0,i.kt)("td",{parentName:"tr",align:null},"The path of the file associated with this event")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"inode")),(0,i.kt)("td",{parentName:"tr",align:null},"keyword"),(0,i.kt)("td",{parentName:"tr",align:null},"The inode number of the file associated with this event")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"source_hostname")),(0,i.kt)("td",{parentName:"tr",align:null},"keyword"),(0,i.kt)("td",{parentName:"tr",align:null},"For network connections, the hostname that it originated from")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"destination_hostname")),(0,i.kt)("td",{parentName:"tr",align:null},"keyword"),(0,i.kt)("td",{parentName:"tr",align:null},"For network connections, the destination hostname")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"tag")),(0,i.kt)("td",{parentName:"tr",align:null},"keyword"),(0,i.kt)("td",{parentName:"tr",align:null},"Tag representing type of event e.g. ",(0,i.kt)("inlineCode",{parentName:"td"},"Network Logon"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"File Access"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"Execution"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"executed_process")),(0,i.kt)("td",{parentName:"tr",align:null},"keyword"),(0,i.kt)("td",{parentName:"tr",align:null},"Where we detect a process execution, the path of the executed file")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"short")),(0,i.kt)("td",{parentName:"tr",align:null},"text"),(0,i.kt)("td",{parentName:"tr",align:null},"Short text providing additional data from raw event")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"extra")),(0,i.kt)("td",{parentName:"tr",align:null},"text"),(0,i.kt)("td",{parentName:"tr",align:null},"Longer text, providing more raw data than ",(0,i.kt)("inlineCode",{parentName:"td"},"short"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"alarm_severity")),(0,i.kt)("td",{parentName:"tr",align:null},"int"),(0,i.kt)("td",{parentName:"tr",align:null},"Severity of event based on detections. Malicious ",(0,i.kt)("inlineCode",{parentName:"td"},"1"),", Suspcious ",(0,i.kt)("inlineCode",{parentName:"td"},"3"),", Other ",(0,i.kt)("inlineCode",{parentName:"td"},"10"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"evidence_id")),(0,i.kt)("td",{parentName:"tr",align:null},"int"),(0,i.kt)("td",{parentName:"tr",align:null},"ID of evidence item")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"timestamp")),(0,i.kt)("td",{parentName:"tr",align:null},"int"),(0,i.kt)("td",{parentName:"tr",align:null},"Unix timestamp of event")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"file_size")),(0,i.kt)("td",{parentName:"tr",align:null},"int"),(0,i.kt)("td",{parentName:"tr",align:null},"size of file associated with this event")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"md5")),(0,i.kt)("td",{parentName:"tr",align:null},"text"),(0,i.kt)("td",{parentName:"tr",align:null},"md5 hash of file associated with this event")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"sha1")),(0,i.kt)("td",{parentName:"tr",align:null},"text"),(0,i.kt)("td",{parentName:"tr",align:null},"sha1 hash of the file associated with this event")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"sha256")),(0,i.kt)("td",{parentName:"tr",align:null},"text"),(0,i.kt)("td",{parentName:"tr",align:null},"sha256 of the file associated with this event")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"strings")),(0,i.kt)("td",{parentName:"tr",align:null},"text"),(0,i.kt)("td",{parentName:"tr",align:null},"Strings extracted from file associated with this event")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"is_starred")),(0,i.kt)("td",{parentName:"tr",align:null},"bool"),(0,i.kt)("td",{parentName:"tr",align:null},"Whether an event is starred")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"for_report")),(0,i.kt)("td",{parentName:"tr",align:null},"bool"),(0,i.kt)("td",{parentName:"tr",align:null},"Whether an event is included in the report")))),(0,i.kt)("p",null,"Fields of type ",(0,i.kt)("inlineCode",{parentName:"p"},"int")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"keyword")," require the search term to match exactly in order to return a result. For example, for an event with ",(0,i.kt)("inlineCode",{parentName:"p"},"user")," equal to ",(0,i.kt)("inlineCode",{parentName:"p"},"chris"),", the search term:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"user: chris")," matches"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"user: ch*")," matches"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"user: ch")," does not match")),(0,i.kt)("p",null,"Fields of type ",(0,i.kt)("inlineCode",{parentName:"p"},"keyword")," support wildcard characters. Use ",(0,i.kt)("inlineCode",{parentName:"p"},"?")," as a single-character wildcard and ",(0,i.kt)("inlineCode",{parentName:"p"},"*")," for any number of characters."),(0,i.kt)("p",null,"Fields of type ",(0,i.kt)("inlineCode",{parentName:"p"},"text")," do not require a full match. E.g. searching for ",(0,i.kt)("inlineCode",{parentName:"p"},"strings: content")," will return the event with the following strings data: ",(0,i.kt)("inlineCode",{parentName:"p"},"This is some example content"),"."))}c.isMDXComponent=!0}}]);