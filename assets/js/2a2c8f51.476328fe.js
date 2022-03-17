"use strict";(self.webpackChunkproduct_help=self.webpackChunkproduct_help||[]).push([[981],{3905:function(e,t,a){a.d(t,{Zo:function(){return u},kt:function(){return m}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(a),m=r,g=d["".concat(s,".").concat(m)]||d[m]||c[m]||i;return a?n.createElement(g,o(o({ref:t},u),{},{components:a})):n.createElement(g,o({ref:t},u))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},2452:function(e,t,a){a.r(t),a.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return c}});var n=a(7462),r=a(3366),i=(a(7294),a(3905)),o=["components"],l={title:"Azure AD Integration",hide_title:!0,sidebar_position:1},s="Azure AD OAuth Integration",p={unversionedId:"cado-response/sso/azure-ad",id:"cado-response/sso/azure-ad",title:"Azure AD Integration",description:"Azure AD OAuth integration is currently in beta.  If you encounter issues, please contact support@cadosecurity.com describing your issue and providing as much detail about your configuration as possible.",source:"@site/docs/cado-response/sso/azure-ad.md",sourceDirName:"cado-response/sso",slug:"/cado-response/sso/azure-ad",permalink:"/docs/cado-response/sso/azure-ad",editUrl:"https://github.com/cado-security/product-help/tree/master/docs/cado-response/sso/azure-ad.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Azure AD Integration",hide_title:!0,sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Cortex XSOAR",permalink:"/docs/cado-response/integrations/cortex-xsoar"},next:{title:"Okta Integration (beta)",permalink:"/docs/cado-response/sso/okta"}},u={},c=[{value:"Setting up Azure AD SSO",id:"setting-up-azure-ad-sso",level:3}],d={toc:c};function m(e){var t=e.components,l=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},d,l,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"azure-ad-oauth-integration"},"Azure AD OAuth Integration"),(0,i.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Azure AD OAuth integration is currently in beta.  If you encounter issues, please contact ",(0,i.kt)("a",{parentName:"p",href:"mailto:support@cadosecurity.com"},"support@cadosecurity.com")," describing your issue and providing as much detail about your configuration as possible."))),(0,i.kt)("p",null,'You can now enable the beta of Azure AD OAuth Integration in Cado Response by going to "Settings > OAuth".'),(0,i.kt)("h3",{id:"setting-up-azure-ad-sso"},"Setting up Azure AD SSO"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Open Azure portal and navigate to ",(0,i.kt)("strong",{parentName:"li"},"Enterprise Applications")),(0,i.kt)("li",{parentName:"ol"},"Click ",(0,i.kt)("strong",{parentName:"li"},"New Application")),(0,i.kt)("li",{parentName:"ol"},"Click ",(0,i.kt)("strong",{parentName:"li"},"Create your own application"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Enter a name (e.g. Cado)"),(0,i.kt)("li",{parentName:"ul"},"Select ",(0,i.kt)("inlineCode",{parentName:"li"},"Integrate any other application you don't find in the gallery (Non-gallery)")))),(0,i.kt)("li",{parentName:"ol"},"Make a note of the Application ID")),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},(0,i.kt)("em",{parentName:"p"},"Optional:")," Create a role to allow Azure AD users to be assigned admin privileges"),(0,i.kt)("ol",{parentName:"div"},(0,i.kt)("li",{parentName:"ol"},"From the home page, open ",(0,i.kt)("strong",{parentName:"li"},"Azure Active Directory")," and select the ",(0,i.kt)("strong",{parentName:"li"},"App Registrations")," blade"),(0,i.kt)("li",{parentName:"ol"},"Select your application (you may need to switch to the ",(0,i.kt)("strong",{parentName:"li"},"All Applications")," tab if you are not an owner)"),(0,i.kt)("li",{parentName:"ol"},"Select ",(0,i.kt)("strong",{parentName:"li"},"App roles")," then ",(0,i.kt)("strong",{parentName:"li"},"Create app role"),"."),(0,i.kt)("li",{parentName:"ol"},"Create a role named ",(0,i.kt)("inlineCode",{parentName:"li"},"admin"),". ",(0,i.kt)("strong",{parentName:"li"},"*IMPORTANT: the value must be ",(0,i.kt)("inlineCode",{parentName:"strong"},"admin")),(0,i.kt)("img",{loading:"lazy",alt:"Azure AD Role",src:a(4184).Z,width:"567",height:"501"}))))),(0,i.kt)("ol",{start:5},(0,i.kt)("li",{parentName:"ol"},"Configure Access Control",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Navigate to ",(0,i.kt)("strong",{parentName:"li"},"Enterprise Applications")," and select the ",(0,i.kt)("strong",{parentName:"li"},"Properties")," blade and make sure ",(0,i.kt)("strong",{parentName:"li"},"User assignment required?")," is set to ",(0,i.kt)("inlineCode",{parentName:"li"},"Yes"),". This means only assigned users will be allowed to log into Cado Response\n",(0,i.kt)("img",{loading:"lazy",alt:"Azure Properties",src:a(4983).Z,width:"604",height:"497"})),(0,i.kt)("li",{parentName:"ul"},"Navigate to ",(0,i.kt)("strong",{parentName:"li"},"Users and Groups")),(0,i.kt)("li",{parentName:"ul"},"Click ",(0,i.kt)("strong",{parentName:"li"},"Add User/Group")," and add any users you want to give access to the app. If you created an admin role, you can assign the new users the admin role to give them admin access within Cado Response."))),(0,i.kt)("li",{parentName:"ol"},"Create a secret to allow authentication with Cado Response",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"From the home page, open ",(0,i.kt)("strong",{parentName:"li"},"Azure Active Directory")," and select the ",(0,i.kt)("strong",{parentName:"li"},"App Registrations")," blade"),(0,i.kt)("li",{parentName:"ul"},"Select your application (you may need to switch to the ",(0,i.kt)("strong",{parentName:"li"},"All Applications")," tab if you are not an owner)"),(0,i.kt)("li",{parentName:"ul"},"Select the ",(0,i.kt)("strong",{parentName:"li"},"Clients & Secrets")," blade and click ",(0,i.kt)("strong",{parentName:"li"},"New Client Secret")),(0,i.kt)("li",{parentName:"ul"},"Make a note of the ",(0,i.kt)("strong",{parentName:"li"},"Value"),", you will need this in Cado Response."))),(0,i.kt)("li",{parentName:"ol"},"Collect other required information",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Select the ",(0,i.kt)("strong",{parentName:"li"},"Overview")," blade and make a note of the following values:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Application Client ID")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Directory (Tenant) ID")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Client Secret")," (which you should already have from previous step)"))))),(0,i.kt)("li",{parentName:"ol"},"Whitelist the redirect URL",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Select the ",(0,i.kt)("strong",{parentName:"li"},"Authentication")," blade\n",(0,i.kt)("img",{loading:"lazy",alt:"Azure Authentication",src:a(9875).Z,width:"240",height:"274"})),(0,i.kt)("li",{parentName:"ul"},"Click ",(0,i.kt)("strong",{parentName:"li"},"Add a Platform")),(0,i.kt)("li",{parentName:"ul"},"Select ",(0,i.kt)("strong",{parentName:"li"},"Web")," and input your redirect url. This should be the url you use to access Cado Response in the web browser, including the ",(0,i.kt)("inlineCode",{parentName:"li"},"/login")," path. Example: ",(0,i.kt)("inlineCode",{parentName:"li"},"https://my.cado.instance/login")))),(0,i.kt)("li",{parentName:"ol"},"Configure SSO in Cado Response",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Open your Cado Response instance and log in as an admin user"),(0,i.kt)("li",{parentName:"ul"},"Go to ",(0,i.kt)("strong",{parentName:"li"},"Settings > OAuth")),(0,i.kt)("li",{parentName:"ul"},"Enter the Microsoft OAuth details you noted earlier and click ",(0,i.kt)("strong",{parentName:"li"},"Update"))))))}m.isMDXComponent=!0},9875:function(e,t,a){t.Z=a.p+"assets/images/azure-authentication-f45196cbc1394bf9eda1aadd1e4e95d8.png"},4184:function(e,t,a){t.Z=a.p+"assets/images/azure-create-role-a52699b7efa0b967fc0650cb134610f8.png"},4983:function(e,t,a){t.Z=a.p+"assets/images/azure-properties-57e0d66a92abcab515c9f71b4974011b.png"}}]);