(this.webpackJsonpreecestimer=this.webpackJsonpreecestimer||[]).push([[0],{52:function(e,t,a){e.exports=a(64)},57:function(e,t,a){},64:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(8),c=a.n(l),u=(a(57),a(26)),o=a(65),m=a(100),i=a(110),s=a(102),E=a(103),p=a(43),f=a.n(p),d=a(108),v=a(109),b=a(101),h=function(e){var t="controls=0&amp;autoplay=1".concat(null!=e[1]?"&amp;start=".concat(e[1]):"");return"https://www.youtube.com/embed/".concat(e[0],"?").concat(t)},g=function(e){return e.show&&""!=e.data[0]?r.a.createElement("iframe",{width:"0",height:"0",src:h(e.data),frameBorder:"0",allow:"autoplay; encrypted-media",title:"sound"}):r.a.createElement("div",{hidden:!0})},y=["Birds Chirping","Xylophone Notes","Bell"],w=["54n9E_LwQvQ","258OTDCrHg0","hrqIq5hBFSw"],C=[null,null,"6"],x=[];for(var B in y)x.push(r.a.createElement(v.a,{value:[w[B],C[B]]},y[B]));var S=function(e){var t,a=r.a.useState(!1),n=Object(u.a)(a,2),l=n[0],c=n[1],p=r.a.useState(0),v=Object(u.a)(p,2),h=v[0],y=v[1],w=r.a.useState(10),C=Object(u.a)(w,2),B=C[0],S=C[1],j=r.a.useState(""),N=Object(u.a)(j,2),O=N[0],R=N[1];return r.a.useEffect((function(){setTimeout((function(){return l&&(h<1?!B<1&&(y(59),S(B-1)):y(h-1)),function(){}}),1e3)})),r.a.createElement(o.a,{style:{padding:"35px",margin:"15px"}},r.a.createElement(m.a,{variant:"h2"},l?"".concat(B,":").concat((t=h)<10?"0".concat(t):t):"Timer"),r.a.createElement("br",null),r.a.createElement("div",null,r.a.createElement(b.a,{container:!0,justify:"center",alignItems:"center"},r.a.createElement("div",{hidden:l,className:e.styleRefs.small},r.a.createElement("br",null),r.a.createElement(m.a,{variant:"overline"},"Minutes"),r.a.createElement(i.a,{value:"number"===typeof B?B:0,onChange:function(e,t){S(t)},max:"60"}),r.a.createElement(s.a,{className:e.styleRefs.input,value:B,margin:"dense",onChange:function(e){S(""===e.target.value?"":Number(e.target.value))},onBlur:function(){(B<0||B>60)&&S(0)},inputProps:{step:1,min:0,max:60,type:"number"}}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(m.a,{variant:"overline"},"Seconds"),r.a.createElement(i.a,{value:"number"===typeof h?h:0,onChange:function(e,t){y(t)},max:"60"}),r.a.createElement(s.a,{className:e.styleRefs.input,value:h,margin:"dense",onChange:function(e){y(""===e.target.value?"":Number(e.target.value))},onBlur:function(){(h<0||h>60)&&y(0)},inputProps:{step:1,min:0,max:60,type:"number"}}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(m.a,{variant:"overline"},"Completion Sound"),r.a.createElement("form",{autoComplete:"off"},r.a.createElement(d.a,{onChange:function(e){return R(e.target.value)},value:O},x)),r.a.createElement("br",null))),r.a.createElement("br",null),r.a.createElement(E.a,{variant:"contained",startIcon:r.a.createElement(f.a,null),onClick:function(e){return c(!l)},disabled:!l&&0==B&&0==h,color:l?"secondary":"primary"},l?"Stop!":"Begin!"),r.a.createElement("br",null)),r.a.createElement("br",null),r.a.createElement(g,{data:O,show:l&&h<=3&&0==B}))},j=a(104),N=a(106),O=a(107),R=a(46),I=a(44),T=a.n(I),k=a(45),q=a.n(k),J=a(105);c.a.render(r.a.createElement((function(){var e=Object(R.a)({palette:{primary:T.a,secondary:q.a}}),t=Object(j.a)((function(e){return{title:{flexGrow:1.01},input:{width:42},small:{width:250}}}))();return r.a.createElement("div",null,r.a.createElement(J.a,{theme:e},r.a.createElement(N.a,{position:"static"},r.a.createElement(O.a,null,r.a.createElement(m.a,{variant:"h6",className:t.title},"Reece's Cool Timer"))),r.a.createElement(S,{styleRefs:t})))}),null),document.getElementById("root"))}},[[52,1,2]]]);
//# sourceMappingURL=main.bf65ce17.chunk.js.map