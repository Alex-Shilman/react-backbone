/*!
 * https://github.com/jhudson8/react-backbone v0.18.2;  MIT license; Joe Hudson<joehud_AT_gmail.com>
 */
!function(e){"function"==typeof define&&define.amd?define([],function(){return e}):"undefined"!=typeof exports&&"undefined"!=typeof require?module.exports=e:e(React,Backbone,_,$)}(function(e,t,n,i){function o(e){return e.getModel?e.getModel():void 0}function r(e,t,n,i){return"collection"===e?t.getCollection(n,i):t.getModel(n,i)}function a(e){return e?n.isArray(e)?e:[e]:void 0}function s(e,t,n){return function(){return n?n:r(e,t)}}function u(e){return e.getModelKey?e.getModelKey():e.props.name||e.props.key||e.props.ref}function l(e,t){if(t&&t.modelIndexErrors)return t.modelIndexErrors(e);if(Array.isArray(e)){var i={};return n.each(e,function(e){for(var t in e)e.hasOwnProperty(t)&&(i[t]=e[t])}),i}return e}function c(e,t){var n=o(e);if(n){var i=u(e);return t(i,n)}}function d(e,t,i,o,r){var s,u,l=Array.isArray(t)?t:a(i.props[t]);if(l){for(var c=0;c<l.length;c++)s=l[c],u=o.replace("{key}",s),i[e+"On"](u,n.bind(r,i),this);return l}}function f(e,t,n,i,o){function a(e){i["on"===t?"listenTo":"listenToOnce"](e,u,l,c)}var s=h(e,i),u=n[0],l=n[1],c=n[2];s[u]={type:t,ev:u,cb:l,ctx:c},o?a(o):r(e,i,a)}function p(e,t,i,o){if(t!==i){var r=h(e,o);t&&n.each(r,function(e){this.stopListening(t,e.ev,e.cb,e.ctx)},o),i&&n.each(r,function(t){f(e,t.type,[t.ev,t.cb,t.ctx],this,i)},o)}}function h(e,t){var n="__"+e+"Events",i=O(n,t);if(!i){i={};var o={};o[n]=i,A(o,t)}return i}function v(e,t,i){var o=O("loading",i);o||(o=[]),n.isArray(o)&&(o.push(e),A({loading:o},i),e.on("complete",function(){g(e,t,i)}))}function g(e,t,i){var o=O("loading",i);if(n.isArray(o)){for(var r=o.indexOf(e);r>=0;)o.splice(r,1),r=o.indexOf(e);o.length||A({loading:!1},i)}}function y(e,t,i){var o=t[M];o&&n.each(o,function(n){e&&n.method!==e||v(n,t,i)})}function m(e){var t=e.props,i=t.bind;if(i&&"false"!==i){var o=n.isString(i)||i===!0?{twoWayBinding:!0}:i;return function(t){var i=e.getModel(),r=u(e),a={};if(a[r]=e.getValue(),i&&r)if(o.validateField){var s=i.validate(a,o);s?i.trigger("invalid",i,s,n.extend(o,{validationError:s})):i.set(a,o)}else i.set(a,o);e.props.onChange&&e.props.onChange(t)}}return t.onChange}var x=t.xhrEventName,M=t.xhrModelLoadingAttribute,O=e.mixins.getState,A=e.mixins.setState,w=e.reactBackboneDebugWarnings;n.isUndefined(w)&&(w=!0),e.events.mixin=e.events.mixin||t.Events,e.mixins.getModelKey=u,e.mixins.modelIndexErrors=l,t.input=t.input||{};var E=t.input.getModelValue=function(e){return c(e,function(e,t){return t.get(e)})};t.input.setModelValue=function(e,t,n){return c(e,function(e,i){return i.set(e,t,n)})},n.each([{type:"model",defaultParams:[["model"]],capType:"Model",changeEvents:["change"]},{type:"collection",defaultParams:[["collection"]],capType:"Collection",changeEvents:["add","remove","reset","sort"]}],function(t){var i="get"+t.capType,o=function(e){var n={};return n[i]=function(n,i){var o=e,r=!!i;i=i||this.props,o&&0!==o.length||(o=t.defaultParams);for(var a,s,u,l=0;l<o.length;l++){s=o[l];for(var c=0;c<s.length;c++){var d=s[c];if(u=O(d,this)||i[d]){if(a=a||u,!n)return u;n.call(this,u,d)}else r&&n&&n.call(this,void 0,d)}}return a},n["set"+t.capType]=function(e,n){n=n||t.type;var i,o={};this.getModel(function(e,t){t===n&&(i=e)}),p(t.type,i,e,this),o[n]=e},n};e.mixins.add({name:t.type+"Aware",initiatedOnce:!0},o,"state");var a={getInitialState:function(){return r(t.type,this,function(e,t){(w&&!e.off||!e.on)&&(console.error("props."+t+" does not implement on/off functions - you will see event binding problems (object logged to console below)"),console.log(e))}),{}},componentWillReceiveProps:function(e){r(t.type,this,function(e,n){var i=this.props[n];p(t.type,i,e,this)},e)}};a[t.type+"On"]=function(){f(t.type,"on",arguments,this)},a[t.type+"Once"]=function(){f(t.type,"once",arguments,this)},a[t.type+"Off"]=function(e,n,i,o){var r=h(t.type,this);delete r[e],this.stopListening(s(t.type,this,o),e,n,i)},e.mixins.add(t.type+"Events",a,t.type+"Aware","listen","events");var u={getInitialState:function(){n.each(t.changeEvents,function(e){this[t.type+"On"](e,function(e,t){t&&t.twoWayBinding||this.deferUpdate()},this)},this)}};e.mixins.add(t.type+"ChangeAware",u,t.type+"Events","listen","events","deferUpdate");var l={getInitialState:function(e,n){function i(e){r(t.type,n,function(t){v(e,t,n)})}return e?d(t.type,e,n,x+":{key}",i):n[t.type+"On"](x,function(e,t){i(t)}),{}},componentWillMount:function(e,i){r(t.type,i,function(t){if(e){var o=n.isArray(e)?e:i.props[e];if(!o)return;n.isArray(o)||(o=[o]),n.each(o,function(e){y(e,t,i)})}else y(e,t,i)})}},c={getInitialState:function(){return l.getInitialState(void 0,this)},componentWillMount:function(){return l.componentWillMount(void 0,this)}};e.mixins.add(t.type+"XHRAware",c,t.type+"Events");var g=function(){var e=arguments.length>0?Array.prototype.slice.call(arguments,0):void 0;return{getInitialState:function(){return l.getInitialState(e||"loadOn",this)},componentWillMount:function(){return l.componentWillMount(e||"loadOn",this)}}};e.mixins.add(t.type+"LoadOn",g,t.type+"Events");var m=function(){var e=arguments.length>0?Array.prototype.slice.call(arguments,0):void 0;return{getInitialState:function(){d(t.type,e||"updateOn",this,"{key}",function(){this.deferUpdate()})}}};e.mixins.add(t.type+"UpdateOn",m,t.type+"Events","deferUpdate");var M=new RegExp("^"+t.type+"(\\[.+\\])?$");e.events.handle(M,function(e,n){return{on:function(){if(!this[t.type+"On"])throw new Error("use the "+t.type+' "Events" mixin instead of "events"');this[t.type+"On"](e.path,n)},off:function(){}}})}),n.each(["XHRAware","ChangeAware","LoadOn","UpdateOn"],function(t){e.mixins.alias("backbone"+t,"model"+t,"collection"+t)}),e.mixins.add("modelPopulate",{modelPopulate:function(){var e,i,r,a,s;n.each(arguments,function(o){o instanceof t.Model?a=o:n.isBoolean(o)?(s=!0,a=!1):n.isArray(o)?e=o:n.isFunction(o)?i=o:r=o}),n.isUndefined(a)&&(a=o(this));var l={};return e||(e=n.map(this.refs,function(e){return e})),n.each(e,function(e){if(e.getValue){var t=u(e);if(t){var i=e.getValue();l[t]=i}}else if(e.modelPopulate&&e.getModels){if(!a&&!s)return;var c=o(e),d=a||r&&r.populateModel;if(c===d){var f=e.modelPopulate(n.extend({populateModel:d},r),!0);n.defaults(l,f)}}}),a&&a.set(l,{validate:!0})&&i&&i.call(this,a),l}},"modelAware"),e.mixins.add("loadWhile",{loadWhile:function(e){function t(t){var i=e[t];e[t]=function(){A({loading:!1},n),i&&i.apply(this,arguments)}}e=e||{};var n=this;return t("error"),t("success"),A({loading:!0},this),e}}),e.mixins.add("modelValidator",{modelValidate:function(e,t){var n=o(this);return n&&n.validate?l(n.validate(e,t),this)||!1:void 0}},"modelAware"),e.mixins.add("modelInvalidAware",{getInitialState:function(){var e=u(this);return e&&(this.modelOn("invalid",function(t,n){var i=l(n,this)||{},o=i&&i[e];o&&A({invalid:o},this)}),this.modelOn("change:"+e,function(){A({invalid:void 0},this)})),{}}},"modelEvents");var b=e.events.specials;if(b){var k=["memoize","delay","defer","throttle","debounce","once","after","before"];n.each(k,function(e){b[e]=b[e]||function(t,i){return i.splice(0,0,t),n[e].apply(n,i)}})}var D=function(t,o,r,a){return e.createClass(n.extend({mixins:["modelAware"],render:function(){var i={},a=E(this);return r?i.defaultChecked=a:i.defaultValue=a,e.DOM[t](n.extend(i,o,this.props,{onChange:m(this)}),this.props.children)},getValue:function(){if(this.isMounted()){if(r){var e=this.getDOMNode();return e.checked&&(e.value||!0)||!1}return i(this.getDOMNode()).val()}},getDOMValue:function(){return this.isMounted()?i(this.getDOMNode()).val():void 0}},a))};t.input=t.input||{},n.defaults(t.input,{Text:D("input",{type:"text"}),TextArea:D("textarea"),Select:D("select",void 0,void 0),CheckBox:D("input",{type:"checkbox"},!0),RadioGroup:e.createClass({mixins:["modelAware"],render:function(){var t=n.clone(this.props);return t.ref="input",e.DOM[t.tag||"span"](t,t.children)},componentDidMount:function(){var e=E(this);if(e){var t='input[value="'+e.replace('"','\\"')+'"]',n=i(this.getDOMNode()).find(t);n.attr("checked","checked")}this.state||(this.state={});var o=this.state.changeHandler=m(this);o&&i(this.getDOMNode()).on("change","input",o)},componentWillUnmount:function(){var e=this.state&&this.state.changeHandler;e&&i(this.getDOMNode()).off("change",e)},getValue:function(){if(this.isMounted())for(var e='input[type="radio"]',t=i(this.getDOMNode()).find(e),n=0;n<t.length;n++)if(t[n].checked)return t[n].value},getDOMValue:function(){return this.isMounted()?i(this.getDOMNode()).val():void 0}})})});