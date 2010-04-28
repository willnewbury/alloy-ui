AUI.add("aui-io-request",function(O){var G=O.Lang,d=G.isBoolean,Q=G.isFunction,H=G.isString,f=AUI.defaults.io,h=function(A){return function(){return f[A];};},W="active",C="arguments",X="autoLoad",T="cache",g="cfg",S="complete",m="content-type",Y="context",N="data",F="dataType",J="",l="end",b="failure",B="form",U="get",K="headers",k="IORequest",E="json",Z="method",V="responseData",a="start",M="success",c="sync",R="timeout",P="transaction",e="uri",j="xdr",n="xml",i="Parser error: IO dataType is not correctly parsing",D={all:"*/*",html:"text/html",json:"application/json, text/javascript",text:"text/plain",xml:"application/xml, text/xml"};function I(){I.superclass.constructor.apply(this,arguments);}O.mix(I,{NAME:k,ATTRS:{autoLoad:{value:true,validator:d},cache:{value:true,validator:d},dataType:{setter:function(A){return(A||J).toLowerCase();},value:null,validator:H},responseData:{setter:function(A){return this._setResponseData(A);},value:null},uri:{setter:function(A){return this._parseURL(A);},value:null,validator:H},active:{value:false,validator:d},cfg:{getter:function(){var A=this;return{arguments:A.get(C),context:A.get(Y),data:A.get(N),form:A.get(B),headers:A.get(K),method:A.get(Z),on:{complete:O.bind(A.fire,A,S),end:O.bind(A._end,A),failure:O.bind(A.fire,A,b),start:O.bind(A.fire,A,a),success:O.bind(A._success,A)},sync:A.get(c),timeout:A.get(R),xdr:A.get(j)};},readOnly:true},transaction:{value:null},arguments:{valueFn:h(C)},context:{valueFn:h(Y)},data:{valueFn:h(N),setter:"_setIOData"},form:{valueFn:h(B)},headers:{getter:function(o){var p=[];var A=this;var L=A.get(F);if(L){p.push(D[L]);}p.push(D.all);return O.merge(o,{Accept:p.join(", ")});},valueFn:h(K)},method:{valueFn:h(Z)},sync:{valueFn:h(c)},timeout:{valueFn:h(R)},xdr:{valueFn:h(j)}}});O.extend(I,O.Plugin.Base,{init:function(L){var A=this;I.superclass.init.apply(this,arguments);A._autoStart();},destructor:function(){var A=this;A.stop();A.set(P,null);},start:function(){var A=this;A.destructor();A.set(W,true);var L=O.io(A.get(e),A.get(g));A.set(P,L);},stop:function(){var A=this;var L=A.get(P);if(L){L.abort();}},_autoStart:function(){var A=this;if(A.get(X)){A.start();}},_parseURL:function(p){var A=this;var L=A.get(T);var s=A.get(Z);if((L===false)&&(s==U)){var r=+new Date;var o=p.replace(/(\?|&)_=.*?(&|$)/,"$1_="+r+"$2");p=o+((o==p)?(p.match(/\?/)?"&":"?")+"_="+r:"");}var q=f.uriFormatter;if(Q(q)){p=q.apply(A,[p]);}return p;},_end:function(L){var A=this;A.set(W,false);A.set(P,null);A.fire(l,L);},_success:function(o,L){var A=this;A.set(V,L);A.fire(M,o,L);},_setIOData:function(o){var A=this;var L=f.dataFormatter;if(Q(L)){o=L.call(A,o);}return o;},_setResponseData:function(q){var o=null;var A=this;if(q){var L=A.get(F);var r=q.getResponseHeader(m);if((L==n)||(!L&&r.indexOf(n)>=0)){o=q.responseXML;if(o.documentElement.tagName=="parsererror"){throw i;}}else{o=q.responseText;}if(o===J){o=null;}if(L==E){try{o=O.JSON.parse(o);}catch(p){}}}return o;}});O.IORequest=I;O.io.request=function(L,A){return new O.IORequest(O.merge(A,{uri:L}));};},"@VERSION@",{requires:["aui-base","io","json","plugin","querystring-stringify"]});