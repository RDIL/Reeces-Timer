(this.webpackJsonpreecestimer=this.webpackJsonpreecestimer||[]).push([[0],{49:function(e,t,a){e.exports=a(60)},54:function(e,t,a){},60:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(8),c=a.n(l),u=(a(54),a(27)),o=a(61),m=a(97),i=a(106),s=a(99),E=a(100),p=a(44),d=a.n(p),f=a(104),v=a(105),b=a(98),h=function(e){var t="controls=0&amp;autoplay=1".concat(null!=e[1]?"&amp;start=".concat(e[1]):"");return"https://www.youtube.com/embed/".concat(e[0],"?").concat(t)},g=function(e){return e.show&&""!=e.data[0]?r.a.createElement("iframe",{width:"0",height:"0",src:h(e.data),frameBorder:"0",allow:"autoplay; encrypted-media",title:"sound"}):r.a.createElement("div",{hidden:!0})},y=["Xylophone Notes","Birds Chirping","Bell"],w=["258OTDCrHg0","54n9E_LwQvQ","hrqIq5hBFSw"],C=[null,null,"6"],B=[];for(var S in y)B.push(r.a.createElement(v.a,{value:[w[S],C[S]]},y[S]));var x=function(e){var t,a=r.a.useState(!1),n=Object(u.a)(a,2),l=n[0],c=n[1],p=r.a.useState(0),v=Object(u.a)(p,2),h=v[0],y=v[1],w=r.a.useState(10),C=Object(u.a)(w,2),S=C[0],x=C[1],j=r.a.useState(""),N=Object(u.a)(j,2),O=N[0],R=N[1];return r.a.useEffect((function(){setTimeout((function(){l&&(h<1?!S<1&&(y(59),x(S-1)):y(h-1))}),1e3)})),r.a.createElement(o.a,{style:{padding:"35px",margin:"15px"}},r.a.createElement(m.a,{variant:"h2"},l?"".concat(S,":").concat((t=h)<10?"0".concat(t):t):"Timer"),r.a.createElement("br",null),r.a.createElement("div",null,r.a.createElement(b.a,{container:!0,justify:"center",alignItems:"center"},r.a.createElement("div",{hidden:l,className:e.styleRefs.small},r.a.createElement("br",null),r.a.createElement(m.a,{variant:"overline"},"Minutes"),r.a.createElement(i.a,{value:"number"===typeof S?S:0,onChange:function(e,t){x(t)},max:"60"}),r.a.createElement(s.a,{className:e.styleRefs.input,value:S,margin:"dense",onChange:function(e){x(""===e.target.value?"":Number(e.target.value))},onBlur:function(){(S<0||S>60)&&x(0)},inputProps:{step:1,min:0,max:60,type:"number"}}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(m.a,{variant:"overline"},"Seconds"),r.a.createElement(i.a,{value:"number"===typeof h?h:0,onChange:function(e,t){y(t)},max:"60"}),r.a.createElement(s.a,{className:e.styleRefs.input,value:h,margin:"dense",onChange:function(e){y(""===e.target.value?"":Number(e.target.value))},onBlur:function(){(h<0||h>60)&&y(0)},inputProps:{step:1,min:0,max:60,type:"number"}}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(m.a,{variant:"overline"},"Completion Sound"),r.a.createElement("form",{autoComplete:"off"},r.a.createElement(f.a,{onChange:function(e){return R(e.target.value)},value:O},B)),r.a.createElement("br",null))),r.a.createElement("br",null),r.a.createElement(E.a,{variant:"contained",startIcon:r.a.createElement(d.a,null),onClick:function(e){return c(!l)},disabled:!l&&0==S&&0==h,color:l?"secondary":"primary"},l?"Stop!":"Begin!"),r.a.createElement("br",null)),r.a.createElement("br",null),r.a.createElement(g,{data:O,show:l&&h<=3&&0==S}))},j=a(101),N=a(102),O=a(103);c.a.render(r.a.createElement((function(e){var t=Object(j.a)((function(e){return{input:{width:42},small:{width:250}}}))();return r.a.createElement(r.a.Fragment,null,e.noAppBar?r.a.createElement("div",{hidden:!0}):r.a.createElement(N.a,{position:"static"},r.a.createElement(O.a,null,r.a.createElement(m.a,{variant:"h6"},"Reece's Cool Timer"))),r.a.createElement(x,{styleRefs:t}))}),null),document.getElementById("root"))}},[[49,1,2]]]);
//# sourceMappingURL=main.54987d4c.chunk.js.map