(this["webpackJsonpreact-flow-custom"]=this["webpackJsonpreact-flow-custom"]||[]).push([[0],{14:function(e,t,n){},21:function(e,t,n){},22:function(e,t,n){},24:function(e,t,n){},31:function(e,t,n){},32:function(e,t,n){"use strict";n.r(t);n(0);var a=n(4),o=n.n(a),i=(n(21),n(22),n(16)),c="INIT",l="CHANGE_LABEL",r="CHANGE_CONTENT",d="CHANGE_PHOTO",s="CHANGE_VIDEO",u="UNSET",b="SET_CURR",p="UNSET_CURR",f="ADD_ELEMENTS",j="REMOVE_ELEMENTS",m="CHANGE_MEDIA",h="CHANGE_TITLE",y="ADD_LINK",O="REMOVE_LINK",v="UPDATE_CONTENT",g="SET_DRAG",x="UNSET_DRAG",E=function(){return{type:p}},N=function(e){return{type:j,payload:e}},_=function(e){return{type:f,payload:e}},C=(n(24),n(3)),k=n(1),T=function(e){var t,n=e.node,a=e.onSubmit,o=Object(C.b)(),i=Object(C.c)((function(e){return e.editorFields.fields})),b=i.id,p=i.label,f=i.content,j=i.video,m=i.photo;n.id!==b&&o((t={label:n.data.label,content:n.data.content,id:n.id,photo:n.data.media.photo,video:n.data.media.video},{type:c,payload:t}));return Object(k.jsx)("div",{className:"editor-wrapper",children:Object(k.jsx)("div",{className:"node-editor",children:Object(k.jsxs)("div",{className:"node-editor__content",children:[Object(k.jsxs)("div",{className:"node-editor__item",children:["Id: ",b]}),Object(k.jsxs)("div",{className:"node-editor__item",children:[Object(k.jsx)("label",{children:"Title:"}),Object(k.jsx)("input",{className:"input__label",type:"text",value:p,onChange:function(e){return o(function(e){return{type:l,payload:{label:e}}}(e.target.value))}})]}),Object(k.jsxs)("div",{className:"node-editor__item",children:[Object(k.jsx)("label",{children:"Content"}),Object(k.jsx)("textarea",{className:"input__content",value:f,onChange:function(e){return o(function(e){return{type:r,payload:{content:e}}}(e.target.value))}})]}),Object(k.jsxs)("div",{className:"node-editor__item photo",children:[Object(k.jsx)("label",{children:"Photo"}),Object(k.jsx)("textarea",{value:m,onChange:function(e){return o(function(e){return{type:d,payload:{photo:e}}}(e.target.value))}})]}),Object(k.jsxs)("div",{className:"node-editor__item video",children:[Object(k.jsx)("label",{children:"Video"}),Object(k.jsx)("textarea",{value:j,onChange:function(e){return o(function(e){return{type:s,payload:{video:e}}}(e.target.value))}})]}),Object(k.jsxs)("div",{className:"editor_controls",children:[Object(k.jsx)("button",{className:"node-editor-submit editor_button",onClick:function(){o({type:x}),function(e,t,n,o,i){a({label:e,content:t,photo:n,video:o},i)}(p,f,m,j,n),o({type:u})},children:"Submit"}),Object(k.jsx)("button",{className:"editor_button",onClick:function(){o(E()),o(N([n])),o(function(e){return{type:O,payload:{id:e}}}(n.id))},children:"Delete node"})]})]})})})},A=n(2),D=n(8),w=function(){return"f".concat((~~(1e8*Math.random())).toString(16))};function S(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:20,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:20,n=arguments.length>2?arguments[2]:void 0,a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:w();this.id=a,this.sourcePosition="right",this.targetPosition="left",this.data={label:n,title:"",content:"",links:[],media:{photo:"",video:""}},this.position={x:e,y:t}}var P=/\[[[\sA-Za-z]+]]/gm,I=function(e,t,n,a,o){for(var i,c,l=[{x:180,y:160},{x:250,y:90},{x:240,y:-90},{x:150,y:-180}],r=[],d=[];i=P.exec(t);)c||(c=i.index),d.push(i[0]);var s=n.data.links.map((function(e){return e.label}));return Object(D.a)(new Set(d)).filter((function(e){return!s.find((function(t){return t===e}))})).forEach((function(t,i){console.log(t);var c="f".concat((~~(1e8*Math.random())).toString(16)),d=t.slice(2,-2),s=new S(a+l[n.data.links.length?n.data.links.length+i-1:i].x,o+l[n.data.links.length?n.data.links.length+i-1:i].y,d,c),u={id:"e".concat(e,"-").concat(c),source:"".concat(e),target:"".concat(c)};r.push({type:y,payload:{id:e,link:c}},_([s,u]))})),r},R=function(e,t){var n,a;t(_([Object(A.a)(Object(A.a)({},e),{},{id:"e"+e.source+"-"+e.target})])),t((n=e.source,a=e.target,{type:v,payload:{id:n,content:a}}))},L=function(e,t,n){e.preventDefault(),t.id.startsWith("e")||n(function(e){return{type:b,payload:e}}(t))},H=function(e,t,n,a){var o,i,c;e.photo===n.data.media.photo&&e.video===n.data.media.video||a((o=n.id,i=e.photo,c=e.video,{type:m,payload:{id:o,photo:i,video:c}})),e.label!==n.data.label&&a(function(e,t){return{type:l,payload:{id:e,label:t}}}(n.id,e.label)),e.content&&e.content!==n.data.content&&(a(function(e,t){return{type:r,payload:{id:e,content:t}}}(n.id,e.content)),I(n.id,e.content,t,n.position.x,n.position.y).forEach((function(e){return a(e)}))),a(E()),document.getElementsByClassName("react-flow__pane")[0].click(),a({type:g})},G=(n(29),n(30),n(31),function(){var e=Object(C.b)(),t=Object(C.c)((function(e){return e.elements.elements})),n=Object(C.c)((function(e){return e.currElement.currElem})),a=Object(C.c)((function(e){return e.controls.isDraggable}));return Object(k.jsx)("div",{className:"graphField",children:Object(k.jsx)(i.a,{elements:t,onElementsRemove:function(t){return function(e,t){t(N(e))}(t,e)},onConnect:function(t){return R(t,e)},deleteKeyCode:46,nodesDraggable:a,onElementClick:function(t,n){return L(t,n,e)},onPaneClick:function(){return function(e){e(E())}(e)},children:n&&Object(k.jsx)(T,{node:n,onSubmit:function(t,a){return H(t,a,n,e)}})})})}),M=n(13),F=(n(14),function(e){var t=e.els,n=Object(C.b)();return Object(k.jsx)("div",{className:"create-form",children:Object(k.jsx)("button",{onClick:function(){var e=t.reduce((function(e,t){return t.id.startsWith("e")||(t.position.x>e.x&&(e.x=t.position.x),t.position.y>e.y&&(e.y=t.position.y)),e}),{x:0,y:0});e.x+=150,e.y+=80;var a=new S(e.x,e.y);n({type:"ADD_ELEMENTS",payload:[Object(A.a)({},a)]})},children:"Add New"})})}),U=function(){var e=Object(C.b)(),t=Object(C.c)((function(e){return e.elements.elements}));return Object(k.jsxs)("div",{className:"node-list",children:[Object(k.jsx)("h2",{className:"node-list-title",children:"Nodes:"}),Object(k.jsx)("div",{className:"node-list-items",children:t.filter((function(e){return!e.id.startsWith("e")})).map((function(n,a){return Object(k.jsx)("div",{className:"node-list-item",onClick:function(){return function(n){var a=t.filter((function(e){return e.id===n})),o=Object(M.a)(a,1)[0];e({type:"SET_CURR",payload:o});var i=Array.from(document.getElementsByClassName("react-flow__node")).filter((function(e){return e.getAttribute("data-id")===n}));Object(M.a)(i,1)[0].click()}(n.id)},children:n.data.label},a+1)}))}),Object(k.jsx)(F,{els:t})]})};var B=function(){return Object(k.jsxs)("div",{className:"App",children:[Object(k.jsx)(G,{}),Object(k.jsx)(U,{})]})},V=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,34)).then((function(t){var n=t.getCLS,a=t.getFID,o=t.getFCP,i=t.getLCP,c=t.getTTFB;n(e),a(e),o(e),i(e),c(e)}))},K=n(12),W={elements:[{id:"1",type:"input",sourcePosition:"right",targetPosition:"left",data:{label:"Emma wakes up",content:"Hello! This is the first node.",links:[{id:2,label:"Emma sends letter",position:"end"}],media:{photo:"",video:""}},position:{x:250,y:420}},{id:"2",sourcePosition:"right",targetPosition:"left",data:{label:"Emma sends letter",content:"Hello. I am the second node",links:[{id:3,label:"Emma eats",position:"end"}],media:{photo:"",video:""}},position:{x:500,y:420}},{id:"3",sourcePosition:"right",targetPosition:"left",data:{label:"Emma eats",content:"",links:[],media:{photo:"",video:""}},position:{x:790,y:290}},{id:"e1-2",source:"1",target:"2"},{id:"e2-3",source:"2",target:"3"}]},J=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:W,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case f:return Object(A.a)(Object(A.a)({},e),{},{elements:[].concat(Object(D.a)(e.elements),Object(D.a)(t.payload))});case j:var n=t.payload.map((function(e){return e.id}));return Object(A.a)(Object(A.a)({},e),{},{elements:e.elements.filter((function(e){return!n.includes(e.id)}))});case l:return Object(A.a)(Object(A.a)({},e),{},{elements:e.elements.map((function(e){return e.id===t.payload.id&&(e.data.label=t.payload.label),e}))});case m:return Object(A.a)(Object(A.a)({},e),{},{elements:e.elements.map((function(e){return e.id===t.payload.id&&(e.data.media.video=t.payload.video,e.data.media.photo=t.payload.photo),e}))});case r:return Object(A.a)(Object(A.a)({},e),{},{elements:e.elements.map((function(e){return e.id===t.payload.id&&(e.data.content=t.payload.content),e}))});case y:return Object(A.a)(Object(A.a)({},e),{},{elements:e.elements.map((function(n){var a;return e.elements.forEach((function(e){e.id===t.payload.link&&(a=e.data.label)})),n.id===t.payload.id&&n.data.links.push({id:t.payload.id,label:a}),n}))});case h:return Object(A.a)(Object(A.a)({},e),{},{elements:e.elements.map((function(e){return e.id===t.payload.id&&(e.data.title=t.payload.title),e}))});case v:return Object(A.a)(Object(A.a)({},e),{},{elements:e.elements.map((function(n){var a;return e.elements.forEach((function(e){e.id===t.payload.content&&(a=e.data.label||"id: ".concat(e.id))})),n.id===t.payload.id&&(n.data.links.push({id:t.payload.id,label:a}),n.data.content+="[[".concat(a,"]]")),n}))});case O:return Object(A.a)(Object(A.a)({},e),{},{elements:e.elements.map((function(e){return e.data.links=e.data.links.filter((function(e){return!(e.id===t.payload.id)})),e}))});default:return e}},z={currElem:null},Z=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:z,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case b:return{currElem:t.payload};case p:return{currElem:null};default:return e}},q={fields:{id:"",label:"",content:"",photo:"",video:""}},Q=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:q,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case c:return{fields:{id:t.payload.id,label:t.payload.label,content:t.payload.content,photo:t.payload.photo,video:t.payload.video}};case l:return{fields:Object(A.a)(Object(A.a)({},e.fields),{},{label:t.payload.label})};case r:return{fields:Object(A.a)(Object(A.a)({},e.fields),{},{content:t.payload.content})};case d:return{fields:Object(A.a)(Object(A.a)({},e.fields),{},{photo:t.payload.photo})};case s:return{fields:Object(A.a)(Object(A.a)({},e.fields),{},{video:t.payload.video})};case u:return{fields:{id:"",label:"",content:"",photo:"",video:""}};default:return e}},X={isDraggable:!0},Y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:X,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case g:return{isDraggable:!0};case x:return{isDraggable:!1};default:return e}},$=Object(K.a)({currElement:Z,elements:J,editorFields:Q,controls:Y}),ee=Object(K.b)($);o.a.render(Object(k.jsx)(C.a,{store:ee,children:Object(k.jsx)(B,{})}),document.getElementById("root")),V()}},[[32,1,2]]]);
//# sourceMappingURL=main.8304df53.chunk.js.map