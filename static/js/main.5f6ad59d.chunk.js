(this.webpackJsonpreecestimer=this.webpackJsonpreecestimer||[]).push([[0],{52:function(e,t,a){e.exports=a(65)},57:function(e,t,a){},65:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(8),c=a.n(l),i=(a(57),a(98)),u=a(101),o=a(103),m=a(104),s=function(e){var t=Object(i.a)((function(e){return{title:{flexGrow:1.01}}}))();return r.a.createElement("div",null,r.a.createElement(u.a,{position:"static"},r.a.createElement(o.a,null,r.a.createElement(m.a,{variant:"h6",className:t.title},"Reece's Cool Timer"))))},E=a(30),d=a(66),p=a(112),v=a(106),f=a(108),b=a(44),h=a.n(b),g=a(113),w=a(109),y=a(111),C=a(105),S=function(e){return e.show&&""!=e.video_id?r.a.createElement("iframe",{width:"0",height:"0",src:(t=e.video_id,"https://www.youtube.com/embed/".concat(t,"?rel=0&amp;controls=0&amp;autoplay=1")),frameBorder:"0",allow:"autoplay; encrypted-media",title:"music"}):r.a.createElement("div",{hidden:!0});var t},x=["Birds Chirping","Xylophone Notes"],j=["54n9E_LwQvQ","258OTDCrHg0"],N=[];for(var O in x)N.push(r.a.createElement(y.a,{value:j[O]},x[O]));var T=function(e){var t,a=Object(i.a)((function(e){return{input:{width:42},restrictedWidth:{width:250}}}))(),n=r.a.useState(!1),l=Object(E.a)(n,2),c=l[0],u=l[1],o=r.a.useState(0),s=Object(E.a)(o,2),b=s[0],y=s[1],x=r.a.useState(10),j=Object(E.a)(x,2),O=j[0],T=j[1],B=r.a.useState(""),_=Object(E.a)(B,2),k=_[0],I=_[1];return r.a.useEffect((function(){setTimeout((function(){return c&&(b<1?!O<1&&(y(59),T(O-1)):y(b-1)),function(){}}),1e3)})),r.a.createElement(d.a,{style:{padding:"35px",margin:"15px"}},r.a.createElement(m.a,{variant:"h2"},c?"".concat(O,":").concat((t=b)<10?String("0"+t):t):"Timer"),r.a.createElement("br",null),r.a.createElement("div",null,r.a.createElement(C.a,{container:!0,justify:"center",alignItems:"center",hidden:c},r.a.createElement("div",{className:a.restrictedWidth},r.a.createElement("br",null),r.a.createElement(m.a,{variant:"overline"},"Minutes"),r.a.createElement(p.a,{value:"number"===typeof O?O:0,onChange:function(e,t){T(t)},max:"60"}),r.a.createElement(v.a,{className:a.input,value:O,margin:"dense",onChange:function(e){T(""===e.target.value?"":Number(e.target.value))},onBlur:function(){O<0?T(0):O>60&&T(0)},inputProps:{step:1,min:0,max:60,type:"number"}}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(m.a,{variant:"overline"},"Seconds"),r.a.createElement(p.a,{value:"number"===typeof b?b:0,onChange:function(e,t){y(t)},max:"60"}),r.a.createElement(v.a,{className:a.input,value:b,margin:"dense",onChange:function(e){y(""===e.target.value?"":Number(e.target.value))},onBlur:function(){b<0?y(0):b>60&&y(0)},inputProps:{step:1,min:0,max:60,type:"number"}}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(m.a,{variant:"overline"},"Completion Sound"),r.a.createElement("form",{autoComplete:"off"},r.a.createElement(w.a,{onChange:function(e){return I(e.target.value)},value:k},N)),r.a.createElement("br",null))),r.a.createElement("br",null),r.a.createElement(g.a,{title:c?"Stop Timer":"Begin Timer"},r.a.createElement(f.a,{variant:"contained",color:"primary",startIcon:r.a.createElement(h.a,null),onClick:function(e){return u(!c)}},c?"Stop!":"Let's Do This")),r.a.createElement("br",null)),r.a.createElement("br",null),r.a.createElement(S,{video_id:k,show:c&&b<=3&&0==O}))};c.a.render(r.a.createElement((function(){return r.a.createElement("div",null,r.a.createElement(s,null),r.a.createElement(T,null))}),null),document.getElementById("root"))}},[[52,1,2]]]);
//# sourceMappingURL=main.5f6ad59d.chunk.js.map