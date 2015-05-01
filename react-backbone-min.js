/*!
 * https://github.com/jhudson8/react-backbone v1.0.0;  MIT license; Joe Hudson<joehud_AT_gmail.com>
 */
!function(e){"function"==typeof define&&define.amd?define(["react-mixin-manager","react-events","react","backbone","underscore","backbone-xhr-events"],function(t,n,i,r,o){return e(t,n,r,o)}):"undefined"!=typeof exports&&"undefined"!=typeof require?(require("backbone-xhr-events"),module.exports=e(require("react-mixin-manager"),require("react-events"),require("react"),require("backbone"),require("underscore"))):e(ReactMixinManager,ReactEvents,React,Backbone,_)}(function(e,t,n,i,r){function o(){var e=n.reactBackboneDebugWarnings;return r.isUndefined(e)||e}function a(){var t=r.toArray(arguments);r.isString(t)?t[0]=k+t[0]:t.name=k+t.name,e.add.apply(e,t)}function u(e){return e.getModel?e.getModel():void 0}function c(e,t,n,i){return e===q?t.getCollection(n,i):t.getModel(n,i)}function s(e){return e?r.isArray(e)?e:[e]:void 0}function l(e,t,n){return function(){return n?n:c(e,t)}}function d(e){return e.getModelKey?e.getModelKey():e.props.name||e.props.key||e.props.ref}function f(e,t){if(t&&t.modelIndexErrors)return t.modelIndexErrors(e);if(Array.isArray(e)){var n={};return r.each(e,function(e){for(var t in e)e.hasOwnProperty(t)&&(n[t]=e[t])}),n}return e}function h(e,t){var n=u(e);if(n){var i=d(e);return t(i,n)}}function p(e,t,n,i,o){var a=t;r.isString(a)&&(a=s(n.props[a]));var u=r.isArray(a);if(r.each(a,function(t,a){u&&(a=t,t=void 0);var c;c=r.isString(i)?i.replace("{key}",a):i(a),n[e+V](c,r.bind(o,{key:a,value:t}),this)},this),!a&&r.isFunction(i)){var c=i(void 0);c&&n[e+V](c,r.bind(o,{}),this)}return a}function v(e,t,n,i,r){function o(e){i["on"===t?"listenTo":"listenToOnce"](e,u,s,l)}var a=y(e,i),u=n[0],s=n[1],l=n[2];a[u]={type:t,ev:u,cb:s,ctx:l},a.__bound&&(r?o(r):c(e,i,o))}function g(e){function t(e,t){a&&e===t||(a&&e&&(i.trigger(n+":unbind",t),r.each(o,function(t){t&&t!==!0&&this.stopListening(e,t.ev,t.cb,t.ctx)},i)),t&&(i.trigger(n+":bind",t),r.each(o,function(e){e&&e!==!0&&v(n,e.type,[e.ev,e.cb,e.ctx],this,t)},i)))}var n=e.type,i=e.context,o=y(n,i),a=o.__bound;o.__bound=!0,c(n,i,function(e,i){var r=this.props[i];t(r,e),r!==e&&r&&this.trigger(n+":set",e,i,r)},e.props||i.props)}function y(e,t){var n="__"+e+P,i=I(n,t);if(!i){i={};var r={};r[n]=i,D(r,t)}return i}function m(e,t,n,i){var o=I(t,i),a=o&&o.length;if(o||(o=[]),r.isArray(o)){if(o.push(e),!a){var u={};u[t]=o,D(u,i)}e.on("complete",function(){x(e,t,n,i)})}}function x(e,t,n,i){var o=I(t,i);if(r.isArray(o)){for(var a=o.indexOf(e);a>=0;)o.splice(a,1),a=o.indexOf(e);if(!o.length){var u={};u[t]=void 0,D(u,i)}}}function b(e,t,n,i){var o=n[E];o&&r.each(o,function(r){e&&e!==K&&r.method!==e||m(r,t,n,i)})}function M(e){return e.getDOMNode()}function O(e){return M(e).value}function A(e,t,n,i){for(var r=e.getDOMNode(),o=r.getElementsByTagName(t),a=[],u=0;u<o.length;u++)o[u][n]===i&&a.push(o[u]);return a}function w(e){var t=e.props,n=t.bind;if(n&&"false"!==n){var i=r.isString(n)||n===!0?{twoWayBinding:!0}:n;return function(t){var n=e.getModel(),o=d(e),a={};if(a[o]=e.getValue(),n&&o)if(i.validateField){var u=n.validate(a,i);u?n.trigger("invalid",n,u,r.extend(i,{validationError:u})):n.set(a,i)}else n.set(a,i);e.props.onChange&&e.props.onChange(t)}}return t.onChange}var k="react-backbone.",S=i.xhrEventName,E=i.xhrModelLoadingAttribute,I=e.getState,D=e.setState,C=i[i.xhrGlobalAttribute],_="loading",V="On",P="Events",R="events",T="change",K="all",U="listen",W="deferUpdate",q="collection",B="model",L={};t.mixin||(t.mixin=i.Events),L.getModelKey=d,L.modelIndexErrors=f;var F=L.getModelValue=function(e){return h(e,function(e,t){return t.get(e)})};L.setModelValue=function(e,t,n){return h(e,function(e,i){return i.set(e,t,n)})},r.each([{type:B,defaultParams:[[B]],capType:"Model",changeEvents:[T],cachedKey:"__cachedModels"},{type:q,defaultParams:[[q]],capType:"Collection",changeEvents:[T,"add","remove","reset","sort"],cachedKey:"__cachedCollections"}],function(e){var n="get"+e.capType,u=function(t){var i={getInitialState:function(){return{}},componentWillReceiveProps:function(){this.state[e.cachedKey]=void 0}};return i[n]=function(n,i){var o=!i&&this.state&&this.state[e.cachedKey];if(!o){o={};var a=t,u=!!i;i=i||this.props,a&&0!==a.length||(a=e.defaultParams);for(var c,s=0;s<a.length;s++){c=a[s];for(var l=0;l<c.length;l++){var d=c[l],f=I(d,this)||i[d];f?o[d]=f:u&&n&&d&&n.call(this,void 0,d)}}!u&&this.state&&(this.state[e.cachedKey]=o)}var h;return r.each(o,function(e,t){h=h||e,n&&n.call(this,e,t)},this),h},i};a({name:e.type+"Aware",initiatedOnce:!0},u,"state");var s={getInitialState:function(){return c(e.type,this,function(e,t){e.off&&e.on||!o()||(console.error("props."+t+" does not implement on/off functions - you will see event binding problems (object logged to console below)"),console.log(e))}),null},componentWillReceiveProps:function(t){g({context:this,props:t,type:e.type})},componentDidMount:function(){g({context:this,type:e.type})}};s[e.type+V]=function(){v(e.type,"on",arguments,this)},s[e.type+"Once"]=function(){v(e.type,"once",arguments,this)},s[e.type+"Off"]=function(t,n,i,r){var o=y(e.type,this);delete o[t],this.stopListening(l(e.type,this,r),t,n,i)},a(e.type+P,s,e.type+"Aware",U,R);var d={getInitialState:function(){r.each(e.changeEvents,function(t){this[e.type+V](t,function(e,t){t&&t.twoWayBinding||this.deferUpdate()},this)},this)}};a(e.type+"ChangeAware",d,e.type+P,U,R,W);var f={getInitialState:function(){function t(e){e.whenFetched(function(){})}this.on(e.type+":bind",t),this["get"+e.capType](t)}};a(e.type+"Fetch",f,e.type+P);var h={getInitialState:function(t,n){function r(t){e.type===q&&t.model instanceof i.Model||m(t,this.value||_,t.model,n)}var o=function(e){return e&&e!==K?S+":"+e:S};return p(e.type,t,n,o,r),null},componentDidMount:function(t,n){function i(e){t?r.each(o,function(t,i){a&&(i=t,t=_),b(i,t,e,n)}):b(K,_,e,n)}var o=t;r.isString(o)&&(o=[o]);var a=r.isArray(t);c(e.type,n,function(e){i(e)}),n.on(e.type+":set",function(e){i(e)})}},x=function(){var e;return 0===arguments.length?e=void 0:1===arguments.length&&(e=arguments[0]),{getInitialState:function(){return h.getInitialState(e,this)},componentDidMount:function(){return h.componentDidMount(e,this)}}};a(e.type+"XHRAware",x,e.type+P);var M={getInitialState:function(){return h.getInitialState(this.props.loadOn,this)},componentDidMount:function(){return h.componentDidMount(this.props.loadOn,this)}};a(e.type+"LoadOn",M,e.type+P);var O=function(){var t=arguments.length>0?Array.prototype.slice.call(arguments,0):void 0;return{getInitialState:function(){var n=this;p(e.type,t||"updateOn",this,"{key}",function(){n.deferUpdate()})}}};a(e.type+"UpdateOn",O,e.type+P,W);var A=new RegExp("^"+e.type+"(\\[.+\\])?$");t.handle(A,function(t,n){return{on:function(){if(!this[e.type+V])throw new Error("use the "+e.type+' "Events" mixin instead of "events"');this[e.type+V](t.path,n)},off:function(){}}})}),r.each(["XHRAware","ChangeAware","LoadOn","UpdateOn"],function(t){e.alias("backbone"+t,B+t,q+t)}),a("modelPopulate",{modelPopulate:function(){var e,t,n,o,a;r.each(arguments,function(u){u instanceof i.Model?o=u:r.isBoolean(u)?(a=!0,o=!1):r.isArray(u)?e=u:r.isFunction(u)?t=u:n=u}),r.isUndefined(o)&&(o=u(this));var c={};return e||(e=r.map(this.refs,function(e){return e})),r.each(e,function(e){if(e.getValue){var t=d(e);if(t){var i=e.getValue();c[t]=i}}else if(e.modelPopulate){if(!o&&!a)return;var s=u(e),l=o||n&&n.populateModel;if(s===l){var f=e.modelPopulate(r.extend({populateModel:l},n),!0);r.defaults(c,f)}}}),o&&(o.set(c,{validate:!0})?t&&t.call(this,o):n&&n.onInvalid&&n.onInvalid.call(this,c)),c}},"modelAware"),a("loadWhile",{loadWhile:function(e,t){function n(e){var n=I(t,i);n||(n=[]),n.push(e),e.on("complete",function(){if(n=I(t,i),n.splice(n.indexOf(e,1)),!n.length){var r={};r[t]=void 0,D(r,i)}});var r={};r[t]=n,D(r,i)}t=t||_;var i=this;C.on(S,n);try{e.call(this)}finally{C.off(S,n)}}}),a("modelValidator",{modelValidate:function(e,t){var n=u(this);return n&&n.validate?f(n.validate(e,t),this)||!1:void 0}},"modelAware"),a("modelInvalidAware",{getInitialState:function(){var e=d(this);return e&&(this.modelOn("invalid",function(t,n){var i=f(n,this)||{},r=i&&i[e];r&&D({invalid:r},this)}),this.modelOn("change:"+e,function(){D({invalid:void 0},this)})),null}},"modelEvents");var N=t.specials;if(N){var H=["memoize","delay","defer","throttle","debounce","once","after","before"];r.each(H,function(e){N[e]=N[e]||function(t,n){return n.splice(0,0,t),r[e].apply(r,n)}})}var G=function(e,t,i,o){return n.createClass(r.extend({mixins:["modelAware"],render:function(){var o={},a=F(this);return i?o.defaultChecked=a:o.defaultValue=a,n.DOM[e](r.extend(o,t,this.props,{onChange:w(this)}),this.props.children)},getValue:function(){if(this.isMounted()){if(i){var e=this.getDOMNode();return e.checked?!0:!1}return O(this)}},getDOMValue:function(){return this.isMounted()?O(this):void 0}},o))};return L.input={},r.defaults(L.input,{Text:G("input",{type:"text"}),TextArea:G("textarea"),Select:G("select",void 0,void 0),CheckBox:G("input",{type:"checkbox"},!0),RadioGroup:n.createClass({mixins:["modelAware"],render:function(){var e=r.clone(this.props);return e.ref="input",n.DOM[e.tag||"span"](e,e.children)},componentDidMount:function(){var e=F(this);if(e){var t=A(this,"input","value",e.replace('"','\\"'))[0];t&&(t.checked="checked")}this.state||(this.state={});var n=this.state.changeHandler=w(this);n&&M(this).addEventListener(T,n)},componentWillUnmount:function(){var e=this.state&&this.state.changeHandler;e&&M(this).removeEventListener(T,e)},getValue:function(){if(this.isMounted())for(var e=A(this,"input","type","radio"),t=0;t<e.length;t++)if(e[t].checked)return e[t].value},getDOMValue:function(){return this.isMounted()?O(this):void 0}})}),L});