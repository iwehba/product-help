"use strict";(self.webpackChunkcado_test=self.webpackChunkcado_test||[]).push([[533],{3905:function(e,t,a){a.d(t,{Zo:function(){return d},kt:function(){return u}});var n=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=p(a),u=o,h=c["".concat(s,".").concat(u)]||c[u]||m[u]||r;return a?n.createElement(h,i(i({ref:t},d),{},{components:a})):n.createElement(h,i({ref:t},d))}));function u(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,i=new Array(r);i[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var p=2;p<r;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},8041:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return d},Highlight:function(){return m},default:function(){return u}});var n=a(7462),o=a(3366),r=(a(7294),a(3905)),i=["components"],l={title:"Deployment",hide_title:!0,sidebar_position:2},s=void 0,p={unversionedId:"cado-response/getting-started/deploy",id:"cado-response/getting-started/deploy",isDocsHomePage:!1,title:"Deployment",description:"<span",source:"@site/docs/cado-response/getting-started/deploy.md",sourceDirName:"cado-response/getting-started",slug:"/cado-response/getting-started/deploy",permalink:"/docs/cado-response/getting-started/deploy",editUrl:"https://github.com/cado-security/product-help/tree/master/docs/cado-response/getting-started/deploy.md",tags:[],version:"current",lastUpdatedAt:1629856096,formattedLastUpdatedAt:"8/24/2021",sidebarPosition:2,frontMatter:{title:"Deployment",hide_title:!0,sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Key Concepts",permalink:"/docs/cado-response/getting-started/key-concepts"},next:{title:"Logging In",permalink:"/docs/cado-response/getting-started/logging-in"}},d=[{value:"AWS CloudFormation Template",id:"aws-cloudformation-template",children:[{value:"Deployment Time",id:"deployment-time",children:[]}]},{value:"Azure Terraform Script",id:"azure-terraform-script",children:[]}],m=function(e){var t=e.children,a=e.color;return(0,r.kt)("span",{style:{backgroundColor:a,borderRadius:"2px",color:"#fff",padding:"0.2rem"}},t)},c={toc:d,Highlight:m};function u(e){var t=e.components,l=(0,o.Z)(e,i);return(0,r.kt)("wrapper",(0,n.Z)({},c,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"deployment"},"Deployment"),(0,r.kt)("p",null,"Deployment of Cado Response is performed within your cloud environment either via a CloudFormation Template or a Terraform Script. When the platform is deployed, it creates its own isolated VPC in which you can control who has access.  From start to finish, you can be up and running in under 25 minutes."),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Deployment differs slightly based on your preferred cloud provider. Links below will take you to the respective AWS and Azure deployment guides."),(0,r.kt)("ul",{parentName:"div"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("a",{parentName:"strong",href:"#aws-cloudformation-template"},"AWS - CloudFormation Template"))," "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("a",{parentName:"strong",href:"#azure-terraform-script"},"Azure - Terraform Script"))," ")))),(0,r.kt)("h2",{id:"aws-cloudformation-template"},"AWS CloudFormation Template"),(0,r.kt)("p",null,"To set up Cado Response in AWS you simply deploy our CloudFormation Template (CFT).  The CFT steps you through the process of configuring the platform stack."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"If you have signed up for a Free Trial or are working with the Cado Sales team already, you should receive a link to the Cado Response CloudFormation Template in order to get started. If you have not, reach out to ",(0,r.kt)("a",{parentName:"p",href:"mailto:sales@cadosecurity.com"},"sales@cadosecurity.com")," for more details.  Once you receive the link to the Cado Response CloudFormation Template, click the link to open the AWS CloudFormation Management Console.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"On Step 1 (Specify template), do not change the default ",(0,r.kt)("strong",{parentName:"p"},"Template is ready")," and ",(0,r.kt)("strong",{parentName:"p"},"Amazon S3 URL")," settings.   Click ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)(m,{color:"#F78631",mdxType:"Highlight"},"Next")))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"On Step 2 (Specify stack details), give your stack an appropriate Stack Name, for example: ",(0,r.kt)("inlineCode",{parentName:"p"},"CadoResponse")," and enter the parameters as outlined below:"),(0,r.kt)("table",{parentName:"li"},(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Value"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Instance type for Cado Response EC2 Server"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"t3a.xlarge")),(0,r.kt)("td",{parentName:"tr",align:null},"For enterprise use we recommend at minimum a t3a.xlarge as the instance type.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Key pair for Cado Response EC2 Server"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"(choose your keypair)")),(0,r.kt)("td",{parentName:"tr",align:null},"This key pair is used to enable SSH access to the Cado Response instance. This is not needed for normal operation, but is helpful should Cado Support ask for additional logs.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"CadoAMI"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"(Please contact your Cado Sales team)")),(0,r.kt)("td",{parentName:"tr",align:null},"Please contact your Cado Sales team for the appropriate AMI ID.  When contacting Sales, please provide your AWS Account Number and your AWS region where you will be deploying Cado Response.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Allowed source IP addresses for connection to SSH"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"(enter ip range)")),(0,r.kt)("td",{parentName:"tr",align:null},"Enter details of your IP address/ IP address ranges that will be used to connect to SSH services. The IPv4 address range is specified in the CIDR notation e.g. 192.168.0.1/24. Default is ",(0,r.kt)("inlineCode",{parentName:"td"},"0.0.0.0/0")," but it is strongly recommended that these settings are restricted to your corporate network range.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Allowed source IP addresses for connection to HTTPS"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"(enter ip range)")),(0,r.kt)("td",{parentName:"tr",align:null},"Enter details of your IP address/ IP address ranges that will be used to connect to HTTPS services. The IPv4 address range is specified in the CIDR notation e.g. 192.168.0.1/24. Default is ",(0,r.kt)("inlineCode",{parentName:"td"},"0.0.0.0/0")," but it is strongly recommended that these settings are restricted to your corporate network range.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"VPC CIDR"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"(enter ip range)")),(0,r.kt)("td",{parentName:"tr",align:null},"The Subnet the Cado VPC will use. Specify the IPv4 address range as a Classless Inter-Domain Routing (CIDR) block.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"EFSArchive"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"AFTER_30_DAYS")),(0,r.kt)("td",{parentName:"tr",align:null},"EFS - move data to infrequent storage after X days.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"InstanceVolumeSize"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"1000")),(0,r.kt)("td",{parentName:"tr",align:null},"EC2 instance volume required in GBit.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"S3ArchiveTime"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"30")),(0,r.kt)("td",{parentName:"tr",align:null},"Move S3 data to s3 glacier storage if not used after X days")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"S3GlacierDelete"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"365")),(0,r.kt)("td",{parentName:"tr",align:null},"Delete S3 glacier storage data after X days.")))),(0,r.kt)("div",{parentName:"li",className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"}," We recommend a minimum setting of 500GB for InstanceVolumeSize. The instance will roughly need to be sized to be 20% of the amount of data you intend to be on the platform at once. For example, to have 5TB of disk images imported you will need approximately 1000GB of disk space. Projects can always be deleted to recover space.")))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)(m,{color:"#F78631",mdxType:"Highlight"},"Next")))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"On Step 3 (Configure stack options), click ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)(m,{color:"#F78631",mdxType:"Highlight"},"Next"))," again (unless you require custom settings). If you require custom settings, please contact Cado Security"),(0,r.kt)("div",{parentName:"li",className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"For more information on available stack options, see ",(0,r.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/cfn-console-add-tags.html"},"AWS Documentation"),".")))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)(m,{color:"#F78631",mdxType:"Highlight"},"Next")))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Review the details that have been applied and click ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)(m,{color:"#F78631",mdxType:"Highlight"},"Create Stack"))),(0,r.kt)("div",{parentName:"li",className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"If an IAM role has not been applied in ",(0,r.kt)("em",{parentName:"p"},"Step 3 (Configure stack options)"),", tick the check box for ",(0,r.kt)("inlineCode",{parentName:"p"},"I acknowledge that AWS CloudFormation might create IAM resources")))))),(0,r.kt)("h3",{id:"deployment-time"},"Deployment Time"),(0,r.kt)("p",null,"Deploying the CloudFormation stack will take approximately fifteen minutes, followed by another ten minutes for the completed stack to run an installation and update process."),(0,r.kt)("p",null,"When the CFT stack has a status of ",(0,r.kt)("inlineCode",{parentName:"p"},"CREATE_COMPLETE"),", CloudFormation has finished creating the infrastructure for Cado Response."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Creation Complete",src:a(9575).Z})),(0,r.kt)("p",null,"You can then ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"logging-in"},"Log into Cado Response"))," "),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"After deployment, you can import Test Data from the ",(0,r.kt)("inlineCode",{parentName:"p"},"Help")," menu to confirm that the deployment was successful."))),(0,r.kt)("h2",{id:"azure-terraform-script"},"Azure Terraform Script"),(0,r.kt)("p",null,"To set up Cado Response in Azure you can deploy via our Terraform script.  The Terraform script automates the process of configuring the platform stack."),(0,r.kt)("p",null,"If you have signed up for a Free Trial or are working with the Cado Sales team already, you should receive the following pieces of information:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"a link to the Cado Response VHD image"),(0,r.kt)("li",{parentName:"ul"},"a file named ",(0,r.kt)("inlineCode",{parentName:"li"},"cado_deploy.zip")," with the latest Cado Response Terraform module.\nIf you have not received the above items, reach out to ",(0,r.kt)("a",{parentName:"li",href:"mailto:sales@cadosecurity.com"},"sales@cadosecurity.com")," for more details.  Once you receive them, continue on to the steps below.")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"https://learn.hashicorp.com/tutorials/terraform/install-cli"},"Install Terraform")),", if you have not already.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"https://docs.microsoft.com/en-us/cli/azure/install-azure-cli"},"Install Azure CLI")),", if you have not already.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Run 'az login'. The account you log in with will be used to deploy")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Create a storage account and container to hold the Cado Response VHD.  You must copy the image to the same region in which you want to deploy Cado Response.  "))),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"If you need to capture very large disks (>=1tb) you will need to deploy in a region where storage optimized (L) instances are available, e.g. US East."))),(0,r.kt)("ol",{start:5},(0,r.kt)("li",{parentName:"ol"},"Copy the VHD to your Azure subscription using the command below.  Substitute ",(0,r.kt)("inlineCode",{parentName:"li"},"$RELEASE_URI")," with the VHD URL which was provided by Cado Sales:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},'az storage blob copy start --auth-mode login --account-name your_storage_account  --destination-blob cado_response.vhd --destination-container your_storage_container_name --source-uri "$RELEASE_URI"\n')),(0,r.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Wait for the copy operation to complete before moving to the next step"))),(0,r.kt)("ol",{start:6},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Extract ",(0,r.kt)("inlineCode",{parentName:"p"},"cado_deploy.zip"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Create public + private ssh key (e.g. ",(0,r.kt)("inlineCode",{parentName:"p"},"ssh-keygen -b 4096 -f keys/azure_demo_key"),")")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Customize the file ",(0,r.kt)("inlineCode",{parentName:"p"},"cado_deploy/main.tf")," with:"))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The name of the resource group you want to create"),(0,r.kt)("li",{parentName:"ul"},"The region, which must match where you copied the VHD disk image"),(0,r.kt)("li",{parentName:"ul"},"The URL of the VHD disk image"),(0,r.kt)("li",{parentName:"ul"},"The IP addresses you want to allow access")),(0,r.kt)("ol",{start:9},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Deploy by running ",(0,r.kt)("inlineCode",{parentName:"p"},"terraform init")," followed by ",(0,r.kt)("inlineCode",{parentName:"p"},"terraform apply"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Make a note of the IP Address and the full Instance Id (/subscription/.../cado-main-vm) in the logs e.g.:"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"module.cado_scalable.azurerm_linux_virtual_machine.vm (remote-exec): public_ip = 1.2.3.4\nmodule.cado_scalable.azurerm_linux_virtual_machine.vm: Creation complete after 1m53s [id=/subscriptions/2f34c608-91b5-4d14-ac36-b8e0377fbcca/resourceGroups/new_res_three/providers/Microsoft.Compute/virtualMachines/cado-main-vm]\n")),(0,r.kt)("p",null,"It will take about 20 minutes to deploy, then you can ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"logging-in"},"Log into Cado Response"))," "),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"After deployment, you can import Test Data from the ",(0,r.kt)("inlineCode",{parentName:"p"},"Help")," menu to confirm that the deployment was successful."))))}u.isMDXComponent=!0},9575:function(e,t){t.Z="data:image/png;base64,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"}}]);