if(typeof (dojo)!="undefined"){
dojo.provide("MochiKit.Base");
}
if(typeof (MochiKit)=="undefined"){
MochiKit={};
}
if(typeof (MochiKit.Base)=="undefined"){
MochiKit.Base={};
}
if(typeof (MochiKit.__export__)=="undefined"){
MochiKit.__export__=(MochiKit.__compat__||(typeof (JSAN)=="undefined"&&typeof (dojo)=="undefined"));
}
MochiKit.Base.VERSION="1.4";
MochiKit.Base.NAME="MochiKit.Base";
MochiKit.Base.update=function(_1,_2){
if(_1===null||_1===undefined){
_1={};
}
for(var i=1;i<arguments.length;i++){
var o=arguments[i];
if(typeof (o)!="undefined"&&o!==null){
for(var k in o){
_1[k]=o[k];
}
}
}
return _1;
};
MochiKit.Base.update(MochiKit.Base,{__repr__:function(){
return "["+this.NAME+" "+this.VERSION+"]";
},toString:function(){
return this.__repr__();
},camelize:function(_6){
var _7=_6.split("-");
var cc=_7[0];
for(var i=1;i<_7.length;i++){
cc+=_7[i].charAt(0).toUpperCase()+_7[i].substring(1);
}
return cc;
},counter:function(n){
if(arguments.length===0){
n=1;
}
return function(){
return n++;
};
},clone:function(_b){
var me=arguments.callee;
if(arguments.length==1){
me.prototype=_b;
return new me();
}
},_deps:function(_d,_e){
if(!(_d in MochiKit)){
MochiKit[_d]={};
}
if(typeof (dojo)!="undefined"){
dojo.provide("MochiKit."+_d);
}
for(var i=0;i<_e.length;i++){
if(typeof (dojo)!="undefined"){
dojo.require("MochiKit."+_e[i]);
}
if(typeof (JSAN)!="undefined"){
JSAN.use("MochiKit."+_e[i],[]);
}
if(!(_e[i] in MochiKit)){
throw "MochiKit."+_d+" depends on MochiKit."+_e[i]+"!";
}
}
},_flattenArray:function(res,lst){
for(var i=0;i<lst.length;i++){
var o=lst[i];
if(o instanceof Array){
arguments.callee(res,o);
}else{
res.push(o);
}
}
return res;
},flattenArray:function(lst){
return MochiKit.Base._flattenArray([],lst);
},flattenArguments:function(lst){
var res=[];
var m=MochiKit.Base;
var _18=m.extend(null,arguments);
while(_18.length){
var o=_18.shift();
if(o&&typeof (o)=="object"&&typeof (o.length)=="number"){
for(var i=o.length-1;i>=0;i--){
_18.unshift(o[i]);
}
}else{
res.push(o);
}
}
return res;
},extend:function(_1b,obj,_1d){
if(!_1d){
_1d=0;
}
if(obj){
var l=obj.length;
if(typeof (l)!="number"){
if(typeof (MochiKit.Iter)!="undefined"){
obj=MochiKit.Iter.list(obj);
l=obj.length;
}else{
throw new TypeError("Argument not an array-like and MochiKit.Iter not present");
}
}
if(!_1b){
_1b=[];
}
for(var i=_1d;i<l;i++){
_1b.push(obj[i]);
}
}
return _1b;
},updatetree:function(_20,obj){
if(_20===null||_20===undefined){
_20={};
}
for(var i=1;i<arguments.length;i++){
var o=arguments[i];
if(typeof (o)!="undefined"&&o!==null){
for(var k in o){
var v=o[k];
if(typeof (_20[k])=="object"&&typeof (v)=="object"){
arguments.callee(_20[k],v);
}else{
_20[k]=v;
}
}
}
}
return _20;
},setdefault:function(_26,obj){
if(_26===null||_26===undefined){
_26={};
}
for(var i=1;i<arguments.length;i++){
var o=arguments[i];
for(var k in o){
if(!(k in _26)){
_26[k]=o[k];
}
}
}
return _26;
},keys:function(obj){
var _2c=[];
for(var _2d in obj){
_2c.push(_2d);
}
return _2c;
},values:function(obj){
var _2f=[];
for(var _30 in obj){
_2f.push(obj[_30]);
}
return _2f;
},items:function(obj){
var _32=[];
var e;
for(var _34 in obj){
var v;
try{
v=obj[_34];
}
catch(e){
continue;
}
_32.push([_34,v]);
}
return _32;
},_newNamedError:function(_36,_37,_38){
_38.prototype=new MochiKit.Base.NamedError(_36.NAME+"."+_37);
_36[_37]=_38;
},operator:{truth:function(a){
return !!a;
},lognot:function(a){
return !a;
},identity:function(a){
return a;
},not:function(a){
return ~a;
},neg:function(a){
return -a;
},add:function(a,b){
return a+b;
},sub:function(a,b){
return a-b;
},div:function(a,b){
return a/b;
},mod:function(a,b){
return a%b;
},mul:function(a,b){
return a*b;
},and:function(a,b){
return a&b;
},or:function(a,b){
return a|b;
},xor:function(a,b){
return a^b;
},lshift:function(a,b){
return a<<b;
},rshift:function(a,b){
return a>>b;
},zrshift:function(a,b){
return a>>>b;
},eq:function(a,b){
return a==b;
},ne:function(a,b){
return a!=b;
},gt:function(a,b){
return a>b;
},ge:function(a,b){
return a>=b;
},lt:function(a,b){
return a<b;
},le:function(a,b){
return a<=b;
},seq:function(a,b){
return a===b;
},sne:function(a,b){
return a!==b;
},ceq:function(a,b){
return MochiKit.Base.compare(a,b)===0;
},cne:function(a,b){
return MochiKit.Base.compare(a,b)!==0;
},cgt:function(a,b){
return MochiKit.Base.compare(a,b)==1;
},cge:function(a,b){
return MochiKit.Base.compare(a,b)!=-1;
},clt:function(a,b){
return MochiKit.Base.compare(a,b)==-1;
},cle:function(a,b){
return MochiKit.Base.compare(a,b)!=1;
},logand:function(a,b){
return a&&b;
},logor:function(a,b){
return a||b;
},contains:function(a,b){
return b in a;
}},forwardCall:function(_76){
return function(){
return this[_76].apply(this,arguments);
};
},itemgetter:function(_77){
return function(arg){
return arg[_77];
};
},typeMatcher:function(){
var _79={};
for(var i=0;i<arguments.length;i++){
var typ=arguments[i];
_79[typ]=typ;
}
return function(){
for(var i=0;i<arguments.length;i++){
if(!(typeof (arguments[i]) in _79)){
return false;
}
}
return true;
};
},isNull:function(){
for(var i=0;i<arguments.length;i++){
if(arguments[i]!==null){
return false;
}
}
return true;
},isUndefinedOrNull:function(){
for(var i=0;i<arguments.length;i++){
var o=arguments[i];
if(!(typeof (o)=="undefined"||o===null)){
return false;
}
}
return true;
},isEmpty:function(obj){
return !MochiKit.Base.isNotEmpty.apply(this,arguments);
},isNotEmpty:function(obj){
for(var i=0;i<arguments.length;i++){
var o=arguments[i];
if(!(o&&o.length)){
return false;
}
}
return true;
},isArrayLike:function(){
for(var i=0;i<arguments.length;i++){
var o=arguments[i];
var typ=typeof (o);
if((typ!="object"&&!(typ=="function"&&typeof (o.item)=="function"))||o===null||typeof (o.length)!="number"||o.nodeType===3||o.nodeType===4){
return false;
}
}
return true;
},isDateLike:function(){
for(var i=0;i<arguments.length;i++){
var o=arguments[i];
if(typeof (o)!="object"||o===null||typeof (o.getTime)!="function"){
return false;
}
}
return true;
},xmap:function(fn){
if(fn===null){
return MochiKit.Base.extend(null,arguments,1);
}
var _8a=[];
for(var i=1;i<arguments.length;i++){
_8a.push(fn(arguments[i]));
}
return _8a;
},map:function(fn,lst){
var m=MochiKit.Base;
var itr=MochiKit.Iter;
var _90=m.isArrayLike;
if(arguments.length<=2){
if(!_90(lst)){
if(itr){
lst=itr.list(lst);
if(fn===null){
return lst;
}
}else{
throw new TypeError("Argument not an array-like and MochiKit.Iter not present");
}
}
if(fn===null){
return m.extend(null,lst);
}
var _91=[];
for(var i=0;i<lst.length;i++){
_91.push(fn(lst[i]));
}
return _91;
}else{
if(fn===null){
fn=Array;
}
var _93=null;
for(i=1;i<arguments.length;i++){
if(!_90(arguments[i])){
if(itr){
return itr.list(itr.imap.apply(null,arguments));
}else{
throw new TypeError("Argument not an array-like and MochiKit.Iter not present");
}
}
var l=arguments[i].length;
if(_93===null||_93>l){
_93=l;
}
}
_91=[];
for(i=0;i<_93;i++){
var _95=[];
for(var j=1;j<arguments.length;j++){
_95.push(arguments[j][i]);
}
_91.push(fn.apply(this,_95));
}
return _91;
}
},xfilter:function(fn){
var _98=[];
if(fn===null){
fn=MochiKit.Base.operator.truth;
}
for(var i=1;i<arguments.length;i++){
var o=arguments[i];
if(fn(o)){
_98.push(o);
}
}
return _98;
},filter:function(fn,lst,_9d){
var _9e=[];
var m=MochiKit.Base;
if(!m.isArrayLike(lst)){
if(MochiKit.Iter){
lst=MochiKit.Iter.list(lst);
}else{
throw new TypeError("Argument not an array-like and MochiKit.Iter not present");
}
}
if(fn===null){
fn=m.operator.truth;
}
if(typeof (Array.prototype.filter)=="function"){
return Array.prototype.filter.call(lst,fn,_9d);
}else{
if(typeof (_9d)=="undefined"||_9d===null){
for(var i=0;i<lst.length;i++){
var o=lst[i];
if(fn(o)){
_9e.push(o);
}
}
}else{
for(i=0;i<lst.length;i++){
o=lst[i];
if(fn.call(_9d,o)){
_9e.push(o);
}
}
}
}
return _9e;
},_wrapDumbFunction:function(_a2){
return function(){
switch(arguments.length){
case 0:
return _a2();
case 1:
return _a2(arguments[0]);
case 2:
return _a2(arguments[0],arguments[1]);
case 3:
return _a2(arguments[0],arguments[1],arguments[2]);
}
var _a3=[];
for(var i=0;i<arguments.length;i++){
_a3.push("arguments["+i+"]");
}
return eval("(func("+_a3.join(",")+"))");
};
},methodcaller:function(_a5){
var _a6=MochiKit.Base.extend(null,arguments,1);
if(typeof (_a5)=="function"){
return function(obj){
return _a5.apply(obj,_a6);
};
}else{
return function(obj){
return obj[_a5].apply(obj,_a6);
};
}
},method:function(_a9,_aa){
var m=MochiKit.Base;
return m.bind.apply(this,m.extend([_aa,_a9],arguments,2));
},compose:function(f1,f2){
var _ae=[];
var m=MochiKit.Base;
if(arguments.length===0){
throw new TypeError("compose() requires at least one argument");
}
for(var i=0;i<arguments.length;i++){
var fn=arguments[i];
if(typeof (fn)!="function"){
throw new TypeError(m.repr(fn)+" is not a function");
}
_ae.push(fn);
}
return function(){
var _b2=arguments;
for(var i=_ae.length-1;i>=0;i--){
_b2=[_ae[i].apply(this,_b2)];
}
return _b2[0];
};
},bind:function(_b4,_b5){
if(typeof (_b4)=="string"){
_b4=_b5[_b4];
}
var _b6=_b4.im_func;
var _b7=_b4.im_preargs;
var _b8=_b4.im_self;
var m=MochiKit.Base;
if(typeof (_b4)=="function"&&typeof (_b4.apply)=="undefined"){
_b4=m._wrapDumbFunction(_b4);
}
if(typeof (_b6)!="function"){
_b6=_b4;
}
if(typeof (_b5)!="undefined"){
_b8=_b5;
}
if(typeof (_b7)=="undefined"){
_b7=[];
}else{
_b7=_b7.slice();
}
m.extend(_b7,arguments,2);
var _ba=function(){
var _bb=arguments;
var me=arguments.callee;
if(me.im_preargs.length>0){
_bb=m.concat(me.im_preargs,_bb);
}
var _bd=me.im_self;
if(!_bd){
_bd=this;
}
return me.im_func.apply(_bd,_bb);
};
_ba.im_self=_b8;
_ba.im_func=_b6;
_ba.im_preargs=_b7;
return _ba;
},bindLate:function(_be,_bf){
var m=MochiKit.Base;
if(typeof (_be)!="string"){
return m.bind.apply(this,arguments);
}
var _c1=m.extend([],arguments,2);
var _c2=function(){
var _c3=arguments;
var me=arguments.callee;
if(me.im_preargs.length>0){
_c3=m.concat(me.im_preargs,_c3);
}
var _c5=me.im_self;
if(!_c5){
_c5=this;
}
return _c5[me.im_func].apply(_c5,_c3);
};
_c2.im_self=_bf;
_c2.im_func=_be;
_c2.im_preargs=_c1;
return _c2;
},bindMethods:function(_c6){
var _c7=MochiKit.Base.bind;
for(var k in _c6){
var _c9=_c6[k];
if(typeof (_c9)=="function"){
_c6[k]=_c7(_c9,_c6);
}
}
},registerComparator:function(_ca,_cb,_cc,_cd){
MochiKit.Base.comparatorRegistry.register(_ca,_cb,_cc,_cd);
},_primitives:{"boolean":true,"string":true,"number":true},compare:function(a,b){
if(a==b){
return 0;
}
var _d0=(typeof (a)=="undefined"||a===null);
var _d1=(typeof (b)=="undefined"||b===null);
if(_d0&&_d1){
return 0;
}else{
if(_d0){
return -1;
}else{
if(_d1){
return 1;
}
}
}
var m=MochiKit.Base;
var _d3=m._primitives;
if(!(typeof (a) in _d3&&typeof (b) in _d3)){
try{
return m.comparatorRegistry.match(a,b);
}
catch(e){
if(e!=m.NotFound){
throw e;
}
}
}
if(a<b){
return -1;
}else{
if(a>b){
return 1;
}
}
var _d4=m.repr;
throw new TypeError(_d4(a)+" and "+_d4(b)+" can not be compared");
},compareDateLike:function(a,b){
return MochiKit.Base.compare(a.getTime(),b.getTime());
},compareArrayLike:function(a,b){
var _d9=MochiKit.Base.compare;
var _da=a.length;
var _db=0;
if(_da>b.length){
_db=1;
_da=b.length;
}else{
if(_da<b.length){
_db=-1;
}
}
for(var i=0;i<_da;i++){
var cmp=_d9(a[i],b[i]);
if(cmp){
return cmp;
}
}
return _db;
},registerRepr:function(_de,_df,_e0,_e1){
MochiKit.Base.reprRegistry.register(_de,_df,_e0,_e1);
},repr:function(o){
if(typeof (o)=="undefined"){
return "undefined";
}else{
if(o===null){
return "null";
}
}
try{
if(typeof (o.__repr__)=="function"){
return o.__repr__();
}else{
if(typeof (o.repr)=="function"&&o.repr!=arguments.callee){
return o.repr();
}
}
return MochiKit.Base.reprRegistry.match(o);
}
catch(e){
if(typeof (o.NAME)=="string"&&(o.toString==Function.prototype.toString||o.toString==Object.prototype.toString)){
return o.NAME;
}
}
try{
var _e3=(o+"");
}
catch(e){
return "["+typeof (o)+"]";
}
if(typeof (o)=="function"){
_e3=_e3.replace(/^\s+/,"").replace(/\s+/g," ");
_e3=_e3.replace(/,(\S)/,", $1");
var idx=_e3.indexOf("{");
if(idx!=-1){
_e3=_e3.substr(0,idx)+"{...}";
}
}
return _e3;
},reprArrayLike:function(o){
var m=MochiKit.Base;
return "["+m.map(m.repr,o).join(", ")+"]";
},reprString:function(o){
return ("\""+o.replace(/(["\\])/g,"\\$1")+"\"").replace(/[\f]/g,"\\f").replace(/[\b]/g,"\\b").replace(/[\n]/g,"\\n").replace(/[\t]/g,"\\t").replace(/[\v]/g,"\\v").replace(/[\r]/g,"\\r");
},reprNumber:function(o){
return o+"";
},registerJSON:function(_e9,_ea,_eb,_ec){
MochiKit.Base.jsonRegistry.register(_e9,_ea,_eb,_ec);
},evalJSON:function(){
return eval("("+MochiKit.Base._filterJSON(arguments[0])+")");
},_filterJSON:function(s){
var m=s.match(/^\s*\/\*(.*)\*\/\s*$/);
if(m){
return m[1];
}
return s;
},serializeJSON:function(o){
var _f0=typeof (o);
if(_f0=="number"||_f0=="boolean"){
return o+"";
}else{
if(o===null){
return "null";
}else{
if(_f0=="string"){
var res="";
for(var i=0;i<o.length;i++){
var c=o.charAt(i);
if(c=="\""){
res+="\\\"";
}else{
if(c=="\\"){
res+="\\\\";
}else{
if(c=="\b"){
res+="\\b";
}else{
if(c=="\f"){
res+="\\f";
}else{
if(c=="\n"){
res+="\\n";
}else{
if(c=="\r"){
res+="\\r";
}else{
if(c=="\t"){
res+="\\t";
}else{
if(o.charCodeAt(i)<=31){
var hex=o.charCodeAt(i).toString(16);
if(hex.length<2){
hex="0"+hex;
}
res+="\\u00"+hex.toUpperCase();
}else{
res+=c;
}
}
}
}
}
}
}
}
}
return "\""+res+"\"";
}
}
}
var me=arguments.callee;
var _f6;
if(typeof (o.__json__)=="function"){
_f6=o.__json__();
if(o!==_f6){
return me(_f6);
}
}
if(typeof (o.json)=="function"){
_f6=o.json();
if(o!==_f6){
return me(_f6);
}
}
if(_f0!="function"&&typeof (o.length)=="number"){
var res=[];
for(var i=0;i<o.length;i++){
var val=me(o[i]);
if(typeof (val)!="string"){
continue;
}
res.push(val);
}
return "["+res.join(", ")+"]";
}
var m=MochiKit.Base;
try{
_f6=m.jsonRegistry.match(o);
if(o!==_f6){
return me(_f6);
}
}
catch(e){
if(e!=m.NotFound){
throw e;
}
}
if(_f0=="undefined"){
throw new TypeError("undefined can not be serialized as JSON");
}
if(_f0=="function"){
return null;
}
res=[];
for(var k in o){
var _fa;
if(typeof (k)=="number"){
_fa="\""+k+"\"";
}else{
if(typeof (k)=="string"){
_fa=me(k);
}else{
continue;
}
}
val=me(o[k]);
if(typeof (val)!="string"){
continue;
}
res.push(_fa+":"+val);
}
return "{"+res.join(", ")+"}";
},objEqual:function(a,b){
return (MochiKit.Base.compare(a,b)===0);
},arrayEqual:function(_fd,arr){
if(_fd.length!=arr.length){
return false;
}
return (MochiKit.Base.compare(_fd,arr)===0);
},concat:function(){
var _ff=[];
var _100=MochiKit.Base.extend;
for(var i=0;i<arguments.length;i++){
_100(_ff,arguments[i]);
}
return _ff;
},keyComparator:function(key){
var m=MochiKit.Base;
var _104=m.compare;
if(arguments.length==1){
return function(a,b){
return _104(a[key],b[key]);
};
}
var _107=m.extend(null,arguments);
return function(a,b){
var rval=0;
for(var i=0;(rval===0)&&(i<_107.length);i++){
var key=_107[i];
rval=_104(a[key],b[key]);
}
return rval;
};
},reverseKeyComparator:function(key){
var _10e=MochiKit.Base.keyComparator.apply(this,arguments);
return function(a,b){
return _10e(b,a);
};
},partial:function(func){
var m=MochiKit.Base;
return m.bind.apply(this,m.extend([func,undefined],arguments,1));
},listMinMax:function(_113,lst){
if(lst.length===0){
return null;
}
var cur=lst[0];
var _116=MochiKit.Base.compare;
for(var i=1;i<lst.length;i++){
var o=lst[i];
if(_116(o,cur)==_113){
cur=o;
}
}
return cur;
},objMax:function(){
return MochiKit.Base.listMinMax(1,arguments);
},objMin:function(){
return MochiKit.Base.listMinMax(-1,arguments);
},findIdentical:function(lst,_11a,_11b,end){
if(typeof (end)=="undefined"||end===null){
end=lst.length;
}
if(typeof (_11b)=="undefined"||_11b===null){
_11b=0;
}
for(var i=_11b;i<end;i++){
if(lst[i]===_11a){
return i;
}
}
return -1;
},mean:function(){
var sum=0;
var m=MochiKit.Base;
var args=m.extend(null,arguments);
var _121=args.length;
while(args.length){
var o=args.shift();
if(o&&typeof (o)=="object"&&typeof (o.length)=="number"){
_121+=o.length-1;
for(var i=o.length-1;i>=0;i--){
sum+=o[i];
}
}else{
sum+=o;
}
}
if(_121<=0){
throw new TypeError("mean() requires at least one argument");
}
return sum/_121;
},median:function(){
var data=MochiKit.Base.flattenArguments(arguments);
if(data.length===0){
throw new TypeError("median() requires at least one argument");
}
data.sort(compare);
if(data.length%2==0){
var _125=data.length/2;
return (data[_125]+data[_125-1])/2;
}else{
return data[(data.length-1)/2];
}
},findValue:function(lst,_127,_128,end){
if(typeof (end)=="undefined"||end===null){
end=lst.length;
}
if(typeof (_128)=="undefined"||_128===null){
_128=0;
}
var cmp=MochiKit.Base.compare;
for(var i=_128;i<end;i++){
if(cmp(lst[i],_127)===0){
return i;
}
}
return -1;
},nodeWalk:function(node,_12d){
var _12e=[node];
var _12f=MochiKit.Base.extend;
while(_12e.length){
var res=_12d(_12e.shift());
if(res){
_12f(_12e,res);
}
}
},nameFunctions:function(_131){
var base=_131.NAME;
if(typeof (base)=="undefined"){
base="";
}else{
base=base+".";
}
for(var name in _131){
var o=_131[name];
if(typeof (o)=="function"&&typeof (o.NAME)=="undefined"){
try{
o.NAME=base+name;
}
catch(e){
}
}
}
},queryString:function(_135,_136){
if(typeof (MochiKit.DOM)!="undefined"&&arguments.length==1&&(typeof (_135)=="string"||(typeof (_135.nodeType)!="undefined"&&_135.nodeType>0))){
var kv=MochiKit.DOM.formContents(_135);
_135=kv[0];
_136=kv[1];
}else{
if(arguments.length==1){
if(typeof (_135.length)=="number"&&_135.length==2){
return arguments.callee(_135[0],_135[1]);
}
var o=_135;
_135=[];
_136=[];
for(var k in o){
var v=o[k];
if(typeof (v)=="function"){
continue;
}else{
if(MochiKit.Base.isArrayLike(v)){
for(var i=0;i<v.length;i++){
_135.push(k);
_136.push(v[i]);
}
}else{
_135.push(k);
_136.push(v);
}
}
}
}
}
var rval=[];
var len=Math.min(_135.length,_136.length);
var _13e=MochiKit.Base.urlEncode;
for(var i=0;i<len;i++){
v=_136[i];
if(typeof (v)!="undefined"&&v!==null){
rval.push(_13e(_135[i])+"="+_13e(v));
}
}
return rval.join("&");
},parseQueryString:function(_13f,_140){
var qstr=(_13f.charAt(0)=="?")?_13f.substring(1):_13f;
var _142=qstr.replace(/\+/g,"%20").split(/\&amp\;|\&\#38\;|\&#x26;|\&/);
var o={};
var _144;
if(typeof (decodeURIComponent)!="undefined"){
_144=decodeURIComponent;
}else{
_144=unescape;
}
if(_140){
for(var i=0;i<_142.length;i++){
var pair=_142[i].split("=");
var name=_144(pair.shift());
if(!name){
continue;
}
var arr=o[name];
if(!(arr instanceof Array)){
arr=[];
o[name]=arr;
}
arr.push(_144(pair.join("=")));
}
}else{
for(i=0;i<_142.length;i++){
pair=_142[i].split("=");
var name=pair.shift();
if(!name){
continue;
}
o[_144(name)]=_144(pair.join("="));
}
}
return o;
}});
MochiKit.Base.AdapterRegistry=function(){
this.pairs=[];
};
MochiKit.Base.AdapterRegistry.prototype={register:function(name,_14a,wrap,_14c){
if(_14c){
this.pairs.unshift([name,_14a,wrap]);
}else{
this.pairs.push([name,_14a,wrap]);
}
},match:function(){
for(var i=0;i<this.pairs.length;i++){
var pair=this.pairs[i];
if(pair[1].apply(this,arguments)){
return pair[2].apply(this,arguments);
}
}
throw MochiKit.Base.NotFound;
},unregister:function(name){
for(var i=0;i<this.pairs.length;i++){
var pair=this.pairs[i];
if(pair[0]==name){
this.pairs.splice(i,1);
return true;
}
}
return false;
}};
MochiKit.Base.EXPORT=["flattenArray","noop","camelize","counter","clone","extend","update","updatetree","setdefault","keys","values","items","NamedError","operator","forwardCall","itemgetter","typeMatcher","isCallable","isUndefined","isUndefinedOrNull","isNull","isEmpty","isNotEmpty","isArrayLike","isDateLike","xmap","map","xfilter","filter","methodcaller","compose","bind","bindLate","bindMethods","NotFound","AdapterRegistry","registerComparator","compare","registerRepr","repr","objEqual","arrayEqual","concat","keyComparator","reverseKeyComparator","partial","merge","listMinMax","listMax","listMin","objMax","objMin","nodeWalk","zip","urlEncode","queryString","serializeJSON","registerJSON","evalJSON","parseQueryString","findValue","findIdentical","flattenArguments","method","average","mean","median"];
MochiKit.Base.EXPORT_OK=["nameFunctions","comparatorRegistry","reprRegistry","jsonRegistry","compareDateLike","compareArrayLike","reprArrayLike","reprString","reprNumber"];
MochiKit.Base._exportSymbols=function(_152,_153){
if(!MochiKit.__export__){
return;
}
var all=_153.EXPORT_TAGS[":all"];
for(var i=0;i<all.length;i++){
_152[all[i]]=_153[all[i]];
}
};
MochiKit.Base.__new__=function(){
var m=this;
m.noop=m.operator.identity;
m.forward=m.forwardCall;
m.find=m.findValue;
if(typeof (encodeURIComponent)!="undefined"){
m.urlEncode=function(_157){
return encodeURIComponent(_157).replace(/\'/g,"%27");
};
}else{
m.urlEncode=function(_158){
return escape(_158).replace(/\+/g,"%2B").replace(/\"/g,"%22").rval.replace(/\'/g,"%27");
};
}
m.NamedError=function(name){
this.message=name;
this.name=name;
};
m.NamedError.prototype=new Error();
m.update(m.NamedError.prototype,{repr:function(){
if(this.message&&this.message!=this.name){
return this.name+"("+m.repr(this.message)+")";
}else{
return this.name+"()";
}
},toString:m.forwardCall("repr")});
m.NotFound=new m.NamedError("MochiKit.Base.NotFound");
m.listMax=m.partial(m.listMinMax,1);
m.listMin=m.partial(m.listMinMax,-1);
m.isCallable=m.typeMatcher("function");
m.isUndefined=m.typeMatcher("undefined");
m.merge=m.partial(m.update,null);
m.zip=m.partial(m.map,null);
m.average=m.mean;
m.comparatorRegistry=new m.AdapterRegistry();
m.registerComparator("dateLike",m.isDateLike,m.compareDateLike);
m.registerComparator("arrayLike",m.isArrayLike,m.compareArrayLike);
m.reprRegistry=new m.AdapterRegistry();
m.registerRepr("arrayLike",m.isArrayLike,m.reprArrayLike);
m.registerRepr("string",m.typeMatcher("string"),m.reprString);
m.registerRepr("numbers",m.typeMatcher("number","boolean"),m.reprNumber);
m.jsonRegistry=new m.AdapterRegistry();
var all=m.concat(m.EXPORT,m.EXPORT_OK);
m.EXPORT_TAGS={":common":m.concat(m.EXPORT_OK),":all":all};
m.nameFunctions(this);
};
MochiKit.Base.__new__();
if(MochiKit.__export__){
compare=MochiKit.Base.compare;
compose=MochiKit.Base.compose;
serializeJSON=MochiKit.Base.serializeJSON;
mean=MochiKit.Base.mean;
median=MochiKit.Base.median;
}
MochiKit.Base._exportSymbols(this,MochiKit.Base);
MochiKit.Base._deps("Iter",["Base"]);
MochiKit.Iter.NAME="MochiKit.Iter";
MochiKit.Iter.VERSION="1.4";
MochiKit.Base.update(MochiKit.Iter,{__repr__:function(){
return "["+this.NAME+" "+this.VERSION+"]";
},toString:function(){
return this.__repr__();
},registerIteratorFactory:function(name,_15c,_15d,_15e){
MochiKit.Iter.iteratorRegistry.register(name,_15c,_15d,_15e);
},isIterable:function(o){
return o!=null&&(typeof (o.next)=="function"||typeof (o.iter)=="function");
},iter:function(_160,_161){
var self=MochiKit.Iter;
if(arguments.length==2){
return self.takewhile(function(a){
return a!=_161;
},_160);
}
if(typeof (_160.next)=="function"){
return _160;
}else{
if(typeof (_160.iter)=="function"){
return _160.iter();
}
}
try{
return self.iteratorRegistry.match(_160);
}
catch(e){
var m=MochiKit.Base;
if(e==m.NotFound){
e=new TypeError(typeof (_160)+": "+m.repr(_160)+" is not iterable");
}
throw e;
}
},count:function(n){
if(!n){
n=0;
}
var m=MochiKit.Base;
return {repr:function(){
return "count("+n+")";
},toString:m.forwardCall("repr"),next:m.counter(n)};
},cycle:function(p){
var self=MochiKit.Iter;
var m=MochiKit.Base;
var lst=[];
var _16b=self.iter(p);
return {repr:function(){
return "cycle(...)";
},toString:m.forwardCall("repr"),next:function(){
try{
var rval=_16b.next();
lst.push(rval);
return rval;
}
catch(e){
if(e!=self.StopIteration){
throw e;
}
if(lst.length===0){
this.next=function(){
throw self.StopIteration;
};
}else{
var i=-1;
this.next=function(){
i=(i+1)%lst.length;
return lst[i];
};
}
return this.next();
}
}};
},repeat:function(elem,n){
var m=MochiKit.Base;
if(typeof (n)=="undefined"){
return {repr:function(){
return "repeat("+m.repr(elem)+")";
},toString:m.forwardCall("repr"),next:function(){
return elem;
}};
}
return {repr:function(){
return "repeat("+m.repr(elem)+", "+n+")";
},toString:m.forwardCall("repr"),next:function(){
if(n<=0){
throw MochiKit.Iter.StopIteration;
}
n-=1;
return elem;
}};
},next:function(_171){
return _171.next();
},izip:function(p,q){
var m=MochiKit.Base;
var self=MochiKit.Iter;
var next=self.next;
var _177=m.map(self.iter,arguments);
return {repr:function(){
return "izip(...)";
},toString:m.forwardCall("repr"),next:function(){
return m.map(next,_177);
}};
},ifilter:function(pred,seq){
var m=MochiKit.Base;
seq=MochiKit.Iter.iter(seq);
if(pred===null){
pred=m.operator.truth;
}
return {repr:function(){
return "ifilter(...)";
},toString:m.forwardCall("repr"),next:function(){
while(true){
var rval=seq.next();
if(pred(rval)){
return rval;
}
}
return undefined;
}};
},ifilterfalse:function(pred,seq){
var m=MochiKit.Base;
seq=MochiKit.Iter.iter(seq);
if(pred===null){
pred=m.operator.truth;
}
return {repr:function(){
return "ifilterfalse(...)";
},toString:m.forwardCall("repr"),next:function(){
while(true){
var rval=seq.next();
if(!pred(rval)){
return rval;
}
}
return undefined;
}};
},islice:function(seq){
var self=MochiKit.Iter;
var m=MochiKit.Base;
seq=self.iter(seq);
var _183=0;
var stop=0;
var step=1;
var i=-1;
if(arguments.length==2){
stop=arguments[1];
}else{
if(arguments.length==3){
_183=arguments[1];
stop=arguments[2];
}else{
_183=arguments[1];
stop=arguments[2];
step=arguments[3];
}
}
return {repr:function(){
return "islice("+["...",_183,stop,step].join(", ")+")";
},toString:m.forwardCall("repr"),next:function(){
var rval;
while(i<_183){
rval=seq.next();
i++;
}
if(_183>=stop){
throw self.StopIteration;
}
_183+=step;
return rval;
}};
},imap:function(fun,p,q){
var m=MochiKit.Base;
var self=MochiKit.Iter;
var _18d=m.map(self.iter,m.extend(null,arguments,1));
var map=m.map;
var next=self.next;
return {repr:function(){
return "imap(...)";
},toString:m.forwardCall("repr"),next:function(){
return fun.apply(this,map(next,_18d));
}};
},applymap:function(fun,seq,self){
seq=MochiKit.Iter.iter(seq);
var m=MochiKit.Base;
return {repr:function(){
return "applymap(...)";
},toString:m.forwardCall("repr"),next:function(){
return fun.apply(self,seq.next());
}};
},chain:function(p,q){
var self=MochiKit.Iter;
var m=MochiKit.Base;
if(arguments.length==1){
return self.iter(arguments[0]);
}
var _198=m.map(self.iter,arguments);
return {repr:function(){
return "chain(...)";
},toString:m.forwardCall("repr"),next:function(){
while(_198.length>1){
try{
var _199=_198[0].next();
return _199;
}
catch(e){
if(e!=self.StopIteration){
throw e;
}
_198.shift();
var _199=_198[0].next();
return _199;
}
}
if(_198.length==1){
var arg=_198.shift();
this.next=m.bind("next",arg);
return this.next();
}
throw self.StopIteration;
}};
},takewhile:function(pred,seq){
var self=MochiKit.Iter;
seq=self.iter(seq);
return {repr:function(){
return "takewhile(...)";
},toString:MochiKit.Base.forwardCall("repr"),next:function(){
var rval=seq.next();
if(!pred(rval)){
this.next=function(){
throw self.StopIteration;
};
this.next();
}
return rval;
}};
},dropwhile:function(pred,seq){
seq=MochiKit.Iter.iter(seq);
var m=MochiKit.Base;
var bind=m.bind;
return {"repr":function(){
return "dropwhile(...)";
},"toString":m.forwardCall("repr"),"next":function(){
while(true){
var rval=seq.next();
if(!pred(rval)){
break;
}
}
this.next=bind("next",seq);
return rval;
}};
},_tee:function(_1a4,sync,_1a6){
sync.pos[_1a4]=-1;
var m=MochiKit.Base;
var _1a8=m.listMin;
return {repr:function(){
return "tee("+_1a4+", ...)";
},toString:m.forwardCall("repr"),next:function(){
var rval;
var i=sync.pos[_1a4];
if(i==sync.max){
rval=_1a6.next();
sync.deque.push(rval);
sync.max+=1;
sync.pos[_1a4]+=1;
}else{
rval=sync.deque[i-sync.min];
sync.pos[_1a4]+=1;
if(i==sync.min&&_1a8(sync.pos)!=sync.min){
sync.min+=1;
sync.deque.shift();
}
}
return rval;
}};
},tee:function(_1ab,n){
var rval=[];
var sync={"pos":[],"deque":[],"max":-1,"min":-1};
if(arguments.length==1||typeof (n)=="undefined"||n===null){
n=2;
}
var self=MochiKit.Iter;
_1ab=self.iter(_1ab);
var _tee=self._tee;
for(var i=0;i<n;i++){
rval.push(_tee(i,sync,_1ab));
}
return rval;
},list:function(_1b2){
var rval;
if(_1b2 instanceof Array){
return _1b2.slice();
}
if(typeof (_1b2)=="function"&&!(_1b2 instanceof Function)&&typeof (_1b2.length)=="number"){
rval=[];
for(var i=0;i<_1b2.length;i++){
rval.push(_1b2[i]);
}
return rval;
}
var self=MochiKit.Iter;
_1b2=self.iter(_1b2);
var rval=[];
var _1b6;
try{
while(true){
_1b6=_1b2.next();
rval.push(_1b6);
}
}
catch(e){
if(e!=self.StopIteration){
throw e;
}
return rval;
}
return undefined;
},reduce:function(fn,_1b8,_1b9){
var i=0;
var x=_1b9;
var self=MochiKit.Iter;
_1b8=self.iter(_1b8);
if(arguments.length<3){
try{
x=_1b8.next();
}
catch(e){
if(e==self.StopIteration){
e=new TypeError("reduce() of empty sequence with no initial value");
}
throw e;
}
i++;
}
try{
while(true){
x=fn(x,_1b8.next());
}
}
catch(e){
if(e!=self.StopIteration){
throw e;
}
}
return x;
},range:function(){
var _1bd=0;
var stop=0;
var step=1;
if(arguments.length==1){
stop=arguments[0];
}else{
if(arguments.length==2){
_1bd=arguments[0];
stop=arguments[1];
}else{
if(arguments.length==3){
_1bd=arguments[0];
stop=arguments[1];
step=arguments[2];
}else{
throw new TypeError("range() takes 1, 2, or 3 arguments!");
}
}
}
if(step===0){
throw new TypeError("range() step must not be 0");
}
return {next:function(){
if((step>0&&_1bd>=stop)||(step<0&&_1bd<=stop)){
throw MochiKit.Iter.StopIteration;
}
var rval=_1bd;
_1bd+=step;
return rval;
},repr:function(){
return "range("+[_1bd,stop,step].join(", ")+")";
},toString:MochiKit.Base.forwardCall("repr")};
},sum:function(_1c1,_1c2){
if(typeof (_1c2)=="undefined"||_1c2===null){
_1c2=0;
}
var x=_1c2;
var self=MochiKit.Iter;
_1c1=self.iter(_1c1);
try{
while(true){
x+=_1c1.next();
}
}
catch(e){
if(e!=self.StopIteration){
throw e;
}
}
return x;
},exhaust:function(_1c5){
var self=MochiKit.Iter;
_1c5=self.iter(_1c5);
try{
while(true){
_1c5.next();
}
}
catch(e){
if(e!=self.StopIteration){
throw e;
}
}
},forEach:function(_1c7,func,obj){
var m=MochiKit.Base;
var self=MochiKit.Iter;
if(arguments.length>2){
func=m.bind(func,obj);
}
if(m.isArrayLike(_1c7)&&!self.isIterable(_1c7)){
try{
for(var i=0;i<_1c7.length;i++){
func(_1c7[i]);
}
}
catch(e){
if(e!=self.StopIteration){
throw e;
}
}
}else{
self.exhaust(self.imap(func,_1c7));
}
},every:function(_1cd,func){
var self=MochiKit.Iter;
try{
self.ifilterfalse(func,_1cd).next();
return false;
}
catch(e){
if(e!=self.StopIteration){
throw e;
}
return true;
}
},sorted:function(_1d0,cmp){
var rval=MochiKit.Iter.list(_1d0);
if(arguments.length==1){
cmp=MochiKit.Base.compare;
}
rval.sort(cmp);
return rval;
},reversed:function(_1d3){
var rval=MochiKit.Iter.list(_1d3);
rval.reverse();
return rval;
},some:function(_1d5,func){
var self=MochiKit.Iter;
try{
self.ifilter(func,_1d5).next();
return true;
}
catch(e){
if(e!=self.StopIteration){
throw e;
}
return false;
}
},iextend:function(lst,_1d9){
var m=MochiKit.Base;
var self=MochiKit.Iter;
if(m.isArrayLike(_1d9)&&!self.isIterable(_1d9)){
for(var i=0;i<_1d9.length;i++){
lst.push(_1d9[i]);
}
}else{
_1d9=self.iter(_1d9);
try{
while(true){
lst.push(_1d9.next());
}
}
catch(e){
if(e!=self.StopIteration){
throw e;
}
}
}
return lst;
},groupby:function(_1dd,_1de){
var m=MochiKit.Base;
var self=MochiKit.Iter;
if(arguments.length<2){
_1de=m.operator.identity;
}
_1dd=self.iter(_1dd);
var pk=undefined;
var k=undefined;
var v;
function fetch(){
v=_1dd.next();
k=_1de(v);
}
function eat(){
var ret=v;
v=undefined;
return ret;
}
var _1e5=true;
var _1e6=m.compare;
return {repr:function(){
return "groupby(...)";
},next:function(){
while(_1e6(k,pk)===0){
fetch();
if(_1e5){
_1e5=false;
break;
}
}
pk=k;
return [k,{next:function(){
if(v==undefined){
fetch();
}
if(_1e6(k,pk)!==0){
throw self.StopIteration;
}
return eat();
}}];
}};
},groupby_as_array:function(_1e7,_1e8){
var m=MochiKit.Base;
var self=MochiKit.Iter;
if(arguments.length<2){
_1e8=m.operator.identity;
}
_1e7=self.iter(_1e7);
var _1eb=[];
var _1ec=true;
var _1ed;
var _1ee=m.compare;
while(true){
try{
var _1ef=_1e7.next();
var key=_1e8(_1ef);
}
catch(e){
if(e==self.StopIteration){
break;
}
throw e;
}
if(_1ec||_1ee(key,_1ed)!==0){
var _1f1=[];
_1eb.push([key,_1f1]);
}
_1f1.push(_1ef);
_1ec=false;
_1ed=key;
}
return _1eb;
},arrayLikeIter:function(_1f2){
var i=0;
return {repr:function(){
return "arrayLikeIter(...)";
},toString:MochiKit.Base.forwardCall("repr"),next:function(){
if(i>=_1f2.length){
throw MochiKit.Iter.StopIteration;
}
return _1f2[i++];
}};
},hasIterateNext:function(_1f4){
return (_1f4&&typeof (_1f4.iterateNext)=="function");
},iterateNextIter:function(_1f5){
return {repr:function(){
return "iterateNextIter(...)";
},toString:MochiKit.Base.forwardCall("repr"),next:function(){
var rval=_1f5.iterateNext();
if(rval===null||rval===undefined){
throw MochiKit.Iter.StopIteration;
}
return rval;
}};
}});
MochiKit.Iter.EXPORT_OK=["iteratorRegistry","arrayLikeIter","hasIterateNext","iterateNextIter"];
MochiKit.Iter.EXPORT=["StopIteration","registerIteratorFactory","iter","count","cycle","repeat","next","izip","ifilter","ifilterfalse","islice","imap","applymap","chain","takewhile","dropwhile","tee","list","reduce","range","sum","exhaust","forEach","every","sorted","reversed","some","iextend","groupby","groupby_as_array"];
MochiKit.Iter.__new__=function(){
var m=MochiKit.Base;
if(typeof (StopIteration)!="undefined"){
this.StopIteration=StopIteration;
}else{
this.StopIteration=new m.NamedError("StopIteration");
}
this.iteratorRegistry=new m.AdapterRegistry();
this.registerIteratorFactory("arrayLike",m.isArrayLike,this.arrayLikeIter);
this.registerIteratorFactory("iterateNext",this.hasIterateNext,this.iterateNextIter);
this.EXPORT_TAGS={":common":this.EXPORT,":all":m.concat(this.EXPORT,this.EXPORT_OK)};
m.nameFunctions(this);
};
MochiKit.Iter.__new__();
if(MochiKit.__export__){
reduce=MochiKit.Iter.reduce;
}
MochiKit.Base._exportSymbols(this,MochiKit.Iter);
MochiKit.Base._deps("Logging",["Base"]);
MochiKit.Logging.NAME="MochiKit.Logging";
MochiKit.Logging.VERSION="1.4";
MochiKit.Logging.__repr__=function(){
return "["+this.NAME+" "+this.VERSION+"]";
};
MochiKit.Logging.toString=function(){
return this.__repr__();
};
MochiKit.Logging.EXPORT=["LogLevel","LogMessage","Logger","alertListener","logger","log","logError","logDebug","logFatal","logWarning"];
MochiKit.Logging.EXPORT_OK=["logLevelAtLeast","isLogMessage","compareLogMessage"];
MochiKit.Logging.LogMessage=function(num,_1f9,info){
this.num=num;
this.level=_1f9;
this.info=info;
this.timestamp=new Date();
};
MochiKit.Logging.LogMessage.prototype={repr:function(){
var m=MochiKit.Base;
return "LogMessage("+m.map(m.repr,[this.num,this.level,this.info]).join(", ")+")";
},toString:MochiKit.Base.forwardCall("repr")};
MochiKit.Base.update(MochiKit.Logging,{logLevelAtLeast:function(_1fc){
var self=MochiKit.Logging;
if(typeof (_1fc)=="string"){
_1fc=self.LogLevel[_1fc];
}
return function(msg){
var _1ff=msg.level;
if(typeof (_1ff)=="string"){
_1ff=self.LogLevel[_1ff];
}
return _1ff>=_1fc;
};
},isLogMessage:function(){
var _200=MochiKit.Logging.LogMessage;
for(var i=0;i<arguments.length;i++){
if(!(arguments[i] instanceof _200)){
return false;
}
}
return true;
},compareLogMessage:function(a,b){
return MochiKit.Base.compare([a.level,a.info],[b.level,b.info]);
},alertListener:function(msg){
alert("num: "+msg.num+"\nlevel: "+msg.level+"\ninfo: "+msg.info.join(" "));
}});
MochiKit.Logging.Logger=function(_205){
this.counter=0;
if(typeof (_205)=="undefined"||_205===null){
_205=-1;
}
this.maxSize=_205;
this._messages=[];
this.listeners={};
this.useNativeConsole=false;
};
MochiKit.Logging.Logger.prototype={clear:function(){
this._messages.splice(0,this._messages.length);
},logToConsole:function(msg){
if(typeof (window)!="undefined"&&window.console&&window.console.log){
window.console.log(msg.replace(/%/g,"\uff05"));
}else{
if(typeof (opera)!="undefined"&&opera.postError){
opera.postError(msg);
}else{
if(typeof (printfire)=="function"){
printfire(msg);
}else{
if(typeof (Debug)!="undefined"&&Debug.writeln){
Debug.writeln(msg);
}else{
if(typeof (debug)!="undefined"&&debug.trace){
debug.trace(msg);
}
}
}
}
}
},dispatchListeners:function(msg){
for(var k in this.listeners){
var pair=this.listeners[k];
if(pair.ident!=k||(pair[0]&&!pair[0](msg))){
continue;
}
pair[1](msg);
}
},addListener:function(_20a,_20b,_20c){
if(typeof (_20b)=="string"){
_20b=MochiKit.Logging.logLevelAtLeast(_20b);
}
var _20d=[_20b,_20c];
_20d.ident=_20a;
this.listeners[_20a]=_20d;
},removeListener:function(_20e){
delete this.listeners[_20e];
},baseLog:function(_20f,_210){
if(typeof (_20f)=="number"){
if(_20f>=MochiKit.Logging.LogLevel.FATAL){
_20f="FATAL";
}else{
if(_20f>=MochiKit.Logging.LogLevel.ERROR){
_20f="ERROR";
}else{
if(_20f>=MochiKit.Logging.LogLevel.WARNING){
_20f="WARNING";
}else{
if(_20f>=MochiKit.Logging.LogLevel.INFO){
_20f="INFO";
}else{
_20f="DEBUG";
}
}
}
}
}
var msg=new MochiKit.Logging.LogMessage(this.counter,_20f,MochiKit.Base.extend(null,arguments,1));
this._messages.push(msg);
this.dispatchListeners(msg);
if(this.useNativeConsole){
this.logToConsole(msg.level+": "+msg.info.join(" "));
}
this.counter+=1;
while(this.maxSize>=0&&this._messages.length>this.maxSize){
this._messages.shift();
}
},getMessages:function(_212){
var _213=0;
if(!(typeof (_212)=="undefined"||_212===null)){
_213=Math.max(0,this._messages.length-_212);
}
return this._messages.slice(_213);
},getMessageText:function(_214){
if(typeof (_214)=="undefined"||_214===null){
_214=30;
}
var _215=this.getMessages(_214);
if(_215.length){
var lst=map(function(m){
return "\n  ["+m.num+"] "+m.level+": "+m.info.join(" ");
},_215);
lst.unshift("LAST "+_215.length+" MESSAGES:");
return lst.join("");
}
return "";
},debuggingBookmarklet:function(_218){
if(typeof (MochiKit.LoggingPane)=="undefined"){
alert(this.getMessageText());
}else{
MochiKit.LoggingPane.createLoggingPane(_218||false);
}
}};
MochiKit.Logging.__new__=function(){
this.LogLevel={ERROR:40,FATAL:50,WARNING:30,INFO:20,DEBUG:10};
var m=MochiKit.Base;
m.registerComparator("LogMessage",this.isLogMessage,this.compareLogMessage);
var _21a=m.partial;
var _21b=this.Logger;
var _21c=_21b.prototype.baseLog;
m.update(this.Logger.prototype,{debug:_21a(_21c,"DEBUG"),log:_21a(_21c,"INFO"),error:_21a(_21c,"ERROR"),fatal:_21a(_21c,"FATAL"),warning:_21a(_21c,"WARNING")});
var self=this;
var _21e=function(name){
return function(){
self.logger[name].apply(self.logger,arguments);
};
};
this.log=_21e("log");
this.logError=_21e("error");
this.logDebug=_21e("debug");
this.logFatal=_21e("fatal");
this.logWarning=_21e("warning");
this.logger=new _21b();
this.logger.useNativeConsole=true;
this.EXPORT_TAGS={":common":this.EXPORT,":all":m.concat(this.EXPORT,this.EXPORT_OK)};
m.nameFunctions(this);
};
if(typeof (printfire)=="undefined"&&typeof (document)!="undefined"&&document.createEvent&&typeof (dispatchEvent)!="undefined"){
printfire=function(){
printfire.args=arguments;
var ev=document.createEvent("Events");
ev.initEvent("printfire",false,true);
dispatchEvent(ev);
};
}
MochiKit.Logging.__new__();
MochiKit.Base._exportSymbols(this,MochiKit.Logging);
MochiKit.Base._deps("DateTime",["Base"]);
MochiKit.DateTime.NAME="MochiKit.DateTime";
MochiKit.DateTime.VERSION="1.4";
MochiKit.DateTime.__repr__=function(){
return "["+this.NAME+" "+this.VERSION+"]";
};
MochiKit.DateTime.toString=function(){
return this.__repr__();
};
MochiKit.DateTime.isoDate=function(str){
str=str+"";
if(typeof (str)!="string"||str.length===0){
return null;
}
var iso=str.split("-");
if(iso.length===0){
return null;
}
var date=new Date(iso[0],iso[1]-1,iso[2]);
date.setFullYear(iso[0]);
date.setMonth(iso[1]-1);
date.setDate(iso[2]);
return date;
};
MochiKit.DateTime._isoRegexp=/(\d{4,})(?:-(\d{1,2})(?:-(\d{1,2})(?:[T ](\d{1,2}):(\d{1,2})(?::(\d{1,2})(?:\.(\d+))?)?(?:(Z)|([+-])(\d{1,2})(?::(\d{1,2}))?)?)?)?)?/;
MochiKit.DateTime.isoTimestamp=function(str){
str=str+"";
if(typeof (str)!="string"||str.length===0){
return null;
}
var res=str.match(MochiKit.DateTime._isoRegexp);
if(typeof (res)=="undefined"||res===null){
return null;
}
var year,_227,day,hour,min,sec,msec;
year=parseInt(res[1],10);
if(typeof (res[2])=="undefined"||res[2]===""){
return new Date(year);
}
_227=parseInt(res[2],10)-1;
day=parseInt(res[3],10);
if(typeof (res[4])=="undefined"||res[4]===""){
return new Date(year,_227,day);
}
hour=parseInt(res[4],10);
min=parseInt(res[5],10);
sec=(typeof (res[6])!="undefined"&&res[6]!=="")?parseInt(res[6],10):0;
if(typeof (res[7])!="undefined"&&res[7]!==""){
msec=Math.round(1000*parseFloat("0."+res[7]));
}else{
msec=0;
}
if((typeof (res[8])=="undefined"||res[8]==="")&&(typeof (res[9])=="undefined"||res[9]==="")){
return new Date(year,_227,day,hour,min,sec,msec);
}
var ofs;
if(typeof (res[9])!="undefined"&&res[9]!==""){
ofs=parseInt(res[10],10)*3600000;
if(typeof (res[11])!="undefined"&&res[11]!==""){
ofs+=parseInt(res[11],10)*60000;
}
if(res[9]=="-"){
ofs=-ofs;
}
}else{
ofs=0;
}
return new Date(Date.UTC(year,_227,day,hour,min,sec,msec)-ofs);
};
MochiKit.DateTime.toISOTime=function(date,_22f){
if(typeof (date)=="undefined"||date===null){
return null;
}
var hh=date.getHours();
var mm=date.getMinutes();
var ss=date.getSeconds();
var lst=[((_22f&&(hh<10))?"0"+hh:hh),((mm<10)?"0"+mm:mm),((ss<10)?"0"+ss:ss)];
return lst.join(":");
};
MochiKit.DateTime.toISOTimestamp=function(date,_235){
if(typeof (date)=="undefined"||date===null){
return null;
}
var sep=_235?"T":" ";
var foot=_235?"Z":"";
if(_235){
date=new Date(date.getTime()+(date.getTimezoneOffset()*60000));
}
return MochiKit.DateTime.toISODate(date)+sep+MochiKit.DateTime.toISOTime(date,_235)+foot;
};
MochiKit.DateTime.toISODate=function(date){
if(typeof (date)=="undefined"||date===null){
return null;
}
var _239=MochiKit.DateTime._padTwo;
var _23a=MochiKit.DateTime._padFour;
return [_23a(date.getFullYear()),_239(date.getMonth()+1),_239(date.getDate())].join("-");
};
MochiKit.DateTime.americanDate=function(d){
d=d+"";
if(typeof (d)!="string"||d.length===0){
return null;
}
var a=d.split("/");
return new Date(a[2],a[0]-1,a[1]);
};
MochiKit.DateTime._padTwo=function(n){
return (n>9)?n:"0"+n;
};
MochiKit.DateTime._padFour=function(n){
switch(n.toString().length){
case 1:
return "000"+n;
break;
case 2:
return "00"+n;
break;
case 3:
return "0"+n;
break;
case 4:
default:
return n;
}
};
MochiKit.DateTime.toPaddedAmericanDate=function(d){
if(typeof (d)=="undefined"||d===null){
return null;
}
var _240=MochiKit.DateTime._padTwo;
return [_240(d.getMonth()+1),_240(d.getDate()),d.getFullYear()].join("/");
};
MochiKit.DateTime.toAmericanDate=function(d){
if(typeof (d)=="undefined"||d===null){
return null;
}
return [d.getMonth()+1,d.getDate(),d.getFullYear()].join("/");
};
MochiKit.DateTime.EXPORT=["isoDate","isoTimestamp","toISOTime","toISOTimestamp","toISODate","americanDate","toPaddedAmericanDate","toAmericanDate"];
MochiKit.DateTime.EXPORT_OK=[];
MochiKit.DateTime.EXPORT_TAGS={":common":MochiKit.DateTime.EXPORT,":all":MochiKit.DateTime.EXPORT};
MochiKit.DateTime.__new__=function(){
var base=this.NAME+".";
for(var k in this){
var o=this[k];
if(typeof (o)=="function"&&typeof (o.NAME)=="undefined"){
try{
o.NAME=base+k;
}
catch(e){
}
}
}
};
MochiKit.DateTime.__new__();
if(typeof (MochiKit.Base)!="undefined"){
MochiKit.Base._exportSymbols(this,MochiKit.DateTime);
}else{
(function(_245,_246){
if((typeof (JSAN)=="undefined"&&typeof (dojo)=="undefined")||(MochiKit.__export__===false)){
var all=_246.EXPORT_TAGS[":all"];
for(var i=0;i<all.length;i++){
_245[all[i]]=_246[all[i]];
}
}
})(this,MochiKit.DateTime);
}
MochiKit.Base._deps("Format",["Base"]);
MochiKit.Format.NAME="MochiKit.Format";
MochiKit.Format.VERSION="1.4";
MochiKit.Format.__repr__=function(){
return "["+this.NAME+" "+this.VERSION+"]";
};
MochiKit.Format.toString=function(){
return this.__repr__();
};
MochiKit.Format._numberFormatter=function(_249,_24a,_24b,_24c,_24d,_24e,_24f,_250,_251){
return function(num){
num=parseFloat(num);
if(typeof (num)=="undefined"||num===null||isNaN(num)){
return _249;
}
var _253=_24a;
var _254=_24b;
if(num<0){
num=-num;
}else{
_253=_253.replace(/-/,"");
}
var me=arguments.callee;
var fmt=MochiKit.Format.formatLocale(_24c);
if(_24d){
num=num*100;
_254=fmt.percent+_254;
}
num=MochiKit.Format.roundToFixed(num,_24e);
var _257=num.split(/\./);
var _258=_257[0];
var frac=(_257.length==1)?"":_257[1];
var res="";
while(_258.length<_24f){
_258="0"+_258;
}
if(_250){
while(_258.length>_250){
var i=_258.length-_250;
res=fmt.separator+_258.substring(i,_258.length)+res;
_258=_258.substring(0,i);
}
}
res=_258+res;
if(_24e>0){
while(frac.length<_251){
frac=frac+"0";
}
res=res+fmt.decimal+frac;
}
return _253+res+_254;
};
};
MochiKit.Format.numberFormatter=function(_25c,_25d,_25e){
if(typeof (_25d)=="undefined"){
_25d="";
}
var _25f=_25c.match(/((?:[0#]+,)?[0#]+)(?:\.([0#]+))?(%)?/);
if(!_25f){
throw TypeError("Invalid pattern");
}
var _260=_25c.substr(0,_25f.index);
var _261=_25c.substr(_25f.index+_25f[0].length);
if(_260.search(/-/)==-1){
_260=_260+"-";
}
var _262=_25f[1];
var frac=(typeof (_25f[2])=="string"&&_25f[2]!="")?_25f[2]:"";
var _264=(typeof (_25f[3])=="string"&&_25f[3]!="");
var tmp=_262.split(/,/);
var _266;
if(typeof (_25e)=="undefined"){
_25e="default";
}
if(tmp.length==1){
_266=null;
}else{
_266=tmp[1].length;
}
var _267=_262.length-_262.replace(/0/g,"").length;
var _268=frac.length-frac.replace(/0/g,"").length;
var _269=frac.length;
var rval=MochiKit.Format._numberFormatter(_25d,_260,_261,_25e,_264,_269,_267,_266,_268);
var m=MochiKit.Base;
if(m){
var fn=arguments.callee;
var args=m.concat(arguments);
rval.repr=function(){
return [self.NAME,"(",map(m.repr,args).join(", "),")"].join("");
};
}
return rval;
};
MochiKit.Format.formatLocale=function(_26e){
if(typeof (_26e)=="undefined"||_26e===null){
_26e="default";
}
if(typeof (_26e)=="string"){
var rval=MochiKit.Format.LOCALE[_26e];
if(typeof (rval)=="string"){
rval=arguments.callee(rval);
MochiKit.Format.LOCALE[_26e]=rval;
}
return rval;
}else{
return _26e;
}
};
MochiKit.Format.twoDigitAverage=function(_270,_271){
if(_271){
var res=_270/_271;
if(!isNaN(res)){
return MochiKit.Format.twoDigitFloat(res);
}
}
return "0";
};
MochiKit.Format.twoDigitFloat=function(_273){
var res=roundToFixed(_273,2);
if(res.indexOf(".00")>0){
return res.substring(0,res.length-3);
}else{
if(res.charAt(res.length-1)=="0"){
return res.substring(0,res.length-1);
}else{
return res;
}
}
};
MochiKit.Format.lstrip=function(str,_276){
str=str+"";
if(typeof (str)!="string"){
return null;
}
if(!_276){
return str.replace(/^\s+/,"");
}else{
return str.replace(new RegExp("^["+_276+"]+"),"");
}
};
MochiKit.Format.rstrip=function(str,_278){
str=str+"";
if(typeof (str)!="string"){
return null;
}
if(!_278){
return str.replace(/\s+$/,"");
}else{
return str.replace(new RegExp("["+_278+"]+$"),"");
}
};
MochiKit.Format.strip=function(str,_27a){
var self=MochiKit.Format;
return self.rstrip(self.lstrip(str,_27a),_27a);
};
MochiKit.Format.truncToFixed=function(_27c,_27d){
var res=Math.floor(_27c).toFixed(0);
if(_27c<0){
res=Math.ceil(_27c).toFixed(0);
if(res.charAt(0)!="-"&&_27d>0){
res="-"+res;
}
}
if(res.indexOf("e")<0&&_27d>0){
var tail=_27c.toString();
if(tail.indexOf("e")>0){
tail=".";
}else{
if(tail.indexOf(".")<0){
tail=".";
}else{
tail=tail.substring(tail.indexOf("."));
}
}
if(tail.length-1>_27d){
tail=tail.substring(0,_27d+1);
}
while(tail.length-1<_27d){
tail+="0";
}
res+=tail;
}
return res;
};
MochiKit.Format.roundToFixed=function(_280,_281){
var _282=Math.abs(_280)+0.5*Math.pow(10,-_281);
var res=MochiKit.Format.truncToFixed(_282,_281);
if(_280<0){
res="-"+res;
}
return res;
};
MochiKit.Format.percentFormat=function(_284){
return MochiKit.Format.twoDigitFloat(100*_284)+"%";
};
MochiKit.Format.EXPORT=["truncToFixed","roundToFixed","numberFormatter","formatLocale","twoDigitAverage","twoDigitFloat","percentFormat","lstrip","rstrip","strip"];
MochiKit.Format.LOCALE={en_US:{separator:",",decimal:".",percent:"%"},de_DE:{separator:".",decimal:",",percent:"%"},pt_BR:{separator:".",decimal:",",percent:"%"},fr_FR:{separator:" ",decimal:",",percent:"%"},"default":"en_US"};
MochiKit.Format.EXPORT_OK=[];
MochiKit.Format.EXPORT_TAGS={":all":MochiKit.Format.EXPORT,":common":MochiKit.Format.EXPORT};
MochiKit.Format.__new__=function(){
var base=this.NAME+".";
var k,v,o;
for(k in this.LOCALE){
o=this.LOCALE[k];
if(typeof (o)=="object"){
o.repr=function(){
return this.NAME;
};
o.NAME=base+"LOCALE."+k;
}
}
for(k in this){
o=this[k];
if(typeof (o)=="function"&&typeof (o.NAME)=="undefined"){
try{
o.NAME=base+k;
}
catch(e){
}
}
}
};
MochiKit.Format.__new__();
if(typeof (MochiKit.Base)!="undefined"){
MochiKit.Base._exportSymbols(this,MochiKit.Format);
}else{
(function(_289,_28a){
if((typeof (JSAN)=="undefined"&&typeof (dojo)=="undefined")||(MochiKit.__export__===false)){
var all=_28a.EXPORT_TAGS[":all"];
for(var i=0;i<all.length;i++){
_289[all[i]]=_28a[all[i]];
}
}
})(this,MochiKit.Format);
}
MochiKit.Base._deps("Async",["Base"]);
MochiKit.Async.NAME="MochiKit.Async";
MochiKit.Async.VERSION="1.4";
MochiKit.Async.__repr__=function(){
return "["+this.NAME+" "+this.VERSION+"]";
};
MochiKit.Async.toString=function(){
return this.__repr__();
};
MochiKit.Async.Deferred=function(_28d){
this.chain=[];
this.id=this._nextId();
this.fired=-1;
this.paused=0;
this.results=[null,null];
this.canceller=_28d;
this.silentlyCancelled=false;
this.chained=false;
};
MochiKit.Async.Deferred.prototype={repr:function(){
var _28e;
if(this.fired==-1){
_28e="unfired";
}else{
if(this.fired===0){
_28e="success";
}else{
_28e="error";
}
}
return "Deferred("+this.id+", "+_28e+")";
},toString:MochiKit.Base.forwardCall("repr"),_nextId:MochiKit.Base.counter(),cancel:function(){
var self=MochiKit.Async;
if(this.fired==-1){
if(this.canceller){
this.canceller(this);
}else{
this.silentlyCancelled=true;
}
if(this.fired==-1){
this.errback(new self.CancelledError(this));
}
}else{
if((this.fired===0)&&(this.results[0] instanceof self.Deferred)){
this.results[0].cancel();
}
}
},_resback:function(res){
this.fired=((res instanceof Error)?1:0);
this.results[this.fired]=res;
this._fire();
},_check:function(){
if(this.fired!=-1){
if(!this.silentlyCancelled){
throw new MochiKit.Async.AlreadyCalledError(this);
}
this.silentlyCancelled=false;
return;
}
},callback:function(res){
this._check();
if(res instanceof MochiKit.Async.Deferred){
throw new Error("Deferred instances can only be chained if they are the result of a callback");
}
this._resback(res);
},errback:function(res){
this._check();
var self=MochiKit.Async;
if(res instanceof self.Deferred){
throw new Error("Deferred instances can only be chained if they are the result of a callback");
}
if(!(res instanceof Error)){
res=new self.GenericError(res);
}
this._resback(res);
},addBoth:function(fn){
if(arguments.length>1){
fn=MochiKit.Base.partial.apply(null,arguments);
}
return this.addCallbacks(fn,fn);
},addCallback:function(fn){
if(arguments.length>1){
fn=MochiKit.Base.partial.apply(null,arguments);
}
return this.addCallbacks(fn,null);
},addErrback:function(fn){
if(arguments.length>1){
fn=MochiKit.Base.partial.apply(null,arguments);
}
return this.addCallbacks(null,fn);
},addCallbacks:function(cb,eb){
if(this.chained){
throw new Error("Chained Deferreds can not be re-used");
}
this.chain.push([cb,eb]);
if(this.fired>=0){
this._fire();
}
return this;
},_fire:function(){
var _299=this.chain;
var _29a=this.fired;
var res=this.results[_29a];
var self=this;
var cb=null;
while(_299.length>0&&this.paused===0){
var pair=_299.shift();
var f=pair[_29a];
if(f===null){
continue;
}
try{
res=f(res);
_29a=((res instanceof Error)?1:0);
if(res instanceof MochiKit.Async.Deferred){
cb=function(res){
self._resback(res);
self.paused--;
if((self.paused===0)&&(self.fired>=0)){
self._fire();
}
};
this.paused++;
}
}
catch(err){
_29a=1;
if(!(err instanceof Error)){
err=new MochiKit.Async.GenericError(err);
}
res=err;
}
}
this.fired=_29a;
this.results[_29a]=res;
if(cb&&this.paused){
res.addBoth(cb);
res.chained=true;
}
}};
MochiKit.Base.update(MochiKit.Async,{evalJSONRequest:function(req){
return MochiKit.Base.evalJSON(req.responseText);
},succeed:function(_2a2){
var d=new MochiKit.Async.Deferred();
d.callback.apply(d,arguments);
return d;
},fail:function(_2a4){
var d=new MochiKit.Async.Deferred();
d.errback.apply(d,arguments);
return d;
},getXMLHttpRequest:function(){
var self=arguments.callee;
if(!self.XMLHttpRequest){
var _2a7=[function(){
return new XMLHttpRequest();
},function(){
return new ActiveXObject("Msxml2.XMLHTTP");
},function(){
return new ActiveXObject("Microsoft.XMLHTTP");
},function(){
return new ActiveXObject("Msxml2.XMLHTTP.4.0");
},function(){
throw new MochiKit.Async.BrowserComplianceError("Browser does not support XMLHttpRequest");
}];
for(var i=0;i<_2a7.length;i++){
var func=_2a7[i];
try{
self.XMLHttpRequest=func;
return func();
}
catch(e){
}
}
}
return self.XMLHttpRequest();
},_xhr_onreadystatechange:function(d){
var m=MochiKit.Base;
if(this.readyState==4){
try{
this.onreadystatechange=null;
}
catch(e){
try{
this.onreadystatechange=m.noop;
}
catch(e){
}
}
var _2ac=null;
try{
_2ac=this.status;
if(!_2ac&&m.isNotEmpty(this.responseText)){
_2ac=304;
}
}
catch(e){
}
if(_2ac==200||_2ac==201||_2ac==204||_2ac==304||_2ac==1223){
d.callback(this);
}else{
var err=new MochiKit.Async.XMLHttpRequestError(this,"Request failed");
if(err.number){
d.errback(err);
}else{
d.errback(err);
}
}
}
},_xhr_canceller:function(req){
try{
req.onreadystatechange=null;
}
catch(e){
try{
req.onreadystatechange=MochiKit.Base.noop;
}
catch(e){
}
}
req.abort();
},sendXMLHttpRequest:function(req,_2b0){
if(typeof (_2b0)=="undefined"||_2b0===null){
_2b0="";
}
var m=MochiKit.Base;
var self=MochiKit.Async;
var d=new self.Deferred(m.partial(self._xhr_canceller,req));
try{
req.onreadystatechange=m.bind(self._xhr_onreadystatechange,req,d);
req.send(_2b0);
}
catch(e){
try{
req.onreadystatechange=null;
}
catch(ignore){
}
d.errback(e);
}
return d;
},doXHR:function(url,opts){
var self=MochiKit.Async;
return self.callLater(0,self._doXHR,url,opts);
},_doXHR:function(url,opts){
var m=MochiKit.Base;
opts=m.update({method:"GET",sendContent:""},opts);
var self=MochiKit.Async;
var req=self.getXMLHttpRequest();
if(opts.queryString){
var qs=m.queryString(opts.queryString);
if(qs){
url+="?"+qs;
}
}
if("username" in opts){
req.open(opts.method,url,true,opts.username,opts.password);
}else{
req.open(opts.method,url,true);
}
if(req.overrideMimeType&&opts.mimeType){
req.overrideMimeType(opts.mimeType);
}
req.setRequestHeader("X-Requested-With","XMLHttpRequest");
if(opts.headers){
var _2bd=opts.headers;
if(!m.isArrayLike(_2bd)){
_2bd=m.items(_2bd);
}
for(var i=0;i<_2bd.length;i++){
var _2bf=_2bd[i];
var name=_2bf[0];
var _2c1=_2bf[1];
req.setRequestHeader(name,_2c1);
}
}
return self.sendXMLHttpRequest(req,opts.sendContent);
},_buildURL:function(url){
if(arguments.length>1){
var m=MochiKit.Base;
var qs=m.queryString.apply(null,m.extend(null,arguments,1));
if(qs){
return url+"?"+qs;
}
}
return url;
},doSimpleXMLHttpRequest:function(url){
var self=MochiKit.Async;
url=self._buildURL.apply(self,arguments);
return self.doXHR(url);
},loadJSONDoc:function(url){
var self=MochiKit.Async;
url=self._buildURL.apply(self,arguments);
var d=self.doXHR(url,{"mimeType":"text/plain","headers":[["Accept","application/json"]]});
d=d.addCallback(self.evalJSONRequest);
return d;
},wait:function(_2ca,_2cb){
var d=new MochiKit.Async.Deferred();
var m=MochiKit.Base;
if(typeof (_2cb)!="undefined"){
d.addCallback(function(){
return _2cb;
});
}
var _2ce=setTimeout(m.bind("callback",d),Math.floor(_2ca*1000));
d.canceller=function(){
try{
clearTimeout(_2ce);
}
catch(e){
}
};
return d;
},callLater:function(_2cf,func){
var m=MochiKit.Base;
var _2d2=m.partial.apply(m,m.extend(null,arguments,1));
return MochiKit.Async.wait(_2cf).addCallback(function(res){
return _2d2();
});
}});
MochiKit.Async.DeferredLock=function(){
this.waiting=[];
this.locked=false;
this.id=this._nextId();
};
MochiKit.Async.DeferredLock.prototype={__class__:MochiKit.Async.DeferredLock,acquire:function(){
var d=new MochiKit.Async.Deferred();
if(this.locked){
this.waiting.push(d);
}else{
this.locked=true;
d.callback(this);
}
return d;
},release:function(){
if(!this.locked){
throw TypeError("Tried to release an unlocked DeferredLock");
}
this.locked=false;
if(this.waiting.length>0){
this.locked=true;
this.waiting.shift().callback(this);
}
},_nextId:MochiKit.Base.counter(),repr:function(){
var _2d5;
if(this.locked){
_2d5="locked, "+this.waiting.length+" waiting";
}else{
_2d5="unlocked";
}
return "DeferredLock("+this.id+", "+_2d5+")";
},toString:MochiKit.Base.forwardCall("repr")};
MochiKit.Async.DeferredList=function(list,_2d7,_2d8,_2d9,_2da){
MochiKit.Async.Deferred.apply(this,[_2da]);
this.list=list;
var _2db=[];
this.resultList=_2db;
this.finishedCount=0;
this.fireOnOneCallback=_2d7;
this.fireOnOneErrback=_2d8;
this.consumeErrors=_2d9;
var cb=MochiKit.Base.bind(this._cbDeferred,this);
for(var i=0;i<list.length;i++){
var d=list[i];
_2db.push(undefined);
d.addCallback(cb,i,true);
d.addErrback(cb,i,false);
}
if(list.length===0&&!_2d7){
this.callback(this.resultList);
}
};
MochiKit.Async.DeferredList.prototype=new MochiKit.Async.Deferred();
MochiKit.Async.DeferredList.prototype._cbDeferred=function(_2df,_2e0,_2e1){
this.resultList[_2df]=[_2e0,_2e1];
this.finishedCount+=1;
if(this.fired==-1){
if(_2e0&&this.fireOnOneCallback){
this.callback([_2df,_2e1]);
}else{
if(!_2e0&&this.fireOnOneErrback){
this.errback(_2e1);
}else{
if(this.finishedCount==this.list.length){
this.callback(this.resultList);
}
}
}
}
if(!_2e0&&this.consumeErrors){
_2e1=null;
}
return _2e1;
};
MochiKit.Async.gatherResults=function(_2e2){
var d=new MochiKit.Async.DeferredList(_2e2,false,true,false);
d.addCallback(function(_2e4){
var ret=[];
for(var i=0;i<_2e4.length;i++){
ret.push(_2e4[i][1]);
}
return ret;
});
return d;
};
MochiKit.Async.maybeDeferred=function(func){
var self=MochiKit.Async;
var _2e9;
try{
var r=func.apply(null,MochiKit.Base.extend([],arguments,1));
if(r instanceof self.Deferred){
_2e9=r;
}else{
if(r instanceof Error){
_2e9=self.fail(r);
}else{
_2e9=self.succeed(r);
}
}
}
catch(e){
_2e9=self.fail(e);
}
return _2e9;
};
MochiKit.Async.EXPORT=["AlreadyCalledError","CancelledError","BrowserComplianceError","GenericError","XMLHttpRequestError","Deferred","succeed","fail","getXMLHttpRequest","doSimpleXMLHttpRequest","loadJSONDoc","wait","callLater","sendXMLHttpRequest","DeferredLock","DeferredList","gatherResults","maybeDeferred","doXHR"];
MochiKit.Async.EXPORT_OK=["evalJSONRequest"];
MochiKit.Async.__new__=function(){
var m=MochiKit.Base;
var ne=m.partial(m._newNamedError,this);
ne("AlreadyCalledError",function(_2ed){
this.deferred=_2ed;
});
ne("CancelledError",function(_2ee){
this.deferred=_2ee;
});
ne("BrowserComplianceError",function(msg){
this.message=msg;
});
ne("GenericError",function(msg){
this.message=msg;
});
ne("XMLHttpRequestError",function(req,msg){
this.req=req;
this.message=msg;
try{
this.number=req.status;
}
catch(e){
}
});
this.EXPORT_TAGS={":common":this.EXPORT,":all":m.concat(this.EXPORT,this.EXPORT_OK)};
m.nameFunctions(this);
};
MochiKit.Async.__new__();
MochiKit.Base._exportSymbols(this,MochiKit.Async);
MochiKit.Base._deps("DOM",["Base"]);
MochiKit.DOM.NAME="MochiKit.DOM";
MochiKit.DOM.VERSION="1.4";
MochiKit.DOM.__repr__=function(){
return "["+this.NAME+" "+this.VERSION+"]";
};
MochiKit.DOM.toString=function(){
return this.__repr__();
};
MochiKit.DOM.EXPORT=["removeEmptyTextNodes","formContents","currentWindow","currentDocument","withWindow","withDocument","registerDOMConverter","coerceToDOM","createDOM","createDOMFunc","isChildNode","getNodeAttribute","removeNodeAttribute","setNodeAttribute","updateNodeAttributes","appendChildNodes","insertSiblingNodesAfter","insertSiblingNodesBefore","replaceChildNodes","removeElement","swapDOM","BUTTON","TT","PRE","H1","H2","H3","H4","H5","H6","BR","CANVAS","HR","LABEL","TEXTAREA","FORM","STRONG","SELECT","OPTION","OPTGROUP","LEGEND","FIELDSET","P","UL","OL","LI","DL","DT","DD","TD","TR","THEAD","TBODY","TFOOT","TABLE","TH","INPUT","SPAN","A","DIV","IMG","getElement","$","getElementsByTagAndClassName","addToCallStack","addLoadEvent","focusOnLoad","setElementClass","toggleElementClass","addElementClass","removeElementClass","swapElementClass","hasElementClass","escapeHTML","toHTML","emitHTML","scrapeText","isParent","getFirstParentByTagAndClassName","makeClipping","undoClipping","makePositioned","undoPositioned","getFirstElementByTagAndClassName"];
MochiKit.DOM.EXPORT_OK=["domConverters"];
MochiKit.DOM.DEPRECATED=[["computedStyle","MochiKit.Style.getStyle","1.4"],["elementDimensions","MochiKit.Style.getElementDimensions","1.4"],["elementPosition","MochiKit.Style.getElementPosition","1.4"],["hideElement","MochiKit.Style.hideElement","1.4"],["setElementDimensions","MochiKit.Style.setElementDimensions","1.4"],["setElementPosition","MochiKit.Style.setElementPosition","1.4"],["setDisplayForElement","MochiKit.Style.setDisplayForElement","1.4"],["setOpacity","MochiKit.Style.setOpacity","1.4"],["showElement","MochiKit.Style.showElement","1.4"],["Coordinates","MochiKit.Style.Coordinates","1.4"],["Dimensions","MochiKit.Style.Dimensions","1.4"]];
MochiKit.DOM.getViewportDimensions=new Function(""+"if (!MochiKit[\"Style\"]) {"+"    throw new Error(\"This function has been deprecated and depends on MochiKit.Style.\");"+"}"+"return MochiKit.Style.getViewportDimensions.apply(this, arguments);");
MochiKit.Base.update(MochiKit.DOM,{currentWindow:function(){
return MochiKit.DOM._window;
},currentDocument:function(){
return MochiKit.DOM._document;
},withWindow:function(win,func){
var self=MochiKit.DOM;
var _2f6=self._document;
var _2f7=self._window;
var rval;
try{
self._window=win;
self._document=win.document;
rval=func();
}
catch(e){
self._window=_2f7;
self._document=_2f6;
throw e;
}
self._window=_2f7;
self._document=_2f6;
return rval;
},formContents:function(elem){
var _2fa=[];
var _2fb=[];
var m=MochiKit.Base;
var self=MochiKit.DOM;
if(typeof (elem)=="undefined"||elem===null){
elem=self._document.body;
}else{
elem=self.getElement(elem);
}
m.nodeWalk(elem,function(elem){
var name=elem.name;
if(m.isNotEmpty(name)){
var _300=elem.tagName.toUpperCase();
if(_300==="INPUT"&&(elem.type=="radio"||elem.type=="checkbox")&&!elem.checked){
return null;
}
if(_300==="SELECT"){
if(elem.type=="select-one"){
if(elem.selectedIndex>=0){
var opt=elem.options[elem.selectedIndex];
var v=opt.value;
if(!v){
var h=opt.outerHTML;
if(h&&!h.match(/^[^>]+\svalue\s*=/i)){
v=opt.text;
}
}
_2fa.push(name);
_2fb.push(v);
return null;
}
_2fa.push(name);
_2fb.push("");
return null;
}else{
var opts=elem.options;
if(!opts.length){
_2fa.push(name);
_2fb.push("");
return null;
}
for(var i=0;i<opts.length;i++){
var opt=opts[i];
if(!opt.selected){
continue;
}
var v=opt.value;
if(!v){
var h=opt.outerHTML;
if(h&&!h.match(/^[^>]+\svalue\s*=/i)){
v=opt.text;
}
}
_2fa.push(name);
_2fb.push(v);
}
return null;
}
}
if(_300==="FORM"||_300==="P"||_300==="SPAN"||_300==="DIV"){
return elem.childNodes;
}
_2fa.push(name);
_2fb.push(elem.value||"");
return null;
}
return elem.childNodes;
});
return [_2fa,_2fb];
},withDocument:function(doc,func){
var self=MochiKit.DOM;
var _309=self._document;
var rval;
try{
self._document=doc;
rval=func();
}
catch(e){
self._document=_309;
throw e;
}
self._document=_309;
return rval;
},registerDOMConverter:function(name,_30c,wrap,_30e){
MochiKit.DOM.domConverters.register(name,_30c,wrap,_30e);
},coerceToDOM:function(node,ctx){
var m=MochiKit.Base;
var im=MochiKit.Iter;
var self=MochiKit.DOM;
if(im){
var iter=im.iter;
var _315=im.repeat;
var map=m.map;
}
var _317=self.domConverters;
var _318=arguments.callee;
var _319=m.NotFound;
while(true){
if(typeof (node)=="undefined"||node===null){
return null;
}
if(typeof (node)=="function"&&typeof (node.length)=="number"&&!(node instanceof Function)){
node=im.list(node);
}
if(typeof (node.nodeType)!="undefined"&&node.nodeType>0){
return node;
}
if(typeof (node)=="number"||typeof (node)=="boolean"){
node=node.toString();
}
if(typeof (node)=="string"){
return self._document.createTextNode(node);
}
if(typeof (node.__dom__)=="function"){
node=node.__dom__(ctx);
continue;
}
if(typeof (node.dom)=="function"){
node=node.dom(ctx);
continue;
}
if(typeof (node)=="function"){
node=node.apply(ctx,[ctx]);
continue;
}
if(im){
var _31a=null;
try{
_31a=iter(node);
}
catch(e){
}
if(_31a){
return map(_318,_31a,_315(ctx));
}
}
try{
node=_317.match(node,ctx);
continue;
}
catch(e){
if(e!=_319){
throw e;
}
}
return self._document.createTextNode(node.toString());
}
return undefined;
},isChildNode:function(node,_31c){
var self=MochiKit.DOM;
if(typeof (node)=="string"){
node=self.getElement(node);
}
if(typeof (_31c)=="string"){
_31c=self.getElement(_31c);
}
if(typeof (node)=="undefined"||node===null){
return false;
}
while(node!=null&&node!==self._document){
if(node===_31c){
return true;
}
node=node.parentNode;
}
return false;
},setNodeAttribute:function(node,attr,_320){
var o={};
o[attr]=_320;
try{
return MochiKit.DOM.updateNodeAttributes(node,o);
}
catch(e){
}
return null;
},getNodeAttribute:function(node,attr){
var self=MochiKit.DOM;
var _325=self.attributeArray.renames[attr];
var _326=self.attributeArray.ignoreAttr[attr];
node=self.getElement(node);
try{
if(_325){
return node[_325];
}
var _327=node.getAttribute(attr);
if(_327!=_326){
return _327;
}
}
catch(e){
}
return null;
},removeNodeAttribute:function(node,attr){
var self=MochiKit.DOM;
var _32b=self.attributeArray.renames[attr];
node=self.getElement(node);
try{
if(_32b){
return node[_32b];
}
return node.removeAttribute(attr);
}
catch(e){
}
return null;
},updateNodeAttributes:function(node,_32d){
var elem=node;
var self=MochiKit.DOM;
if(typeof (node)=="string"){
elem=self.getElement(node);
}
if(_32d){
var _330=MochiKit.Base.updatetree;
if(self.attributeArray.compliant){
for(var k in _32d){
var v=_32d[k];
if(typeof (v)=="object"&&typeof (elem[k])=="object"){
if(k=="style"&&MochiKit.Style){
MochiKit.Style.setStyle(elem,v);
}else{
_330(elem[k],v);
}
}else{
if(k.substring(0,2)=="on"){
if(typeof (v)=="string"){
v=new Function(v);
}
elem[k]=v;
}else{
elem.setAttribute(k,v);
}
}
if(typeof (elem[k])=="string"&&elem[k]!=v){
elem[k]=v;
}
}
}else{
var _333=self.attributeArray.renames;
for(var k in _32d){
v=_32d[k];
var _334=_333[k];
if(k=="style"&&typeof (v)=="string"){
elem.style.cssText=v;
}else{
if(typeof (_334)=="string"){
elem[_334]=v;
}else{
if(typeof (elem[k])=="object"&&typeof (v)=="object"){
if(k=="style"&&MochiKit.Style){
MochiKit.Style.setStyle(elem,v);
}else{
_330(elem[k],v);
}
}else{
if(k.substring(0,2)=="on"){
if(typeof (v)=="string"){
v=new Function(v);
}
elem[k]=v;
}else{
elem.setAttribute(k,v);
}
}
}
}
if(typeof (elem[k])=="string"&&elem[k]!=v){
elem[k]=v;
}
}
}
}
return elem;
},appendChildNodes:function(node){
var elem=node;
var self=MochiKit.DOM;
if(typeof (node)=="string"){
elem=self.getElement(node);
}
var _338=[self.coerceToDOM(MochiKit.Base.extend(null,arguments,1),elem)];
var _339=MochiKit.Base.concat;
while(_338.length){
var n=_338.shift();
if(typeof (n)=="undefined"||n===null){
}else{
if(typeof (n.nodeType)=="number"){
elem.appendChild(n);
}else{
_338=_339(n,_338);
}
}
}
return elem;
},insertSiblingNodesBefore:function(node){
var elem=node;
var self=MochiKit.DOM;
if(typeof (node)=="string"){
elem=self.getElement(node);
}
var _33e=[self.coerceToDOM(MochiKit.Base.extend(null,arguments,1),elem)];
var _33f=elem.parentNode;
var _340=MochiKit.Base.concat;
while(_33e.length){
var n=_33e.shift();
if(typeof (n)=="undefined"||n===null){
}else{
if(typeof (n.nodeType)=="number"){
_33f.insertBefore(n,elem);
}else{
_33e=_340(n,_33e);
}
}
}
return _33f;
},insertSiblingNodesAfter:function(node){
var elem=node;
var self=MochiKit.DOM;
if(typeof (node)=="string"){
elem=self.getElement(node);
}
var _345=[self.coerceToDOM(MochiKit.Base.extend(null,arguments,1),elem)];
if(elem.nextSibling){
return self.insertSiblingNodesBefore(elem.nextSibling,_345);
}else{
return self.appendChildNodes(elem.parentNode,_345);
}
},replaceChildNodes:function(node){
var elem=node;
var self=MochiKit.DOM;
if(typeof (node)=="string"){
elem=self.getElement(node);
arguments[0]=elem;
}
var _349;
while((_349=elem.firstChild)){
elem.removeChild(_349);
}
if(arguments.length<2){
return elem;
}else{
return self.appendChildNodes.apply(this,arguments);
}
},createDOM:function(name,_34b){
var elem;
var self=MochiKit.DOM;
var m=MochiKit.Base;
if(typeof (_34b)=="string"||typeof (_34b)=="number"){
var args=m.extend([name,null],arguments,1);
return arguments.callee.apply(this,args);
}
if(typeof (name)=="string"){
var _350=self._xhtml;
if(_34b&&!self.attributeArray.compliant){
var _351="";
if("name" in _34b){
_351+=" name=\""+self.escapeHTML(_34b.name)+"\"";
}
if(name=="input"&&"type" in _34b){
_351+=" type=\""+self.escapeHTML(_34b.type)+"\"";
}
if(_351){
name="<"+name+_351+">";
_350=false;
}
}
var d=self._document;
if(_350&&d===document){
elem=d.createElementNS("http://www.w3.org/1999/xhtml",name);
}else{
elem=d.createElement(name);
}
}else{
elem=name;
}
if(_34b){
self.updateNodeAttributes(elem,_34b);
}
if(arguments.length<=2){
return elem;
}else{
var args=m.extend([elem],arguments,2);
return self.appendChildNodes.apply(this,args);
}
},createDOMFunc:function(){
var m=MochiKit.Base;
return m.partial.apply(this,m.extend([MochiKit.DOM.createDOM],arguments));
},removeElement:function(elem){
var e=MochiKit.DOM.getElement(elem);
e.parentNode.removeChild(e);
return e;
},swapDOM:function(dest,src){
var self=MochiKit.DOM;
dest=self.getElement(dest);
var _359=dest.parentNode;
if(src){
src=self.getElement(src);
_359.replaceChild(src,dest);
}else{
_359.removeChild(dest);
}
return src;
},getElement:function(id){
var self=MochiKit.DOM;
if(arguments.length==1){
return ((typeof (id)=="string")?self._document.getElementById(id):id);
}else{
return MochiKit.Base.map(self.getElement,arguments);
}
},getElementsByTagAndClassName:function(_35c,_35d,_35e){
var self=MochiKit.DOM;
if(typeof (_35c)=="undefined"||_35c===null){
_35c="*";
}
if(typeof (_35e)=="undefined"||_35e===null){
_35e=self._document;
}
_35e=self.getElement(_35e);
if(_35e==null){
return [];
}
var _360=(_35e.getElementsByTagName(_35c)||self._document.all);
if(typeof (_35d)=="undefined"||_35d===null){
return MochiKit.Base.extend(null,_360);
}
var _361=[];
for(var i=0;i<_360.length;i++){
var _363=_360[i];
var cls=_363.className;
if(typeof (cls)!="string"){
cls=_363.getAttribute("class");
}
if(typeof (cls)=="string"){
var _365=cls.split(" ");
for(var j=0;j<_365.length;j++){
if(_365[j]==_35d){
_361.push(_363);
break;
}
}
}
}
return _361;
},_newCallStack:function(path,once){
var rval=function(){
var _36a=arguments.callee.callStack;
for(var i=0;i<_36a.length;i++){
if(_36a[i].apply(this,arguments)===false){
break;
}
}
if(once){
try{
this[path]=null;
}
catch(e){
}
}
};
rval.callStack=[];
return rval;
},addToCallStack:function(_36c,path,func,once){
var self=MochiKit.DOM;
var _371=_36c[path];
var _372=_371;
if(!(typeof (_371)=="function"&&typeof (_371.callStack)=="object"&&_371.callStack!==null)){
_372=self._newCallStack(path,once);
if(typeof (_371)=="function"){
_372.callStack.push(_371);
}
_36c[path]=_372;
}
_372.callStack.push(func);
},addLoadEvent:function(func){
var self=MochiKit.DOM;
self.addToCallStack(self._window,"onload",func,true);
},focusOnLoad:function(_375){
var self=MochiKit.DOM;
self.addLoadEvent(function(){
_375=self.getElement(_375);
if(_375){
_375.focus();
}
});
},setElementClass:function(_377,_378){
var self=MochiKit.DOM;
var obj=self.getElement(_377);
if(self.attributeArray.compliant){
obj.setAttribute("class",_378);
}else{
obj.setAttribute("className",_378);
}
},toggleElementClass:function(_37b){
var self=MochiKit.DOM;
for(var i=1;i<arguments.length;i++){
var obj=self.getElement(arguments[i]);
if(!self.addElementClass(obj,_37b)){
self.removeElementClass(obj,_37b);
}
}
},addElementClass:function(_37f,_380){
var self=MochiKit.DOM;
var obj=self.getElement(_37f);
var cls=obj.className;
if(typeof (cls)!="string"){
cls=obj.getAttribute("class");
}
if(typeof (cls)!="string"||cls.length===0){
self.setElementClass(obj,_380);
return true;
}
if(cls==_380){
return false;
}
var _384=cls.split(" ");
for(var i=0;i<_384.length;i++){
if(_384[i]==_380){
return false;
}
}
self.setElementClass(obj,cls+" "+_380);
return true;
},removeElementClass:function(_386,_387){
var self=MochiKit.DOM;
var obj=self.getElement(_386);
var cls=obj.className;
if(typeof (cls)!="string"){
cls=obj.getAttribute("class");
}
if(typeof (cls)!="string"||cls.length===0){
return false;
}
if(cls==_387){
self.setElementClass(obj,"");
return true;
}
var _38b=cls.split(" ");
for(var i=0;i<_38b.length;i++){
if(_38b[i]==_387){
_38b.splice(i,1);
self.setElementClass(obj,_38b.join(" "));
return true;
}
}
return false;
},swapElementClass:function(_38d,_38e,_38f){
var obj=MochiKit.DOM.getElement(_38d);
var res=MochiKit.DOM.removeElementClass(obj,_38e);
if(res){
MochiKit.DOM.addElementClass(obj,_38f);
}
return res;
},hasElementClass:function(_392,_393){
var obj=MochiKit.DOM.getElement(_392);
if(obj==null){
return false;
}
var cls=obj.className;
if(typeof (cls)!="string"){
cls=obj.getAttribute("class");
}
if(typeof (cls)!="string"){
return false;
}
var _396=cls.split(" ");
for(var i=1;i<arguments.length;i++){
var good=false;
for(var j=0;j<_396.length;j++){
if(_396[j]==arguments[i]){
good=true;
break;
}
}
if(!good){
return false;
}
}
return true;
},escapeHTML:function(s){
return s.replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/</g,"&lt;").replace(/>/g,"&gt;");
},toHTML:function(dom){
return MochiKit.DOM.emitHTML(dom).join("");
},emitHTML:function(dom,lst){
if(typeof (lst)=="undefined"||lst===null){
lst=[];
}
var _39e=[dom];
var self=MochiKit.DOM;
var _3a0=self.escapeHTML;
var _3a1=self.attributeArray;
while(_39e.length){
dom=_39e.pop();
if(typeof (dom)=="string"){
lst.push(dom);
}else{
if(dom.nodeType==1){
lst.push("<"+dom.tagName.toLowerCase());
var _3a2=[];
var _3a3=_3a1(dom);
for(var i=0;i<_3a3.length;i++){
var a=_3a3[i];
_3a2.push([" ",a.name,"=\"",_3a0(a.value),"\""]);
}
_3a2.sort();
for(i=0;i<_3a2.length;i++){
var _3a6=_3a2[i];
for(var j=0;j<_3a6.length;j++){
lst.push(_3a6[j]);
}
}
if(dom.hasChildNodes()){
lst.push(">");
_39e.push("</"+dom.tagName.toLowerCase()+">");
var _3a8=dom.childNodes;
for(i=_3a8.length-1;i>=0;i--){
_39e.push(_3a8[i]);
}
}else{
lst.push("/>");
}
}else{
if(dom.nodeType==3){
lst.push(_3a0(dom.nodeValue));
}
}
}
}
return lst;
},scrapeText:function(node,_3aa){
var rval=[];
(function(node){
var cn=node.childNodes;
if(cn){
for(var i=0;i<cn.length;i++){
arguments.callee.call(this,cn[i]);
}
}
var _3af=node.nodeValue;
if(typeof (_3af)=="string"){
rval.push(_3af);
}
})(MochiKit.DOM.getElement(node));
if(_3aa){
return rval;
}else{
return rval.join("");
}
},removeEmptyTextNodes:function(_3b0){
_3b0=MochiKit.DOM.getElement(_3b0);
for(var i=0;i<_3b0.childNodes.length;i++){
var node=_3b0.childNodes[i];
if(node.nodeType==3&&!/\S/.test(node.nodeValue)){
node.parentNode.removeChild(node);
}
}
},makeClipping:function(_3b3){
_3b3=MochiKit.DOM.getElement(_3b3);
var _3b4=_3b3.style.overflow;
if((MochiKit.Style.getStyle(_3b3,"overflow")||"visible")!="hidden"){
_3b3.style.overflow="hidden";
}
return _3b4;
},undoClipping:function(_3b5,_3b6){
_3b5=MochiKit.DOM.getElement(_3b5);
if(!_3b6){
return;
}
_3b5.style.overflow=_3b6;
},makePositioned:function(_3b7){
_3b7=MochiKit.DOM.getElement(_3b7);
var pos=MochiKit.Style.getStyle(_3b7,"position");
if(pos=="static"||!pos){
_3b7.style.position="relative";
if(/Opera/.test(navigator.userAgent)){
_3b7.style.top=0;
_3b7.style.left=0;
}
}
},undoPositioned:function(_3b9){
_3b9=MochiKit.DOM.getElement(_3b9);
if(_3b9.style.position=="relative"){
_3b9.style.position=_3b9.style.top=_3b9.style.left=_3b9.style.bottom=_3b9.style.right="";
}
},getFirstElementByTagAndClassName:function(_3ba,_3bb,_3bc){
var self=MochiKit.DOM;
if(typeof (_3ba)=="undefined"||_3ba===null){
_3ba="*";
}
if(typeof (_3bc)=="undefined"||_3bc===null){
_3bc=self._document;
}
_3bc=self.getElement(_3bc);
if(_3bc==null){
return null;
}
var _3be=(_3bc.getElementsByTagName(_3ba)||self._document.all);
if(_3be.length<=0){
return null;
}else{
if(typeof (_3bb)=="undefined"||_3bb===null){
return _3be[0];
}
}
for(var i=0;i<_3be.length;i++){
var _3c0=_3be[i];
var cls=_3c0.className;
if(typeof (cls)!="string"){
cls=_3c0.getAttribute("class");
}
if(typeof (cls)=="string"){
var _3c2=cls.split(" ");
for(var j=0;j<_3c2.length;j++){
if(_3c2[j]==_3bb){
return _3c0;
}
}
}
}
return null;
},getFirstParentByTagAndClassName:function(elem,_3c5,_3c6){
var self=MochiKit.DOM;
elem=self.getElement(elem);
if(typeof (_3c5)=="undefined"||_3c5===null){
_3c5="*";
}else{
_3c5=_3c5.toUpperCase();
}
if(typeof (_3c6)=="undefined"||_3c6===null){
_3c6=null;
}
if(elem){
elem=elem.parentNode;
}
while(elem&&elem.tagName){
var _3c8=elem.tagName.toUpperCase();
if((_3c5==="*"||_3c5==_3c8)&&(_3c6===null||self.hasElementClass(elem,_3c6))){
return elem;
}
elem=elem.parentNode;
}
return null;
},isParent:function(_3c9,_3ca){
var self=MochiKit.DOM;
if(typeof (_3c9)=="string"){
_3c9=self.getElement(_3c9);
}
if(typeof (_3ca)=="string"){
_3ca=self.getElement(_3ca);
}
if(_3c9==null||_3ca==null){
return false;
}else{
if(!_3c9.parentNode||_3c9==_3ca){
return false;
}else{
if(_3c9.parentNode==_3ca){
return true;
}else{
return self.isParent(_3c9.parentNode,_3ca);
}
}
}
},__new__:function(win){
var m=MochiKit.Base;
if(typeof (document)!="undefined"){
this._document=document;
var _3ce="http://www.mozilla.org/keymaster/gatekeeper/there.is.only.xul";
this._xhtml=(document.documentElement&&document.createElementNS&&document.documentElement.namespaceURI===_3ce);
}else{
if(MochiKit.MockDOM){
this._document=MochiKit.MockDOM.document;
}
}
this._window=win;
this.domConverters=new m.AdapterRegistry();
var _3cf=this._document.createElement("span");
var _3d0;
if(_3cf&&_3cf.attributes&&_3cf.attributes.length>0){
var _3d1=m.filter;
_3d0=function(node){
return _3d1(_3d0.ignoreAttrFilter,node.attributes);
};
_3d0.ignoreAttr={};
var _3d3=_3cf.attributes;
var _3d4=_3d0.ignoreAttr;
for(var i=0;i<_3d3.length;i++){
var a=_3d3[i];
_3d4[a.name]=a.value;
}
_3d0.ignoreAttrFilter=function(a){
return (_3d0.ignoreAttr[a.name]!=a.value);
};
_3d0.compliant=false;
_3d0.renames={"class":"className","checked":"defaultChecked","usemap":"useMap","for":"htmlFor","readonly":"readOnly","colspan":"colSpan","bgcolor":"bgColor","cellspacing":"cellSpacing","cellpadding":"cellPadding"};
}else{
_3d0=function(node){
return node.attributes;
};
_3d0.compliant=true;
_3d0.ignoreAttr={};
_3d0.renames={};
}
this.attributeArray=_3d0;
var _3d9=function(_3da,arr){
var _3dc=arr[0];
var _3dd=arr[1];
var _3de=_3dd.split(".")[1];
var str="";
str+="if (!MochiKit."+_3de+") { throw new Error(\"";
str+="This function has been deprecated and depends on MochiKit.";
str+=_3de+".\");}";
str+="return "+_3dd+".apply(this, arguments);";
MochiKit[_3da][_3dc]=new Function(str);
};
for(var i=0;i<MochiKit.DOM.DEPRECATED.length;i++){
_3d9("DOM",MochiKit.DOM.DEPRECATED[i]);
}
var _3e0=this.createDOMFunc;
this.UL=_3e0("ul");
this.OL=_3e0("ol");
this.LI=_3e0("li");
this.DL=_3e0("dl");
this.DT=_3e0("dt");
this.DD=_3e0("dd");
this.TD=_3e0("td");
this.TR=_3e0("tr");
this.TBODY=_3e0("tbody");
this.THEAD=_3e0("thead");
this.TFOOT=_3e0("tfoot");
this.TABLE=_3e0("table");
this.TH=_3e0("th");
this.INPUT=_3e0("input");
this.SPAN=_3e0("span");
this.A=_3e0("a");
this.DIV=_3e0("div");
this.IMG=_3e0("img");
this.BUTTON=_3e0("button");
this.TT=_3e0("tt");
this.PRE=_3e0("pre");
this.H1=_3e0("h1");
this.H2=_3e0("h2");
this.H3=_3e0("h3");
this.H4=_3e0("h4");
this.H5=_3e0("h5");
this.H6=_3e0("h6");
this.BR=_3e0("br");
this.HR=_3e0("hr");
this.LABEL=_3e0("label");
this.TEXTAREA=_3e0("textarea");
this.FORM=_3e0("form");
this.P=_3e0("p");
this.SELECT=_3e0("select");
this.OPTION=_3e0("option");
this.OPTGROUP=_3e0("optgroup");
this.LEGEND=_3e0("legend");
this.FIELDSET=_3e0("fieldset");
this.STRONG=_3e0("strong");
this.CANVAS=_3e0("canvas");
this.$=this.getElement;
this.EXPORT_TAGS={":common":this.EXPORT,":all":m.concat(this.EXPORT,this.EXPORT_OK)};
m.nameFunctions(this);
}});
MochiKit.DOM.__new__(((typeof (window)=="undefined")?this:window));
if(MochiKit.__export__){
withWindow=MochiKit.DOM.withWindow;
withDocument=MochiKit.DOM.withDocument;
}
MochiKit.Base._exportSymbols(this,MochiKit.DOM);
MochiKit.Base._deps("Selector",["Base","DOM","Iter"]);
MochiKit.Selector.NAME="MochiKit.Selector";
MochiKit.Selector.VERSION="1.4";
MochiKit.Selector.__repr__=function(){
return "["+this.NAME+" "+this.VERSION+"]";
};
MochiKit.Selector.toString=function(){
return this.__repr__();
};
MochiKit.Selector.EXPORT=["Selector","findChildElements","findDocElements","$$"];
MochiKit.Selector.EXPORT_OK=[];
MochiKit.Selector.Selector=function(_3e1){
this.params={classNames:[],pseudoClassNames:[]};
this.expression=_3e1.toString().replace(/(^\s+|\s+$)/g,"");
this.parseExpression();
this.compileMatcher();
};
MochiKit.Selector.Selector.prototype={__class__:MochiKit.Selector.Selector,parseExpression:function(){
function abort(_3e2){
throw "Parse error in selector: "+_3e2;
}
if(this.expression==""){
abort("empty expression");
}
var repr=MochiKit.Base.repr;
var _3e4=this.params;
var expr=this.expression;
var _3e6,_3e7,_3e8,rest;
while(_3e6=expr.match(/^(.*)\[([a-z0-9_:-]+?)(?:([~\|!^$*]?=)(?:"([^"]*)"|([^\]\s]*)))?\]$/i)){
_3e4.attributes=_3e4.attributes||[];
_3e4.attributes.push({name:_3e6[2],operator:_3e6[3],value:_3e6[4]||_3e6[5]||""});
expr=_3e6[1];
}
if(expr=="*"){
return this.params.wildcard=true;
}
while(_3e6=expr.match(/^([^a-z0-9_-])?([a-z0-9_-]+(?:\([^)]*\))?)(.*)/i)){
_3e7=_3e6[1];
_3e8=_3e6[2];
rest=_3e6[3];
switch(_3e7){
case "#":
_3e4.id=_3e8;
break;
case ".":
_3e4.classNames.push(_3e8);
break;
case ":":
_3e4.pseudoClassNames.push(_3e8);
break;
case "":
case undefined:
_3e4.tagName=_3e8.toUpperCase();
break;
default:
abort(repr(expr));
}
expr=rest;
}
if(expr.length>0){
abort(repr(expr));
}
},buildMatchExpression:function(){
var repr=MochiKit.Base.repr;
var _3eb=this.params;
var _3ec=[];
var _3ed,i;
function childElements(_3ef){
return "MochiKit.Base.filter(function (node) { return node.nodeType == 1; }, "+_3ef+".childNodes)";
}
if(_3eb.wildcard){
_3ec.push("true");
}
if(_3ed=_3eb.id){
_3ec.push("element.id == "+repr(_3ed));
}
if(_3ed=_3eb.tagName){
_3ec.push("element.tagName.toUpperCase() == "+repr(_3ed));
}
if((_3ed=_3eb.classNames).length>0){
for(i=0;i<_3ed.length;i++){
_3ec.push("MochiKit.DOM.hasElementClass(element, "+repr(_3ed[i])+")");
}
}
if((_3ed=_3eb.pseudoClassNames).length>0){
for(i=0;i<_3ed.length;i++){
var _3f0=_3ed[i].match(/^([^(]+)(?:\((.*)\))?$/);
var _3f1=_3f0[1];
var _3f2=_3f0[2];
switch(_3f1){
case "root":
_3ec.push("element.nodeType == 9 || element === element.ownerDocument.documentElement");
break;
case "nth-child":
case "nth-last-child":
case "nth-of-type":
case "nth-last-of-type":
_3f0=_3f2.match(/^((?:(\d+)n\+)?(\d+)|odd|even)$/);
if(!_3f0){
throw "Invalid argument to pseudo element nth-child: "+_3f2;
}
var a,b;
if(_3f0[0]=="odd"){
a=2;
b=1;
}else{
if(_3f0[0]=="even"){
a=2;
b=0;
}else{
a=_3f0[2]&&parseInt(_3f0)||null;
b=parseInt(_3f0[3]);
}
}
_3ec.push("this.nthChild(element,"+a+","+b+","+!!_3f1.match("^nth-last")+","+!!_3f1.match("of-type$")+")");
break;
case "first-child":
_3ec.push("this.nthChild(element, null, 1)");
break;
case "last-child":
_3ec.push("this.nthChild(element, null, 1, true)");
break;
case "first-of-type":
_3ec.push("this.nthChild(element, null, 1, false, true)");
break;
case "last-of-type":
_3ec.push("this.nthChild(element, null, 1, true, true)");
break;
case "only-child":
_3ec.push(childElements("element.parentNode")+".length == 1");
break;
case "only-of-type":
_3ec.push("MochiKit.Base.filter(function (node) { return node.tagName == element.tagName; }, "+childElements("element.parentNode")+").length == 1");
break;
case "empty":
_3ec.push("element.childNodes.length == 0");
break;
case "enabled":
_3ec.push("(this.isUIElement(element) && element.disabled === false)");
break;
case "disabled":
_3ec.push("(this.isUIElement(element) && element.disabled === true)");
break;
case "checked":
_3ec.push("(this.isUIElement(element) && element.checked === true)");
break;
case "not":
var _3f5=new MochiKit.Selector.Selector(_3f2);
_3ec.push("!( "+_3f5.buildMatchExpression()+")");
break;
}
}
}
if(_3ed=_3eb.attributes){
MochiKit.Base.map(function(_3f6){
var _3f7="MochiKit.DOM.getNodeAttribute(element, "+repr(_3f6.name)+")";
var _3f8=function(_3f9){
return _3f7+".split("+repr(_3f9)+")";
};
_3ec.push(_3f7+" != null");
switch(_3f6.operator){
case "=":
_3ec.push(_3f7+" == "+repr(_3f6.value));
break;
case "~=":
_3ec.push("MochiKit.Base.findValue("+_3f8(" ")+", "+repr(_3f6.value)+") > -1");
break;
case "^=":
_3ec.push(_3f7+".substring(0, "+_3f6.value.length+") == "+repr(_3f6.value));
break;
case "$=":
_3ec.push(_3f7+".substring("+_3f7+".length - "+_3f6.value.length+") == "+repr(_3f6.value));
break;
case "*=":
_3ec.push(_3f7+".match("+repr(_3f6.value)+")");
break;
case "|=":
_3ec.push(_3f8("-")+"[0].toUpperCase() == "+repr(_3f6.value.toUpperCase()));
break;
case "!=":
_3ec.push(_3f7+" != "+repr(_3f6.value));
break;
case "":
case undefined:
break;
default:
throw "Unknown operator "+_3f6.operator+" in selector";
}
},_3ed);
}
return _3ec.join(" && ");
},compileMatcher:function(){
var code="return (!element.tagName) ? false : "+this.buildMatchExpression()+";";
this.match=new Function("element",code);
},nthChild:function(_3fb,a,b,_3fe,_3ff){
var _400=MochiKit.Base.filter(function(node){
return node.nodeType==1;
},_3fb.parentNode.childNodes);
if(_3ff){
_400=MochiKit.Base.filter(function(node){
return node.tagName==_3fb.tagName;
},_400);
}
if(_3fe){
_400=MochiKit.Iter.reversed(_400);
}
if(a){
var _403=MochiKit.Base.findIdentical(_400,_3fb);
return ((_403+1-b)/a)%1==0;
}else{
return b==MochiKit.Base.findIdentical(_400,_3fb)+1;
}
},isUIElement:function(_404){
return MochiKit.Base.findValue(["input","button","select","option","textarea","object"],_404.tagName.toLowerCase())>-1;
},findElements:function(_405,axis){
var _407;
if(axis==undefined){
axis="";
}
function inScope(_408,_409){
if(axis==""){
return MochiKit.DOM.isChildNode(_408,_409);
}else{
if(axis==">"){
return _408.parentNode==_409;
}else{
if(axis=="+"){
return _408==nextSiblingElement(_409);
}else{
if(axis=="~"){
var _40a=_409;
while(_40a=nextSiblingElement(_40a)){
if(_408==_40a){
return true;
}
}
return false;
}else{
throw "Invalid axis: "+axis;
}
}
}
}
}
if(_407=MochiKit.DOM.getElement(this.params.id)){
if(this.match(_407)){
if(!_405||inScope(_407,_405)){
return [_407];
}
}
}
function nextSiblingElement(node){
node=node.nextSibling;
while(node&&node.nodeType!=1){
node=node.nextSibling;
}
return node;
}
if(axis==""){
_405=(_405||MochiKit.DOM.currentDocument()).getElementsByTagName(this.params.tagName||"*");
}else{
if(axis==">"){
if(!_405){
throw "> combinator not allowed without preceeding expression";
}
_405=MochiKit.Base.filter(function(node){
return node.nodeType==1;
},_405.childNodes);
}else{
if(axis=="+"){
if(!_405){
throw "+ combinator not allowed without preceeding expression";
}
_405=nextSiblingElement(_405)&&[nextSiblingElement(_405)];
}else{
if(axis=="~"){
if(!_405){
throw "~ combinator not allowed without preceeding expression";
}
var _40d=[];
while(nextSiblingElement(_405)){
_405=nextSiblingElement(_405);
_40d.push(_405);
}
_405=_40d;
}
}
}
}
if(!_405){
return [];
}
var _40e=MochiKit.Base.filter(MochiKit.Base.bind(function(_40f){
return this.match(_40f);
},this),_405);
return _40e;
},repr:function(){
return "Selector("+this.expression+")";
},toString:MochiKit.Base.forwardCall("repr")};
MochiKit.Base.update(MochiKit.Selector,{findChildElements:function(_410,_411){
return MochiKit.Base.flattenArray(MochiKit.Base.map(function(_412){
var _413="";
return MochiKit.Iter.reduce(function(_414,expr){
if(match=expr.match(/^[>+~]$/)){
_413=match[0];
return _414;
}else{
var _416=new MochiKit.Selector.Selector(expr);
var _417=MochiKit.Iter.reduce(function(_418,_419){
return MochiKit.Base.extend(_418,_416.findElements(_419||_410,_413));
},_414,[]);
_413="";
return _417;
}
},_412.replace(/(^\s+|\s+$)/g,"").split(/\s+/),[null]);
},_411));
},findDocElements:function(){
return MochiKit.Selector.findChildElements(MochiKit.DOM.currentDocument(),arguments);
},__new__:function(){
var m=MochiKit.Base;
this.$$=this.findDocElements;
this.EXPORT_TAGS={":common":this.EXPORT,":all":m.concat(this.EXPORT,this.EXPORT_OK)};
m.nameFunctions(this);
}});
MochiKit.Selector.__new__();
MochiKit.Base._exportSymbols(this,MochiKit.Selector);
MochiKit.Base._deps("Style",["Base","DOM"]);
MochiKit.Style.NAME="MochiKit.Style";
MochiKit.Style.VERSION="1.4";
MochiKit.Style.__repr__=function(){
return "["+this.NAME+" "+this.VERSION+"]";
};
MochiKit.Style.toString=function(){
return this.__repr__();
};
MochiKit.Style.EXPORT_OK=[];
MochiKit.Style.EXPORT=["setStyle","setOpacity","getStyle","getElementDimensions","elementDimensions","setElementDimensions","getElementPosition","elementPosition","setElementPosition","setDisplayForElement","hideElement","showElement","getViewportDimensions","getViewportPosition","Dimensions","Coordinates"];
MochiKit.Style.Dimensions=function(w,h){
this.w=w;
this.h=h;
};
MochiKit.Style.Dimensions.prototype.__repr__=function(){
var repr=MochiKit.Base.repr;
return "{w: "+repr(this.w)+", h: "+repr(this.h)+"}";
};
MochiKit.Style.Dimensions.prototype.toString=function(){
return this.__repr__();
};
MochiKit.Style.Coordinates=function(x,y){
this.x=x;
this.y=y;
};
MochiKit.Style.Coordinates.prototype.__repr__=function(){
var repr=MochiKit.Base.repr;
return "{x: "+repr(this.x)+", y: "+repr(this.y)+"}";
};
MochiKit.Style.Coordinates.prototype.toString=function(){
return this.__repr__();
};
MochiKit.Base.update(MochiKit.Style,{getStyle:function(elem,_422){
var dom=MochiKit.DOM;
var d=dom._document;
elem=dom.getElement(elem);
_422=MochiKit.Base.camelize(_422);
if(!elem||elem==d){
return undefined;
}
if(_422=="opacity"&&typeof (elem.filters)!="undefined"){
var _425=(MochiKit.Style.getStyle(elem,"filter")||"").match(/alpha\(opacity=(.*)\)/);
if(_425&&_425[1]){
return parseFloat(_425[1])/100;
}
return 1;
}
if(_422=="float"||_422=="cssFloat"||_422=="styleFloat"){
if(elem.style["float"]){
return elem.style["float"];
}else{
if(elem.style.cssFloat){
return elem.style.cssFloat;
}else{
if(elem.style.styleFloat){
return elem.style.styleFloat;
}else{
return "none";
}
}
}
}
var _426=elem.style?elem.style[_422]:null;
if(!_426){
if(d.defaultView&&d.defaultView.getComputedStyle){
var css=d.defaultView.getComputedStyle(elem,null);
_422=_422.replace(/([A-Z])/g,"-$1").toLowerCase();
_426=css?css.getPropertyValue(_422):null;
}else{
if(elem.currentStyle){
_426=elem.currentStyle[_422];
if(/^\d/.test(_426)&&!/px$/.test(_426)&&_422!="fontWeight"){
var left=elem.style.left;
var _429=elem.runtimeStyle.left;
elem.runtimeStyle.left=elem.currentStyle.left;
elem.style.left=_426||0;
_426=elem.style.pixelLeft+"px";
elem.style.left=left;
elem.runtimeStyle.left=_429;
}
}
}
}
if(_422=="opacity"){
_426=parseFloat(_426);
}
if(/Opera/.test(navigator.userAgent)&&(MochiKit.Base.findValue(["left","top","right","bottom"],_422)!=-1)){
if(MochiKit.Style.getStyle(elem,"position")=="static"){
_426="auto";
}
}
return _426=="auto"?null:_426;
},setStyle:function(elem,_42b){
elem=MochiKit.DOM.getElement(elem);
for(var name in _42b){
switch(name){
case "opacity":
MochiKit.Style.setOpacity(elem,_42b[name]);
break;
case "float":
case "cssFloat":
case "styleFloat":
if(typeof (elem.style["float"])!="undefined"){
elem.style["float"]=_42b[name];
}else{
if(typeof (elem.style.cssFloat)!="undefined"){
elem.style.cssFloat=_42b[name];
}else{
elem.style.styleFloat=_42b[name];
}
}
break;
default:
elem.style[MochiKit.Base.camelize(name)]=_42b[name];
}
}
},setOpacity:function(elem,o){
elem=MochiKit.DOM.getElement(elem);
var self=MochiKit.Style;
if(o==1){
var _430=/Gecko/.test(navigator.userAgent)&&!(/Konqueror|AppleWebKit|KHTML/.test(navigator.userAgent));
elem.style["opacity"]=_430?0.999999:1;
if(/MSIE/.test(navigator.userAgent)){
elem.style["filter"]=self.getStyle(elem,"filter").replace(/alpha\([^\)]*\)/gi,"");
}
}else{
if(o<0.00001){
o=0;
}
elem.style["opacity"]=o;
if(/MSIE/.test(navigator.userAgent)){
elem.style["filter"]=self.getStyle(elem,"filter").replace(/alpha\([^\)]*\)/gi,"")+"alpha(opacity="+o*100+")";
}
}
},getElementPosition:function(elem,_432){
var self=MochiKit.Style;
var dom=MochiKit.DOM;
elem=dom.getElement(elem);
if(!elem||(!(elem.x&&elem.y)&&(!elem.parentNode===null||self.getStyle(elem,"display")=="none"))){
return undefined;
}
var c=new self.Coordinates(0,0);
var box=null;
var _437=null;
var d=MochiKit.DOM._document;
var de=d.documentElement;
var b=d.body;
if(!elem.parentNode&&elem.x&&elem.y){
c.x+=elem.x||0;
c.y+=elem.y||0;
}else{
if(elem.getBoundingClientRect){
box=elem.getBoundingClientRect();
c.x+=box.left+(de.scrollLeft||b.scrollLeft)-(de.clientLeft||0);
c.y+=box.top+(de.scrollTop||b.scrollTop)-(de.clientTop||0);
}else{
if(elem.offsetParent){
c.x+=elem.offsetLeft;
c.y+=elem.offsetTop;
_437=elem.offsetParent;
if(_437!=elem){
while(_437){
c.x+=parseInt(_437.style.borderLeftWidth)||0;
c.y+=parseInt(_437.style.borderTopWidth)||0;
c.x+=_437.offsetLeft;
c.y+=_437.offsetTop;
_437=_437.offsetParent;
}
}
var ua=navigator.userAgent.toLowerCase();
if((typeof (opera)!="undefined"&&parseFloat(opera.version())<9)||(ua.indexOf("AppleWebKit")!=-1&&self.getStyle(elem,"position")=="absolute")){
c.x-=b.offsetLeft;
c.y-=b.offsetTop;
}
if(elem.parentNode){
_437=elem.parentNode;
}else{
_437=null;
}
while(_437){
var _43c=_437.tagName.toUpperCase();
if(_43c==="BODY"||_43c==="HTML"){
break;
}
var disp=self.getStyle(_437,"display");
if(disp.search(/^inline|table-row.*$/i)){
c.x-=_437.scrollLeft;
c.y-=_437.scrollTop;
}
if(_437.parentNode){
_437=_437.parentNode;
}else{
_437=null;
}
}
}
}
}
if(typeof (_432)!="undefined"){
_432=arguments.callee(_432);
if(_432){
c.x-=(_432.x||0);
c.y-=(_432.y||0);
}
}
return c;
},setElementPosition:function(elem,_43f,_440){
elem=MochiKit.DOM.getElement(elem);
if(typeof (_440)=="undefined"){
_440="px";
}
var _441={};
var _442=MochiKit.Base.isUndefinedOrNull;
if(!_442(_43f.x)){
_441["left"]=_43f.x+_440;
}
if(!_442(_43f.y)){
_441["top"]=_43f.y+_440;
}
MochiKit.DOM.updateNodeAttributes(elem,{"style":_441});
},getElementDimensions:function(elem,_444){
var self=MochiKit.Style;
var dom=MochiKit.DOM;
if(typeof (elem.w)=="number"||typeof (elem.h)=="number"){
return new self.Dimensions(elem.w||0,elem.h||0);
}
elem=dom.getElement(elem);
if(!elem){
return undefined;
}
var disp=self.getStyle(elem,"display");
if(disp=="none"||disp==""||typeof (disp)=="undefined"){
var s=elem.style;
var _449=s.visibility;
var _44a=s.position;
var _44b=s.display;
s.visibility="hidden";
s.position="absolute";
s.display="";
var _44c=elem.offsetWidth;
var _44d=elem.offsetHeight;
s.display=_44b;
s.position=_44a;
s.visibility=_449;
}else{
_44c=elem.offsetWidth||0;
_44d=elem.offsetHeight||0;
}
if(_444){
var _44e="colSpan" in elem&&"rowSpan" in elem;
var _44f=(_44e&&elem.parentNode&&self.getStyle(elem.parentNode,"borderCollapse")=="collapse");
if(_44f){
if(/MSIE/.test(navigator.userAgent)){
var _450=elem.previousSibling?0.5:1;
var _451=elem.nextSibling?0.5:1;
}else{
var _450=0.5;
var _451=0.5;
}
}else{
var _450=1;
var _451=1;
}
_44c-=Math.round((parseFloat(self.getStyle(elem,"paddingLeft"))||0)+(parseFloat(self.getStyle(elem,"paddingRight"))||0)+_450*(parseFloat(self.getStyle(elem,"borderLeftWidth"))||0)+_451*(parseFloat(self.getStyle(elem,"borderRightWidth"))||0));
if(_44e){
if(/Gecko|Opera/.test(navigator.userAgent)&&!/Konqueror|AppleWebKit|KHTML/.test(navigator.userAgent)){
var _452=0;
}else{
if(/MSIE/.test(navigator.userAgent)){
var _452=1;
}else{
var _452=_44f?0.5:1;
}
}
}else{
var _452=1;
}
_44d-=Math.round((parseFloat(self.getStyle(elem,"paddingTop"))||0)+(parseFloat(self.getStyle(elem,"paddingBottom"))||0)+_452*((parseFloat(self.getStyle(elem,"borderTopWidth"))||0)+(parseFloat(self.getStyle(elem,"borderBottomWidth"))||0)));
}
return new self.Dimensions(_44c,_44d);
},setElementDimensions:function(elem,_454,_455){
elem=MochiKit.DOM.getElement(elem);
if(typeof (_455)=="undefined"){
_455="px";
}
var _456={};
var _457=MochiKit.Base.isUndefinedOrNull;
if(!_457(_454.w)){
_456["width"]=_454.w+_455;
}
if(!_457(_454.h)){
_456["height"]=_454.h+_455;
}
MochiKit.DOM.updateNodeAttributes(elem,{"style":_456});
},setDisplayForElement:function(_458,_459){
var _45a=MochiKit.Base.extend(null,arguments,1);
var _45b=MochiKit.DOM.getElement;
for(var i=0;i<_45a.length;i++){
_459=_45b(_45a[i]);
if(_459){
_459.style.display=_458;
}
}
},getViewportDimensions:function(){
var d=new MochiKit.Style.Dimensions();
var w=MochiKit.DOM._window;
var b=MochiKit.DOM._document.body;
if(w.innerWidth){
d.w=w.innerWidth;
d.h=w.innerHeight;
}else{
if(b.parentElement.clientWidth){
d.w=b.parentElement.clientWidth;
d.h=b.parentElement.clientHeight;
}else{
if(b&&b.clientWidth){
d.w=b.clientWidth;
d.h=b.clientHeight;
}
}
}
return d;
},getViewportPosition:function(){
var c=new MochiKit.Style.Coordinates(0,0);
var d=MochiKit.DOM._document;
var de=d.documentElement;
var db=d.body;
if(de&&(de.scrollTop||de.scrollLeft)){
c.x=de.scrollLeft;
c.y=de.scrollTop;
}else{
if(db){
c.x=db.scrollLeft;
c.y=db.scrollTop;
}
}
return c;
},__new__:function(){
var m=MochiKit.Base;
this.elementPosition=this.getElementPosition;
this.elementDimensions=this.getElementDimensions;
this.hideElement=m.partial(this.setDisplayForElement,"none");
this.showElement=m.partial(this.setDisplayForElement,"block");
this.EXPORT_TAGS={":common":this.EXPORT,":all":m.concat(this.EXPORT,this.EXPORT_OK)};
m.nameFunctions(this);
}});
MochiKit.Style.__new__();
MochiKit.Base._exportSymbols(this,MochiKit.Style);
MochiKit.Base._deps("LoggingPane",["Base","Logging"]);
MochiKit.LoggingPane.NAME="MochiKit.LoggingPane";
MochiKit.LoggingPane.VERSION="1.4";
MochiKit.LoggingPane.__repr__=function(){
return "["+this.NAME+" "+this.VERSION+"]";
};
MochiKit.LoggingPane.toString=function(){
return this.__repr__();
};
MochiKit.LoggingPane.createLoggingPane=function(_465){
var m=MochiKit.LoggingPane;
_465=!(!_465);
if(m._loggingPane&&m._loggingPane.inline!=_465){
m._loggingPane.closePane();
m._loggingPane=null;
}
if(!m._loggingPane||m._loggingPane.closed){
m._loggingPane=new m.LoggingPane(_465,MochiKit.Logging.logger);
}
return m._loggingPane;
};
MochiKit.LoggingPane.LoggingPane=function(_467,_468){
if(typeof (_468)=="undefined"||_468===null){
_468=MochiKit.Logging.logger;
}
this.logger=_468;
var _469=MochiKit.Base.update;
var _46a=MochiKit.Base.updatetree;
var bind=MochiKit.Base.bind;
var _46c=MochiKit.Base.clone;
var win=window;
var uid="_MochiKit_LoggingPane";
if(typeof (MochiKit.DOM)!="undefined"){
win=MochiKit.DOM.currentWindow();
}
if(!_467){
var url=win.location.href.split("?")[0].replace(/[#:\/.><&%-]/g,"_");
var name=uid+"_"+url;
var nwin=win.open("",name,"dependent,resizable,height=200");
if(!nwin){
alert("Not able to open debugging window due to pop-up blocking.");
return undefined;
}
nwin.document.write("<!DOCTYPE HTML PUBLIC \"-//W3C//DTD HTML 4.0 Transitional//EN\" "+"\"http://www.w3.org/TR/html4/loose.dtd\">"+"<html><head><title>[MochiKit.LoggingPane]</title></head>"+"<body></body></html>");
nwin.document.close();
nwin.document.title+=" "+win.document.title;
win=nwin;
}
var doc=win.document;
this.doc=doc;
var _473=doc.getElementById(uid);
var _474=!!_473;
if(_473&&typeof (_473.loggingPane)!="undefined"){
_473.loggingPane.logger=this.logger;
_473.loggingPane.buildAndApplyFilter();
return _473.loggingPane;
}
if(_474){
var _475;
while((_475=_473.firstChild)){
_473.removeChild(_475);
}
}else{
_473=doc.createElement("div");
_473.id=uid;
}
_473.loggingPane=this;
var _476=doc.createElement("input");
var _477=doc.createElement("input");
var _478=doc.createElement("button");
var _479=doc.createElement("button");
var _47a=doc.createElement("button");
var _47b=doc.createElement("button");
var _47c=doc.createElement("div");
var _47d=doc.createElement("div");
var _47e=uid+"_Listener";
this.colorTable=_46c(this.colorTable);
var _47f=[];
var _480=null;
var _481=function(msg){
var _483=msg.level;
if(typeof (_483)=="number"){
_483=MochiKit.Logging.LogLevel[_483];
}
return _483;
};
var _484=function(msg){
return msg.info.join(" ");
};
var _486=bind(function(msg){
var _488=_481(msg);
var text=_484(msg);
var c=this.colorTable[_488];
var p=doc.createElement("span");
p.className="MochiKit-LogMessage MochiKit-LogLevel-"+_488;
p.style.cssText="margin: 0px; white-space: -moz-pre-wrap; white-space: -o-pre-wrap; white-space: pre-wrap; white-space: pre-line; word-wrap: break-word; wrap-option: emergency; color: "+c;
p.appendChild(doc.createTextNode(_488+": "+text));
_47d.appendChild(p);
_47d.appendChild(doc.createElement("br"));
if(_47c.offsetHeight>_47c.scrollHeight){
_47c.scrollTop=0;
}else{
_47c.scrollTop=_47c.scrollHeight;
}
},this);
var _48c=function(msg){
_47f[_47f.length]=msg;
_486(msg);
};
var _48e=function(){
var _48f,_490;
try{
_48f=new RegExp(_476.value);
_490=new RegExp(_477.value);
}
catch(e){
logDebug("Error in filter regex: "+e.message);
return null;
}
return function(msg){
return (_48f.test(_481(msg))&&_490.test(_484(msg)));
};
};
var _492=function(){
while(_47d.firstChild){
_47d.removeChild(_47d.firstChild);
}
};
var _493=function(){
_47f=[];
_492();
};
var _494=bind(function(){
if(this.closed){
return;
}
this.closed=true;
if(MochiKit.LoggingPane._loggingPane==this){
MochiKit.LoggingPane._loggingPane=null;
}
this.logger.removeListener(_47e);
try{
try{
_473.loggingPane=null;
}
catch(e){
logFatal("Bookmarklet was closed incorrectly.");
}
if(_467){
_473.parentNode.removeChild(_473);
}else{
this.win.close();
}
}
catch(e){
}
},this);
var _495=function(){
_492();
for(var i=0;i<_47f.length;i++){
var msg=_47f[i];
if(_480===null||_480(msg)){
_486(msg);
}
}
};
this.buildAndApplyFilter=function(){
_480=_48e();
_495();
this.logger.removeListener(_47e);
this.logger.addListener(_47e,_480,_48c);
};
var _498=bind(function(){
_47f=this.logger.getMessages();
_495();
},this);
var _499=bind(function(_49a){
_49a=_49a||window.event;
key=_49a.which||_49a.keyCode;
if(key==13){
this.buildAndApplyFilter();
}
},this);
var _49b="display: block; z-index: 1000; left: 0px; bottom: 0px; position: fixed; width: 100%; background-color: white; font: "+this.logFont;
if(_467){
_49b+="; height: 10em; border-top: 2px solid black";
}else{
_49b+="; height: 100%;";
}
_473.style.cssText=_49b;
if(!_474){
doc.body.appendChild(_473);
}
_49b={"cssText":"width: 33%; display: inline; font: "+this.logFont};
_46a(_476,{"value":"FATAL|ERROR|WARNING|INFO|DEBUG","onkeypress":_499,"style":_49b});
_473.appendChild(_476);
_46a(_477,{"value":".*","onkeypress":_499,"style":_49b});
_473.appendChild(_477);
_49b="width: 8%; display:inline; font: "+this.logFont;
_478.appendChild(doc.createTextNode("Filter"));
_478.onclick=bind("buildAndApplyFilter",this);
_478.style.cssText=_49b;
_473.appendChild(_478);
_479.appendChild(doc.createTextNode("Load"));
_479.onclick=_498;
_479.style.cssText=_49b;
_473.appendChild(_479);
_47a.appendChild(doc.createTextNode("Clear"));
_47a.onclick=_493;
_47a.style.cssText=_49b;
_473.appendChild(_47a);
_47b.appendChild(doc.createTextNode("Close"));
_47b.onclick=_494;
_47b.style.cssText=_49b;
_473.appendChild(_47b);
_47c.style.cssText="overflow: auto; width: 100%";
_47d.style.cssText="width: 100%; height: "+(_467?"8em":"100%");
_47c.appendChild(_47d);
_473.appendChild(_47c);
this.buildAndApplyFilter();
_498();
if(_467){
this.win=undefined;
}else{
this.win=win;
}
this.inline=_467;
this.closePane=_494;
this.closed=false;
return this;
};
MochiKit.LoggingPane.LoggingPane.prototype={"logFont":"8pt Verdana,sans-serif","colorTable":{"ERROR":"red","FATAL":"darkred","WARNING":"blue","INFO":"black","DEBUG":"green"}};
MochiKit.LoggingPane.EXPORT_OK=["LoggingPane"];
MochiKit.LoggingPane.EXPORT=["createLoggingPane"];
MochiKit.LoggingPane.__new__=function(){
this.EXPORT_TAGS={":common":this.EXPORT,":all":MochiKit.Base.concat(this.EXPORT,this.EXPORT_OK)};
MochiKit.Base.nameFunctions(this);
MochiKit.LoggingPane._loggingPane=null;
};
MochiKit.LoggingPane.__new__();
MochiKit.Base._exportSymbols(this,MochiKit.LoggingPane);
MochiKit.Base._deps("Color",["Base","DOM","Style"]);
MochiKit.Color.NAME="MochiKit.Color";
MochiKit.Color.VERSION="1.4";
MochiKit.Color.__repr__=function(){
return "["+this.NAME+" "+this.VERSION+"]";
};
MochiKit.Color.toString=function(){
return this.__repr__();
};
MochiKit.Color.Color=function(red,_49d,blue,_49f){
if(typeof (_49f)=="undefined"||_49f===null){
_49f=1;
}
this.rgb={r:red,g:_49d,b:blue,a:_49f};
};
MochiKit.Color.Color.prototype={__class__:MochiKit.Color.Color,colorWithAlpha:function(_4a0){
var rgb=this.rgb;
var m=MochiKit.Color;
return m.Color.fromRGB(rgb.r,rgb.g,rgb.b,_4a0);
},colorWithHue:function(hue){
var hsl=this.asHSL();
hsl.h=hue;
var m=MochiKit.Color;
return m.Color.fromHSL(hsl);
},colorWithSaturation:function(_4a6){
var hsl=this.asHSL();
hsl.s=_4a6;
var m=MochiKit.Color;
return m.Color.fromHSL(hsl);
},colorWithLightness:function(_4a9){
var hsl=this.asHSL();
hsl.l=_4a9;
var m=MochiKit.Color;
return m.Color.fromHSL(hsl);
},darkerColorWithLevel:function(_4ac){
var hsl=this.asHSL();
hsl.l=Math.max(hsl.l-_4ac,0);
var m=MochiKit.Color;
return m.Color.fromHSL(hsl);
},lighterColorWithLevel:function(_4af){
var hsl=this.asHSL();
hsl.l=Math.min(hsl.l+_4af,1);
var m=MochiKit.Color;
return m.Color.fromHSL(hsl);
},blendedColor:function(_4b2,_4b3){
if(typeof (_4b3)=="undefined"||_4b3===null){
_4b3=0.5;
}
var sf=1-_4b3;
var s=this.rgb;
var d=_4b2.rgb;
var df=_4b3;
return MochiKit.Color.Color.fromRGB((s.r*sf)+(d.r*df),(s.g*sf)+(d.g*df),(s.b*sf)+(d.b*df),(s.a*sf)+(d.a*df));
},compareRGB:function(_4b8){
var a=this.asRGB();
var b=_4b8.asRGB();
return MochiKit.Base.compare([a.r,a.g,a.b,a.a],[b.r,b.g,b.b,b.a]);
},isLight:function(){
return this.asHSL().b>0.5;
},isDark:function(){
return (!this.isLight());
},toHSLString:function(){
var c=this.asHSL();
var ccc=MochiKit.Color.clampColorComponent;
var rval=this._hslString;
if(!rval){
var mid=(ccc(c.h,360).toFixed(0)+","+ccc(c.s,100).toPrecision(4)+"%"+","+ccc(c.l,100).toPrecision(4)+"%");
var a=c.a;
if(a>=1){
a=1;
rval="hsl("+mid+")";
}else{
if(a<=0){
a=0;
}
rval="hsla("+mid+","+a+")";
}
this._hslString=rval;
}
return rval;
},toRGBString:function(){
var c=this.rgb;
var ccc=MochiKit.Color.clampColorComponent;
var rval=this._rgbString;
if(!rval){
var mid=(ccc(c.r,255).toFixed(0)+","+ccc(c.g,255).toFixed(0)+","+ccc(c.b,255).toFixed(0));
if(c.a!=1){
rval="rgba("+mid+","+c.a+")";
}else{
rval="rgb("+mid+")";
}
this._rgbString=rval;
}
return rval;
},asRGB:function(){
return MochiKit.Base.clone(this.rgb);
},toHexString:function(){
var m=MochiKit.Color;
var c=this.rgb;
var ccc=MochiKit.Color.clampColorComponent;
var rval=this._hexString;
if(!rval){
rval=("#"+m.toColorPart(ccc(c.r,255))+m.toColorPart(ccc(c.g,255))+m.toColorPart(ccc(c.b,255)));
this._hexString=rval;
}
return rval;
},asHSV:function(){
var hsv=this.hsv;
var c=this.rgb;
if(typeof (hsv)=="undefined"||hsv===null){
hsv=MochiKit.Color.rgbToHSV(this.rgb);
this.hsv=hsv;
}
return MochiKit.Base.clone(hsv);
},asHSL:function(){
var hsl=this.hsl;
var c=this.rgb;
if(typeof (hsl)=="undefined"||hsl===null){
hsl=MochiKit.Color.rgbToHSL(this.rgb);
this.hsl=hsl;
}
return MochiKit.Base.clone(hsl);
},toString:function(){
return this.toRGBString();
},repr:function(){
var c=this.rgb;
var col=[c.r,c.g,c.b,c.a];
return this.__class__.NAME+"("+col.join(", ")+")";
}};
MochiKit.Base.update(MochiKit.Color.Color,{fromRGB:function(red,_4cf,blue,_4d1){
var _4d2=MochiKit.Color.Color;
if(arguments.length==1){
var rgb=red;
red=rgb.r;
_4cf=rgb.g;
blue=rgb.b;
if(typeof (rgb.a)=="undefined"){
_4d1=undefined;
}else{
_4d1=rgb.a;
}
}
return new _4d2(red,_4cf,blue,_4d1);
},fromHSL:function(hue,_4d5,_4d6,_4d7){
var m=MochiKit.Color;
return m.Color.fromRGB(m.hslToRGB.apply(m,arguments));
},fromHSV:function(hue,_4da,_4db,_4dc){
var m=MochiKit.Color;
return m.Color.fromRGB(m.hsvToRGB.apply(m,arguments));
},fromName:function(name){
var _4df=MochiKit.Color.Color;
if(name.charAt(0)=="\""){
name=name.substr(1,name.length-2);
}
var _4e0=_4df._namedColors[name.toLowerCase()];
if(typeof (_4e0)=="string"){
return _4df.fromHexString(_4e0);
}else{
if(name=="transparent"){
return _4df.transparentColor();
}
}
return null;
},fromString:function(_4e1){
var self=MochiKit.Color.Color;
var _4e3=_4e1.substr(0,3);
if(_4e3=="rgb"){
return self.fromRGBString(_4e1);
}else{
if(_4e3=="hsl"){
return self.fromHSLString(_4e1);
}else{
if(_4e1.charAt(0)=="#"){
return self.fromHexString(_4e1);
}
}
}
return self.fromName(_4e1);
},fromHexString:function(_4e4){
if(_4e4.charAt(0)=="#"){
_4e4=_4e4.substring(1);
}
var _4e5=[];
var i,hex;
if(_4e4.length==3){
for(i=0;i<3;i++){
hex=_4e4.substr(i,1);
_4e5.push(parseInt(hex+hex,16)/255);
}
}else{
for(i=0;i<6;i+=2){
hex=_4e4.substr(i,2);
_4e5.push(parseInt(hex,16)/255);
}
}
var _4e8=MochiKit.Color.Color;
return _4e8.fromRGB.apply(_4e8,_4e5);
},_fromColorString:function(pre,_4ea,_4eb,_4ec){
if(_4ec.indexOf(pre)===0){
_4ec=_4ec.substring(_4ec.indexOf("(",3)+1,_4ec.length-1);
}
var _4ed=_4ec.split(/\s*,\s*/);
var _4ee=[];
for(var i=0;i<_4ed.length;i++){
var c=_4ed[i];
var val;
var _4f2=c.substring(c.length-3);
if(c.charAt(c.length-1)=="%"){
val=0.01*parseFloat(c.substring(0,c.length-1));
}else{
if(_4f2=="deg"){
val=parseFloat(c)/360;
}else{
if(_4f2=="rad"){
val=parseFloat(c)/(Math.PI*2);
}else{
val=_4eb[i]*parseFloat(c);
}
}
}
_4ee.push(val);
}
return this[_4ea].apply(this,_4ee);
},fromComputedStyle:function(elem,_4f4){
var d=MochiKit.DOM;
var cls=MochiKit.Color.Color;
for(elem=d.getElement(elem);elem;elem=elem.parentNode){
var _4f7=MochiKit.Style.getStyle.apply(d,arguments);
if(!_4f7){
continue;
}
var _4f8=cls.fromString(_4f7);
if(!_4f8){
break;
}
if(_4f8.asRGB().a>0){
return _4f8;
}
}
return null;
},fromBackground:function(elem){
var cls=MochiKit.Color.Color;
return cls.fromComputedStyle(elem,"backgroundColor","background-color")||cls.whiteColor();
},fromText:function(elem){
var cls=MochiKit.Color.Color;
return cls.fromComputedStyle(elem,"color","color")||cls.blackColor();
},namedColors:function(){
return MochiKit.Base.clone(MochiKit.Color.Color._namedColors);
}});
MochiKit.Base.update(MochiKit.Color,{clampColorComponent:function(v,_4fe){
v*=_4fe;
if(v<0){
return 0;
}else{
if(v>_4fe){
return _4fe;
}else{
return v;
}
}
},_hslValue:function(n1,n2,hue){
if(hue>6){
hue-=6;
}else{
if(hue<0){
hue+=6;
}
}
var val;
if(hue<1){
val=n1+(n2-n1)*hue;
}else{
if(hue<3){
val=n2;
}else{
if(hue<4){
val=n1+(n2-n1)*(4-hue);
}else{
val=n1;
}
}
}
return val;
},hsvToRGB:function(hue,_504,_505,_506){
if(arguments.length==1){
var hsv=hue;
hue=hsv.h;
_504=hsv.s;
_505=hsv.v;
_506=hsv.a;
}
var red;
var _509;
var blue;
if(_504===0){
red=_505;
_509=_505;
blue=_505;
}else{
var i=Math.floor(hue*6);
var f=(hue*6)-i;
var p=_505*(1-_504);
var q=_505*(1-(_504*f));
var t=_505*(1-(_504*(1-f)));
switch(i){
case 1:
red=q;
_509=_505;
blue=p;
break;
case 2:
red=p;
_509=_505;
blue=t;
break;
case 3:
red=p;
_509=q;
blue=_505;
break;
case 4:
red=t;
_509=p;
blue=_505;
break;
case 5:
red=_505;
_509=p;
blue=q;
break;
case 6:
case 0:
red=_505;
_509=t;
blue=p;
break;
}
}
return {r:red,g:_509,b:blue,a:_506};
},hslToRGB:function(hue,_511,_512,_513){
if(arguments.length==1){
var hsl=hue;
hue=hsl.h;
_511=hsl.s;
_512=hsl.l;
_513=hsl.a;
}
var red;
var _516;
var blue;
if(_511===0){
red=_512;
_516=_512;
blue=_512;
}else{
var m2;
if(_512<=0.5){
m2=_512*(1+_511);
}else{
m2=_512+_511-(_512*_511);
}
var m1=(2*_512)-m2;
var f=MochiKit.Color._hslValue;
var h6=hue*6;
red=f(m1,m2,h6+2);
_516=f(m1,m2,h6);
blue=f(m1,m2,h6-2);
}
return {r:red,g:_516,b:blue,a:_513};
},rgbToHSV:function(red,_51d,blue,_51f){
if(arguments.length==1){
var rgb=red;
red=rgb.r;
_51d=rgb.g;
blue=rgb.b;
_51f=rgb.a;
}
var max=Math.max(Math.max(red,_51d),blue);
var min=Math.min(Math.min(red,_51d),blue);
var hue;
var _524;
var _525=max;
if(min==max){
hue=0;
_524=0;
}else{
var _526=(max-min);
_524=_526/max;
if(red==max){
hue=(_51d-blue)/_526;
}else{
if(_51d==max){
hue=2+((blue-red)/_526);
}else{
hue=4+((red-_51d)/_526);
}
}
hue/=6;
if(hue<0){
hue+=1;
}
if(hue>1){
hue-=1;
}
}
return {h:hue,s:_524,v:_525,a:_51f};
},rgbToHSL:function(red,_528,blue,_52a){
if(arguments.length==1){
var rgb=red;
red=rgb.r;
_528=rgb.g;
blue=rgb.b;
_52a=rgb.a;
}
var max=Math.max(red,Math.max(_528,blue));
var min=Math.min(red,Math.min(_528,blue));
var hue;
var _52f;
var _530=(max+min)/2;
var _531=max-min;
if(_531===0){
hue=0;
_52f=0;
}else{
if(_530<=0.5){
_52f=_531/(max+min);
}else{
_52f=_531/(2-max-min);
}
if(red==max){
hue=(_528-blue)/_531;
}else{
if(_528==max){
hue=2+((blue-red)/_531);
}else{
hue=4+((red-_528)/_531);
}
}
hue/=6;
if(hue<0){
hue+=1;
}
if(hue>1){
hue-=1;
}
}
return {h:hue,s:_52f,l:_530,a:_52a};
},toColorPart:function(num){
num=Math.round(num);
var _533=num.toString(16);
if(num<16){
return "0"+_533;
}
return _533;
},__new__:function(){
var m=MochiKit.Base;
this.Color.fromRGBString=m.bind(this.Color._fromColorString,this.Color,"rgb","fromRGB",[1/255,1/255,1/255,1]);
this.Color.fromHSLString=m.bind(this.Color._fromColorString,this.Color,"hsl","fromHSL",[1/360,0.01,0.01,1]);
var _535=1/3;
var _536={black:[0,0,0],blue:[0,0,1],brown:[0.6,0.4,0.2],cyan:[0,1,1],darkGray:[_535,_535,_535],gray:[0.5,0.5,0.5],green:[0,1,0],lightGray:[2*_535,2*_535,2*_535],magenta:[1,0,1],orange:[1,0.5,0],purple:[0.5,0,0.5],red:[1,0,0],transparent:[0,0,0,0],white:[1,1,1],yellow:[1,1,0]};
var _537=function(name,r,g,b,a){
var rval=this.fromRGB(r,g,b,a);
this[name]=function(){
return rval;
};
return rval;
};
for(var k in _536){
var name=k+"Color";
var _540=m.concat([_537,this.Color,name],_536[k]);
this.Color[name]=m.bind.apply(null,_540);
}
var _541=function(){
for(var i=0;i<arguments.length;i++){
if(!(arguments[i] instanceof MochiKit.Color.Color)){
return false;
}
}
return true;
};
var _543=function(a,b){
return a.compareRGB(b);
};
m.nameFunctions(this);
m.registerComparator(this.Color.NAME,_541,_543);
this.EXPORT_TAGS={":common":this.EXPORT,":all":m.concat(this.EXPORT,this.EXPORT_OK)};
}});
MochiKit.Color.EXPORT=["Color"];
MochiKit.Color.EXPORT_OK=["clampColorComponent","rgbToHSL","hslToRGB","rgbToHSV","hsvToRGB","toColorPart"];
MochiKit.Color.__new__();
MochiKit.Base._exportSymbols(this,MochiKit.Color);
MochiKit.Color.Color._namedColors={aliceblue:"#f0f8ff",antiquewhite:"#faebd7",aqua:"#00ffff",aquamarine:"#7fffd4",azure:"#f0ffff",beige:"#f5f5dc",bisque:"#ffe4c4",black:"#000000",blanchedalmond:"#ffebcd",blue:"#0000ff",blueviolet:"#8a2be2",brown:"#a52a2a",burlywood:"#deb887",cadetblue:"#5f9ea0",chartreuse:"#7fff00",chocolate:"#d2691e",coral:"#ff7f50",cornflowerblue:"#6495ed",cornsilk:"#fff8dc",crimson:"#dc143c",cyan:"#00ffff",darkblue:"#00008b",darkcyan:"#008b8b",darkgoldenrod:"#b8860b",darkgray:"#a9a9a9",darkgreen:"#006400",darkgrey:"#a9a9a9",darkkhaki:"#bdb76b",darkmagenta:"#8b008b",darkolivegreen:"#556b2f",darkorange:"#ff8c00",darkorchid:"#9932cc",darkred:"#8b0000",darksalmon:"#e9967a",darkseagreen:"#8fbc8f",darkslateblue:"#483d8b",darkslategray:"#2f4f4f",darkslategrey:"#2f4f4f",darkturquoise:"#00ced1",darkviolet:"#9400d3",deeppink:"#ff1493",deepskyblue:"#00bfff",dimgray:"#696969",dimgrey:"#696969",dodgerblue:"#1e90ff",firebrick:"#b22222",floralwhite:"#fffaf0",forestgreen:"#228b22",fuchsia:"#ff00ff",gainsboro:"#dcdcdc",ghostwhite:"#f8f8ff",gold:"#ffd700",goldenrod:"#daa520",gray:"#808080",green:"#008000",greenyellow:"#adff2f",grey:"#808080",honeydew:"#f0fff0",hotpink:"#ff69b4",indianred:"#cd5c5c",indigo:"#4b0082",ivory:"#fffff0",khaki:"#f0e68c",lavender:"#e6e6fa",lavenderblush:"#fff0f5",lawngreen:"#7cfc00",lemonchiffon:"#fffacd",lightblue:"#add8e6",lightcoral:"#f08080",lightcyan:"#e0ffff",lightgoldenrodyellow:"#fafad2",lightgray:"#d3d3d3",lightgreen:"#90ee90",lightgrey:"#d3d3d3",lightpink:"#ffb6c1",lightsalmon:"#ffa07a",lightseagreen:"#20b2aa",lightskyblue:"#87cefa",lightslategray:"#778899",lightslategrey:"#778899",lightsteelblue:"#b0c4de",lightyellow:"#ffffe0",lime:"#00ff00",limegreen:"#32cd32",linen:"#faf0e6",magenta:"#ff00ff",maroon:"#800000",mediumaquamarine:"#66cdaa",mediumblue:"#0000cd",mediumorchid:"#ba55d3",mediumpurple:"#9370db",mediumseagreen:"#3cb371",mediumslateblue:"#7b68ee",mediumspringgreen:"#00fa9a",mediumturquoise:"#48d1cc",mediumvioletred:"#c71585",midnightblue:"#191970",mintcream:"#f5fffa",mistyrose:"#ffe4e1",moccasin:"#ffe4b5",navajowhite:"#ffdead",navy:"#000080",oldlace:"#fdf5e6",olive:"#808000",olivedrab:"#6b8e23",orange:"#ffa500",orangered:"#ff4500",orchid:"#da70d6",palegoldenrod:"#eee8aa",palegreen:"#98fb98",paleturquoise:"#afeeee",palevioletred:"#db7093",papayawhip:"#ffefd5",peachpuff:"#ffdab9",peru:"#cd853f",pink:"#ffc0cb",plum:"#dda0dd",powderblue:"#b0e0e6",purple:"#800080",red:"#ff0000",rosybrown:"#bc8f8f",royalblue:"#4169e1",saddlebrown:"#8b4513",salmon:"#fa8072",sandybrown:"#f4a460",seagreen:"#2e8b57",seashell:"#fff5ee",sienna:"#a0522d",silver:"#c0c0c0",skyblue:"#87ceeb",slateblue:"#6a5acd",slategray:"#708090",slategrey:"#708090",snow:"#fffafa",springgreen:"#00ff7f",steelblue:"#4682b4",tan:"#d2b48c",teal:"#008080",thistle:"#d8bfd8",tomato:"#ff6347",turquoise:"#40e0d0",violet:"#ee82ee",wheat:"#f5deb3",white:"#ffffff",whitesmoke:"#f5f5f5",yellow:"#ffff00",yellowgreen:"#9acd32"};
MochiKit.Base._deps("Signal",["Base","DOM","Style"]);
MochiKit.Signal.NAME="MochiKit.Signal";
MochiKit.Signal.VERSION="1.4";
MochiKit.Signal._observers=[];
MochiKit.Signal.Event=function(src,e){
this._event=e||window.event;
this._src=src;
};
MochiKit.Base.update(MochiKit.Signal.Event.prototype,{__repr__:function(){
var repr=MochiKit.Base.repr;
var str="{event(): "+repr(this.event())+", src(): "+repr(this.src())+", type(): "+repr(this.type())+", target(): "+repr(this.target());
if(this.type()&&this.type().indexOf("key")===0||this.type().indexOf("mouse")===0||this.type().indexOf("click")!=-1||this.type()=="contextmenu"){
str+=", modifier(): "+"{alt: "+repr(this.modifier().alt)+", ctrl: "+repr(this.modifier().ctrl)+", meta: "+repr(this.modifier().meta)+", shift: "+repr(this.modifier().shift)+", any: "+repr(this.modifier().any)+"}";
}
if(this.type()&&this.type().indexOf("key")===0){
str+=", key(): {code: "+repr(this.key().code)+", string: "+repr(this.key().string)+"}";
}
if(this.type()&&(this.type().indexOf("mouse")===0||this.type().indexOf("click")!=-1||this.type()=="contextmenu")){
str+=", mouse(): {page: "+repr(this.mouse().page)+", client: "+repr(this.mouse().client);
if(this.type()!="mousemove"&&this.type()!="mousewheel"){
str+=", button: {left: "+repr(this.mouse().button.left)+", middle: "+repr(this.mouse().button.middle)+", right: "+repr(this.mouse().button.right)+"}";
}
if(this.type()=="mousewheel"){
str+=", wheel: "+repr(this.mouse().wheel);
}
str+="}";
}
if(this.type()=="mouseover"||this.type()=="mouseout"||this.type()=="mouseenter"||this.type()=="mouseleave"){
str+=", relatedTarget(): "+repr(this.relatedTarget());
}
str+="}";
return str;
},toString:function(){
return this.__repr__();
},src:function(){
return this._src;
},event:function(){
return this._event;
},type:function(){
if(this._event.type==="DOMMouseScroll"){
return "mousewheel";
}else{
return this._event.type||undefined;
}
},target:function(){
return this._event.target||this._event.srcElement;
},_relatedTarget:null,relatedTarget:function(){
if(this._relatedTarget!==null){
return this._relatedTarget;
}
var elem=null;
if(this.type()=="mouseover"||this.type()=="mouseenter"){
elem=(this._event.relatedTarget||this._event.fromElement);
}else{
if(this.type()=="mouseout"||this.type()=="mouseleave"){
elem=(this._event.relatedTarget||this._event.toElement);
}
}
if(elem!==null){
this._relatedTarget=elem;
return elem;
}
return undefined;
},_modifier:null,modifier:function(){
if(this._modifier!==null){
return this._modifier;
}
var m={};
m.alt=this._event.altKey;
m.ctrl=this._event.ctrlKey;
m.meta=this._event.metaKey||false;
m.shift=this._event.shiftKey;
m.any=m.alt||m.ctrl||m.shift||m.meta;
this._modifier=m;
return m;
},_key:null,key:function(){
if(this._key!==null){
return this._key;
}
var k={};
if(this.type()&&this.type().indexOf("key")===0){
if(this.type()=="keydown"||this.type()=="keyup"){
k.code=this._event.keyCode;
k.string=(MochiKit.Signal._specialKeys[k.code]||"KEY_UNKNOWN");
this._key=k;
return k;
}else{
if(this.type()=="keypress"){
k.code=0;
k.string="";
if(typeof (this._event.charCode)!="undefined"&&this._event.charCode!==0&&!MochiKit.Signal._specialMacKeys[this._event.charCode]){
k.code=this._event.charCode;
k.string=String.fromCharCode(k.code);
}else{
if(this._event.keyCode&&typeof (this._event.charCode)=="undefined"){
k.code=this._event.keyCode;
k.string=String.fromCharCode(k.code);
}
}
this._key=k;
return k;
}
}
}
return undefined;
},_mouse:null,mouse:function(){
if(this._mouse!==null){
return this._mouse;
}
var m={};
var e=this._event;
if(this.type()&&(this.type().indexOf("mouse")===0||this.type().indexOf("click")!=-1||this.type()=="contextmenu")){
m.client=new MochiKit.Style.Coordinates(0,0);
if(e.clientX||e.clientY){
m.client.x=(!e.clientX||e.clientX<0)?0:e.clientX;
m.client.y=(!e.clientY||e.clientY<0)?0:e.clientY;
}
m.page=new MochiKit.Style.Coordinates(0,0);
if(e.pageX||e.pageY){
m.page.x=(!e.pageX||e.pageX<0)?0:e.pageX;
m.page.y=(!e.pageY||e.pageY<0)?0:e.pageY;
}else{
var de=MochiKit.DOM._document.documentElement;
var b=MochiKit.DOM._document.body;
m.page.x=e.clientX+(de.scrollLeft||b.scrollLeft)-(de.clientLeft||0);
m.page.y=e.clientY+(de.scrollTop||b.scrollTop)-(de.clientTop||0);
}
if(this.type()!="mousemove"&&this.type()!="mousewheel"){
m.button={};
m.button.left=false;
m.button.right=false;
m.button.middle=false;
if(e.which){
m.button.left=(e.which==1);
m.button.middle=(e.which==2);
m.button.right=(e.which==3);
}else{
m.button.left=!!(e.button&1);
m.button.right=!!(e.button&2);
m.button.middle=!!(e.button&4);
}
}
if(this.type()=="mousewheel"){
m.wheel=new MochiKit.Style.Coordinates(0,0);
if(e.wheelDeltaX||e.wheelDeltaY){
m.wheel.x=e.wheelDeltaX/-40||0;
m.wheel.y=e.wheelDeltaY/-40||0;
}else{
if(e.wheelDelta){
m.wheel.y=e.wheelDelta/-40;
}else{
m.wheel.y=e.detail||0;
}
}
}
this._mouse=m;
return m;
}
return undefined;
},stop:function(){
this.stopPropagation();
this.preventDefault();
},stopPropagation:function(){
if(this._event.stopPropagation){
this._event.stopPropagation();
}else{
this._event.cancelBubble=true;
}
},preventDefault:function(){
if(this._event.preventDefault){
this._event.preventDefault();
}else{
if(this._confirmUnload===null){
this._event.returnValue=false;
}
}
},_confirmUnload:null,confirmUnload:function(msg){
if(this.type()=="beforeunload"){
this._confirmUnload=msg;
this._event.returnValue=msg;
}
}});
MochiKit.Signal._specialMacKeys={3:"KEY_ENTER",63289:"KEY_NUM_PAD_CLEAR",63276:"KEY_PAGE_UP",63277:"KEY_PAGE_DOWN",63275:"KEY_END",63273:"KEY_HOME",63234:"KEY_ARROW_LEFT",63232:"KEY_ARROW_UP",63235:"KEY_ARROW_RIGHT",63233:"KEY_ARROW_DOWN",63302:"KEY_INSERT",63272:"KEY_DELETE"};
(function(){
var _552=MochiKit.Signal._specialMacKeys;
for(i=63236;i<=63242;i++){
_552[i]="KEY_F"+(i-63236+1);
}
})();
MochiKit.Signal._specialKeys={8:"KEY_BACKSPACE",9:"KEY_TAB",12:"KEY_NUM_PAD_CLEAR",13:"KEY_ENTER",16:"KEY_SHIFT",17:"KEY_CTRL",18:"KEY_ALT",19:"KEY_PAUSE",20:"KEY_CAPS_LOCK",27:"KEY_ESCAPE",32:"KEY_SPACEBAR",33:"KEY_PAGE_UP",34:"KEY_PAGE_DOWN",35:"KEY_END",36:"KEY_HOME",37:"KEY_ARROW_LEFT",38:"KEY_ARROW_UP",39:"KEY_ARROW_RIGHT",40:"KEY_ARROW_DOWN",44:"KEY_PRINT_SCREEN",45:"KEY_INSERT",46:"KEY_DELETE",59:"KEY_SEMICOLON",91:"KEY_WINDOWS_LEFT",92:"KEY_WINDOWS_RIGHT",93:"KEY_SELECT",106:"KEY_NUM_PAD_ASTERISK",107:"KEY_NUM_PAD_PLUS_SIGN",109:"KEY_NUM_PAD_HYPHEN-MINUS",110:"KEY_NUM_PAD_FULL_STOP",111:"KEY_NUM_PAD_SOLIDUS",144:"KEY_NUM_LOCK",145:"KEY_SCROLL_LOCK",186:"KEY_SEMICOLON",187:"KEY_EQUALS_SIGN",188:"KEY_COMMA",189:"KEY_HYPHEN-MINUS",190:"KEY_FULL_STOP",191:"KEY_SOLIDUS",192:"KEY_GRAVE_ACCENT",219:"KEY_LEFT_SQUARE_BRACKET",220:"KEY_REVERSE_SOLIDUS",221:"KEY_RIGHT_SQUARE_BRACKET",222:"KEY_APOSTROPHE"};
(function(){
var _553=MochiKit.Signal._specialKeys;
for(var i=48;i<=57;i++){
_553[i]="KEY_"+(i-48);
}
for(i=65;i<=90;i++){
_553[i]="KEY_"+String.fromCharCode(i);
}
for(i=96;i<=105;i++){
_553[i]="KEY_NUM_PAD_"+(i-96);
}
for(i=112;i<=123;i++){
_553[i]="KEY_F"+(i-112+1);
}
})();
MochiKit.Signal.Ident=function(_555){
this.source=_555.source;
this.signal=_555.signal;
this.listener=_555.listener;
this.isDOM=_555.isDOM;
this.objOrFunc=_555.objOrFunc;
this.funcOrStr=_555.funcOrStr;
this.connected=_555.connected;
};
MochiKit.Signal.Ident.prototype={};
MochiKit.Base.update(MochiKit.Signal,{__repr__:function(){
return "["+this.NAME+" "+this.VERSION+"]";
},toString:function(){
return this.__repr__();
},_unloadCache:function(){
var self=MochiKit.Signal;
var _557=self._observers;
for(var i=0;i<_557.length;i++){
if(_557[i].signal!=="onload"&&_557[i].signal!=="onunload"){
self._disconnect(_557[i]);
}
}
},_listener:function(src,sig,func,obj,_55d){
var self=MochiKit.Signal;
var E=self.Event;
if(!_55d){
if(typeof (func.im_self)=="undefined"){
return MochiKit.Base.bindLate(func,obj);
}else{
return func;
}
}
obj=obj||src;
if(typeof (func)=="string"){
if(sig==="onload"||sig==="onunload"){
return function(_560){
obj[func].apply(obj,[new E(src,_560)]);
var _561=new MochiKit.Signal.Ident({source:src,signal:sig,objOrFunc:obj,funcOrStr:func});
MochiKit.Signal._disconnect(_561);
};
}else{
return function(_562){
obj[func].apply(obj,[new E(src,_562)]);
};
}
}else{
if(sig==="onload"||sig==="onunload"){
return function(_563){
func.apply(obj,[new E(src,_563)]);
var _564=new MochiKit.Signal.Ident({source:src,signal:sig,objOrFunc:func});
MochiKit.Signal._disconnect(_564);
};
}else{
return function(_565){
func.apply(obj,[new E(src,_565)]);
};
}
}
},_browserAlreadyHasMouseEnterAndLeave:function(){
return /MSIE/.test(navigator.userAgent);
},_browserLacksMouseWheelEvent:function(){
return /Gecko\//.test(navigator.userAgent);
},_mouseEnterListener:function(src,sig,func,obj){
var E=MochiKit.Signal.Event;
return function(_56b){
var e=new E(src,_56b);
try{
e.relatedTarget().nodeName;
}
catch(err){
return;
}
e.stop();
if(MochiKit.DOM.isChildNode(e.relatedTarget(),src)){
return;
}
e.type=function(){
return sig;
};
if(typeof (func)=="string"){
return obj[func].apply(obj,[e]);
}else{
return func.apply(obj,[e]);
}
};
},_getDestPair:function(_56d,_56e){
var obj=null;
var func=null;
if(typeof (_56e)!="undefined"){
obj=_56d;
func=_56e;
if(typeof (_56e)=="string"){
if(typeof (_56d[_56e])!="function"){
throw new Error("'funcOrStr' must be a function on 'objOrFunc'");
}
}else{
if(typeof (_56e)!="function"){
throw new Error("'funcOrStr' must be a function or string");
}
}
}else{
if(typeof (_56d)!="function"){
throw new Error("'objOrFunc' must be a function if 'funcOrStr' is not given");
}else{
func=_56d;
}
}
return [obj,func];
},connect:function(src,sig,_573,_574){
src=MochiKit.DOM.getElement(src);
var self=MochiKit.Signal;
if(typeof (sig)!="string"){
throw new Error("'sig' must be a string");
}
var _576=self._getDestPair(_573,_574);
var obj=_576[0];
var func=_576[1];
if(typeof (obj)=="undefined"||obj===null){
obj=src;
}
var _579=!!(src.addEventListener||src.attachEvent);
if(_579&&(sig==="onmouseenter"||sig==="onmouseleave")&&!self._browserAlreadyHasMouseEnterAndLeave()){
var _57a=self._mouseEnterListener(src,sig.substr(2),func,obj);
if(sig==="onmouseenter"){
sig="onmouseover";
}else{
sig="onmouseout";
}
}else{
if(_579&&sig=="onmousewheel"&&self._browserLacksMouseWheelEvent()){
var _57a=self._listener(src,sig,func,obj,_579);
sig="onDOMMouseScroll";
}else{
var _57a=self._listener(src,sig,func,obj,_579);
}
}
if(src.addEventListener){
src.addEventListener(sig.substr(2),_57a,false);
}else{
if(src.attachEvent){
src.attachEvent(sig,_57a);
}
}
var _57b=new MochiKit.Signal.Ident({source:src,signal:sig,listener:_57a,isDOM:_579,objOrFunc:_573,funcOrStr:_574,connected:true});
self._observers.push(_57b);
if(!_579&&typeof (src.__connect__)=="function"){
var args=MochiKit.Base.extend([_57b],arguments,1);
src.__connect__.apply(src,args);
}
return _57b;
},_disconnect:function(_57d){
if(!_57d.connected){
return;
}
_57d.connected=false;
var src=_57d.source;
var sig=_57d.signal;
var _580=_57d.listener;
if(!_57d.isDOM){
if(typeof (src.__disconnect__)=="function"){
src.__disconnect__(_57d,sig,_57d.objOrFunc,_57d.funcOrStr);
}
return;
}
if(src.removeEventListener){
src.removeEventListener(sig.substr(2),_580,false);
}else{
if(src.detachEvent){
src.detachEvent(sig,_580);
}else{
throw new Error("'src' must be a DOM element");
}
}
},disconnect:function(_581){
var self=MochiKit.Signal;
var _583=self._observers;
var m=MochiKit.Base;
if(arguments.length>1){
var src=MochiKit.DOM.getElement(arguments[0]);
var sig=arguments[1];
var obj=arguments[2];
var func=arguments[3];
for(var i=_583.length-1;i>=0;i--){
var o=_583[i];
if(o.source===src&&o.signal===sig&&o.objOrFunc===obj&&o.funcOrStr===func){
self._disconnect(o);
if(!self._lock){
_583.splice(i,1);
}else{
self._dirty=true;
}
return true;
}
}
}else{
var idx=m.findIdentical(_583,_581);
if(idx>=0){
self._disconnect(_581);
if(!self._lock){
_583.splice(idx,1);
}else{
self._dirty=true;
}
return true;
}
}
return false;
},disconnectAllTo:function(_58c,_58d){
var self=MochiKit.Signal;
var _58f=self._observers;
var _590=self._disconnect;
var _591=self._lock;
var _592=self._dirty;
if(typeof (_58d)==="undefined"){
_58d=null;
}
for(var i=_58f.length-1;i>=0;i--){
var _594=_58f[i];
if(_594.objOrFunc===_58c&&(_58d===null||_594.funcOrStr===_58d)){
_590(_594);
if(_591){
_592=true;
}else{
_58f.splice(i,1);
}
}
}
self._dirty=_592;
},disconnectAll:function(src,sig){
src=MochiKit.DOM.getElement(src);
var m=MochiKit.Base;
var _598=m.flattenArguments(m.extend(null,arguments,1));
var self=MochiKit.Signal;
var _59a=self._disconnect;
var _59b=self._observers;
var i,_59d;
var _59e=self._lock;
var _59f=self._dirty;
if(_598.length===0){
for(i=_59b.length-1;i>=0;i--){
_59d=_59b[i];
if(_59d.source===src){
_59a(_59d);
if(!_59e){
_59b.splice(i,1);
}else{
_59f=true;
}
}
}
}else{
var sigs={};
for(i=0;i<_598.length;i++){
sigs[_598[i]]=true;
}
for(i=_59b.length-1;i>=0;i--){
_59d=_59b[i];
if(_59d.source===src&&_59d.signal in sigs){
_59a(_59d);
if(!_59e){
_59b.splice(i,1);
}else{
_59f=true;
}
}
}
}
self._dirty=_59f;
},signal:function(src,sig){
var self=MochiKit.Signal;
var _5a4=self._observers;
src=MochiKit.DOM.getElement(src);
var args=MochiKit.Base.extend(null,arguments,2);
var _5a6=[];
self._lock=true;
for(var i=0;i<_5a4.length;i++){
var _5a8=_5a4[i];
if(_5a8.source===src&&_5a8.signal===sig&&_5a8.connected){
try{
_5a8.listener.apply(src,args);
}
catch(e){
_5a6.push(e);
}
}
}
self._lock=false;
if(self._dirty){
self._dirty=false;
for(var i=_5a4.length-1;i>=0;i--){
if(!_5a4[i].connected){
_5a4.splice(i,1);
}
}
}
if(_5a6.length==1){
throw _5a6[0];
}else{
if(_5a6.length>1){
var e=new Error("Multiple errors thrown in handling 'sig', see errors property");
e.errors=_5a6;
throw e;
}
}
}});
MochiKit.Signal.EXPORT_OK=[];
MochiKit.Signal.EXPORT=["connect","disconnect","signal","disconnectAll","disconnectAllTo"];
MochiKit.Signal.__new__=function(win){
var m=MochiKit.Base;
this._document=document;
this._window=win;
this._lock=false;
this._dirty=false;
try{
this.connect(window,"onunload",this._unloadCache);
}
catch(e){
}
this.EXPORT_TAGS={":common":this.EXPORT,":all":m.concat(this.EXPORT,this.EXPORT_OK)};
m.nameFunctions(this);
};
MochiKit.Signal.__new__(this);
if(MochiKit.__export__){
connect=MochiKit.Signal.connect;
disconnect=MochiKit.Signal.disconnect;
disconnectAll=MochiKit.Signal.disconnectAll;
signal=MochiKit.Signal.signal;
}
MochiKit.Base._exportSymbols(this,MochiKit.Signal);
MochiKit.Base._deps("Position",["Base","DOM","Style"]);
MochiKit.Position.NAME="MochiKit.Position";
MochiKit.Position.VERSION="1.4";
MochiKit.Position.__repr__=function(){
return "["+this.NAME+" "+this.VERSION+"]";
};
MochiKit.Position.toString=function(){
return this.__repr__();
};
MochiKit.Position.EXPORT_OK=[];
MochiKit.Position.EXPORT=[];
MochiKit.Base.update(MochiKit.Position,{includeScrollOffsets:false,prepare:function(){
var _5ac=window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft||0;
var _5ad=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0;
this.windowOffset=new MochiKit.Style.Coordinates(_5ac,_5ad);
},cumulativeOffset:function(_5ae){
var _5af=0;
var _5b0=0;
do{
_5af+=_5ae.offsetTop||0;
_5b0+=_5ae.offsetLeft||0;
_5ae=_5ae.offsetParent;
}while(_5ae);
return new MochiKit.Style.Coordinates(_5b0,_5af);
},realOffset:function(_5b1){
var _5b2=0;
var _5b3=0;
do{
_5b2+=_5b1.scrollTop||0;
_5b3+=_5b1.scrollLeft||0;
_5b1=_5b1.parentNode;
}while(_5b1);
return new MochiKit.Style.Coordinates(_5b3,_5b2);
},within:function(_5b4,x,y){
if(this.includeScrollOffsets){
return this.withinIncludingScrolloffsets(_5b4,x,y);
}
this.xcomp=x;
this.ycomp=y;
this.offset=this.cumulativeOffset(_5b4);
if(_5b4.style.position=="fixed"){
this.offset.x+=this.windowOffset.x;
this.offset.y+=this.windowOffset.y;
}
return (y>=this.offset.y&&y<this.offset.y+_5b4.offsetHeight&&x>=this.offset.x&&x<this.offset.x+_5b4.offsetWidth);
},withinIncludingScrolloffsets:function(_5b7,x,y){
var _5ba=this.realOffset(_5b7);
this.xcomp=x+_5ba.x-this.windowOffset.x;
this.ycomp=y+_5ba.y-this.windowOffset.y;
this.offset=this.cumulativeOffset(_5b7);
return (this.ycomp>=this.offset.y&&this.ycomp<this.offset.y+_5b7.offsetHeight&&this.xcomp>=this.offset.x&&this.xcomp<this.offset.x+_5b7.offsetWidth);
},overlap:function(mode,_5bc){
if(!mode){
return 0;
}
if(mode=="vertical"){
return ((this.offset.y+_5bc.offsetHeight)-this.ycomp)/_5bc.offsetHeight;
}
if(mode=="horizontal"){
return ((this.offset.x+_5bc.offsetWidth)-this.xcomp)/_5bc.offsetWidth;
}
},absolutize:function(_5bd){
_5bd=MochiKit.DOM.getElement(_5bd);
if(_5bd.style.position=="absolute"){
return;
}
MochiKit.Position.prepare();
var _5be=MochiKit.Position.positionedOffset(_5bd);
var _5bf=_5bd.clientWidth;
var _5c0=_5bd.clientHeight;
var _5c1={"position":_5bd.style.position,"left":_5be.x-parseFloat(_5bd.style.left||0),"top":_5be.y-parseFloat(_5bd.style.top||0),"width":_5bd.style.width,"height":_5bd.style.height};
_5bd.style.position="absolute";
_5bd.style.top=_5be.y+"px";
_5bd.style.left=_5be.x+"px";
_5bd.style.width=_5bf+"px";
_5bd.style.height=_5c0+"px";
return _5c1;
},positionedOffset:function(_5c2){
var _5c3=0,_5c4=0;
do{
_5c3+=_5c2.offsetTop||0;
_5c4+=_5c2.offsetLeft||0;
_5c2=_5c2.offsetParent;
if(_5c2){
p=MochiKit.Style.getStyle(_5c2,"position");
if(p=="relative"||p=="absolute"){
break;
}
}
}while(_5c2);
return new MochiKit.Style.Coordinates(_5c4,_5c3);
},relativize:function(_5c5,_5c6){
_5c5=MochiKit.DOM.getElement(_5c5);
if(_5c5.style.position=="relative"){
return;
}
MochiKit.Position.prepare();
var top=parseFloat(_5c5.style.top||0)-(_5c6["top"]||0);
var left=parseFloat(_5c5.style.left||0)-(_5c6["left"]||0);
_5c5.style.position=_5c6["position"];
_5c5.style.top=top+"px";
_5c5.style.left=left+"px";
_5c5.style.width=_5c6["width"];
_5c5.style.height=_5c6["height"];
},clone:function(_5c9,_5ca){
_5c9=MochiKit.DOM.getElement(_5c9);
_5ca=MochiKit.DOM.getElement(_5ca);
_5ca.style.position="absolute";
var _5cb=this.cumulativeOffset(_5c9);
_5ca.style.top=_5cb.y+"px";
_5ca.style.left=_5cb.x+"px";
_5ca.style.width=_5c9.offsetWidth+"px";
_5ca.style.height=_5c9.offsetHeight+"px";
},page:function(_5cc){
var _5cd=0;
var _5ce=0;
var _5cf=_5cc;
do{
_5cd+=_5cf.offsetTop||0;
_5ce+=_5cf.offsetLeft||0;
if(_5cf.offsetParent==document.body&&MochiKit.Style.getStyle(_5cf,"position")=="absolute"){
break;
}
}while(_5cf=_5cf.offsetParent);
_5cf=_5cc;
do{
_5cd-=_5cf.scrollTop||0;
_5ce-=_5cf.scrollLeft||0;
}while(_5cf=_5cf.parentNode);
return new MochiKit.Style.Coordinates(_5ce,_5cd);
}});
MochiKit.Position.__new__=function(win){
var m=MochiKit.Base;
this.EXPORT_TAGS={":common":this.EXPORT,":all":m.concat(this.EXPORT,this.EXPORT_OK)};
m.nameFunctions(this);
};
MochiKit.Position.__new__(this);
MochiKit.Base._deps("Visual",["Base","DOM","Style","Color","Position"]);
MochiKit.Visual.NAME="MochiKit.Visual";
MochiKit.Visual.VERSION="1.4";
MochiKit.Visual.__repr__=function(){
return "["+this.NAME+" "+this.VERSION+"]";
};
MochiKit.Visual.toString=function(){
return this.__repr__();
};
MochiKit.Visual._RoundCorners=function(e,_5d3){
e=MochiKit.DOM.getElement(e);
this._setOptions(_5d3);
if(this.options.__unstable__wrapElement){
e=this._doWrap(e);
}
var _5d4=this.options.color;
var C=MochiKit.Color.Color;
if(this.options.color==="fromElement"){
_5d4=C.fromBackground(e);
}else{
if(!(_5d4 instanceof C)){
_5d4=C.fromString(_5d4);
}
}
this.isTransparent=(_5d4.asRGB().a<=0);
var _5d6=this.options.bgColor;
if(this.options.bgColor==="fromParent"){
_5d6=C.fromBackground(e.offsetParent);
}else{
if(!(_5d6 instanceof C)){
_5d6=C.fromString(_5d6);
}
}
this._roundCornersImpl(e,_5d4,_5d6);
};
MochiKit.Visual._RoundCorners.prototype={_doWrap:function(e){
var _5d8=e.parentNode;
var doc=MochiKit.DOM.currentDocument();
if(typeof (doc.defaultView)==="undefined"||doc.defaultView===null){
return e;
}
var _5da=doc.defaultView.getComputedStyle(e,null);
if(typeof (_5da)==="undefined"||_5da===null){
return e;
}
var _5db=MochiKit.DOM.DIV({"style":{display:"block",marginTop:_5da.getPropertyValue("padding-top"),marginRight:_5da.getPropertyValue("padding-right"),marginBottom:_5da.getPropertyValue("padding-bottom"),marginLeft:_5da.getPropertyValue("padding-left"),padding:"0px"}});
_5db.innerHTML=e.innerHTML;
e.innerHTML="";
e.appendChild(_5db);
return e;
},_roundCornersImpl:function(e,_5dd,_5de){
if(this.options.border){
this._renderBorder(e,_5de);
}
if(this._isTopRounded()){
this._roundTopCorners(e,_5dd,_5de);
}
if(this._isBottomRounded()){
this._roundBottomCorners(e,_5dd,_5de);
}
},_renderBorder:function(el,_5e0){
var _5e1="1px solid "+this._borderColor(_5e0);
var _5e2="border-left: "+_5e1;
var _5e3="border-right: "+_5e1;
var _5e4="style='"+_5e2+";"+_5e3+"'";
el.innerHTML="<div "+_5e4+">"+el.innerHTML+"</div>";
},_roundTopCorners:function(el,_5e6,_5e7){
var _5e8=this._createCorner(_5e7);
for(var i=0;i<this.options.numSlices;i++){
_5e8.appendChild(this._createCornerSlice(_5e6,_5e7,i,"top"));
}
el.style.paddingTop=0;
el.insertBefore(_5e8,el.firstChild);
},_roundBottomCorners:function(el,_5eb,_5ec){
var _5ed=this._createCorner(_5ec);
for(var i=(this.options.numSlices-1);i>=0;i--){
_5ed.appendChild(this._createCornerSlice(_5eb,_5ec,i,"bottom"));
}
el.style.paddingBottom=0;
el.appendChild(_5ed);
},_createCorner:function(_5ef){
var dom=MochiKit.DOM;
return dom.DIV({style:{backgroundColor:_5ef.toString()}});
},_createCornerSlice:function(_5f1,_5f2,n,_5f4){
var _5f5=MochiKit.DOM.SPAN();
var _5f6=_5f5.style;
_5f6.backgroundColor=_5f1.toString();
_5f6.display="block";
_5f6.height="1px";
_5f6.overflow="hidden";
_5f6.fontSize="1px";
var _5f7=this._borderColor(_5f1,_5f2);
if(this.options.border&&n===0){
_5f6.borderTopStyle="solid";
_5f6.borderTopWidth="1px";
_5f6.borderLeftWidth="0px";
_5f6.borderRightWidth="0px";
_5f6.borderBottomWidth="0px";
_5f6.height="0px";
_5f6.borderColor=_5f7.toString();
}else{
if(_5f7){
_5f6.borderColor=_5f7.toString();
_5f6.borderStyle="solid";
_5f6.borderWidth="0px 1px";
}
}
if(!this.options.compact&&(n==(this.options.numSlices-1))){
_5f6.height="2px";
}
this._setMargin(_5f5,n,_5f4);
this._setBorder(_5f5,n,_5f4);
return _5f5;
},_setOptions:function(_5f8){
this.options={corners:"all",color:"fromElement",bgColor:"fromParent",blend:true,border:false,compact:false,__unstable__wrapElement:false};
MochiKit.Base.update(this.options,_5f8);
this.options.numSlices=(this.options.compact?2:4);
},_whichSideTop:function(){
var _5f9=this.options.corners;
if(this._hasString(_5f9,"all","top")){
return "";
}
var _5fa=(_5f9.indexOf("tl")!=-1);
var _5fb=(_5f9.indexOf("tr")!=-1);
if(_5fa&&_5fb){
return "";
}
if(_5fa){
return "left";
}
if(_5fb){
return "right";
}
return "";
},_whichSideBottom:function(){
var _5fc=this.options.corners;
if(this._hasString(_5fc,"all","bottom")){
return "";
}
var _5fd=(_5fc.indexOf("bl")!=-1);
var _5fe=(_5fc.indexOf("br")!=-1);
if(_5fd&&_5fe){
return "";
}
if(_5fd){
return "left";
}
if(_5fe){
return "right";
}
return "";
},_borderColor:function(_5ff,_600){
if(_5ff=="transparent"){
return _600;
}else{
if(this.options.border){
return this.options.border;
}else{
if(this.options.blend){
return _600.blendedColor(_5ff);
}
}
}
return "";
},_setMargin:function(el,n,_603){
var _604=this._marginSize(n)+"px";
var _605=(_603=="top"?this._whichSideTop():this._whichSideBottom());
var _606=el.style;
if(_605=="left"){
_606.marginLeft=_604;
_606.marginRight="0px";
}else{
if(_605=="right"){
_606.marginRight=_604;
_606.marginLeft="0px";
}else{
_606.marginLeft=_604;
_606.marginRight=_604;
}
}
},_setBorder:function(el,n,_609){
var _60a=this._borderSize(n)+"px";
var _60b=(_609=="top"?this._whichSideTop():this._whichSideBottom());
var _60c=el.style;
if(_60b=="left"){
_60c.borderLeftWidth=_60a;
_60c.borderRightWidth="0px";
}else{
if(_60b=="right"){
_60c.borderRightWidth=_60a;
_60c.borderLeftWidth="0px";
}else{
_60c.borderLeftWidth=_60a;
_60c.borderRightWidth=_60a;
}
}
},_marginSize:function(n){
if(this.isTransparent){
return 0;
}
var o=this.options;
if(o.compact&&o.blend){
var _60f=[1,0];
return _60f[n];
}else{
if(o.compact){
var _610=[2,1];
return _610[n];
}else{
if(o.blend){
var _611=[3,2,1,0];
return _611[n];
}else{
var _612=[5,3,2,1];
return _612[n];
}
}
}
},_borderSize:function(n){
var o=this.options;
var _615;
if(o.compact&&(o.blend||this.isTransparent)){
return 1;
}else{
if(o.compact){
_615=[1,0];
}else{
if(o.blend){
_615=[2,1,1,1];
}else{
if(o.border){
_615=[0,2,0,0];
}else{
if(this.isTransparent){
_615=[5,3,2,1];
}else{
return 0;
}
}
}
}
}
return _615[n];
},_hasString:function(str){
for(var i=1;i<arguments.length;i++){
if(str.indexOf(arguments[i])!=-1){
return true;
}
}
return false;
},_isTopRounded:function(){
return this._hasString(this.options.corners,"all","top","tl","tr");
},_isBottomRounded:function(){
return this._hasString(this.options.corners,"all","bottom","bl","br");
},_hasSingleTextChild:function(el){
return (el.childNodes.length==1&&el.childNodes[0].nodeType==3);
}};
MochiKit.Visual.roundElement=function(e,_61a){
new MochiKit.Visual._RoundCorners(e,_61a);
};
MochiKit.Visual.roundClass=function(_61b,_61c,_61d){
var _61e=MochiKit.DOM.getElementsByTagAndClassName(_61b,_61c);
for(var i=0;i<_61e.length;i++){
MochiKit.Visual.roundElement(_61e[i],_61d);
}
};
MochiKit.Visual.tagifyText=function(_620,_621){
_621=_621||"position:relative";
if(/MSIE/.test(navigator.userAgent)){
_621+=";zoom:1";
}
_620=MochiKit.DOM.getElement(_620);
var ma=MochiKit.Base.map;
ma(function(_623){
if(_623.nodeType==3){
ma(function(_624){
_620.insertBefore(MochiKit.DOM.SPAN({style:_621},_624==" "?String.fromCharCode(160):_624),_623);
},_623.nodeValue.split(""));
MochiKit.DOM.removeElement(_623);
}
},_620.childNodes);
};
MochiKit.Visual.forceRerendering=function(_625){
try{
_625=MochiKit.DOM.getElement(_625);
var n=document.createTextNode(" ");
_625.appendChild(n);
_625.removeChild(n);
}
catch(e){
}
};
MochiKit.Visual.multiple=function(_627,_628,_629){
_629=MochiKit.Base.update({speed:0.1,delay:0},_629);
var _62a=_629.delay;
var _62b=0;
MochiKit.Base.map(function(_62c){
_629.delay=_62b*_629.speed+_62a;
new _628(_62c,_629);
_62b+=1;
},_627);
};
MochiKit.Visual.PAIRS={"slide":["slideDown","slideUp"],"blind":["blindDown","blindUp"],"appear":["appear","fade"],"size":["grow","shrink"]};
MochiKit.Visual.toggle=function(_62d,_62e,_62f){
_62d=MochiKit.DOM.getElement(_62d);
_62e=(_62e||"appear").toLowerCase();
_62f=MochiKit.Base.update({queue:{position:"end",scope:(_62d.id||"global"),limit:1}},_62f);
var v=MochiKit.Visual;
v[MochiKit.Style.getStyle(_62d,"display")!="none"?v.PAIRS[_62e][1]:v.PAIRS[_62e][0]](_62d,_62f);
};
MochiKit.Visual.Transitions={};
MochiKit.Visual.Transitions.linear=function(pos){
return pos;
};
MochiKit.Visual.Transitions.sinoidal=function(pos){
return 0.5-Math.cos(pos*Math.PI)/2;
};
MochiKit.Visual.Transitions.reverse=function(pos){
return 1-pos;
};
MochiKit.Visual.Transitions.flicker=function(pos){
return 0.25-Math.cos(pos*Math.PI)/4+Math.random()/2;
};
MochiKit.Visual.Transitions.wobble=function(pos){
return 0.5-Math.cos(9*pos*Math.PI)/2;
};
MochiKit.Visual.Transitions.pulse=function(pos,_637){
if(_637){
pos*=2*_637;
}else{
pos*=10;
}
var _638=pos-Math.floor(pos);
return (Math.floor(pos)%2==0)?_638:1-_638;
};
MochiKit.Visual.Transitions.parabolic=function(pos){
return pos*pos;
};
MochiKit.Visual.Transitions.none=function(pos){
return 0;
};
MochiKit.Visual.Transitions.full=function(pos){
return 1;
};
MochiKit.Visual.ScopedQueue=function(){
var cls=arguments.callee;
if(!(this instanceof cls)){
return new cls();
}
this.__init__();
};
MochiKit.Base.update(MochiKit.Visual.ScopedQueue.prototype,{__init__:function(){
this.effects=[];
this.interval=null;
},add:function(_63d){
var _63e=new Date().getTime();
var _63f=(typeof (_63d.options.queue)=="string")?_63d.options.queue:_63d.options.queue.position;
var ma=MochiKit.Base.map;
switch(_63f){
case "front":
ma(function(e){
if(e.state=="idle"){
e.startOn+=_63d.finishOn;
e.finishOn+=_63d.finishOn;
}
},this.effects);
break;
case "end":
var _642;
ma(function(e){
var i=e.finishOn;
if(i>=(_642||i)){
_642=i;
}
},this.effects);
_63e=_642||_63e;
break;
case "break":
ma(function(e){
e.finalize();
},this.effects);
break;
}
_63d.startOn+=_63e;
_63d.finishOn+=_63e;
if(!_63d.options.queue.limit||this.effects.length<_63d.options.queue.limit){
this.effects.push(_63d);
}
if(!this.interval){
this.interval=this.startLoop(MochiKit.Base.bind(this.loop,this),40);
}
},startLoop:function(func,_647){
return setInterval(func,_647);
},remove:function(_648){
this.effects=MochiKit.Base.filter(function(e){
return e!=_648;
},this.effects);
if(!this.effects.length){
this.stopLoop(this.interval);
this.interval=null;
}
},stopLoop:function(_64a){
clearInterval(_64a);
},loop:function(){
var _64b=new Date().getTime();
MochiKit.Base.map(function(_64c){
_64c.loop(_64b);
},this.effects);
}});
MochiKit.Visual.Queues={instances:{},get:function(_64d){
if(typeof (_64d)!="string"){
return _64d;
}
if(!this.instances[_64d]){
this.instances[_64d]=new MochiKit.Visual.ScopedQueue();
}
return this.instances[_64d];
}};
MochiKit.Visual.Queue=MochiKit.Visual.Queues.get("global");
MochiKit.Visual.DefaultOptions={transition:MochiKit.Visual.Transitions.sinoidal,duration:1,fps:25,sync:false,from:0,to:1,delay:0,queue:"parallel"};
MochiKit.Visual.Base=function(){
};
MochiKit.Visual.Base.prototype={__class__:MochiKit.Visual.Base,start:function(_64e){
var v=MochiKit.Visual;
this.options=MochiKit.Base.setdefault(_64e,v.DefaultOptions);
this.currentFrame=0;
this.state="idle";
this.startOn=this.options.delay*1000;
this.finishOn=this.startOn+(this.options.duration*1000);
this.event("beforeStart");
if(!this.options.sync){
v.Queues.get(typeof (this.options.queue)=="string"?"global":this.options.queue.scope).add(this);
}
},loop:function(_650){
if(_650>=this.startOn){
if(_650>=this.finishOn){
return this.finalize();
}
var pos=(_650-this.startOn)/(this.finishOn-this.startOn);
var _652=Math.round(pos*this.options.fps*this.options.duration);
if(_652>this.currentFrame){
this.render(pos);
this.currentFrame=_652;
}
}
},render:function(pos){
if(this.state=="idle"){
this.state="running";
this.event("beforeSetup");
this.setup();
this.event("afterSetup");
}
if(this.state=="running"){
if(this.options.transition){
pos=this.options.transition(pos);
}
pos*=(this.options.to-this.options.from);
pos+=this.options.from;
this.event("beforeUpdate");
this.update(pos);
this.event("afterUpdate");
}
},cancel:function(){
if(!this.options.sync){
MochiKit.Visual.Queues.get(typeof (this.options.queue)=="string"?"global":this.options.queue.scope).remove(this);
}
this.state="finished";
},finalize:function(){
this.render(1);
this.cancel();
this.event("beforeFinish");
this.finish();
this.event("afterFinish");
},setup:function(){
},finish:function(){
},update:function(_654){
},event:function(_655){
if(this.options[_655+"Internal"]){
this.options[_655+"Internal"](this);
}
if(this.options[_655]){
this.options[_655](this);
}
},repr:function(){
return "["+this.__class__.NAME+", options:"+MochiKit.Base.repr(this.options)+"]";
}};
MochiKit.Visual.Parallel=function(_656,_657){
var cls=arguments.callee;
if(!(this instanceof cls)){
return new cls(_656,_657);
}
this.__init__(_656,_657);
};
MochiKit.Visual.Parallel.prototype=new MochiKit.Visual.Base();
MochiKit.Base.update(MochiKit.Visual.Parallel.prototype,{__class__:MochiKit.Visual.Parallel,__init__:function(_659,_65a){
this.effects=_659||[];
this.start(_65a);
},update:function(_65b){
MochiKit.Base.map(function(_65c){
_65c.render(_65b);
},this.effects);
},finish:function(){
MochiKit.Base.map(function(_65d){
_65d.finalize();
},this.effects);
}});
MochiKit.Visual.Sequence=function(_65e,_65f){
var cls=arguments.callee;
if(!(this instanceof cls)){
return new cls(_65e,_65f);
}
this.__init__(_65e,_65f);
};
MochiKit.Visual.Sequence.prototype=new MochiKit.Visual.Base();
MochiKit.Base.update(MochiKit.Visual.Sequence.prototype,{__class__:MochiKit.Visual.Sequence,__init__:function(_661,_662){
var defs={transition:MochiKit.Visual.Transitions.linear,duration:0};
this.effects=_661||[];
MochiKit.Base.map(function(_664){
defs.duration+=_664.options.duration;
},this.effects);
MochiKit.Base.setdefault(_662,defs);
this.start(_662);
},update:function(_665){
var time=_665*this.options.duration;
for(var i=0;i<this.effects.length;i++){
var _668=this.effects[i];
if(time<=_668.options.duration){
_668.render(time/_668.options.duration);
break;
}else{
time-=_668.options.duration;
}
}
},finish:function(){
MochiKit.Base.map(function(_669){
_669.finalize();
},this.effects);
}});
MochiKit.Visual.Opacity=function(_66a,_66b){
var cls=arguments.callee;
if(!(this instanceof cls)){
return new cls(_66a,_66b);
}
this.__init__(_66a,_66b);
};
MochiKit.Visual.Opacity.prototype=new MochiKit.Visual.Base();
MochiKit.Base.update(MochiKit.Visual.Opacity.prototype,{__class__:MochiKit.Visual.Opacity,__init__:function(_66d,_66e){
var b=MochiKit.Base;
var s=MochiKit.Style;
this.element=MochiKit.DOM.getElement(_66d);
if(this.element.currentStyle&&(!this.element.currentStyle.hasLayout)){
s.setStyle(this.element,{zoom:1});
}
_66e=b.update({from:s.getStyle(this.element,"opacity")||0,to:1},_66e);
this.start(_66e);
},update:function(_671){
MochiKit.Style.setStyle(this.element,{"opacity":_671});
}});
MochiKit.Visual.Move=function(_672,_673){
var cls=arguments.callee;
if(!(this instanceof cls)){
return new cls(_672,_673);
}
this.__init__(_672,_673);
};
MochiKit.Visual.Move.prototype=new MochiKit.Visual.Base();
MochiKit.Base.update(MochiKit.Visual.Move.prototype,{__class__:MochiKit.Visual.Move,__init__:function(_675,_676){
this.element=MochiKit.DOM.getElement(_675);
_676=MochiKit.Base.update({x:0,y:0,mode:"relative"},_676);
this.start(_676);
},setup:function(){
MochiKit.DOM.makePositioned(this.element);
var s=this.element.style;
var _678=s.visibility;
var _679=s.display;
if(_679=="none"){
s.visibility="hidden";
s.display="";
}
this.originalLeft=parseFloat(MochiKit.Style.getStyle(this.element,"left")||"0");
this.originalTop=parseFloat(MochiKit.Style.getStyle(this.element,"top")||"0");
if(this.options.mode=="absolute"){
this.options.x-=this.originalLeft;
this.options.y-=this.originalTop;
}
if(_679=="none"){
s.visibility=_678;
s.display=_679;
}
},update:function(_67a){
MochiKit.Style.setStyle(this.element,{left:Math.round(this.options.x*_67a+this.originalLeft)+"px",top:Math.round(this.options.y*_67a+this.originalTop)+"px"});
}});
MochiKit.Visual.Scale=function(_67b,_67c,_67d){
var cls=arguments.callee;
if(!(this instanceof cls)){
return new cls(_67b,_67c,_67d);
}
this.__init__(_67b,_67c,_67d);
};
MochiKit.Visual.Scale.prototype=new MochiKit.Visual.Base();
MochiKit.Base.update(MochiKit.Visual.Scale.prototype,{__class__:MochiKit.Visual.Scale,__init__:function(_67f,_680,_681){
this.element=MochiKit.DOM.getElement(_67f);
_681=MochiKit.Base.update({scaleX:true,scaleY:true,scaleContent:true,scaleFromCenter:false,scaleMode:"box",scaleFrom:100,scaleTo:_680},_681);
this.start(_681);
},setup:function(){
this.restoreAfterFinish=this.options.restoreAfterFinish||false;
this.elementPositioning=MochiKit.Style.getStyle(this.element,"position");
var ma=MochiKit.Base.map;
var b=MochiKit.Base.bind;
this.originalStyle={};
ma(b(function(k){
this.originalStyle[k]=this.element.style[k];
},this),["top","left","width","height","fontSize"]);
this.originalTop=this.element.offsetTop;
this.originalLeft=this.element.offsetLeft;
var _685=MochiKit.Style.getStyle(this.element,"font-size")||"100%";
ma(b(function(_686){
if(_685.indexOf(_686)>0){
this.fontSize=parseFloat(_685);
this.fontSizeType=_686;
}
},this),["em","px","%"]);
this.factor=(this.options.scaleTo-this.options.scaleFrom)/100;
if(/^content/.test(this.options.scaleMode)){
this.dims=[this.element.scrollHeight,this.element.scrollWidth];
}else{
if(this.options.scaleMode=="box"){
this.dims=[this.element.offsetHeight,this.element.offsetWidth];
}else{
this.dims=[this.options.scaleMode.originalHeight,this.options.scaleMode.originalWidth];
}
}
},update:function(_687){
var _688=(this.options.scaleFrom/100)+(this.factor*_687);
if(this.options.scaleContent&&this.fontSize){
MochiKit.Style.setStyle(this.element,{fontSize:this.fontSize*_688+this.fontSizeType});
}
this.setDimensions(this.dims[0]*_688,this.dims[1]*_688);
},finish:function(){
if(this.restoreAfterFinish){
MochiKit.Style.setStyle(this.element,this.originalStyle);
}
},setDimensions:function(_689,_68a){
var d={};
var r=Math.round;
if(/MSIE/.test(navigator.userAgent)){
r=Math.ceil;
}
if(this.options.scaleX){
d.width=r(_68a)+"px";
}
if(this.options.scaleY){
d.height=r(_689)+"px";
}
if(this.options.scaleFromCenter){
var topd=(_689-this.dims[0])/2;
var _68e=(_68a-this.dims[1])/2;
if(this.elementPositioning=="absolute"){
if(this.options.scaleY){
d.top=this.originalTop-topd+"px";
}
if(this.options.scaleX){
d.left=this.originalLeft-_68e+"px";
}
}else{
if(this.options.scaleY){
d.top=-topd+"px";
}
if(this.options.scaleX){
d.left=-_68e+"px";
}
}
}
MochiKit.Style.setStyle(this.element,d);
}});
MochiKit.Visual.Highlight=function(_68f,_690){
var cls=arguments.callee;
if(!(this instanceof cls)){
return new cls(_68f,_690);
}
this.__init__(_68f,_690);
};
MochiKit.Visual.Highlight.prototype=new MochiKit.Visual.Base();
MochiKit.Base.update(MochiKit.Visual.Highlight.prototype,{__class__:MochiKit.Visual.Highlight,__init__:function(_692,_693){
this.element=MochiKit.DOM.getElement(_692);
_693=MochiKit.Base.update({startcolor:"#ffff99"},_693);
this.start(_693);
},setup:function(){
var b=MochiKit.Base;
var s=MochiKit.Style;
if(s.getStyle(this.element,"display")=="none"){
this.cancel();
return;
}
this.oldStyle={backgroundImage:s.getStyle(this.element,"background-image")};
s.setStyle(this.element,{backgroundImage:"none"});
if(!this.options.endcolor){
this.options.endcolor=MochiKit.Color.Color.fromBackground(this.element).toHexString();
}
if(b.isUndefinedOrNull(this.options.restorecolor)){
this.options.restorecolor=s.getStyle(this.element,"background-color");
}
this._base=b.map(b.bind(function(i){
return parseInt(this.options.startcolor.slice(i*2+1,i*2+3),16);
},this),[0,1,2]);
this._delta=b.map(b.bind(function(i){
return parseInt(this.options.endcolor.slice(i*2+1,i*2+3),16)-this._base[i];
},this),[0,1,2]);
},update:function(_698){
var m="#";
MochiKit.Base.map(MochiKit.Base.bind(function(i){
m+=MochiKit.Color.toColorPart(Math.round(this._base[i]+this._delta[i]*_698));
},this),[0,1,2]);
MochiKit.Style.setStyle(this.element,{backgroundColor:m});
},finish:function(){
MochiKit.Style.setStyle(this.element,MochiKit.Base.update(this.oldStyle,{backgroundColor:this.options.restorecolor}));
}});
MochiKit.Visual.ScrollTo=function(_69b,_69c){
var cls=arguments.callee;
if(!(this instanceof cls)){
return new cls(_69b,_69c);
}
this.__init__(_69b,_69c);
};
MochiKit.Visual.ScrollTo.prototype=new MochiKit.Visual.Base();
MochiKit.Base.update(MochiKit.Visual.ScrollTo.prototype,{__class__:MochiKit.Visual.ScrollTo,__init__:function(_69e,_69f){
this.element=MochiKit.DOM.getElement(_69e);
this.start(_69f);
},setup:function(){
var p=MochiKit.Position;
p.prepare();
var _6a1=p.cumulativeOffset(this.element);
if(this.options.offset){
_6a1.y+=this.options.offset;
}
var max;
if(window.innerHeight){
max=window.innerHeight-window.height;
}else{
if(document.documentElement&&document.documentElement.clientHeight){
max=document.documentElement.clientHeight-document.body.scrollHeight;
}else{
if(document.body){
max=document.body.clientHeight-document.body.scrollHeight;
}
}
}
this.scrollStart=p.windowOffset.y;
this.delta=(_6a1.y>max?max:_6a1.y)-this.scrollStart;
},update:function(_6a3){
var p=MochiKit.Position;
p.prepare();
window.scrollTo(p.windowOffset.x,this.scrollStart+(_6a3*this.delta));
}});
MochiKit.Visual.CSS_LENGTH=/^(([\+\-]?[0-9\.]+)(em|ex|px|in|cm|mm|pt|pc|\%))|0$/;
MochiKit.Visual.Morph=function(_6a5,_6a6){
var cls=arguments.callee;
if(!(this instanceof cls)){
return new cls(_6a5,_6a6);
}
this.__init__(_6a5,_6a6);
};
MochiKit.Visual.Morph.prototype=new MochiKit.Visual.Base();
MochiKit.Base.update(MochiKit.Visual.Morph.prototype,{__class__:MochiKit.Visual.Morph,__init__:function(_6a8,_6a9){
this.element=MochiKit.DOM.getElement(_6a8);
this.start(_6a9);
},setup:function(){
var b=MochiKit.Base;
var _6ab=this.options.style;
this.styleStart={};
this.styleEnd={};
this.units={};
var _6ac,unit;
for(var s in _6ab){
_6ac=_6ab[s];
s=b.camelize(s);
if(MochiKit.Visual.CSS_LENGTH.test(_6ac)){
var _6af=_6ac.match(/^([\+\-]?[0-9\.]+)(.*)$/);
_6ac=parseFloat(_6af[1]);
unit=(_6af.length==3)?_6af[2]:null;
this.styleEnd[s]=_6ac;
this.units[s]=unit;
_6ac=MochiKit.Style.getStyle(this.element,s);
_6af=_6ac.match(/^([\+\-]?[0-9\.]+)(.*)$/);
_6ac=parseFloat(_6af[1]);
this.styleStart[s]=_6ac;
}else{
if(/[Cc]olor$/.test(s)){
var c=MochiKit.Color.Color;
_6ac=c.fromString(_6ac);
if(_6ac){
this.units[s]="color";
this.styleEnd[s]=_6ac.toHexString();
_6ac=MochiKit.Style.getStyle(this.element,s);
this.styleStart[s]=c.fromString(_6ac).toHexString();
this.styleStart[s]=b.map(b.bind(function(i){
return parseInt(this.styleStart[s].slice(i*2+1,i*2+3),16);
},this),[0,1,2]);
this.styleEnd[s]=b.map(b.bind(function(i){
return parseInt(this.styleEnd[s].slice(i*2+1,i*2+3),16);
},this),[0,1,2]);
}
}else{
this.element.style[s]=_6ac;
}
}
}
},update:function(_6b3){
var _6b4;
for(var s in this.styleStart){
if(this.units[s]=="color"){
var m="#";
var _6b7=this.styleStart[s];
var end=this.styleEnd[s];
MochiKit.Base.map(MochiKit.Base.bind(function(i){
m+=MochiKit.Color.toColorPart(Math.round(_6b7[i]+(end[i]-_6b7[i])*_6b3));
},this),[0,1,2]);
this.element.style[s]=m;
}else{
_6b4=this.styleStart[s]+Math.round((this.styleEnd[s]-this.styleStart[s])*_6b3*1000)/1000+this.units[s];
this.element.style[s]=_6b4;
}
}
}});
MochiKit.Visual.fade=function(_6ba,_6bb){
var s=MochiKit.Style;
var _6bd=s.getStyle(_6ba,"opacity");
_6bb=MochiKit.Base.update({from:s.getStyle(_6ba,"opacity")||1,to:0,afterFinishInternal:function(_6be){
if(_6be.options.to!==0){
return;
}
s.hideElement(_6be.element);
s.setStyle(_6be.element,{"opacity":_6bd});
}},_6bb);
return new MochiKit.Visual.Opacity(_6ba,_6bb);
};
MochiKit.Visual.appear=function(_6bf,_6c0){
var s=MochiKit.Style;
var v=MochiKit.Visual;
_6c0=MochiKit.Base.update({from:(s.getStyle(_6bf,"display")=="none"?0:s.getStyle(_6bf,"opacity")||0),to:1,afterFinishInternal:function(_6c3){
v.forceRerendering(_6c3.element);
},beforeSetupInternal:function(_6c4){
s.setStyle(_6c4.element,{"opacity":_6c4.options.from});
s.showElement(_6c4.element);
}},_6c0);
return new v.Opacity(_6bf,_6c0);
};
MochiKit.Visual.puff=function(_6c5,_6c6){
var s=MochiKit.Style;
var v=MochiKit.Visual;
_6c5=MochiKit.DOM.getElement(_6c5);
var _6c9=MochiKit.Style.getElementDimensions(_6c5,true);
var _6ca={position:s.getStyle(_6c5,"position"),top:_6c5.style.top,left:_6c5.style.left,width:_6c5.style.width,height:_6c5.style.height,opacity:s.getStyle(_6c5,"opacity")};
_6c6=MochiKit.Base.update({beforeSetupInternal:function(_6cb){
MochiKit.Position.absolutize(_6cb.effects[0].element);
},afterFinishInternal:function(_6cc){
s.hideElement(_6cc.effects[0].element);
s.setStyle(_6cc.effects[0].element,_6ca);
},scaleContent:true,scaleFromCenter:true},_6c6);
return new v.Parallel([new v.Scale(_6c5,200,{sync:true,scaleFromCenter:_6c6.scaleFromCenter,scaleMode:{originalHeight:_6c9.h,originalWidth:_6c9.w},scaleContent:_6c6.scaleContent,restoreAfterFinish:true}),new v.Opacity(_6c5,{sync:true,to:0})],_6c6);
};
MochiKit.Visual.blindUp=function(_6cd,_6ce){
var d=MochiKit.DOM;
_6cd=d.getElement(_6cd);
var _6d0=MochiKit.Style.getElementDimensions(_6cd,true);
var _6d1=d.makeClipping(_6cd);
_6ce=MochiKit.Base.update({scaleContent:false,scaleX:false,scaleMode:{originalHeight:_6d0.h,originalWidth:_6d0.w},restoreAfterFinish:true,afterFinishInternal:function(_6d2){
MochiKit.Style.hideElement(_6d2.element);
d.undoClipping(_6d2.element,_6d1);
}},_6ce);
return new MochiKit.Visual.Scale(_6cd,0,_6ce);
};
MochiKit.Visual.blindDown=function(_6d3,_6d4){
var d=MochiKit.DOM;
var s=MochiKit.Style;
_6d3=d.getElement(_6d3);
var _6d7=s.getElementDimensions(_6d3,true);
var _6d8;
_6d4=MochiKit.Base.update({scaleContent:false,scaleX:false,scaleFrom:0,scaleMode:{originalHeight:_6d7.h,originalWidth:_6d7.w},restoreAfterFinish:true,afterSetupInternal:function(_6d9){
_6d8=d.makeClipping(_6d9.element);
s.setStyle(_6d9.element,{height:"0px"});
s.showElement(_6d9.element);
},afterFinishInternal:function(_6da){
d.undoClipping(_6da.element,_6d8);
}},_6d4);
return new MochiKit.Visual.Scale(_6d3,100,_6d4);
};
MochiKit.Visual.switchOff=function(_6db,_6dc){
var d=MochiKit.DOM;
var s=MochiKit.Style;
_6db=d.getElement(_6db);
var _6df=s.getElementDimensions(_6db,true);
var _6e0=s.getStyle(_6db,"opacity");
var _6e1;
_6dc=MochiKit.Base.update({duration:0.7,restoreAfterFinish:true,beforeSetupInternal:function(_6e2){
d.makePositioned(_6db);
_6e1=d.makeClipping(_6db);
},afterFinishInternal:function(_6e3){
s.hideElement(_6db);
d.undoClipping(_6db,_6e1);
d.undoPositioned(_6db);
s.setStyle(_6db,{"opacity":_6e0});
}},_6dc);
var v=MochiKit.Visual;
return new v.Sequence([new v.appear(_6db,{sync:true,duration:0.57*_6dc.duration,from:0,transition:v.Transitions.flicker}),new v.Scale(_6db,1,{sync:true,duration:0.43*_6dc.duration,scaleFromCenter:true,scaleX:false,scaleMode:{originalHeight:_6df.h,originalWidth:_6df.w},scaleContent:false,restoreAfterFinish:true})],_6dc);
};
MochiKit.Visual.dropOut=function(_6e5,_6e6){
var d=MochiKit.DOM;
var s=MochiKit.Style;
_6e5=d.getElement(_6e5);
var _6e9={top:s.getStyle(_6e5,"top"),left:s.getStyle(_6e5,"left"),opacity:s.getStyle(_6e5,"opacity")};
_6e6=MochiKit.Base.update({duration:0.5,distance:100,beforeSetupInternal:function(_6ea){
d.makePositioned(_6ea.effects[0].element);
},afterFinishInternal:function(_6eb){
s.hideElement(_6eb.effects[0].element);
d.undoPositioned(_6eb.effects[0].element);
s.setStyle(_6eb.effects[0].element,_6e9);
}},_6e6);
var v=MochiKit.Visual;
return new v.Parallel([new v.Move(_6e5,{x:0,y:_6e6.distance,sync:true}),new v.Opacity(_6e5,{sync:true,to:0})],_6e6);
};
MochiKit.Visual.shake=function(_6ed,_6ee){
var d=MochiKit.DOM;
var v=MochiKit.Visual;
var s=MochiKit.Style;
_6ed=d.getElement(_6ed);
var _6f2={top:s.getStyle(_6ed,"top"),left:s.getStyle(_6ed,"left")};
_6ee=MochiKit.Base.update({duration:0.5,afterFinishInternal:function(_6f3){
d.undoPositioned(_6ed);
s.setStyle(_6ed,_6f2);
}},_6ee);
return new v.Sequence([new v.Move(_6ed,{sync:true,duration:0.1*_6ee.duration,x:20,y:0}),new v.Move(_6ed,{sync:true,duration:0.2*_6ee.duration,x:-40,y:0}),new v.Move(_6ed,{sync:true,duration:0.2*_6ee.duration,x:40,y:0}),new v.Move(_6ed,{sync:true,duration:0.2*_6ee.duration,x:-40,y:0}),new v.Move(_6ed,{sync:true,duration:0.2*_6ee.duration,x:40,y:0}),new v.Move(_6ed,{sync:true,duration:0.1*_6ee.duration,x:-20,y:0})],_6ee);
};
MochiKit.Visual.slideDown=function(_6f4,_6f5){
var d=MochiKit.DOM;
var b=MochiKit.Base;
var s=MochiKit.Style;
_6f4=d.getElement(_6f4);
if(!_6f4.firstChild){
throw new Error("MochiKit.Visual.slideDown must be used on a element with a child");
}
d.removeEmptyTextNodes(_6f4);
var _6f9=s.getStyle(_6f4.firstChild,"bottom")||0;
var _6fa=s.getElementDimensions(_6f4,true);
var _6fb;
_6f5=b.update({scaleContent:false,scaleX:false,scaleFrom:0,scaleMode:{originalHeight:_6fa.h,originalWidth:_6fa.w},restoreAfterFinish:true,afterSetupInternal:function(_6fc){
d.makePositioned(_6fc.element);
d.makePositioned(_6fc.element.firstChild);
if(/Opera/.test(navigator.userAgent)){
s.setStyle(_6fc.element,{top:""});
}
_6fb=d.makeClipping(_6fc.element);
s.setStyle(_6fc.element,{height:"0px"});
s.showElement(_6fc.element);
},afterUpdateInternal:function(_6fd){
var _6fe=s.getElementDimensions(_6fd.element,true);
s.setStyle(_6fd.element.firstChild,{bottom:(_6fd.dims[0]-_6fe.h)+"px"});
},afterFinishInternal:function(_6ff){
d.undoClipping(_6ff.element,_6fb);
if(/MSIE/.test(navigator.userAgent)){
d.undoPositioned(_6ff.element);
d.undoPositioned(_6ff.element.firstChild);
}else{
d.undoPositioned(_6ff.element.firstChild);
d.undoPositioned(_6ff.element);
}
s.setStyle(_6ff.element.firstChild,{bottom:_6f9});
}},_6f5);
return new MochiKit.Visual.Scale(_6f4,100,_6f5);
};
MochiKit.Visual.slideUp=function(_700,_701){
var d=MochiKit.DOM;
var b=MochiKit.Base;
var s=MochiKit.Style;
_700=d.getElement(_700);
if(!_700.firstChild){
throw new Error("MochiKit.Visual.slideUp must be used on a element with a child");
}
d.removeEmptyTextNodes(_700);
var _705=s.getStyle(_700.firstChild,"bottom");
var _706=s.getElementDimensions(_700,true);
var _707;
_701=b.update({scaleContent:false,scaleX:false,scaleMode:{originalHeight:_706.h,originalWidth:_706.w},scaleFrom:100,restoreAfterFinish:true,beforeStartInternal:function(_708){
d.makePositioned(_708.element);
d.makePositioned(_708.element.firstChild);
if(/Opera/.test(navigator.userAgent)){
s.setStyle(_708.element,{top:""});
}
_707=d.makeClipping(_708.element);
s.showElement(_708.element);
},afterUpdateInternal:function(_709){
var _70a=s.getElementDimensions(_709.element,true);
s.setStyle(_709.element.firstChild,{bottom:(_709.dims[0]-_70a.h)+"px"});
},afterFinishInternal:function(_70b){
s.hideElement(_70b.element);
d.undoClipping(_70b.element,_707);
d.undoPositioned(_70b.element.firstChild);
d.undoPositioned(_70b.element);
s.setStyle(_70b.element.firstChild,{bottom:_705});
}},_701);
return new MochiKit.Visual.Scale(_700,0,_701);
};
MochiKit.Visual.squish=function(_70c,_70d){
var d=MochiKit.DOM;
var b=MochiKit.Base;
var _710=MochiKit.Style.getElementDimensions(_70c,true);
var _711;
_70d=b.update({restoreAfterFinish:true,scaleMode:{originalHeight:_710.w,originalWidth:_710.h},beforeSetupInternal:function(_712){
_711=d.makeClipping(_712.element);
},afterFinishInternal:function(_713){
MochiKit.Style.hideElement(_713.element);
d.undoClipping(_713.element,_711);
}},_70d);
return new MochiKit.Visual.Scale(_70c,/Opera/.test(navigator.userAgent)?1:0,_70d);
};
MochiKit.Visual.grow=function(_714,_715){
var d=MochiKit.DOM;
var v=MochiKit.Visual;
var s=MochiKit.Style;
_714=d.getElement(_714);
_715=MochiKit.Base.update({direction:"center",moveTransition:v.Transitions.sinoidal,scaleTransition:v.Transitions.sinoidal,opacityTransition:v.Transitions.full,scaleContent:true,scaleFromCenter:false},_715);
var _719={top:_714.style.top,left:_714.style.left,height:_714.style.height,width:_714.style.width,opacity:s.getStyle(_714,"opacity")};
var dims=s.getElementDimensions(_714,true);
var _71b,_71c;
var _71d,_71e;
switch(_715.direction){
case "top-left":
_71b=_71c=_71d=_71e=0;
break;
case "top-right":
_71b=dims.w;
_71c=_71e=0;
_71d=-dims.w;
break;
case "bottom-left":
_71b=_71d=0;
_71c=dims.h;
_71e=-dims.h;
break;
case "bottom-right":
_71b=dims.w;
_71c=dims.h;
_71d=-dims.w;
_71e=-dims.h;
break;
case "center":
_71b=dims.w/2;
_71c=dims.h/2;
_71d=-dims.w/2;
_71e=-dims.h/2;
break;
}
var _71f=MochiKit.Base.update({beforeSetupInternal:function(_720){
s.setStyle(_720.effects[0].element,{height:"0px"});
s.showElement(_720.effects[0].element);
},afterFinishInternal:function(_721){
d.undoClipping(_721.effects[0].element);
d.undoPositioned(_721.effects[0].element);
s.setStyle(_721.effects[0].element,_719);
}},_715);
return new v.Move(_714,{x:_71b,y:_71c,duration:0.01,beforeSetupInternal:function(_722){
s.hideElement(_722.element);
d.makeClipping(_722.element);
d.makePositioned(_722.element);
},afterFinishInternal:function(_723){
new v.Parallel([new v.Opacity(_723.element,{sync:true,to:1,from:0,transition:_715.opacityTransition}),new v.Move(_723.element,{x:_71d,y:_71e,sync:true,transition:_715.moveTransition}),new v.Scale(_723.element,100,{scaleMode:{originalHeight:dims.h,originalWidth:dims.w},sync:true,scaleFrom:/Opera/.test(navigator.userAgent)?1:0,transition:_715.scaleTransition,scaleContent:_715.scaleContent,scaleFromCenter:_715.scaleFromCenter,restoreAfterFinish:true})],_71f);
}});
};
MochiKit.Visual.shrink=function(_724,_725){
var d=MochiKit.DOM;
var v=MochiKit.Visual;
var s=MochiKit.Style;
_724=d.getElement(_724);
_725=MochiKit.Base.update({direction:"center",moveTransition:v.Transitions.sinoidal,scaleTransition:v.Transitions.sinoidal,opacityTransition:v.Transitions.none,scaleContent:true,scaleFromCenter:false},_725);
var _729={top:_724.style.top,left:_724.style.left,height:_724.style.height,width:_724.style.width,opacity:s.getStyle(_724,"opacity")};
var dims=s.getElementDimensions(_724,true);
var _72b,_72c;
switch(_725.direction){
case "top-left":
_72b=_72c=0;
break;
case "top-right":
_72b=dims.w;
_72c=0;
break;
case "bottom-left":
_72b=0;
_72c=dims.h;
break;
case "bottom-right":
_72b=dims.w;
_72c=dims.h;
break;
case "center":
_72b=dims.w/2;
_72c=dims.h/2;
break;
}
var _72d;
var _72e=MochiKit.Base.update({beforeStartInternal:function(_72f){
_72d=d.makePositioned(_72f.effects[0].element);
d.makeClipping(_72f.effects[0].element);
},afterFinishInternal:function(_730){
s.hideElement(_730.effects[0].element);
d.undoClipping(_730.effects[0].element,_72d);
d.undoPositioned(_730.effects[0].element);
s.setStyle(_730.effects[0].element,_729);
}},_725);
return new v.Parallel([new v.Opacity(_724,{sync:true,to:0,from:1,transition:_725.opacityTransition}),new v.Scale(_724,/Opera/.test(navigator.userAgent)?1:0,{scaleMode:{originalHeight:dims.h,originalWidth:dims.w},sync:true,transition:_725.scaleTransition,scaleContent:_725.scaleContent,scaleFromCenter:_725.scaleFromCenter,restoreAfterFinish:true}),new v.Move(_724,{x:_72b,y:_72c,sync:true,transition:_725.moveTransition})],_72e);
};
MochiKit.Visual.pulsate=function(_731,_732){
var d=MochiKit.DOM;
var v=MochiKit.Visual;
var b=MochiKit.Base;
var _736=MochiKit.Style.getStyle(_731,"opacity");
_732=b.update({duration:3,from:0,afterFinishInternal:function(_737){
MochiKit.Style.setStyle(_737.element,{"opacity":_736});
}},_732);
var _738=_732.transition||v.Transitions.sinoidal;
_732.transition=function(pos){
return _738(1-v.Transitions.pulse(pos,_732.pulses));
};
return new v.Opacity(_731,_732);
};
MochiKit.Visual.fold=function(_73a,_73b){
var d=MochiKit.DOM;
var v=MochiKit.Visual;
var s=MochiKit.Style;
_73a=d.getElement(_73a);
var _73f=s.getElementDimensions(_73a,true);
var _740={top:_73a.style.top,left:_73a.style.left,width:_73a.style.width,height:_73a.style.height};
var _741=d.makeClipping(_73a);
_73b=MochiKit.Base.update({scaleContent:false,scaleX:false,scaleMode:{originalHeight:_73f.h,originalWidth:_73f.w},afterFinishInternal:function(_742){
new v.Scale(_73a,1,{scaleContent:false,scaleY:false,scaleMode:{originalHeight:_73f.h,originalWidth:_73f.w},afterFinishInternal:function(_743){
s.hideElement(_743.element);
d.undoClipping(_743.element,_741);
s.setStyle(_743.element,_740);
}});
}},_73b);
return new v.Scale(_73a,5,_73b);
};
MochiKit.Visual.Color=MochiKit.Color.Color;
MochiKit.Visual.getElementsComputedStyle=MochiKit.DOM.computedStyle;
MochiKit.Visual.__new__=function(){
var m=MochiKit.Base;
m.nameFunctions(this);
this.EXPORT_TAGS={":common":this.EXPORT,":all":m.concat(this.EXPORT,this.EXPORT_OK)};
};
MochiKit.Visual.EXPORT=["roundElement","roundClass","tagifyText","multiple","toggle","Parallel","Sequence","Opacity","Move","Scale","Highlight","ScrollTo","Morph","fade","appear","puff","blindUp","blindDown","switchOff","dropOut","shake","slideDown","slideUp","squish","grow","shrink","pulsate","fold"];
MochiKit.Visual.EXPORT_OK=["Base","PAIRS"];
MochiKit.Visual.__new__();
MochiKit.Base._exportSymbols(this,MochiKit.Visual);
if(typeof (MochiKit)=="undefined"){
MochiKit={};
}
if(typeof (MochiKit.MochiKit)=="undefined"){
MochiKit.MochiKit={};
}
MochiKit.MochiKit.NAME="MochiKit.MochiKit";
MochiKit.MochiKit.VERSION="1.4";
MochiKit.MochiKit.__repr__=function(){
return "["+this.NAME+" "+this.VERSION+"]";
};
MochiKit.MochiKit.toString=function(){
return this.__repr__();
};
MochiKit.MochiKit.SUBMODULES=["Base","Iter","Logging","DateTime","Format","Async","DOM","Selector","Style","LoggingPane","Color","Signal","Position","Visual"];
if(typeof (JSAN)!="undefined"||typeof (dojo)!="undefined"){
if(typeof (dojo)!="undefined"){
dojo.provide("MochiKit.MochiKit");
(function(lst){
for(var i=0;i<lst.length;i++){
dojo.require("MochiKit."+lst[i]);
}
})(MochiKit.MochiKit.SUBMODULES);
}
if(typeof (JSAN)!="undefined"){
(function(lst){
for(var i=0;i<lst.length;i++){
JSAN.use("MochiKit."+lst[i],[]);
}
})(MochiKit.MochiKit.SUBMODULES);
}
(function(){
var _749=MochiKit.Base.extend;
var self=MochiKit.MochiKit;
var _74b=self.SUBMODULES;
var _74c=[];
var _74d=[];
var _74e={};
var i,k,m,all;
for(i=0;i<_74b.length;i++){
m=MochiKit[_74b[i]];
_749(_74c,m.EXPORT);
_749(_74d,m.EXPORT_OK);
for(k in m.EXPORT_TAGS){
_74e[k]=_749(_74e[k],m.EXPORT_TAGS[k]);
}
all=m.EXPORT_TAGS[":all"];
if(!all){
all=_749(null,m.EXPORT,m.EXPORT_OK);
}
var j;
for(j=0;j<all.length;j++){
k=all[j];
self[k]=m[k];
}
}
self.EXPORT=_74c;
self.EXPORT_OK=_74d;
self.EXPORT_TAGS=_74e;
}());
}else{
if(typeof (MochiKit.__compat__)=="undefined"){
MochiKit.__compat__=true;
}
(function(){
if(typeof (document)=="undefined"){
return;
}
var _754=document.getElementsByTagName("script");
var _755="http://www.w3.org/1999/xhtml";
var _756="http://www.w3.org/2000/svg";
var _757="http://www.w3.org/1999/xlink";
var _758="http://www.mozilla.org/keymaster/gatekeeper/there.is.only.xul";
var base=null;
var _75a=null;
var _75b={};
var i;
var src;
for(i=0;i<_754.length;i++){
src=null;
switch(_754[i].namespaceURI){
case _756:
src=_754[i].getAttributeNS(_757,"href");
break;
default:
src=_754[i].getAttribute("src");
break;
}
if(!src){
continue;
}
_75b[src]=true;
if(src.match(/MochiKit.js(\?.*)?$/)){
base=src.substring(0,src.lastIndexOf("MochiKit.js"));
_75a=_754[i];
}
}
if(base===null){
return;
}
var _75e=MochiKit.MochiKit.SUBMODULES;
for(var i=0;i<_75e.length;i++){
if(MochiKit[_75e[i]]){
continue;
}
var uri=base+_75e[i]+".js";
if(uri in _75b){
continue;
}
if(_75a.namespaceURI==_756||_75a.namespaceURI==_758){
var s=document.createElementNS(_75a.namespaceURI,"script");
s.setAttribute("id","MochiKit_"+base+_75e[i]);
if(_75a.namespaceURI==_756){
s.setAttributeNS(_757,"href",uri);
}else{
s.setAttribute("src",uri);
}
s.setAttribute("type","application/x-javascript");
_75a.parentNode.appendChild(s);
}else{
document.write("<"+_75a.nodeName+" src=\""+uri+"\" type=\"text/javascript\"></script>");
}
}
})();
}
if(typeof (MochiKit)=="undefined"){
throw new ReferenceError("MochiKit must be loaded before loading this script");
}
if(typeof (MochiKit.Base)=="undefined"){
throw new ReferenceError("MochiKit.Base must be loaded before loading this script");
}
MochiKit.Base.isFalse=function(_761){
return _761==false||_761==null||_761==0||_761.length===0||_761=="false"||_761=="null";
};
MochiKit.Base.defaultValue=function(){
for(var i=0;i<arguments.length;i++){
if(typeof (arguments[i])!="undefined"){
return arguments[i];
}
}
return undefined;
};
MochiKit.Base.dict=function(_763,_764){
var o={};
if(!MochiKit.Base.isArrayLike(_763)){
throw new TypeError("First argument must be array-like");
}
if(MochiKit.Base.isArrayLike(_764)&&_763.length!==_764.length){
throw new TypeError("Both arrays must be of same length");
}
for(var i=0;i<_763.length;i++){
var k=_763[i];
if(k===null||k===undefined){
throw new TypeError("Key at index "+i+" is null or undefined");
}else{
if(MochiKit.Base.isArrayLike(k)){
o[k[0]]=k[1];
}else{
if(MochiKit.Base.isArrayLike(_764)){
o[k]=_764[i];
}else{
o[k]=_764;
}
}
}
}
return o;
};
MochiKit.Base.select=function(src,keys){
var res={};
if(!MochiKit.Base.isArrayLike(keys)){
keys=MochiKit.Base.keys(keys);
}
for(var i=0;i<keys.length;i++){
var k=keys[i];
if(k in src){
res[k]=src[k];
}
}
return res;
};
MochiKit.Base.mask=function(src,keys){
var res={};
if(!MochiKit.Base.isArrayLike(keys)){
keys=MochiKit.Base.keys(keys);
}
for(var i=0;i<keys.length;i++){
var k=keys[i];
if(k in src){
res[k]=src[k];
delete src[k];
}
}
return res;
};
MochiKit.Base.functionName=function(func){
if(func==null){
return null;
}else{
if(func.name!=null&&func.name!=""){
return func.name;
}else{
return func.NAME;
}
}
};
MochiKit.Base.registerFunctionNames=function(obj,name,_775){
if(typeof (obj)==="function"&&(obj.name==null||obj.name=="")&&typeof (obj.NAME)==="undefined"){
obj.NAME=name;
}
_775=_775||[];
if(obj!=null&&name!=null&&(typeof (obj)==="object"||typeof (obj)==="function")&&obj!==Object.prototype&&obj!==Function.prototype&&typeof (obj.nodeType)!=="number"&&MochiKit.Base.findIdentical(_775,obj)<0){
_775.push(obj);
for(var prop in obj){
var str=name+"."+prop;
MochiKit.Base.registerFunctionNames(obj[prop],str,_775);
}
var str=name+".prototype";
MochiKit.Base.registerFunctionNames(obj.prototype,str,_775);
_775.pop();
}
};
MochiKit.Base.stackTrace=function(_778){
var func=arguments.callee.caller;
var _77a=[];
var res=[];
_778=_778||20;
while(func!=null){
if(MochiKit.Base.findIdentical(_77a,func)>=0){
res.push("...recursion...");
break;
}
if(func.$stackTrace!=null){
res=res.concat(func.$stackTrace);
break;
}
var name=MochiKit.Base.functionName(func);
if(name===null){
}else{
res.push(name||"<anonymous>");
}
_77a.push(func);
if(_77a.length>=_778){
res.push("...");
break;
}
func=func.caller;
}
return res;
};
MochiKit.Base.injectStackTrace=function(_77d,func){
func=func||arguments.callee.caller;
if(func!=null){
if(_77d){
func.$stackTrace=_77d;
}else{
delete func.$stackTrace;
}
}
};
if(typeof (MochiKit)=="undefined"){
throw new ReferenceError("MochiKit must be loaded before loading this script");
}
if(typeof (MochiKit.DOM)=="undefined"){
throw new ReferenceError("MochiKit.DOM must be loaded before loading this script");
}
MochiKit.DOM.NS={XHTML:"http://www.w3.org/1999/xhtml",XLINK:"http://www.w3.org/1999/xlink",SVG:"http://www.w3.org/2000/svg",XUL:"http://www.mozilla.org/keymaster/gatekeeper/there.is.only.xul"};
MochiKit.DOM.NS.HTML=[undefined,null,"",MochiKit.DOM.NS.XHTML];
MochiKit.DOM.isDOM=function(obj){
return typeof (obj)!=="undefined"&&typeof (obj.nodeType)==="number"&&obj.nodeType>0;
};
MochiKit.DOM.isHTML=function(obj){
var ns=MochiKit.DOM.NS.HTML;
return MochiKit.DOM.isDOM(obj)&&MochiKit.Base.findIdentical(ns,obj.namespaceURI)>=0;
};
MochiKit.DOM.reprDOM=function(node){
if(node==null){
return "null";
}else{
if(typeof (node)==="string"){
return node;
}else{
if(node.nodeType===1){
var res="<"+node.tagName.toLowerCase();
var _784=MochiKit.Base.map(MochiKit.DOM.reprDOM,node.attributes);
res+=_784.join("");
if(node.hasChildNodes()){
res+=" ["+node.childNodes.length+" child nodes]";
}
res+="/>";
return res;
}else{
if(node.nodeType===2){
if(node.specified){
return " "+node.name+"=\""+MochiKit.DOM.escapeHTML(node.value)+"\"";
}else{
return "";
}
}else{
if(node.nodeType===3){
return MochiKit.DOM.escapeHTML(node.nodeValue);
}else{
return node.toString();
}
}
}
}
}
};
MochiKit.DOM.attributeArrayNewImpl=function(node){
var res=[];
node=MochiKit.DOM.getElement(node);
for(var i=0;node!=null&&i<node.attributes.length;i++){
var a=node.attributes[i];
if(a.specified){
res.push([a.name,a.value]);
}
}
return res;
};
MochiKit.DOM.childNode=function(_789,_78a){
_789=MochiKit.DOM.getElement(_789);
if(typeof (_78a)=="number"){
if(_78a<0||_78a>=_789.childNodes.length){
return null;
}else{
return _789.childNodes[_78a];
}
}else{
var node=MochiKit.DOM.getElement(_78a);
while(node!=null&&node!==_789&&node.parentNode!==_789){
node=node.parentNode;
}
return (node==null||node===_789)?null:node;
}
};
MochiKit.DOM.createDOMExt=function(ns,tag,_78e){
var doc=MochiKit.DOM.currentDocument();
var node=(ns)?doc.createElementNS(ns,tag):doc.createElement(tag);
MochiKit.DOM.updateNodeAttributes(node,_78e);
var _791=MochiKit.Base.extend([],arguments,3);
MochiKit.DOM.appendChildNodes(node,_791);
return node;
};
MochiKit.DOM.createTextNode=function(text){
return MochiKit.DOM.currentDocument().createTextNode(text);
};
MochiKit.DOM.createDOMFuncExt=function(ns,tag,args,_796){
args=args||[];
_796=_796||{};
var _797=MochiKit.Base.extend([],arguments,4);
return function(){
var _798=MochiKit.Base.update({},_796);
for(var pos=0;pos<args.length;pos++){
if(arguments[pos]==null){
throw new Error("Argument '"+args[pos]+"' cannot be null");
}
_798[args[pos]]=arguments[pos];
}
MochiKit.Base.update(_798,arguments[args.length]);
var _79a=MochiKit.Base.extend([],_797);
MochiKit.Base.extend(_79a,arguments,args.length+1);
return MochiKit.DOM.createDOMExt(ns,tag,_798,_79a);
};
};
MochiKit.DOM.blurAll=function(node){
if(arguments.length<=1){
MochiKit.DOM.blurAll(node,"A","BUTTON","INPUT","TEXTAREA","SELECT");
}else{
node.blur();
for(var i=1;i<arguments.length;i++){
var _79d=node.getElementsByTagName(arguments[i]);
for(var j=0;j<_79d.length;j++){
_79d[j].blur();
}
}
}
};
if(typeof (MochiKit)=="undefined"){
throw new ReferenceError("MochiKit must be loaded before loading this script");
}
if(typeof (MochiKit.DateTime)=="undefined"){
throw new ReferenceError("MochiKit.DateTime must be loaded before loading this script");
}
MochiKit.DateTime.MILLIS_PER_SECOND=1000;
MochiKit.DateTime.MILLIS_PER_MINUTE=60*1000;
MochiKit.DateTime.MILLIS_PER_HOUR=60*60*1000;
MochiKit.DateTime.MILLIS_PER_DAY=24*60*60*1000;
MochiKit.DateTime.MILLIS_PER_WEEK=7*24*60*60*1000;
MochiKit.DateTime._twoDigitNumber=MochiKit.Format.numberFormatter("00");
MochiKit.DateTime.TimePeriod=function(_79f){
return {days:Math.floor(_79f/MochiKit.DateTime.MILLIS_PER_DAY),hours:Math.floor(_79f/MochiKit.DateTime.MILLIS_PER_HOUR)%24,minutes:Math.floor(_79f/MochiKit.DateTime.MILLIS_PER_MINUTE)%60,seconds:Math.floor(_79f/MochiKit.DateTime.MILLIS_PER_SECOND)%60,millis:_79f%1000};
};
MochiKit.DateTime.toApproxPeriod=function(_7a0){
var p=MochiKit.DateTime.TimePeriod(_7a0);
if(p.days>=10){
return p.days+" days";
}else{
if(p.days>=1){
return p.days+" days "+MochiKit.DateTime._twoDigitNumber(p.hours)+" hours";
}else{
if(p.hours>=1){
return p.hours+":"+MochiKit.DateTime._twoDigitNumber(p.minutes)+" hours";
}else{
if(p.minutes>=1){
return p.minutes+":"+MochiKit.DateTime._twoDigitNumber(p.seconds)+" minutes";
}else{
if(p.seconds>=1){
return p.seconds+" seconds";
}else{
return p.millis+" milliseconds";
}
}
}
}
}
};
if(typeof (MochiKit)=="undefined"){
throw new ReferenceError("MochiKit must be loaded before loading this script");
}
if(typeof (MochiKit.Format)=="undefined"){
throw new ReferenceError("MochiKit.Format must be loaded before loading this script");
}
MochiKit.Format.truncate=function(obj,_7a3,tail){
var base=MochiKit.Base;
if(obj!=null&&typeof (obj)!="string"&&!base.isArrayLike(obj)){
obj=obj.toString();
}
if(obj==null||obj.length<=_7a3||_7a3<0){
return obj;
}
if(typeof (tail)=="string"||base.isArrayLike(tail)){
obj=obj.slice(0,_7a3-tail.length);
if(typeof (obj)=="string"){
return obj+tail;
}else{
return base.extend(obj,tail);
}
}else{
return obj.slice(0,_7a3);
}
};
MochiKit.Format.formatter=function(_7a6,_7a7){
if(typeof (_7a7)=="undefined"){
_7a7=MochiKit.Format.formatLocale();
}else{
if(typeof (_7a7)=="string"){
_7a7=MochiKit.Format.formatLocale(_7a7);
}
}
var _7a8=MochiKit.Format._parsePattern(_7a6);
return function(){
var _7a9=MochiKit.Base.extend([],arguments);
return MochiKit.Format._formatParts(_7a8,_7a9,_7a7);
};
};
MochiKit.Format.format=function(_7aa){
var _7ab=MochiKit.Format._parsePattern(_7aa);
var _7ac=MochiKit.Base.extend([],arguments,1);
var _7ad=MochiKit.Format.formatLocale();
return MochiKit.Format._formatParts(_7ab,_7ac,_7ad);
};
MochiKit.Format._parsePattern=function(_7ae){
var self=MochiKit.Format;
var _7b0=[];
var _7b1=0;
var pos=0;
for(pos=0;pos<_7ae.length;pos++){
if(_7ae[pos]=="{"){
if(pos+1>=_7ae.length){
var msg="unescaped { char, should be escaped as {{";
throw new self.FormatPatternError(_7ae,pos,msg);
}else{
if(_7ae[pos+1]=="{"){
_7b0.push(_7ae.substring(_7b1,pos+1));
_7b1=pos+2;
pos++;
}else{
if(_7b1<pos){
_7b0.push(_7ae.substring(_7b1,pos));
}
_7b1=_7ae.indexOf("}",pos)+1;
if(_7b1<=0){
var msg="unmatched { char, not followed by a } char";
throw new self.FormatPatternError(_7ae,pos,msg);
}
_7b0.push(self._parseFormat(_7ae,pos+1,_7b1-1));
pos=_7b1-1;
}
}
}else{
if(_7ae[pos]=="}"){
if(pos+1>=_7ae.length||_7ae[pos+1]!="}"){
var msg="unescaped } char, should be escaped as }}";
throw new self.FormatPatternError(_7ae,pos,msg);
}
_7b0.push(_7ae.substring(_7b1,pos+1));
_7b1=pos+2;
pos++;
}
}
}
if(_7b1<pos){
_7b0.push(_7ae.substring(_7b1,pos));
}
return _7b0;
};
MochiKit.Format._parseFormat=function(_7b4,_7b5,_7b6){
var self=MochiKit.Format;
var text=_7b4.substring(_7b5,_7b6);
var info;
var pos=text.indexOf(":");
if(pos==0){
info=self._parseFormatFlags(_7b4,_7b5+1,_7b6);
info.path=[0];
}else{
if(pos>0){
info=self._parseFormatFlags(_7b4,_7b5+pos+1,_7b6);
info.path=text.substring(0,pos).split(".");
}else{
info=self._parseFormatFlags(_7b4,_7b6,_7b6);
info.path=text.split(".");
}
}
var _7bb=/^\d+$/;
for(var i=0;i<info.path.length;i++){
var e=info.path[i];
if(typeof (e)=="string"){
e=self.strip(e);
if(e==""&&info.path.length==1){
e=0;
}else{
if(e==""){
var msg="format value path contains blanks";
throw new self.FormatPatternError(_7b4,_7b5,msg);
}else{
if(_7bb.test(e)){
e=parseInt(e);
}
}
}
}
info.path[i]=e;
}
if(info.path.length<0||typeof (info.path[0])!="number"){
info.path.unshift(0);
}
return info;
};
MochiKit.Format._parseFormatFlags=function(_7bf,_7c0,_7c1){
var self=MochiKit.Format;
var info={format:"s",width:0,precision:-1,align:">",sign:"-",padding:" ",grouping:false};
var _7c4=self.rstrip(_7bf.substring(_7c0,_7c1));
while(_7c4.length>0){
switch(_7c4[0]){
case ">":
case "<":
info.align=_7c4[0];
_7c4=_7c4.substring(1);
break;
case "+":
case "-":
case " ":
info.sign=_7c4[0];
_7c4=_7c4.substring(1);
break;
case ",":
info.grouping=true;
_7c4=_7c4.substring(1);
break;
case ".":
var _7c5="0123456789";
var pos=1;
while(pos<_7c4.length&&_7c5.indexOf(_7c4[pos])>=0){
pos++;
}
info.precision=parseInt(_7c4.substring(1,pos));
_7c4=_7c4.substring(pos);
break;
case "0":
info.padding=_7c4[0];
_7c4=_7c4.substring(1);
break;
case "1":
case "2":
case "3":
case "4":
case "5":
case "6":
case "7":
case "8":
case "9":
var _7c5="0123456789";
var pos=1;
while(pos<_7c4.length&&_7c5.indexOf(_7c4[pos])>=0){
pos++;
}
info.width=parseInt(_7c4.substring(0,pos));
_7c4=_7c4.substring(pos);
break;
case "s":
case "r":
case "b":
case "c":
case "d":
case "o":
case "x":
case "X":
case "f":
case "%":
info.format=_7c4[0];
_7c4=_7c4.substring(1);
break;
default:
var msg="unsupported format flag: "+_7c4[0];
throw new self.FormatPatternError(_7bf,_7c0,msg);
}
}
return info;
};
MochiKit.Format._formatParts=function(_7c8,_7c9,_7ca){
var self=MochiKit.Format;
var _7cc="";
for(var i=0;i<_7c8.length;i++){
if(typeof (_7c8[i])=="string"){
_7cc+=_7c8[i];
}else{
var info=_7c8[i];
var v=_7c9;
for(var j=0;j<info.path.length;j++){
if(v!=null){
v=v[info.path[j]];
}
}
var str="";
switch(info.format){
case "d":
case "f":
if(typeof (v)!="number"||isNaN(v)){
str="";
}else{
if(v==Number.POSITIVE_INFINITY){
str="\u221e";
}else{
if(v==Number.NEGATIVE_INFINITY){
str="-\u221e";
}else{
var sign=(info.sign=="-")?"":info.sign;
sign=(v<0)?"-":sign;
v=Math.abs(v);
if(info.format=="d"){
str=self.truncToFixed(v,0);
}else{
if(info.precision>=0){
str=self.truncToFixed(v,info.precision);
}else{
str=(v==null)?"0":v.toString();
}
}
if(info.padding=="0"){
str=self._addZeroPadding(str,info.width-sign.length);
}
if(info.grouping){
str=self._addNumberGrouping(str,_7ca);
}
str=sign+str;
}
}
}
break;
case "%":
if(typeof (v)!="number"||isNaN(v)){
str="";
}else{
if(v==Number.POSITIVE_INFINITY){
str="\u221e%";
}else{
if(v==Number.NEGATIVE_INFINITY){
str="-\u221e%";
}else{
var sign=(info.sign=="-")?"":info.sign;
sign=(v<0)?"-":sign;
v=(v==null||!isFinite(v))?0:Math.abs(v);
if(info.precision>=0){
str=self.truncToFixed(v,info.precision+2);
}else{
str=(v==null)?"0":v.toString();
}
var _7d3=str.indexOf(".");
if(_7d3<0){
str=str+"00";
}else{
if(_7d3+3>=str.length){
var _7d4=str.substring(_7d3+1);
while(_7d4.length<2){
_7d4=_7d4+"0";
}
str=str.substring(0,_7d3)+_7d4;
}else{
var _7d4=str.substring(_7d3+1);
str=str.substring(0,_7d3)+_7d4.substring(0,2)+"."+_7d4.substring(2);
}
}
while(str.length>1&&str[0]=="0"&&str[1]!="."){
str=str.substring(1);
}
if(info.padding=="0"){
str=self._addZeroPadding(str,info.width-sign.length-1);
}
if(info.grouping){
str=self._addNumberGrouping(str,_7ca);
}
str=sign+str+_7ca.percent;
}
}
}
break;
case "r":
case "s":
default:
if(info.format=="r"){
str=MochiKit.Base.repr(v);
}else{
str=(v==null)?"null":v.toString();
}
str=self.truncate(str,info.precision);
break;
}
while(info.width>str.length){
if(info.align=="<"){
str+=" ";
}else{
str=" "+str;
}
}
_7cc+=str;
}
}
return _7cc;
};
MochiKit.Format._addZeroPadding=function(str,_7d6){
while(str.length<_7d6){
str="0"+str;
}
return str;
};
MochiKit.Format._addNumberGrouping=function(str,_7d8){
var _7d9=str.indexOf(".");
var _7da=(_7d9<0)?str:str.substring(0,_7d9);
var _7db=(_7d9<0)?"":str.substring(_7d9+1);
str=(_7db.length>0)?_7d8.decimal:"";
while(_7db.length>3){
str=str+_7db.substring(0,3)+_7d8.separator;
_7db=_7db.substring(3);
if(_7da.length>1&&_7da[0]=="0"){
_7da=_7da.substring(1);
}
}
if(_7db.length>0){
str+=_7db;
}
while(_7da.length>3){
var pos=_7da.length-3;
str=_7d8.separator+_7da.substring(pos)+str;
if(_7da[0]=="0"){
_7da=_7da.substring(1,pos);
}else{
_7da=_7da.substring(0,pos);
}
}
return _7da+str;
};
MochiKit.Format.FormatPatternError=function(_7dd,pos,_7df){
this.pattern=_7dd;
this.pos=pos;
this.message=_7df;
};
MochiKit.Format.FormatPatternError.prototype=new MochiKit.Base.NamedError("MochiKit.Format.FormatPatternError");
MochiKit.Format.EXPORT.push("format");
MochiKit.Format.EXPORT.push("formatter");
MochiKit.Format.EXPORT.push("FormatPatternError");
MochiKit.Base._exportSymbols(this,MochiKit.Format);
if(typeof (MochiKit)=="undefined"){
throw new ReferenceError("MochiKit must be loaded before loading this script");
}
if(typeof (MochiKit.SVG)=="undefined"){
MochiKit.SVG={};
}
MochiKit.SVG.SVG=MochiKit.DOM.createDOMFuncExt(MochiKit.DOM.NS.SVG,"svg",[],{version:"1.1",baseProfile:"full"});
MochiKit.SVG.DEFS=MochiKit.DOM.createDOMFuncExt(MochiKit.DOM.NS.SVG,"defs");
MochiKit.SVG.G=MochiKit.DOM.createDOMFuncExt(MochiKit.DOM.NS.SVG,"g");
MochiKit.SVG.LINE=MochiKit.DOM.createDOMFuncExt(MochiKit.DOM.NS.SVG,"line",["x1","y1","x2","y2"]);
MochiKit.SVG.RECT=MochiKit.DOM.createDOMFuncExt(MochiKit.DOM.NS.SVG,"rect",["x","y","width","height"]);
MochiKit.SVG.CIRCLE=MochiKit.DOM.createDOMFuncExt(MochiKit.DOM.NS.SVG,"circle",["cx","cy","r"]);
MochiKit.SVG.PATH=MochiKit.DOM.createDOMFuncExt(MochiKit.DOM.NS.SVG,"path",["d"]);
MochiKit.SVG.TEXT=MochiKit.DOM.createDOMFuncExt(MochiKit.DOM.NS.SVG,"text",["x","y"]);
MochiKit.SVG.RADIALGRADIENT=MochiKit.DOM.createDOMFuncExt(MochiKit.DOM.NS.SVG,"radialGradient",["id"],{gradientUnits:"objectBoundingBox",cx:"0.5",cy:"0.5",r:"0.5"});
MochiKit.SVG.STOP=MochiKit.DOM.createDOMFuncExt(MochiKit.DOM.NS.SVG,"stop",["offset","stop-color"]);
MochiKit.SVG.moveToTop=function(node){
node=MochiKit.DOM.getElement(node);
if(node!=null){
var _7e1=node.parentNode;
if(_7e1&&_7e1.lastChild!==node){
_7e1.appendChild(node);
}
}
};
MochiKit.SVG.moveToBottom=function(node){
node=MochiKit.DOM.getElement(node);
if(node!=null){
var _7e3=node.parentNode;
if(_7e3&&_7e3.firstChild!==node){
_7e3.insertBefore(node,_7e3.firstChild);
}
}
};
MochiKit.SVG.rotate=function(node,_7e5,x,y){
var str=MochiKit.DOM.getNodeAttribute(node,"transform");
x=x||0;
y=y||0;
if(str==null||str==""){
str="";
}else{
str+=" ";
}
str+="rotate("+_7e5+","+x+","+y+")";
MochiKit.DOM.setNodeAttribute(node,"transform",str);
};
if(typeof (MochiKit)=="undefined"){
throw new ReferenceError("MochiKit must be loaded before loading this script");
}
if(typeof (MochiKit.Style)=="undefined"){
throw new ReferenceError("MochiKit.Style must be loaded before loading this script");
}
MochiKit.Style.getBorderBox=function(node){
var _7ea=MochiKit.Style.getStyle;
var px=MochiKit.Style._toPixels;
return {t:px(_7ea(node,"border-width-top")),b:px(_7ea(node,"border-width-bottom")),l:px(_7ea(node,"border-width-left")),r:px(_7ea(node,"border-width-right"))};
};
MochiKit.Style.getPaddingBox=function(node){
var _7ed=MochiKit.Style.getStyle;
var px=MochiKit.Style._toPixels;
return {t:px(_7ed(node,"padding-top")),b:px(_7ed(node,"padding-bottom")),l:px(_7ed(node,"padding-left")),r:px(_7ed(node,"padding-right"))};
};
MochiKit.Style._toPixels=function(_7ef){
if(_7ef!=null){
try{
_7ef=MochiKit.Format.rstrip(_7ef,"px");
_7ef=Math.round(parseFloat(_7ef));
}
catch(ignore){
_7ef=null;
}
}
return (_7ef==null||isNaN(_7ef))?null:_7ef;
};
MochiKit.Style.getScrollOffset=function(node){
node=MochiKit.DOM.getElement(node);
var x=node.scrollLeft||0;
var y=node.scrollTop||0;
return new MochiKit.Style.Coordinates(x,y);
};
MochiKit.Style.setScrollOffset=function(node,_7f4){
node=MochiKit.DOM.getElement(node);
node.scrollLeft=_7f4.x;
node.scrollTop=_7f4.y;
};
MochiKit.Style.resetScrollOffset=function(node,_7f6){
node=MochiKit.DOM.getElement(node);
node.scrollLeft=0;
node.scrollTop=0;
if(_7f6){
node=node.firstChild;
while(node!=null){
if(node.nodeType===1){
MochiKit.Style.resetScrollOffset(node,true);
}
node=node.nextSibling;
}
}
};
MochiKit.Style.adjustScrollOffset=function(node,box){
node=MochiKit.DOM.getElement(node);
var dim=MochiKit.Style.getElementDimensions(node);
var xMin=MochiKit.Base.defaultValue(box.l,box.x,NaN);
var xMax=MochiKit.Base.defaultValue(box.r,xMin+box.w,NaN);
var yMin=MochiKit.Base.defaultValue(box.t,box.y,NaN);
var yMax=MochiKit.Base.defaultValue(box.b,yMin+box.h,NaN);
if(!isNaN(xMax)&&node.scrollLeft+dim.w<xMax){
node.scrollLeft=xMax-dim.h;
}
if(!isNaN(xMin)&&node.scrollLeft>xMin){
node.scrollLeft=xMin;
}
if(!isNaN(yMax)&&node.scrollTop+dim.h<yMax){
node.scrollTop=yMax-dim.h;
}
if(!isNaN(yMin)&&node.scrollTop>yMin){
node.scrollTop=yMin;
}
};
MochiKit.Style.registerSizeConstraints=function(node,_7ff,_800,_801){
node=MochiKit.DOM.getElement(node);
var sc=node.sizeConstraints={w:null,h:null,a:null};
if(typeof (_7ff)=="number"){
sc.w=function(w,h){
return _7ff;
};
}else{
if(typeof (_7ff)=="function"){
sc.w=_7ff;
}else{
if(typeof (_7ff)=="string"){
var code="return "+_7ff.replace(/%/g,"*0.01*w")+";";
sc.w=new Function("w","h",code);
}
}
}
if(typeof (_800)=="number"){
sc.h=function(w,h){
return _800;
};
}else{
if(typeof (_800)=="function"){
sc.h=_800;
}else{
if(typeof (_800)=="string"){
var code="return "+_800.replace(/%/g,"*0.01*h")+";";
sc.h=new Function("w","h",code);
}
}
}
if(typeof (_801)=="number"){
sc.a=function(w,h){
return _801;
};
}else{
if(typeof (_801)=="function"){
sc.a=_801;
}else{
if(typeof (_801)=="string"){
var code="return "+_801.replace(/%/g,"*0.01*w/h")+";";
sc.a=new Function("w","h",code);
}
}
}
};
MochiKit.Style.resizeElements=function(){
var args=MochiKit.Base.flattenArray(arguments);
for(var i=0;i<args.length;i++){
var node=MochiKit.DOM.getElement(args[i]);
if(node!=null&&node.nodeType===1&&node.parentNode!=null&&node.sizeConstraints!=null){
var ref={w:node.parentNode.w,h:node.parentNode.h};
if(ref.w==null&&ref.h==null){
ref=MochiKit.Style.getElementDimensions(node.parentNode,true);
}
var dim=MochiKit.Style._evalConstraints(node.sizeConstraints,ref);
MochiKit.Style.setElementDimensions(node,dim);
node.w=dim.w;
node.h=dim.h;
}
if(node!=null&&typeof (node.resizeContent)=="function"){
node.resizeContent();
}else{
node=node.firstChild;
while(node!=null){
if(node.nodeType===1){
MochiKit.Style.resizeElements(node);
}
node=node.nextSibling;
}
}
}
};
MochiKit.Style._evalConstraints=function(sc,ref){
var log=MochiKit.Logging.logError;
if(typeof (sc.w)=="function"){
try{
var w=Math.max(0,Math.min(ref.w,sc.w(ref.w,ref.h)));
}
catch(e){
log("Error evaluating width size constraint; "+"w: "+ref.w+", h: "+ref.h,e);
}
}
if(typeof (sc.h)=="function"){
try{
var h=Math.max(0,Math.min(ref.h,sc.h(ref.w,ref.h)));
}
catch(e){
log("Error evaluating height size constraint; "+"w: "+ref.w+", h: "+ref.h,e);
}
}
if(typeof (sc.a)=="function"){
try{
var a=sc.a(ref.w,ref.h);
w=w||ref.w;
h=h||ref.h;
if(h*a>ref.w){
h=ref.w/a;
}
if(w/a>ref.h){
w=ref.h*a;
}
if(w>h*a){
w=h*a;
}else{
h=w/a;
}
}
catch(e){
log("Error evaluating aspect size constraint; "+"w: "+ref.w+", h: "+ref.h,e);
}
}
if(w!=null){
w=Math.floor(w);
}
if(h!=null){
h=Math.floor(h);
}
return new MochiKit.Style.Dimensions(w,h);
};
if(typeof (MochiKit)=="undefined"){
throw new ReferenceError("MochiKit must be loaded before loading this script");
}
MochiKit.Widget=function(){
throw new ReferenceError("cannot call Widget constructor");
};
MochiKit.Widget.isWidget=function(obj,_816){
if(_816!=null){
return MochiKit.DOM.isHTML(obj)&&MochiKit.DOM.hasElementClass(obj,"widget")&&MochiKit.DOM.hasElementClass(obj,"widget"+_816);
}else{
return MochiKit.DOM.isHTML(obj)&&MochiKit.DOM.hasElementClass(obj,"widget");
}
};
MochiKit.Widget.isFormField=function(obj){
if(!MochiKit.DOM.isHTML(obj)||typeof (obj.tagName)!=="string"){
return false;
}
var _818=obj.tagName.toUpperCase();
return _818=="INPUT"||_818=="TEXTAREA"||_818=="SELECT"||typeof (obj.value)!=="undefined";
};
MochiKit.Widget.createWidget=function(name,_81a){
var cls=MochiKit.Widget.Classes[name];
if(cls==null){
throw new ReferenceError("failed to find widget '"+name+"' in MochiKit.Widget.Classes");
}
var w=new cls(_81a);
for(var i=2;i<arguments.length;i++){
w.addAll(arguments[i]);
}
return w;
};
MochiKit.Widget.createWidgetTree=function(node,ids){
if(node.documentElement){
return MochiKit.Widget.createWidgetTree(node.documentElement.childNodes,ids);
}else{
if(typeof (node.item)!="undefined"&&typeof (node.length)=="number"){
var res=[];
for(var i=0;i<node.length;i++){
var list=MochiKit.Widget.createWidgetTree(node[i],ids);
if(!MochiKit.Base.isUndefinedOrNull(list)){
res=res.concat(list);
}
}
return res;
}else{
if(node.nodeType===1){
try{
return [MochiKit.Widget._createWidgetTreeElem(node,ids)];
}
catch(e){
MochiKit.Logging.logError("Failed to create DOM node or widget",e);
}
}else{
if(node.nodeType===3){
var str=node.nodeValue;
if(str!=null&&MochiKit.Format.strip(str)!=""){
return MochiKit.DOM.createTextNode(str.replace(/\s+/g," "));
}
}
}
}
}
return null;
};
MochiKit.Widget._createWidgetTreeElem=function(node,ids){
var name=node.nodeName;
var _827=MochiKit.Base.dict(MochiKit.DOM.attributeArrayNewImpl(node));
var _828=MochiKit.Base.mask(_827,["id","w","h","a","class","style"]);
var _829=MochiKit.Widget.createWidgetTree(node.childNodes,ids);
if(MochiKit.Widget.Classes[name]){
var _82a=MochiKit.Widget.createWidget(name,_827,_829);
}else{
var _82a=MochiKit.DOM.createDOM(name,_827,_829);
}
if(_828.id){
if(ids){
ids[_828.id]=_82a;
}else{
_82a.id=_828.id;
}
}
if(_828.w||_828.h||_828.a){
MochiKit.Style.registerSizeConstraints(_82a,_828.w,_828.h,_828.a);
}
if(_828["class"]){
var _82b=_828["class"].split(" ");
if(typeof (_82a.addClass)=="function"){
_82a.addClass.apply(_82a,_82b);
}else{
for(var i=0;i<arguments.length;i++){
MochiKit.DOM.addElementClass(_82a,_82b[i]);
}
}
}
if(_828.style){
var _82d={};
var _82e=_828.style.split(";");
for(var i=0;i<_82e.length;i++){
var a=_82e[i].split(":");
_82d[MochiKit.Format.strip(a[0])]=MochiKit.Format.strip(a[1]);
}
MochiKit.Style.setStyle(_82a,_82d);
}
return _82a;
};
MochiKit.Widget.destroyWidget=function(node){
if(typeof (node.destroy)=="function"){
node.destroy();
}
if(node.parentNode!=null){
MochiKit.DOM.removeElement(node);
}
MochiKit.Signal.disconnectAll(node);
while(node.firstChild!=null){
MochiKit.Widget.destroyWidget(node.firstChild);
}
};
MochiKit.Widget.emitSignal=function(node,sig){
try{
MochiKit.Signal.signal.apply(MochiKit.Signal,arguments);
return true;
}
catch(e){
var msg="Exception in signal '"+sig+"' handler";
MochiKit.Logging.logError(msg,e);
return false;
}
};
MochiKit.Widget.prototype.destroy=function(){
};
MochiKit.Widget.prototype.setAttrs=function(_834){
MochiKit.DOM.updateNodeAttributes(this,_834);
};
MochiKit.Widget.prototype.setStyle=function(_835){
MochiKit.Style.setStyle(this,_835);
};
MochiKit.Widget.prototype.hasClass=function(){
for(var i=0;i<arguments.length;i++){
if(!MochiKit.DOM.hasElementClass(this,arguments[i])){
return false;
}
}
return true;
};
MochiKit.Widget.prototype.addClass=function(){
for(var i=0;i<arguments.length;i++){
MochiKit.DOM.addElementClass(this,arguments[i]);
}
};
MochiKit.Widget.prototype.removeClass=function(){
for(var i=0;i<arguments.length;i++){
MochiKit.DOM.removeElementClass(this,arguments[i]);
}
};
MochiKit.Widget.prototype.toggleClass=function(){
if(this.hasClass.apply(this,arguments)){
this.removeClass.apply(this,arguments);
return false;
}else{
this.addClass.apply(this,arguments);
return true;
}
};
MochiKit.Widget.prototype.isHidden=function(){
return this.hasClass("widgetHidden");
};
MochiKit.Widget.prototype.show=function(){
this.removeClass("widgetHidden");
};
MochiKit.Widget.prototype.hide=function(){
this.addClass("widgetHidden");
};
MochiKit.Widget.prototype.animate=function(opts){
if(this._anim!=null){
this._anim.cancel();
}
var func=MochiKit.Visual[opts.effect];
if(typeof (func)=="function"){
this._anim=func.call(null,this,opts);
}
};
MochiKit.Widget.prototype.blurAll=function(){
MochiKit.DOM.blurAll(this);
};
MochiKit.Widget.prototype.getChildNodes=function(){
return MochiKit.Base.extend([],this.childNodes);
};
MochiKit.Widget.prototype.addChildNode=function(_83b){
this.appendChild(_83b);
};
MochiKit.Widget.prototype.removeChildNode=function(_83c){
this.removeChild(_83c);
};
MochiKit.Widget.prototype.addAll=function(){
var args=MochiKit.Base.flattenArray(arguments);
for(var i=0;i<args.length;i++){
if(args[i]==null){
}else{
if(MochiKit.DOM.isDOM(args[i])){
this.addChildNode(args[i]);
MochiKit.Style.resizeElements(args[i]);
}else{
this.addChildNode(MochiKit.DOM.createTextNode(args[i]));
}
}
}
};
MochiKit.Widget.prototype.removeAll=function(){
var _83f=this.getChildNodes();
for(var i=_83f.length-1;i>=0;i--){
this.removeChildNode(_83f[i]);
MochiKit.Widget.destroyWidget(_83f[i]);
}
};
MochiKit.Widget.Button=function(_841){
var cls=arguments.callee;
if(!(this instanceof cls)){
return new cls(_841,MochiKit.Base.extend(null,arguments,1));
}
var o=MochiKit.DOM.BUTTON();
MochiKit.Base.updatetree(o,this);
o.addClass("widget","widgetButton");
o.setAttrs(_841);
o.addAll(MochiKit.Base.extend(null,arguments,1));
return o;
};
MochiKit.Widget.Button.prototype=MochiKit.Base.clone(MochiKit.Widget.prototype);
MochiKit.Widget.Button.prototype.setAttrs=function(_844){
_844=MochiKit.Base.update({},_844);
var _845=MochiKit.Base.mask(_844,["highlight"]);
if(typeof (_845.highlight)!="undefined"){
if(MochiKit.Base.isFalse(_845.highlight)){
this.removeClass("widgetButtonHighlight");
}else{
this.addClass("widgetButtonHighlight");
}
}
MochiKit.DOM.updateNodeAttributes(this,_844);
};
MochiKit.Widget.Dialog=function(_846){
var cls=arguments.callee;
if(!(this instanceof cls)){
return new cls(_846,MochiKit.Base.extend(null,arguments,1));
}
var _848=MochiKit.DOM.DIV({"class":"widgetDialogTitle"},"Dialog");
var _849=new MochiKit.Widget.Icon({ref:"CLOSE","class":"widgetDialogClose"});
var _84a=new MochiKit.Widget.Icon({ref:"RESIZE","class":"widgetDialogResize"});
var _84b=MochiKit.DOM.DIV({"class":"widgetDialogContent"});
MochiKit.Style.registerSizeConstraints(_84b,"100% - 22","100% - 44");
var o=MochiKit.DOM.DIV({},_848,_849,_84a,_84b);
MochiKit.Base.updatetree(o,this);
o.setAttrs(MochiKit.Base.update({modal:false,center:true},_846));
o.addClass("widget","widgetDialog","widgetHidden");
o.addAll(MochiKit.Base.extend(null,arguments,1));
MochiKit.Signal.connect(_848,"onmousedown",o,"_handleMoveStart");
MochiKit.Signal.connect(_849,"onclick",o,"hide");
MochiKit.Signal.connect(_84a,"onmousedown",o,"_handleResizeStart");
return o;
};
MochiKit.Widget.Dialog.prototype=MochiKit.Base.clone(MochiKit.Widget.prototype);
MochiKit.Widget.Dialog.prototype.setAttrs=function(_84d){
_84d=MochiKit.Base.update({},_84d);
var _84e=MochiKit.Base.mask(_84d,["title","modal","center"]);
if(typeof (_84e.title)!="undefined"){
MochiKit.DOM.replaceChildNodes(this.firstChild,_84e.title);
}
if(typeof (_84e.modal)!="undefined"){
this.modal=!MochiKit.Base.isFalse(_84e.modal);
}
if(typeof (_84e.center)!="undefined"){
this.center=!MochiKit.Base.isFalse(_84e.center);
}
MochiKit.DOM.updateNodeAttributes(this,_84d);
};
MochiKit.Widget.Dialog.prototype.show=function(){
if(this.parentNode==null){
throw new Error("Cannot show Dialog widget without setting a parent DOM node");
}
if(this.modal){
var _84f={loading:false,message:"",style:{"z-index":"99"}};
this._modalNode=new MochiKit.Widget.Overlay(_84f);
this.parentNode.appendChild(this._modalNode);
}
this.removeClass("widgetHidden");
var dim=MochiKit.Style.getElementDimensions(this);
this.resizeTo(dim.w,dim.h);
if(this.center){
this.moveToCenter();
}
MochiKit.Style.resetScrollOffset(this,true);
MochiKit.Widget.emitSignal(this,"onshow");
};
MochiKit.Widget.Dialog.prototype.hide=function(){
if(this._modalNode!=null){
MochiKit.Widget.destroyWidget(this._modalNode);
this._modalNode=null;
}
this.blurAll();
this.addClass("widgetHidden");
MochiKit.Widget.emitSignal(this,"onhide");
};
MochiKit.Widget.Dialog.prototype.getChildNodes=function(){
return MochiKit.Base.extend([],this.lastChild.childNodes);
};
MochiKit.Widget.Dialog.prototype.addChildNode=function(_851){
this.lastChild.appendChild(_851);
};
MochiKit.Widget.Dialog.prototype.removeChildNode=function(_852){
this.lastChild.removeChild(_852);
};
MochiKit.Widget.Dialog.prototype.moveTo=function(x,y){
var _855=MochiKit.Style.getElementDimensions(this.parentNode);
var dim=MochiKit.Style.getElementDimensions(this);
var pos={x:Math.max(0,Math.min(x,_855.w-dim.w-2)),y:Math.max(0,Math.min(y,_855.h-dim.h-2))};
MochiKit.Style.setElementPosition(this,pos);
MochiKit.Widget.emitSignal(this,"onmove",pos);
};
MochiKit.Widget.Dialog.prototype.moveToCenter=function(){
var _858=MochiKit.Style.getElementDimensions(this.parentNode);
var dim=MochiKit.Style.getElementDimensions(this);
var pos={x:Math.round(Math.max(0,(_858.w-dim.w)/2)),y:Math.round(Math.max(0,(_858.h-dim.h)/2))};
MochiKit.Style.setElementPosition(this,pos);
MochiKit.Widget.emitSignal(this,"onmove",pos);
};
MochiKit.Widget.Dialog.prototype.resizeTo=function(_85b,_85c){
var _85d=MochiKit.Style.getElementDimensions(this.parentNode);
var pos=MochiKit.Style.getElementPosition(this.parentNode);
pos=MochiKit.Style.getElementPosition(this,pos);
var dim={w:Math.max(150,Math.min(_85b,_85d.w-pos.x-2)),h:Math.max(100,Math.min(_85c,_85d.h-pos.y-2))};
MochiKit.Style.setElementDimensions(this,dim);
MochiKit.Style.registerSizeConstraints(this,null,null);
MochiKit.Base.update(this,dim);
MochiKit.Style.resizeElements(this.lastChild);
MochiKit.Widget.emitSignal(this,"onresize",dim);
};
MochiKit.Widget.Dialog.prototype._handleMoveStart=function(evt){
var pos=MochiKit.Style.getElementPosition(this.parentNode);
this._offsetPos=MochiKit.Style.getElementPosition(this,pos);
this._startPos=evt.mouse().page;
evt.stop();
MochiKit.Signal.connect(document,"onmousemove",this,"_handleMove");
MochiKit.Signal.connect(document,"onmouseup",this,"_stopDrag");
};
MochiKit.Widget.Dialog.prototype._handleMove=function(evt){
var pos=evt.mouse().page;
this.moveTo(this._offsetPos.x+pos.x-this._startPos.x,this._offsetPos.y+pos.y-this._startPos.y);
};
MochiKit.Widget.Dialog.prototype._handleResizeStart=function(evt){
this._offsetDim=MochiKit.Style.getElementDimensions(this);
this._startPos=evt.mouse().page;
evt.stop();
MochiKit.Signal.connect(document,"onmousemove",this,"_handleResize");
MochiKit.Signal.connect(document,"onmousedown",function(evt){
evt.stop();
});
MochiKit.Signal.connect(document,"onmouseup",this,"_stopDrag");
};
MochiKit.Widget.Dialog.prototype._handleResize=function(evt){
var pos=evt.mouse().page;
this.resizeTo(this._offsetDim.w+pos.x-this._startPos.x,this._offsetDim.h+pos.y-this._startPos.y);
};
MochiKit.Widget.Dialog.prototype._stopDrag=function(evt){
MochiKit.Signal.disconnectAll(document,"onmousemove");
MochiKit.Signal.disconnectAll(document,"onmousedown");
MochiKit.Signal.disconnectAll(document,"onmouseup");
};
MochiKit.Widget.Field=function(_869){
var cls=arguments.callee;
if(!(this instanceof cls)){
return new cls(_869);
}
var o=MochiKit.DOM.SPAN();
MochiKit.Base.updatetree(o,this);
o.addClass("widget","widgetField");
o.setAttrs(MochiKit.Base.update({name:"",value:"",maxLength:-1},_869));
o.defaultValue=o.value;
return o;
};
MochiKit.Widget.Field.prototype=MochiKit.Base.clone(MochiKit.Widget.prototype);
MochiKit.Widget.Field.prototype.setAttrs=function(_86c){
_86c=MochiKit.Base.update({},_86c);
var _86d=MochiKit.Base.mask(_86c,["name","value","maxLength"]);
if(typeof (_86d.name)!="undefined"){
this.name=_86d.name;
}
if(typeof (_86d.format)!="undefined"){
this.format=_86d.format;
}
if(typeof (_86d.maxLength)!="undefined"){
this.maxLength=parseInt(_86d.maxLength);
}
if(typeof (_86d.value)!="undefined"){
var str=this.value=_86d.value;
if(this.format){
str=MochiKit.Format.format(this.format,str);
}else{
if(str==null){
str="null";
}else{
if(typeof (str)!="string"){
str=str.toString();
}
}
}
var _86f=str;
if(this.maxLength>0){
str=MochiKit.Format.truncate(str,this.maxLength,"...");
}
MochiKit.DOM.replaceChildNodes(this,str);
this.title=(str==_86f)?null:_86f;
}
MochiKit.DOM.updateNodeAttributes(this,_86c);
};
MochiKit.Widget.Form=function(_870){
var cls=arguments.callee;
if(!(this instanceof cls)){
return new cls(_870);
}
var o=MochiKit.DOM.FORM(_870);
MochiKit.Base.updatetree(o,this);
o.addClass("widget","widgetForm");
MochiKit.Signal.connect(o,"onsubmit",o,"_handleSubmit");
o.addAll(MochiKit.Base.extend(null,arguments,1));
return o;
};
MochiKit.Widget.Form.prototype=MochiKit.Base.clone(MochiKit.Widget.prototype);
MochiKit.Widget.Form.prototype.fields=function(){
var _873=[];
MochiKit.Base.nodeWalk(this,function(elem){
if(elem.nodeType!==1){
return null;
}
if(MochiKit.Widget.isFormField(elem)){
_873.push(elem);
return null;
}else{
return elem.childNodes;
}
});
return _873;
};
MochiKit.Widget.Form.prototype.fieldMap=function(){
var _875=this.fields();
var map={};
for(var i=0;i<_875.length;i++){
var name=_875[i].name;
if(typeof (name)=="string"){
if(map[name] instanceof Array){
map[name].push(_875[i]);
}else{
if(map[name]!=null){
map[name]=[map[name],_875[i]];
}else{
map[name]=_875[i];
}
}
}
}
return map;
};
MochiKit.Widget.Form.prototype.reset=function(){
this.validateReset();
var _879=this.fields();
for(var i=0;i<_879.length;i++){
var elem=_879[i];
if(typeof (elem.reset)=="function"){
elem.reset();
}else{
if(elem.type=="radio"&&typeof (elem.defaultChecked)=="boolean"){
elem.checked=elem.defaultChecked;
}else{
if(elem.type=="checkbox"&&typeof (elem.defaultChecked)=="boolean"){
elem.checked=elem.defaultChecked;
}else{
if(typeof (elem.defaultValue)=="string"){
if(typeof (elem.setAttrs)=="function"){
elem.setAttrs({value:elem.defaultValue});
}else{
elem.value=elem.defaultValue;
}
}else{
if(elem.options!=null){
for(var j=0;j<elem.options.length;j++){
var opt=elem.options[j];
opt.selected=opt.defaultSelected;
}
}
}
}
}
}
}
};
MochiKit.Widget.Form.prototype.valueMap=function(){
var _87e=this.fields();
var map={};
for(var i=0;i<_87e.length;i++){
var name=_87e[i].name;
var _882="";
if(typeof (_87e[i].getValue)=="function"){
_882=_87e[i].getValue();
}else{
_882=_87e[i].value;
}
if(_87e[i].type==="radio"||_87e[i].type==="checkbox"){
if(_87e[i].checked){
_882=_882||true;
}else{
_882=null;
}
}
if(typeof (name)=="string"&&_882!=null){
if(map[name] instanceof Array){
map[name].push(_882);
}else{
if(map[name]!=null){
map[name]=[map[name],_882];
}else{
map[name]=_882;
}
}
}
}
return map;
};
MochiKit.Widget.Form.prototype.update=function(_883){
var _884=this.fields();
for(var i=0;i<_884.length;i++){
var elem=_884[i];
if(elem.name in _883){
var _887=_883[elem.name];
if(elem.type==="radio"||elem.type==="checkbox"){
if(_887==null){
elem.checked=false;
}else{
if(MochiKit.Base.isArrayLike(_887)){
elem.checked=(MochiKit.Base.findValue(_887,elem.value)>=0);
}else{
elem.checked=(elem.value===_887||_887===true);
}
}
}else{
if(MochiKit.Base.isArrayLike(_887)){
_887=_887.join(", ");
}
if(typeof (elem.setAttrs)=="function"){
elem.setAttrs({value:_887});
}else{
elem.value=_887;
}
}
}
}
};
MochiKit.Widget.Form.prototype.validators=function(){
var res=[];
var _889=this.getElementsByTagName("SPAN");
for(var i=0;i<_889.length;i++){
if(MochiKit.Widget.isWidget(_889[i],"FormValidator")){
res.push(_889[i]);
}
}
return res;
};
MochiKit.Widget.Form.prototype.validate=function(){
var _88b=this.validators();
var _88c=this.fields();
var _88d=true;
var _88e=[];
for(var i=0;i<_88b.length;i++){
_88b[i].reset();
}
for(var i=0;i<_88b.length;i++){
for(var j=0;j<_88c.length;j++){
if(_88b[i].name==_88c[j].name){
var res=_88b[i].verify(_88c[j]);
if(res instanceof MochiKit.Async.Deferred){
_88e.push(res);
}else{
if(res===false){
_88d=false;
}
}
}
}
}
if(!_88d){
return false;
}else{
if(_88e.length>0){
return MochiKit.Async.gatherResults(_88e);
}else{
return true;
}
}
};
MochiKit.Widget.Form.prototype.validateReset=function(){
var _892=this.validators();
for(var i=0;i<_892.length;i++){
_892[i].reset();
}
};
MochiKit.Widget.Form.prototype._handleSubmit=function(evt){
evt.stop();
};
MochiKit.Widget.FormValidator=function(_895){
var cls=arguments.callee;
if(!(this instanceof cls)){
return new cls(_895);
}
var o=MochiKit.DOM.SPAN();
MochiKit.Base.updatetree(o,this);
o.addClass("widget","widgetFormValidator");
o.setAttrs(MochiKit.Base.update({name:"",mandatory:true,display:"error",message:null,validator:null},_895));
o.fields=[];
o.hide();
return o;
};
MochiKit.Widget.FormValidator.prototype=MochiKit.Base.clone(MochiKit.Widget.prototype);
MochiKit.Widget.FormValidator.prototype.setAttrs=function(_898){
_898=MochiKit.Base.update({},_898);
var _899=MochiKit.Base.mask(_898,["name","mandatory","regex","display","message","validator"]);
if(typeof (_899.name)!="undefined"){
this.name=_899.name;
}
if(typeof (_899.mandatory)!="undefined"){
this.mandatory=!MochiKit.Base.isFalse(_899.mandatory);
}
if(typeof (_899.regex)!="undefined"){
if(_899.regex instanceof RegExp){
this.regex=_899.regex;
}else{
if(_899.regex.indexOf("^")!=0){
_899.regex="^"+_899.regex;
}
if(_899.regex.indexOf("$")!=_899.regex.length-1){
_899.regex+="$";
}
this.regex=new RegExp(_899.regex);
}
}
if(typeof (_899.display)!="undefined"){
this.display=_899.display;
}
if(typeof (_899.message)!="undefined"){
this.message=_899.message;
}
if(typeof (_899.validator)!="undefined"){
this.validator=_899.validator;
}
MochiKit.DOM.updateNodeAttributes(this,_898);
};
MochiKit.Widget.FormValidator.prototype.reset=function(){
for(var i=0;i<this.fields.length;i++){
MochiKit.DOM.removeElementClass(this.fields[i],"widgetInvalid");
}
this.fields=[];
if(this.display==="error"){
this.hide();
this.removeAll();
}
};
MochiKit.Widget.FormValidator.prototype.verify=function(_89b){
if(!_89b.disabled){
var _89c="";
if(typeof (_89b.getValue)=="function"){
_89c=_89b.getValue();
}else{
_89c=_89b.value;
}
var _89d=MochiKit.Format.strip(_89c);
if(MochiKit.Format.strip(_89c)==""){
if(this.mandatory){
var msg="This field is mandatory and cannot be left blank";
this.addError(_89b,msg);
return false;
}
}else{
if(this.regex!=null&&!this.regex.test(_89d)){
var msg="The field format is incorrect";
this.addError(_89b,msg);
return false;
}else{
if(typeof (this.validator)=="function"){
var res=this.validator(_89c);
if(res instanceof MochiKit.Async.Deferred){
var self=this;
res.addErrback(function(e){
self.addError(_89b,e.message);
return e;
});
return res;
}else{
if(typeof (res)=="string"){
this.addError(_89b,res);
return false;
}else{
if(res===false){
this.addError(_89b,"Field validation failed");
return false;
}
}
}
}
}
}
}
return true;
};
MochiKit.Widget.FormValidator.prototype.addError=function(_8a2,_8a3){
if(!MochiKit.DOM.hasElementClass(_8a2,"widgetInvalid")){
this.fields.push(_8a2);
MochiKit.DOM.addElementClass(_8a2,"widgetInvalid");
if(this.display==="error"){
var _8a4={ref:"ERROR",tooltip:this.message||_8a3};
this.addAll(new MochiKit.Widget.Icon(_8a4));
this.show();
}
}
};
MochiKit.Widget.Icon=function(_8a5){
var cls=arguments.callee;
if(!(this instanceof cls)){
return new cls(_8a5);
}
var o=MochiKit.DOM.IMG();
MochiKit.Base.updatetree(o,this);
o.setAttrs(_8a5);
o.addClass("widget","widgetIcon");
return o;
};
MochiKit.Widget.Icon.prototype=MochiKit.Base.clone(MochiKit.Widget.prototype);
MochiKit.Widget.Icon.prototype.setAttrs=function(_8a8){
_8a8=MochiKit.Base.update({},_8a8);
if(_8a8.ref){
MochiKit.Base.setdefault(_8a8,MochiKit.Widget.Icon[_8a8.ref],MochiKit.Widget.Icon.DEFAULT);
}
var _8a9=MochiKit.Base.mask(_8a8,["ref","url","baseUrl","tooltip","width","height"]);
if(typeof (_8a9.url)!="undefined"){
MochiKit.Base.setdefault(_8a9,MochiKit.Widget.Icon.DEFAULT);
_8a8.src=_8a9.baseUrl+_8a9.url;
}
if(typeof (_8a9.tooltip)!="undefined"){
_8a8.alt=_8a9.tooltip;
_8a8.title=_8a9.tooltip;
}
if(typeof (_8a9.width)!="undefined"){
this.width=_8a9.width;
this.setStyle({width:_8a9.width});
}
if(typeof (_8a9.height)!="undefined"){
this.height=_8a9.height;
this.setStyle({height:_8a9.height});
}
MochiKit.DOM.updateNodeAttributes(this,_8a8);
};
MochiKit.Base.update(MochiKit.Widget.Icon,{DEFAULT:{baseUrl:"images/icons/",width:"16",height:"16"},BLANK:{url:"blank.gif",style:{cursor:"default"}},CLOSE:{url:"close.gif"},RESIZE:{url:"resize-handle.gif"},OK:{url:"ok.gif",tooltip:"OK"},CANCEL:{url:"cancel.gif",tooltip:"Cancel"},HELP:{url:"help.gif",tooltip:"Help"},ERROR:{url:"error.gif",tooltip:"Error"},PLUS:{url:"plus.gif",tooltip:"Show"},MINUS:{url:"minus.gif",tooltip:"Hide"},NEXT:{url:"next.gif",tooltip:"Next"},PREVIOUS:{url:"previous.gif",tooltip:"Previous"},CONFIG:{url:"config.gif",tooltip:"Configure"},DELAY:{url:"delay.gif",tooltip:"Configure Delay"},RELOAD:{url:"reload.gif",tooltip:"Reload"},LOADING:{url:"loading.gif",tooltip:"Loading..."},LOADING_LARGE:{url:"loading-large.gif",tooltip:"Loading...",width:"32",height:"32"},SEARCH:{url:"magnifier.gif",tooltip:"Search"},ADD:{url:"add.gif",tooltip:"Add"},REMOVE:{url:"remove.gif",tooltip:"Remove"},EDIT:{url:"edit.gif",tooltip:"Edit"},DELETE:{url:"trash.gif",tooltip:"Clear / Delete"},SELECT:{url:"select.gif",tooltip:"Select / Unselect"},CUT:{url:"cut.gif",tooltip:"Cut"},EXPORT:{url:"export.gif",tooltip:"Export"},EXPAND:{url:"expand.gif",tooltip:"Expand"},UP:{url:"up.gif",tooltip:"Move Up"},DOWN:{url:"down.gif",tooltip:"Move Down"},LEFT:{url:"left.gif",tooltip:"Move Left"},RIGHT:{url:"right.gif",tooltip:"Move Right"},COMMENT:{url:"comment.gif",tooltip:"Comment"},CALENDAR:{url:"calendar.gif",tooltip:"Calendar"},AUTOMATIC:{url:"automatic.gif",tooltip:"Automatic Processing"},PLUGIN:{url:"plugin.gif",tooltip:"Plug-in"},FOLDER:{url:"folder.gif"},DOCUMENT:{url:"document.gif"}});
MochiKit.Widget.Overlay=function(_8aa){
var cls=arguments.callee;
if(!(this instanceof cls)){
return new cls(_8aa,MochiKit.Base.extend(null,arguments,1));
}
var msg=MochiKit.DOM.DIV({"class":"widgetOverlayMessage"});
var o=MochiKit.DOM.DIV({},msg);
MochiKit.Base.updatetree(o,this);
o.addClass("widget","widgetOverlay");
_8aa=MochiKit.Base.update({loading:true,message:"Working..."},_8aa);
o.setAttrs(_8aa);
o.addAll(MochiKit.Base.extend(null,arguments,1));
return o;
};
MochiKit.Widget.Overlay.prototype=MochiKit.Base.clone(MochiKit.Widget.prototype);
MochiKit.Widget.Overlay.prototype.setAttrs=function(_8ae){
_8ae=MochiKit.Base.update({},_8ae);
var _8af=MochiKit.Base.mask(_8ae,["loading","message"]);
if(typeof (_8af.loading)!="undefined"){
this.showLoading=!MochiKit.Base.isFalse(_8af.loading);
}
if(typeof (_8af.message)!="undefined"){
this.message=_8af.message;
}
if(typeof (this.showLoading)!="undefined"){
var icon=new MochiKit.Widget.Icon({ref:"LOADING_LARGE"});
icon.setStyle({"padding-right":"20px"});
}
MochiKit.DOM.replaceChildNodes(this.firstChild,icon,this.message);
MochiKit.DOM.updateNodeAttributes(this,_8ae);
};
MochiKit.Widget.Pane=function(_8b1){
var cls=arguments.callee;
if(!(this instanceof cls)){
return new cls(_8b1,MochiKit.Base.extend(null,arguments,1));
}
var o=MochiKit.DOM.DIV();
MochiKit.Base.updatetree(o,this);
o.addClass("widget","widgetPane");
o.setAttrs(MochiKit.Base.update({pageTitle:"Page",pageStatus:"ANY",pageCloseable:false},_8b1));
o.addAll(MochiKit.Base.extend(null,arguments,1));
return o;
};
MochiKit.Widget.Pane.prototype=MochiKit.Base.clone(MochiKit.Widget.prototype);
MochiKit.Widget.Pane.ANY={previous:true,next:true};
MochiKit.Widget.Pane.FORWARD={previous:false,next:true};
MochiKit.Widget.Pane.BACKWARD={previous:true,next:false};
MochiKit.Widget.Pane.WORKING={previous:false,next:false};
MochiKit.Widget.Pane.prototype.setAttrs=function(_8b4){
_8b4=MochiKit.Base.update({},_8b4);
var _8b5=MochiKit.Base.mask(_8b4,["pageTitle","pageStatus","pageCloseable"]);
var _8b6=false;
if(typeof (_8b5.pageTitle)!="undefined"){
this.pageTitle=_8b5.pageTitle;
_8b6=true;
}
if(typeof (_8b5.pageStatus)!="undefined"){
if(typeof (_8b5.pageStatus)=="string"){
_8b5.pageStatus=MochiKit.Widget.Pane[_8b5.pageStatus];
}
this.pageStatus=_8b5.pageStatus;
_8b6=true;
}
if(typeof (_8b5.pageCloseable)!="undefined"){
this.pageCloseable=!MochiKit.Base.isFalse(_8b5.pageCloseable);
_8b6=true;
}
if(_8b6&&this.parentNode&&typeof (this.parentNode._updateStatus)=="function"){
this.parentNode._updateStatus();
}
MochiKit.DOM.updateNodeAttributes(this,_8b4);
};
MochiKit.Widget.Pane.prototype._handleEnter=function(opts){
opts=opts||{};
if(opts.validateReset){
var _8b8=this.getElementsByTagName("FORM");
for(var i=0;i<_8b8.length;i++){
if(typeof (_8b8[i].validateReset)=="function"){
_8b8[i].validateReset();
}
}
}
this.show();
MochiKit.Style.resizeElements(this);
MochiKit.Widget.emitSignal(this,"onenter");
};
MochiKit.Widget.Pane.prototype._handleExit=function(opts){
opts=opts||{};
if(opts.validateForm){
var _8bb=this.getElementsByTagName("FORM");
for(var i=0;i<_8bb.length;i++){
if(typeof (_8bb[i].validate)=="function"){
var res=_8bb[i].validate();
if(!res){
return false;
}
}
}
}
this.blurAll();
this.hide();
MochiKit.Widget.emitSignal(this,"onexit");
return true;
};
MochiKit.Widget.Popup=function(_8be){
var cls=arguments.callee;
if(!(this instanceof cls)){
return new cls(_8be,MochiKit.Base.extend(null,arguments,1));
}
var o=MochiKit.DOM.DIV();
MochiKit.Base.updatetree(o,this);
o.addClass("widget","widgetPopup","widgetHidden");
o.selectedIndex=-1;
o._delayTimer=null;
o.setAttrs(MochiKit.Base.update({delay:5000},_8be));
o.addAll(MochiKit.Base.extend(null,arguments,1));
MochiKit.Signal.connect(o,"onmousemove",o,"_handleMouseMove");
MochiKit.Signal.connect(o,"onclick",o,"_handleMouseClick");
return o;
};
MochiKit.Widget.Popup.prototype=MochiKit.Base.clone(MochiKit.Widget.prototype);
MochiKit.Widget.Popup.prototype.setAttrs=function(_8c1){
_8c1=MochiKit.Base.update({},_8c1);
var _8c2=MochiKit.Base.mask(_8c1,["delay","showAnim","hideAnim"]);
if(typeof (_8c2.delay)!="undefined"){
this.delay=parseInt(_8c2.delay);
this.resetDelay();
}
if(typeof (_8c2.showAnim)!="undefined"){
this.showAnim=_8c2.showAnim;
}
if(typeof (_8c2.hideAnim)!="undefined"){
this.hideAnim=_8c2.hideAnim;
}
MochiKit.DOM.updateNodeAttributes(this,_8c1);
};
MochiKit.Widget.Popup.prototype.show=function(){
if(this.isHidden()){
this.resetDelay();
this.selectChild(-1);
this.removeClass("widgetHidden");
if(this.showAnim){
this.animate(this.showAnim);
}
MochiKit.Style.resetScrollOffset(this,true);
MochiKit.Widget.emitSignal(this,"onshow");
}else{
this.resetDelay();
}
};
MochiKit.Widget.Popup.prototype.hide=function(){
if(this.isHidden()){
this.resetDelay();
}else{
this.addClass("widgetHidden");
this.resetDelay();
if(this.hideAnim){
this.animate(this.hideAnim);
}
MochiKit.Widget.emitSignal(this,"onhide");
}
};
MochiKit.Widget.Popup.prototype.resetDelay=function(){
if(this._delayTimer){
clearTimeout(this._delayTimer);
this._delayTimer=null;
}
if(!this.isHidden()&&this.delay>0){
this._delayTimer=setTimeout(MochiKit.Base.bind("hide",this),this.delay);
}
};
MochiKit.Widget.Popup.prototype.selectedChild=function(){
return MochiKit.DOM.childNode(this,this.selectedIndex);
};
MochiKit.Widget.Popup.prototype.selectChild=function(_8c3){
var node=this.selectedChild();
if(node!=null){
MochiKit.DOM.removeElementClass(node,"selected");
}
var node=MochiKit.DOM.childNode(this,_8c3);
if(typeof (_8c3)=="number"){
var _8c5=_8c3;
}else{
var _8c5=MochiKit.Base.findIdentical(this.childNodes,node);
}
if(_8c5>=0&&node!=null){
this.selectedIndex=_8c5;
MochiKit.DOM.addElementClass(node,"selected");
var box={y:node.offsetTop,h:node.offsetHeight+5};
MochiKit.Style.adjustScrollOffset(this,box);
}else{
this.selectedIndex=-1;
}
return this.selectedIndex;
};
MochiKit.Widget.Popup.prototype.selectMove=function(_8c7){
var _8c8=this.selectedIndex+_8c7;
if(_8c8>=this.childNodes.length){
_8c8=0;
}
if(_8c8<0){
_8c8=this.childNodes.length-1;
}
return this.selectChild(_8c8);
};
MochiKit.Widget.Popup.prototype._handleMouseMove=function(evt){
this.show();
var node=MochiKit.DOM.childNode(this,evt.target());
if(node!=null&&MochiKit.DOM.hasElementClass(node,"widgetPopupItem")){
this.selectChild(node);
}else{
this.selectChild(-1);
}
};
MochiKit.Widget.Popup.prototype._handleMouseClick=function(evt){
var node=MochiKit.DOM.childNode(this,evt.target());
if(node!=null&&MochiKit.DOM.hasElementClass(node,"widgetPopupItem")){
this.selectChild(node);
}else{
this.selectChild(-1);
}
};
MochiKit.Widget.ProgressBar=function(_8cd){
var cls=arguments.callee;
if(!(this instanceof cls)){
return new cls(_8cd,MochiKit.Base.extend(null,arguments,1));
}
var _8cf=MochiKit.DOM.DIV({"class":"widgetProgressBarMeter"});
var text=MochiKit.DOM.DIV({"class":"widgetProgressBarText"});
var o=MochiKit.DOM.DIV({},_8cf,text);
MochiKit.Base.updatetree(o,this);
o.addClass("widget","widgetProgressBar");
o.setAttrs(MochiKit.Base.update({min:0,max:100},_8cd));
o.setValue(0);
return o;
};
MochiKit.Widget.ProgressBar.prototype=MochiKit.Base.clone(MochiKit.Widget.prototype);
MochiKit.Widget.ProgressBar.prototype.setAttrs=function(_8d2){
_8d2=MochiKit.Base.update({},_8d2);
var _8d3=MochiKit.Base.mask(_8d2,["min","max"]);
if(typeof (_8d3.min)!="undefined"||typeof (_8d3.max)!="undefined"){
this.minValue=parseInt(_8d3.min)||0;
this.maxValue=parseInt(_8d3.max)||100;
this.startTime=new Date().getTime();
this.lastTime=this.startTime;
this.timeLeft=null;
}
MochiKit.DOM.updateNodeAttributes(this,_8d2);
};
MochiKit.Widget.ProgressBar.prototype.setValue=function(_8d4,text){
_8d4=Math.min(Math.max(_8d4,this.minValue),this.maxValue);
var pos=_8d4-this.minValue;
var _8d7=this.maxValue-this.minValue;
var str=pos+" of "+_8d7;
if(typeof (text)=="string"&&text!=""){
str+=" \u2014 "+text;
}
this.setRatio(pos/_8d7,str);
};
MochiKit.Widget.ProgressBar.prototype.setRatio=function(_8d9,text){
var _8db=Math.round(_8d9*1000)/10;
MochiKit.Style.setElementDimensions(this.firstChild,{w:_8db},"%");
if(_8db<66){
this.lastChild.className="widgetProgressBarText";
}else{
this.lastChild.className="widgetProgressBarTextInverse";
}
if(typeof (text)=="string"&&text!=""){
text=Math.round(_8db)+"% \u2014 "+text;
}else{
text=Math.round(_8db)+"%";
}
var _8dc=new Date().getTime();
if(_8dc-this.lastTime>1000){
this.lastTime=_8dc;
var _8dd=_8dc-this.startTime;
_8dd=Math.max(Math.round(_8dd/_8d9-_8dd),0);
this.timeLeft=MochiKit.DateTime.toApproxPeriod(_8dd);
}
if(this.timeLeft!=null&&_8db>0&&_8db<100){
text+=" \u2014 "+this.timeLeft+" left";
}
this.setText(text);
};
MochiKit.Widget.ProgressBar.prototype.setText=function(text){
MochiKit.DOM.replaceChildNodes(this.lastChild,text);
};
MochiKit.Widget.TabContainer=function(_8df){
var cls=arguments.callee;
if(!(this instanceof cls)){
return new cls(_8df,MochiKit.Base.extend(null,arguments,1));
}
var _8e1=MochiKit.DOM.DIV({"class":"widgetTabContainerLabels"});
var _8e2=MochiKit.DOM.DIV({"class":"widgetTabContainerContent"});
var o=MochiKit.DOM.DIV(_8df,_8e1,_8e2);
MochiKit.Base.updatetree(o,this);
o.addClass("widget","widgetTabContainer");
MochiKit.Style.registerSizeConstraints(_8e2,"100% - 22","100% - 47");
_8e2.resizeContent=MochiKit.Base.noop;
o._selectedIndex=-1;
o.addAll(MochiKit.Base.extend(null,arguments,1));
return o;
};
MochiKit.Widget.TabContainer.prototype=MochiKit.Base.clone(MochiKit.Widget.prototype);
MochiKit.Widget.TabContainer.prototype.getChildNodes=function(){
return MochiKit.Base.extend([],this.lastChild.childNodes);
};
MochiKit.Widget.TabContainer.prototype.addChildNode=function(_8e4){
if(!MochiKit.Widget.isWidget(_8e4,"Pane")){
_8e4=new MochiKit.Widget.Pane(null,_8e4);
}
MochiKit.Style.registerSizeConstraints(_8e4,"100%","100%");
_8e4.hide();
var text=MochiKit.DOM.SPAN(null,_8e4.pageTitle);
if(_8e4.pageCloseable){
var icon=new MochiKit.Widget.Icon({ref:"CLOSE"});
MochiKit.Signal.connect(icon,"onclick",MochiKit.Base.bind("_handleClose",this,_8e4));
}
var _8e7=MochiKit.DOM.DIV({"class":"widgetTabContainerLabel"},MochiKit.DOM.DIV({},text,icon));
MochiKit.Signal.connect(_8e7,"onclick",MochiKit.Base.bind("selectChild",this,_8e4));
this.firstChild.appendChild(_8e7);
this.lastChild.appendChild(_8e4);
if(this._selectedIndex<0){
this.selectChild(0);
}
};
MochiKit.Widget.TabContainer.prototype.removeChildNode=function(_8e8){
var _8e9=this.getChildNodes();
var _8ea=MochiKit.Base.findIdentical(_8e9,_8e8);
if(_8ea<0){
throw new Error("Cannot remove DOM node that is not a TabContainer child");
}
if(this._selectedIndex==_8ea){
_8e8._handleExit();
this._selectedIndex=-1;
}
MochiKit.Widget.destroyWidget(this.firstChild.childNodes[_8ea]);
MochiKit.DOM.removeElement(_8e8);
MochiKit.Widget.emitSignal(_8e8,"onclose");
if(this._selectedIndex<0&&this.getChildNodes().length>0){
this.selectChild((_8ea==0)?0:_8ea-1);
}
};
MochiKit.Widget.TabContainer.prototype.selectedIndex=function(){
return this._selectedIndex;
};
MochiKit.Widget.TabContainer.prototype.selectedChild=function(){
var _8eb=this.getChildNodes();
return (this._selectedIndex<0)?null:_8eb[this._selectedIndex];
};
MochiKit.Widget.TabContainer.prototype.selectChild=function(_8ec){
var _8ed=this.getChildNodes();
if(this._selectedIndex>=0){
var _8ee=this.firstChild.childNodes[this._selectedIndex];
MochiKit.DOM.removeElementClass(_8ee,"selected");
_8ed[this._selectedIndex]._handleExit();
}
var _8ef=-1;
if(_8ec==null){
_8ef=this._selectedIndex;
}else{
if(typeof (_8ec)=="number"){
_8ef=_8ec;
}else{
_8ef=MochiKit.Base.findIdentical(_8ed,_8ec);
}
}
this._selectedIndex=(_8ef<0||_8ef>=_8ed.length)?-1:_8ef;
if(this._selectedIndex>=0){
var _8ee=this.firstChild.childNodes[this._selectedIndex];
MochiKit.DOM.addElementClass(_8ee,"selected");
_8ed[this._selectedIndex]._handleEnter();
}
};
MochiKit.Widget.TabContainer.prototype.resizeContent=function(){
MochiKit.Style.resizeElements(this.lastChild);
var _8f0=this.selectedChild();
if(_8f0!=null){
MochiKit.Style.resizeElements(_8f0);
}
};
MochiKit.Widget.TabContainer.prototype._handleClose=function(_8f1,evt){
evt.stop();
this.removeChildNode(_8f1);
};
MochiKit.Widget.Table=function(_8f3){
var cls=arguments.callee;
if(!(this instanceof cls)){
return new cls(_8f3,MochiKit.Base.extend(null,arguments,1));
}
var _8f5=MochiKit.DOM.THEAD({},MochiKit.DOM.TR());
var _8f6=MochiKit.DOM.TBODY();
_8f6.resizeContent=MochiKit.Base.noop;
var _8f7=MochiKit.DOM.TABLE({"class":"widgetTable"},_8f5,_8f6);
var o=MochiKit.DOM.DIV({},_8f7);
MochiKit.Base.updatetree(o,this);
o.addClass("widget","widgetTable");
o.setAttrs(MochiKit.Base.update({multiple:false},_8f3));
o._rows=[];
o._data=null;
o._keyField=null;
o._selected=[];
o.addAll(MochiKit.Base.extend(null,arguments,1));
MochiKit.Signal.connect(_8f6,"onmousedown",o,"_handleSelect");
return o;
};
MochiKit.Widget.Table.prototype=MochiKit.Base.clone(MochiKit.Widget.prototype);
MochiKit.Widget.Table.prototype.setAttrs=function(_8f9){
_8f9=MochiKit.Base.update({},_8f9);
var _8fa=MochiKit.Base.mask(_8f9,["multiple"]);
if(typeof (_8fa.multiple)!="undefined"){
this.multiple=!MochiKit.Base.isFalse(_8fa.multiple);
}
MochiKit.DOM.updateNodeAttributes(this,_8f9);
};
MochiKit.Widget.Table.prototype.getChildNodes=function(){
var _8fb=this.firstChild;
var _8fc=_8fb.firstChild;
var tr=_8fc.firstChild;
return MochiKit.Base.extend([],tr.childNodes);
};
MochiKit.Widget.Table.prototype.addChildNode=function(_8fe){
if(!MochiKit.Widget.isWidget(_8fe,"TableColumn")){
throw new Error("Table widget can only have TableColumn children");
}
this.clear();
var _8ff=this.firstChild;
var _900=_8ff.firstChild;
var tr=_900.firstChild;
tr.appendChild(_8fe);
};
MochiKit.Widget.Table.prototype.removeChildNode=function(_902){
this.clear();
var _903=this.firstChild;
var _904=_903.firstChild;
var tr=_904.firstChild;
tr.removeChild(_902);
};
MochiKit.Widget.Table.prototype.getColumnIndex=function(_906){
var cols=this.getChildNodes();
for(var i=0;i<cols.length;i++){
if(cols[i].field===_906){
return i;
}
}
return -1;
};
MochiKit.Widget.Table.prototype.getIdKey=function(){
if(this._keyField){
return this._keyField;
}
var cols=this.getChildNodes();
for(var i=0;i<cols.length;i++){
if(cols[i].key){
return cols[i].field;
}
}
return null;
};
MochiKit.Widget.Table.prototype.setIdKey=function(key){
this._keyField=key;
for(var i=0;i<this._rows.length;i++){
var row=this._rows[i];
if(this._keyField!=null&&row.$data[this._keyField]!=null){
row.$id=row.$data[this._keyField];
}
}
};
MochiKit.Widget.Table.prototype.getSortKey=function(){
var cols=this.getChildNodes();
for(var i=0;i<cols.length;i++){
if(cols[i].sort!=null&&cols[i].sort!="none"){
return cols[i].field;
}
}
return null;
};
MochiKit.Widget.Table.prototype.getCellElem=function(row,col){
try{
var _912=this.firstChild;
var _913=_912.lastChild;
return _913.childNodes[row].childNodes[col];
}
catch(e){
return null;
}
};
MochiKit.Widget.Table.prototype.clear=function(){
this.setData([]);
};
MochiKit.Widget.Table.prototype.getData=function(){
return this._data;
};
MochiKit.Widget.Table.prototype.setData=function(data){
var cols=this.getChildNodes();
var _916=this.getSelectedIds();
MochiKit.Widget.emitSignal(this,"onclear");
this._data=data;
this._rows=[];
this._selected=[];
for(var i=0;data!=null&&i<data.length;i++){
var row={$id:"id"+i,$data:data[i]};
for(var j=0;j<cols.length;j++){
cols[j]._map(data[i],row);
}
if(this._keyField!=null&&data[i][this._keyField]!=null){
row.$id=data[i][this._keyField];
}
this._rows.push(row);
}
var key=this.getSortKey();
if(key){
this.sortData(key);
}else{
this._renderRows();
}
if(this.getIdKey()!=null){
this._addSelectedIds(_916);
}
};
MochiKit.Widget.Table.prototype.sortData=function(_91b,_91c){
var cols=this.getChildNodes();
var _91e=this.getSelectedIds();
this._selected=[];
for(var i=0;i<cols.length;i++){
if(cols[i].field===_91b){
if(cols[i].sort=="none"){
return;
}else{
if(_91c==null){
_91c=cols[i].sort||"asc";
}
}
cols[i].setAttrs({sort:_91c});
}else{
if(cols[i].sort!="none"){
cols[i].setAttrs({sort:null});
}
}
}
this._rows.sort(MochiKit.Base.keyComparator(_91b));
if(_91c=="desc"){
this._rows.reverse();
}
this._renderRows();
this._addSelectedIds(_91e);
};
MochiKit.Widget.Table.prototype.redraw=function(){
var cols=this.getChildNodes();
for(var i=0;i<this._rows.length;i++){
var row=this._rows[i];
for(var j=0;j<cols.length;j++){
cols[j]._map(row.$data,row);
}
}
this._renderRows();
for(var i=0;i<this._selected.length;i++){
this._markSelection(this._selected[i]);
}
};
MochiKit.Widget.Table.prototype._renderRows=function(){
var cols=this.getChildNodes();
var _925=this.firstChild.lastChild;
MochiKit.DOM.replaceChildNodes(_925);
for(var i=0;i<this._rows.length;i++){
var tr=MochiKit.DOM.TR();
if(i%2==1){
MochiKit.DOM.addElementClass(tr,"widgetTableAlt");
}
for(var j=0;j<cols.length;j++){
tr.appendChild(cols[j]._render(this._rows[i]));
}
tr.rowNo=i;
_925.appendChild(tr);
}
if(this._rows.length==0){
_925.appendChild(MochiKit.DOM.TR());
}
};
MochiKit.Widget.Table.prototype.getSelectedIds=function(){
var res=[];
for(var i=0;i<this._selected.length;i++){
res.push(this._rows[this._selected[i]].$id);
}
return res;
};
MochiKit.Widget.Table.prototype.getSelectedData=function(){
if(this.multiple){
var res=[];
for(var i=0;i<this._selected.length;i++){
res.push(this._rows[this._selected[i]].$data);
}
return res;
}else{
if(this._selected.length>0){
return this._rows[this._selected[0]].$data;
}else{
return null;
}
}
};
MochiKit.Widget.Table.prototype.addSelectedIds=function(){
var res=this._addSelectedIds(arguments);
if(res.length>0){
MochiKit.Widget.emitSignal(this,"onselect");
}
return res;
};
MochiKit.Widget.Table.prototype._addSelectedIds=function(){
var args=MochiKit.Base.flattenArguments(arguments);
var ids=MochiKit.Base.dict(args,true);
var res=[];
MochiKit.Base.update(ids,MochiKit.Base.dict(this.getSelectedIds(),false));
for(var i=0;i<this._rows.length;i++){
if(ids[this._rows[i].$id]){
this._selected.push(i);
this._markSelection(i);
res.push(this._rows[i].$id);
}
}
return res;
};
MochiKit.Widget.Table.prototype.removeSelectedIds=function(){
var args=MochiKit.Base.flattenArguments(arguments);
var ids=MochiKit.Base.dict(args,true);
var res=[];
for(var i=0;i<this._rows.length;i++){
if(ids[this._rows[i].$id]){
var pos=MochiKit.Base.findIdentical(this._selected,i);
if(pos>=0){
this._selected.splice(i,1);
this._unmarkSelection(i);
res.push(this._rows[i].$id);
}
}
}
if(res.length>0){
MochiKit.Widget.emitSignal(this,"onselect");
}
return res;
};
MochiKit.Widget.Table.prototype._handleSelect=function(evt){
var tr=MochiKit.DOM.getFirstParentByTagAndClassName(evt.target(),"TR");
if(tr==null||tr.rowNo==null||!MochiKit.DOM.isChildNode(tr,this)){
evt.stop();
return false;
}
var row=tr.rowNo;
if(this.multiple){
if(evt.modifier().ctrl||evt.modifier().meta){
if(MochiKit.Base.findIdentical(this._selected,row)>=0){
this._unmarkSelection(row);
ArrayUtil.removeElem(this._selected,row);
}else{
this._selected.push(row);
this._markSelection(row);
}
}else{
if(evt.modifier().shift){
var _93a=row;
if(this._selected.length>0){
_93a=this._selected[0];
}
this._unmarkSelection();
this._selected=[];
if(row>=_93a){
for(var i=_93a;i<=row;i++){
this._selected.push(i);
}
}else{
for(var i=_93a;i>=row;i--){
this._selected.push(i);
}
}
this._markSelection();
}else{
this._unmarkSelection();
this._selected=[row];
this._markSelection(row);
}
}
}else{
this._unmarkSelection();
this._selected=[row];
this._markSelection(row);
}
evt.stop();
MochiKit.Widget.emitSignal(this,"onselect");
return false;
};
MochiKit.Widget.Table.prototype._markSelection=function(_93c){
if(_93c==null){
for(var i=0;i<this._selected.length;i++){
this._markSelection(this._selected[i]);
}
}else{
var _93e=this.firstChild.lastChild;
var tr=_93e.childNodes[_93c];
MochiKit.DOM.addElementClass(tr,"selected");
}
};
MochiKit.Widget.Table.prototype._unmarkSelection=function(_940){
if(_940==null){
for(var i=0;i<this._selected.length;i++){
this._unmarkSelection(this._selected[i]);
}
}else{
var _942=this.firstChild.lastChild;
var tr=_942.childNodes[_940];
MochiKit.DOM.removeElementClass(tr,"selected");
}
};
MochiKit.Widget.TableColumn=function(_944){
var cls=arguments.callee;
if(!(this instanceof cls)){
return new cls(_944,MochiKit.Base.extend(null,arguments,1));
}
if(_944.field==null){
throw new Error("The 'field' attribute cannot be null for a TableColumn");
}
var o=MochiKit.DOM.TH();
MochiKit.Base.updatetree(o,this);
o.addClass("widget","widgetTableColumn");
o.setAttrs(MochiKit.Base.update({title:_944.field,type:"string",key:false},_944));
MochiKit.Signal.connect(o,"onclick",o,"_handleClick");
return o;
};
MochiKit.Widget.TableColumn.prototype=MochiKit.Base.clone(MochiKit.Widget.prototype);
MochiKit.Widget.TableColumn.prototype.setAttrs=function(_947){
_947=MochiKit.Base.update({},_947);
var _948=MochiKit.Base.mask(_947,["title","field","type","sort","maxLength","key","tooltip"]);
if(typeof (_948.title)!="undefined"){
MochiKit.DOM.replaceChildNodes(this,_948.title);
}
if(typeof (_948.field)!="undefined"){
this.field=_948.field;
}
if(typeof (_948.type)!="undefined"){
this.type=_948.type;
}
if(typeof (_948.sort)!="undefined"){
this.sort=_948.sort;
if(_948.sort==null||_948.sort=="none"){
MochiKit.DOM.removeElementClass(this,"sortAsc");
MochiKit.DOM.removeElementClass(this,"sortDesc");
}else{
if(_948.sort=="desc"){
MochiKit.DOM.removeElementClass(this,"sortAsc");
MochiKit.DOM.addElementClass(this,"sortDesc");
}else{
MochiKit.DOM.removeElementClass(this,"sortDesc");
MochiKit.DOM.addElementClass(this,"sortAsc");
}
}
}
if(typeof (_948.maxLength)!="undefined"){
this.maxLength=parseInt(_948.maxLength);
}
if(typeof (_948.key)!="undefined"){
this.key=!MochiKit.Base.isFalse(_948.key);
}
if(typeof (_948.tooltip)!="undefined"){
this.title=_948.tooltip;
}
MochiKit.DOM.updateNodeAttributes(this,_947);
};
MochiKit.Widget.TableColumn.prototype._map=function(src,dst){
var _94b=src[this.field];
if(_94b!=null){
if(this._key){
dst.$id=_94b;
}
switch(this.type){
case "number":
if(_94b instanceof Number){
_94b=_94b.valueOf();
}else{
if(typeof (_94b)!="number"){
_94b=parseFloat(_94b);
}
}
break;
case "date":
if(_94b instanceof Date){
_94b=MochiKit.DateTime.toISODate(_94b);
}else{
_94b=MochiKit.Format.truncate(_94b,10);
}
break;
case "datetime":
if(_94b instanceof Date){
_94b=MochiKit.DateTime.toISOTimestamp(_94b);
}else{
_94b=MochiKit.Format.truncate(_94b,19);
}
break;
case "time":
if(_94b instanceof Date){
_94b=MochiKit.DateTime.toISOTime(_94b);
}else{
if(typeof (_94b)!="string"){
_94b=_94b.toString();
}
if(_94b.length>8){
_94b=_94b.substring(_94b.length-8);
}
}
break;
default:
if(typeof (_94b)!="string"){
_94b=_94b.toString();
}
}
}
dst[this.field]=_94b;
};
MochiKit.Widget.TableColumn.prototype._render=function(obj){
var td=MochiKit.DOM.TD();
var _94e=obj[this.field];
if(_94e==null){
_94e="";
}else{
if(typeof (_94e)!="string"){
_94e=_94e.toString();
}
}
if(this.maxLength&&this.maxLength<_94e.length){
td.title=_94e;
_94e=MochiKit.Format.truncate(_94e,this.maxLength,"...");
}
if(this.type=="html"){
td.innerHTML=_94e;
}else{
td.appendChild(MochiKit.DOM.createTextNode(_94e));
}
return td;
};
MochiKit.Widget.TableColumn.prototype._handleClick=function(){
if(this.parentNode!=null){
var dir=(this.sort=="asc")?"desc":"asc";
var tr=this.parentNode;
var _951=tr.parentNode;
var _952=_951.parentNode;
_952.parentNode.sortData(this.field,dir);
}
};
MochiKit.Widget.TextArea=function(_953){
var cls=arguments.callee;
if(!(this instanceof cls)){
return new cls(_953,MochiKit.Base.extend(null,arguments,1));
}
var o=MochiKit.DOM.TEXTAREA();
MochiKit.Base.updatetree(o,this);
o.addClass("widget","widgetTextArea");
o.focused=false;
o.setAttrs(MochiKit.Base.update({helpText:""},_953));
o.addAll(MochiKit.Base.extend(null,arguments,1));
MochiKit.Signal.connect(o,"onfocus",o,"_handleFocus");
MochiKit.Signal.connect(o,"onblur",o,"_handleFocus");
return o;
};
MochiKit.Widget.TextArea.prototype=MochiKit.Base.clone(MochiKit.Widget.prototype);
MochiKit.Widget.TextArea.prototype.setAttrs=function(_956){
_956=MochiKit.Base.update({},_956);
var _957=MochiKit.Base.mask(_956,["helpText","value"]);
if(typeof (_957.helpText)!="undefined"){
this.helpText=_957.helpText;
}
if(typeof (_957.value)!="undefined"){
this.value=this.storedValue=_957.value;
}
if(!this.focused&&MochiKit.Format.strip(this.value)==""){
this.value=this.helpText;
this.addClass("widgetTextAreaHelp");
}
MochiKit.DOM.updateNodeAttributes(this,_956);
};
MochiKit.Widget.TextArea.prototype.reset=function(){
this.setAttrs({value:this.defaultValue});
};
MochiKit.Widget.TextArea.prototype.getValue=function(){
return (this.focused)?this.value:this.storedValue;
};
MochiKit.Widget.TextArea.prototype._handleFocus=function(evt){
if(evt.type()=="focus"){
this.focused=true;
this.value=this.storedValue;
this.removeClass("widgetTextAreaHelp");
}else{
if(evt.type()=="blur"){
this.focused=false;
this.storedValue=this.value;
if(MochiKit.Format.strip(this.value)==""){
this.value=this.helpText;
this.addClass("widgetTextAreaHelp");
}
}
}
};
MochiKit.Widget.TextField=function(_959){
var cls=arguments.callee;
if(!(this instanceof cls)){
return new cls(_959,MochiKit.Base.extend(null,arguments,1));
}
var text="";
if(_959!=null&&_959.value!=null){
text=_959.value;
}
for(var i=1;i<arguments.length;i++){
text+=arguments[i].toString();
}
var o=MochiKit.DOM.INPUT({value:text});
MochiKit.Base.updatetree(o,this);
o.addClass("widget","widgetTextField");
o.focused=false;
o._popupCreated=false;
o.setAttrs(MochiKit.Base.update({helpText:"",value:text},_959));
MochiKit.Signal.connect(o,"onfocus",o,"_handleFocus");
MochiKit.Signal.connect(o,"onblur",o,"_handleFocus");
return o;
};
MochiKit.Widget.TextField.prototype=MochiKit.Base.clone(MochiKit.Widget.prototype);
MochiKit.Widget.TextField.prototype.setAttrs=function(_95e){
_95e=MochiKit.Base.update({},_95e);
var _95f=MochiKit.Base.mask(_95e,["helpText","value"]);
if(typeof (_95f.helpText)!="undefined"){
this.helpText=_95f.helpText;
}
if(typeof (_95f.value)!="undefined"){
this.value=this.storedValue=_95f.value;
}
if(!this.focused&&MochiKit.Format.strip(this.value)==""){
this.value=this.helpText;
this.addClass("widgetTextFieldHelp");
}
MochiKit.DOM.updateNodeAttributes(this,_95e);
};
MochiKit.Widget.TextField.prototype.reset=function(){
this.setAttrs({value:this.defaultValue});
};
MochiKit.Widget.TextField.prototype.getValue=function(){
return (this.focused)?this.value:this.storedValue;
};
MochiKit.Widget.TextField.prototype.popup=function(_960){
if(!this._popupCreated&&_960){
this.autocomplete="off";
this._popupCreated=true;
var _961={"max-height":"300px","width":"300px"};
var _962=new MochiKit.Widget.Popup({style:_961});
MochiKit.DOM.insertSiblingNodesAfter(this,_962);
MochiKit.DOM.makePositioned(this.parentNode);
var pos={x:this.offsetLeft+1,y:this.offsetTop+this.offsetHeight+1};
MochiKit.Style.setElementPosition(_962,pos);
MochiKit.Signal.connect(this,"onkeydown",this,"_handleKeyDown");
MochiKit.Signal.connect(_962,"onclick",this,"_handleClick");
}
return (this._popupCreated)?this.nextSibling:null;
};
MochiKit.Widget.TextField.prototype.showPopup=function(_964,_965){
var _966=this.popup(true);
if(_965){
_966.hide();
MochiKit.DOM.replaceChildNodes(_966);
for(var i=0;i<_965.length;i++){
if(typeof (_965[i])=="string"){
var node=MochiKit.DOM.DIV({"class":"widgetPopupItem"},"\xbb "+_965[i]);
_966.appendChild(node);
}else{
MochiKit.DOM.appendChildNodes(_966,_965[i]);
}
}
}
if(_966.childNodes.length>0){
_966.setAttrs(MochiKit.Base.update({delay:30000},_964));
_966.show();
}
};
MochiKit.Widget.TextField.prototype._handleFocus=function(evt){
if(evt.type()=="focus"){
this.focused=true;
this.value=this.storedValue;
this.removeClass("widgetTextFieldHelp");
}else{
if(evt.type()=="blur"){
this.focused=false;
this.storedValue=this.value;
if(MochiKit.Format.strip(this.value)==""){
this.value=this.helpText;
this.addClass("widgetTextFieldHelp");
}
var _96a=this.popup();
if(_96a!=null&&!_96a.isHidden()){
_96a.setAttrs({delay:250});
}
}
}
};
MochiKit.Widget.TextField.prototype._handleKeyDown=function(evt){
var _96c=this.popup(false);
if(_96c!=null){
_96c.resetDelay();
if(_96c.isHidden()){
switch(evt.key().string){
case "KEY_ESCAPE":
evt.stop();
break;
case "KEY_ARROW_UP":
case "KEY_ARROW_DOWN":
this.showPopup();
_96c.selectChild(0);
evt.stop();
break;
}
}else{
switch(evt.key().string){
case "KEY_TAB":
case "KEY_ENTER":
_96c.hide();
evt.stop();
if(_96c.selectedChild()!=null){
MochiKit.Widget.emitSignal(this,"onpopupselect");
}
break;
case "KEY_ESCAPE":
_96c.hide();
evt.stop();
break;
case "KEY_ARROW_UP":
case "KEY_ARROW_DOWN":
_96c.selectMove(evt.key().string=="KEY_ARROW_UP"?-1:1);
evt.stop();
break;
}
}
}
};
MochiKit.Widget.TextField.prototype._handleClick=function(evt){
this.blur();
this.focus();
MochiKit.Widget.emitSignal(this,"onpopupselect");
};
MochiKit.Widget.Tree=function(_96e){
var cls=arguments.callee;
if(!(this instanceof cls)){
return new cls(_96e,MochiKit.Base.extend(null,arguments,1));
}
var o=MochiKit.DOM.DIV(_96e);
MochiKit.Base.updatetree(o,this);
o.addClass("widget","widgetTree");
o.resizeContent=MochiKit.Base.noop;
o.selectedPath=null;
o.addAll(MochiKit.Base.extend(null,arguments,1));
return o;
};
MochiKit.Widget.Tree.prototype=MochiKit.Base.clone(MochiKit.Widget.prototype);
MochiKit.Widget.Tree.prototype.addChildNode=function(_971){
if(!MochiKit.Widget.isWidget(_971,"TreeNode")){
throw new Error("Tree widget can only have TreeNode children");
}
this.appendChild(_971);
};
MochiKit.Widget.Tree.prototype.findRoot=function(name){
var _973=this.getChildNodes();
for(var i=0;i<_973.length;i++){
if(_973[i].name==name){
return _973[i];
}
}
return null;
};
MochiKit.Widget.Tree.prototype.findByPath=function(path){
if(path==null||path.length<1){
return null;
}
var root=this.findRoot(path[0]);
if(root!=null){
return root.findByPath(path.slice(1));
}else{
return null;
}
};
MochiKit.Widget.Tree.prototype.selectedChild=function(){
if(this.selectedPath==null){
return null;
}else{
return this.findByPath(this.selectedPath);
}
};
MochiKit.Widget.Tree.prototype._handleSelect=function(node){
var prev=this.selectedChild();
if(node==null){
this.selectedPath=null;
MochiKit.Widget.emitSignal(this,"onselect",null);
}else{
if(prev!=null&&prev!==node){
prev.unselect();
}
this.selectedPath=node.path();
MochiKit.Widget.emitSignal(this,"onselect",node);
}
};
MochiKit.Widget.Tree.prototype._emitExpand=function(node){
MochiKit.Widget.emitSignal(this,"onexpand",node);
};
MochiKit.Widget.Tree.prototype.expandAll=function(_97a){
if(typeof (_97a)!=="number"){
_97a=10;
}
var _97b=this.getChildNodes();
for(var i=0;_97a>0&&i<_97b.length;i++){
_97b[i].expandAll(_97a-1);
}
};
MochiKit.Widget.Tree.prototype.collapseAll=function(_97d){
if(typeof (_97d)!=="number"){
_97d=0;
}
var _97e=this.getChildNodes();
for(var i=0;i<_97e.length;i++){
_97e[i].collapseAll(_97d-1);
}
};
MochiKit.Widget.Tree.prototype.addPath=function(path){
if(path==null||path.length<1){
return null;
}
var node=this.findRoot(path[0]);
if(node==null){
node=new MochiKit.Widget.TreeNode({name:path[0]});
this.addChildNode(node);
}
for(var i=1;i<path.length;i++){
var _983=node.findChild(path[i]);
if(_983==null){
_983=new MochiKit.Widget.TreeNode({name:path[i]});
node.addChildNode(_983);
}
node=_983;
}
return node;
};
MochiKit.Widget.TreeNode=function(_984){
var cls=arguments.callee;
if(!(this instanceof cls)){
return new cls(_984,MochiKit.Base.extend(null,arguments,1));
}
var icon=MochiKit.Widget.Icon({ref:"BLANK"});
var _987=MochiKit.DOM.SPAN({"class":"widgetTreeNodeText"});
var div=MochiKit.DOM.DIV({"class":"widgetTreeNodeLabel"},icon,_987);
var o=MochiKit.DOM.DIV({},div);
MochiKit.Base.updatetree(o,this);
o.addClass("widget","widgetTreeNode");
_984=MochiKit.Base.update({name:"Tree Node",folder:false},_984);
if(typeof (_984.icon)=="undefined"){
_984.icon=_984.folder?"FOLDER":"DOCUMENT";
}
o.setAttrs(_984);
o.addAll(MochiKit.Base.extend(null,arguments,1));
MochiKit.Signal.connect(icon,"onclick",o,"toggle");
MochiKit.Signal.connect(div,"onclick",o,"select");
return o;
};
MochiKit.Widget.TreeNode.prototype=MochiKit.Base.clone(MochiKit.Widget.prototype);
MochiKit.Widget.TreeNode.prototype._container=function(_98a){
var _98b=this.lastChild;
if(MochiKit.DOM.hasElementClass(_98b,"widgetTreeNodeContainer")){
return _98b;
}else{
if(_98a){
_98b=MochiKit.DOM.DIV({"class":"widgetTreeNodeContainer widgetHidden"});
this.appendChild(_98b);
var _98c=this.firstChild.firstChild;
_98c.setAttrs({ref:"PLUS"});
this.setAttrs({icon:"FOLDER"});
return _98b;
}else{
return null;
}
}
};
MochiKit.Widget.TreeNode.prototype.setAttrs=function(_98d){
_98d=MochiKit.Base.update({},_98d);
var _98e=MochiKit.Base.mask(_98d,["name","folder","icon"]);
if(typeof (_98e.name)!="undefined"){
this.name=_98e.name;
var node=this.firstChild.firstChild;
while(!MochiKit.DOM.hasElementClass(node,"widgetTreeNodeText")){
node=node.nextSibling;
}
MochiKit.DOM.replaceChildNodes(node,_98e.name);
}
if(!MochiKit.Base.isFalse(_98e.folder)){
this._container(true);
}
if(typeof (_98e.icon)!="undefined"){
var _990=this.firstChild.firstChild;
var _991=_990.nextSibling;
if(!MochiKit.Widget.isWidget(_991,"Icon")){
_991=null;
}
if(_991==null&&_98e.icon!=null){
if(typeof (_98e.icon)==="string"){
_98e.icon=new MochiKit.Widget.Icon({ref:_98e.icon});
}else{
if(!MochiKit.Widget.isWidget(_98e.icon,"Icon")){
_98e.icon=new MochiKit.Widget.Icon(_98e.icon);
}
}
MochiKit.DOM.insertSiblingNodesAfter(_990,_98e.icon);
}else{
if(_991!=null&&_98e.icon!=null){
if(MochiKit.Widget.isWidget(_98e.icon,"Icon")){
MochiKit.DOM.swapDOM(_991,_98e.icon);
}else{
if(typeof (_98e.icon)==="string"){
_991.setAttrs({ref:_98e.icon});
}else{
_991.setAttrs(_98e.icon);
}
}
}else{
if(_991!=null&&_98e.icon==null){
MochiKit.Widget.destroyWidget(_991);
}
}
}
}
MochiKit.DOM.updateNodeAttributes(this,_98d);
};
MochiKit.Widget.TreeNode.prototype.getChildNodes=function(){
var _992=this._container();
if(_992==null){
return [];
}else{
return MochiKit.Base.extend([],_992.childNodes);
}
};
MochiKit.Widget.TreeNode.prototype.addChildNode=function(_993){
if(!MochiKit.Widget.isWidget(_993,"TreeNode")){
throw new Error("TreeNode widget can only have TreeNode children");
}
this._container(true).appendChild(_993);
};
MochiKit.Widget.TreeNode.prototype.removeChildNode=function(_994){
var _995=this._container();
if(_995!=null){
_995.removeChild(_994);
}
};
MochiKit.Widget.TreeNode.prototype.isFolder=function(){
return this._container()!=null;
};
MochiKit.Widget.TreeNode.prototype.isExpanded=function(){
var _996=this._container();
return _996!=null&&!MochiKit.DOM.hasElementClass(_996,"widgetHidden");
};
MochiKit.Widget.TreeNode.prototype.isSelected=function(){
return MochiKit.DOM.hasElementClass(this.firstChild,"selected");
};
MochiKit.Widget.TreeNode.prototype.tree=function(){
var _997=this.parent();
if(_997!=null){
return _997.tree();
}
if(MochiKit.Widget.isWidget(this.parentNode,"Tree")){
return this.parentNode;
}else{
return null;
}
};
MochiKit.Widget.TreeNode.prototype.parent=function(){
var node=this.parentNode;
if(MochiKit.DOM.hasElementClass(node,"widgetTreeNodeContainer")){
return node.parentNode;
}else{
return null;
}
};
MochiKit.Widget.TreeNode.prototype.path=function(){
var _999=this.parent();
if(_999==null){
return [this.name];
}else{
var path=_999.path();
path.push(this.name);
return path;
}
};
MochiKit.Widget.TreeNode.prototype.findChild=function(name){
var _99c=this.getChildNodes();
for(var i=0;i<_99c.length;i++){
if(_99c[i].name==name){
return _99c[i];
}
}
return null;
};
MochiKit.Widget.TreeNode.prototype.findByPath=function(path){
var node=this;
for(var i=0;node!=null&&path!=null&&i<path.length;i++){
node=node.findChild(path[i]);
}
return node;
};
MochiKit.Widget.TreeNode.prototype.select=function(){
MochiKit.DOM.addElementClass(this.firstChild,"selected");
var tree=this.tree();
if(tree!=null){
tree._handleSelect(this);
}
this.expand();
};
MochiKit.Widget.TreeNode.prototype.unselect=function(){
if(this.isSelected()){
MochiKit.DOM.removeElementClass(this.firstChild,"selected");
var tree=this.tree();
if(tree!=null){
tree._handleSelect(null);
}
}
};
MochiKit.Widget.TreeNode.prototype.expand=function(){
var _9a3=this.parent();
if(_9a3!=null&&!_9a3.isExpanded()){
_9a3.expand();
}
var _9a4=this._container();
if(_9a4!=null&&!this.isExpanded()){
var _9a5=this.firstChild.firstChild;
_9a5.setAttrs({ref:"MINUS"});
MochiKit.DOM.removeElementClass(_9a4,"widgetHidden");
var tree=this.tree();
if(tree!=null){
tree._emitExpand(this);
}
}
};
MochiKit.Widget.TreeNode.prototype.expandAll=function(_9a7){
if(typeof (_9a7)!=="number"){
_9a7=10;
}
this.expand();
var _9a8=this.getChildNodes();
for(var i=0;_9a7>0&&i<_9a8.length;i++){
_9a8[i].expandAll(_9a7-1);
}
};
MochiKit.Widget.TreeNode.prototype.collapse=function(){
var _9aa=this._container();
if(_9aa!=null&&this.isExpanded()){
var _9ab=this.firstChild.firstChild;
_9ab.setAttrs({ref:"PLUS"});
MochiKit.DOM.addElementClass(_9aa,"widgetHidden");
var tree=this.tree();
if(tree!=null){
tree._emitExpand(this);
}
}
};
MochiKit.Widget.TreeNode.prototype.collapseAll=function(_9ad){
if(typeof (_9ad)!=="number"){
_9ad=0;
}
if(_9ad<=0){
this.collapse();
}
var _9ae=this.getChildNodes();
for(var i=0;i<_9ae.length;i++){
_9ae[i].collapseAll(_9ad-1);
}
};
MochiKit.Widget.TreeNode.prototype.toggle=function(evt){
if(evt){
evt.stop();
}
if(this.isExpanded()){
this.collapse();
}else{
this.expand();
}
};
MochiKit.Widget.Wizard=function(_9b1){
var cls=arguments.callee;
if(!(this instanceof cls)){
return new cls(_9b1,MochiKit.Base.extend(null,arguments,1));
}
var o=MochiKit.DOM.DIV(_9b1);
MochiKit.Base.updatetree(o,this);
o.addClass("widget","widgetWizard");
o._selectedIndex=-1;
o.appendChild(MochiKit.DOM.H3({"class":"widgetWizardTitle"}));
var _9b4=MochiKit.Widget.Button({style:{"margin-right":"10px"}},MochiKit.Widget.Icon({ref:"CANCEL"})," Cancel");
var _9b5=MochiKit.Widget.Button({style:{"margin-right":"10px"}},MochiKit.Widget.Icon({ref:"PREVIOUS"})," Previous");
var _9b6=MochiKit.Widget.Button({},"Next ",MochiKit.Widget.Icon({ref:"NEXT"}));
var _9b7=MochiKit.Widget.Button({highlight:true},MochiKit.Widget.Icon({ref:"OK"})," Finish");
_9b4.hide();
o.appendChild(MochiKit.DOM.DIV({"class":"widgetWizardButtons"},_9b4,_9b5,_9b6,_9b7));
MochiKit.Signal.connect(_9b4,"onclick",o,"cancel");
MochiKit.Signal.connect(_9b5,"onclick",o,"previous");
MochiKit.Signal.connect(_9b6,"onclick",o,"next");
MochiKit.Signal.connect(_9b7,"onclick",o,"done");
o._updateStatus();
o.addAll(MochiKit.Base.extend(null,arguments,1));
return o;
};
MochiKit.Widget.Wizard.prototype=MochiKit.Base.clone(MochiKit.Widget.prototype);
MochiKit.Widget.Wizard.prototype.getChildNodes=function(){
return MochiKit.Base.extend([],this.childNodes,2);
};
MochiKit.Widget.Wizard.prototype.addChildNode=function(_9b8){
if(!MochiKit.Widget.isWidget(_9b8,"Pane")){
_9b8=new MochiKit.Widget.Pane(null,_9b8);
}
MochiKit.Style.registerSizeConstraints(_9b8,"100%","100%-65");
_9b8.hide();
this.appendChild(_9b8);
if(this.getChildNodes().length==1){
this.activatePage(0);
}else{
this._updateStatus();
}
};
MochiKit.Widget.Wizard.prototype._updateStatus=function(){
var h3=this.childNodes[0];
var _9ba=this.childNodes[1].childNodes[0];
var _9bb=this.childNodes[1].childNodes[1];
var _9bc=this.childNodes[1].childNodes[2];
var _9bd=this.childNodes[1].childNodes[3];
var page=this.activePage();
var _9bf=MochiKit.Widget.Pane.FORWARD;
var _9c0=null;
var info="(No pages available)";
var icon=null;
if(page!=null){
_9bf=page.pageStatus||MochiKit.Widget.Pane.ANY;
_9c0=page.pageTitle;
info=" (Step "+(this._selectedIndex+1)+" of "+this.getChildNodes().length+")";
}
if(_9bf===MochiKit.Widget.Pane.WORKING){
_9ba.show();
_9bb.hide();
icon={ref:"LOADING","class":"widgetWizardWait"};
icon=MochiKit.Widget.Icon(icon);
}else{
_9ba.hide();
_9bb.show();
}
if(this._selectedIndex>=this.getChildNodes().length-1){
_9bc.hide();
_9bd.show();
}else{
_9bc.show();
_9bd.hide();
}
_9bb.disabled=(this._selectedIndex<=0)||!_9bf.previous;
_9bc.disabled=!_9bf.next;
_9bd.disabled=!_9bf.next;
info=MochiKit.DOM.SPAN({"class":"widgetWizardInfo"},info);
MochiKit.DOM.replaceChildNodes(h3,icon,_9c0,info);
};
MochiKit.Widget.Wizard.prototype.activePage=function(){
if(this._selectedIndex>=0){
return this.childNodes[this._selectedIndex+2];
}else{
return null;
}
};
MochiKit.Widget.Wizard.prototype.activePageIndex=function(){
return this._selectedIndex;
};
MochiKit.Widget.Wizard.prototype.activatePage=function(_9c3){
if(typeof (_9c3)=="number"){
var _9c4=_9c3;
var page=this.childNodes[_9c4+2];
}else{
var page=_9c3;
var _9c4=MochiKit.Base.findIdentical(this.childNodes,page,2)-2;
}
if(_9c4<0||_9c4>=this.getChildNodes().length){
throw new RangeError("Page index out of bounds: "+_9c4);
}
var _9c6=this.activePage();
if(_9c6!=null){
if(!_9c6._handleExit({validateForm:this._selectedIndex<_9c4})){
return;
}
}
this._selectedIndex=_9c4;
this._updateStatus();
page._handleEnter({validateReset:true});
MochiKit.Widget.emitSignal(this,"onchange");
};
MochiKit.Widget.Wizard.prototype.cancel=function(){
var page=this.activePage();
page.setAttrs({pageStatus:MochiKit.Widget.Pane.ANY});
MochiKit.Widget.emitSignal(this,"oncancel");
};
MochiKit.Widget.Wizard.prototype.previous=function(){
if(this._selectedIndex>0){
this.activatePage(this._selectedIndex-1);
}
};
MochiKit.Widget.Wizard.prototype.next=function(){
if(this._selectedIndex<this.getChildNodes().length-1){
this.activatePage(this._selectedIndex+1);
}
};
MochiKit.Widget.Wizard.prototype.done=function(){
var page=this.activePage();
if(page!=null){
if(!page._handleExit({validateForm:true})){
return;
}
}
MochiKit.Widget.emitSignal(this,"onclose");
};
MochiKit.Widget.Wizard.prototype.resizeContent=function(){
var page=this.activePage();
if(page!=null){
MochiKit.Style.resizeElements(page);
}
};
MochiKit.Widget.Classes={Button:MochiKit.Widget.Button,Dialog:MochiKit.Widget.Dialog,Field:MochiKit.Widget.Field,Form:MochiKit.Widget.Form,FormValidator:MochiKit.Widget.FormValidator,Icon:MochiKit.Widget.Icon,Overlay:MochiKit.Widget.Overlay,Popup:MochiKit.Widget.Popup,Pane:MochiKit.Widget.Pane,ProgressBar:MochiKit.Widget.ProgressBar,TabContainer:MochiKit.Widget.TabContainer,Table:MochiKit.Widget.Table,TableColumn:MochiKit.Widget.TableColumn,TextArea:MochiKit.Widget.TextArea,TextField:MochiKit.Widget.TextField,Tree:MochiKit.Widget.Tree,TreeNode:MochiKit.Widget.TreeNode,Wizard:MochiKit.Widget.Wizard};

