(this["webpackJsonpback-home-safe"]=this["webpackJsonpback-home-safe"]||[]).push([[0],{185:function(e,n,t){"use strict";t.r(n);var a,c,i,r,o,s,d,l,b,j,h,u,x,p,f,O,g,v,m,w,k,y,C,I,E,S,D,M,z,A,H,R,L,U,Z,T,q,W,N,F,P,Y,B,K,J,_,G,Q,V,X,$,ee,ne,te,ae,ce,ie,re,oe,se,de,le,be,je,he,ue,xe,pe,fe,Oe,ge,ve,me,we,ke,ye,Ce,Ie,Ee,Se,De,Me,ze,Ae,He=t(0),Re=t.n(He),Le=t(14),Ue=t.n(Le),Ze=t(3),Te=t(13),qe=t(4),We=t(25),Ne=t(11),Fe=t(220),Pe=t(233),Ye=t(219),Be=qe.b.button(a||(a=Object(Ze.a)(["\n  display: block;\n  margin: auto;\n  margin-bottom: 16px;\n  font-size: 24px;\n  padding: 10px 0;\n  width: 80%;\n  border-radius: 48px;\n  flex-shrink: 0;\n  max-width: 280px;\n  font-weight: 500;\n\n  ","\n\n  border: 0;\n  outline: none;\n  ","\n\n  &:focus {\n    outline: none;\n    text-decoration: none;\n  }\n"])),(function(e){return e.disabled?"background-color: #D3D3D3;\n        color: #A1A1A1;\n        ":"\n        background-color: #fed426;\n      "}),(function(e){return e.shadowed?"box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.5);":""})),Ke=Object(qe.b)(Be)(c||(c=Object(Ze.a)(["\n  font-size: 16px;\n  padding: 12px 0;\n  width: 90%;\n  font-weight: unset;\n"]))),Je=t(58),_e=t(110),Ge=t(98),Qe=t.n(Ge),Ve=t(1),Xe=function(e){var n=e.value,t=e.onChange,a=e.placeholder,c=e.readOnly,i=Object(_e.a)(e,["value","onChange","placeholder","readOnly"]);return Object(Ve.jsx)($e,Object(Je.a)({value:n,placeholder:a,readOnly:c,onChange:function(e){t&&t(e.target.value)},async:!0},i))},$e=Object(qe.b)(Qe.a)(i||(i=Object(Ze.a)(["\n  text-align: center;\n  font-size: 32px;\n  background-color: transparent;\n  border: 0;\n  outline: none;\n  margin: 4px 0;\n  color: #fed426;\n  text-shadow: 0px 1px 2px rgba(0, 0, 0, 0.8);\n  width: 100%;\n\n  padding-left: 0;\n  padding-right: 0;\n  line-height: 36px;\n  font-weight: 500;\n\n  &:focus {\n    outline: none;\n  }\n"]))),en=t(32),nn=t.n(en),tn=t(50),an=t(218),cn=t(234),rn=t(236),on=t(99),sn=Object(on.a)((function(){var e=Object(He.useState)("mediaDevices"in navigator),n=Object(Te.a)(e,1)[0],t=Object(rn.a)("preferred_camera_id","AUTO"),a=Object(Te.a)(t,2),c=a[0],i=a[1],r=Object(He.useState)(null),o=Object(Te.a)(r,2),s=o[0],d=o[1],l=Object(He.useCallback)(Object(tn.a)(nn.a.mark((function e(){var t,a;return nn.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,n&&Object(an.a)("enumerateDevices",navigator.mediaDevices)){e.next=4;break}return d([]),e.abrupt("return");case 4:return e.next=6,navigator.mediaDevices.enumerateDevices();case 6:t=e.sent,a=t.filter((function(e){return"videoinput"===e.kind})),d(a),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),alert("Unable to list device.\n\n"+e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,11]])}))),[n]);return Object(He.useEffect)((function(){l()}),[n,l]),Object(He.useEffect)((function(){null===s||"AUTO"===c||Object(cn.a)((function(e){return e.deviceId===c}),s)||i("AUTO")}),[s,i,c]),{cameraId:Object(cn.a)((function(e){return e.deviceId===c}),s||[])?c:"AUTO",cameraList:s||[],setCameraId:i,hasCameraSupport:n}})),dn=Object(Te.a)(sn,2),ln=dn[0],bn=dn[1],jn=function(){var e=bn().hasCameraSupport,n=Object(He.useState)(""),t=Object(Te.a)(n,2),a=t[0],c=t[1];return Object(Ve.jsxs)(hn,{children:[Object(Ve.jsxs)(un,{children:[Object(Ve.jsx)(xn,{children:"\u6211\u60f3\u53bb"}),Object(Ve.jsx)(Xe,{value:a,onChange:c,placeholder:"\u8f38\u5165\u5730\u5740"})]}),Object(Ve.jsxs)(pn,{children:[Object(Pe.a)(Object(Ye.a)(a))?Object(Ve.jsx)(Be,{disabled:!0,shadowed:!0,children:"\u8a71\u53bb\u5c31\u53bb!"}):Object(Ve.jsx)(We.b,{to:{pathname:"/confirm",search:"?place=".concat(a)},children:Object(Ve.jsx)(Be,{shadowed:!0,children:"\u8a71\u53bb\u5c31\u53bb!"})}),e&&Object(Ve.jsxs)(fn,{children:[Object(Ve.jsx)(gn,{to:"/qrReader",children:"\u6383\u7784\u4e8c\u7dad\u78bc"}),Object(Ve.jsx)(On,{orientation:"vertical",flexItem:!0}),Object(Ve.jsx)(gn,{to:"/cameraSetting",children:"\u76f8\u6a5f\u8a2d\u5b9a"})]}),Object(Ve.jsx)(fn,{children:Object(Ve.jsx)(gn,{to:"/qrGenerator",children:"\u751f\u6210\u4e8c\u7dad\u78bc"})})]})]})},hn=qe.b.div(r||(r=Object(Ze.a)(["\n  width: 100%;\n  height: 100%;\n  text-shadow: 0px 1px 2px rgba(0, 0, 0, 0.8);\n  display: flex;\n  flex-direction: column;\n"]))),un=qe.b.div(o||(o=Object(Ze.a)(["\n  width: 100%;\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n"]))),xn=qe.b.div(s||(s=Object(Ze.a)(["\n  color: #ffffff;\n  text-align: center;\n  font-size: 15px;\n"]))),pn=qe.b.div(d||(d=Object(Ze.a)(["\n  width: 100%;\n  text-align: center;\n  color: #fff;\n  padding: 32px 0;\n  flex-shrink: 0;\n"]))),fn=qe.b.div(l||(l=Object(Ze.a)(["\n  display: flex;\n  justify-content: center;\n  width: 100%;\n  margin: 8px 0;\n"]))),On=Object(qe.b)(Fe.a)(b||(b=Object(Ze.a)(["\n  margin: 0 8px;\n\n  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.8);\n\n  &.MuiDivider-root {\n    background-color: #fff;\n  }\n"]))),gn=Object(qe.b)(We.b)(j||(j=Object(Ze.a)(["\n  color: #ffffff;\n  padding: 0 16px;\n"]))),vn=t.p+"static/media/cross.d2bbc7f7.svg",mn=t.p+"static/media/tick.6d45b966.svg",wn=t(51),kn=t.n(wn),yn=t.p+"static/media/crossBlack.aafc0aee.svg",Cn=t.p+"static/media/greenTick.5e528318.svg",In=t(52),En=function(e){var n=e.isModalOpen,t=e.onCancel,a=e.onConfirm,c=e.selectedAutoLeaveHour,i=e.date,r=Object(He.useState)(c),o=Object(Te.a)(r,2),s=o[0],d=o[1];Object(He.useEffect)((function(){d(c)}),[d,c]);var l=Object(He.useMemo)((function(){return i.add(s,"hour")}),[i,s]);return Object(Ve.jsxs)(kn.a,{isOpen:n,onRequestClose:t,style:{overlay:{backgroundColor:"rgba(0, 0, 0, 0.5)"},content:{outline:"none",border:"0",padding:"16px",borderRadius:"8px",width:"240px",position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",height:"370px",overflow:"hidden"}},ariaHideApp:!1,onAfterOpen:function(){var e=document.querySelector("#scroll");e&&Object(In.a)(e)},children:[Object(Ve.jsx)(Dn,{children:Object(Ve.jsx)(Sn,{src:yn,onClick:t})}),Object(Ve.jsx)(Mn,{children:"\u8a2d\u7f5d\u81ea\u52d5\u96e2\u958b\u6642\u9593"}),Object(Ve.jsx)(zn,{id:"scroll",children:Object(Ve.jsx)(An,{children:[1,2,3,4,5,6,7,8,9,10].map((function(e){return Object(Ve.jsxs)(Hn,{onClick:function(){d(e)},children:["+ ",e,"\u5c0f\u6642",s===e&&Object(Ve.jsx)(Ln,{src:Cn})]},e)}))})}),Object(Ve.jsxs)(Rn,{children:[Object(Ve.jsxs)("div",{children:["\u65bc",i.format("MM-DD HH:mm")," \u9032\u5165\u5834\u6240"]}),Object(Ve.jsxs)("div",{children:["\u65bc",l.format("MM-DD HH:mm")," \u81ea\u52d5\u96e2\u958b"]})]}),Object(Ve.jsx)(Ke,{onClick:function(){a(s)},children:"\u78ba\u8a8d"})]})},Sn=qe.b.img(h||(h=Object(Ze.a)(["\n  height: 20px;\n"]))),Dn=qe.b.div(u||(u=Object(Ze.a)(["\n  display: flex;\n  width: 100%;\n  justify-content: flex-end;\n"]))),Mn=qe.b.h1(x||(x=Object(Ze.a)(["\n  font-size: 20px;\n  text-align: center;\n  margin-top: 20px;\n  margin-bottom: 0;\n"]))),zn=qe.b.div(p||(p=Object(Ze.a)(["\n  overflow: auto;\n  height: 180px;\n  padding: 0 8px;\n"]))),An=qe.b.ul(f||(f=Object(Ze.a)(["\n  list-style: none;\n  margin: 0;\n  padding: 0;\n"]))),Hn=qe.b.li(O||(O=Object(Ze.a)(["\n  line-height: 40px;\n  border-bottom: 1px #eeeeee solid;\n  padding: 0 8px;\n"]))),Rn=qe.b.div(g||(g=Object(Ze.a)(["\n  font-size: 12px;\n  text-align: center;\n  padding: 16px 0;\n"]))),Ln=qe.b.img(v||(v=Object(Ze.a)(["\n  height: 32px;\n  position: relative;\n  float: right;\n  top: 4px;\n"]))),Un=function(e){var n=e.isModalOpen,t=e.onCancel,a=e.onLeaveNow,c=e.onLeaved,i=e.place,r=e.date,o=e.autoLeaveHour,s=0!==o,d=Object(He.useMemo)((function(){return r.add(o,"hour")}),[r,o]);return Object(Ve.jsxs)(kn.a,{isOpen:n,onRequestClose:t,style:{overlay:{backgroundColor:"rgba(0, 0, 0, 0.5)"},content:{outline:"none",border:"0",padding:"16px",borderRadius:"8px",width:"240px",position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",height:s?"430px":"390px",overflow:"hidden"}},ariaHideApp:!1,children:[Object(Ve.jsx)(Tn,{children:Object(Ve.jsx)(Zn,{src:yn,onClick:t})}),Object(Ve.jsx)(Nn,{children:"\u4f60\u5df2\u9032\u5165\u5834\u6240"}),Object(Ve.jsx)(Pn,{children:i}),Object(Ve.jsx)(Fn,{children:r.format("YYYY-MM-DD HH:mm")}),Object(Ve.jsx)(qn,{children:"\u4f60\u73fe\u5728\u8981\u96e2\u958b\u55ce\uff1f"}),s&&Object(Ve.jsxs)(Yn,{children:["\u65bc",d.format("MM-DD HH:mm")," \u81ea\u52d5\u96e2\u958b"]}),Object(Ve.jsx)(Ke,{onClick:a,children:"\u662f\u7684\uff0c\u6211\u73fe\u5728\u8981\u96e2\u958b"}),Object(Ve.jsx)(Wn,{onClick:c,children:"\u6211\u73fe\u5df2\u7d93\u96e2\u958b\u4e86"})]})},Zn=qe.b.img(m||(m=Object(Ze.a)(["\n  height: 20px;\n"]))),Tn=qe.b.div(w||(w=Object(Ze.a)(["\n  display: flex;\n  width: 100%;\n  justify-content: flex-end;\n  margin-bottom: 8px;\n"]))),qn=qe.b.div(k||(k=Object(Ze.a)(["\n  font-size: 20px;\n  text-align: center;\n  margin: 64px 0;\n  font-weight: 500;\n"]))),Wn=Object(qe.b)(Ke)(y||(y=Object(Ze.a)(["\n  background-color: #12b188;\n  color: #fff;\n  text-shadow: 0px 1px 2px rgba(0, 0, 0, 0.8);\n"]))),Nn=qe.b.div(C||(C=Object(Ze.a)(["\n  text-align: center;\n  font-size: 16px;\n"]))),Fn=qe.b.div(I||(I=Object(Ze.a)(["\n  text-align: center;\n  font-size: 14px;\n"]))),Pn=qe.b.div(E||(E=Object(Ze.a)(["\n  color: unset;\n  text-shadow: none;\n  text-align: center;\n  font-size: 28px;\n  font-weight: 500;\n  line-height: 48px;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden;\n"]))),Yn=qe.b.div(S||(S=Object(Ze.a)(["\n  font-size: 12px;\n  text-align: center;\n  padding: 12px 0;\n"]))),Bn=t(104),Kn=t.n(Bn),Jn=(t(144),Object(He.forwardRef)((function(e,n){return Object(He.useImperativeHandle)(n,(function(){return{init:function(){var e=document.querySelector(".js-inline-picker");e&&new Kn.a(e,{inline:!0,rows:2})}}})),Object(Ve.jsx)(_n,{children:Object(Ve.jsx)("div",{className:"js-inline-picker"})})}))),_n=qe.b.div(D||(D=Object(Ze.a)(["\n  & .picker {\n    font-size: 12px;\n  }\n\n  & .picker-dialog {\n    border: 0;\n  }\n\n  & .picker-cell:before {\n    background-image: unset;\n  }\n\n  & .picker-cell:after {\n    background-image: unset;\n  }\n\n  & .picker-picked {\n    color: unset;\n    border-top: #12b188 1px solid;\n    border-bottom: #12b188 1px solid;\n  }\n\n  & .picker-cell {\n    padding: 0 4px;\n  }\n\n  & .picker-item {\n    padding: 3px 0px;\n  }\n\n  & .picker-cell + .picker-cell {\n    border: 0;\n  }\n"]))),Gn=function(e){var n=e.isModalOpen,t=e.onCancel,a=e.onConfirm,c=Object(He.useRef)(null);return Object(Ve.jsxs)(kn.a,{isOpen:n,onRequestClose:t,style:{overlay:{backgroundColor:"rgba(0, 0, 0, 0.5)"},content:{outline:"none",border:"0",padding:"16px",borderRadius:"8px",width:"240px",position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",height:"280px",overflow:"hidden"}},ariaHideApp:!1,onAfterOpen:function(){c.current&&c.current.init()},children:[Object(Ve.jsx)(Vn,{children:Object(Ve.jsx)(Qn,{src:yn,onClick:t})}),Object(Ve.jsx)(Xn,{children:"\u4f60\u662f\u4ec0\u9ebc\u6642\u5019\u96e2\u958b\uff1f"}),Object(Ve.jsx)($n,{children:Object(Ve.jsx)(Jn,{ref:c})}),Object(Ve.jsx)(Ke,{onClick:a,children:"\u78ba\u8a8d"})]})},Qn=qe.b.img(M||(M=Object(Ze.a)(["\n  height: 20px;\n"]))),Vn=qe.b.div(z||(z=Object(Ze.a)(["\n  display: flex;\n  width: 100%;\n  justify-content: flex-end;\n"]))),Xn=qe.b.div(A||(A=Object(Ze.a)(["\n  font-size: 20px;\n  text-align: center;\n  margin-top: 24px;\n"]))),$n=qe.b.div(H||(H=Object(Ze.a)(["\n  border-bottom: 1px #eeeeee solid;\n  border-top: 1px #eeeeee solid;\n  padding: 32px 0;\n  margin: 16px 0;\n"]))),et=t.p+"static/media/checkbox.4e2450ab.svg",nt=t.p+"static/media/checkboxChecked.7f6c2da0.svg",tt=t(69),at=t(235),ct=function(e){var n=e.onChange,t=e.checked,a=function(){n(!t)};return tt.isAndroid?Object(Ve.jsx)(rt,{checked:t,onClick:a,color:"primary"}):Object(Ve.jsx)(it,{src:t?nt:et,onClick:a})},it=qe.b.img(R||(R=Object(Ze.a)(["\n  height: 32px;\n  display: inline-block;\n  vertical-align: top;\n  margin: 0 8px;\n"]))),rt=Object(qe.b)(at.a)(L||(L=Object(Ze.a)(["\n  display: inline-block;\n  vertical-align: top;\n  margin: 0 8px !important;\n  padding: 0 !important;\n\n  &.MuiCheckbox-colorPrimary {\n    color: #fff !important;\n  }\n"]))),ot=t(105),st=t.n(ot),dt=function(){var e=Object(Ne.g)(),n=Object(Ne.h)(),t=Object(He.useState)(!0),a=Object(Te.a)(t,2),c=a[0],i=a[1],r=Object(He.useState)(4),o=Object(Te.a)(r,2),s=o[0],d=o[1],l=Object(He.useState)(!1),b=Object(Te.a)(l,2),j=b[0],h=b[1],u=Object(He.useState)(!1),x=Object(Te.a)(u,2),p=x[0],f=x[1],O=Object(He.useState)(!1),g=Object(Te.a)(O,2),v=g[0],m=g[1],w=Object(He.useMemo)((function(){return Object(Ye.a)(new URLSearchParams(n.search).get("place")||"")}),[n.search]);Object(He.useEffect)((function(){w&&!Object(Pe.a)(w)||e.push("/")}),[e,w]);var k=Object(He.useMemo)((function(){return st()()}),[]),y=function(){h(!1),f(!1),m(!1),e.push("/")};return Object(Ve.jsxs)(Ve.Fragment,{children:[Object(Ve.jsxs)(lt,{children:[Object(Ve.jsx)(bt,{children:Object(Ve.jsx)(We.b,{to:"/",children:Object(Ve.jsx)(jt,{src:vn})})}),Object(Ve.jsxs)(ut,{children:[Object(Ve.jsx)(Ot,{children:"\u4f60\u5df2\u9032\u5165\u5834\u6240"}),Object(Ve.jsx)(ht,{children:Object(Ve.jsx)(Xe,{value:w||"",readOnly:!0})}),Object(Ve.jsx)(gt,{children:k.format("YYYY-MM-DD HH:mm")})]}),Object(Ve.jsx)(xt,{children:Object(Ve.jsx)(pt,{children:Object(Ve.jsx)(ft,{src:mn})})}),Object(Ve.jsxs)(yt,{children:[Object(Ve.jsxs)(vt,{children:[Object(Ve.jsxs)(mt,{children:[Object(Ve.jsx)(ct,{checked:c,onChange:i}),s,"\u5c0f\u6642\u5f8c\u81ea\u52d5\u96e2\u958b"]}),Object(Ve.jsx)(wt,{onClick:function(){h(!0)},children:"\u8b8a\u66f4"})]}),Object(Ve.jsx)(Be,{shadowed:!0,onClick:function(){f(!0)},children:"\u96e2\u958b"}),Object(Ve.jsx)(kt,{children:'\u7576\u4f60\u96e2\u958b\u6642\u8acb\u7dca\u8a18\u6309"\u96e2\u958b"'})]})]}),Object(Ve.jsx)(En,{isModalOpen:j,onCancel:function(){h(!1)},onConfirm:function(e){d(e),h(!1)},selectedAutoLeaveHour:s,date:k}),Object(Ve.jsx)(Un,{isModalOpen:p,onCancel:function(){f(!1)},onLeaveNow:y,onLeaved:function(){f(!1),m(!0)},place:w||"",date:k,autoLeaveHour:c?s:0}),Object(Ve.jsx)(Gn,{isModalOpen:v,onCancel:function(){m(!1)},onConfirm:y})]})},lt=qe.b.div(U||(U=Object(Ze.a)(["\n  width: 100%;\n  height: 100%;\n  text-shadow: 0px 1px 2px rgba(0, 0, 0, 0.8);\n  display: flex;\n  flex-direction: column;\n  color: #fff;\n"]))),bt=qe.b.div(Z||(Z=Object(Ze.a)(["\n  width: 100%;\n  display: flex;\n  justify-content: flex-end;\n  flex-shrink: 0;\n"]))),jt=qe.b.img(T||(T=Object(Ze.a)(["\n  height: 20px;\n  margin: 24px;\n"]))),ht=qe.b.div(q||(q=Object(Ze.a)(["\n  padding: 0 32px;\n"]))),ut=qe.b.div(W||(W=Object(Ze.a)(["\n  width: 100%;\n  height: 50%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n"]))),xt=qe.b.div(N||(N=Object(Ze.a)(["\n  height: 100%;\n  width: 100%;\n  text-align: center;\n"]))),pt=qe.b.div(F||(F=Object(Ze.a)(["\n  height: 100%;\n  max-height: 200px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n"]))),ft=qe.b.img(P||(P=Object(Ze.a)(["\n  display: inline-block;\n  height: 100%;\n  max-height: 110px;\n"]))),Ot=qe.b.div(Y||(Y=Object(Ze.a)(["\n  color: #ffffff;\n  text-align: center;\n  font-size: 15px;\n"]))),gt=qe.b.div(B||(B=Object(Ze.a)(["\n  color: #ffffff;\n  text-align: center;\n"]))),vt=qe.b.div(K||(K=Object(Ze.a)(["\n  margin-bottom: 16px;\n  width: 100%;\n  max-width: 380px;\n  margin: 16px auto;\n  display: flex;\n  flex-shrink: 0;\n  font-size: 14px;\n"]))),mt=qe.b.div(J||(J=Object(Ze.a)(["\n  width: 100%;\n  text-align: left;\n  padding-left: 24px;\n  line-height: 32px;\n"]))),wt=qe.b.div(_||(_=Object(Ze.a)(["\n  flex-shrink: 0;\n  padding-right: 24px;\n  line-height: 32px;\n"]))),kt=qe.b.div(G||(G=Object(Ze.a)(["\n  text-align: center;\n  padding-bottom: 40px;\n  flex-shrink: 0;\n"]))),yt=qe.b.div(Q||(Q=Object(Ze.a)(["\n  width: 100%;\n  flex-shrink: 0;\n"]))),Ct=t(106),It=function(e){if(!e.startsWith("HKEN:"))return"";var n=function(e){if(!e.startsWith("HKEN:"))return null;var n=e.substring(6,14),t=Et(n),a=e.substring(14),c=JSON.parse(decodeURIComponent(escape(window.atob(a))));return console.log({input:e,venueId:n,decodedData:c,computedHash:t,hashMatch:t===c.hash}),c}(e);if(!n)return"";var t=n.nameZh?Object(Ye.a)(n.nameZh):"";return Object(Pe.a)(t)?n.nameEn:t},Et=function(e){var n="HKEN".concat(e,"2020");return Object(Ct.sha256)(n)},St=function(e){var n=e.typeEn,t=e.typeZh,a=e.nameEn,c=e.nameZh,i=e.type,r=e.venueCode,o=e.venueID,s={metadata:Object(Pe.a)(n)&&Object(Pe.a)(t)?null:{typeEn:n,typeZh:t},nameZh:c,nameEn:a,type:i,hash:Et(o)},d=window.btoa(unescape(encodeURIComponent(JSON.stringify(s))));return"HKEN:".concat(r).concat(o).concat(d)},Dt=t.p+"static/media/qrOverlay.185cc3ea.svg",Mt=t(107),zt=t.n(Mt),At=t(224),Ht=function(){var e=Object(tn.a)(nn.a.mark((function e(n){return nn.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!("mediaDevices"in navigator)){e.next=12;break}return e.prev=1,e.abrupt("return",navigator.mediaDevices.getUserMedia({video:n?{deviceId:n}:{facingMode:"environment"},audio:!1}));case 5:return e.prev=5,e.t0=e.catch(1),alert("\u672a\u80fd\u958b\u555f\u76f8\u6a5f\u93e1\u982d\uff0c\u8acb\u5230\u76f8\u6a5f\u8a2d\u5b9a\u9032\u884c\u8a2d\u7f6e"),console.log(e.t0),e.abrupt("return",null);case 10:e.next=14;break;case 12:return alert(tt.isIOS?"getUserMedia is not implemented in this browser, \u8acb\u78ba\u4fdd\u88dd\u7f6e\u5728IOS 14\u6216\u4ee5\u4e0a":"getUserMedia is not implemented in this browser"),e.abrupt("return",null);case 14:case"end":return e.stop()}}),e,null,[[1,5]])})));return function(n){return e.apply(this,arguments)}}(),Rt=function(e){var n=e.onFrame,t=bn().cameraId,a=Object(He.useRef)(null),c=Object(He.useRef)(null),i=Object(At.a)((function(){var e=c.current,t=a.current;if(e&&t&&t.readyState===t.HAVE_ENOUGH_DATA){var i=e.getContext("2d");if(!i)return;e.height=t.videoHeight,e.width=t.videoWidth,i.drawImage(t,0,0,e.width,e.height);var r=i.getImageData(0,0,e.width,e.height);n&&n(r)}}),!1),r=Object(Te.a)(i,2),o=r[0],s=r[1],d=Object(He.useCallback)(Object(tn.a)(nn.a.mark((function e(){var n,c;return nn.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=a.current){e.next=3;break}return e.abrupt("return");case 3:return console.log("cameraId",t),e.next=6,Ht("AUTO"===t?void 0:t);case 6:if(c=e.sent){e.next=9;break}return e.abrupt("return");case 9:n.srcObject=c,n.play(),s();case 12:case"end":return e.stop()}}),e)}))),[s,t]);return Object(He.useEffect)((function(){var e=a.current;return d(),function(){if(o(),e){var n=e.srcObject;if(!n)return;n.getTracks().forEach((function(e){e.stop()})),e.srcObject=null}}}),[s,o,a,d,t]),Object(Ve.jsxs)(Ve.Fragment,{children:[Object(Ve.jsx)(Lt,{ref:a,playsInline:!0}),Object(Ve.jsx)(Ut,{ref:c})]})},Lt=qe.b.video(V||(V=Object(Ze.a)(["\n  /* Make video to at least 100% wide and tall */\n  min-width: 100%;\n  min-height: 100%;\n\n  /* Setting width & height to auto prevents the browser from stretching or squishing the video */\n  width: auto;\n  height: auto;\n\n  /* Center the video */\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n"]))),Ut=qe.b.canvas(X||(X=Object(Ze.a)(["\n  display: none;\n"]))),Zt=function(e){var n=e.onDecode,t=Object(He.useCallback)((function(e){var t=zt()(e.data,e.width,e.height,{inversionAttempts:"dontInvert"});t&&n(t)}),[n]);return Object(Ve.jsx)(Rt,{onFrame:t})},Tt=t.p+"static/media/back.7bf7a56f.svg",qt=function(e){var n=e.name,t=e.backPath;return Object(Ve.jsxs)(Nt,{children:[Object(Ve.jsx)(We.b,{to:t,children:Object(Ve.jsx)(Wt,{src:Tt})}),n]})},Wt=qe.b.img($||($=Object(Ze.a)(["\n  height: 20px;\n  top: 14px;\n  left: 16px;\n  position: absolute;\n"]))),Nt=qe.b.div(ee||(ee=Object(Ze.a)(["\n  color: #ffffff;\n  background-color: #12b188;\n  text-align: center;\n  line-height: 48px;\n  text-shadow: 0px 1px 2px rgba(0, 0, 0, 0.8);\n  flex-shrink: 0;\n"]))),Ft=function(){var e=Object(Ne.g)();return Object(Ve.jsxs)(Pt,{children:[Object(Ve.jsx)(qt,{backPath:"/",name:"\u6383\u7784\u4e8c\u7dad\u78bc"}),Object(Ve.jsx)(Kt,{children:"\u6383\u7784\u4e8c\u7dad\u78bc"}),Object(Ve.jsxs)(Yt,{children:[Object(Ve.jsx)(Bt,{}),Object(Ve.jsx)(Zt,{onDecode:function(n){var t=n.data;if(t&&!Object(Pe.a)(t)){var a=It(t);Object(Pe.a)(a)||e.push({pathname:"/confirm",search:"?place=".concat(a)})}}})]})]})},Pt=qe.b.div(ne||(ne=Object(Ze.a)(["\n  width: 100%;\n  height: 100%;\n  text-shadow: 0px 1px 2px rgba(0, 0, 0, 0.8);\n  display: flex;\n  flex-direction: column;\n"]))),Yt=qe.b.div(te||(te=Object(Ze.a)(["\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n  position: relative;\n"]))),Bt=qe.b.div(ae||(ae=Object(Ze.a)(['\n  /* The image used */\n  background-image: url("','");\n\n  /* Full height */\n  height: 100%;\n\n  /* Center and scale the image nicely */\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n\n  z-index: 50;\n  position: relative;\n'])),Dt),Kt=qe.b.div(ce||(ce=Object(Ze.a)(["\n  position: absolute;\n  z-index: 51;\n  bottom: 20%;\n  width: 100%;\n  text-align: center;\n  color: #ffffff;\n  font-size: 16px;\n"]))),Jt=t(187),_t=t.p+"static/media/plus.abd4712a.svg",Gt=function(e){var n=e.onDismiss,t=function(){var e=Object(He.useState)(null),n=Object(Te.a)(e,2),t=n[0],a=n[1];return Object(He.useEffect)((function(){var e=function(e){e.preventDefault(),a(e)},n=function(e){e.preventDefault(),console.log("app installed"),a(null)};return window.addEventListener("beforeinstallprompt",e),window.addEventListener("appinstalled",n),function(){window.removeEventListener("beforeinstallprompt",e),window.removeEventListener("appinstalled",n)}}),[]),[t,function(){return t?t.prompt():Promise.reject(new Error('Tried installing before browser sent "beforeinstallprompt" event'))}]}(),a=Object(Te.a)(t,2),c=a[0],i=a[1],r=Object(He.useCallback)((function(){c&&i()}),[c,i]);return Object(Ve.jsxs)(Qt,{children:[Object(Ve.jsx)(Vt,{src:_t}),Object(Ve.jsx)("div",{children:"\u65b0\u589e\u81f3\u4e3b\u756b\u9762\u5148\u5566"}),Object(Ve.jsx)("div",{children:"\u5514\u4fc2\u9ede\u4f3c\u500bApp"}),Object(Ve.jsxs)($t,{children:[Object(Ve.jsx)("div",{children:"IOS"}),Object(Ve.jsx)("div",{children:"\u7528Safari\u958b=>\u5206\u4eab=>\u65b0\u589e\u81f3\u4e3b\u756b\u9762"}),Object(Ve.jsx)("div",{children:"Android"}),Object(Ve.jsx)("div",{children:"\u7528Chrome\u958b=>\u53f3\u4e0a\u9078\u9805=>\u65b0\u589e\u81f3\u4e3b\u756b\u9762/\u5b89\u88dd\u61c9\u7528\u7a0b\u5f0f"}),c&&Object(Ve.jsx)(Xt,{children:Object(Ve.jsx)(Jt.a,{variant:"contained",onClick:r,children:"\u5b89\u88dd"})})]}),Object(Ve.jsx)("div",{children:Object(Ve.jsx)(Jt.a,{variant:"contained",onClick:n,children:"\u6211\u77e5\u6211\u505a\u7dca\u4e5c\uff0c\u4ffe\u6211\u5165\u53bb"})})]})},Qt=qe.b.div(ie||(ie=Object(Ze.a)(["\n  display: flex;\n  width: 100%;\n  height: 100%;\n  justify-content: center;\n  vertical-align: middle;\n  flex-direction: column;\n  text-align: center;\n  color: #fff;\n"]))),Vt=qe.b.img(re||(re=Object(Ze.a)(["\n  width: 100px;\n  margin: 0 auto 32px auto;\n"]))),Xt=qe.b.div(oe||(oe=Object(Ze.a)(["\n  margin-top: 12px;\n"]))),$t=qe.b.div(se||(se=Object(Ze.a)(["\n  font-size: 12px;\n  margin: 24px 0;\n"]))),ea=t(82),na=t(226),ta=t(227),aa=t(239),ca=t(225),ia=t(237),ra=t(70),oa=t.p+"static/media/baseIcon.aa0e0793.png",sa=t(238),da=t(80),la=t.n(da),ba=function(e){var n=e.data,t=e.onLeave,a=Object(He.useRef)(null);return Object(He.useEffect)((function(){if(a.current){var e=St(n);new ra.a({image:a.current,content:e,width:380,logo:{src:n.customImg||oa,logoRadius:8,borderSize:0}}).toImage()}}),[n]),n?Object(Ve.jsxs)(ja,{children:[Object(Ve.jsx)(ha,{children:Object(Ve.jsx)(ua,{src:vn,onClick:t})}),Object(Ve.jsx)(fa,{children:Object(Ve.jsxs)(pa,{children:[n.nameEn&&!Object(Pe.a)(n.nameZh)&&Object(Ve.jsx)(xa,{value:n.nameZh||"",readOnly:!0}),n.nameEn&&!Object(Pe.a)(n.nameEn)&&Object(Ve.jsx)(xa,{value:n.nameEn||"",readOnly:!0})]})}),Object(Ve.jsx)(Oa,{children:Object(Ve.jsx)(ga,{children:Object(Ve.jsx)(va,{ref:a,alt:"qrCode"})})}),Object(Ve.jsxs)(ma,{children:[n.addressZh&&!Object(Pe.a)(n.addressZh)&&Object(Ve.jsx)("div",{children:n.addressZh}),n.addressEn&&!Object(Pe.a)(n.addressEn)&&Object(Ve.jsx)("div",{children:n.addressEn})]})]}):Object(Ve.jsx)(Ve.Fragment,{})},ja=qe.b.div(de||(de=Object(Ze.a)(["\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  color: #fff;\n  background-color: #12b188;\n  position: absolute;\n"]))),ha=qe.b.div(le||(le=Object(Ze.a)(["\n  width: 100%;\n  display: flex;\n  justify-content: flex-end;\n  flex-shrink: 0;\n"]))),ua=qe.b.img(be||(be=Object(Ze.a)(["\n  height: 20px;\n  margin: 24px;\n"]))),xa=Object(qe.b)(Xe)(je||(je=Object(Ze.a)(["\n  font-size: 20px;\n  line-height: 20px;\n  text-shadow: none;\n"]))),pa=qe.b.div(he||(he=Object(Ze.a)(["\n  padding: 0 32px;\n"]))),fa=qe.b.div(ue||(ue=Object(Ze.a)(["\n  width: 100%;\n  height: 50%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n"]))),Oa=qe.b.div(xe||(xe=Object(Ze.a)(["\n  height: 100%;\n  width: 100%;\n  text-align: center;\n"]))),ga=qe.b.div(pe||(pe=Object(Ze.a)(["\n  height: 100%;\n  max-height: 280px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n"]))),va=qe.b.img(fe||(fe=Object(Ze.a)(["\n  display: inline-block;\n  height: 100%;\n  max-height: 300px;\n  margin: 0 auto;\n"]))),ma=qe.b.div(Oe||(Oe=Object(Ze.a)(["\n  width: 100%;\n  height: 50%;\n  text-align: center;\n"]))),wa=function(){var e=Object(He.useRef)(null),n=Re.a.useRef(null),t=Object(He.useState)(!1),a=Object(Te.a)(t,2),c=a[0],i=a[1],r=Object(He.useState)(null),o=Object(Te.a)(r,2),s=o[0],d=o[1],l=Object(ca.a)({typeEn:"Stores/Shopping Malls",typeZh:"\u5546\u5e97/\u5546\u5834",nameEn:"CityWalk",nameZh:"\u8343\u65b0\u5929\u5730",type:"IMPORT",venueCode:"0",venueID:"WHBvLDSa",addressEn:"1 & 18 Yeung Uk Rd, Tsuen Wan, Hong Kong",addressZh:"\u8343\u7063\u694a\u5c4b\u90531\u865f",customImg:null}),b=Object(Te.a)(l,2),j=b[0],h=b[1],u=1===j.venueCode.length,x=8===j.venueID.length,p=u&&x;Object(ia.a)((function(){var e=document.querySelector("#scroll");e&&Object(In.a)(e)})),Object(He.useEffect)((function(){if(e.current&&p){var n=St(j),t=new ra.a({image:e.current,content:n,width:380,logo:{src:j.customImg||oa,logoRadius:8,borderSize:0}});t.toImage(),d(t)}}),[j,p]);return Object(Ve.jsxs)(ka,{children:[Object(Ve.jsx)(qt,{backPath:"/",name:"\u751f\u6210\u4e8c\u7dad\u78bc"}),Object(Ve.jsxs)(ya,{id:"scroll",children:[Object(Ve.jsxs)(Ca,{children:[Object(Ve.jsx)(Ia,{label:"\u5834\u6240\u7a2e\u985e(\u4e2d\u6587) (typeZh)",value:j.typeZh,onChange:function(e){h({typeZh:e.target.value})}}),Object(Ve.jsx)(Ia,{label:"\u5834\u6240\u7a2e\u985e(\u82f1\u6587) (typeEn)",value:j.typeEn,onChange:function(e){h({typeEn:e.target.value})}}),Object(Ve.jsx)(Ia,{label:"\u5834\u6240\u540d\u5b57(\u4e2d\u6587) (nameZh)",value:j.nameZh,onChange:function(e){h({nameZh:e.target.value})}}),Object(Ve.jsx)(Ia,{label:"\u5834\u6240\u540d\u5b57(\u82f1\u6587) (nameEn)",value:j.nameEn,onChange:function(e){h({nameEn:e.target.value})}}),Object(Ve.jsx)(Ia,{label:"\u5834\u6240\u5730\u5740(\u4e2d\u6587) (\u9810\u89bd\u7528)",value:j.addressZh,onChange:function(e){h({addressZh:e.target.value})}}),Object(Ve.jsx)(Ia,{label:"\u5834\u6240\u5730\u5740(\u82f1\u6587) (\u9810\u89bd\u7528)",value:j.addressEn,onChange:function(e){h({addressEn:e.target.value})}}),Object(Ve.jsx)(Ia,{label:"\u985e\u578b",value:j.type,onChange:function(e){h({type:e.target.value})}}),Object(Ve.jsx)(Ia,{label:"\u5834\u5730\u7de8\u78bc (\u5514\u77e5\u5514\u597d\u641e)",value:j.venueCode,onChange:function(e){h({venueCode:e.target.value})},error:!u,inputProps:{maxLength:1}}),Object(Ve.jsx)(Ia,{label:"\u5834\u5730ID (\u5514\u77e5\u5514\u597d\u641e)",value:j.venueID,onChange:function(e){h({venueID:e.target.value})},error:!x,inputProps:{maxLength:8}}),Object(Ve.jsxs)(Ea,{children:[Object(Ve.jsx)("div",{children:"\u81ea\u5b9aIcon"}),Object(Ve.jsx)(Sa,{type:"file",name:"avatar",accept:"image/png, image/jpeg",ref:n,onChange:function(e){var n=Array.from(e.target.files||[]),t=Object(sa.a)(n);if(t){var a=new FileReader;a.readAsDataURL(t),a.onload=function(){return h({customImg:String(a.result)})}}else h({customImg:null})}})]})]}),Object(Ve.jsx)(Fe.a,{}),Object(Ve.jsx)(Ma,{children:Object(Ve.jsxs)(na.a,{"aria-label":"outlined primary button group",children:[Object(Ve.jsx)(Jt.a,{variant:"contained",size:"small",startIcon:Object(Ve.jsx)(la.a,{}),onClick:function(){s&&s.downloadImage("QR Code")},disabled:!p,children:"\u5132\u5b58"}),Object(Ve.jsx)(Jt.a,{variant:"contained",size:"small",startIcon:Object(Ve.jsx)(la.a,{}),onClick:function(){i(!0)},disabled:!p,children:"\u9810\u89bd"})]})}),Object(Ve.jsx)(Da,{ref:e,alt:"qrCode"})]}),c&&Object(Ve.jsx)(ba,{data:j,onLeave:function(){i(!1)}})]})},ka=qe.b.div(ge||(ge=Object(Ze.a)(["\n  width: 100%;\n  height: 100%;\n  background-color: #fff;\n  display: flex;\n  flex-direction: column;\n"]))),ya=qe.b.div(ve||(ve=Object(Ze.a)(["\n  width: 100%;\n  height: 100%;\n  overflow: auto;\n"]))),Ca=Object(qe.b)(ta.a)(me||(me=Object(Ze.a)(["\n  padding: 8px 16px;\n"]))),Ia=Object(qe.b)(aa.a)(we||(we=Object(Ze.a)(["\n  &.MuiFormControl-root {\n    margin-top: 8px;\n  }\n"]))),Ea=qe.b.div(ke||(ke=Object(Ze.a)(["\n  font-size: 12px;\n  padding: 4px 0;\n  color: rgba(0, 0, 0, 0.54);\n"]))),Sa=qe.b.input(ye||(ye=Object(Ze.a)(["\n  padding: 4px 0;\n"]))),Da=qe.b.img(Ce||(Ce=Object(Ze.a)(["\n  width: 100%;\n"]))),Ma=qe.b.div(Ie||(Ie=Object(Ze.a)(["\n  margin-top: 16px;\n  display: flex;\n  justify-content: center;\n"]))),za=t(81),Aa=function(e){return Object(Ve.jsx)(Ha,Object(Je.a)(Object(Je.a)({},e),{},{atEnter:{opacity:1,offset:100,zIndex:100},atLeave:{opacity:0,offset:0},atActive:{opacity:1,offset:(n=0,Object(za.b)(n,{stiffness:174,damping:24}))},mapStyles:function(e){return{opacity:e.opacity,zIndex:e.zIndex,transform:"translateX(".concat(e.offset,"%)")}}}));var n},Ha=Object(qe.b)(za.a)(Ee||(Ee=Object(Ze.a)(["\n  position: relative;\n  width: 100%;\n  height: 100%;\n\n  & > div {\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    background-color: #12b188;\n    box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.8);\n  }\n"]))),Ra=t(241),La=t(232),Ua=t(242),Za=t(230),Ta=t(231),qa=function(){var e=bn(),n=e.cameraId,t=e.setCameraId,a=e.cameraList;return Object(Ve.jsxs)(Wa,{children:[Object(Ve.jsx)(qt,{backPath:"/",name:"\u76f8\u6a5f\u8a2d\u5b9a"}),Object(Ve.jsx)(Fa,{children:Object(Ve.jsxs)(Pa,{children:[Object(Ve.jsx)(Ra.a,{id:"cameraId",children:"\u76f8\u6a5f\u9078\u64c7"}),Object(Ve.jsxs)(La.a,{labelId:"cameraId",id:"demo-simple-select",value:n,onChange:function(e){t(e.target.value||"AUTO")},children:[Object(Ve.jsx)(Ua.a,{value:"AUTO",children:"\u81ea\u52d5"}),a.map((function(e){var n=e.deviceId,t=e.label;return Object(Ve.jsx)(Ua.a,{value:n,children:Object(Ta.a)(t)||Object(Pe.a)(t)?n:t},"deviceId")}))]})]})}),Object(Ve.jsx)(Na,{children:Object(Ve.jsx)(Rt,{})})]})},Wa=qe.b.div(Se||(Se=Object(Ze.a)(["\n  width: 100%;\n  height: 100%;\n  text-shadow: 0px 1px 2px rgba(0, 0, 0, 0.8);\n  display: flex;\n  flex-direction: column;\n  background-color: #fff;\n"]))),Na=qe.b.div(De||(De=Object(Ze.a)(["\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n  position: relative;\n"]))),Fa=qe.b.div(Me||(Me=Object(Ze.a)(["\n  width: 100%;\n  display: flex;\n"]))),Pa=Object(qe.b)(Za.a)(ze||(ze=Object(Ze.a)(["\n  width: 100%;\n\n  &.MuiFormControl-root {\n    margin: 8px;\n  }\n"])));var Ya=function(){var e=bn().hasCameraSupport,n=Object(He.useState)(!(window.matchMedia("(display-mode: standalone)").matches||/\bmode=standalone\b/.test(window.location.hash)||"localhost"===window.location.hostname)),t=Object(Te.a)(n,2),a=t[0],c=t[1];return Object(He.useEffect)((function(){console.log(ea.a.browserDetails.browser,ea.a.browserDetails.version)}),[]),Object(He.useEffect)((function(){var e=document.querySelector("#root");e&&Object(In.a)(e)}),[]),Object(Ve.jsxs)(Ve.Fragment,{children:[Object(Ve.jsx)(Ba,{}),a?Object(Ve.jsx)(Gt,{onDismiss:function(){c(!1)}}):Object(Ve.jsx)(We.a,{basename:"/",children:Object(Ve.jsxs)(Aa,{children:[Object(Ve.jsx)(Ne.b,{exact:!0,path:"/",children:Object(Ve.jsx)(jn,{})}),Object(Ve.jsx)(Ne.b,{exact:!0,path:"/qrGenerator",children:Object(Ve.jsx)(wa,{})}),Object(Ve.jsx)(Ne.b,{exact:!0,path:"/confirm",children:Object(Ve.jsx)(dt,{})}),e&&Object(Ve.jsx)(Ne.b,{exact:!0,path:"/qrReader",children:Object(Ve.jsx)(Ft,{})}),e&&Object(Ve.jsx)(Ne.b,{exact:!0,path:"/cameraSetting",children:Object(Ve.jsx)(qa,{})}),Object(Ve.jsx)(Ne.a,{to:"/"})]})})]})},Ba=Object(qe.a)(Ae||(Ae=Object(Ze.a)(["\nhtml {\n  width: 100%;\n  height: 100%;\n}\n\nbody {\n  margin: 0;\n  font-family: Rubik, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',\n    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',\n    sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  background-color:#12b188;\n  width: 100%;\n  height: 100%;\n}\n\ntextarea {\n  font-family: inherit;\n}\n\n\n#root {\n  width: 100%;\n  height: 100%;\n}\n\na {\n  text-decoration: none;\n}\n"]))),Ka=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function Ja(e,n){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),n&&n.onUpdate&&n.onUpdate(e)):(console.log("Content is cached for offline use."),n&&n.onSuccess&&n.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}Ue.a.render(Object(Ve.jsx)(Re.a.StrictMode,{children:Object(Ve.jsx)(ln,{children:Object(Ve.jsx)(Ya,{})})}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL(".",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var n="".concat(".","/service-worker.js");Ka?(!function(e,n){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(t){var a=t.headers.get("content-type");404===t.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):Ja(e,n)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(n,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):Ja(n,e)}))}}()}},[[185,1,2]]]);
//# sourceMappingURL=main.1ec7ad74.chunk.js.map