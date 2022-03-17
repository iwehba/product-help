"use strict";(self.webpackChunkproduct_help=self.webpackChunkproduct_help||[]).push([[762],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),s=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),d=s(n),m=i,k=d["".concat(l,".").concat(m)]||d[m]||u[m]||r;return n?a.createElement(k,o(o({ref:t},c),{},{components:n})):a.createElement(k,o({ref:t},c))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=d;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:i,o[1]=p;for(var s=2;s<r;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},380:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return p},metadata:function(){return s},toc:function(){return u}});var a=n(7462),i=n(3366),r=(n(7294),n(3905)),o=["components"],p={title:"Okta Integration (beta)",hide_title:!0,sidebar_position:2},l="Okta OAuth Integration",s={unversionedId:"cado-response/sso/okta",id:"cado-response/sso/okta",title:"Okta Integration (beta)",description:"Okta OAuth integration is currently in beta.  If you encounter issues, please contact support@cadosecurity.com describing your issue and providing as much detail about your configuration as possible.",source:"@site/docs/cado-response/sso/okta.md",sourceDirName:"cado-response/sso",slug:"/cado-response/sso/okta",permalink:"/docs/cado-response/sso/okta",editUrl:"https://github.com/cado-security/product-help/tree/master/docs/cado-response/sso/okta.md",tags:[],version:"current",lastUpdatedAt:1638898685,formattedLastUpdatedAt:"12/7/2021",sidebarPosition:2,frontMatter:{title:"Okta Integration (beta)",hide_title:!0,sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Azure AD Integration",permalink:"/docs/cado-response/sso/azure-ad"},next:{title:"AWS Backups and Recovery",permalink:"/docs/cado-response/guides/aws-backups"}},c={},u=[{value:"Setting up Okta SSO",id:"setting-up-okta-sso",level:3}],d={toc:u};function m(e){var t=e.components,p=(0,i.Z)(e,o);return(0,r.kt)("wrapper",(0,a.Z)({},d,p,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"okta-oauth-integration"},"Okta OAuth Integration"),(0,r.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Okta OAuth integration is currently in beta.  If you encounter issues, please contact ",(0,r.kt)("a",{parentName:"p",href:"mailto:support@cadosecurity.com"},"support@cadosecurity.com")," describing your issue and providing as much detail about your configuration as possible."))),(0,r.kt)("p",null,"You can now enable the beta of Okta OAuth Integration in Cado Response by going to ",(0,r.kt)("inlineCode",{parentName:"p"},"Settings > OAuth"),"."),(0,r.kt)("h3",{id:"setting-up-okta-sso"},"Setting up Okta SSO"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Open the Okta admin dashboard and navigate to ",(0,r.kt)("inlineCode",{parentName:"p"},"Applications > Applications"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click ",(0,r.kt)("strong",{parentName:"p"},"Create App Integration"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Select"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"OIDC - OpenID Connect"),(0,r.kt)("li",{parentName:"ul"},"Web Application"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click ",(0,r.kt)("strong",{parentName:"p"},"Next"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Give the Cado OAuth app a name")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Add a Sign-in redirect URI. This should be the url you use to access cado in the web browser, with the ",(0,r.kt)("inlineCode",{parentName:"p"},"/login")," path. E.g. ",(0,r.kt)("a",{parentName:"p",href:"https://my.cado.instance/login"},"https://my.cado.instance/login"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Optional: Choose who is granted access to the application"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"In Assignments select ",(0,r.kt)("strong",{parentName:"li"},"Limit access to selected groups")),(0,r.kt)("li",{parentName:"ul"},"Add a user group"),(0,r.kt)("li",{parentName:"ul"},"This can also be done at a later stage"),(0,r.kt)("li",{parentName:"ul"},"If you name a group ",(0,r.kt)("inlineCode",{parentName:"li"},"CadoAdmin"),", then any users in that group will become admin users of Cado Response when logging in")),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{loading:"lazy",alt:"Okta Assignments",src:n(6983).Z,width:"725",height:"242"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"If you wish to edit access control at a later time then you can do so in the ",(0,r.kt)("strong",{parentName:"p"},"Assignments")," tab of the OAuth application where you can add individual people or groups. Only users in a group named ",(0,r.kt)("inlineCode",{parentName:"p"},"CadoAdmin")," will be granted admin user status inside Cado Response.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Add a groups claim for the application:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Go to the ",(0,r.kt)("strong",{parentName:"li"},"Sign On")," tab of the OAuth application"),(0,r.kt)("li",{parentName:"ul"},"Click ",(0,r.kt)("strong",{parentName:"li"},"Edit")," in the OpenID Connect ID Token section"),(0,r.kt)("li",{parentName:"ul"},"In the ",(0,r.kt)("inlineCode",{parentName:"li"},"Groups claim type")," field select ",(0,r.kt)("strong",{parentName:"li"},"Filter")),(0,r.kt)("li",{parentName:"ul"},"In the ",(0,r.kt)("inlineCode",{parentName:"li"},"Groups claim filter")," leave its name ",(0,r.kt)("strong",{parentName:"li"},"groups")," and enter ",(0,r.kt)("strong",{parentName:"li"},"Matches regex")," ",(0,r.kt)("inlineCode",{parentName:"li"},".*")),(0,r.kt)("li",{parentName:"ul"},"Then click ",(0,r.kt)("strong",{parentName:"li"},"Save"))),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{loading:"lazy",alt:"Okta Groups Claim",src:n(7899).Z,width:"696",height:"91"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Go to the ",(0,r.kt)("strong",{parentName:"p"},"General settings")," tab of the OAuth application and note down the ",(0,r.kt)("inlineCode",{parentName:"p"},"Client ID"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Client Secret")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"Okta Domain")," settings.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Configure SSO in cado:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Open your cado instance and log in as an admin user"),(0,r.kt)("li",{parentName:"ul"},"Go to ",(0,r.kt)("inlineCode",{parentName:"li"},"Settings > OAuth")),(0,r.kt)("li",{parentName:"ul"},"Enter the details from step before and click update. For the domain field please add ",(0,r.kt)("inlineCode",{parentName:"li"},"https://")," to the beginning and ",(0,r.kt)("inlineCode",{parentName:"li"},"/oauth2")," to the end of the Okta domain setting. The complete Domain should be of this format: ",(0,r.kt)("inlineCode",{parentName:"li"},"https://<Your Okta Domain>/oauth2")))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Log out with your existing user, and login with Okta OAuth"))))}m.isMDXComponent=!0},6983:function(e,t,n){t.Z=n.p+"assets/images/okta-assignments-3b23b5eb60b1a663656d167431a6126c.png"},7899:function(e,t,n){t.Z=n.p+"assets/images/okta-groups-claim-0a2dfcb9c5c3f572132da5cdcc4ffe63.png"}}]);