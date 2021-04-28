






/** it **/

/** jQuery ui date picker **/
/** > /scripts-v2104/lib/jplugins/ui-1.11.4/jquery-ui.min.js **/
/*! jQuery UI - v1.11.4 - 2016-02-26
* http://jqueryui.com
* Includes: core.js, widget.js, mouse.js, position.js, draggable.js, resizable.js, button.js, datepicker.js, dialog.js, slider.js
* Copyright jQuery Foundation and other contributors; Licensed MIT */

(function(e){"function"==typeof define&&define.amd?define(["jquery"],e):e(jQuery)})(function(e){function t(t,s){var n,a,o,r=t.nodeName.toLowerCase();return"area"===r?(n=t.parentNode,a=n.name,t.href&&a&&"map"===n.nodeName.toLowerCase()?(o=e("img[usemap='#"+a+"']")[0],!!o&&i(o)):!1):(/^(input|select|textarea|button|object)$/.test(r)?!t.disabled:"a"===r?t.href||s:s)&&i(t)}function i(t){return e.expr.filters.visible(t)&&!e(t).parents().addBack().filter(function(){return"hidden"===e.css(this,"visibility")}).length}function s(e){for(var t,i;e.length&&e[0]!==document;){if(t=e.css("position"),("absolute"===t||"relative"===t||"fixed"===t)&&(i=parseInt(e.css("zIndex"),10),!isNaN(i)&&0!==i))return i;e=e.parent()}return 0}function n(){this._curInst=null,this._keyEvent=!1,this._disabledInputs=[],this._datepickerShowing=!1,this._inDialog=!1,this._mainDivId="ui-datepicker-div",this._inlineClass="ui-datepicker-inline",this._appendClass="ui-datepicker-append",this._triggerClass="ui-datepicker-trigger",this._dialogClass="ui-datepicker-dialog",this._disableClass="ui-datepicker-disabled",this._unselectableClass="ui-datepicker-unselectable",this._currentClass="ui-datepicker-current-day",this._dayOverClass="ui-datepicker-days-cell-over",this.regional=[],this.regional[""]={closeText:"Done",prevText:"Prev",nextText:"Next",currentText:"Today",monthNames:["January","February","March","April","May","June","July","August","September","October","November","December"],monthNamesShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],dayNames:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],dayNamesShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],dayNamesMin:["Su","Mo","Tu","We","Th","Fr","Sa"],weekHeader:"Wk",dateFormat:"mm/dd/yy",firstDay:0,isRTL:!1,showMonthAfterYear:!1,yearSuffix:""},this._defaults={showOn:"focus",showAnim:"fadeIn",showOptions:{},defaultDate:null,appendText:"",buttonText:"...",buttonImage:"",buttonImageOnly:!1,hideIfNoPrevNext:!1,navigationAsDateFormat:!1,gotoCurrent:!1,changeMonth:!1,changeYear:!1,yearRange:"c-10:c+10",showOtherMonths:!1,selectOtherMonths:!1,showWeek:!1,calculateWeek:this.iso8601Week,shortYearCutoff:"+10",minDate:null,maxDate:null,duration:"fast",beforeShowDay:null,beforeShow:null,onSelect:null,onChangeMonthYear:null,onClose:null,numberOfMonths:1,showCurrentAtPos:0,stepMonths:1,stepBigMonths:12,altField:"",altFormat:"",constrainInput:!0,showButtonPanel:!1,autoSize:!1,disabled:!1},e.extend(this._defaults,this.regional[""]),this.regional.en=e.extend(!0,{},this.regional[""]),this.regional["en-US"]=e.extend(!0,{},this.regional.en),this.dpDiv=a(e("<div id='"+this._mainDivId+"' class='ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>"))}function a(t){var i="button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a";return t.delegate(i,"mouseout",function(){e(this).removeClass("ui-state-hover"),-1!==this.className.indexOf("ui-datepicker-prev")&&e(this).removeClass("ui-datepicker-prev-hover"),-1!==this.className.indexOf("ui-datepicker-next")&&e(this).removeClass("ui-datepicker-next-hover")}).delegate(i,"mouseover",o)}function o(){e.datepicker._isDisabledDatepicker(g.inline?g.dpDiv.parent()[0]:g.input[0])||(e(this).parents(".ui-datepicker-calendar").find("a").removeClass("ui-state-hover"),e(this).addClass("ui-state-hover"),-1!==this.className.indexOf("ui-datepicker-prev")&&e(this).addClass("ui-datepicker-prev-hover"),-1!==this.className.indexOf("ui-datepicker-next")&&e(this).addClass("ui-datepicker-next-hover"))}function r(t,i){e.extend(t,i);for(var s in i)null==i[s]&&(t[s]=i[s]);return t}e.ui=e.ui||{},e.extend(e.ui,{version:"1.11.4",keyCode:{BACKSPACE:8,COMMA:188,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,LEFT:37,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SPACE:32,TAB:9,UP:38}}),e.fn.extend({scrollParent:function(t){var i=this.css("position"),s="absolute"===i,n=t?/(auto|scroll|hidden)/:/(auto|scroll)/,a=this.parents().filter(function(){var t=e(this);return s&&"static"===t.css("position")?!1:n.test(t.css("overflow")+t.css("overflow-y")+t.css("overflow-x"))}).eq(0);return"fixed"!==i&&a.length?a:e(this[0].ownerDocument||document)},uniqueId:function(){var e=0;return function(){return this.each(function(){this.id||(this.id="ui-id-"+ ++e)})}}(),removeUniqueId:function(){return this.each(function(){/^ui-id-\d+$/.test(this.id)&&e(this).removeAttr("id")})}}),e.extend(e.expr[":"],{data:e.expr.createPseudo?e.expr.createPseudo(function(t){return function(i){return!!e.data(i,t)}}):function(t,i,s){return!!e.data(t,s[3])},focusable:function(i){return t(i,!isNaN(e.attr(i,"tabindex")))},tabbable:function(i){var s=e.attr(i,"tabindex"),n=isNaN(s);return(n||s>=0)&&t(i,!n)}}),e("<a>").outerWidth(1).jquery||e.each(["Width","Height"],function(t,i){function s(t,i,s,a){return e.each(n,function(){i-=parseFloat(e.css(t,"padding"+this))||0,s&&(i-=parseFloat(e.css(t,"border"+this+"Width"))||0),a&&(i-=parseFloat(e.css(t,"margin"+this))||0)}),i}var n="Width"===i?["Left","Right"]:["Top","Bottom"],a=i.toLowerCase(),o={innerWidth:e.fn.innerWidth,innerHeight:e.fn.innerHeight,outerWidth:e.fn.outerWidth,outerHeight:e.fn.outerHeight};e.fn["inner"+i]=function(t){return void 0===t?o["inner"+i].call(this):this.each(function(){e(this).css(a,s(this,t)+"px")})},e.fn["outer"+i]=function(t,n){return"number"!=typeof t?o["outer"+i].call(this,t):this.each(function(){e(this).css(a,s(this,t,!0,n)+"px")})}}),e.fn.addBack||(e.fn.addBack=function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}),e("<a>").data("a-b","a").removeData("a-b").data("a-b")&&(e.fn.removeData=function(t){return function(i){return arguments.length?t.call(this,e.camelCase(i)):t.call(this)}}(e.fn.removeData)),e.ui.ie=!!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase()),e.fn.extend({focus:function(t){return function(i,s){return"number"==typeof i?this.each(function(){var t=this;setTimeout(function(){e(t).focus(),s&&s.call(t)},i)}):t.apply(this,arguments)}}(e.fn.focus),disableSelection:function(){var e="onselectstart"in document.createElement("div")?"selectstart":"mousedown";return function(){return this.bind(e+".ui-disableSelection",function(e){e.preventDefault()})}}(),enableSelection:function(){return this.unbind(".ui-disableSelection")},zIndex:function(t){if(void 0!==t)return this.css("zIndex",t);if(this.length)for(var i,s,n=e(this[0]);n.length&&n[0]!==document;){if(i=n.css("position"),("absolute"===i||"relative"===i||"fixed"===i)&&(s=parseInt(n.css("zIndex"),10),!isNaN(s)&&0!==s))return s;n=n.parent()}return 0}}),e.ui.plugin={add:function(t,i,s){var n,a=e.ui[t].prototype;for(n in s)a.plugins[n]=a.plugins[n]||[],a.plugins[n].push([i,s[n]])},call:function(e,t,i,s){var n,a=e.plugins[t];if(a&&(s||e.element[0].parentNode&&11!==e.element[0].parentNode.nodeType))for(n=0;a.length>n;n++)e.options[a[n][0]]&&a[n][1].apply(e.element,i)}};var h=0,l=Array.prototype.slice;e.cleanData=function(t){return function(i){var s,n,a;for(a=0;null!=(n=i[a]);a++)try{s=e._data(n,"events"),s&&s.remove&&e(n).triggerHandler("remove")}catch(o){}t(i)}}(e.cleanData),e.widget=function(t,i,s){var n,a,o,r,h={},l=t.split(".")[0];return t=t.split(".")[1],n=l+"-"+t,s||(s=i,i=e.Widget),e.expr[":"][n.toLowerCase()]=function(t){return!!e.data(t,n)},e[l]=e[l]||{},a=e[l][t],o=e[l][t]=function(e,t){return this._createWidget?(arguments.length&&this._createWidget(e,t),void 0):new o(e,t)},e.extend(o,a,{version:s.version,_proto:e.extend({},s),_childConstructors:[]}),r=new i,r.options=e.widget.extend({},r.options),e.each(s,function(t,s){return e.isFunction(s)?(h[t]=function(){var e=function(){return i.prototype[t].apply(this,arguments)},n=function(e){return i.prototype[t].apply(this,e)};return function(){var t,i=this._super,a=this._superApply;return this._super=e,this._superApply=n,t=s.apply(this,arguments),this._super=i,this._superApply=a,t}}(),void 0):(h[t]=s,void 0)}),o.prototype=e.widget.extend(r,{widgetEventPrefix:a?r.widgetEventPrefix||t:t},h,{constructor:o,namespace:l,widgetName:t,widgetFullName:n}),a?(e.each(a._childConstructors,function(t,i){var s=i.prototype;e.widget(s.namespace+"."+s.widgetName,o,i._proto)}),delete a._childConstructors):i._childConstructors.push(o),e.widget.bridge(t,o),o},e.widget.extend=function(t){for(var i,s,n=l.call(arguments,1),a=0,o=n.length;o>a;a++)for(i in n[a])s=n[a][i],n[a].hasOwnProperty(i)&&void 0!==s&&(t[i]=e.isPlainObject(s)?e.isPlainObject(t[i])?e.widget.extend({},t[i],s):e.widget.extend({},s):s);return t},e.widget.bridge=function(t,i){var s=i.prototype.widgetFullName||t;e.fn[t]=function(n){var a="string"==typeof n,o=l.call(arguments,1),r=this;return a?this.each(function(){var i,a=e.data(this,s);return"instance"===n?(r=a,!1):a?e.isFunction(a[n])&&"_"!==n.charAt(0)?(i=a[n].apply(a,o),i!==a&&void 0!==i?(r=i&&i.jquery?r.pushStack(i.get()):i,!1):void 0):e.error("no such method '"+n+"' for "+t+" widget instance"):e.error("cannot call methods on "+t+" prior to initialization; "+"attempted to call method '"+n+"'")}):(o.length&&(n=e.widget.extend.apply(null,[n].concat(o))),this.each(function(){var t=e.data(this,s);t?(t.option(n||{}),t._init&&t._init()):e.data(this,s,new i(n,this))})),r}},e.Widget=function(){},e.Widget._childConstructors=[],e.Widget.prototype={widgetName:"widget",widgetEventPrefix:"",defaultElement:"<div>",options:{disabled:!1,create:null},_createWidget:function(t,i){i=e(i||this.defaultElement||this)[0],this.element=e(i),this.uuid=h++,this.eventNamespace="."+this.widgetName+this.uuid,this.bindings=e(),this.hoverable=e(),this.focusable=e(),i!==this&&(e.data(i,this.widgetFullName,this),this._on(!0,this.element,{remove:function(e){e.target===i&&this.destroy()}}),this.document=e(i.style?i.ownerDocument:i.document||i),this.window=e(this.document[0].defaultView||this.document[0].parentWindow)),this.options=e.widget.extend({},this.options,this._getCreateOptions(),t),this._create(),this._trigger("create",null,this._getCreateEventData()),this._init()},_getCreateOptions:e.noop,_getCreateEventData:e.noop,_create:e.noop,_init:e.noop,destroy:function(){this._destroy(),this.element.unbind(this.eventNamespace).removeData(this.widgetFullName).removeData(e.camelCase(this.widgetFullName)),this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName+"-disabled "+"ui-state-disabled"),this.bindings.unbind(this.eventNamespace),this.hoverable.removeClass("ui-state-hover"),this.focusable.removeClass("ui-state-focus")},_destroy:e.noop,widget:function(){return this.element},option:function(t,i){var s,n,a,o=t;if(0===arguments.length)return e.widget.extend({},this.options);if("string"==typeof t)if(o={},s=t.split("."),t=s.shift(),s.length){for(n=o[t]=e.widget.extend({},this.options[t]),a=0;s.length-1>a;a++)n[s[a]]=n[s[a]]||{},n=n[s[a]];if(t=s.pop(),1===arguments.length)return void 0===n[t]?null:n[t];n[t]=i}else{if(1===arguments.length)return void 0===this.options[t]?null:this.options[t];o[t]=i}return this._setOptions(o),this},_setOptions:function(e){var t;for(t in e)this._setOption(t,e[t]);return this},_setOption:function(e,t){return this.options[e]=t,"disabled"===e&&(this.widget().toggleClass(this.widgetFullName+"-disabled",!!t),t&&(this.hoverable.removeClass("ui-state-hover"),this.focusable.removeClass("ui-state-focus"))),this},enable:function(){return this._setOptions({disabled:!1})},disable:function(){return this._setOptions({disabled:!0})},_on:function(t,i,s){var n,a=this;"boolean"!=typeof t&&(s=i,i=t,t=!1),s?(i=n=e(i),this.bindings=this.bindings.add(i)):(s=i,i=this.element,n=this.widget()),e.each(s,function(s,o){function r(){return t||a.options.disabled!==!0&&!e(this).hasClass("ui-state-disabled")?("string"==typeof o?a[o]:o).apply(a,arguments):void 0}"string"!=typeof o&&(r.guid=o.guid=o.guid||r.guid||e.guid++);var h=s.match(/^([\w:-]*)\s*(.*)$/),l=h[1]+a.eventNamespace,u=h[2];u?n.delegate(u,l,r):i.bind(l,r)})},_off:function(t,i){i=(i||"").split(" ").join(this.eventNamespace+" ")+this.eventNamespace,t.unbind(i).undelegate(i),this.bindings=e(this.bindings.not(t).get()),this.focusable=e(this.focusable.not(t).get()),this.hoverable=e(this.hoverable.not(t).get())},_delay:function(e,t){function i(){return("string"==typeof e?s[e]:e).apply(s,arguments)}var s=this;return setTimeout(i,t||0)},_hoverable:function(t){this.hoverable=this.hoverable.add(t),this._on(t,{mouseenter:function(t){e(t.currentTarget).addClass("ui-state-hover")},mouseleave:function(t){e(t.currentTarget).removeClass("ui-state-hover")}})},_focusable:function(t){this.focusable=this.focusable.add(t),this._on(t,{focusin:function(t){e(t.currentTarget).addClass("ui-state-focus")},focusout:function(t){e(t.currentTarget).removeClass("ui-state-focus")}})},_trigger:function(t,i,s){var n,a,o=this.options[t];if(s=s||{},i=e.Event(i),i.type=(t===this.widgetEventPrefix?t:this.widgetEventPrefix+t).toLowerCase(),i.target=this.element[0],a=i.originalEvent)for(n in a)n in i||(i[n]=a[n]);return this.element.trigger(i,s),!(e.isFunction(o)&&o.apply(this.element[0],[i].concat(s))===!1||i.isDefaultPrevented())}},e.each({show:"fadeIn",hide:"fadeOut"},function(t,i){e.Widget.prototype["_"+t]=function(s,n,a){"string"==typeof n&&(n={effect:n});var o,r=n?n===!0||"number"==typeof n?i:n.effect||i:t;n=n||{},"number"==typeof n&&(n={duration:n}),o=!e.isEmptyObject(n),n.complete=a,n.delay&&s.delay(n.delay),o&&e.effects&&e.effects.effect[r]?s[t](n):r!==t&&s[r]?s[r](n.duration,n.easing,a):s.queue(function(i){e(this)[t](),a&&a.call(s[0]),i()})}}),e.widget;var u=!1;e(document).mouseup(function(){u=!1}),e.widget("ui.mouse",{version:"1.11.4",options:{cancel:"input,textarea,button,select,option",distance:1,delay:0},_mouseInit:function(){var t=this;this.element.bind("mousedown."+this.widgetName,function(e){return t._mouseDown(e)}).bind("click."+this.widgetName,function(i){return!0===e.data(i.target,t.widgetName+".preventClickEvent")?(e.removeData(i.target,t.widgetName+".preventClickEvent"),i.stopImmediatePropagation(),!1):void 0}),this.started=!1},_mouseDestroy:function(){this.element.unbind("."+this.widgetName),this._mouseMoveDelegate&&this.document.unbind("mousemove."+this.widgetName,this._mouseMoveDelegate).unbind("mouseup."+this.widgetName,this._mouseUpDelegate)},_mouseDown:function(t){if(!u){this._mouseMoved=!1,this._mouseStarted&&this._mouseUp(t),this._mouseDownEvent=t;var i=this,s=1===t.which,n="string"==typeof this.options.cancel&&t.target.nodeName?e(t.target).closest(this.options.cancel).length:!1;return s&&!n&&this._mouseCapture(t)?(this.mouseDelayMet=!this.options.delay,this.mouseDelayMet||(this._mouseDelayTimer=setTimeout(function(){i.mouseDelayMet=!0},this.options.delay)),this._mouseDistanceMet(t)&&this._mouseDelayMet(t)&&(this._mouseStarted=this._mouseStart(t)!==!1,!this._mouseStarted)?(t.preventDefault(),!0):(!0===e.data(t.target,this.widgetName+".preventClickEvent")&&e.removeData(t.target,this.widgetName+".preventClickEvent"),this._mouseMoveDelegate=function(e){return i._mouseMove(e)},this._mouseUpDelegate=function(e){return i._mouseUp(e)},this.document.bind("mousemove."+this.widgetName,this._mouseMoveDelegate).bind("mouseup."+this.widgetName,this._mouseUpDelegate),t.preventDefault(),u=!0,!0)):!0}},_mouseMove:function(t){if(this._mouseMoved){if(e.ui.ie&&(!document.documentMode||9>document.documentMode)&&!t.button)return this._mouseUp(t);if(!t.which)return this._mouseUp(t)}return(t.which||t.button)&&(this._mouseMoved=!0),this._mouseStarted?(this._mouseDrag(t),t.preventDefault()):(this._mouseDistanceMet(t)&&this._mouseDelayMet(t)&&(this._mouseStarted=this._mouseStart(this._mouseDownEvent,t)!==!1,this._mouseStarted?this._mouseDrag(t):this._mouseUp(t)),!this._mouseStarted)},_mouseUp:function(t){return this.document.unbind("mousemove."+this.widgetName,this._mouseMoveDelegate).unbind("mouseup."+this.widgetName,this._mouseUpDelegate),this._mouseStarted&&(this._mouseStarted=!1,t.target===this._mouseDownEvent.target&&e.data(t.target,this.widgetName+".preventClickEvent",!0),this._mouseStop(t)),u=!1,!1},_mouseDistanceMet:function(e){return Math.max(Math.abs(this._mouseDownEvent.pageX-e.pageX),Math.abs(this._mouseDownEvent.pageY-e.pageY))>=this.options.distance},_mouseDelayMet:function(){return this.mouseDelayMet},_mouseStart:function(){},_mouseDrag:function(){},_mouseStop:function(){},_mouseCapture:function(){return!0}}),function(){function t(e,t,i){return[parseFloat(e[0])*(p.test(e[0])?t/100:1),parseFloat(e[1])*(p.test(e[1])?i/100:1)]}function i(t,i){return parseInt(e.css(t,i),10)||0}function s(t){var i=t[0];return 9===i.nodeType?{width:t.width(),height:t.height(),offset:{top:0,left:0}}:e.isWindow(i)?{width:t.width(),height:t.height(),offset:{top:t.scrollTop(),left:t.scrollLeft()}}:i.preventDefault?{width:0,height:0,offset:{top:i.pageY,left:i.pageX}}:{width:t.outerWidth(),height:t.outerHeight(),offset:t.offset()}}e.ui=e.ui||{};var n,a,o=Math.max,r=Math.abs,h=Math.round,l=/left|center|right/,u=/top|center|bottom/,c=/[\+\-]\d+(\.[\d]+)?%?/,d=/^\w+/,p=/%$/,f=e.fn.position;e.position={scrollbarWidth:function(){if(void 0!==n)return n;var t,i,s=e("<div style='display:block;position:absolute;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"),a=s.children()[0];return e("body").append(s),t=a.offsetWidth,s.css("overflow","scroll"),i=a.offsetWidth,t===i&&(i=s[0].clientWidth),s.remove(),n=t-i},getScrollInfo:function(t){var i=t.isWindow||t.isDocument?"":t.element.css("overflow-x"),s=t.isWindow||t.isDocument?"":t.element.css("overflow-y"),n="scroll"===i||"auto"===i&&t.width<t.element[0].scrollWidth,a="scroll"===s||"auto"===s&&t.height<t.element[0].scrollHeight;return{width:a?e.position.scrollbarWidth():0,height:n?e.position.scrollbarWidth():0}},getWithinInfo:function(t){var i=e(t||window),s=e.isWindow(i[0]),n=!!i[0]&&9===i[0].nodeType;return{element:i,isWindow:s,isDocument:n,offset:i.offset()||{left:0,top:0},scrollLeft:i.scrollLeft(),scrollTop:i.scrollTop(),width:s||n?i.width():i.outerWidth(),height:s||n?i.height():i.outerHeight()}}},e.fn.position=function(n){if(!n||!n.of)return f.apply(this,arguments);n=e.extend({},n);var p,m,g,v,_,b,y=e(n.of),x=e.position.getWithinInfo(n.within),w=e.position.getScrollInfo(x),k=(n.collision||"flip").split(" "),D={};return b=s(y),y[0].preventDefault&&(n.at="left top"),m=b.width,g=b.height,v=b.offset,_=e.extend({},v),e.each(["my","at"],function(){var e,t,i=(n[this]||"").split(" ");1===i.length&&(i=l.test(i[0])?i.concat(["center"]):u.test(i[0])?["center"].concat(i):["center","center"]),i[0]=l.test(i[0])?i[0]:"center",i[1]=u.test(i[1])?i[1]:"center",e=c.exec(i[0]),t=c.exec(i[1]),D[this]=[e?e[0]:0,t?t[0]:0],n[this]=[d.exec(i[0])[0],d.exec(i[1])[0]]}),1===k.length&&(k[1]=k[0]),"right"===n.at[0]?_.left+=m:"center"===n.at[0]&&(_.left+=m/2),"bottom"===n.at[1]?_.top+=g:"center"===n.at[1]&&(_.top+=g/2),p=t(D.at,m,g),_.left+=p[0],_.top+=p[1],this.each(function(){var s,l,u=e(this),c=u.outerWidth(),d=u.outerHeight(),f=i(this,"marginLeft"),b=i(this,"marginTop"),T=c+f+i(this,"marginRight")+w.width,S=d+b+i(this,"marginBottom")+w.height,M=e.extend({},_),N=t(D.my,u.outerWidth(),u.outerHeight());"right"===n.my[0]?M.left-=c:"center"===n.my[0]&&(M.left-=c/2),"bottom"===n.my[1]?M.top-=d:"center"===n.my[1]&&(M.top-=d/2),M.left+=N[0],M.top+=N[1],a||(M.left=h(M.left),M.top=h(M.top)),s={marginLeft:f,marginTop:b},e.each(["left","top"],function(t,i){e.ui.position[k[t]]&&e.ui.position[k[t]][i](M,{targetWidth:m,targetHeight:g,elemWidth:c,elemHeight:d,collisionPosition:s,collisionWidth:T,collisionHeight:S,offset:[p[0]+N[0],p[1]+N[1]],my:n.my,at:n.at,within:x,elem:u})}),n.using&&(l=function(e){var t=v.left-M.left,i=t+m-c,s=v.top-M.top,a=s+g-d,h={target:{element:y,left:v.left,top:v.top,width:m,height:g},element:{element:u,left:M.left,top:M.top,width:c,height:d},horizontal:0>i?"left":t>0?"right":"center",vertical:0>a?"top":s>0?"bottom":"middle"};c>m&&m>r(t+i)&&(h.horizontal="center"),d>g&&g>r(s+a)&&(h.vertical="middle"),h.important=o(r(t),r(i))>o(r(s),r(a))?"horizontal":"vertical",n.using.call(this,e,h)}),u.offset(e.extend(M,{using:l}))})},e.ui.position={fit:{left:function(e,t){var i,s=t.within,n=s.isWindow?s.scrollLeft:s.offset.left,a=s.width,r=e.left-t.collisionPosition.marginLeft,h=n-r,l=r+t.collisionWidth-a-n;t.collisionWidth>a?h>0&&0>=l?(i=e.left+h+t.collisionWidth-a-n,e.left+=h-i):e.left=l>0&&0>=h?n:h>l?n+a-t.collisionWidth:n:h>0?e.left+=h:l>0?e.left-=l:e.left=o(e.left-r,e.left)},top:function(e,t){var i,s=t.within,n=s.isWindow?s.scrollTop:s.offset.top,a=t.within.height,r=e.top-t.collisionPosition.marginTop,h=n-r,l=r+t.collisionHeight-a-n;t.collisionHeight>a?h>0&&0>=l?(i=e.top+h+t.collisionHeight-a-n,e.top+=h-i):e.top=l>0&&0>=h?n:h>l?n+a-t.collisionHeight:n:h>0?e.top+=h:l>0?e.top-=l:e.top=o(e.top-r,e.top)}},flip:{left:function(e,t){var i,s,n=t.within,a=n.offset.left+n.scrollLeft,o=n.width,h=n.isWindow?n.scrollLeft:n.offset.left,l=e.left-t.collisionPosition.marginLeft,u=l-h,c=l+t.collisionWidth-o-h,d="left"===t.my[0]?-t.elemWidth:"right"===t.my[0]?t.elemWidth:0,p="left"===t.at[0]?t.targetWidth:"right"===t.at[0]?-t.targetWidth:0,f=-2*t.offset[0];0>u?(i=e.left+d+p+f+t.collisionWidth-o-a,(0>i||r(u)>i)&&(e.left+=d+p+f)):c>0&&(s=e.left-t.collisionPosition.marginLeft+d+p+f-h,(s>0||c>r(s))&&(e.left+=d+p+f))},top:function(e,t){var i,s,n=t.within,a=n.offset.top+n.scrollTop,o=n.height,h=n.isWindow?n.scrollTop:n.offset.top,l=e.top-t.collisionPosition.marginTop,u=l-h,c=l+t.collisionHeight-o-h,d="top"===t.my[1],p=d?-t.elemHeight:"bottom"===t.my[1]?t.elemHeight:0,f="top"===t.at[1]?t.targetHeight:"bottom"===t.at[1]?-t.targetHeight:0,m=-2*t.offset[1];0>u?(s=e.top+p+f+m+t.collisionHeight-o-a,(0>s||r(u)>s)&&(e.top+=p+f+m)):c>0&&(i=e.top-t.collisionPosition.marginTop+p+f+m-h,(i>0||c>r(i))&&(e.top+=p+f+m))}},flipfit:{left:function(){e.ui.position.flip.left.apply(this,arguments),e.ui.position.fit.left.apply(this,arguments)},top:function(){e.ui.position.flip.top.apply(this,arguments),e.ui.position.fit.top.apply(this,arguments)}}},function(){var t,i,s,n,o,r=document.getElementsByTagName("body")[0],h=document.createElement("div");t=document.createElement(r?"div":"body"),s={visibility:"hidden",width:0,height:0,border:0,margin:0,background:"none"},r&&e.extend(s,{position:"absolute",left:"-1000px",top:"-1000px"});for(o in s)t.style[o]=s[o];t.appendChild(h),i=r||document.documentElement,i.insertBefore(t,i.firstChild),h.style.cssText="position: absolute; left: 10.7432222px;",n=e(h).offset().left,a=n>10&&11>n,t.innerHTML="",i.removeChild(t)}()}(),e.ui.position,e.widget("ui.draggable",e.ui.mouse,{version:"1.11.4",widgetEventPrefix:"drag",options:{addClasses:!0,appendTo:"parent",axis:!1,connectToSortable:!1,containment:!1,cursor:"auto",cursorAt:!1,grid:!1,handle:!1,helper:"original",iframeFix:!1,opacity:!1,refreshPositions:!1,revert:!1,revertDuration:500,scope:"default",scroll:!0,scrollSensitivity:20,scrollSpeed:20,snap:!1,snapMode:"both",snapTolerance:20,stack:!1,zIndex:!1,drag:null,start:null,stop:null},_create:function(){"original"===this.options.helper&&this._setPositionRelative(),this.options.addClasses&&this.element.addClass("ui-draggable"),this.options.disabled&&this.element.addClass("ui-draggable-disabled"),this._setHandleClassName(),this._mouseInit()},_setOption:function(e,t){this._super(e,t),"handle"===e&&(this._removeHandleClassName(),this._setHandleClassName())},_destroy:function(){return(this.helper||this.element).is(".ui-draggable-dragging")?(this.destroyOnClear=!0,void 0):(this.element.removeClass("ui-draggable ui-draggable-dragging ui-draggable-disabled"),this._removeHandleClassName(),this._mouseDestroy(),void 0)},_mouseCapture:function(t){var i=this.options;return this._blurActiveElement(t),this.helper||i.disabled||e(t.target).closest(".ui-resizable-handle").length>0?!1:(this.handle=this._getHandle(t),this.handle?(this._blockFrames(i.iframeFix===!0?"iframe":i.iframeFix),!0):!1)},_blockFrames:function(t){this.iframeBlocks=this.document.find(t).map(function(){var t=e(this);return e("<div>").css("position","absolute").appendTo(t.parent()).outerWidth(t.outerWidth()).outerHeight(t.outerHeight()).offset(t.offset())[0]})},_unblockFrames:function(){this.iframeBlocks&&(this.iframeBlocks.remove(),delete this.iframeBlocks)},_blurActiveElement:function(t){var i=this.document[0];if(this.handleElement.is(t.target))try{i.activeElement&&"body"!==i.activeElement.nodeName.toLowerCase()&&e(i.activeElement).blur()}catch(s){}},_mouseStart:function(t){var i=this.options;return this.helper=this._createHelper(t),this.helper.addClass("ui-draggable-dragging"),this._cacheHelperProportions(),e.ui.ddmanager&&(e.ui.ddmanager.current=this),this._cacheMargins(),this.cssPosition=this.helper.css("position"),this.scrollParent=this.helper.scrollParent(!0),this.offsetParent=this.helper.offsetParent(),this.hasFixedAncestor=this.helper.parents().filter(function(){return"fixed"===e(this).css("position")}).length>0,this.positionAbs=this.element.offset(),this._refreshOffsets(t),this.originalPosition=this.position=this._generatePosition(t,!1),this.originalPageX=t.pageX,this.originalPageY=t.pageY,i.cursorAt&&this._adjustOffsetFromHelper(i.cursorAt),this._setContainment(),this._trigger("start",t)===!1?(this._clear(),!1):(this._cacheHelperProportions(),e.ui.ddmanager&&!i.dropBehaviour&&e.ui.ddmanager.prepareOffsets(this,t),this._normalizeRightBottom(),this._mouseDrag(t,!0),e.ui.ddmanager&&e.ui.ddmanager.dragStart(this,t),!0)},_refreshOffsets:function(e){this.offset={top:this.positionAbs.top-this.margins.top,left:this.positionAbs.left-this.margins.left,scroll:!1,parent:this._getParentOffset(),relative:this._getRelativeOffset()},this.offset.click={left:e.pageX-this.offset.left,top:e.pageY-this.offset.top}},_mouseDrag:function(t,i){if(this.hasFixedAncestor&&(this.offset.parent=this._getParentOffset()),this.position=this._generatePosition(t,!0),this.positionAbs=this._convertPositionTo("absolute"),!i){var s=this._uiHash();if(this._trigger("drag",t,s)===!1)return this._mouseUp({}),!1;this.position=s.position}return this.helper[0].style.left=this.position.left+"px",this.helper[0].style.top=this.position.top+"px",e.ui.ddmanager&&e.ui.ddmanager.drag(this,t),!1},_mouseStop:function(t){var i=this,s=!1;return e.ui.ddmanager&&!this.options.dropBehaviour&&(s=e.ui.ddmanager.drop(this,t)),this.dropped&&(s=this.dropped,this.dropped=!1),"invalid"===this.options.revert&&!s||"valid"===this.options.revert&&s||this.options.revert===!0||e.isFunction(this.options.revert)&&this.options.revert.call(this.element,s)?e(this.helper).animate(this.originalPosition,parseInt(this.options.revertDuration,10),function(){i._trigger("stop",t)!==!1&&i._clear()}):this._trigger("stop",t)!==!1&&this._clear(),!1},_mouseUp:function(t){return this._unblockFrames(),e.ui.ddmanager&&e.ui.ddmanager.dragStop(this,t),this.handleElement.is(t.target)&&this.element.focus(),e.ui.mouse.prototype._mouseUp.call(this,t)},cancel:function(){return this.helper.is(".ui-draggable-dragging")?this._mouseUp({}):this._clear(),this},_getHandle:function(t){return this.options.handle?!!e(t.target).closest(this.element.find(this.options.handle)).length:!0},_setHandleClassName:function(){this.handleElement=this.options.handle?this.element.find(this.options.handle):this.element,this.handleElement.addClass("ui-draggable-handle")},_removeHandleClassName:function(){this.handleElement.removeClass("ui-draggable-handle")},_createHelper:function(t){var i=this.options,s=e.isFunction(i.helper),n=s?e(i.helper.apply(this.element[0],[t])):"clone"===i.helper?this.element.clone().removeAttr("id"):this.element;return n.parents("body").length||n.appendTo("parent"===i.appendTo?this.element[0].parentNode:i.appendTo),s&&n[0]===this.element[0]&&this._setPositionRelative(),n[0]===this.element[0]||/(fixed|absolute)/.test(n.css("position"))||n.css("position","absolute"),n},_setPositionRelative:function(){/^(?:r|a|f)/.test(this.element.css("position"))||(this.element[0].style.position="relative")},_adjustOffsetFromHelper:function(t){"string"==typeof t&&(t=t.split(" ")),e.isArray(t)&&(t={left:+t[0],top:+t[1]||0}),"left"in t&&(this.offset.click.left=t.left+this.margins.left),"right"in t&&(this.offset.click.left=this.helperProportions.width-t.right+this.margins.left),"top"in t&&(this.offset.click.top=t.top+this.margins.top),"bottom"in t&&(this.offset.click.top=this.helperProportions.height-t.bottom+this.margins.top)},_isRootNode:function(e){return/(html|body)/i.test(e.tagName)||e===this.document[0]},_getParentOffset:function(){var t=this.offsetParent.offset(),i=this.document[0];return"absolute"===this.cssPosition&&this.scrollParent[0]!==i&&e.contains(this.scrollParent[0],this.offsetParent[0])&&(t.left+=this.scrollParent.scrollLeft(),t.top+=this.scrollParent.scrollTop()),this._isRootNode(this.offsetParent[0])&&(t={top:0,left:0}),{top:t.top+(parseInt(this.offsetParent.css("borderTopWidth"),10)||0),left:t.left+(parseInt(this.offsetParent.css("borderLeftWidth"),10)||0)}},_getRelativeOffset:function(){if("relative"!==this.cssPosition)return{top:0,left:0};var e=this.element.position(),t=this._isRootNode(this.scrollParent[0]);return{top:e.top-(parseInt(this.helper.css("top"),10)||0)+(t?0:this.scrollParent.scrollTop()),left:e.left-(parseInt(this.helper.css("left"),10)||0)+(t?0:this.scrollParent.scrollLeft())}},_cacheMargins:function(){this.margins={left:parseInt(this.element.css("marginLeft"),10)||0,top:parseInt(this.element.css("marginTop"),10)||0,right:parseInt(this.element.css("marginRight"),10)||0,bottom:parseInt(this.element.css("marginBottom"),10)||0}},_cacheHelperProportions:function(){this.helperProportions={width:this.helper.outerWidth(),height:this.helper.outerHeight()}},_setContainment:function(){var t,i,s,n=this.options,a=this.document[0];return this.relativeContainer=null,n.containment?"window"===n.containment?(this.containment=[e(window).scrollLeft()-this.offset.relative.left-this.offset.parent.left,e(window).scrollTop()-this.offset.relative.top-this.offset.parent.top,e(window).scrollLeft()+e(window).width()-this.helperProportions.width-this.margins.left,e(window).scrollTop()+(e(window).height()||a.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top],void 0):"document"===n.containment?(this.containment=[0,0,e(a).width()-this.helperProportions.width-this.margins.left,(e(a).height()||a.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top],void 0):n.containment.constructor===Array?(this.containment=n.containment,void 0):("parent"===n.containment&&(n.containment=this.helper[0].parentNode),i=e(n.containment),s=i[0],s&&(t=/(scroll|auto)/.test(i.css("overflow")),this.containment=[(parseInt(i.css("borderLeftWidth"),10)||0)+(parseInt(i.css("paddingLeft"),10)||0),(parseInt(i.css("borderTopWidth"),10)||0)+(parseInt(i.css("paddingTop"),10)||0),(t?Math.max(s.scrollWidth,s.offsetWidth):s.offsetWidth)-(parseInt(i.css("borderRightWidth"),10)||0)-(parseInt(i.css("paddingRight"),10)||0)-this.helperProportions.width-this.margins.left-this.margins.right,(t?Math.max(s.scrollHeight,s.offsetHeight):s.offsetHeight)-(parseInt(i.css("borderBottomWidth"),10)||0)-(parseInt(i.css("paddingBottom"),10)||0)-this.helperProportions.height-this.margins.top-this.margins.bottom],this.relativeContainer=i),void 0):(this.containment=null,void 0)},_convertPositionTo:function(e,t){t||(t=this.position);var i="absolute"===e?1:-1,s=this._isRootNode(this.scrollParent[0]);return{top:t.top+this.offset.relative.top*i+this.offset.parent.top*i-("fixed"===this.cssPosition?-this.offset.scroll.top:s?0:this.offset.scroll.top)*i,left:t.left+this.offset.relative.left*i+this.offset.parent.left*i-("fixed"===this.cssPosition?-this.offset.scroll.left:s?0:this.offset.scroll.left)*i}},_generatePosition:function(e,t){var i,s,n,a,o=this.options,r=this._isRootNode(this.scrollParent[0]),h=e.pageX,l=e.pageY;return r&&this.offset.scroll||(this.offset.scroll={top:this.scrollParent.scrollTop(),left:this.scrollParent.scrollLeft()}),t&&(this.containment&&(this.relativeContainer?(s=this.relativeContainer.offset(),i=[this.containment[0]+s.left,this.containment[1]+s.top,this.containment[2]+s.left,this.containment[3]+s.top]):i=this.containment,e.pageX-this.offset.click.left<i[0]&&(h=i[0]+this.offset.click.left),e.pageY-this.offset.click.top<i[1]&&(l=i[1]+this.offset.click.top),e.pageX-this.offset.click.left>i[2]&&(h=i[2]+this.offset.click.left),e.pageY-this.offset.click.top>i[3]&&(l=i[3]+this.offset.click.top)),o.grid&&(n=o.grid[1]?this.originalPageY+Math.round((l-this.originalPageY)/o.grid[1])*o.grid[1]:this.originalPageY,l=i?n-this.offset.click.top>=i[1]||n-this.offset.click.top>i[3]?n:n-this.offset.click.top>=i[1]?n-o.grid[1]:n+o.grid[1]:n,a=o.grid[0]?this.originalPageX+Math.round((h-this.originalPageX)/o.grid[0])*o.grid[0]:this.originalPageX,h=i?a-this.offset.click.left>=i[0]||a-this.offset.click.left>i[2]?a:a-this.offset.click.left>=i[0]?a-o.grid[0]:a+o.grid[0]:a),"y"===o.axis&&(h=this.originalPageX),"x"===o.axis&&(l=this.originalPageY)),{top:l-this.offset.click.top-this.offset.relative.top-this.offset.parent.top+("fixed"===this.cssPosition?-this.offset.scroll.top:r?0:this.offset.scroll.top),left:h-this.offset.click.left-this.offset.relative.left-this.offset.parent.left+("fixed"===this.cssPosition?-this.offset.scroll.left:r?0:this.offset.scroll.left)}
},_clear:function(){this.helper.removeClass("ui-draggable-dragging"),this.helper[0]===this.element[0]||this.cancelHelperRemoval||this.helper.remove(),this.helper=null,this.cancelHelperRemoval=!1,this.destroyOnClear&&this.destroy()},_normalizeRightBottom:function(){"y"!==this.options.axis&&"auto"!==this.helper.css("right")&&(this.helper.width(this.helper.width()),this.helper.css("right","auto")),"x"!==this.options.axis&&"auto"!==this.helper.css("bottom")&&(this.helper.height(this.helper.height()),this.helper.css("bottom","auto"))},_trigger:function(t,i,s){return s=s||this._uiHash(),e.ui.plugin.call(this,t,[i,s,this],!0),/^(drag|start|stop)/.test(t)&&(this.positionAbs=this._convertPositionTo("absolute"),s.offset=this.positionAbs),e.Widget.prototype._trigger.call(this,t,i,s)},plugins:{},_uiHash:function(){return{helper:this.helper,position:this.position,originalPosition:this.originalPosition,offset:this.positionAbs}}}),e.ui.plugin.add("draggable","connectToSortable",{start:function(t,i,s){var n=e.extend({},i,{item:s.element});s.sortables=[],e(s.options.connectToSortable).each(function(){var i=e(this).sortable("instance");i&&!i.options.disabled&&(s.sortables.push(i),i.refreshPositions(),i._trigger("activate",t,n))})},stop:function(t,i,s){var n=e.extend({},i,{item:s.element});s.cancelHelperRemoval=!1,e.each(s.sortables,function(){var e=this;e.isOver?(e.isOver=0,s.cancelHelperRemoval=!0,e.cancelHelperRemoval=!1,e._storedCSS={position:e.placeholder.css("position"),top:e.placeholder.css("top"),left:e.placeholder.css("left")},e._mouseStop(t),e.options.helper=e.options._helper):(e.cancelHelperRemoval=!0,e._trigger("deactivate",t,n))})},drag:function(t,i,s){e.each(s.sortables,function(){var n=!1,a=this;a.positionAbs=s.positionAbs,a.helperProportions=s.helperProportions,a.offset.click=s.offset.click,a._intersectsWith(a.containerCache)&&(n=!0,e.each(s.sortables,function(){return this.positionAbs=s.positionAbs,this.helperProportions=s.helperProportions,this.offset.click=s.offset.click,this!==a&&this._intersectsWith(this.containerCache)&&e.contains(a.element[0],this.element[0])&&(n=!1),n})),n?(a.isOver||(a.isOver=1,s._parent=i.helper.parent(),a.currentItem=i.helper.appendTo(a.element).data("ui-sortable-item",!0),a.options._helper=a.options.helper,a.options.helper=function(){return i.helper[0]},t.target=a.currentItem[0],a._mouseCapture(t,!0),a._mouseStart(t,!0,!0),a.offset.click.top=s.offset.click.top,a.offset.click.left=s.offset.click.left,a.offset.parent.left-=s.offset.parent.left-a.offset.parent.left,a.offset.parent.top-=s.offset.parent.top-a.offset.parent.top,s._trigger("toSortable",t),s.dropped=a.element,e.each(s.sortables,function(){this.refreshPositions()}),s.currentItem=s.element,a.fromOutside=s),a.currentItem&&(a._mouseDrag(t),i.position=a.position)):a.isOver&&(a.isOver=0,a.cancelHelperRemoval=!0,a.options._revert=a.options.revert,a.options.revert=!1,a._trigger("out",t,a._uiHash(a)),a._mouseStop(t,!0),a.options.revert=a.options._revert,a.options.helper=a.options._helper,a.placeholder&&a.placeholder.remove(),i.helper.appendTo(s._parent),s._refreshOffsets(t),i.position=s._generatePosition(t,!0),s._trigger("fromSortable",t),s.dropped=!1,e.each(s.sortables,function(){this.refreshPositions()}))})}}),e.ui.plugin.add("draggable","cursor",{start:function(t,i,s){var n=e("body"),a=s.options;n.css("cursor")&&(a._cursor=n.css("cursor")),n.css("cursor",a.cursor)},stop:function(t,i,s){var n=s.options;n._cursor&&e("body").css("cursor",n._cursor)}}),e.ui.plugin.add("draggable","opacity",{start:function(t,i,s){var n=e(i.helper),a=s.options;n.css("opacity")&&(a._opacity=n.css("opacity")),n.css("opacity",a.opacity)},stop:function(t,i,s){var n=s.options;n._opacity&&e(i.helper).css("opacity",n._opacity)}}),e.ui.plugin.add("draggable","scroll",{start:function(e,t,i){i.scrollParentNotHidden||(i.scrollParentNotHidden=i.helper.scrollParent(!1)),i.scrollParentNotHidden[0]!==i.document[0]&&"HTML"!==i.scrollParentNotHidden[0].tagName&&(i.overflowOffset=i.scrollParentNotHidden.offset())},drag:function(t,i,s){var n=s.options,a=!1,o=s.scrollParentNotHidden[0],r=s.document[0];o!==r&&"HTML"!==o.tagName?(n.axis&&"x"===n.axis||(s.overflowOffset.top+o.offsetHeight-t.pageY<n.scrollSensitivity?o.scrollTop=a=o.scrollTop+n.scrollSpeed:t.pageY-s.overflowOffset.top<n.scrollSensitivity&&(o.scrollTop=a=o.scrollTop-n.scrollSpeed)),n.axis&&"y"===n.axis||(s.overflowOffset.left+o.offsetWidth-t.pageX<n.scrollSensitivity?o.scrollLeft=a=o.scrollLeft+n.scrollSpeed:t.pageX-s.overflowOffset.left<n.scrollSensitivity&&(o.scrollLeft=a=o.scrollLeft-n.scrollSpeed))):(n.axis&&"x"===n.axis||(t.pageY-e(r).scrollTop()<n.scrollSensitivity?a=e(r).scrollTop(e(r).scrollTop()-n.scrollSpeed):e(window).height()-(t.pageY-e(r).scrollTop())<n.scrollSensitivity&&(a=e(r).scrollTop(e(r).scrollTop()+n.scrollSpeed))),n.axis&&"y"===n.axis||(t.pageX-e(r).scrollLeft()<n.scrollSensitivity?a=e(r).scrollLeft(e(r).scrollLeft()-n.scrollSpeed):e(window).width()-(t.pageX-e(r).scrollLeft())<n.scrollSensitivity&&(a=e(r).scrollLeft(e(r).scrollLeft()+n.scrollSpeed)))),a!==!1&&e.ui.ddmanager&&!n.dropBehaviour&&e.ui.ddmanager.prepareOffsets(s,t)}}),e.ui.plugin.add("draggable","snap",{start:function(t,i,s){var n=s.options;s.snapElements=[],e(n.snap.constructor!==String?n.snap.items||":data(ui-draggable)":n.snap).each(function(){var t=e(this),i=t.offset();this!==s.element[0]&&s.snapElements.push({item:this,width:t.outerWidth(),height:t.outerHeight(),top:i.top,left:i.left})})},drag:function(t,i,s){var n,a,o,r,h,l,u,c,d,p,f=s.options,m=f.snapTolerance,g=i.offset.left,v=g+s.helperProportions.width,_=i.offset.top,b=_+s.helperProportions.height;for(d=s.snapElements.length-1;d>=0;d--)h=s.snapElements[d].left-s.margins.left,l=h+s.snapElements[d].width,u=s.snapElements[d].top-s.margins.top,c=u+s.snapElements[d].height,h-m>v||g>l+m||u-m>b||_>c+m||!e.contains(s.snapElements[d].item.ownerDocument,s.snapElements[d].item)?(s.snapElements[d].snapping&&s.options.snap.release&&s.options.snap.release.call(s.element,t,e.extend(s._uiHash(),{snapItem:s.snapElements[d].item})),s.snapElements[d].snapping=!1):("inner"!==f.snapMode&&(n=m>=Math.abs(u-b),a=m>=Math.abs(c-_),o=m>=Math.abs(h-v),r=m>=Math.abs(l-g),n&&(i.position.top=s._convertPositionTo("relative",{top:u-s.helperProportions.height,left:0}).top),a&&(i.position.top=s._convertPositionTo("relative",{top:c,left:0}).top),o&&(i.position.left=s._convertPositionTo("relative",{top:0,left:h-s.helperProportions.width}).left),r&&(i.position.left=s._convertPositionTo("relative",{top:0,left:l}).left)),p=n||a||o||r,"outer"!==f.snapMode&&(n=m>=Math.abs(u-_),a=m>=Math.abs(c-b),o=m>=Math.abs(h-g),r=m>=Math.abs(l-v),n&&(i.position.top=s._convertPositionTo("relative",{top:u,left:0}).top),a&&(i.position.top=s._convertPositionTo("relative",{top:c-s.helperProportions.height,left:0}).top),o&&(i.position.left=s._convertPositionTo("relative",{top:0,left:h}).left),r&&(i.position.left=s._convertPositionTo("relative",{top:0,left:l-s.helperProportions.width}).left)),!s.snapElements[d].snapping&&(n||a||o||r||p)&&s.options.snap.snap&&s.options.snap.snap.call(s.element,t,e.extend(s._uiHash(),{snapItem:s.snapElements[d].item})),s.snapElements[d].snapping=n||a||o||r||p)}}),e.ui.plugin.add("draggable","stack",{start:function(t,i,s){var n,a=s.options,o=e.makeArray(e(a.stack)).sort(function(t,i){return(parseInt(e(t).css("zIndex"),10)||0)-(parseInt(e(i).css("zIndex"),10)||0)});o.length&&(n=parseInt(e(o[0]).css("zIndex"),10)||0,e(o).each(function(t){e(this).css("zIndex",n+t)}),this.css("zIndex",n+o.length))}}),e.ui.plugin.add("draggable","zIndex",{start:function(t,i,s){var n=e(i.helper),a=s.options;n.css("zIndex")&&(a._zIndex=n.css("zIndex")),n.css("zIndex",a.zIndex)},stop:function(t,i,s){var n=s.options;n._zIndex&&e(i.helper).css("zIndex",n._zIndex)}}),e.ui.draggable,e.widget("ui.resizable",e.ui.mouse,{version:"1.11.4",widgetEventPrefix:"resize",options:{alsoResize:!1,animate:!1,animateDuration:"slow",animateEasing:"swing",aspectRatio:!1,autoHide:!1,containment:!1,ghost:!1,grid:!1,handles:"e,s,se",helper:!1,maxHeight:null,maxWidth:null,minHeight:10,minWidth:10,zIndex:90,resize:null,start:null,stop:null},_num:function(e){return parseInt(e,10)||0},_isNumber:function(e){return!isNaN(parseInt(e,10))},_hasScroll:function(t,i){if("hidden"===e(t).css("overflow"))return!1;var s=i&&"left"===i?"scrollLeft":"scrollTop",n=!1;return t[s]>0?!0:(t[s]=1,n=t[s]>0,t[s]=0,n)},_create:function(){var t,i,s,n,a,o=this,r=this.options;if(this.element.addClass("ui-resizable"),e.extend(this,{_aspectRatio:!!r.aspectRatio,aspectRatio:r.aspectRatio,originalElement:this.element,_proportionallyResizeElements:[],_helper:r.helper||r.ghost||r.animate?r.helper||"ui-resizable-helper":null}),this.element[0].nodeName.match(/^(canvas|textarea|input|select|button|img)$/i)&&(this.element.wrap(e("<div class='ui-wrapper' style='overflow: hidden;'></div>").css({position:this.element.css("position"),width:this.element.outerWidth(),height:this.element.outerHeight(),top:this.element.css("top"),left:this.element.css("left")})),this.element=this.element.parent().data("ui-resizable",this.element.resizable("instance")),this.elementIsWrapper=!0,this.element.css({marginLeft:this.originalElement.css("marginLeft"),marginTop:this.originalElement.css("marginTop"),marginRight:this.originalElement.css("marginRight"),marginBottom:this.originalElement.css("marginBottom")}),this.originalElement.css({marginLeft:0,marginTop:0,marginRight:0,marginBottom:0}),this.originalResizeStyle=this.originalElement.css("resize"),this.originalElement.css("resize","none"),this._proportionallyResizeElements.push(this.originalElement.css({position:"static",zoom:1,display:"block"})),this.originalElement.css({margin:this.originalElement.css("margin")}),this._proportionallyResize()),this.handles=r.handles||(e(".ui-resizable-handle",this.element).length?{n:".ui-resizable-n",e:".ui-resizable-e",s:".ui-resizable-s",w:".ui-resizable-w",se:".ui-resizable-se",sw:".ui-resizable-sw",ne:".ui-resizable-ne",nw:".ui-resizable-nw"}:"e,s,se"),this._handles=e(),this.handles.constructor===String)for("all"===this.handles&&(this.handles="n,e,s,w,se,sw,ne,nw"),t=this.handles.split(","),this.handles={},i=0;t.length>i;i++)s=e.trim(t[i]),a="ui-resizable-"+s,n=e("<div class='ui-resizable-handle "+a+"'></div>"),n.css({zIndex:r.zIndex}),"se"===s&&n.addClass("ui-icon ui-icon-gripsmall-diagonal-se"),this.handles[s]=".ui-resizable-"+s,this.element.append(n);this._renderAxis=function(t){var i,s,n,a;t=t||this.element;for(i in this.handles)this.handles[i].constructor===String?this.handles[i]=this.element.children(this.handles[i]).first().show():(this.handles[i].jquery||this.handles[i].nodeType)&&(this.handles[i]=e(this.handles[i]),this._on(this.handles[i],{mousedown:o._mouseDown})),this.elementIsWrapper&&this.originalElement[0].nodeName.match(/^(textarea|input|select|button)$/i)&&(s=e(this.handles[i],this.element),a=/sw|ne|nw|se|n|s/.test(i)?s.outerHeight():s.outerWidth(),n=["padding",/ne|nw|n/.test(i)?"Top":/se|sw|s/.test(i)?"Bottom":/^e$/.test(i)?"Right":"Left"].join(""),t.css(n,a),this._proportionallyResize()),this._handles=this._handles.add(this.handles[i])},this._renderAxis(this.element),this._handles=this._handles.add(this.element.find(".ui-resizable-handle")),this._handles.disableSelection(),this._handles.mouseover(function(){o.resizing||(this.className&&(n=this.className.match(/ui-resizable-(se|sw|ne|nw|n|e|s|w)/i)),o.axis=n&&n[1]?n[1]:"se")}),r.autoHide&&(this._handles.hide(),e(this.element).addClass("ui-resizable-autohide").mouseenter(function(){r.disabled||(e(this).removeClass("ui-resizable-autohide"),o._handles.show())}).mouseleave(function(){r.disabled||o.resizing||(e(this).addClass("ui-resizable-autohide"),o._handles.hide())})),this._mouseInit()},_destroy:function(){this._mouseDestroy();var t,i=function(t){e(t).removeClass("ui-resizable ui-resizable-disabled ui-resizable-resizing").removeData("resizable").removeData("ui-resizable").unbind(".resizable").find(".ui-resizable-handle").remove()};return this.elementIsWrapper&&(i(this.element),t=this.element,this.originalElement.css({position:t.css("position"),width:t.outerWidth(),height:t.outerHeight(),top:t.css("top"),left:t.css("left")}).insertAfter(t),t.remove()),this.originalElement.css("resize",this.originalResizeStyle),i(this.originalElement),this},_mouseCapture:function(t){var i,s,n=!1;for(i in this.handles)s=e(this.handles[i])[0],(s===t.target||e.contains(s,t.target))&&(n=!0);return!this.options.disabled&&n},_mouseStart:function(t){var i,s,n,a=this.options,o=this.element;return this.resizing=!0,this._renderProxy(),i=this._num(this.helper.css("left")),s=this._num(this.helper.css("top")),a.containment&&(i+=e(a.containment).scrollLeft()||0,s+=e(a.containment).scrollTop()||0),this.offset=this.helper.offset(),this.position={left:i,top:s},this.size=this._helper?{width:this.helper.width(),height:this.helper.height()}:{width:o.width(),height:o.height()},this.originalSize=this._helper?{width:o.outerWidth(),height:o.outerHeight()}:{width:o.width(),height:o.height()},this.sizeDiff={width:o.outerWidth()-o.width(),height:o.outerHeight()-o.height()},this.originalPosition={left:i,top:s},this.originalMousePosition={left:t.pageX,top:t.pageY},this.aspectRatio="number"==typeof a.aspectRatio?a.aspectRatio:this.originalSize.width/this.originalSize.height||1,n=e(".ui-resizable-"+this.axis).css("cursor"),e("body").css("cursor","auto"===n?this.axis+"-resize":n),o.addClass("ui-resizable-resizing"),this._propagate("start",t),!0},_mouseDrag:function(t){var i,s,n=this.originalMousePosition,a=this.axis,o=t.pageX-n.left||0,r=t.pageY-n.top||0,h=this._change[a];return this._updatePrevProperties(),h?(i=h.apply(this,[t,o,r]),this._updateVirtualBoundaries(t.shiftKey),(this._aspectRatio||t.shiftKey)&&(i=this._updateRatio(i,t)),i=this._respectSize(i,t),this._updateCache(i),this._propagate("resize",t),s=this._applyChanges(),!this._helper&&this._proportionallyResizeElements.length&&this._proportionallyResize(),e.isEmptyObject(s)||(this._updatePrevProperties(),this._trigger("resize",t,this.ui()),this._applyChanges()),!1):!1},_mouseStop:function(t){this.resizing=!1;var i,s,n,a,o,r,h,l=this.options,u=this;return this._helper&&(i=this._proportionallyResizeElements,s=i.length&&/textarea/i.test(i[0].nodeName),n=s&&this._hasScroll(i[0],"left")?0:u.sizeDiff.height,a=s?0:u.sizeDiff.width,o={width:u.helper.width()-a,height:u.helper.height()-n},r=parseInt(u.element.css("left"),10)+(u.position.left-u.originalPosition.left)||null,h=parseInt(u.element.css("top"),10)+(u.position.top-u.originalPosition.top)||null,l.animate||this.element.css(e.extend(o,{top:h,left:r})),u.helper.height(u.size.height),u.helper.width(u.size.width),this._helper&&!l.animate&&this._proportionallyResize()),e("body").css("cursor","auto"),this.element.removeClass("ui-resizable-resizing"),this._propagate("stop",t),this._helper&&this.helper.remove(),!1},_updatePrevProperties:function(){this.prevPosition={top:this.position.top,left:this.position.left},this.prevSize={width:this.size.width,height:this.size.height}},_applyChanges:function(){var e={};return this.position.top!==this.prevPosition.top&&(e.top=this.position.top+"px"),this.position.left!==this.prevPosition.left&&(e.left=this.position.left+"px"),this.size.width!==this.prevSize.width&&(e.width=this.size.width+"px"),this.size.height!==this.prevSize.height&&(e.height=this.size.height+"px"),this.helper.css(e),e},_updateVirtualBoundaries:function(e){var t,i,s,n,a,o=this.options;a={minWidth:this._isNumber(o.minWidth)?o.minWidth:0,maxWidth:this._isNumber(o.maxWidth)?o.maxWidth:1/0,minHeight:this._isNumber(o.minHeight)?o.minHeight:0,maxHeight:this._isNumber(o.maxHeight)?o.maxHeight:1/0},(this._aspectRatio||e)&&(t=a.minHeight*this.aspectRatio,s=a.minWidth/this.aspectRatio,i=a.maxHeight*this.aspectRatio,n=a.maxWidth/this.aspectRatio,t>a.minWidth&&(a.minWidth=t),s>a.minHeight&&(a.minHeight=s),a.maxWidth>i&&(a.maxWidth=i),a.maxHeight>n&&(a.maxHeight=n)),this._vBoundaries=a},_updateCache:function(e){this.offset=this.helper.offset(),this._isNumber(e.left)&&(this.position.left=e.left),this._isNumber(e.top)&&(this.position.top=e.top),this._isNumber(e.height)&&(this.size.height=e.height),this._isNumber(e.width)&&(this.size.width=e.width)},_updateRatio:function(e){var t=this.position,i=this.size,s=this.axis;return this._isNumber(e.height)?e.width=e.height*this.aspectRatio:this._isNumber(e.width)&&(e.height=e.width/this.aspectRatio),"sw"===s&&(e.left=t.left+(i.width-e.width),e.top=null),"nw"===s&&(e.top=t.top+(i.height-e.height),e.left=t.left+(i.width-e.width)),e},_respectSize:function(e){var t=this._vBoundaries,i=this.axis,s=this._isNumber(e.width)&&t.maxWidth&&t.maxWidth<e.width,n=this._isNumber(e.height)&&t.maxHeight&&t.maxHeight<e.height,a=this._isNumber(e.width)&&t.minWidth&&t.minWidth>e.width,o=this._isNumber(e.height)&&t.minHeight&&t.minHeight>e.height,r=this.originalPosition.left+this.originalSize.width,h=this.position.top+this.size.height,l=/sw|nw|w/.test(i),u=/nw|ne|n/.test(i);return a&&(e.width=t.minWidth),o&&(e.height=t.minHeight),s&&(e.width=t.maxWidth),n&&(e.height=t.maxHeight),a&&l&&(e.left=r-t.minWidth),s&&l&&(e.left=r-t.maxWidth),o&&u&&(e.top=h-t.minHeight),n&&u&&(e.top=h-t.maxHeight),e.width||e.height||e.left||!e.top?e.width||e.height||e.top||!e.left||(e.left=null):e.top=null,e},_getPaddingPlusBorderDimensions:function(e){for(var t=0,i=[],s=[e.css("borderTopWidth"),e.css("borderRightWidth"),e.css("borderBottomWidth"),e.css("borderLeftWidth")],n=[e.css("paddingTop"),e.css("paddingRight"),e.css("paddingBottom"),e.css("paddingLeft")];4>t;t++)i[t]=parseInt(s[t],10)||0,i[t]+=parseInt(n[t],10)||0;return{height:i[0]+i[2],width:i[1]+i[3]}},_proportionallyResize:function(){if(this._proportionallyResizeElements.length)for(var e,t=0,i=this.helper||this.element;this._proportionallyResizeElements.length>t;t++)e=this._proportionallyResizeElements[t],this.outerDimensions||(this.outerDimensions=this._getPaddingPlusBorderDimensions(e)),e.css({height:i.height()-this.outerDimensions.height||0,width:i.width()-this.outerDimensions.width||0})},_renderProxy:function(){var t=this.element,i=this.options;this.elementOffset=t.offset(),this._helper?(this.helper=this.helper||e("<div style='overflow:hidden;'></div>"),this.helper.addClass(this._helper).css({width:this.element.outerWidth()-1,height:this.element.outerHeight()-1,position:"absolute",left:this.elementOffset.left+"px",top:this.elementOffset.top+"px",zIndex:++i.zIndex}),this.helper.appendTo("body").disableSelection()):this.helper=this.element},_change:{e:function(e,t){return{width:this.originalSize.width+t}},w:function(e,t){var i=this.originalSize,s=this.originalPosition;return{left:s.left+t,width:i.width-t}},n:function(e,t,i){var s=this.originalSize,n=this.originalPosition;return{top:n.top+i,height:s.height-i}},s:function(e,t,i){return{height:this.originalSize.height+i}},se:function(t,i,s){return e.extend(this._change.s.apply(this,arguments),this._change.e.apply(this,[t,i,s]))},sw:function(t,i,s){return e.extend(this._change.s.apply(this,arguments),this._change.w.apply(this,[t,i,s]))},ne:function(t,i,s){return e.extend(this._change.n.apply(this,arguments),this._change.e.apply(this,[t,i,s]))},nw:function(t,i,s){return e.extend(this._change.n.apply(this,arguments),this._change.w.apply(this,[t,i,s]))}},_propagate:function(t,i){e.ui.plugin.call(this,t,[i,this.ui()]),"resize"!==t&&this._trigger(t,i,this.ui())},plugins:{},ui:function(){return{originalElement:this.originalElement,element:this.element,helper:this.helper,position:this.position,size:this.size,originalSize:this.originalSize,originalPosition:this.originalPosition}}}),e.ui.plugin.add("resizable","animate",{stop:function(t){var i=e(this).resizable("instance"),s=i.options,n=i._proportionallyResizeElements,a=n.length&&/textarea/i.test(n[0].nodeName),o=a&&i._hasScroll(n[0],"left")?0:i.sizeDiff.height,r=a?0:i.sizeDiff.width,h={width:i.size.width-r,height:i.size.height-o},l=parseInt(i.element.css("left"),10)+(i.position.left-i.originalPosition.left)||null,u=parseInt(i.element.css("top"),10)+(i.position.top-i.originalPosition.top)||null;i.element.animate(e.extend(h,u&&l?{top:u,left:l}:{}),{duration:s.animateDuration,easing:s.animateEasing,step:function(){var s={width:parseInt(i.element.css("width"),10),height:parseInt(i.element.css("height"),10),top:parseInt(i.element.css("top"),10),left:parseInt(i.element.css("left"),10)};n&&n.length&&e(n[0]).css({width:s.width,height:s.height}),i._updateCache(s),i._propagate("resize",t)}})}}),e.ui.plugin.add("resizable","containment",{start:function(){var t,i,s,n,a,o,r,h=e(this).resizable("instance"),l=h.options,u=h.element,c=l.containment,d=c instanceof e?c.get(0):/parent/.test(c)?u.parent().get(0):c;d&&(h.containerElement=e(d),/document/.test(c)||c===document?(h.containerOffset={left:0,top:0},h.containerPosition={left:0,top:0},h.parentData={element:e(document),left:0,top:0,width:e(document).width(),height:e(document).height()||document.body.parentNode.scrollHeight}):(t=e(d),i=[],e(["Top","Right","Left","Bottom"]).each(function(e,s){i[e]=h._num(t.css("padding"+s))}),h.containerOffset=t.offset(),h.containerPosition=t.position(),h.containerSize={height:t.innerHeight()-i[3],width:t.innerWidth()-i[1]},s=h.containerOffset,n=h.containerSize.height,a=h.containerSize.width,o=h._hasScroll(d,"left")?d.scrollWidth:a,r=h._hasScroll(d)?d.scrollHeight:n,h.parentData={element:d,left:s.left,top:s.top,width:o,height:r}))},resize:function(t){var i,s,n,a,o=e(this).resizable("instance"),r=o.options,h=o.containerOffset,l=o.position,u=o._aspectRatio||t.shiftKey,c={top:0,left:0},d=o.containerElement,p=!0;d[0]!==document&&/static/.test(d.css("position"))&&(c=h),l.left<(o._helper?h.left:0)&&(o.size.width=o.size.width+(o._helper?o.position.left-h.left:o.position.left-c.left),u&&(o.size.height=o.size.width/o.aspectRatio,p=!1),o.position.left=r.helper?h.left:0),l.top<(o._helper?h.top:0)&&(o.size.height=o.size.height+(o._helper?o.position.top-h.top:o.position.top),u&&(o.size.width=o.size.height*o.aspectRatio,p=!1),o.position.top=o._helper?h.top:0),n=o.containerElement.get(0)===o.element.parent().get(0),a=/relative|absolute/.test(o.containerElement.css("position")),n&&a?(o.offset.left=o.parentData.left+o.position.left,o.offset.top=o.parentData.top+o.position.top):(o.offset.left=o.element.offset().left,o.offset.top=o.element.offset().top),i=Math.abs(o.sizeDiff.width+(o._helper?o.offset.left-c.left:o.offset.left-h.left)),s=Math.abs(o.sizeDiff.height+(o._helper?o.offset.top-c.top:o.offset.top-h.top)),i+o.size.width>=o.parentData.width&&(o.size.width=o.parentData.width-i,u&&(o.size.height=o.size.width/o.aspectRatio,p=!1)),s+o.size.height>=o.parentData.height&&(o.size.height=o.parentData.height-s,u&&(o.size.width=o.size.height*o.aspectRatio,p=!1)),p||(o.position.left=o.prevPosition.left,o.position.top=o.prevPosition.top,o.size.width=o.prevSize.width,o.size.height=o.prevSize.height)},stop:function(){var t=e(this).resizable("instance"),i=t.options,s=t.containerOffset,n=t.containerPosition,a=t.containerElement,o=e(t.helper),r=o.offset(),h=o.outerWidth()-t.sizeDiff.width,l=o.outerHeight()-t.sizeDiff.height;t._helper&&!i.animate&&/relative/.test(a.css("position"))&&e(this).css({left:r.left-n.left-s.left,width:h,height:l}),t._helper&&!i.animate&&/static/.test(a.css("position"))&&e(this).css({left:r.left-n.left-s.left,width:h,height:l})}}),e.ui.plugin.add("resizable","alsoResize",{start:function(){var t=e(this).resizable("instance"),i=t.options;e(i.alsoResize).each(function(){var t=e(this);t.data("ui-resizable-alsoresize",{width:parseInt(t.width(),10),height:parseInt(t.height(),10),left:parseInt(t.css("left"),10),top:parseInt(t.css("top"),10)})})},resize:function(t,i){var s=e(this).resizable("instance"),n=s.options,a=s.originalSize,o=s.originalPosition,r={height:s.size.height-a.height||0,width:s.size.width-a.width||0,top:s.position.top-o.top||0,left:s.position.left-o.left||0};e(n.alsoResize).each(function(){var t=e(this),s=e(this).data("ui-resizable-alsoresize"),n={},a=t.parents(i.originalElement[0]).length?["width","height"]:["width","height","top","left"];e.each(a,function(e,t){var i=(s[t]||0)+(r[t]||0);i&&i>=0&&(n[t]=i||null)}),t.css(n)})},stop:function(){e(this).removeData("resizable-alsoresize")}}),e.ui.plugin.add("resizable","ghost",{start:function(){var t=e(this).resizable("instance"),i=t.options,s=t.size;t.ghost=t.originalElement.clone(),t.ghost.css({opacity:.25,display:"block",position:"relative",height:s.height,width:s.width,margin:0,left:0,top:0}).addClass("ui-resizable-ghost").addClass("string"==typeof i.ghost?i.ghost:""),t.ghost.appendTo(t.helper)},resize:function(){var t=e(this).resizable("instance");t.ghost&&t.ghost.css({position:"relative",height:t.size.height,width:t.size.width})},stop:function(){var t=e(this).resizable("instance");t.ghost&&t.helper&&t.helper.get(0).removeChild(t.ghost.get(0))}}),e.ui.plugin.add("resizable","grid",{resize:function(){var t,i=e(this).resizable("instance"),s=i.options,n=i.size,a=i.originalSize,o=i.originalPosition,r=i.axis,h="number"==typeof s.grid?[s.grid,s.grid]:s.grid,l=h[0]||1,u=h[1]||1,c=Math.round((n.width-a.width)/l)*l,d=Math.round((n.height-a.height)/u)*u,p=a.width+c,f=a.height+d,m=s.maxWidth&&p>s.maxWidth,g=s.maxHeight&&f>s.maxHeight,v=s.minWidth&&s.minWidth>p,_=s.minHeight&&s.minHeight>f;s.grid=h,v&&(p+=l),_&&(f+=u),m&&(p-=l),g&&(f-=u),/^(se|s|e)$/.test(r)?(i.size.width=p,i.size.height=f):/^(ne)$/.test(r)?(i.size.width=p,i.size.height=f,i.position.top=o.top-d):/^(sw)$/.test(r)?(i.size.width=p,i.size.height=f,i.position.left=o.left-c):((0>=f-u||0>=p-l)&&(t=i._getPaddingPlusBorderDimensions(this)),f-u>0?(i.size.height=f,i.position.top=o.top-d):(f=u-t.height,i.size.height=f,i.position.top=o.top+a.height-f),p-l>0?(i.size.width=p,i.position.left=o.left-c):(p=l-t.width,i.size.width=p,i.position.left=o.left+a.width-p))}}),e.ui.resizable;var c,d="ui-button ui-widget ui-state-default ui-corner-all",p="ui-button-icons-only ui-button-icon-only ui-button-text-icons ui-button-text-icon-primary ui-button-text-icon-secondary ui-button-text-only",f=function(){var t=e(this);setTimeout(function(){t.find(":ui-button").button("refresh")},1)},m=function(t){var i=t.name,s=t.form,n=e([]);return i&&(i=i.replace(/'/g,"\\'"),n=s?e(s).find("[name='"+i+"'][type=radio]"):e("[name='"+i+"'][type=radio]",t.ownerDocument).filter(function(){return!this.form})),n};e.widget("ui.button",{version:"1.11.4",defaultElement:"<button>",options:{disabled:null,text:!0,label:null,icons:{primary:null,secondary:null}},_create:function(){this.element.closest("form").unbind("reset"+this.eventNamespace).bind("reset"+this.eventNamespace,f),"boolean"!=typeof this.options.disabled?this.options.disabled=!!this.element.prop("disabled"):this.element.prop("disabled",this.options.disabled),this._determineButtonType(),this.hasTitle=!!this.buttonElement.attr("title");var t=this,i=this.options,s="checkbox"===this.type||"radio"===this.type,n=s?"":"ui-state-active";null===i.label&&(i.label="input"===this.type?this.buttonElement.val():this.buttonElement.html()),this._hoverable(this.buttonElement),this.buttonElement.addClass(d).attr("role","button").bind("mouseenter"+this.eventNamespace,function(){i.disabled||this===c&&e(this).addClass("ui-state-active")}).bind("mouseleave"+this.eventNamespace,function(){i.disabled||e(this).removeClass(n)}).bind("click"+this.eventNamespace,function(e){i.disabled&&(e.preventDefault(),e.stopImmediatePropagation())}),this._on({focus:function(){this.buttonElement.addClass("ui-state-focus")},blur:function(){this.buttonElement.removeClass("ui-state-focus")}}),s&&this.element.bind("change"+this.eventNamespace,function(){t.refresh()}),"checkbox"===this.type?this.buttonElement.bind("click"+this.eventNamespace,function(){return i.disabled?!1:void 0}):"radio"===this.type?this.buttonElement.bind("click"+this.eventNamespace,function(){if(i.disabled)return!1;e(this).addClass("ui-state-active"),t.buttonElement.attr("aria-pressed","true");var s=t.element[0];m(s).not(s).map(function(){return e(this).button("widget")[0]}).removeClass("ui-state-active").attr("aria-pressed","false")}):(this.buttonElement.bind("mousedown"+this.eventNamespace,function(){return i.disabled?!1:(e(this).addClass("ui-state-active"),c=this,t.document.one("mouseup",function(){c=null}),void 0)}).bind("mouseup"+this.eventNamespace,function(){return i.disabled?!1:(e(this).removeClass("ui-state-active"),void 0)}).bind("keydown"+this.eventNamespace,function(t){return i.disabled?!1:((t.keyCode===e.ui.keyCode.SPACE||t.keyCode===e.ui.keyCode.ENTER)&&e(this).addClass("ui-state-active"),void 0)}).bind("keyup"+this.eventNamespace+" blur"+this.eventNamespace,function(){e(this).removeClass("ui-state-active")}),this.buttonElement.is("a")&&this.buttonElement.keyup(function(t){t.keyCode===e.ui.keyCode.SPACE&&e(this).click()})),this._setOption("disabled",i.disabled),this._resetButton()},_determineButtonType:function(){var e,t,i;this.type=this.element.is("[type=checkbox]")?"checkbox":this.element.is("[type=radio]")?"radio":this.element.is("input")?"input":"button","checkbox"===this.type||"radio"===this.type?(e=this.element.parents().last(),t="label[for='"+this.element.attr("id")+"']",this.buttonElement=e.find(t),this.buttonElement.length||(e=e.length?e.siblings():this.element.siblings(),this.buttonElement=e.filter(t),this.buttonElement.length||(this.buttonElement=e.find(t))),this.element.addClass("ui-helper-hidden-accessible"),i=this.element.is(":checked"),i&&this.buttonElement.addClass("ui-state-active"),this.buttonElement.prop("aria-pressed",i)):this.buttonElement=this.element},widget:function(){return this.buttonElement},_destroy:function(){this.element.removeClass("ui-helper-hidden-accessible"),this.buttonElement.removeClass(d+" ui-state-active "+p).removeAttr("role").removeAttr("aria-pressed").html(this.buttonElement.find(".ui-button-text").html()),this.hasTitle||this.buttonElement.removeAttr("title")},_setOption:function(e,t){return this._super(e,t),"disabled"===e?(this.widget().toggleClass("ui-state-disabled",!!t),this.element.prop("disabled",!!t),t&&("checkbox"===this.type||"radio"===this.type?this.buttonElement.removeClass("ui-state-focus"):this.buttonElement.removeClass("ui-state-focus ui-state-active")),void 0):(this._resetButton(),void 0)},refresh:function(){var t=this.element.is("input, button")?this.element.is(":disabled"):this.element.hasClass("ui-button-disabled");t!==this.options.disabled&&this._setOption("disabled",t),"radio"===this.type?m(this.element[0]).each(function(){e(this).is(":checked")?e(this).button("widget").addClass("ui-state-active").attr("aria-pressed","true"):e(this).button("widget").removeClass("ui-state-active").attr("aria-pressed","false")}):"checkbox"===this.type&&(this.element.is(":checked")?this.buttonElement.addClass("ui-state-active").attr("aria-pressed","true"):this.buttonElement.removeClass("ui-state-active").attr("aria-pressed","false"))},_resetButton:function(){if("input"===this.type)return this.options.label&&this.element.val(this.options.label),void 0;var t=this.buttonElement.removeClass(p),i=e("<span></span>",this.document[0]).addClass("ui-button-text").html(this.options.label).appendTo(t.empty()).text(),s=this.options.icons,n=s.primary&&s.secondary,a=[];s.primary||s.secondary?(this.options.text&&a.push("ui-button-text-icon"+(n?"s":s.primary?"-primary":"-secondary")),s.primary&&t.prepend("<span class='ui-button-icon-primary ui-icon "+s.primary+"'></span>"),s.secondary&&t.append("<span class='ui-button-icon-secondary ui-icon "+s.secondary+"'></span>"),this.options.text||(a.push(n?"ui-button-icons-only":"ui-button-icon-only"),this.hasTitle||t.attr("title",e.trim(i)))):a.push("ui-button-text-only"),t.addClass(a.join(" "))}}),e.widget("ui.buttonset",{version:"1.11.4",options:{items:"button, input[type=button], input[type=submit], input[type=reset], input[type=checkbox], input[type=radio], a, :data(ui-button)"},_create:function(){this.element.addClass("ui-buttonset")},_init:function(){this.refresh()
},_setOption:function(e,t){"disabled"===e&&this.buttons.button("option",e,t),this._super(e,t)},refresh:function(){var t="rtl"===this.element.css("direction"),i=this.element.find(this.options.items),s=i.filter(":ui-button");i.not(":ui-button").button(),s.button("refresh"),this.buttons=i.map(function(){return e(this).button("widget")[0]}).removeClass("ui-corner-all ui-corner-left ui-corner-right").filter(":first").addClass(t?"ui-corner-right":"ui-corner-left").end().filter(":last").addClass(t?"ui-corner-left":"ui-corner-right").end().end()},_destroy:function(){this.element.removeClass("ui-buttonset"),this.buttons.map(function(){return e(this).button("widget")[0]}).removeClass("ui-corner-left ui-corner-right").end().button("destroy")}}),e.ui.button,e.extend(e.ui,{datepicker:{version:"1.11.4"}});var g;e.extend(n.prototype,{markerClassName:"hasDatepicker",maxRows:4,_widgetDatepicker:function(){return this.dpDiv},setDefaults:function(e){return r(this._defaults,e||{}),this},_attachDatepicker:function(t,i){var s,n,a;s=t.nodeName.toLowerCase(),n="div"===s||"span"===s,t.id||(this.uuid+=1,t.id="dp"+this.uuid),a=this._newInst(e(t),n),a.settings=e.extend({},i||{}),"input"===s?this._connectDatepicker(t,a):n&&this._inlineDatepicker(t,a)},_newInst:function(t,i){var s=t[0].id.replace(/([^A-Za-z0-9_\-])/g,"\\\\$1");return{id:s,input:t,selectedDay:0,selectedMonth:0,selectedYear:0,drawMonth:0,drawYear:0,inline:i,dpDiv:i?a(e("<div class='"+this._inlineClass+" ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>")):this.dpDiv}},_connectDatepicker:function(t,i){var s=e(t);i.append=e([]),i.trigger=e([]),s.hasClass(this.markerClassName)||(this._attachments(s,i),s.addClass(this.markerClassName).keydown(this._doKeyDown).keypress(this._doKeyPress).keyup(this._doKeyUp),this._autoSize(i),e.data(t,"datepicker",i),i.settings.disabled&&this._disableDatepicker(t))},_attachments:function(t,i){var s,n,a,o=this._get(i,"appendText"),r=this._get(i,"isRTL");i.append&&i.append.remove(),o&&(i.append=e("<span class='"+this._appendClass+"'>"+o+"</span>"),t[r?"before":"after"](i.append)),t.unbind("focus",this._showDatepicker),i.trigger&&i.trigger.remove(),s=this._get(i,"showOn"),("focus"===s||"both"===s)&&t.focus(this._showDatepicker),("button"===s||"both"===s)&&(n=this._get(i,"buttonText"),a=this._get(i,"buttonImage"),i.trigger=e(this._get(i,"buttonImageOnly")?e("<img/>").addClass(this._triggerClass).attr({src:a,alt:n,title:n}):e("<button type='button'></button>").addClass(this._triggerClass).html(a?e("<img/>").attr({src:a,alt:n,title:n}):n)),t[r?"before":"after"](i.trigger),i.trigger.click(function(){return e.datepicker._datepickerShowing&&e.datepicker._lastInput===t[0]?e.datepicker._hideDatepicker():e.datepicker._datepickerShowing&&e.datepicker._lastInput!==t[0]?(e.datepicker._hideDatepicker(),e.datepicker._showDatepicker(t[0])):e.datepicker._showDatepicker(t[0]),!1}))},_autoSize:function(e){if(this._get(e,"autoSize")&&!e.inline){var t,i,s,n,a=new Date(2009,11,20),o=this._get(e,"dateFormat");o.match(/[DM]/)&&(t=function(e){for(i=0,s=0,n=0;e.length>n;n++)e[n].length>i&&(i=e[n].length,s=n);return s},a.setMonth(t(this._get(e,o.match(/MM/)?"monthNames":"monthNamesShort"))),a.setDate(t(this._get(e,o.match(/DD/)?"dayNames":"dayNamesShort"))+20-a.getDay())),e.input.attr("size",this._formatDate(e,a).length)}},_inlineDatepicker:function(t,i){var s=e(t);s.hasClass(this.markerClassName)||(s.addClass(this.markerClassName).append(i.dpDiv),e.data(t,"datepicker",i),this._setDate(i,this._getDefaultDate(i),!0),this._updateDatepicker(i),this._updateAlternate(i),i.settings.disabled&&this._disableDatepicker(t),i.dpDiv.css("display","block"))},_dialogDatepicker:function(t,i,s,n,a){var o,h,l,u,c,d=this._dialogInst;return d||(this.uuid+=1,o="dp"+this.uuid,this._dialogInput=e("<input type='text' id='"+o+"' style='position: absolute; top: -100px; width: 0px;'/>"),this._dialogInput.keydown(this._doKeyDown),e("body").append(this._dialogInput),d=this._dialogInst=this._newInst(this._dialogInput,!1),d.settings={},e.data(this._dialogInput[0],"datepicker",d)),r(d.settings,n||{}),i=i&&i.constructor===Date?this._formatDate(d,i):i,this._dialogInput.val(i),this._pos=a?a.length?a:[a.pageX,a.pageY]:null,this._pos||(h=document.documentElement.clientWidth,l=document.documentElement.clientHeight,u=document.documentElement.scrollLeft||document.body.scrollLeft,c=document.documentElement.scrollTop||document.body.scrollTop,this._pos=[h/2-100+u,l/2-150+c]),this._dialogInput.css("left",this._pos[0]+20+"px").css("top",this._pos[1]+"px"),d.settings.onSelect=s,this._inDialog=!0,this.dpDiv.addClass(this._dialogClass),this._showDatepicker(this._dialogInput[0]),e.blockUI&&e.blockUI(this.dpDiv),e.data(this._dialogInput[0],"datepicker",d),this},_destroyDatepicker:function(t){var i,s=e(t),n=e.data(t,"datepicker");s.hasClass(this.markerClassName)&&(i=t.nodeName.toLowerCase(),e.removeData(t,"datepicker"),"input"===i?(n.append.remove(),n.trigger.remove(),s.removeClass(this.markerClassName).unbind("focus",this._showDatepicker).unbind("keydown",this._doKeyDown).unbind("keypress",this._doKeyPress).unbind("keyup",this._doKeyUp)):("div"===i||"span"===i)&&s.removeClass(this.markerClassName).empty(),g===n&&(g=null))},_enableDatepicker:function(t){var i,s,n=e(t),a=e.data(t,"datepicker");n.hasClass(this.markerClassName)&&(i=t.nodeName.toLowerCase(),"input"===i?(t.disabled=!1,a.trigger.filter("button").each(function(){this.disabled=!1}).end().filter("img").css({opacity:"1.0",cursor:""})):("div"===i||"span"===i)&&(s=n.children("."+this._inlineClass),s.children().removeClass("ui-state-disabled"),s.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled",!1)),this._disabledInputs=e.map(this._disabledInputs,function(e){return e===t?null:e}))},_disableDatepicker:function(t){var i,s,n=e(t),a=e.data(t,"datepicker");n.hasClass(this.markerClassName)&&(i=t.nodeName.toLowerCase(),"input"===i?(t.disabled=!0,a.trigger.filter("button").each(function(){this.disabled=!0}).end().filter("img").css({opacity:"0.5",cursor:"default"})):("div"===i||"span"===i)&&(s=n.children("."+this._inlineClass),s.children().addClass("ui-state-disabled"),s.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled",!0)),this._disabledInputs=e.map(this._disabledInputs,function(e){return e===t?null:e}),this._disabledInputs[this._disabledInputs.length]=t)},_isDisabledDatepicker:function(e){if(!e)return!1;for(var t=0;this._disabledInputs.length>t;t++)if(this._disabledInputs[t]===e)return!0;return!1},_getInst:function(t){try{return e.data(t,"datepicker")}catch(i){throw"Missing instance data for this datepicker"}},_optionDatepicker:function(t,i,s){var n,a,o,h,l=this._getInst(t);return 2===arguments.length&&"string"==typeof i?"defaults"===i?e.extend({},e.datepicker._defaults):l?"all"===i?e.extend({},l.settings):this._get(l,i):null:(n=i||{},"string"==typeof i&&(n={},n[i]=s),l&&(this._curInst===l&&this._hideDatepicker(),a=this._getDateDatepicker(t,!0),o=this._getMinMaxDate(l,"min"),h=this._getMinMaxDate(l,"max"),r(l.settings,n),null!==o&&void 0!==n.dateFormat&&void 0===n.minDate&&(l.settings.minDate=this._formatDate(l,o)),null!==h&&void 0!==n.dateFormat&&void 0===n.maxDate&&(l.settings.maxDate=this._formatDate(l,h)),"disabled"in n&&(n.disabled?this._disableDatepicker(t):this._enableDatepicker(t)),this._attachments(e(t),l),this._autoSize(l),this._setDate(l,a),this._updateAlternate(l),this._updateDatepicker(l)),void 0)},_changeDatepicker:function(e,t,i){this._optionDatepicker(e,t,i)},_refreshDatepicker:function(e){var t=this._getInst(e);t&&this._updateDatepicker(t)},_setDateDatepicker:function(e,t){var i=this._getInst(e);i&&(this._setDate(i,t),this._updateDatepicker(i),this._updateAlternate(i))},_getDateDatepicker:function(e,t){var i=this._getInst(e);return i&&!i.inline&&this._setDateFromField(i,t),i?this._getDate(i):null},_doKeyDown:function(t){var i,s,n,a=e.datepicker._getInst(t.target),o=!0,r=a.dpDiv.is(".ui-datepicker-rtl");if(a._keyEvent=!0,e.datepicker._datepickerShowing)switch(t.keyCode){case 9:e.datepicker._hideDatepicker(),o=!1;break;case 13:return n=e("td."+e.datepicker._dayOverClass+":not(."+e.datepicker._currentClass+")",a.dpDiv),n[0]&&e.datepicker._selectDay(t.target,a.selectedMonth,a.selectedYear,n[0]),i=e.datepicker._get(a,"onSelect"),i?(s=e.datepicker._formatDate(a),i.apply(a.input?a.input[0]:null,[s,a])):e.datepicker._hideDatepicker(),!1;case 27:e.datepicker._hideDatepicker();break;case 33:e.datepicker._adjustDate(t.target,t.ctrlKey?-e.datepicker._get(a,"stepBigMonths"):-e.datepicker._get(a,"stepMonths"),"M");break;case 34:e.datepicker._adjustDate(t.target,t.ctrlKey?+e.datepicker._get(a,"stepBigMonths"):+e.datepicker._get(a,"stepMonths"),"M");break;case 35:(t.ctrlKey||t.metaKey)&&e.datepicker._clearDate(t.target),o=t.ctrlKey||t.metaKey;break;case 36:(t.ctrlKey||t.metaKey)&&e.datepicker._gotoToday(t.target),o=t.ctrlKey||t.metaKey;break;case 37:(t.ctrlKey||t.metaKey)&&e.datepicker._adjustDate(t.target,r?1:-1,"D"),o=t.ctrlKey||t.metaKey,t.originalEvent.altKey&&e.datepicker._adjustDate(t.target,t.ctrlKey?-e.datepicker._get(a,"stepBigMonths"):-e.datepicker._get(a,"stepMonths"),"M");break;case 38:(t.ctrlKey||t.metaKey)&&e.datepicker._adjustDate(t.target,-7,"D"),o=t.ctrlKey||t.metaKey;break;case 39:(t.ctrlKey||t.metaKey)&&e.datepicker._adjustDate(t.target,r?-1:1,"D"),o=t.ctrlKey||t.metaKey,t.originalEvent.altKey&&e.datepicker._adjustDate(t.target,t.ctrlKey?+e.datepicker._get(a,"stepBigMonths"):+e.datepicker._get(a,"stepMonths"),"M");break;case 40:(t.ctrlKey||t.metaKey)&&e.datepicker._adjustDate(t.target,7,"D"),o=t.ctrlKey||t.metaKey;break;default:o=!1}else 36===t.keyCode&&t.ctrlKey?e.datepicker._showDatepicker(this):o=!1;o&&(t.preventDefault(),t.stopPropagation())},_doKeyPress:function(t){var i,s,n=e.datepicker._getInst(t.target);return e.datepicker._get(n,"constrainInput")?(i=e.datepicker._possibleChars(e.datepicker._get(n,"dateFormat")),s=String.fromCharCode(null==t.charCode?t.keyCode:t.charCode),t.ctrlKey||t.metaKey||" ">s||!i||i.indexOf(s)>-1):void 0},_doKeyUp:function(t){var i,s=e.datepicker._getInst(t.target);if(s.input.val()!==s.lastVal)try{i=e.datepicker.parseDate(e.datepicker._get(s,"dateFormat"),s.input?s.input.val():null,e.datepicker._getFormatConfig(s)),i&&(e.datepicker._setDateFromField(s),e.datepicker._updateAlternate(s),e.datepicker._updateDatepicker(s))}catch(n){}return!0},_showDatepicker:function(t){if(t=t.target||t,"input"!==t.nodeName.toLowerCase()&&(t=e("input",t.parentNode)[0]),!e.datepicker._isDisabledDatepicker(t)&&e.datepicker._lastInput!==t){var i,n,a,o,h,l,u;i=e.datepicker._getInst(t),e.datepicker._curInst&&e.datepicker._curInst!==i&&(e.datepicker._curInst.dpDiv.stop(!0,!0),i&&e.datepicker._datepickerShowing&&e.datepicker._hideDatepicker(e.datepicker._curInst.input[0])),n=e.datepicker._get(i,"beforeShow"),a=n?n.apply(t,[t,i]):{},a!==!1&&(r(i.settings,a),i.lastVal=null,e.datepicker._lastInput=t,e.datepicker._setDateFromField(i),e.datepicker._inDialog&&(t.value=""),e.datepicker._pos||(e.datepicker._pos=e.datepicker._findPos(t),e.datepicker._pos[1]+=t.offsetHeight),o=!1,e(t).parents().each(function(){return o|="fixed"===e(this).css("position"),!o}),h={left:e.datepicker._pos[0],top:e.datepicker._pos[1]},e.datepicker._pos=null,i.dpDiv.empty(),i.dpDiv.css({position:"absolute",display:"block",top:"-1000px"}),e.datepicker._updateDatepicker(i),h=e.datepicker._checkOffset(i,h,o),i.dpDiv.css({position:e.datepicker._inDialog&&e.blockUI?"static":o?"fixed":"absolute",display:"none",left:h.left+"px",top:h.top+"px"}),i.inline||(l=e.datepicker._get(i,"showAnim"),u=e.datepicker._get(i,"duration"),i.dpDiv.css("z-index",s(e(t))+1),e.datepicker._datepickerShowing=!0,e.effects&&e.effects.effect[l]?i.dpDiv.show(l,e.datepicker._get(i,"showOptions"),u):i.dpDiv[l||"show"](l?u:null),e.datepicker._shouldFocusInput(i)&&i.input.focus(),e.datepicker._curInst=i))}},_updateDatepicker:function(t){this.maxRows=4,g=t,t.dpDiv.empty().append(this._generateHTML(t)),this._attachHandlers(t);var i,s=this._getNumberOfMonths(t),n=s[1],a=17,r=t.dpDiv.find("."+this._dayOverClass+" a");r.length>0&&o.apply(r.get(0)),t.dpDiv.removeClass("ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4").width(""),n>1&&t.dpDiv.addClass("ui-datepicker-multi-"+n).css("width",a*n+"em"),t.dpDiv[(1!==s[0]||1!==s[1]?"add":"remove")+"Class"]("ui-datepicker-multi"),t.dpDiv[(this._get(t,"isRTL")?"add":"remove")+"Class"]("ui-datepicker-rtl"),t===e.datepicker._curInst&&e.datepicker._datepickerShowing&&e.datepicker._shouldFocusInput(t)&&t.input.focus(),t.yearshtml&&(i=t.yearshtml,setTimeout(function(){i===t.yearshtml&&t.yearshtml&&t.dpDiv.find("select.ui-datepicker-year:first").replaceWith(t.yearshtml),i=t.yearshtml=null},0))},_shouldFocusInput:function(e){return e.input&&e.input.is(":visible")&&!e.input.is(":disabled")&&!e.input.is(":focus")},_checkOffset:function(t,i,s){var n=t.dpDiv.outerWidth(),a=t.dpDiv.outerHeight(),o=t.input?t.input.outerWidth():0,r=t.input?t.input.outerHeight():0,h=document.documentElement.clientWidth+(s?0:e(document).scrollLeft()),l=document.documentElement.clientHeight+(s?0:e(document).scrollTop());return i.left-=this._get(t,"isRTL")?n-o:0,i.left-=s&&i.left===t.input.offset().left?e(document).scrollLeft():0,i.top-=s&&i.top===t.input.offset().top+r?e(document).scrollTop():0,i.left-=Math.min(i.left,i.left+n>h&&h>n?Math.abs(i.left+n-h):0),i.top-=Math.min(i.top,i.top+a>l&&l>a?Math.abs(a+r):0),i},_findPos:function(t){for(var i,s=this._getInst(t),n=this._get(s,"isRTL");t&&("hidden"===t.type||1!==t.nodeType||e.expr.filters.hidden(t));)t=t[n?"previousSibling":"nextSibling"];return i=e(t).offset(),[i.left,i.top]},_hideDatepicker:function(t){var i,s,n,a,o=this._curInst;!o||t&&o!==e.data(t,"datepicker")||this._datepickerShowing&&(i=this._get(o,"showAnim"),s=this._get(o,"duration"),n=function(){e.datepicker._tidyDialog(o)},e.effects&&(e.effects.effect[i]||e.effects[i])?o.dpDiv.hide(i,e.datepicker._get(o,"showOptions"),s,n):o.dpDiv["slideDown"===i?"slideUp":"fadeIn"===i?"fadeOut":"hide"](i?s:null,n),i||n(),this._datepickerShowing=!1,a=this._get(o,"onClose"),a&&a.apply(o.input?o.input[0]:null,[o.input?o.input.val():"",o]),this._lastInput=null,this._inDialog&&(this._dialogInput.css({position:"absolute",left:"0",top:"-100px"}),e.blockUI&&(e.unblockUI(),e("body").append(this.dpDiv))),this._inDialog=!1)},_tidyDialog:function(e){e.dpDiv.removeClass(this._dialogClass).unbind(".ui-datepicker-calendar")},_checkExternalClick:function(t){if(e.datepicker._curInst){var i=e(t.target),s=e.datepicker._getInst(i[0]);(i[0].id!==e.datepicker._mainDivId&&0===i.parents("#"+e.datepicker._mainDivId).length&&!i.hasClass(e.datepicker.markerClassName)&&!i.closest("."+e.datepicker._triggerClass).length&&e.datepicker._datepickerShowing&&(!e.datepicker._inDialog||!e.blockUI)||i.hasClass(e.datepicker.markerClassName)&&e.datepicker._curInst!==s)&&e.datepicker._hideDatepicker()}},_adjustDate:function(t,i,s){var n=e(t),a=this._getInst(n[0]);this._isDisabledDatepicker(n[0])||(this._adjustInstDate(a,i+("M"===s?this._get(a,"showCurrentAtPos"):0),s),this._updateDatepicker(a))},_gotoToday:function(t){var i,s=e(t),n=this._getInst(s[0]);this._get(n,"gotoCurrent")&&n.currentDay?(n.selectedDay=n.currentDay,n.drawMonth=n.selectedMonth=n.currentMonth,n.drawYear=n.selectedYear=n.currentYear):(i=new Date,n.selectedDay=i.getDate(),n.drawMonth=n.selectedMonth=i.getMonth(),n.drawYear=n.selectedYear=i.getFullYear()),this._notifyChange(n),this._adjustDate(s)},_selectMonthYear:function(t,i,s){var n=e(t),a=this._getInst(n[0]);a["selected"+("M"===s?"Month":"Year")]=a["draw"+("M"===s?"Month":"Year")]=parseInt(i.options[i.selectedIndex].value,10),this._notifyChange(a),this._adjustDate(n)},_selectDay:function(t,i,s,n){var a,o=e(t);e(n).hasClass(this._unselectableClass)||this._isDisabledDatepicker(o[0])||(a=this._getInst(o[0]),a.selectedDay=a.currentDay=e("a",n).html(),a.selectedMonth=a.currentMonth=i,a.selectedYear=a.currentYear=s,this._selectDate(t,this._formatDate(a,a.currentDay,a.currentMonth,a.currentYear)))},_clearDate:function(t){var i=e(t);this._selectDate(i,"")},_selectDate:function(t,i){var s,n=e(t),a=this._getInst(n[0]);i=null!=i?i:this._formatDate(a),a.input&&a.input.val(i),this._updateAlternate(a),s=this._get(a,"onSelect"),s?s.apply(a.input?a.input[0]:null,[i,a]):a.input&&a.input.trigger("change"),a.inline?this._updateDatepicker(a):(this._hideDatepicker(),this._lastInput=a.input[0],"object"!=typeof a.input[0]&&a.input.focus(),this._lastInput=null)},_updateAlternate:function(t){var i,s,n,a=this._get(t,"altField");a&&(i=this._get(t,"altFormat")||this._get(t,"dateFormat"),s=this._getDate(t),n=this.formatDate(i,s,this._getFormatConfig(t)),e(a).each(function(){e(this).val(n)}))},noWeekends:function(e){var t=e.getDay();return[t>0&&6>t,""]},iso8601Week:function(e){var t,i=new Date(e.getTime());return i.setDate(i.getDate()+4-(i.getDay()||7)),t=i.getTime(),i.setMonth(0),i.setDate(1),Math.floor(Math.round((t-i)/864e5)/7)+1},parseDate:function(t,i,s){if(null==t||null==i)throw"Invalid arguments";if(i="object"==typeof i?""+i:i+"",""===i)return null;var n,a,o,r,h=0,l=(s?s.shortYearCutoff:null)||this._defaults.shortYearCutoff,u="string"!=typeof l?l:(new Date).getFullYear()%100+parseInt(l,10),c=(s?s.dayNamesShort:null)||this._defaults.dayNamesShort,d=(s?s.dayNames:null)||this._defaults.dayNames,p=(s?s.monthNamesShort:null)||this._defaults.monthNamesShort,f=(s?s.monthNames:null)||this._defaults.monthNames,m=-1,g=-1,v=-1,_=-1,b=!1,y=function(e){var i=t.length>n+1&&t.charAt(n+1)===e;return i&&n++,i},x=function(e){var t=y(e),s="@"===e?14:"!"===e?20:"y"===e&&t?4:"o"===e?3:2,n="y"===e?s:1,a=RegExp("^\\d{"+n+","+s+"}"),o=i.substring(h).match(a);if(!o)throw"Missing number at position "+h;return h+=o[0].length,parseInt(o[0],10)},w=function(t,s,n){var a=-1,o=e.map(y(t)?n:s,function(e,t){return[[t,e]]}).sort(function(e,t){return-(e[1].length-t[1].length)});if(e.each(o,function(e,t){var s=t[1];return i.substr(h,s.length).toLowerCase()===s.toLowerCase()?(a=t[0],h+=s.length,!1):void 0}),-1!==a)return a+1;throw"Unknown name at position "+h},k=function(){if(i.charAt(h)!==t.charAt(n))throw"Unexpected literal at position "+h;h++};for(n=0;t.length>n;n++)if(b)"'"!==t.charAt(n)||y("'")?k():b=!1;else switch(t.charAt(n)){case"d":v=x("d");break;case"D":w("D",c,d);break;case"o":_=x("o");break;case"m":g=x("m");break;case"M":g=w("M",p,f);break;case"y":m=x("y");break;case"@":r=new Date(x("@")),m=r.getFullYear(),g=r.getMonth()+1,v=r.getDate();break;case"!":r=new Date((x("!")-this._ticksTo1970)/1e4),m=r.getFullYear(),g=r.getMonth()+1,v=r.getDate();break;case"'":y("'")?k():b=!0;break;default:k()}if(i.length>h&&(o=i.substr(h),!/^\s+/.test(o)))throw"Extra/unparsed characters found in date: "+o;if(-1===m?m=(new Date).getFullYear():100>m&&(m+=(new Date).getFullYear()-(new Date).getFullYear()%100+(u>=m?0:-100)),_>-1)for(g=1,v=_;;){if(a=this._getDaysInMonth(m,g-1),a>=v)break;g++,v-=a}if(r=this._daylightSavingAdjust(new Date(m,g-1,v)),r.getFullYear()!==m||r.getMonth()+1!==g||r.getDate()!==v)throw"Invalid date";return r},ATOM:"yy-mm-dd",COOKIE:"D, dd M yy",ISO_8601:"yy-mm-dd",RFC_822:"D, d M y",RFC_850:"DD, dd-M-y",RFC_1036:"D, d M y",RFC_1123:"D, d M yy",RFC_2822:"D, d M yy",RSS:"D, d M y",TICKS:"!",TIMESTAMP:"@",W3C:"yy-mm-dd",_ticksTo1970:1e7*60*60*24*(718685+Math.floor(492.5)-Math.floor(19.7)+Math.floor(4.925)),formatDate:function(e,t,i){if(!t)return"";var s,n=(i?i.dayNamesShort:null)||this._defaults.dayNamesShort,a=(i?i.dayNames:null)||this._defaults.dayNames,o=(i?i.monthNamesShort:null)||this._defaults.monthNamesShort,r=(i?i.monthNames:null)||this._defaults.monthNames,h=function(t){var i=e.length>s+1&&e.charAt(s+1)===t;return i&&s++,i},l=function(e,t,i){var s=""+t;if(h(e))for(;i>s.length;)s="0"+s;return s},u=function(e,t,i,s){return h(e)?s[t]:i[t]},c="",d=!1;if(t)for(s=0;e.length>s;s++)if(d)"'"!==e.charAt(s)||h("'")?c+=e.charAt(s):d=!1;else switch(e.charAt(s)){case"d":c+=l("d",t.getDate(),2);break;case"D":c+=u("D",t.getDay(),n,a);break;case"o":c+=l("o",Math.round((new Date(t.getFullYear(),t.getMonth(),t.getDate()).getTime()-new Date(t.getFullYear(),0,0).getTime())/864e5),3);break;case"m":c+=l("m",t.getMonth()+1,2);break;case"M":c+=u("M",t.getMonth(),o,r);break;case"y":c+=h("y")?t.getFullYear():(10>t.getYear()%100?"0":"")+t.getYear()%100;break;case"@":c+=t.getTime();break;case"!":c+=1e4*t.getTime()+this._ticksTo1970;break;case"'":h("'")?c+="'":d=!0;break;default:c+=e.charAt(s)}return c},_possibleChars:function(e){var t,i="",s=!1,n=function(i){var s=e.length>t+1&&e.charAt(t+1)===i;return s&&t++,s};for(t=0;e.length>t;t++)if(s)"'"!==e.charAt(t)||n("'")?i+=e.charAt(t):s=!1;else switch(e.charAt(t)){case"d":case"m":case"y":case"@":i+="0123456789";break;case"D":case"M":return null;case"'":n("'")?i+="'":s=!0;break;default:i+=e.charAt(t)}return i},_get:function(e,t){return void 0!==e.settings[t]?e.settings[t]:this._defaults[t]},_setDateFromField:function(e,t){if(e.input.val()!==e.lastVal){var i=this._get(e,"dateFormat"),s=e.lastVal=e.input?e.input.val():null,n=this._getDefaultDate(e),a=n,o=this._getFormatConfig(e);try{a=this.parseDate(i,s,o)||n}catch(r){s=t?"":s}e.selectedDay=a.getDate(),e.drawMonth=e.selectedMonth=a.getMonth(),e.drawYear=e.selectedYear=a.getFullYear(),e.currentDay=s?a.getDate():0,e.currentMonth=s?a.getMonth():0,e.currentYear=s?a.getFullYear():0,this._adjustInstDate(e)}},_getDefaultDate:function(e){return this._restrictMinMax(e,this._determineDate(e,this._get(e,"defaultDate"),new Date))},_determineDate:function(t,i,s){var n=function(e){var t=new Date;return t.setDate(t.getDate()+e),t},a=function(i){try{return e.datepicker.parseDate(e.datepicker._get(t,"dateFormat"),i,e.datepicker._getFormatConfig(t))}catch(s){}for(var n=(i.toLowerCase().match(/^c/)?e.datepicker._getDate(t):null)||new Date,a=n.getFullYear(),o=n.getMonth(),r=n.getDate(),h=/([+\-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g,l=h.exec(i);l;){switch(l[2]||"d"){case"d":case"D":r+=parseInt(l[1],10);break;case"w":case"W":r+=7*parseInt(l[1],10);break;case"m":case"M":o+=parseInt(l[1],10),r=Math.min(r,e.datepicker._getDaysInMonth(a,o));break;case"y":case"Y":a+=parseInt(l[1],10),r=Math.min(r,e.datepicker._getDaysInMonth(a,o))}l=h.exec(i)}return new Date(a,o,r)},o=null==i||""===i?s:"string"==typeof i?a(i):"number"==typeof i?isNaN(i)?s:n(i):new Date(i.getTime());return o=o&&"Invalid Date"==""+o?s:o,o&&(o.setHours(0),o.setMinutes(0),o.setSeconds(0),o.setMilliseconds(0)),this._daylightSavingAdjust(o)},_daylightSavingAdjust:function(e){return e?(e.setHours(e.getHours()>12?e.getHours()+2:0),e):null},_setDate:function(e,t,i){var s=!t,n=e.selectedMonth,a=e.selectedYear,o=this._restrictMinMax(e,this._determineDate(e,t,new Date));e.selectedDay=e.currentDay=o.getDate(),e.drawMonth=e.selectedMonth=e.currentMonth=o.getMonth(),e.drawYear=e.selectedYear=e.currentYear=o.getFullYear(),n===e.selectedMonth&&a===e.selectedYear||i||this._notifyChange(e),this._adjustInstDate(e),e.input&&e.input.val(s?"":this._formatDate(e))},_getDate:function(e){var t=!e.currentYear||e.input&&""===e.input.val()?null:this._daylightSavingAdjust(new Date(e.currentYear,e.currentMonth,e.currentDay));return t},_attachHandlers:function(t){var i=this._get(t,"stepMonths"),s="#"+t.id.replace(/\\\\/g,"\\");t.dpDiv.find("[data-handler]").map(function(){var t={prev:function(){e.datepicker._adjustDate(s,-i,"M")},next:function(){e.datepicker._adjustDate(s,+i,"M")},hide:function(){e.datepicker._hideDatepicker()},today:function(){e.datepicker._gotoToday(s)},selectDay:function(){return e.datepicker._selectDay(s,+this.getAttribute("data-month"),+this.getAttribute("data-year"),this),!1},selectMonth:function(){return e.datepicker._selectMonthYear(s,this,"M"),!1},selectYear:function(){return e.datepicker._selectMonthYear(s,this,"Y"),!1}};e(this).bind(this.getAttribute("data-event"),t[this.getAttribute("data-handler")])})},_generateHTML:function(e){var t,i,s,n,a,o,r,h,l,u,c,d,p,f,m,g,v,_,b,y,x,w,k,D,T,S,M,N,C,P,I,A,H,z,F,E,W,O,L,R=new Date,j=this._daylightSavingAdjust(new Date(R.getFullYear(),R.getMonth(),R.getDate())),Y=this._get(e,"isRTL"),B=this._get(e,"showButtonPanel"),J=this._get(e,"hideIfNoPrevNext"),K=this._get(e,"navigationAsDateFormat"),U=this._getNumberOfMonths(e),V=this._get(e,"showCurrentAtPos"),q=this._get(e,"stepMonths"),G=1!==U[0]||1!==U[1],X=this._daylightSavingAdjust(e.currentDay?new Date(e.currentYear,e.currentMonth,e.currentDay):new Date(9999,9,9)),$=this._getMinMaxDate(e,"min"),Q=this._getMinMaxDate(e,"max"),Z=e.drawMonth-V,et=e.drawYear;if(0>Z&&(Z+=12,et--),Q)for(t=this._daylightSavingAdjust(new Date(Q.getFullYear(),Q.getMonth()-U[0]*U[1]+1,Q.getDate())),t=$&&$>t?$:t;this._daylightSavingAdjust(new Date(et,Z,1))>t;)Z--,0>Z&&(Z=11,et--);for(e.drawMonth=Z,e.drawYear=et,i=this._get(e,"prevText"),i=K?this.formatDate(i,this._daylightSavingAdjust(new Date(et,Z-q,1)),this._getFormatConfig(e)):i,s=this._canAdjustMonth(e,-1,et,Z)?"<a class='ui-datepicker-prev ui-corner-all' data-handler='prev' data-event='click' title='"+i+"'><span class='ui-icon ui-icon-circle-triangle-"+(Y?"e":"w")+"'>"+i+"</span></a>":J?"":"<a class='ui-datepicker-prev ui-corner-all ui-state-disabled' title='"+i+"'><span class='ui-icon ui-icon-circle-triangle-"+(Y?"e":"w")+"'>"+i+"</span></a>",n=this._get(e,"nextText"),n=K?this.formatDate(n,this._daylightSavingAdjust(new Date(et,Z+q,1)),this._getFormatConfig(e)):n,a=this._canAdjustMonth(e,1,et,Z)?"<a class='ui-datepicker-next ui-corner-all' data-handler='next' data-event='click' title='"+n+"'><span class='ui-icon ui-icon-circle-triangle-"+(Y?"w":"e")+"'>"+n+"</span></a>":J?"":"<a class='ui-datepicker-next ui-corner-all ui-state-disabled' title='"+n+"'><span class='ui-icon ui-icon-circle-triangle-"+(Y?"w":"e")+"'>"+n+"</span></a>",o=this._get(e,"currentText"),r=this._get(e,"gotoCurrent")&&e.currentDay?X:j,o=K?this.formatDate(o,r,this._getFormatConfig(e)):o,h=e.inline?"":"<button type='button' class='ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all' data-handler='hide' data-event='click'>"+this._get(e,"closeText")+"</button>",l=B?"<div class='ui-datepicker-buttonpane ui-widget-content'>"+(Y?h:"")+(this._isInRange(e,r)?"<button type='button' class='ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all' data-handler='today' data-event='click'>"+o+"</button>":"")+(Y?"":h)+"</div>":"",u=parseInt(this._get(e,"firstDay"),10),u=isNaN(u)?0:u,c=this._get(e,"showWeek"),d=this._get(e,"dayNames"),p=this._get(e,"dayNamesMin"),f=this._get(e,"monthNames"),m=this._get(e,"monthNamesShort"),g=this._get(e,"beforeShowDay"),v=this._get(e,"showOtherMonths"),_=this._get(e,"selectOtherMonths"),b=this._getDefaultDate(e),y="",w=0;U[0]>w;w++){for(k="",this.maxRows=4,D=0;U[1]>D;D++){if(T=this._daylightSavingAdjust(new Date(et,Z,e.selectedDay)),S=" ui-corner-all",M="",G){if(M+="<div class='ui-datepicker-group",U[1]>1)switch(D){case 0:M+=" ui-datepicker-group-first",S=" ui-corner-"+(Y?"right":"left");break;case U[1]-1:M+=" ui-datepicker-group-last",S=" ui-corner-"+(Y?"left":"right");break;default:M+=" ui-datepicker-group-middle",S=""}M+="'>"}for(M+="<div class='ui-datepicker-header ui-widget-header ui-helper-clearfix"+S+"'>"+(/all|left/.test(S)&&0===w?Y?a:s:"")+(/all|right/.test(S)&&0===w?Y?s:a:"")+this._generateMonthYearHeader(e,Z,et,$,Q,w>0||D>0,f,m)+"</div><table class='ui-datepicker-calendar'><thead>"+"<tr>",N=c?"<th class='ui-datepicker-week-col'>"+this._get(e,"weekHeader")+"</th>":"",x=0;7>x;x++)C=(x+u)%7,N+="<th scope='col'"+((x+u+6)%7>=5?" class='ui-datepicker-week-end'":"")+">"+"<span title='"+d[C]+"'>"+p[C]+"</span></th>";for(M+=N+"</tr></thead><tbody>",P=this._getDaysInMonth(et,Z),et===e.selectedYear&&Z===e.selectedMonth&&(e.selectedDay=Math.min(e.selectedDay,P)),I=(this._getFirstDayOfMonth(et,Z)-u+7)%7,A=Math.ceil((I+P)/7),H=G?this.maxRows>A?this.maxRows:A:A,this.maxRows=H,z=this._daylightSavingAdjust(new Date(et,Z,1-I)),F=0;H>F;F++){for(M+="<tr>",E=c?"<td class='ui-datepicker-week-col'>"+this._get(e,"calculateWeek")(z)+"</td>":"",x=0;7>x;x++)W=g?g.apply(e.input?e.input[0]:null,[z]):[!0,""],O=z.getMonth()!==Z,L=O&&!_||!W[0]||$&&$>z||Q&&z>Q,E+="<td class='"+((x+u+6)%7>=5?" ui-datepicker-week-end":"")+(O?" ui-datepicker-other-month":"")+(z.getTime()===T.getTime()&&Z===e.selectedMonth&&e._keyEvent||b.getTime()===z.getTime()&&b.getTime()===T.getTime()?" "+this._dayOverClass:"")+(L?" "+this._unselectableClass+" ui-state-disabled":"")+(O&&!v?"":" "+W[1]+(z.getTime()===X.getTime()?" "+this._currentClass:"")+(z.getTime()===j.getTime()?" ui-datepicker-today":""))+"'"+(O&&!v||!W[2]?"":" title='"+W[2].replace(/'/g,"&#39;")+"'")+(L?"":" data-handler='selectDay' data-event='click' data-month='"+z.getMonth()+"' data-year='"+z.getFullYear()+"'")+">"+(O&&!v?"&#xa0;":L?"<span class='ui-state-default'>"+z.getDate()+"</span>":"<a class='ui-state-default"+(z.getTime()===j.getTime()?" ui-state-highlight":"")+(z.getTime()===X.getTime()?" ui-state-active":"")+(O?" ui-priority-secondary":"")+"' href='#'>"+z.getDate()+"</a>")+"</td>",z.setDate(z.getDate()+1),z=this._daylightSavingAdjust(z);M+=E+"</tr>"}Z++,Z>11&&(Z=0,et++),M+="</tbody></table>"+(G?"</div>"+(U[0]>0&&D===U[1]-1?"<div class='ui-datepicker-row-break'></div>":""):""),k+=M}y+=k}return y+=l,e._keyEvent=!1,y},_generateMonthYearHeader:function(e,t,i,s,n,a,o,r){var h,l,u,c,d,p,f,m,g=this._get(e,"changeMonth"),v=this._get(e,"changeYear"),_=this._get(e,"showMonthAfterYear"),b="<div class='ui-datepicker-title'>",y="";if(a||!g)y+="<span class='ui-datepicker-month'>"+o[t]+"</span>";else{for(h=s&&s.getFullYear()===i,l=n&&n.getFullYear()===i,y+="<select class='ui-datepicker-month' data-handler='selectMonth' data-event='change'>",u=0;12>u;u++)(!h||u>=s.getMonth())&&(!l||n.getMonth()>=u)&&(y+="<option value='"+u+"'"+(u===t?" selected='selected'":"")+">"+r[u]+"</option>");y+="</select>"}if(_||(b+=y+(!a&&g&&v?"":"&#xa0;")),!e.yearshtml)if(e.yearshtml="",a||!v)b+="<span class='ui-datepicker-year'>"+i+"</span>";else{for(c=this._get(e,"yearRange").split(":"),d=(new Date).getFullYear(),p=function(e){var t=e.match(/c[+\-].*/)?i+parseInt(e.substring(1),10):e.match(/[+\-].*/)?d+parseInt(e,10):parseInt(e,10);return isNaN(t)?d:t},f=p(c[0]),m=Math.max(f,p(c[1]||"")),f=s?Math.max(f,s.getFullYear()):f,m=n?Math.min(m,n.getFullYear()):m,e.yearshtml+="<select class='ui-datepicker-year' data-handler='selectYear' data-event='change'>";m>=f;f++)e.yearshtml+="<option value='"+f+"'"+(f===i?" selected='selected'":"")+">"+f+"</option>";e.yearshtml+="</select>",b+=e.yearshtml,e.yearshtml=null}return b+=this._get(e,"yearSuffix"),_&&(b+=(!a&&g&&v?"":"&#xa0;")+y),b+="</div>"},_adjustInstDate:function(e,t,i){var s=e.drawYear+("Y"===i?t:0),n=e.drawMonth+("M"===i?t:0),a=Math.min(e.selectedDay,this._getDaysInMonth(s,n))+("D"===i?t:0),o=this._restrictMinMax(e,this._daylightSavingAdjust(new Date(s,n,a)));e.selectedDay=o.getDate(),e.drawMonth=e.selectedMonth=o.getMonth(),e.drawYear=e.selectedYear=o.getFullYear(),("M"===i||"Y"===i)&&this._notifyChange(e)},_restrictMinMax:function(e,t){var i=this._getMinMaxDate(e,"min"),s=this._getMinMaxDate(e,"max"),n=i&&i>t?i:t;return s&&n>s?s:n},_notifyChange:function(e){var t=this._get(e,"onChangeMonthYear");t&&t.apply(e.input?e.input[0]:null,[e.selectedYear,e.selectedMonth+1,e])},_getNumberOfMonths:function(e){var t=this._get(e,"numberOfMonths");return null==t?[1,1]:"number"==typeof t?[1,t]:t},_getMinMaxDate:function(e,t){return this._determineDate(e,this._get(e,t+"Date"),null)},_getDaysInMonth:function(e,t){return 32-this._daylightSavingAdjust(new Date(e,t,32)).getDate()},_getFirstDayOfMonth:function(e,t){return new Date(e,t,1).getDay()},_canAdjustMonth:function(e,t,i,s){var n=this._getNumberOfMonths(e),a=this._daylightSavingAdjust(new Date(i,s+(0>t?t:n[0]*n[1]),1));return 0>t&&a.setDate(this._getDaysInMonth(a.getFullYear(),a.getMonth())),this._isInRange(e,a)},_isInRange:function(e,t){var i,s,n=this._getMinMaxDate(e,"min"),a=this._getMinMaxDate(e,"max"),o=null,r=null,h=this._get(e,"yearRange");return h&&(i=h.split(":"),s=(new Date).getFullYear(),o=parseInt(i[0],10),r=parseInt(i[1],10),i[0].match(/[+\-].*/)&&(o+=s),i[1].match(/[+\-].*/)&&(r+=s)),(!n||t.getTime()>=n.getTime())&&(!a||t.getTime()<=a.getTime())&&(!o||t.getFullYear()>=o)&&(!r||r>=t.getFullYear())
},_getFormatConfig:function(e){var t=this._get(e,"shortYearCutoff");return t="string"!=typeof t?t:(new Date).getFullYear()%100+parseInt(t,10),{shortYearCutoff:t,dayNamesShort:this._get(e,"dayNamesShort"),dayNames:this._get(e,"dayNames"),monthNamesShort:this._get(e,"monthNamesShort"),monthNames:this._get(e,"monthNames")}},_formatDate:function(e,t,i,s){t||(e.currentDay=e.selectedDay,e.currentMonth=e.selectedMonth,e.currentYear=e.selectedYear);var n=t?"object"==typeof t?t:this._daylightSavingAdjust(new Date(s,i,t)):this._daylightSavingAdjust(new Date(e.currentYear,e.currentMonth,e.currentDay));return this.formatDate(this._get(e,"dateFormat"),n,this._getFormatConfig(e))}}),e.fn.datepicker=function(t){if(!this.length)return this;e.datepicker.initialized||(e(document).mousedown(e.datepicker._checkExternalClick),e.datepicker.initialized=!0),0===e("#"+e.datepicker._mainDivId).length&&e("body").append(e.datepicker.dpDiv);var i=Array.prototype.slice.call(arguments,1);return"string"!=typeof t||"isDisabled"!==t&&"getDate"!==t&&"widget"!==t?"option"===t&&2===arguments.length&&"string"==typeof arguments[1]?e.datepicker["_"+t+"Datepicker"].apply(e.datepicker,[this[0]].concat(i)):this.each(function(){"string"==typeof t?e.datepicker["_"+t+"Datepicker"].apply(e.datepicker,[this].concat(i)):e.datepicker._attachDatepicker(this,t)}):e.datepicker["_"+t+"Datepicker"].apply(e.datepicker,[this[0]].concat(i))},e.datepicker=new n,e.datepicker.initialized=!1,e.datepicker.uuid=(new Date).getTime(),e.datepicker.version="1.11.4",e.datepicker,e.widget("ui.dialog",{version:"1.11.4",options:{appendTo:"body",autoOpen:!0,buttons:[],closeOnEscape:!0,closeText:"Close",dialogClass:"",draggable:!0,hide:null,height:"auto",maxHeight:null,maxWidth:null,minHeight:150,minWidth:150,modal:!1,position:{my:"center",at:"center",of:window,collision:"fit",using:function(t){var i=e(this).css(t).offset().top;0>i&&e(this).css("top",t.top-i)}},resizable:!0,show:null,title:null,width:300,beforeClose:null,close:null,drag:null,dragStart:null,dragStop:null,focus:null,open:null,resize:null,resizeStart:null,resizeStop:null},sizeRelatedOptions:{buttons:!0,height:!0,maxHeight:!0,maxWidth:!0,minHeight:!0,minWidth:!0,width:!0},resizableRelatedOptions:{maxHeight:!0,maxWidth:!0,minHeight:!0,minWidth:!0},_create:function(){this.originalCss={display:this.element[0].style.display,width:this.element[0].style.width,minHeight:this.element[0].style.minHeight,maxHeight:this.element[0].style.maxHeight,height:this.element[0].style.height},this.originalPosition={parent:this.element.parent(),index:this.element.parent().children().index(this.element)},this.originalTitle=this.element.attr("title"),this.options.title=this.options.title||this.originalTitle,this._createWrapper(),this.element.show().removeAttr("title").addClass("ui-dialog-content ui-widget-content").appendTo(this.uiDialog),this._createTitlebar(),this._createButtonPane(),this.options.draggable&&e.fn.draggable&&this._makeDraggable(),this.options.resizable&&e.fn.resizable&&this._makeResizable(),this._isOpen=!1,this._trackFocus()},_init:function(){this.options.autoOpen&&this.open()},_appendTo:function(){var t=this.options.appendTo;return t&&(t.jquery||t.nodeType)?e(t):this.document.find(t||"body").eq(0)},_destroy:function(){var e,t=this.originalPosition;this._untrackInstance(),this._destroyOverlay(),this.element.removeUniqueId().removeClass("ui-dialog-content ui-widget-content").css(this.originalCss).detach(),this.uiDialog.stop(!0,!0).remove(),this.originalTitle&&this.element.attr("title",this.originalTitle),e=t.parent.children().eq(t.index),e.length&&e[0]!==this.element[0]?e.before(this.element):t.parent.append(this.element)},widget:function(){return this.uiDialog},disable:e.noop,enable:e.noop,close:function(t){var i,s=this;if(this._isOpen&&this._trigger("beforeClose",t)!==!1){if(this._isOpen=!1,this._focusedElement=null,this._destroyOverlay(),this._untrackInstance(),!this.opener.filter(":focusable").focus().length)try{i=this.document[0].activeElement,i&&"body"!==i.nodeName.toLowerCase()&&e(i).blur()}catch(n){}this._hide(this.uiDialog,this.options.hide,function(){s._trigger("close",t)})}},isOpen:function(){return this._isOpen},moveToTop:function(){this._moveToTop()},_moveToTop:function(t,i){var s=!1,n=this.uiDialog.siblings(".ui-front:visible").map(function(){return+e(this).css("z-index")}).get(),a=Math.max.apply(null,n);return a>=+this.uiDialog.css("z-index")&&(this.uiDialog.css("z-index",a+1),s=!0),s&&!i&&this._trigger("focus",t),s},open:function(){var t=this;return this._isOpen?(this._moveToTop()&&this._focusTabbable(),void 0):(this._isOpen=!0,this.opener=e(this.document[0].activeElement),this._size(),this._position(),this._createOverlay(),this._moveToTop(null,!0),this.overlay&&this.overlay.css("z-index",this.uiDialog.css("z-index")-1),this._show(this.uiDialog,this.options.show,function(){t._focusTabbable(),t._trigger("focus")}),this._makeFocusTarget(),this._trigger("open"),void 0)},_focusTabbable:function(){var e=this._focusedElement;e||(e=this.element.find("[autofocus]")),e.length||(e=this.element.find(":tabbable")),e.length||(e=this.uiDialogButtonPane.find(":tabbable")),e.length||(e=this.uiDialogTitlebarClose.filter(":tabbable")),e.length||(e=this.uiDialog),e.eq(0).focus()},_keepFocus:function(t){function i(){var t=this.document[0].activeElement,i=this.uiDialog[0]===t||e.contains(this.uiDialog[0],t);i||this._focusTabbable()}t.preventDefault(),i.call(this),this._delay(i)},_createWrapper:function(){this.uiDialog=e("<div>").addClass("ui-dialog ui-widget ui-widget-content ui-corner-all ui-front "+this.options.dialogClass).hide().attr({tabIndex:-1,role:"dialog"}).appendTo(this._appendTo()),this._on(this.uiDialog,{keydown:function(t){if(this.options.closeOnEscape&&!t.isDefaultPrevented()&&t.keyCode&&t.keyCode===e.ui.keyCode.ESCAPE)return t.preventDefault(),this.close(t),void 0;if(t.keyCode===e.ui.keyCode.TAB&&!t.isDefaultPrevented()){var i=this.uiDialog.find(":tabbable"),s=i.filter(":first"),n=i.filter(":last");t.target!==n[0]&&t.target!==this.uiDialog[0]||t.shiftKey?t.target!==s[0]&&t.target!==this.uiDialog[0]||!t.shiftKey||(this._delay(function(){n.focus()}),t.preventDefault()):(this._delay(function(){s.focus()}),t.preventDefault())}},mousedown:function(e){this._moveToTop(e)&&this._focusTabbable()}}),this.element.find("[aria-describedby]").length||this.uiDialog.attr({"aria-describedby":this.element.uniqueId().attr("id")})},_createTitlebar:function(){var t;this.uiDialogTitlebar=e("<div>").addClass("ui-dialog-titlebar ui-widget-header ui-corner-all ui-helper-clearfix").prependTo(this.uiDialog),this._on(this.uiDialogTitlebar,{mousedown:function(t){e(t.target).closest(".ui-dialog-titlebar-close")||this.uiDialog.focus()}}),this.uiDialogTitlebarClose=e("<button type='button'></button>").button({label:this.options.closeText,icons:{primary:"ui-icon-closethick"},text:!1}).addClass("ui-dialog-titlebar-close").appendTo(this.uiDialogTitlebar),this._on(this.uiDialogTitlebarClose,{click:function(e){e.preventDefault(),this.close(e)}}),t=e("<span>").uniqueId().addClass("ui-dialog-title").prependTo(this.uiDialogTitlebar),this._title(t),this.uiDialog.attr({"aria-labelledby":t.attr("id")})},_title:function(e){this.options.title||e.html("&#160;"),e.text(this.options.title)},_createButtonPane:function(){this.uiDialogButtonPane=e("<div>").addClass("ui-dialog-buttonpane ui-widget-content ui-helper-clearfix"),this.uiButtonSet=e("<div>").addClass("ui-dialog-buttonset").appendTo(this.uiDialogButtonPane),this._createButtons()},_createButtons:function(){var t=this,i=this.options.buttons;return this.uiDialogButtonPane.remove(),this.uiButtonSet.empty(),e.isEmptyObject(i)||e.isArray(i)&&!i.length?(this.uiDialog.removeClass("ui-dialog-buttons"),void 0):(e.each(i,function(i,s){var n,a;s=e.isFunction(s)?{click:s,text:i}:s,s=e.extend({type:"button"},s),n=s.click,s.click=function(){n.apply(t.element[0],arguments)},a={icons:s.icons,text:s.showText},delete s.icons,delete s.showText,e("<button></button>",s).button(a).appendTo(t.uiButtonSet)}),this.uiDialog.addClass("ui-dialog-buttons"),this.uiDialogButtonPane.appendTo(this.uiDialog),void 0)},_makeDraggable:function(){function t(e){return{position:e.position,offset:e.offset}}var i=this,s=this.options;this.uiDialog.draggable({cancel:".ui-dialog-content, .ui-dialog-titlebar-close",handle:".ui-dialog-titlebar",containment:"document",start:function(s,n){e(this).addClass("ui-dialog-dragging"),i._blockFrames(),i._trigger("dragStart",s,t(n))},drag:function(e,s){i._trigger("drag",e,t(s))},stop:function(n,a){var o=a.offset.left-i.document.scrollLeft(),r=a.offset.top-i.document.scrollTop();s.position={my:"left top",at:"left"+(o>=0?"+":"")+o+" "+"top"+(r>=0?"+":"")+r,of:i.window},e(this).removeClass("ui-dialog-dragging"),i._unblockFrames(),i._trigger("dragStop",n,t(a))}})},_makeResizable:function(){function t(e){return{originalPosition:e.originalPosition,originalSize:e.originalSize,position:e.position,size:e.size}}var i=this,s=this.options,n=s.resizable,a=this.uiDialog.css("position"),o="string"==typeof n?n:"n,e,s,w,se,sw,ne,nw";this.uiDialog.resizable({cancel:".ui-dialog-content",containment:"document",alsoResize:this.element,maxWidth:s.maxWidth,maxHeight:s.maxHeight,minWidth:s.minWidth,minHeight:this._minHeight(),handles:o,start:function(s,n){e(this).addClass("ui-dialog-resizing"),i._blockFrames(),i._trigger("resizeStart",s,t(n))},resize:function(e,s){i._trigger("resize",e,t(s))},stop:function(n,a){var o=i.uiDialog.offset(),r=o.left-i.document.scrollLeft(),h=o.top-i.document.scrollTop();s.height=i.uiDialog.height(),s.width=i.uiDialog.width(),s.position={my:"left top",at:"left"+(r>=0?"+":"")+r+" "+"top"+(h>=0?"+":"")+h,of:i.window},e(this).removeClass("ui-dialog-resizing"),i._unblockFrames(),i._trigger("resizeStop",n,t(a))}}).css("position",a)},_trackFocus:function(){this._on(this.widget(),{focusin:function(t){this._makeFocusTarget(),this._focusedElement=e(t.target)}})},_makeFocusTarget:function(){this._untrackInstance(),this._trackingInstances().unshift(this)},_untrackInstance:function(){var t=this._trackingInstances(),i=e.inArray(this,t);-1!==i&&t.splice(i,1)},_trackingInstances:function(){var e=this.document.data("ui-dialog-instances");return e||(e=[],this.document.data("ui-dialog-instances",e)),e},_minHeight:function(){var e=this.options;return"auto"===e.height?e.minHeight:Math.min(e.minHeight,e.height)},_position:function(){var e=this.uiDialog.is(":visible");e||this.uiDialog.show(),this.uiDialog.position(this.options.position),e||this.uiDialog.hide()},_setOptions:function(t){var i=this,s=!1,n={};e.each(t,function(e,t){i._setOption(e,t),e in i.sizeRelatedOptions&&(s=!0),e in i.resizableRelatedOptions&&(n[e]=t)}),s&&(this._size(),this._position()),this.uiDialog.is(":data(ui-resizable)")&&this.uiDialog.resizable("option",n)},_setOption:function(e,t){var i,s,n=this.uiDialog;"dialogClass"===e&&n.removeClass(this.options.dialogClass).addClass(t),"disabled"!==e&&(this._super(e,t),"appendTo"===e&&this.uiDialog.appendTo(this._appendTo()),"buttons"===e&&this._createButtons(),"closeText"===e&&this.uiDialogTitlebarClose.button({label:""+t}),"draggable"===e&&(i=n.is(":data(ui-draggable)"),i&&!t&&n.draggable("destroy"),!i&&t&&this._makeDraggable()),"position"===e&&this._position(),"resizable"===e&&(s=n.is(":data(ui-resizable)"),s&&!t&&n.resizable("destroy"),s&&"string"==typeof t&&n.resizable("option","handles",t),s||t===!1||this._makeResizable()),"title"===e&&this._title(this.uiDialogTitlebar.find(".ui-dialog-title")))},_size:function(){var e,t,i,s=this.options;this.element.show().css({width:"auto",minHeight:0,maxHeight:"none",height:0}),s.minWidth>s.width&&(s.width=s.minWidth),e=this.uiDialog.css({height:"auto",width:s.width}).outerHeight(),t=Math.max(0,s.minHeight-e),i="number"==typeof s.maxHeight?Math.max(0,s.maxHeight-e):"none","auto"===s.height?this.element.css({minHeight:t,maxHeight:i,height:"auto"}):this.element.height(Math.max(0,s.height-e)),this.uiDialog.is(":data(ui-resizable)")&&this.uiDialog.resizable("option","minHeight",this._minHeight())},_blockFrames:function(){this.iframeBlocks=this.document.find("iframe").map(function(){var t=e(this);return e("<div>").css({position:"absolute",width:t.outerWidth(),height:t.outerHeight()}).appendTo(t.parent()).offset(t.offset())[0]})},_unblockFrames:function(){this.iframeBlocks&&(this.iframeBlocks.remove(),delete this.iframeBlocks)},_allowInteraction:function(t){return e(t.target).closest(".ui-dialog").length?!0:!!e(t.target).closest(".ui-datepicker").length},_createOverlay:function(){if(this.options.modal){var t=!0;this._delay(function(){t=!1}),this.document.data("ui-dialog-overlays")||this._on(this.document,{focusin:function(e){t||this._allowInteraction(e)||(e.preventDefault(),this._trackingInstances()[0]._focusTabbable())}}),this.overlay=e("<div>").addClass("ui-widget-overlay ui-front").appendTo(this._appendTo()),this._on(this.overlay,{mousedown:"_keepFocus"}),this.document.data("ui-dialog-overlays",(this.document.data("ui-dialog-overlays")||0)+1)}},_destroyOverlay:function(){if(this.options.modal&&this.overlay){var e=this.document.data("ui-dialog-overlays")-1;e?this.document.data("ui-dialog-overlays",e):this.document.unbind("focusin").removeData("ui-dialog-overlays"),this.overlay.remove(),this.overlay=null}}}),e.widget("ui.slider",e.ui.mouse,{version:"1.11.4",widgetEventPrefix:"slide",options:{animate:!1,distance:0,max:100,min:0,orientation:"horizontal",range:!1,step:1,value:0,values:null,change:null,slide:null,start:null,stop:null},numPages:5,_create:function(){this._keySliding=!1,this._mouseSliding=!1,this._animateOff=!0,this._handleIndex=null,this._detectOrientation(),this._mouseInit(),this._calculateNewMax(),this.element.addClass("ui-slider ui-slider-"+this.orientation+" ui-widget"+" ui-widget-content"+" ui-corner-all"),this._refresh(),this._setOption("disabled",this.options.disabled),this._animateOff=!1},_refresh:function(){this._createRange(),this._createHandles(),this._setupEvents(),this._refreshValue()},_createHandles:function(){var t,i,s=this.options,n=this.element.find(".ui-slider-handle").addClass("ui-state-default ui-corner-all"),a="<span class='ui-slider-handle ui-state-default ui-corner-all' tabindex='0'></span>",o=[];for(i=s.values&&s.values.length||1,n.length>i&&(n.slice(i).remove(),n=n.slice(0,i)),t=n.length;i>t;t++)o.push(a);this.handles=n.add(e(o.join("")).appendTo(this.element)),this.handle=this.handles.eq(0),this.handles.each(function(t){e(this).data("ui-slider-handle-index",t)})},_createRange:function(){var t=this.options,i="";t.range?(t.range===!0&&(t.values?t.values.length&&2!==t.values.length?t.values=[t.values[0],t.values[0]]:e.isArray(t.values)&&(t.values=t.values.slice(0)):t.values=[this._valueMin(),this._valueMin()]),this.range&&this.range.length?this.range.removeClass("ui-slider-range-min ui-slider-range-max").css({left:"",bottom:""}):(this.range=e("<div></div>").appendTo(this.element),i="ui-slider-range ui-widget-header ui-corner-all"),this.range.addClass(i+("min"===t.range||"max"===t.range?" ui-slider-range-"+t.range:""))):(this.range&&this.range.remove(),this.range=null)},_setupEvents:function(){this._off(this.handles),this._on(this.handles,this._handleEvents),this._hoverable(this.handles),this._focusable(this.handles)},_destroy:function(){this.handles.remove(),this.range&&this.range.remove(),this.element.removeClass("ui-slider ui-slider-horizontal ui-slider-vertical ui-widget ui-widget-content ui-corner-all"),this._mouseDestroy()},_mouseCapture:function(t){var i,s,n,a,o,r,h,l,u=this,c=this.options;return c.disabled?!1:(this.elementSize={width:this.element.outerWidth(),height:this.element.outerHeight()},this.elementOffset=this.element.offset(),i={x:t.pageX,y:t.pageY},s=this._normValueFromMouse(i),n=this._valueMax()-this._valueMin()+1,this.handles.each(function(t){var i=Math.abs(s-u.values(t));(n>i||n===i&&(t===u._lastChangedValue||u.values(t)===c.min))&&(n=i,a=e(this),o=t)}),r=this._start(t,o),r===!1?!1:(this._mouseSliding=!0,this._handleIndex=o,a.addClass("ui-state-active").focus(),h=a.offset(),l=!e(t.target).parents().addBack().is(".ui-slider-handle"),this._clickOffset=l?{left:0,top:0}:{left:t.pageX-h.left-a.width()/2,top:t.pageY-h.top-a.height()/2-(parseInt(a.css("borderTopWidth"),10)||0)-(parseInt(a.css("borderBottomWidth"),10)||0)+(parseInt(a.css("marginTop"),10)||0)},this.handles.hasClass("ui-state-hover")||this._slide(t,o,s),this._animateOff=!0,!0))},_mouseStart:function(){return!0},_mouseDrag:function(e){var t={x:e.pageX,y:e.pageY},i=this._normValueFromMouse(t);return this._slide(e,this._handleIndex,i),!1},_mouseStop:function(e){return this.handles.removeClass("ui-state-active"),this._mouseSliding=!1,this._stop(e,this._handleIndex),this._change(e,this._handleIndex),this._handleIndex=null,this._clickOffset=null,this._animateOff=!1,!1},_detectOrientation:function(){this.orientation="vertical"===this.options.orientation?"vertical":"horizontal"},_normValueFromMouse:function(e){var t,i,s,n,a;return"horizontal"===this.orientation?(t=this.elementSize.width,i=e.x-this.elementOffset.left-(this._clickOffset?this._clickOffset.left:0)):(t=this.elementSize.height,i=e.y-this.elementOffset.top-(this._clickOffset?this._clickOffset.top:0)),s=i/t,s>1&&(s=1),0>s&&(s=0),"vertical"===this.orientation&&(s=1-s),n=this._valueMax()-this._valueMin(),a=this._valueMin()+s*n,this._trimAlignValue(a)},_start:function(e,t){var i={handle:this.handles[t],value:this.value()};return this.options.values&&this.options.values.length&&(i.value=this.values(t),i.values=this.values()),this._trigger("start",e,i)},_slide:function(e,t,i){var s,n,a;this.options.values&&this.options.values.length?(s=this.values(t?0:1),2===this.options.values.length&&this.options.range===!0&&(0===t&&i>s||1===t&&s>i)&&(i=s),i!==this.values(t)&&(n=this.values(),n[t]=i,a=this._trigger("slide",e,{handle:this.handles[t],value:i,values:n}),s=this.values(t?0:1),a!==!1&&this.values(t,i))):i!==this.value()&&(a=this._trigger("slide",e,{handle:this.handles[t],value:i}),a!==!1&&this.value(i))},_stop:function(e,t){var i={handle:this.handles[t],value:this.value()};this.options.values&&this.options.values.length&&(i.value=this.values(t),i.values=this.values()),this._trigger("stop",e,i)},_change:function(e,t){if(!this._keySliding&&!this._mouseSliding){var i={handle:this.handles[t],value:this.value()};this.options.values&&this.options.values.length&&(i.value=this.values(t),i.values=this.values()),this._lastChangedValue=t,this._trigger("change",e,i)}},value:function(e){return arguments.length?(this.options.value=this._trimAlignValue(e),this._refreshValue(),this._change(null,0),void 0):this._value()},values:function(t,i){var s,n,a;if(arguments.length>1)return this.options.values[t]=this._trimAlignValue(i),this._refreshValue(),this._change(null,t),void 0;if(!arguments.length)return this._values();if(!e.isArray(arguments[0]))return this.options.values&&this.options.values.length?this._values(t):this.value();for(s=this.options.values,n=arguments[0],a=0;s.length>a;a+=1)s[a]=this._trimAlignValue(n[a]),this._change(null,a);this._refreshValue()},_setOption:function(t,i){var s,n=0;switch("range"===t&&this.options.range===!0&&("min"===i?(this.options.value=this._values(0),this.options.values=null):"max"===i&&(this.options.value=this._values(this.options.values.length-1),this.options.values=null)),e.isArray(this.options.values)&&(n=this.options.values.length),"disabled"===t&&this.element.toggleClass("ui-state-disabled",!!i),this._super(t,i),t){case"orientation":this._detectOrientation(),this.element.removeClass("ui-slider-horizontal ui-slider-vertical").addClass("ui-slider-"+this.orientation),this._refreshValue(),this.handles.css("horizontal"===i?"bottom":"left","");break;case"value":this._animateOff=!0,this._refreshValue(),this._change(null,0),this._animateOff=!1;break;case"values":for(this._animateOff=!0,this._refreshValue(),s=0;n>s;s+=1)this._change(null,s);this._animateOff=!1;break;case"step":case"min":case"max":this._animateOff=!0,this._calculateNewMax(),this._refreshValue(),this._animateOff=!1;break;case"range":this._animateOff=!0,this._refresh(),this._animateOff=!1}},_value:function(){var e=this.options.value;return e=this._trimAlignValue(e)},_values:function(e){var t,i,s;if(arguments.length)return t=this.options.values[e],t=this._trimAlignValue(t);if(this.options.values&&this.options.values.length){for(i=this.options.values.slice(),s=0;i.length>s;s+=1)i[s]=this._trimAlignValue(i[s]);return i}return[]},_trimAlignValue:function(e){if(this._valueMin()>=e)return this._valueMin();if(e>=this._valueMax())return this._valueMax();var t=this.options.step>0?this.options.step:1,i=(e-this._valueMin())%t,s=e-i;return 2*Math.abs(i)>=t&&(s+=i>0?t:-t),parseFloat(s.toFixed(5))},_calculateNewMax:function(){var e=this.options.max,t=this._valueMin(),i=this.options.step,s=Math.floor(+(e-t).toFixed(this._precision())/i)*i;e=s+t,this.max=parseFloat(e.toFixed(this._precision()))},_precision:function(){var e=this._precisionOf(this.options.step);return null!==this.options.min&&(e=Math.max(e,this._precisionOf(this.options.min))),e},_precisionOf:function(e){var t=""+e,i=t.indexOf(".");return-1===i?0:t.length-i-1},_valueMin:function(){return this.options.min},_valueMax:function(){return this.max},_refreshValue:function(){var t,i,s,n,a,o=this.options.range,r=this.options,h=this,l=this._animateOff?!1:r.animate,u={};this.options.values&&this.options.values.length?this.handles.each(function(s){i=100*((h.values(s)-h._valueMin())/(h._valueMax()-h._valueMin())),u["horizontal"===h.orientation?"left":"bottom"]=i+"%",e(this).stop(1,1)[l?"animate":"css"](u,r.animate),h.options.range===!0&&("horizontal"===h.orientation?(0===s&&h.range.stop(1,1)[l?"animate":"css"]({left:i+"%"},r.animate),1===s&&h.range[l?"animate":"css"]({width:i-t+"%"},{queue:!1,duration:r.animate})):(0===s&&h.range.stop(1,1)[l?"animate":"css"]({bottom:i+"%"},r.animate),1===s&&h.range[l?"animate":"css"]({height:i-t+"%"},{queue:!1,duration:r.animate}))),t=i}):(s=this.value(),n=this._valueMin(),a=this._valueMax(),i=a!==n?100*((s-n)/(a-n)):0,u["horizontal"===this.orientation?"left":"bottom"]=i+"%",this.handle.stop(1,1)[l?"animate":"css"](u,r.animate),"min"===o&&"horizontal"===this.orientation&&this.range.stop(1,1)[l?"animate":"css"]({width:i+"%"},r.animate),"max"===o&&"horizontal"===this.orientation&&this.range[l?"animate":"css"]({width:100-i+"%"},{queue:!1,duration:r.animate}),"min"===o&&"vertical"===this.orientation&&this.range.stop(1,1)[l?"animate":"css"]({height:i+"%"},r.animate),"max"===o&&"vertical"===this.orientation&&this.range[l?"animate":"css"]({height:100-i+"%"},{queue:!1,duration:r.animate}))},_handleEvents:{keydown:function(t){var i,s,n,a,o=e(t.target).data("ui-slider-handle-index");switch(t.keyCode){case e.ui.keyCode.HOME:case e.ui.keyCode.END:case e.ui.keyCode.PAGE_UP:case e.ui.keyCode.PAGE_DOWN:case e.ui.keyCode.UP:case e.ui.keyCode.RIGHT:case e.ui.keyCode.DOWN:case e.ui.keyCode.LEFT:if(t.preventDefault(),!this._keySliding&&(this._keySliding=!0,e(t.target).addClass("ui-state-active"),i=this._start(t,o),i===!1))return}switch(a=this.options.step,s=n=this.options.values&&this.options.values.length?this.values(o):this.value(),t.keyCode){case e.ui.keyCode.HOME:n=this._valueMin();break;case e.ui.keyCode.END:n=this._valueMax();break;case e.ui.keyCode.PAGE_UP:n=this._trimAlignValue(s+(this._valueMax()-this._valueMin())/this.numPages);break;case e.ui.keyCode.PAGE_DOWN:n=this._trimAlignValue(s-(this._valueMax()-this._valueMin())/this.numPages);break;case e.ui.keyCode.UP:case e.ui.keyCode.RIGHT:if(s===this._valueMax())return;n=this._trimAlignValue(s+a);break;case e.ui.keyCode.DOWN:case e.ui.keyCode.LEFT:if(s===this._valueMin())return;n=this._trimAlignValue(s-a)}this._slide(t,o,n)},keyup:function(t){var i=e(t.target).data("ui-slider-handle-index");this._keySliding&&(this._keySliding=!1,this._stop(t,i),this._change(t,i),e(t.target).removeClass("ui-state-active"))}}})});

/** < /scripts-v2104/lib/jplugins/ui-1.11.4/jquery-ui.min.js **/


/** > /scripts-v2104/lib/jplugins/ui-1.8.14/i18n/jquery.ui.datepicker-it.js **/
/* Italian initialisation for the jQuery UI date picker plugin. */
/* Written by Antonello Pasella (antonello.pasella@gmail.com). */
jQuery(function($){
	$.datepicker.regional['it'] = {
		closeText: 'Chiudi',
		prevText: '&#x3c;Prec',
		nextText: 'Succ&#x3e;',
		currentText: 'Oggi',
		monthNames: ['Gennaio','Febbraio','Marzo','Aprile','Maggio','Giugno',
			'Luglio','Agosto','Settembre','Ottobre','Novembre','Dicembre'],
		monthNamesShort: ['Gen','Feb','Mar','Apr','Mag','Giu',
			'Lug','Ago','Set','Ott','Nov','Dic'],
		dayNames: ['Domenica','Luned&#236','Marted&#236','Mercoled&#236','Gioved&#236','Venerd&#236','Sabato'],
		dayNamesShort: ['Dom','Lun','Mar','Mer','Gio','Ven','Sab'],
		dayNamesMin: ['Do','Lu','Ma','Me','Gi','Ve','Sa'],
		weekHeader: 'Sm',
		dateFormat: 'dd/mm/yy',
		firstDay: 1,
		isRTL: false,
		showMonthAfterYear: false,
		yearSuffix: ''};
	$.datepicker.setDefaults($.datepicker.regional['it']);
});

/** < /scripts-v2104/lib/jplugins/ui-1.8.14/i18n/jquery.ui.datepicker-it.js **/

/** > /scripts-v2104/lib/jplugins/ui-1.8.14/jquery.ui.bugfix.js **/
var jqueryuiBugFix = {
	codeLang:  new String(),
    codeDir:  new String(),
    isChrome: false,
    listDateInput: [
    	'#search-dateIn-new',
    	'#search-dateOut-new',
    	'#search-dateIn-boo',
    	'#search-dateout-boo'
    ],

	_init: function() {
		var _h = document.getElementsByTagName("html")[0];
		this.codeLang = _h.attributes["lang"].value;

		try {this.codeDir = _h.attributes["dir"].value;} catch(e) {}

		this.isChrome = navigator.userAgent.indexOf('Chrome')== -1 ? false : true;
	},

	datepickerRtlAr: function() {
		if (this.codeLang == "ar" && this.isChrome==true) {
		    jQuery(this.listDateInput.join()).focus(function() {
		        jQuery('.ui-datepicker-wrapper #ui-datepicker-div').css('display', 'inline-table');
		    });
		} 
	}
};

jQuery(document).ready(function() {
	jqueryuiBugFix._init();
	jqueryuiBugFix.datepickerRtlAr();
});

/** < /scripts-v2104/lib/jplugins/ui-1.8.14/jquery.ui.bugfix.js **/

/** json local text **/
/** > /scripts-v2104/booking/common/i18n/booking-it.js **/
var i18n = {
        "topheader": {
                login: {
                    loginMail: "Con il tuo indirizzo e-mail"
                    , rememberMe: "Rimani connesso"
                    , aboutCookie: "questa funzionalità utilizza i cookie; per maggiori informazioni, fare  "
                    , cookieDisclaimer: "clic qui"
                    , loginSubmit: "COLLEGATI"
                    , forgetPwd: "Password dimenticata&nbsp;?"
                    , loginOr: "O"
                    , closeError: "Chiudi"
                    , loginAccount: "Utilizzando il tuo metodo preferito"
                    , loginFbAccount: "Connettiti con Facebook"
                    , notYetRegistered: "Non sei ancora iscritto ?"
                    , register: "Iscriviti"
                    , clubMember: "Soci ALL"
                    , firstConnection: " prima connessione? "
                    , clubMemberPwd: "Password/attivazione "
                }
                , register: {
                    pwdNotice: "Almeno 6 caratteri di cui uno numerico ed uno alfabetico"
                    , joinClub: "Aderisco gratuitamente al programma ALL"
                    , cguAccept: 'Facendo clic su  "Crea il mio conto", accetto'
                    , cguConditions: "le condizioni generali d’uso"
                    , cguClub: "Loyalty ALL"
                    , cguAccor: "del conto clienti"
                    , email: "E-mail *"
                    , pwd: "Password *"
                    , firstName: "Nome *"
                    , lastName: "Cognome *"
                    , address1: "ndirizzo *"
                    , address2: "Riga supplementare"
                    , zipCode: "Codice di avviamento postale *"
                    , city: "Città  *"
                    , alreadyCustomer: "Già un cliente ?"
                    , whyRegister: "Perché iscriversi ?"
                    , registerBecause: '<div class="acr-top-header-register-welcome-title">NON ASPETTARE!</div>' +
                        '<p>Trovi tutte le informazioni che ti occorrono per il tuo soggiorno (prenotazione, guida di viaggio e così via)</p>' +
                        '<p>Compila le tue preferenze per risparmiare tempo durante le prenotazioni</p>' +
                        '<p>Diventa socio del programma fedeltà ALL per godere di tariffe e vantaggi esclusivi</p>' +
                        '<p>Non perdere mai le nostre vendite private: fino al 40% di sconto presso i nostri hotel!</p>'
                }
                , pwd: {
                    forgetMessage: "Per un accesso più facile, inserisci il tuo indirizzo e-mail nello spazio sottostante. Per ragioni di sicurezza, riceverai la nuova password via e-mail nel giro di pochi minuti."
                    , title: "Password dimenticata"
                    , submit: "Conferma"
                    , confirmation: "Grazie per la richiesta. È stata inviata una e-mail all'indirizzo inserito."
                }
        },
    calendar: {
        datepickerFormater: 'dd/mm/yy',
        error: "Inserisci le date di soggiorno con il formato 31/05/2000 o seleziona le date dal calendario",
        errorDate: "Inserire per favore una data posteriore alla data odierna",
        arrivalAlt: "Data di arrivo",
        departureAlt: "Data di partenza",
        dateFormat: "^[0-9]{2}[/]{1}[0-9]{2}[/]{1}[0-9]{4}$",
        closePopin: "Chiudi",
        monthNames: ['Gennaio', 'Febbraio', 'Marzo', 'Aprile', 'Maggio', 'Giugno', 'Luglio', 'Agosto', 'Settembre', 'Ottobre', 'Novembre', 'Dicembre'],
        displayDateFormat: "%d/%m/%Y"
    },
    childrenage: {
        error: "Indicare l'età dei bambini"
    },
    destination: {
        error: "Inserisci una città, un paese o un codice hotel"
    },
    b2b: {
        error: "I campi in rosso sono errati o obbligatori",
        errorCal: "Seleziona la data di arrivo e la data di partenza"
    },
    maporama: {
        errorCity: "Inserire una città o un codice postale",
        errorCountry: "Selezionare un paese"
    },
    access: {
        APT1: "Aeroporto",
        BUS: "Bus",
        GARE: "Stazione",
        METR: "Metropolitana",
        TRAM: "Tram"
    },
    rubrique: {
        HO: " Hotel",
        RO: "Camere",
        BA: "Bar",
        RS: "Ristorante",
        SL: "I servizi",
        FA: "Famiglia",
        IN: "Centro Benessere",
        SP: "Spa",
        SO: "Benessere",
        SM: "Meetings",
        WD: "Eventi",
        DE: "Destinazione",
        FE: "Strutture extra",
        GO: "Golf",
        BU: "Lavoro",
        DD: "Sviluppo sostenibile",
        BR: "Colazione"
    },
    amenities: {
        free: "Gratis",
        notfree: "a pagamento"
    },
    tax: {
        since: "a partir da %x",
        from: "da %x a %y",
        cattering: "Tassa sui servizi di ristorazione (ove applicabile): ",
        lodging: "Tassa di soggiorno: ",
        OLTA:"Il totale include le seguenti tasse:",
        OLTAS:"Questi prezzi includono le seguenti tasse:",
        VAT : "",
        NOTOLTA:"Questi prezzi non includono le seguenti tasse: ",
        SUPPL:"Questi prezzi non includono le seguenti tasse: "
    },
    package: {
        fromLabel : 'Da',
        defaultTexteListing : 'Tutte le nostre offerte a tema',
        noResults: "Spiacenti, non abbiamo pacchetti da proporti per i criteri di ricerca scelti. Ti preghiamo di effettuare un'altra ricerca!",
        moreInfo: "[+] Per saperne di",
		lessInfo:"[-] Meno informazioni",
        condition: "* Prezzi a partire da. Offerta soggetta a condizioni e disponibilità dell'hotel e alla disponibilità dell'offerta nell'hotel prescelto. Consulta le condizioni di vendita della tariffa. A seconda del paese, i prezzi potrebbero non includere le tasse, includere solo l'IVA o includere tutte le tasse (IVA e tassa turistica). Se i prezzi non includono tutte le tasse, le relative tasse (IVA e/o tassa turistica) saranno indicate nelle seguenti fasi della procedura di prenotazione. Il prezzo è garantito solo al momento della prenotazione. ",
        btnEditCriteria: "Modifica i tuoi criteri di ricerca",
        seeCities: "Vedi le %x città"
    },
    buttons: {
        more: "Più info"
    },
    freenight: {
        valid_until:"Validi fino al:"
        ,cnxNeeded: "Per utilizzare Stay Plus è necessario collegarsi"
        ,connectez_vous: "Collegati!"
        ,err: {
            dbFiability : "Siamo spiacenti, Stay Plus non è disponibile al momento."
            }
    },
    hotelPrivateDeals: {
        breadCrumb: "Vendita privata"
    },
    travel: {
        footerMl: "*Le commissioni indicate sono quelle in vigore al momento della prenotazione per il tipo di camera selezionata (escluse prestazioni aggiuntive); sono possibili modifiche fino al momento del soggiorno. L'importo della commissione si basa sul costo del pernottamento e della prima colazione al netto di tutte le tasse (al netto di IVA e delle tasse locali)."
    },
    burnOnline: {
        txt1Up: "Hai",
        txt2Up: "punti. Approfittane e usali per le tue prenotazioni!",
        txt1Down: "Accumula punti su questo soggiorno, potrai usarli presto per prenotare!",
        txt2Down: "punti: Quando raggiungi 2.000 punti, puoi riscattarli con la tua prenotazione!",
        notAuth: "Identificati per accumulare più punti e usarli!",
        notmember : "Grazie alla tua fedeltà, ti attendono molti privilegi durante i tuoi viaggi.",
        memberBtn : "Diventa socio",
        memberConect: "Login"
    },
    alternativeDestination: {
        nonAvailable: "Tutti gli hotel della destinazione sono al completo nelle date richieste",
        noHotel: "Non abbiamo hotel da proporre per questa destinazione.",
        noParticipating: "La Stay Plus non è disponibile in questa destinazione*"
    },
    rates: {
        gao: "Questo hotel propone una tariffa scontata riservata alla vostra azienda nell’ambito di un’offerta globale per la rete di hotel Accor.",
        prefered: "Questo hotel propone una tariffa negoziata riservata alla vostra azienda"
    },
    wdr: {
        discount_picto_title:"Il miglior prezzo<br />per tutto l'anno<br />In esclusiva<br />solo per i soci<br />ALL"
        ,banner_title:"FINO AL <strong>{0}%</strong> DI SCONTO AGGIUNTIVO"
        ,banner_txt: "IN ESCLUSIVA SOLO PER I SOCI ALL"
        ,backup_discount_picto_title:"Log you and discover our exclusives rates for ALL"
        ,price_tooltip_lcah:"Questa tariffa è valida solo per i soci ALL."
        ,price_tooltip_no_lcah:"Diventa un socio ALL per usufruire di questa tariffa.È semplice, veloce e gratuito!"
        ,no_member_price :"Tariffa per utenti<br />non soci :"
        ,member_only:"Solo per i soci"
    }

};

var i18n_LH = {
    hotelsListHeadband: {
        oneHOTELS100: "{0} hotel corrisponde all'insieme dei criteri richiesti.",
        multiHOTELS100: "{0} hotel corrispondono all'insieme dei criteri richiesti.",
        oneHOTELS100MARQUE: "{0} hotel{1} corrisponde all'insieme dei criteri richiesti.",
        multiHOTELS100MARQUE: "{0} hotel{1} corrispondono all'insieme dei criteri richiesti.",
        oneHOTELS100IFRATED: "{0} hotel corrisponde alle tariffe specificate e all'insieme dei criteri richiesti.",
        multiHOTELS100IFRATED: "{0} hotel corrispondono alle tariffe specificate e all'insieme dei criteri richiesti.",
        oneHOTELS100IFRATEDMARQUE: "{0} hotel{1} corrisponde alle tariffe specificate e all'insieme dei criteri richiesti.",
        multiHOTELS100IFRATEDMARQUE: "{0} hotel{1} corrispondono alle tariffe specificate e all'insieme dei criteri richiesti.",
        oneHOTELS50brandHotels: "{0} hotel{1} corrisponde parzialmente ai tuoi criteri di ricerca.<br /><span>Di seguito trovi quello disponibile nelle date richieste per questa destinazione.</span>",
        oneHOTELS50complementaryBrandHotels: "{0} hotel del gruppo Accor corrisponde parzialmente ai tuoi criteri di ricerca.<br /><span>Di seguito trovi quello disponibile nelle date richieste per questa destinazione.</span>",
        multiHOTELS50brandHotels: "{0} hotel{1} corrispondono parzialmente ai tuoi criteri di ricerca.<br /><span>Di seguito troverai quello disponibile nelle date richieste per questa destinazione.</span>",
        multiHOTELS50complementaryBrandHotels: "{0} hotel del gruppo Accor corrispondono parzialmente ai tuoi criteri di ricerca.<br /><span>Di seguito troverai quello disponibile nelle date richieste per questa destinazione.</span>",
        oneHOTELS50IFRATEDbrandHotels: "{0} hotel{1} è disponibile nelle date richieste per questa destinazione, ma non corrisponde alle tariffe specificate.",
        oneHOTELS50IFRATEDcomplementaryBrandHotels: "{0} hotel del gruppo Accor è disponibile nelle date richieste per questa destinazione, ma non corrisponde alle tariffe specificate.",
        multiHOTELS50IFRATEDbrandHotels: "{0} hotel{1} sono disponibili nelle date richieste per questa destinazione, ma non corrispondono alle tariffe specificate.<br /><span>Consulta l'elenco riportato di seguito.</span>",
        multiHOTELS50IFRATEDcomplementaryBrandHotels: "{0} hotel del gruppo Accor sono disponibili nelle date richieste per questa destinazione, ma non corrispondono alle tariffe specificate.<br /><span>Consulta l'elenco riportato di seguito.</span>",
        oneHOTELS50RATEDbrandHotels: "{0} hotel{1} corrispondono alle tariffe specificate e parzialmente ai tuoi criteri di ricerca.",
        oneHOTELS50RATEDcomplementaryBrandHotels: "{0} hotel del gruppo Accor corrisponde alle tariffe specificate e parzialmente ai tuoi criteri di ricerca.",
        multiHOTELS50RATEDbrandHotels: "{0} hotel{1} corrispondono alle tariffe specificate e parzialmente ai tuoi criteri di ricerca.<br /><span>Consulta l'elenco riportato di seguito.</span>",
        multiHOTELS50RATEDcomplementaryBrandHotels: "{0} hotel del gruppo Accor corrispondono alle tariffe specificate e parzialmente ai tuoi criteri di ricerca.<br /><span>Consulta l'elenco riportato di seguito.</span>",
        oneHOTELSKO: "L'hotel{0} indicato di seguito non è disponibile nelle date richieste",
        multiHOTELSKO: "I {0} hotel{1} riportati di seguito non sono disponibili nelle date richieste",
        oneCOMPBRANDS: "{0} hotel del gruppo Accor corrisponde all'insieme dei criteri richiesti.<br /><span>Di seguito troverai quello disponibile per le date e i criteri richiesti per questa destinazione.</span>",
        multiCOMPBRANDS: "{0} hotel del gruppo Accor corrispondono all'insieme dei criteri richiesti.<br /><span>Di seguito trovi quelli disponibili per le date e i criteri richiesti per questa destinazione.</span>",
        oneCOMPBRANDSIFRATED: "{0} hotel del gruppo Accor corrisponde alle tariffe specificate e all'insieme dei criteri richiesti.",
        multiCOMPBRANDSIFRATED: "{0} hotel del gruppo Accor corrispondono alle tariffe specificate e all'insieme dei criteri richiesti.<br /><span>Consulta l'elenco riportato di seguito.</span>"
    },
    hotelsListHeadbandRFP: {
        oneHOTELS100: "{0} hotel corrisponde a tutti i vostri criteri di ricerca.<br /><span>E' possibile aggiungere 3 hotel alla selezione (carrello in alto), confrontarli contemporaneamente e lanciare una richiesta di preventivo.</span>",
        multiHOTELS100: "{0} hotel corrispondono a tutti i vostri criteri di ricerca.<br /><span>E' possibile aggiungere 3 hotel alla selezione (carrello in alto), confrontarli contemporaneamente e lanciare una richiesta di preventivo.</span>",
        oneHOTELS100IFRATED: "{0} hotel corrisponde a tutti i vostri criteri di ricerca.<br /><span>E' possibile aggiungere 3 hotel alla selezione (carrello in alto), confrontarli contemporaneamente e lanciare una richiesta di preventivo.</span>",
        multiHOTELS100IFRATED: "{0} hotel corrispondono a tutti i vostri criteri di ricerca.<br /><span>E' possibile aggiungere 3 hotel alla selezione (carrello in alto), confrontarli contemporaneamente e lanciare una richiesta di preventivo.</span>",
        oneHOTELS50brandHotels: "{0} hotel corrisponde parzialmente ai vostri criteri di ricerca.<br /><span>E' possibile aggiungere 3 hotel alla selezione (carrello in alto), confrontarli contemporaneamente e lanciare una richiesta di preventivo.</span>",
        oneHOTELS50complementaryBrandHotels: "{0} hotel corrisponde parzialmente ai vostri criteri di ricerca.<br /><span>E' possibile aggiungere 3 hotel alla selezione (carrello in alto), confrontarli contemporaneamente e lanciare una richiesta di preventivo.</span>",
        multiHOTELS50brandHotels: "{0} hotel corrispondono parzialmente ai vostri criteri di ricerca.<br /><span>E' possibile aggiungere 3 hotel alla selezione (carrello in alto), confrontarli contemporaneamente e lanciare una richiesta di preventivo.</span>",
        multiHOTELS50complementaryBrandHotels: "{0} hotel corrispondono parzialmente ai vostri criteri di ricerca.<br /><span>E' possibile aggiungere 3 hotel alla selezione (carrello in alto), confrontarli contemporaneamente e lanciare una richiesta di preventivo.</span>",
        oneHOTELS50IFRATEDbrandHotels: "{0} hotel corrisponde parzialmente ai vostri criteri di ricerca.<br /><span>E' possibile aggiungere 3 hotel alla selezione (carrello in alto), confrontarli contemporaneamente e lanciare una richiesta di preventivo.</span>",
        oneHOTELS50IFRATEDcomplementaryBrandHotels: "{0} hotel corrisponde parzialmente ai vostri criteri di ricerca.<br /><span>E' possibile aggiungere 3 hotel alla selezione (carrello in alto), confrontarli contemporaneamente e lanciare una richiesta di preventivo.</span>",
        multiHOTELS50IFRATEDbrandHotels: "{0} hotel corrispondono parzialmente ai vostri criteri di ricerca.<br /><span>E' possibile aggiungere 3 hotel alla selezione (carrello in alto), confrontarli contemporaneamente e lanciare una richiesta di preventivo.</span>",
        multiHOTELS50IFRATEDcomplementaryBrandHotels: "{0} hotel corrispondono parzialmente ai vostri criteri di ricerca.<br /><span>E' possibile aggiungere 3 hotel alla selezione (carrello in alto), confrontarli contemporaneamente e lanciare una richiesta di preventivo.</span>",
        oneHOTELSKO: "{0} hotel non disponibile.",
        multiHOTELSKO: "{0} hotel non disponibili."
    },
    hotelsListHeadbandBOL: {
        oneHOTELS100: "{0} hotel corrisponde a tutti i vostri criteri di ricerca.<br /><span>Puoi aggiungere altri hotel alla selezione, confrontarli e richiedere un’opzione. .</span>",
        multiHOTELS100: "{0} hotel corrispondono a tutti i vostri criteri di ricerca.<br /><span>Puoi aggiungere altri hotel alla selezione, confrontarli e richiedere un’opzione. .</span>",
        oneHOTELS100IFRATED: "{0} hotel corrisponde a tutti i vostri criteri di ricerca.<br /><span>Puoi aggiungere altri hotel alla selezione, confrontarli e richiedere un’opzione. .</span>",
        multiHOTELS100IFRATED: "{0} hotel corrispondono a tutti i vostri criteri di ricerca.<br /><span>Puoi aggiungere altri hotel alla selezione, confrontarli e richiedere un’opzione. .</span>",
        oneHOTELS50brandHotels: "{0} hotel corrisponde parzialmente ai vostri criteri di ricerca.<br /><span>Puoi aggiungere altri hotel alla selezione, confrontarli e richiedere un’opzione. .</span>",
        oneHOTELS50complementaryBrandHotels: "{0} hotel corrisponde parzialmente ai vostri criteri di ricerca.<br /><span>Puoi aggiungere altri hotel alla selezione, confrontarli e richiedere un’opzione. .</span>",
        multiHOTELS50brandHotels: "{0} hotel corrispondono parzialmente ai vostri criteri di ricerca.<br /><span>Puoi aggiungere altri hotel alla selezione, confrontarli e richiedere un’opzione. .</span>",
        multiHOTELS50complementaryBrandHotels: "{0} hotel corrispondono parzialmente ai vostri criteri di ricerca.<br /><span>Puoi aggiungere altri hotel alla selezione, confrontarli e richiedere un’opzione. .</span>",
        oneHOTELSKO: "{0} hotel non disponibile.",
        multiHOTELSKO: "{0} hotel non disponibili."
    },
    hotelsListHeadbandRFPandBOL: {
        oneHOTELS100: "{0} hotel corrisponde a tutti i vostri criteri di ricerca.<br /><span>Indicate un'opzione o aggiungete questo hotel alla vostra selezione. Potrete quindi confrontare o richiedere un preventivo a più hotel contemporaneamente</span>",
        multiHOTELS100: "{0} hotel corrispondono a tutti i vostri criteri di ricerca.<br /><span>Indicate un'opzione o aggiungete questo hotel alla vostra selezione. Potrete quindi confrontare o richiedere un preventivo a più hotel contemporaneamente</span>",
        oneHOTELS100IFRATED: "{0} hotel corrisponde a tutti i vostri criteri di ricerca.<br /><span>Indicate un'opzione o aggiungete questo hotel alla vostra selezione. Potrete quindi confrontare o richiedere un preventivo a più hotel contemporaneamente</span>",
        multiHOTELS100IFRATED: "{0} hotel corrispondono a tutti i vostri criteri di ricerca.<br /><span>Indicate un'opzione o aggiungete questo hotel alla vostra selezione. Potrete quindi confrontare o richiedere un preventivo a più hotel contemporaneamente</span>",
        oneHOTELS50brandHotels: "{0} hotel corrisponde parzialmente ai vostri criteri di ricerca.<br /><span>Indicate un'opzione o aggiungete questo hotel alla vostra selezione. Potrete quindi confrontare o richiedere un preventivo a più hotel contemporaneamente</span>",
        oneHOTELS50complementaryBrandHotels: "{0} hotel corrisponde parzialmente ai vostri criteri di ricerca.<br /><span>Indicate un'opzione o aggiungete questo hotel alla vostra selezione. Potrete quindi confrontare o richiedere un preventivo a più hotel contemporaneamente</span>",
        multiHOTELS50brandHotels: "{0} hotel corrispondono parzialmente ai vostri criteri di ricerca.<br /><span>Indicate un'opzione o aggiungete questo hotel alla vostra selezione. Potrete quindi confrontare o richiedere un preventivo a più hotel contemporaneamente</span>",
        multiHOTELS50complementaryBrandHotels: "{0} hotel corrispondono parzialmente ai vostri criteri di ricerca.<br /><span>Indicate un'opzione o aggiungete questo hotel alla vostra selezione. Potrete quindi confrontare o richiedere un preventivo a più hotel contemporaneamente</span>",
        oneHOTELSKO: "{0} hotel non disponibile.",
        multiHOTELSKO: "{0} hotel non disponibili."
    },
    hotelsLastRooms : {
        lastRoomsText : "Ultima/e camera/e disponibile/i a questa tariffa !",
        lastRoomsTooltip : "Ci sono meno di {0} camere disponibili a questa tariffa."
    },
    hotelPriceStay: {
        legend : "Prezzo totale per {0} notti"
    },
     brandx : {
        messageAccorBrand :"MARCHI ACCOR",
        messageSeeSelection:"VISUALIZZA SELEZIONE"
    },
    pictoLch : {
        leClubAh :"ALL",
        PartnerLch:"Partner",
        ParticipantLch:"Partecipante",
        NotEligible:"Non accettata",
        NotPartnerLchTooltip:"<strong>ALL non accettata</strong></br>ALL non accettata in questo hotel.",
        PartnerLchTooltip:"Questo hotel è partner di ALL.</br>Guadagna punti prenotando questo hotel.",
        ParticipantLchTooltip:"Questo hotel partecipa al programma ALL</br>Beneficia di tutti i vantaggi riservati ai soci e approfitta di un soggiorno eccezionale con ALL.",
        PartnerLchTooltipHH:"Soggiorna, accumula punti H-World e convertili facilmente in punti ALL."

    },
    familyBanner : {
        title: "SCOPRI LE NOSTRE OFFERTE <span>FAMIGLIA</span>",
        advantages: [
            "50% di sconto sulla 2<sup>ᵃ</sup> camera",
            "Sistemazione gratuita dei bambini nella vostra camera",
            "Vantaggi per la colazione dei bambini"
        ],
        titleCallCenter: "PRENOTA PER TELEFONO!",
        callcenters: [
            {
                flag: 'it',
                number: '+39 02 38 59 40 12',
                mention: "Dal lunedì alla domenica, 08:00-22:00, fuso orario di Roma. Telecom italia. Costo locale da Italia"
            }
        ],
        mentionBanner:"offerta soggetta alla partecipazone del marchio nel paese",
    },
    /**
    /**
     * Permet de gérer des textes à trous
     * @param dico	: dictionnaire dans lequel on va chercher le texte
     * @param cat	: nom de la clé du parent dans le i18n
     * @param str	: nom de la clé de l'élément voulu dans le i18n
     * @param ...	: tout les paramètres qui suivront seront les éléments à afficher dans les trous du texte
    **/
    getFormatedText : function (dico, cat, str) {
        dico = eval(dico); // Permet de transformer le string en objet
        var str, i = 3; // i = 3 car on a trois arguments déclarés dans la fonction
        if (dico[cat] && dico[cat][str]) {
            str = dico[cat][str];
        }
        while (i < arguments.length) {
            str = str.replace("{" + (i - 3) + "}", arguments[i++]);
        }
        return str;
    }
};

var i18n_MEE = {
    form_home: {
        error: "La preghiamo di inserire le informazioni mancanti. I campi indicati in rosso sono errati o obbligatori.",
        errorDestination: "Inserisci una città, un paese o un codice hotel.",
        errorNbPax: "Per prenotare una sala riunioni è richiesto un numero minimo di 7 partecipanti.",
        errorNbPresta: "Per continuare la prenotazione è necessario selezionare almeno un servizio."
    },
    meeting_popin: {
        popinRoomPricePerDayTitle: "Riepilogo delle sale riunioni",
        titleRoom: "Sala riunioni principale",
        pcpRoomTitle: "Sala principale",
        titleAdditionnalRoom: "Sala(e) riunioni supplementare(i)",
        pcpAdditionnalRoomTitle: "Sala(e) riunioni supplementare(i)",
        titleSummaryBedroom: "Riepilogo delle camere",
        titleDetailByNight: "Dettagli per notte",
        mention: "Prezzo al giorno e per persona",
        mention2: "Prezzo a notte e per camera",
        popinFoodPricePerDayTitle: "Pause e pranzo",
        fodbrev: "Pause e pranzo *",
        include: "incluse",
        popinFullPricePerDayTitle: "Dettaglio prezzo al giorno vostra selezione",
        currency: "Valuta",
        breakfast: "Colazione",
        people: "persone",
        price: "Prezzo",
        titleEventCalendar: "Calendario del vostro evento"
    },
    meeting_room: {
        dateFormat: "dd/mm/yy", // exemple de rendu : 23/12/1986
        displayDescriptionConfig: "Vedi la descrizione dell'allestimento",
        closeDescriptionConfig: "Chiudere la descrizione dell'allestimento",
        displayDescriptionRoom: "Vedi la descrizione del tipo di sala ",
        closeDescriptionRoom: "Chiudere la descrizione del tipo di sala",
        capacityBedroom: "Capacità: da {0} a {1} persone",
        mentionOne: "Al giorno / persona",
        nbparticipant: "Numero di partecipanti",
        dateIn: "Data di arrivo",
        nbDay: "Numero di giorni",
        date: "Date",
        add: "Aggiungere",
        cancel: "Annullare",
        changeRequest: "Modificare la richiesta",
        detailsPrice: "Prezzo medio / Giorno / Persona",
        dateInAndDateOut: "dal {0} al {1}"
    },
    meeting_bedroom: {
        dateFormatId: "dd-mm-y", // exemple de rendu : 23-12-86
        dateFormat: "dd/mm/yy", // exemple de rendu : 23/12/1986
        dateFormatTab: "dd/mm/y", // exemple de rendu : 23/12/86
        tootipDetailsBedroom: "Prezzo per camera e per notte",
        bedroom1Pers: "camera per 1 persona",
        bedroom2Pers: "camera per 2 persone",
        linkDetailNight: "Prezzo a notte / camera ",
        mentionOne: "Prezzo per notte/persona colazione inclusa",
        displayConf: "Vedere la configurazione dei giorni precedenti",
        displayOtherBedroom: "Vedere gli altri tipi di camere ",
        questionSaveDay: "Desideri salvare le modifiche della configurazione delle camere per questo giorno?",
        saveDay: "Salva modifiche",
        questionLastDay: "Avete bisogno di una tipologia di camere diversa per il giorno seguente?",
        lastDay: "Vedere il giorno seguente",
        questionFinishBedroom: "Avete terminato la composizione delle camere?",
        finishBedroom: "Confermare",
        questionBookSame: "Desiderate la stessa tipologia di camere per il resto del soggiorno?",
        BookSame: "Confermare  la stessa tipologia",
        nbBedroomNight: "Numero di camere a notte ",
        typeBedroom: "Tipo di camera",
        nbBedroomNightWithSpan: "Numero di <span>camere a notte</span>",
        resumeBedroom1Pers: "Camera(e) per 1 persona",
        resumeBedroom2Pers: "Camera(e) per 2 persone",
        breakfast: "(colazione inclusa)",
        tooltipTVA: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ultrices turpis eget diam molestie id tincidunt enimirir condimentum.",
        errorMessageMinBedroom: "USono richieste un minimo di 7 camere al giorno",
        errorMessageMaxBedroom: "È possibile prenotare un massimo di {0} camere",
        day: "Giorno"
    },
    meeting_tax: {
        title: "Totale della vostra selezione",
        total: "Totale",
        totalTTC: "Totale tasse incluse",
        totalHT: "Totale tasse escluse",
        TVA: "Tasse"
    },
    yourSelection: {
        deleteItem: "Elimina",
        priceOnRequest: "Prezzo su richiesta",
        unavailable: "Non disponibile",
        BOL: "Fissare un'opzione",
        BOL2: "Richiedere un' opzione",
        RFPOnline: "Preventivo online",
        RFPOnlineTooltip: "È stata selezionata una richiesta di preventivo per e-mail. Non è possibile selezionare contemporaneamente una richiesta di preventivo on-line.",
        RFPOffline: "Preventivo per e-mail",
        RFPOfflineTooltip: "È stata selezionata una richiesta di preventivo on-line. Non è possibile selezionare contemporaneamente una richiesta di preventivo per e-mail. ",
        deleteQuestion: "Volete eliminare questo hotel dalla vostra selezione?",
        buttonNo: "No",
        buttonYes: "Sì"
    },
    refineSearch: {
        select: "Seleziona",
        hotel: "hotel",
        hotels: "hotel"
    },
    hotelClosed: {
        message: "Siamo spiacenti, questo albergo non è disponibile. Vi invitiamo a:",
        back: "Torna alla pagina iniziale",
        linkHotel: "Visualizza la scheda completa de l'hotel"
    },
    backLink: {
        backListHotel: "Ritorno all'elenco hotel",
        backRoom: "Ritorno alla selezione delle sale riunioni",
        backBedroom: "Ritorno alla pagina camera"
    },
    loading: {
        'YouRequestIsBeingProcessed': "Elaborazione della richiesta in corso...",
        'PleaseWait': "Si prega attendere."
    }
};

/* Fidelity Subscription (FS) */
var i18n_FS = {
	fidelity: {
		moreInfoText : "Nascondi i dettagli della carta fedeltà o di iscrizione",
		moreInfoText2 : "Visualizza i dettagli della carta fedeltà o di iscrizione",
		cardSave: "Carte salvate",
		yourCards: "Carte fedeltà o di iscrizione",
		yourNumberCard: "Numero di carta fedeltà o di iscrizione",
		textHelp  : "Le carte fedeltà e di iscrizione consentono di usufruire di premi esclusivi quando si effettuano prenotazioni.",
		textNoCard : "Attualmente non disponi di una carta fedeltà o di iscrizione attiva.",
		discoverClubAccor : "Scopri ALL",
		consult : "Visualizza",
		cards : "le tue carte"
	}
};

var i18n_LOL = {
    loading: {
        YouRequestIsBeingProcessed: "Elaborazione della richiesta in corso...",
        PleaseWait: "Si prega attendere."
    },
    commonText : {
        requiredFields : "* Campi obbligatori",
        identification : "Codice identificativo*",
        yourFile : "Dossier",
        groupName : "Nome del gruppo*",
        destination : "Destinazione*",
        nbPersons : "Numero di persone*",
        minimum15 : "(minimo 15)",
        yourRooms : "Camere",
        arrivalDate : "Data di arrivo*",
        departureDate : "Data di partenza*",
        nights : "notte(i)",
        minimum8 : "(minimo 8)",
        doubleRooms : "Matrimoniale(i)",
        singleRooms : "Singola(e)",
        twinRooms : "Doppia(e)",
        tripleRooms : "Tripla(e)",
        nbRooms : "Numero di camere*",
        help : "Aide",
        rooms : "camera(e)",
        searchBtn : "Ricerca",
        budgetLegend : "Budget <em>(Tariffa media / Per notte / ½ doppia)</em> ",
        anyBudget : "Qualsiasi",
        RFPTooltip : "Questo tipo di camera non può essere prenotato on-line. Inviare una richiesta di preventivo agli hotel selezionati per verificare le tariffe e la disponibilità.",
        halfboardTooltip: "Cena di 3 portate, senza bevande",
        servicesLegend : "Servizi",
        leisureActivitiesLegend : "Attività per il tempo libero",
        placeholderlDate : "31/05/2000",
        currency: "Valuta",
        yes : "Sì",
        no : "No"
    },
    blocGroupBookingLight: {
        moreOptions : "Altre opzioni",
        clientCode : "Codice cliente (obligatorio)",
        contract : "Codice d’accesso",
        cityCountryHotelCode : "Città / Nazione / Codice dell'hotel"
    },
    advancedSearch : {
        mainContentTitle : "Organizzazione di un soggiorno di gruppo",
        roomsAndPersonsAttention : "Per una prenotazione di gruppo è richiesto un minimo di 8 camere e di 15 persone. Per gruppi inferiori alle 15 persone fare clic <a href=\"/engine/displayAdvancedSearch.action?cleanSession=true&type=default\">QUI</a> ed effettuare una prenotazione individuale.",
        enterBusinessID : "Immettere qui il codice cliente per iniziare la ricerca*",
        helpBusinessID : "Hai bisogno di aiuto per cercare il tuo codice indentificativo ?",
        roomTypeHelp : "Hai bisogno di aiuto per capire la differenza tra tipi di camere?",
        yourPreferences : "Preferenze"
    },
    hotelsListHotels: {
        hotel: {
            addToSelection: "Aggiungi alla selezione",
            compare: "Confronta",
            morePhotos: "Altre foto",
            fromLabel: "dal",
            cityCenter: "Centro città",
            theCityCenter: "centro città",
            placeOfInterest: "the place of interest",
            theHotel: "the hotel",
            viewMap: "Visualizza la mappa",
            perUnit: "Tariffa netta / Per notte / ½ doppia",
            averagePrice: "Average price/night",
            RFPOffline: "TARIFFA E DISPONIBILITÀ <br /> SU RICHIESTA",
            breakfast: "Prima colazione inclusa",
            halfboard: "Mezza pensione inclusa",
            notReservable: "Cannot be <br />reserved online",
            hotleSheet: "View detailed information on this hotel",
            notAvailable: "NON DISPONIBILE NELLE <br /> DATE SELEZIONATE",
            quotationButton: "Preventivo on-line",
            BOLTooltip: "Questo hotel è disponibile. Richiedi preventivo on-line.",
            sendRFP: "Invia una richiesta di preventivi",
            RFPTooltip: "L'hotel riceverà la richiesta e invierà un riscontro appena possibile.",
            photosTab: "Foto dell’hotel",
            descriptionTab: "Descrizione",
            yourHotel: "Hotel",
            highlights: "Punti di forza",
            services: "I servizi",
            accessTab: "Accesso",
            closeTabs: "Chiudi",
            diapoPrev: "Prev",
            diapoNext: "Next",
            FHLink: "Visualizza la scheda completa dell'hotel",
            loading: "Loading information..."
        },
        headBand : {
            HOTELS100 : "1 hotel è disponibile nelle date richieste e corrisponde a tutti i criteri.",
            multiHOTELS100 : "{0} hotel sono disponibili nelle date richieste e corrispondono a tutti i criteri.",
            HOTELS50 : "1 hotel è disponibile nelle date richieste e corrisponde parzialmente ai criteri.",
            multiHOTELS50 : "{0} hotel sono disponibili nelle date richieste e corrispondono parzialmente ai criteri.",
            HOTELSKO : "Il seguente hotel non è disponibile nelle date richieste. ",
            multiHOTELSKO : "I seguenti {0} hotel non sono disponibili nelle date richieste."
        },
        enlargeAuto: {
            byBrandNamesAndOtherHotels: "Puoi ampliare la tua area di ricerca agli hotel {0} e agli altri hotel del gruppo Accor alla seguente destinazione : {1}",
            byDestination: "Puoi ampliare la tua di ricerca alla seguente destinazione : {0}",
            expandSearch: "Amplia la ricerca"
        },
        enlargeManu: {
            byBrandNamesAndOtherHotelsWithRadius: "Puoi ampliare la tua area di ricerca agli hotel {0} e agli altri hotel del gruppo Accor in prossimità della destinazione entro un raggio di :",
            byDestinationWithRadius: "Puoi ampliare la tua ricerca in prossimità della destinazione entro un raggio di :",
            km: "Km",
            miles: "Miles"
        }
    },
    hotelsListTitle : {
        wordingError : {
            errorMessage : "Nessuna destinazione trovata per {0}. Prova ad effettuare una ricerca su {1}."
        },
        nbTotalHotels : {
            enlargeSearchNoHotelsFound : "Nessun hotel trovato per questa destinazione.",
            enlargeSearchOneHotelFound : "1 hotel trovato",
            enlargeSearchHotelsFound : "{0} hotel trovati",
            enlargeRadiusOneHotelFound : "1 hotel trovato in un raggio di {0} {1}",
            enlargeRadiusHotelsFound : "{0} hotel trovati in un raggio di {1} {2}",
            oneHotelFound : "1 hotel trovato.",
            hotelsFound : "hotel trovati."
        },
        nbHotels100 : {
            hotels50brandHotels : "Nessun hotel corrisponde all'insieme dei criteri richiesti.",
            hotels50brandHotelsKO : "Non abbiamo hotel da proporre per questa destinazione."
        },
        nbHotelsRated : {
            hotelsBrandHotels100KO : "Nessun hotel corrisponde alle tariffe specificate e all'insieme dei criteri richiesti."
        },
        minorZones : {
            listFirstOption : "Altra destinazione prescelta?"
        }
    },
    hotelsListFilters : {
        budgetLegend :  "Budget",
        budgetLegendUnit : "(Tariffa media / Per notte/ ½ doppia)",
        brandsLegend : "Marchi",
        accommodationTypeLegend : "Tipo di alloggio",
        under: "Meno di",
        over: "Oltre",
        de: "Da",
        to: "a"
    },
    refineSearch: {
    	header: "Attenzione, la tua richiesta corrisponde ad un numero troppo elevato di hotel. Restringi la ricerca nello spazio sottostante.",
    	select: "Seleziona",
        hotel: "hotel",
        hotels: "hotel"
    },
    popinBusinessID : {
        popinTitle : "Qual è il vostro codice identificativo per il login?",
        scTitle : "SC e Codice di accesso",
        scCodeText : "Il codice SC corrisponde al vostro codice cliente ACCOR. Tale codice vi viene fornito dal vostro gestore del conto. Il codice di accesso è obbligatorio e vi permette di accedere alle tariffe di gruppo ad hoc proposte dall'hotel in base alla disponibilità. Il codice vi viene fornito anche dal vostro gestore del conto.",
        scHowTo : "Come immettere il codice SC?",
        scExample : "Immettere il proprio codice a 11 cifre (senza spazi). <br /> Esempio: SC123456789",
        contractHowTo : "Come si inserisce il codice di accesso?",
        contractExample : " Inserite il codice di accesso a 10 caratteri (senza spazi). <br />Esempio: YH148GB156",
        iataTitle : "IATA / TIDS / CLIA / TRUE / RT",
        iataSubtitle : "IATA",
        iataText : "L'associazione internazionale per il trasporto aereo è un'associazione di linee aeree con sede a Ginevra che offre servizi internazionali e fissa procedure standard. La IATA accredita futuri agenti di viaggio in tutto il mondo. Tale certificazione include l'emissione di un codice identificativo, denominato numero IATA. I numeri IATA sono utilizzati come identificativo dell'agenzia di viaggio nelle prenotazioni per consentire ai fornitori, inclusi gli hotel, di riconoscere le commissioni.",
        tidsSubtitle : "TIDS",
        tidsText : "Destinato agli agenti di viaggio e ad altri intermediari di vendita nel settore turistico, Travel Industry Designator (TIDS) è un codice unico che consente il riconoscimento di prenotazioni da parte di tutti i fornitori del settore.",
        cliaSubtitle : "CLIA",
        cliaText : "Il numero CLIA è un codice identificativo emesso dalla Cruise Lines International Association (CLIA), associazione internazionale degli operatori di crociere. È un sistema che consente i venditori di identificare il venditore di un viaggio.",
        trueSubtitle : "TRUE",
        trueText : "Lo scopo esclusivo del sistema TRUE (Travel Retailer Universal Enumeration) è di aiutare gli agenti di viaggio e gli organizzatori di meeting nell'assegnazione di codici numerici del settore turistico che vengono riconosciuti dalla comunità dei fornitori di viaggi, tra cui operatori di crociere, tour operator, albergatori e società di autonoleggio.",
        rtSubtitle : "RT",
        rtText : "Se non avete un Account manager di riferimento Accor e non avete ne un codice SC, ne un codice IATA/TIDS/TRUE, potete utillizzare il codice RT, creato appositamente per la vostra agenzia al fine di poter accedere alla prenotazione gruppi on-line. Per ottenere il vostro codice RT, vi preghiamo di riempire il modulo di sottoscrizione cliccando <a class=\"popin p-m-i-w:600-h:1550-type:iframe-ref:coderequest\" href=\"https://travelpros.accor.com/it/contact/code-request-external.shtml\">qui</a>.",
        iataHowTo : "Come immettere il proprio codice IATA / TIDS / CLIA / RT o TRUE?",
        iataExample : "Immettere il proprio codice a 8 caratteri (senza spazi).<br />  Esempio: 01234567 o PC123456 (solo 2 lettere per il codice RT)."
    },
    popinRoomType : {
        popinTitle : "Tipo di camera diversa",
        double : "Matrimoniale",
        twin : "Doppia",
        single : "Singola",
        triple : "Tripla",
        doubleDescription : "La configurazione della camera matrimoniale può variare da un hotel all'altro ma di norma una camera matrimoniale è destinata a due persone che condividono un letto a due piazze. Si tratta della camera preferita dalla maggior parte di coppie o di persone che non hanno problemi a condividere un letto.",
        twinDescription : "La configurazione della camera doppia può variare da un hotel all'altro ma di norma una camera doppia è una camera per due persone con due letti separati. È ideale per due persone che desiderano avere il proprio letto pur condividendo la stessa stanza.",
        singleDescription : "La configurazione della camera singola può variare da un hotel all'altro ma di norma una camera singola è destinata a una sola persona con un letto a due piazze o a una sola piazza. È ideale per le persone che desiderano avere il proprio letto in una camera singola.",
        tripleDescription : "La configurazione della camera tripla può variare da un hotel all'altro ma di norma una camera tripla è una camera per tre persone, dotata di un letto a due piazze e un letto singolo oppure di tre letti singoli. È ideale per le famiglie o per piccoli gruppi di viaggiatori che desiderano condividere un'unica camera.",
        popinNote : "Le suddette descrizioni sono puramente indicative. La configurazione della camera matrimoniale, doppia, singola o tripla può variare da un hotel all'altro. "

    },
    popinRepartition: {
        message: {
            partOne: "Questo hotel è disponibile per il pernottamento del gruppo per le date richieste ma <strong>non per la tipologia di camere selezionate</strong> .",
            partTwo: " Selezionare qui di seguito  una tipologia di camere alternativa oppure  verificare la disponibilità su un altro hotel .",
            partThree: "La tariffa iniziale indicata può variare in base alla tipologia di camere selezionata.",
            partFour: "L’hotel dispone in totale di {0} camere."
        },
        titleTable: {
            colOne: "Tipo di camera",
            colTwo: "Richiesta iniziale",
            colThree: "Nuova richiesta"
        },
        single: "Singola(e)",
        double: "Matrimoniale(i)",
        twin: "Doppia(e)",
        total: "Totale",
        btn: {
            back: "Torna all'elenco degli hotel",
            submit: "Conferma"
        }
    },
    popinHotelsList : {
        comparisonNotEnoughHotels : "È necessario selezionare almeno <span class=\"minComparableHotels\">2</span> hotel per effettuare un confronto",
        comparisonTooManyHotels : "È possibile confrontare fino a un massimo di <span class=\"maxComparableHotels\">3</span> hotel.",
        selectionTooManyHotels :"Non è possibile selezionare più di <span class=\"maxSelectableHotels\">4</span> hotel",
        comparisonPopinButtons : "OK",
        cancelButton : "Cancel",
        continueButton : "Continue"
    },
    yourSelection : {
        deleteItem: "Delete",
        deleteQuestion : "Eliminare questo hotel dalla selezione?",
        buttonNo: "No",
        buttonYes: "Sì"
    },
    compareHotels : {
        totalCapacity : "Capacità totale:",
        didYouKnow : "Lo sapevi?",
        upTo3RFP : "È possibile inviare fino a 3 richieste di preventivi alla volta.",
        sendRFPs : "Invia richieste di preventivi",
        photoGallery : "Galleria fotografica",
        distanceFromCityCenter : "km dal centro città",
        viewDetails : "Visualizza tutti dettagli",
        typeAccomodation : "Tipo di alloggio"
    },
    date: {
        dateFormat: "31/05/2000"
    },
    yourSearch: {
        title: "Ricerca",
        idPro: {
            title: "Codice cliente ID",
            agency: "Agenzia:",
            company: "Azienda:"
        },
        file: {
            title: "Dossier",
            labelGroup: "Nome del gruppo:",
            labelHotel: "Hotel:",
            labelNbPerson: "Numero di persone:"
        },
        rooms: {
            title: "Camere",
            labelArrivalDate: "Data di arrivo:",
            labelDepartureDate: "Data di partenza:",
            labelNbNight: "{0} notte(i)",
            labelNbRooms: "Numero di camere:",
            labelSingle: "Singola(e):",
            labelDouble: "Matrimoniale(i):",
            labelTwin: "Doppia(e):"
        },
        linkModifySearch: "Modifica la ricerca",
        linkNewSearch: "Nuova ricerca"
    },
    bedroomList: {
        currency: "Valuta",
        dateDescription: "Dal <strong>{0}</strong> al <strong>{1}</strong>, <span><strong>{2}</strong> notte(i)</span>",
        header: {
            title: {
                single: "Singola(e)",
                double: "Matrimoniale(i)",
                twin: "Doppia(e)"
            },
            titleNotice: "{0} camere da selezionare",
            titleDetailsSingle: "Tariffa netta / Per notte",
            titleDetailsOther: "Tariffa netta / Per notte / ½ doppia ",
            legend: "Prima colazione inclusa",
            legendHB: "Mezza pensione inclusa"
        },
        price: {
            selectNbRooms: "Selezionare il numero di camere",
            wordingOpenPopin: "Dettagli delle tariffe per notte"
        },
        showMore: {
            wordingLink: "Mostra più camere"
        },
        breakfast: {
            title: "Prima colazione",
            defaultLabel: "Continental breakfast",
            defaultValue: "Inclusa",
            defaultDetails: "For a great start to the day, our delicious continental breakfast is served from 6.30 am to 10:30 am."
        },
        halfboard:{
            title: "Mezza pensione"
        },
        resumeSelection: {
            titleFirstCol: "Tipo di camera",
            titleSecondCol: "Numero di camere richieste",
            titleThirdCol: "Numero di camere selezionate",
            type: {
                single: "Singola(e)",
                double: "Matrimoniale(i)",
                twin: "Doppia(e)"
            },
            total: "Totale"
        }
    },
    popinSummary: {
        title: "Dettagli del dossier",
        titleNext: "Camere",
        titleColTable: "Tipo di camere",
        detailsBedroom: {
            noteNbRoom: "{0} camera(e)"
        },
        breakfast: {
            title: "Prima colazione",
            defaultValue: "Inclusa"
        }
    },
    quotation: {
        title: "Riepilogo della tua richiesta",
        intro: "Questa è una richiesta di prezzi e non una conferma di prenotazione. <br /> Una volta confermata, una quotazione dettagliata vi sarà inviata dall'hotel secondo la vostra richiesta. Completa il modulo sottostante:",
        asteriskIntro: "(*) Informazioni obbligatorie",
        subTitleOne: "1. Verifica i tuoi dati",
        agency: {
            title: "Agenzia",
            companyName: "Società",
            address: "Indirizzo",
            city: "Città",
            zipCode: "Codice di avviamento postale*",
            country: "Nazione",
            state: "State"
        },
        contact: {
            title: "Contatto :",
            civility: "Stato civile",
            civilityMr:"Sig.",
            civilityMrs :"Sig.ra",
            civilityMs :"Sig.na",
            civilityDoc :"Dott.",
            firstName: "Nome",
            name: "Cognome",
            email: "E-mail",
            phone: "Telefono",
            fax: "Fax",
            rememberMe: "Autorizzo al consenso del trattamento dei  miei dati professionali per poter essere riconosciuto ad ogni successivo acesso."
        },
        subTitleTwo: "2. Riepilogo della tua richiesta",
        folder: {
            fileName: "Nome della pratica :",
            dateArrival: "Data di arrivo :",
            dateDeparture: "Data di partenza:",
            hotelsSelected: "Hotel selezionati",
            indicativePrice: "Tariffa indicativa",
            priceOnRequest: "TARIFFA<br/> SU RICHIESTA"
        },
        budget: {
            title: "Se desiderate indicare il vostro budget (a persona, a notte)",
            dateIn: "Entra",
            dateOut: "e",
            currency: "Valuta"
        },
        bedroom: {
            title: "Numero di camere",
            double: "Numero di camere doppie",
            twin: "Numero di camere 2 letti",
            single: "Numero di camere singole",
            triple: "Numero di camere triple",
            total: "Numero totale di camere"
        },
        food: {
            title: "Ristorazione",
            breakfasts: {
                title: "Prima colazione",
                continental: "Continental",
                coldBuffet: "Cold buffet",
                hotBuffet: "Hot buffet"
            },
            lunches: {
                title: "Pranzo",
                twoCourses: "2 portate",
                threeCourses: "3 portate",
                fourCourses: "4 portate"
            },
            dinners: {
                title: "Cena",
                twoCourses: "2 portate",
                threeCourses: "3 portate",
                fourCourses: "4 portate"
            },
            porterage: {
                title: "Servizio di facchinaggio",
                yes: "Sì",
                no: "No"
            },
            comments: {
                title: "Commenti",
                info: "Se effettuate una richiesta internazionale, vi ringraziamo di scrivere i vostri commenti in inglese."
            }
        }
    },
    quotationConfirmation: {
        postThanks: "Abbiamo ricevuto la Sua richiesta e la ringraziamo per l'interesse che ha manifestato per il gruppo Accor",
        messageDetails: "Una offerta dettagliata le sarà inviata da ciascun albergo nel più breve tempo possibile",
        link: {
            title: "Desidera:",
            modifyRequest: "Riaprire la richiesta e modificare la data e/o la destinazione e/o il nome della pratica",
            newRequest: "Effettuare una nuova richiesta",
            returnHome: "Torna alla home page"
        }
    },
    additionalServices: {
        titleSelection: "Selezionare le date:",
        tooltipSelection: "Si ricorda che il tipo di cena scelto sarà applicato a tutte le date selezionate.",
        labelSelection: "Selezionare il menu:",
        buttonAdd: "Aggiungi",
        buttonModify: "Modifica",
        buttonDelete: "Cancella",
        linkConditionsDinner: "Visualizza le condizioni particolari di vendita",
        titleValidated: "Date:",
        linkMoreDetails: "Maggiori dettagli",
        wordingPerPerson: "(Per persona / Cena)",
        errorNoDate: "È stato selezionato il servizio Cena. Selezionare le date e il tipo di menu richiesti. Per annullare la presente richiesta di cena selezionare \"NO\".",
        errorNoMenu: "È stato selezionato il servizio Cena. Selezionare le date e il tipo di menu richiesti. Per annullare la presente richiesta di cena selezionare \"NO\".",
        errorDinnerNotAdded : "Hai selezionato il supplemento cena. Clicca su \"Aggiungi\" se interessato a confermare il servizio. Se non interessato clicca \"NO\"",
		linkConditionsOtherServices: "Visualizza le condizioni particolari di vendita",
        legendPriceOtherServices: "(Un bagaglio per persona / Arrivo e partenza)"
    },
    popinAdditionalServices: {
        title: "CENA: {0} persone",
        labelDinner: "Cena",
        labelPrice: "Prezzo",
        dinnerSelected: {
            "yes": "Sì",
            "no": "No"
        },
        reference: {
            "one": "L'Hotel confermerà la cena una volta finalizzato il contratto di prenotazione.",
            "two": "Prezzo per persona."
        }
    },
    popinRecap: {
        title: "Servizi supplementari",
        labelDinner: "Cena: {0} persone",
        labelServices: "Altri servizi: {0} persone",
        labelTable: "Tipo di servizi",
        dinnerFirstNote: "L'Hotel confermerà la cena una volta finalizzato il contratto di prenotazione.",
        dinnerSecondNote: "Prezzo per persona."
    }
};

var i18n_socialMedia = {
    homeMediaBar : {
        "title" : "Seguici",
        "subTitle" : "Scopri il meglio di All.accor.com sui social network:",
        "facebookURL" : "http://www.facebook.com/ALL",
        "twitterURL" : "https://twitter.com/all",
        "language" : "it_IT",
        "Recommend" : "Raccomanda"
    }
};

var i18n_whiteLabel = {
    "legals" : "La vendita di soggiorni negli hotel Accor è gestita da ACCOR SA, una società francese a responsabilità limitata con capitale sociale di   euro e sede centrale all'indirizzo 110 avenue de France – 75013 Parigi – Francia, iscritta nel Registro del Commercio e delle Imprese con il N. RCS PARIS B 602 036 444, di cui N° di TVA intracomunitario FR 93 602 036 444, iscritta al registro degli agenti di viaggio ed altri operatori di soggiorno con il n°IM091100035. Garante : Société Générale - 29 boulevard Haussman - 75009 Paris. Assicuratore : ALLIANZ GGLOBAL CORPORATE & SPECIALITY - Tour Opus - 77 Esplanade du Général de Gaulle - 92081 Paris - La Défense - Francia."
};
var i18n_options_product ={
    "ALL":{"AdultLabel" :"Adulto(i)",
    "priceLegendAdult":"per giorno/adulto"
    },
    "HOF":{"AdultLabel" :"Adulto(i)",
    "priceLegendAdult":"per giorno/adulto"
    }
};

/** < /scripts-v2104/booking/common/i18n/booking-it.js **/

/** Calendar js for manage datepiker **/
/** > /scripts-v2104/booking/common/calendar.js **/
var Calendar = function(formulaire, nightNb, daysNb, option, leadTimeIn) {
  this.initialize(formulaire, nightNb, daysNb, option, leadTimeIn);
};

Calendar.prototype = {
  initialize: function(formulaire, nightNb, daysNb, option, leadTimeIn) {
    this.formulaireId = formulaire;
    this.nightNb = nightNb;
    this.daysNb = daysNb;
    this.leadTimeIn = leadTimeIn;
    this.option = option;
    this.$formulaire = jQuery('#' + formulaire);
    this.$errorMessage = this.$formulaire.find('.tErrorMessage');
    this.$iptDateIn = this.$formulaire.find(".tArrivalDate");
    this.$iptDayIn = this.$formulaire.find('input[name="search.dayIn"]');
    this.$iptMonthIn = this.$formulaire.find('input[name="search.monthIn"]');
    this.$iptYearIn = this.$formulaire.find('input[name="search.yearIn"]');

    this.$iptDateOut = this.$formulaire.find(".tDepartureDate");
    this.$iptDayOut = this.$formulaire.find('input[name="search.dayOut"]');
    this.$iptMonthOut = this.$formulaire.find('input[name="search.monthOut"]');
    this.$iptYearOut = this.$formulaire.find('input[name="search.yearOut"]');

    this.$NightContent = this.$formulaire.find('.tNights');
    this.$NightTxt = this.$formulaire.find('span.tDuree');
    this.$iptNightNb = this.$formulaire.find('input[name="search.nightNb"]');


    this.dateIn = null;
    this.dateOut = null;
    this.currentDate = new Date();
    this.currentDate = new Date(this.currentDate.getFullYear(), this.currentDate.getMonth(), this.currentDate.getDate(), 12, 0, 0);
    var maxDateFromCurrent = new Date();
    maxDateFromCurrent.setTime(this.currentDate.getTime() + 3600 * 24 * 1000 * (this.daysNb - 1));
    this.saveDate = new Date(); //sauvegarde la date initiale pour le cas d'option dayStart
    this.saveDate = new Date(this.saveDate.getFullYear(), this.saveDate.getMonth(), this.saveDate.getDate(), 12, 0, 0);
    this.startDateOut = new Date();
    this.startDateOut = this.currentDate;
    this.defaultDate = null;
    this.dayOutSup = true;
    this.calType = null; // used to differentiate bedroom or meetingroom

    //For delayed date-in calendars
    if (this.leadTimeIn) {
      this.currentDate.setTime(this.currentDate.getTime() + 3600 * 24 * 1000 * (this.leadTimeIn));
    }

    if (this.option) { //objet de parametres optionnels
      /*************************************/
      // Manage more than one cal
      if (this.option.personalizedCal) {
        if (this.option.personalizedCal.calendarName) {
          this.calType = this.option.personalizedCal.calendarName;
        }

        /****** clean date if session v6.4****/
        //not for meeting
        if (jQuery("form[name='meetingBookingEngine']").length == 0) {
          this.resetDateIn();
          this.resetDateOut();
        }

        this.$iptDateIn = this.$formulaire.find(this.option.personalizedCal.startDate);
        this.$iptDayIn = this.$formulaire.find(this.option.personalizedCal.startDay);
        this.$iptMonthIn = this.$formulaire.find(this.option.personalizedCal.startMonth);
        this.$iptYearIn = this.$formulaire.find(this.option.personalizedCal.startYear);

        this.$iptDateOut = this.$formulaire.find(this.option.personalizedCal.endDate);
        this.$iptDayOut = this.$formulaire.find(this.option.personalizedCal.endDay);
        this.$iptMonthOut = this.$formulaire.find(this.option.personalizedCal.endMonth);
        this.$iptYearOut = this.$formulaire.find(this.option.personalizedCal.endYear);

        this.$NightContent = this.$formulaire.find(this.option.personalizedCal.durationContent);
        this.$NightTxt = this.$formulaire.find(this.option.personalizedCal.durationTxt);
        this.$iptNightNb = this.$formulaire.find(this.option.personalizedCal.durationNb);

        if (this.option.personalizedCal.defaultDate) {
          this.defaultDate = this.option.personalizedCal.defaultDate;
        }
        if (this.option.personalizedCal.firstArrivalDate) {
          this.option.firstArrivalDate = this.option.personalizedCal.firstArrivalDate;
        }
        if (this.option.personalizedCal.lastArrivalDate) {
          this.option.lastArrivalDate = this.option.personalizedCal.lastArrivalDate;
        }
        if (this.option.personalizedCal.lastDepartureDate) {
          this.option.lastDepartureDate = this.option.personalizedCal.lastDepartureDate;
        }
        if (this.option.personalizedCal.maxPeriodResa) {
          this.option.maxStay = this.option.personalizedCal.maxPeriodResa;
        }
        if (this.option.personalizedCal.maxStay) {
          this.option.maxStay = this.option.personalizedCal.maxStay;
        }
      }

      if (this.option.pgeCal) { //nombre de mois affiches
        if (this.option.pgeCal > 3) {
          this.option.pgeCal = 3;
        }
        var brandCode = window.AccorHotels.context.currentDomain.brandCode;
        if (brandCode === 'PUL' && jQuery(window).width() <= 768) {
          this.nbrMonth = 1;
        }else{
          this.nbrMonth = option.pgeCal;
        }
      }
      if (this.option.defaultDate) { //date par defaut
        this.defaultDate = this.option.defaultDate;
      }
      if (this.option.earlyBookingCondition) {
        if (this.option.lastArrivalDate) {
          if (this.currentDate.getTime() + ((3600 * 24 * 1000) * (this.option.earlyBookingCondition)) >= this.option.lastArrivalDate.getTime() + (3600 * 24 * 1000)) {
            this.option.lastDepartureDate = this.currentDate;
          }
        }
        if (this.option.firstArrivalDate == null) {
          this.option.firstArrivalDate = this.saveDate;
        }
        this.earlyBookingStart = new Date(); //date a laquelle le compteur earlyBookingConditon est activé
        this.earlyBookingStart.setTime(this.option.firstArrivalDate.getTime() - ((3600 * 24 * 1000) * (this.option.earlyBookingCondition)));
        if (this.saveDate >= this.earlyBookingStart) {
          this.currentDate = this.saveDate;
          this.currentDate.setTime(this.currentDate.getTime() + 3600 * 24 * 1000 * (this.option.earlyBookingCondition));
          if (this.currentDate.getTime() >= maxDateFromCurrent.getTime()) {
            maxDateFromCurrent.setTime(this.currentDate.getTime());
          }
        }
        this.currentDate.setHours(12);
      }
      if (this.option.firstArrivalDate) { //date d'initialisation du calendrier
        if (this.option.firstArrivalDate.getTime() > this.currentDate.getTime()) {
          this.currentDate = this.option.firstArrivalDate;
        } else {
          this.currentDate = new Date(this.currentDate.getFullYear(), this.currentDate.getMonth(), this.currentDate.getDate(), 12, 0, 0);
        }
      }

      if (this.option.lastArrivalDate) { //date de fin de promo
        if (this.option.lastArrivalDate.getTime() < maxDateFromCurrent.getTime()) {
          maxDateFromCurrent.setTime(this.option.lastArrivalDate.getTime());
        }
      }

      if (this.option.lastDepartureDate) {
        if (this.option.lastDepartureDate.getTime() < maxDateFromCurrent.getTime()) {
          if(!this.option.minStay)
            maxDateFromCurrent.setTime(this.option.lastDepartureDate.getTime() - (3600 * 24 * 1000));
          else
            maxDateFromCurrent.setTime(this.option.lastDepartureDate.getTime());
        }
      }

      if (this.option.minStay) {
        maxDateFromCurrent.setTime(maxDateFromCurrent.getTime() - ((3600 * 24 * 1000) * this.option.minStay));

        this.startDateOut.setTime(this.startDateOut.getTime() + 3600 * 24 * 1000 * (this.option.minStay));
        this.nightNb = this.nightNb - this.option.minStay + 1;
        if (!this.option.firstArrivalDate) {
          this.currentDate = new Date();
          this.currentDate = new Date(this.currentDate.getFullYear(), this.currentDate.getMonth(), this.currentDate.getDate(), 12, 0, 0);
        }
      }

      if (this.option.maxStay) {
        this.nightNb = this.option.maxStay;
      }
    }

    var _this = this;
    //hors promo

    //init arrival field
    this.$iptDateIn.datepicker({
      beforeShow: (typeof _this.option != "undefined" && typeof _this.option.beforeShow != "undefined") ? _this.option.beforeShow : function(input,inst) {

        if (jQuery(window).height() <= 768 && jQuery('.popin-formEvent').length) {
            window.setTimeout(function () {
              
              var inputOffset = jQuery(input).offset().top,
                  popinOffset = jQuery(input).closest('.popin-formEvent').offset().top,
                  inputHeight = jQuery(input).height(),
                  datePickerHeight = jQuery(inst.dpDiv).height();
                  if (jQuery(input).val()) {
                    jQuery(inst.dpDiv).css({ top: (inputOffset - popinOffset) - inputHeight - datePickerHeight-63});
                  } else {
                    jQuery(inst.dpDiv).css({ top: (inputOffset - popinOffset) - inputHeight - datePickerHeight-68});
                  }

            }, 1);
            
        } else {
          return null;
        }
      },
      duration: "fast",
      showOn: 'both',
      //buttonImage: '/imagerie/booking/booking-engine/picto-calendrier.gif',
      //buttonImageOnly: true,
      altField: this,
      numberOfMonths: this.nbrMonth,
      buttonText: i18n.calendar.arrivalAlt,
      minDate: this.currentDate,
      monthNames: i18n.calendar.monthNames,
      maxDate: maxDateFromCurrent,
      defaultDate: this.defaultDate,
      //launch all control after datepicker close
      onClose: function(stringDate, inst) {
        
        jQuery(document).scrollTop;
        _this.$iptDateIn.trigger('closeDateIn');
        _this.$iptDateIn.addClass('offdateIn');
        _this.checkFieldStatus('arrival', inst, stringDate);
        // Context MEE
        if (_this.$iptDateIn.hasClass("tMeetingRoomArrivalDate")) {
          var ber = null;

          if (typeof advancedSearch != "undefined") {
            ber = advancedSearch.jsonSC.bookingEngineRules;
          } else if ((typeof bookingEngine != undefined) && (bookingEngine.jsonSC != undefined) && (bookingEngine.jsonSC != null)) {
            if (_this.formulaireId == "offerBookingEngine") {
              ber = offerPromoBookingEngine.jsonSC.bookingEngineRules;
            } else { //promoBookingEngine
              ber = bookingEngine.jsonSC.bookingEngineRules;
            }
          } else if (typeof hotelsList != "undefined") {
            ber = hotelsList.ber;
          }

          if (ber != null) {
            if (typeof advBookingEngine != "undefined") {
              CalendarMeetingsConfiguration.catchCalChange(ber, advBookingEngine);
            } else if (typeof BookingEngineInstance != "undefined") {
              if (_this.formulaireId == "offerBookingEngine") {
                CalendarMeetingsConfiguration.catchCalChange(ber, offerBookingEngineInstance);
              } else { //promoBookingEngine
                CalendarMeetingsConfiguration.catchCalChange(ber, BookingEngineInstance);
              }

            }
          }
        }

        if (typeof _this.option != "undefined" && typeof _this.option.onClose != "undefined") {
          _this.option.onClose.call(this, stringDate, inst);
        }

      }
    });
    //init departure field
    this.$iptDateOut.datepicker({
      beforeShow: (typeof _this.option != "undefined" && typeof _this.option.beforeShow != "undefined") ? _this.option.beforeShow : function(input,inst) {
        
        if (jQuery(window).height() <= 768 && jQuery('.popin-formEvent').length) {
            window.setTimeout(function () {
              
              var inputOffset = jQuery(input).offset().top,
                  popinOffset = jQuery(input).closest('.popin-formEvent').offset().top,
                  inputHeight = jQuery(input).height(),
                  datePickerHeight = jQuery(inst.dpDiv).height();
                  if (jQuery(input).val()) {
                    jQuery(inst.dpDiv).css({ top: (inputOffset - popinOffset) - inputHeight - datePickerHeight-63});
                  } else {
                    jQuery(inst.dpDiv).css({ top: (inputOffset - popinOffset) - inputHeight - datePickerHeight-68});
                  }

            }, 1);
            
        } else {
          return null;
        }
      },
      duration: "fast",
      showOn: 'both',
      //buttonImage: '/imagerie/booking/booking-engine/picto-calendrier.gif',
      //buttonImageOnly: true,
      altField: this,
      monthNames: i18n.calendar.monthNames,
      numberOfMonths: this.nbrMonth,
      buttonText: i18n.calendar.departureAlt,
      minDate: _this.startDateOut,
      maxDate: maxDateFromCurrent,
      //launch all control after datepicker close
      onClose: function(stringDate, inst) {

        jQuery(document).scrollTop;
        _this.$iptDateOut.trigger('closeDateOut');
        _this.$iptDateOut.addClass('offdateOut');
        _this.checkFieldStatus('departure', inst, stringDate);
        // Context MEE
        if (_this.$iptDateOut.hasClass("tMeetingRoomDepartureDate")) {
          var ber = null;

          if (typeof advancedSearch != "undefined") {
            ber = advancedSearch.jsonSC.bookingEngineRules;
          } else if (typeof hotelsList != "undefined") {
            ber = hotelsList.ber;
          }

          if (ber != null) {
            if (typeof advBookingEngine != "undefined") {
              CalendarMeetingsConfiguration.catchCalChange(ber, advBookingEngine);
            }
          }
        }

        if (typeof _this.option != "undefined" && typeof _this.option.onClose != "undefined") {
          _this.option.onClose.call(this, stringDate, inst);
        }
        
      }
    });

    // QC 88544 / BP-129
    if (window.AccorHotels.context.proxifyObject.currentDomain.brandCode == "SOF" && window.AccorHotels.context.isMobile.any()) {
      jQuery("input[name='search.dateOut']").datepicker("option", "isRTL", true);
    }

    // Q86978
    jQuery("input[name='search.dateIn']").datepicker("option", "isRTL", false);
    jQuery("input[name='search.dateOut']").datepicker("option", "isRTL", false);

    if (typeof _this.option != "undefined" && typeof _this.option.listenResizeWindow != "undefined") {
      // Content exemple of listenResizeWindow if it's defined
      // { sizeDesktopWindow: 1024, numberOfMonths: [1, 2] }
      _this.switchNbMonthAfterResizeWindow(_this.option.listenResizeWindow);
    }

    //bind trigger "closeDateIn"
    this.$iptDateIn.bind('closeDateIn', function() {
      var date = _this.$iptDateIn.datepicker('getDate');
      var date2 = null;

      if (date != null) {
        date.setHours(12, 0, 0, 0);
        if (_this.option != null) {
          if (_this.option.minStay) {
            date2 = new Date();
            date2.setTime(date.getTime() + 3600 * 24 * 1000 * (_this.option.minStay - 1));
            if (_this.option.maxStay) {
              _this.nightNb = _this.option.maxStay - _this.option.minStay + 1;
            }
            var instOut = {
              selectedYear: date2.getFullYear(),
              selectedMonth: date2.getMonth(),
              selectedDay: date2.getDate()
            };
          }
        }

        var inst = {
          selectedYear: date.getFullYear(),
          selectedMonth: date.getMonth(),
          selectedDay: date.getDate()
        };

        _this.setArrivalDate(_this.$iptDateIn.val(), inst, instOut);
      }

      _this.executeCustomDate("dateIn");
    });

    //bind trigger "closeDateOut"
    this.$iptDateOut.bind('closeDateOut', function(event, extraParam) {
      var date = _this.$iptDateOut.datepicker('getDate');
      if (date != null) {
        date.setHours(12, 0, 0, 0);
        var inst = {
          selectedYear: date.getFullYear(),
          selectedMonth: date.getMonth(),
          selectedDay: date.getDate()
        };
        _this.setDepartureDate(_this.$iptDateOut.val(), inst);
      }

      _this.executeCustomDate("dateOut");
	if (extraParam && extraParam.callback) {
        extraParam.callback();
      }
    });

    this.$iptDateOut.bind('forceEnable', function() {
      _this.setDisabled(_this.$iptDateOut, false);
    });

    //wrapping for css datepicker
    jQuery('#ui-datepicker-div').wrap('<div class="ui-datepicker-wrapper" aria-hidden="true"></div>');

    if (this.$iptDateIn.val()) {
      if (!this.$iptYearIn.val() || !this.$iptMonthIn.val() || !this.$iptDayIn.val()) {
        var tmpDate = _this.$iptDateIn.datepicker('getDate');
        this.$iptYearIn.val(tmpDate.getFullYear());
        this.$iptMonthIn.val(tmpDate.getMonth() + 1);
        this.$iptDayIn.val(tmpDate.getDate());
      }
      var maxDateOutFromCurrent = new Date();
      if (this.leadTimeIn) {
        maxDateOutFromCurrent.setTime(this.currentDate.getTime() + 3600 * 24 * 1000 * (this.daysNb - this.leadTimeIn));
      } else {
        maxDateOutFromCurrent.setTime(this.currentDate.getTime() + 3600 * 24 * 1000 * this.daysNb);
      }
      maxDateOutFromCurrent.setHours(12, 0, 0, 0);
      this.dateIn = new Date(this.$iptYearIn.val(), this.$iptMonthIn.val() - 1, this.$iptDayIn.val(), 12, 0, 0);
      // minDateOut = dateIn selectionne + minStay
      var minDate = new Date();
      if (this.option && this.option.minStay)
        minDate.setTime(this.dateIn.getTime() + 3600 * 24 * 1000 * this.option.minStay);
      else
        minDate.setTime(this.dateIn.getTime() + 3600 * 24 * 1000);
      //maxDateOut = date la plus  proche entre J + maxLeadTime et dateIn selectionne + nbNuit
      var maxDate = new Date();
      maxDate.setTime(Math.min(minDate.getTime() + 3600 * 24 * 1000 * (this.nightNb - 1), maxDateOutFromCurrent));

      if (this.calType != "meetingRoom") {
        this.$iptDateOut.datepicker('option', 'minDate', minDate);
        this.$iptDateOut.datepicker('option', 'maxDate', maxDate);
      } else {
        this.$iptDateOut.datepicker('option', 'minDate', new Date(minDate.getTime() - 3600 * 24 * 1000));
        this.$iptDateOut.datepicker('option', 'maxDate', new Date(maxDate.getTime() - 3600 * 24 * 1000));
      }

      //bug datepicker, correct hours that are not at 12
      this.currentDate.setHours(12, 0, 0, 0);
    }

    if (this.$iptDateOut.val() == "") {
      this.setDisabled(this.$iptDateOut, true);
    } else {
      this.dateOut = new Date(this.$iptYearOut.val(), this.$iptMonthOut.val() - 1, this.$iptDayOut.val(), 12, 0, 0);
      //transform in number of days from today
      var day = Math.round((this.dateOut.getTime() - this.saveDate.getTime()) / (3600 * 24 * 1000));

      this.$iptDateOut.datepicker('setDate', day);
    }

    if (this.$iptDateIn.val() != "" && this.$iptDateOut.val() != "") {
      this.writeNumberNight();
    }
    if (this.defaultDate) {
      if(!this.dateIn){
        var valueDate = this.defaultDate;

        if (typeof this.defaultDate != 'string') {
          valueDate = jQuery.datepicker.formatDate(i18n.calendar.datepickerFormater, this.defaultDate);
        }
        this.$iptDateIn.val(valueDate);
      }
      this.$iptDateIn.trigger('closeDateIn');
    }
  },

  executeCustomDate: function (inputDateType) {
    var customDisplayDate =  (typeof this.option != "undefined" && typeof this.option.customDisplayDate != "undefined") ? this.option.customDisplayDate : null;

    if (customDisplayDate) {
      var selectorCustom = (inputDateType == "dateIn") ? customDisplayDate.selectorCustom.dateIn : customDisplayDate.selectorCustom.dateOut;
      var $inputDate = (inputDateType == "dateIn") ? this.$iptDateIn : this.$iptDateOut;
      var dateSelected = $inputDate.datepicker('getDate');
      var dateFormated = new Date(dateSelected);

      if (jQuery.datepicker.formatDate('yy', dateFormated) != "1970") {
        this.setcustomDateTemplate(customDisplayDate, dateFormated, selectorCustom);

        if (inputDateType == "dateIn") {
          selectorCustom = customDisplayDate.selectorCustom.dateOut;
          dateSelected = this.$iptDateOut.datepicker('getDate');
          dateFormated = new Date(dateSelected);
          this.setcustomDateTemplate(customDisplayDate, dateFormated, selectorCustom);
        }
      }
    }
  },

  setcustomDateTemplate: function(customObj, date, selectorCustom) {
    var defaultTplCustomDate = '<div class="customDate"><div class="customDate__iconeCalendar"></div>';
    defaultTplCustomDate += '<div class="customDate__detailsDate"><div class="customDate__detailsDate__numDay"></div>';
    defaultTplCustomDate += '<div class="customDate__detailsDate__allElements">';
    defaultTplCustomDate += '<div class="customDate__detailsDate__allElements__row"><div class="day"></div></div>';
    defaultTplCustomDate += '<div class="customDate__detailsDate__allElements__row"><div class="month"></div><div class="year"></div></div>';
    defaultTplCustomDate += '</div>';
    defaultTplCustomDate += '</div>';

    var defaultFormatDateCustom = {
      'numDay': 'dd',
      'day': 'DD',
      'month': 'MM',
      'year': 'yy'
    };

    var tplCustomDate = (typeof customObj.tplCustomDate != "undefined") ? customObj.tplCustomDate : defaultTplCustomDate;
    var $tplcustomDate = jQuery(tplCustomDate);
    var formatDate = (typeof customObj.formatDate != "undefined") ? customObj.formatDate : defaultFormatDateCustom;
    var numDay = jQuery.datepicker.formatDate(formatDate.numDay, date);
    var day = jQuery.datepicker.formatDate(formatDate.day, date);
    var month = jQuery.datepicker.formatDate(formatDate.month, date);
    var year = jQuery.datepicker.formatDate(formatDate.year, date);

    $tplcustomDate.find('.customDate__detailsDate__numDay').html(numDay);
    $tplcustomDate.find('.day').html(day);
    $tplcustomDate.find('.month').html(month);
    $tplcustomDate.find('.year').html(year);

    if (typeof customObj.calendarIcon != 'undefined') {
      $tplcustomDate.find('.customDate__iconeCalendar').html(customObj.calendarIcon);
    }

    jQuery(selectorCustom).html($tplcustomDate);
  },

  switchNbMonthAfterResizeWindow: function(listenResizeWindow) {
    var calendarResize = {};
    var self = this;

    calendarResize.debounce = function(func, wait, immediate) {
      var timeout;
      return function() {
        var context = this;
        var args = arguments;
        var later = function() {
          timeout = null;
          if (!immediate) {
            func.apply(context, args);
          }
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait || 200);
        if (callNow) {
          func.apply(context, args);
        }
      };
    };

    calendarResize.setNbMonthDisplayCalendar = function() {
      var nbMonthDisplay = (jQuery(window).width() < listenResizeWindow.sizeDesktopWindow) ? listenResizeWindow.numberOfMonths[0] : listenResizeWindow.numberOfMonths[1];
      self.updateNbMonthOption(nbMonthDisplay);
    };

    window.addEventListener('resize', calendarResize.debounce(calendarResize.setNbMonthDisplayCalendar, 400));
    // window.addEventListener('resize', calendarResize.debounce(calendarResize.setNbMonthDisplayCalendar, 400, true));
  },

  //set disabled departure
  setDisabled: function(input, state) {
    state ? input.datepicker("disable") : input.datepicker("enable");
	var customDisplayDate =  (typeof this.option != "undefined" && typeof this.option.customDisplayDate != "undefined") ? this.option.customDisplayDate : null;

    if (customDisplayDate) {
      var parentSelector = (customDisplayDate.selectorCustom) ? customDisplayDate.selectorCustom.parent : null;

      if (parentSelector) {
        var $parentSelector = input.closest(parentSelector);

        state ? $parentSelector.addClass("disabled") : $parentSelector.removeClass("disabled");
      }
    }
  },

  setArrivalDate: function(stringDate, instance, instanceModif) {
    if (instance != null) {
      this.$iptDayIn.val(instance.selectedDay);
      this.$iptMonthIn.val(Number(instance.selectedMonth + 1));
      this.$iptYearIn.val(instance.selectedYear);
      var tmpDate = new Date(instance.selectedYear, instance.selectedMonth, instance.selectedDay, 12, 0, 0);
      if (instanceModif) {
        tmpDate = new Date(instanceModif.selectedYear, instanceModif.selectedMonth, instanceModif.selectedDay, 12, 0, 0);
      }
      if (this.dateIn == null) {
        this.dateIn = tmpDate;
        this.updateDateOutOption();
      } else {
        if (tmpDate.getTime() != this.dateIn.getTime()) {
          this.dateIn = tmpDate;
          this.updateDateOutOption();
        }
      }
    }
  },

  setDepartureDate: function(stringDate, instance) {
    if (instance != null) {
      this.$iptDayOut.val(instance.selectedDay);
      this.$iptMonthOut.val(Number(instance.selectedMonth + 1));
      this.$iptYearOut.val(instance.selectedYear);
      this.dateOut = new Date(instance.selectedYear, instance.selectedMonth, instance.selectedDay, 12, 0, 0);
    }
  },

  updateNbMonthOption: function(nbMonthDisplay) {
    nbMonthDisplay = (typeof nbMonthDisplay == "undefined") ? 1 : nbMonthDisplay;

    if (this.nbrMonth != nbMonthDisplay) {
      this.nbrMonth = nbMonthDisplay;

      this.$iptDateIn.datepicker('option', 'numberOfMonths', nbMonthDisplay);
      this.$iptDateOut.datepicker('option', 'numberOfMonths', nbMonthDisplay);
    }
  },

  //init config max & min date of departure field
  updateDateOutOption: function() {
    var maxDateOutFromCurrent = new Date();
    if (this.leadTimeIn) {
      maxDateOutFromCurrent.setTime(this.currentDate.getTime() + 3600 * 24 * 1000 * (this.daysNb - this.leadTimeIn) + parseInt("3600000", 10));
    } else {
      maxDateOutFromCurrent.setTime(this.currentDate.getTime() + 3600 * 24 * 1000 * this.daysNb + parseInt("3600000", 10));
    }

    if (this.option) {
      if (this.option.lastDepartureDate) {
        maxDateOutFromCurrent.setTime(this.option.lastDepartureDate.getTime());
      } //pour eviter le depassement de dates de promo

    }

    // minDateOut = dateIn selectionne + 1
    var minDate = new Date();

    if (jQuery(this.$iptDateIn).hasClass("tRoomArrivalDate") || jQuery(this.$iptDateIn).hasClass("tMeetingRoomArrivalDate")) {
      minDate.setTime(this.dateIn.getTime());
    } else {
      minDate.setTime(this.dateIn.getTime() + 3600 * 24 * 1000);
    }

    //maxDateOut = date la plus  proche entre J + maxLeadTime et dateIn selectionne + nbNuit
    var maxDate = new Date();
    maxDate.setTime(Math.min(minDate.getTime() + 3600 * 24 * 1000 * (this.nightNb - 1), maxDateOutFromCurrent));

    if (maxDate.getTime() == maxDateOutFromCurrent.getTime() && (this.option && !this.option.minStay)) { // corrige le bug 0 nuit a 405 jours
      if (this.option.maxStay) {
        maxDate = new Date();
        maxDate.setTime(Math.min(minDate.getTime() + (3600 * 24 * 1000) * (this.option.maxStay), maxDateOutFromCurrent));

        if (this.option && this.option.lastDepartureDate) {
          maxDate.setTime(Math.min(maxDateOutFromCurrent.getTime() + (3600 * 24 * 1000) * (this.option.maxStay), this.option.lastDepartureDate));
        }
      }
      this.$iptDateOut.datepicker('option', 'maxDate', maxDate);
      this.dayOutSup = false;
    }

    this.$iptDateOut.datepicker('option', 'minDate', minDate);
    if (this.dayOutSup) { // permet le depassement de dateOut pour la duree de la promo
      if (this.option && this.option.lastArrivalDate && maxDate.getTime() > this.option.lastArrivalDate.getTime()) {
        maxDate = this.option.lastArrivalDate;
      }
      this.$iptDateOut.datepicker('option', 'maxDate', maxDate);
    }

    this.$iptDateOut.datepicker('setDate', minDate);
    this.$iptDateOut.trigger('closeDateOut');

    this.writeNumberNight();
  },

  //check if date is in min & max date frame
  checkDate: function(dateType, instance) {

    var thisDate = new Date();
    thisDate = new Date(instance.currentYear, instance.currentMonth, instance.currentDay, 12, 0, 0);
    if (dateType == 'arrival') {
      var maxDayIn = this.$iptDateIn.datepicker('option', 'maxDate');

      if (this.currentDate.getTime() > thisDate.getTime() || (maxDayIn + 86400000) < thisDate.getTime()) {
        return false;
      }
    } else {
      var maxDayOut = this.$iptDateOut.datepicker('option', 'maxDate');
      var minDayOut = new Date(this.$iptDateOut.datepicker('option', 'minDate'));

      if ((minDayOut.getTime() - 86400000) > thisDate.getTime() || thisDate.getTime() > (maxDayOut.getTime() + 86400000)) {
        return false;
      }
    }
    return true;
  },

  //check if date if in good local format
  checkFormatDate: function(date) {
    var reg = new RegExp(i18n.calendar.dateFormat, "g");
    if (reg.test(date)) {
      reg = new RegExp("%([dmY])(.)%([dmY]).%([dmY])", "g");
      var tabRes = reg.exec(i18n.calendar.displayDateFormat);
      var typePos1 = tabRes[1];
      var typePos2 = tabRes[3];
      var typePos3 = tabRes[4];
      var dateSeparator = tabRes[2];

      tabRes = date.split(dateSeparator);
      var tabDate = [];
      tabDate[typePos1] = tabRes[0];
      tabDate[typePos2] = tabRes[1];
      tabDate[typePos3] = tabRes[2];

      var today = new Date();
      if (tabDate.d >= 1 && tabDate.d <= 31 && tabDate.m >= 1 && tabDate.m <= 12 && tabDate.Y >= today.getFullYear() && tabDate.Y <= today.getFullYear() + 2) {
        return true;
      }
    }
    return false;
  },

  //check content fields
  checkFieldStatus: function(dateType, instance, stringDate) {
    jQuery(".tArrivalDate, .tDepartureDate").css('border-color','#9c9c9c');
    switch (dateType) {
      case "arrival":
        if (stringDate == "") {
          this.resetDateIn();
          this.setDisabled(this.$iptDateOut, true);
          this.resetDateOut();
          this.$iptDateIn.parent().removeClass('validatorInvalidState');
          this.eraseNumberNight();
        } else {
          if (!this.checkFormatDate(stringDate)) {

            this.setDisabled(this.$iptDateOut, true);
            this.$iptDateIn.parent().addClass('validatorInvalidState');
            this.$errorMessage.show().html("<button class='ancre_goto' data-goto='"+instance.id+"'>"+i18n.calendar.error+"</button>");
            
           if( !(jQuery(".erm").hasClass("erm__hidden")) && !document.getElementById("advancedSearchPage")) {
             var el_error = jQuery("#"+instance.id).parent();
             el_error.children(".tArrivalDate").css('border-color','red');
           }
            this.eraseNumberNight();

          } else if (!this.checkDate(dateType, instance)) {
            this.resetDateIn();
            this.setDisabled(this.$iptDateOut, true);
            this.resetDateOut();
          } else {
            this.$iptDateIn.parent().removeClass('validatorInvalidState');
            this.$iptDateOut.parent().removeClass('validatorInvalidState');
            this.$errorMessage.hide();
            this.writeNumberNight();
            this.setDisabled(this.$iptDateOut, false);
          }
        }
        break;

      case "departure":
        if (stringDate == "") {
          this.resetDateOut();
          this.$iptDateIn.parent().removeClass('validatorInvalidState');
          this.eraseNumberNight();
        } else {
          if (!this.checkFormatDate(stringDate)) {
            this.$iptDateOut.parent().addClass('validatorInvalidState');
            this.$errorMessage.show().html("<button class='ancre_goto' data-goto='"+instance.id+"'>"+i18n.calendar.error+"</button>");
            
            if( !(jQuery(".erm").hasClass("erm__hidden")) ) {
              var el_error = jQuery("#"+instance.id).parent().children(".tDepartureDate");
              el_error.css('border-color','red');
            }
            this.eraseNumberNight();
          } else if (!this.checkDate(dateType, instance)) {
            this.resetDateOut();
            this.eraseNumberNight();
          } else {
            this.$iptDateOut.parent().removeClass('validatorInvalidState');
            this.$errorMessage.hide();
            this.writeNumberNight();
          }
        }
        break;
    }
    jQuery(".ancre_goto").bind('click', function() {
        jQuery('#'+jQuery(this).attr('data-goto')).focus();
    });
    
  },

  writeNumberNight: function() {
    var nbN = this.getNbDays(this.dateIn, this.dateOut);
    this.$NightTxt.text(nbN);
    this.$NightContent.removeClass('off');
    this.$iptNightNb.val(nbN);
  },

  eraseNumberNight: function() {
    this.$NightTxt.text('');
    this.$NightContent.addClass('off');
    this.$iptNightNb.val('');
  },

  //reset arrival date
  resetDateIn: function() {
    this.$iptDateIn.val("");
    this.$iptDayIn.val("");
    this.$iptMonthIn.val("");
    this.$iptYearIn.val("");
    this.dateIn = null;
  },

  // reset departure date
  resetDateOut: function() {
    this.$iptDateOut.val("");
    this.$iptDayOut.val("");
    this.$iptMonthOut.val("");
    this.$iptYearOut.val("");
    this.dateOut = null;
  },

  //find nb of days between 2 dates
  getNbDays: function(d1, d2) {
    d1 = new Date(this.$iptYearIn.val(), this.$iptMonthIn.val() - 1, this.$iptDayIn.val(), 12, 0, 0);
    this.dayOutSup = true;
    var nb = (d2.getTime() - d1.getTime()) / 86400000;
    if (jQuery(this.$iptDateIn).hasClass("tRoomArrivalDate") || jQuery(this.$iptDateIn).hasClass("tMeetingRoomArrivalDate")) {
      nb = nb + 1;
    }
    return Math.round(nb);
  },

  // Allow to get date info from bookingEngine
  getDateIn: function() {
    return this.$iptDateIn.val();
  },

  // Allow to get date info from bookingEngine
  getDateOut: function() {
    return this.$iptDateOut.val();
  }
};

/** < /scripts-v2104/booking/common/calendar.js **/

/** jQuery template **/
/** > /scripts-v2104/lib/jplugins/jquery-jtemplates.0.7.8.js **/
/* jTemplates 0.7.8 (http://jtemplates.tpython.com) Copyright (c) 2009 Tomasz Gloc */
eval(function(p,a,c,k,e,r){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--)r[e(c)]=k[c]||e(c);k=[function(e){return r[e]}];e=function(){return'\\w+'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('a(37.b&&!37.b.38){(9(b){6 m=9(s,A,f){5.1M=[];5.1u={};5.2p=E;5.1N={};5.1c={};5.f=b.1m({1Z:1f,3a:1O,2q:1f,2r:1f,3b:1O,3c:1O},f);5.1v=(5.f.1v!==F)?(5.f.1v):(13.20);5.Y=(5.f.Y!==F)?(5.f.Y):(13.3d);5.3e(s,A);a(s){5.1w(5.1c[\'21\'],A,5.f)}5.1c=E};m.y.2s=\'0.7.8\';m.R=1O;m.y.3e=9(s,A){6 2t=/\\{#14 *(\\w*?)( .*)*\\}/g;6 22,1x,M;6 1y=E;6 2u=[];2v((22=2t.3N(s))!=E){1y=2t.1y;1x=22[1];M=s.2w(\'{#/14 \'+1x+\'}\',1y);a(M==-1){C j Z(\'15: m "\'+1x+\'" 2x 23 3O.\');}5.1c[1x]=s.2y(1y,M);2u[1x]=13.2z(22[2])}a(1y===E){5.1c[\'21\']=s;c}N(6 i 24 5.1c){a(i!=\'21\'){5.1N[i]=j m()}}N(6 i 24 5.1c){a(i!=\'21\'){5.1N[i].1w(5.1c[i],b.1m({},A||{},5.1N||{}),b.1m({},5.f,2u[i]));5.1c[i]=E}}};m.y.1w=9(s,A,f){a(s==F){5.1M.B(j 1g(\'\',1,5));c}s=s.U(/[\\n\\r]/g,\'\');s=s.U(/\\{\\*.*?\\*\\}/g,\'\');5.2p=b.1m({},5.1N||{},A||{});5.f=j 2A(f);6 p=5.1M;6 1P=s.1h(/\\{#.*?\\}/g);6 16=0,M=0;6 e;6 1i=0;6 25=0;N(6 i=0,l=(1P)?(1P.V):(0);i<l;++i){6 17=1P[i];a(1i){M=s.2w(\'{#/1z}\');a(M==-1){C j Z("15: 3P 1Q 3f 1z.");}a(M>16){p.B(j 1g(s.2y(16,M),1,5))}16=M+11;1i=0;i=b.3Q(\'{#/1z}\',1P);1R}M=s.2w(17,16);a(M>16){p.B(j 1g(s.2y(16,M),1i,5))}6 3R=17.1h(/\\{#([\\w\\/]+).*?\\}/);6 26=I.$1;2B(26){q\'3S\':++25;p.27();q\'a\':e=j 1A(17,p);p.B(e);p=e;D;q\'J\':p.27();D;q\'/a\':2v(25){p=p.28();--25}q\'/N\':q\'/29\':p=p.28();D;q\'29\':e=j 1n(17,p,5);p.B(e);p=e;D;q\'N\':e=2a(17,p,5);p.B(e);p=e;D;q\'1R\':q\'D\':p.B(j 18(26));D;q\'2C\':p.B(j 2D(17,5.2p));D;q\'h\':p.B(j 2E(17));D;q\'2F\':p.B(j 2G(17));D;q\'3T\':p.B(j 1g(\'{\',1,5));D;q\'3U\':p.B(j 1g(\'}\',1,5));D;q\'1z\':1i=1;D;q\'/1z\':a(m.R){C j Z("15: 3V 2H 3f 1z.");}D;2I:a(m.R){C j Z(\'15: 3W 3X: \'+26+\'.\');}}16=M+17.V}a(s.V>16){p.B(j 1g(s.3Y(16),1i,5))}};m.y.K=9(d,h,z,H){++H;6 $T=d,2b,2c;a(5.f.3b){$T=5.1v(d,{2d:(5.f.3a&&H==1),1S:5.f.1Z},5.Y)}a(!5.f.3c){2b=5.1u;2c=h}J{2b=5.1v(5.1u,{2d:(5.f.2q),1S:1f},5.Y);2c=5.1v(h,{2d:(5.f.2q&&H==1),1S:1f},5.Y)}6 $P=b.1m({},2b,2c);6 $Q=(z!=F)?(z):({});$Q.2s=5.2s;6 19=\'\';N(6 i=0,l=5.1M.V;i<l;++i){19+=5.1M[i].K($T,$P,$Q,H)}--H;c 19};m.y.2J=9(1T,1o){5.1u[1T]=1o};13=9(){};13.3d=9(3g){c 3g.U(/&/g,\'&3Z;\').U(/>/g,\'&3h;\').U(/</g,\'&3i;\').U(/"/g,\'&40;\').U(/\'/g,\'&#39;\')};13.20=9(d,1B,Y){a(d==E){c d}2B(d.2K){q 2A:6 o={};N(6 i 24 d){o[i]=13.20(d[i],1B,Y)}a(!1B.1S){a(d.41("2L"))o.2L=d.2L}c o;q 42:6 o=[];N(6 i=0,l=d.V;i<l;++i){o[i]=13.20(d[i],1B,Y)}c o;q 2M:c(1B.2d)?(Y(d)):(d);q 43:a(1B.1S){a(m.R)C j Z("15: 44 45 23 46.");J c F}2I:c d}};13.2z=9(2e){a(2e===E||2e===F){c{}}6 o=2e.47(/[= ]/);a(o[0]===\'\'){o.48()}6 2N={};N(6 i=0,l=o.V;i<l;i+=2){2N[o[i]]=o[i+1]}c 2N};6 1g=9(2O,1i,14){5.2f=2O;5.3j=1i;5.1d=14};1g.y.K=9(d,h,z,H){6 2g=5.2f;a(!5.3j){6 2P=5.1d;6 $T=d;6 $P=h;6 $Q=z;2g=2g.U(/\\{(.*?)\\}/g,9(49,3k){1C{6 1D=10(3k);a(1E 1D==\'9\'){a(2P.f.1Z||!2P.f.2r){c\'\'}J{1D=1D($T,$P,$Q)}}c(1D===F)?(""):(2M(1D))}1F(e){a(m.R){a(e 1G 18)e.1j="4a";C e;}c""}})}c 2g};6 1A=9(L,1H){5.2h=1H;L.1h(/\\{#(?:J)*a (.*?)\\}/);5.3l=I.$1;5.1p=[];5.1q=[];5.1I=5.1p};1A.y.B=9(e){5.1I.B(e)};1A.y.28=9(){c 5.2h};1A.y.27=9(){5.1I=5.1q};1A.y.K=9(d,h,z,H){6 $T=d;6 $P=h;6 $Q=z;6 19=\'\';1C{6 2Q=(10(5.3l))?(5.1p):(5.1q);N(6 i=0,l=2Q.V;i<l;++i){19+=2Q[i].K(d,h,z,H)}}1F(e){a(m.R||(e 1G 18))C e;}c 19};2a=9(L,1H,14){a(L.1h(/\\{#N (\\w+?) *= *(\\S+?) +4b +(\\S+?) *(?:12=(\\S+?))*\\}/)){L=\'{#29 2a.3m 3n \'+I.$1+\' 2H=\'+(I.$2||0)+\' 1Q=\'+(I.$3||-1)+\' 12=\'+(I.$4||1)+\' u=$T}\';c j 1n(L,1H,14)}J{C j Z(\'15: 4c 4d "3o": \'+L);}};2a.3m=9(i){c i};6 1n=9(L,1H,14){5.2h=1H;5.1d=14;L.1h(/\\{#29 (.+?) 3n (\\w+?)( .+)*\\}/);5.3p=I.$1;5.x=I.$2;5.W=I.$3||E;5.W=13.2z(5.W);5.1p=[];5.1q=[];5.1I=5.1p};1n.y.B=9(e){5.1I.B(e)};1n.y.28=9(){c 5.2h};1n.y.27=9(){5.1I=5.1q};1n.y.K=9(d,h,z,H){1C{6 $T=d;6 $P=h;6 $Q=z;6 1r=10(5.3p);6 1U=[];6 1J=1E 1r;a(1J==\'3q\'){6 2R=[];b.1e(1r,9(k,v){1U.B(k);2R.B(v)});1r=2R}6 u=(5.W.u!==F)?(10(5.W.u)):(($T!=E)?($T):({}));6 s=1V(10(5.W.2H)||0),e;6 12=1V(10(5.W.12)||1);a(1J!=\'9\'){e=1r.V}J{a(5.W.1Q===F||5.W.1Q===E){e=1V.4e}J{e=1V(10(5.W.1Q))+((12>0)?(1):(-1))}}6 19=\'\';6 i,l;a(5.W.1W){6 2S=s+1V(10(5.W.1W));e=(2S>e)?(e):(2S)}a((e>s&&12>0)||(e<s&&12<0)){6 1K=0;6 3r=(1J!=\'9\')?(4f.4g((e-s)/12)):F;6 1s,1k;N(;((12>0)?(s<e):(s>e));s+=12,++1K){1s=1U[s];a(1J!=\'9\'){1k=1r[s]}J{1k=1r(s);a(1k===F||1k===E){D}}a((1E 1k==\'9\')&&(5.1d.f.1Z||!5.1d.f.2r)){1R}a((1J==\'3q\')&&(1s 24 2A)){1R}6 3s=u[5.x];u[5.x]=1k;u[5.x+\'$3t\']=s;u[5.x+\'$1K\']=1K;u[5.x+\'$3u\']=(1K==0);u[5.x+\'$3v\']=(s+12>=e);u[5.x+\'$3w\']=3r;u[5.x+\'$1U\']=(1s!==F&&1s.2K==2M)?(5.1d.Y(1s)):(1s);u[5.x+\'$1E\']=1E 1k;N(i=0,l=5.1p.V;i<l;++i){1C{19+=5.1p[i].K(u,h,z,H)}1F(2T){a(2T 1G 18){2B(2T.1j){q\'1R\':i=l;D;q\'D\':i=l;s=e;D;2I:C e;}}J{C e;}}}1l u[5.x+\'$3t\'];1l u[5.x+\'$1K\'];1l u[5.x+\'$3u\'];1l u[5.x+\'$3v\'];1l u[5.x+\'$3w\'];1l u[5.x+\'$1U\'];1l u[5.x+\'$1E\'];1l u[5.x];u[5.x]=3s}}J{N(i=0,l=5.1q.V;i<l;++i){19+=5.1q[i].K($T,h,z,H)}}c 19}1F(e){a(m.R||(e 1G 18))C e;c""}};6 18=9(1j){5.1j=1j};18.y=Z;18.y.K=9(d){C 5;};6 2D=9(L,A){L.1h(/\\{#2C (.*?)(?: 4h=(.*?))?\\}/);5.1d=A[I.$1];a(5.1d==F){a(m.R)C j Z(\'15: 4i 3o 2C: \'+I.$1);}5.3x=I.$2};2D.y.K=9(d,h,z,H){6 $T=d;6 $P=h;1C{c 5.1d.K(10(5.3x),h,z,H)}1F(e){a(m.R||(e 1G 18))C e;}c\'\'};6 2E=9(L){L.1h(/\\{#h 1T=(\\w*?) 1o=(.*?)\\}/);5.x=I.$1;5.2f=I.$2};2E.y.K=9(d,h,z,H){6 $T=d;6 $P=h;6 $Q=z;1C{h[5.x]=10(5.2f)}1F(e){a(m.R||(e 1G 18))C e;h[5.x]=F}c\'\'};6 2G=9(L){L.1h(/\\{#2F 4j=(.*?)\\}/);5.2U=10(I.$1);5.2V=5.2U.V;a(5.2V<=0){C j Z(\'15: 2F 4k 4l 4m\');}5.2W=0;5.2X=-1};2G.y.K=9(d,h,z,H){6 2Y=b.O(z,\'1X\');a(2Y!=5.2X){5.2X=2Y;5.2W=0}6 i=5.2W++%5.2V;c 5.2U[i]};b.1a.1w=9(s,A,f){a(s.2K===m){c b(5).1e(9(){b.O(5,\'2i\',s);b.O(5,\'1X\',0)})}J{c b(5).1e(9(){b.O(5,\'2i\',j m(s,A,f));b.O(5,\'1X\',0)})}};b.1a.4n=9(1L,A,f){6 s=b.2Z({1t:1L,1Y:1f}).3y;c b(5).1w(s,A,f)};b.1a.4o=9(30,A,f){6 s=b(\'#\'+30).2O();a(s==E){s=b(\'#\'+30).3z();s=s.U(/&3i;/g,"<").U(/&3h;/g,">")}s=b.4p(s);s=s.U(/^<\\!\\[4q\\[([\\s\\S]*)\\]\\]>$/3A,\'$1\');s=s.U(/^<\\!--([\\s\\S]*)-->$/3A,\'$1\');c b(5).1w(s,A,f)};b.1a.4r=9(){6 1W=0;b(5).1e(9(){a(b.2j(5)){++1W}});c 1W};b.1a.4s=9(){b(5).3B();c b(5).1e(9(){b.3C(5,\'2i\')})};b.1a.2J=9(1T,1o){c b(5).1e(9(){6 t=b.2j(5);a(t===F){a(m.R)C j Z(\'15: m 2x 23 3D.\');J c}t.2J(1T,1o)})};b.1a.31=9(d,h){c b(5).1e(9(){6 t=b.2j(5);a(t===F){a(m.R)C j Z(\'15: m 2x 23 3D.\');J c}b.O(5,\'1X\',b.O(5,\'1X\')+1);b(5).3z(t.K(d,h,5,0))})};b.1a.4t=9(1L,h,G){6 X=5;G=b.1m({1j:\'4u\',1Y:1O,32:1f},G);b.2Z({1t:1L,1j:G.1j,O:G.O,3E:G.3E,1Y:G.1Y,32:G.32,3F:G.3F,4v:\'4w\',4x:9(d){6 r=b(X).31(d,h);a(G.2k){G.2k(r)}},4y:G.4z,4A:G.4B});c 5};6 2l=9(1t,h,2m,2n,1b,G){5.3G=1t;5.1u=h;5.3H=2m;5.3I=2n;5.1b=1b;5.3J=E;5.33=G||{};6 X=5;b(1b).1e(9(){b.O(5,\'34\',X)});5.35()};2l.y.35=9(){5.3K();a(5.1b.V==0){c}6 X=5;b.4C(5.3G,5.3I,9(d){6 r=b(X.1b).31(d,X.1u);a(X.33.2k){X.33.2k(r)}});5.3J=4D(9(){X.35()},5.3H)};2l.y.3K=9(){5.1b=b.3L(5.1b,9(o){a(b.4E.4F){6 n=o.36;2v(n&&n!=4G){n=n.36}c n!=E}J{c o.36!=E}})};b.1a.4H=9(1t,h,2m,2n,G){c j 2l(1t,h,2m,2n,5,G)};b.1a.3B=9(){c b(5).1e(9(){6 2o=b.O(5,\'34\');a(2o==E){c}6 X=5;2o.1b=b.3L(2o.1b,9(o){c o!=X});b.3C(5,\'34\')})};b.1m({38:9(s,A,f){c j m(s,A,f)},4I:9(1L,A,f){6 s=b.2Z({1t:1L,1Y:1f}).3y;c j m(s,A,f)},2j:9(z){c b.O(z,\'2i\')},4J:9(14,O,3M){c 14.K(O,3M,F,0)},4K:9(1o){m.R=1o}})})(b)}',62,295,'|||||this|var|||function|if|jQuery|return|||settings||param||new|||Template|||node|case||||extData|||_name|prototype|element|includes|push|throw|break|null|undefined|options|deep|RegExp|else|get|oper|se|for|data|||DEBUG_MODE|||replace|length|_option|that|f_escapeString|Error|eval||step|TemplateUtils|template|jTemplates|ss|this_op|JTException|ret|fn|objs|_templates_code|_template|each|false|TextNode|match|literalMode|type|cval|delete|extend|opFOREACH|value|_onTrue|_onFalse|fcount|ckey|url|_param|f_cloneData|setTemplate|tname|lastIndex|literal|opIF|filter|try|__tmp|typeof|catch|instanceof|par|_currentState|mode|iteration|url_|_tree|_templates|true|op|end|continue|noFunc|name|key|Number|count|jTemplateSID|async|disallow_functions|cloneData|MAIN|iter|not|in|elseif_level|op_|switchToElse|getParent|foreach|opFORFactory|_param1|_param2|escapeData|optionText|_value|__t|_parent|jTemplate|getTemplate|on_success|Updater|interval|args|updater|_includes|filter_params|runnable_functions|version|reg|_template_settings|while|indexOf|is|substring|optionToObject|Object|switch|include|Include|UserParam|cycle|Cycle|begin|default|setParam|constructor|toString|String|obj|val|__template|tab|arr|tmp|ex|_values|_length|_index|_lastSessionID|sid|ajax|elementName|processTemplate|cache|_options|jTemplateUpdater|run|parentNode|window|createTemplate||filter_data|clone_data|clone_params|escapeHTML|splitTemplates|of|txt|gt|lt|_literalMode|__1|_cond|funcIterator|as|find|_arg|object|_total|prevValue|index|first|last|total|_root|responseText|html|im|processTemplateStop|removeData|defined|dataFilter|timeout|_url|_interval|_args|timer|detectDeletedNodes|grep|parameter|exec|closed|No|inArray|ppp|elseif|ldelim|rdelim|Missing|unknown|tag|substr|amp|quot|hasOwnProperty|Array|Function|Functions|are|allowed|split|shift|__0|subtemplate|to|Operator|failed|MAX_VALUE|Math|ceil|root|Cannot|values|has|no|elements|setTemplateURL|setTemplateElement|trim|CDATA|hasTemplate|removeTemplate|processTemplateURL|GET|dataType|json|success|error|on_error|complete|on_complete|getJSON|setTimeout|browser|msie|document|processTemplateStart|createTemplateURL|processTemplateToText|jTemplatesDebugMode'.split('|'),0,{}))

/** < /scripts-v2104/lib/jplugins/jquery-jtemplates.0.7.8.js **/

/** > /scripts-v2104/lib/jplugins/jquery.tools.min.js **/
/*
 * jquery.tools 1.1.2 - The missing UI library for the Web
 * 
 * [tools.tooltip-1.1.2, tools.tooltip.dynamic-1.0.1]
 * 
 * Copyright (c) 2009 Tero Piirainen
 * http://flowplayer.org/tools/
 *
 * Dual licensed under MIT and GPL 2+ licenses
 * http://www.opensource.org/licenses
 * 
 * -----
 * 
 * File generated: Wed Oct 07 14:12:20 GMT+00:00 2009
 */
 jQuery.noConflict();
(function(c){var d=[];c.tools=c.tools||{};c.tools.tooltip={version:"1.1.2",conf:{effect:"toggle",fadeOutSpeed:"fast",tip:null,predelay:0,delay:30,opacity:1,lazy:undefined,position:["top","center"],offset:[0,0],cancelDefault:true,relative:false,oneInstance:true,events:{def:"mouseover,mouseout",input:"focus,blur",widget:"focus mouseover,blur mouseout",tooltip:"mouseover,mouseout"},api:false},addEffect:function(e,g,f){b[e]=[g,f]}};var b={toggle:[function(e){var f=this.getConf(),g=this.getTip(),h=f.opacity;if(h<1){g.css({opacity:h})}g.show();e.call()},function(e){this.getTip().hide();e.call()}],fade:[function(e){this.getTip().fadeIn(this.getConf().fadeInSpeed,e)},function(e){this.getTip().fadeOut(this.getConf().fadeOutSpeed,e)}]};function a(f,g){var p=this,k=c(this);f.data("tooltip",p);var l=f.next();if(g.tip){l=c(g.tip);if(l.length>1){l=f.nextAll(g.tip).eq(0);if(!l.length){l=f.parent().nextAll(g.tip).eq(0)}}}function o(u){var t=g.relative?f.position().top:f.offset().top,s=g.relative?f.position().left:f.offset().left,v=g.position[0];t-=l.outerHeight()-g.offset[0];s+=f.outerWidth()+g.offset[1];var q=l.outerHeight()+f.outerHeight();if(v=="center"){t+=q/2}if(v=="bottom"){t+=q}v=g.position[1];var r=l.outerWidth()+f.outerWidth();if(v=="center"){s-=r/2}if(v=="left"){s-=r}return{top:t,left:s}}var i=f.is(":input"),e=i&&f.is(":checkbox, :radio, select, :button"),h=f.attr("type"),n=g.events[h]||g.events[i?(e?"widget":"input"):"def"];n=n.split(/,\s*/);if(n.length!=2){throw"Tooltip: bad events configuration for "+h}f.bind(n[0],function(r){if(g.oneInstance){c.each(d,function(){this.hide()})}var q=l.data("trigger");if(q&&q[0]!=this){l.hide().stop(true,true)}r.target=this;p.show(r);n=g.events.tooltip.split(/,\s*/);l.bind(n[0],function(){p.show(r)});if(n[1]){l.bind(n[1],function(){p.hide(r)})}});f.bind(n[1],function(q){p.hide(q)});if(!c.browser.msie&&!i&&!g.predelay){f.mousemove(function(){if(!p.isShown()){f.triggerHandler("mouseover")}})}if(g.opacity<1){l.css("opacity",g.opacity)}var m=0,j=f.attr("title");if(j&&g.cancelDefault){f.removeAttr("title");f.data("title",j)}c.extend(p,{show:function(r){if(r){f=c(r.target)}clearTimeout(l.data("timer"));if(l.is(":animated")||l.is(":visible")){return p}function q(){l.data("trigger",f);var t=o(r);if(g.tip&&j){l.html(f.data("title"))}r=r||c.Event();r.type="onBeforeShow";k.trigger(r,[t]);if(r.isDefaultPrevented()){return p}t=o(r);l.css({position:"absolute",top:t.top,left:t.left});var s=b[g.effect];if(!s){throw'Nonexistent effect "'+g.effect+'"'}s[0].call(p,function(){r.type="onShow";k.trigger(r)})}if(g.predelay){clearTimeout(m);m=setTimeout(q,g.predelay)}else{q()}return p},hide:function(r){clearTimeout(l.data("timer"));clearTimeout(m);if(!l.is(":visible")){return}function q(){r=r||c.Event();r.type="onBeforeHide";k.trigger(r);if(r.isDefaultPrevented()){return}b[g.effect][1].call(p,function(){r.type="onHide";k.trigger(r)})}if(g.delay&&r){l.data("timer",setTimeout(q,g.delay))}else{q()}return p},isShown:function(){return l.is(":visible, :animated")},getConf:function(){return g},getTip:function(){return l},getTrigger:function(){return f},bind:function(q,r){k.bind(q,r);return p},onHide:function(q){return this.bind("onHide",q)},onBeforeShow:function(q){return this.bind("onBeforeShow",q)},onShow:function(q){return this.bind("onShow",q)},onBeforeHide:function(q){return this.bind("onBeforeHide",q)},unbind:function(q){k.unbind(q);return p}});c.each(g,function(q,r){if(c.isFunction(r)){p.bind(q,r)}})}c.prototype.tooltip=function(e){var f=this.eq(typeof e=="number"?e:0).data("tooltip");if(f){return f}var g=c.extend(true,{},c.tools.tooltip.conf);if(c.isFunction(e)){e={onBeforeShow:e}}else{if(typeof e=="string"){e={tip:e}}}e=c.extend(true,g,e);if(typeof e.position=="string"){e.position=e.position.split(/,?\s/)}if(e.lazy!==false&&(e.lazy===true||this.length>20)){this.one("mouseover",function(h){f=new a(c(this),e);f.show(h);d.push(f)})}else{this.each(function(){f=new a(c(this),e);d.push(f)})}return e.api?f:this}})(jQuery);
(function(d){var c=d.tools.tooltip;c.plugins=c.plugins||{};c.plugins.dynamic={version:"1.0.1",conf:{api:false,classNames:"top right bottom left"}};function b(h){var e=d(window);var g=e.width()+e.scrollLeft();var f=e.height()+e.scrollTop();return[h.offset().top<=e.scrollTop(),g<=h.offset().left+h.width(),f<=h.offset().top+h.height(),e.scrollLeft()>=h.offset().left]}function a(f){var e=f.length;while(e--){if(f[e]){return false}}return true}d.fn.dynamic=function(g){var h=d.extend({},c.plugins.dynamic.conf),f;if(typeof g=="number"){g={speed:g}}g=d.extend(h,g);var e=g.classNames.split(/\s/),i;this.each(function(){if(d(this).tooltip().jquery){throw"Lazy feature not supported by dynamic plugin. set lazy: false for tooltip"}var j=d(this).tooltip().onBeforeShow(function(n,o){var m=this.getTip(),l=this.getConf();if(!i){i=[l.position[0],l.position[1],l.offset[0],l.offset[1],d.extend({},l)]}d.extend(l,i[4]);l.position=[i[0],i[1]];l.offset=[i[2],i[3]];m.css({visibility:"hidden",position:"absolute",top:o.top,left:o.left}).show();var k=b(m);if(!a(k)){if(k[2]){d.extend(l,g.top);l.position[0]="top";m.addClass(e[0])}if(k[3]){d.extend(l,g.right);l.position[1]="right";m.addClass(e[1])}if(k[0]){d.extend(l,g.bottom);l.position[0]="bottom";m.addClass(e[2])}if(k[1]){d.extend(l,g.left);l.position[1]="left";m.addClass(e[3])}if(k[0]||k[2]){l.offset[0]*=-1}if(k[1]||k[3]){l.offset[1]*=-1}}m.css({visibility:"visible"}).hide()});j.onShow(function(){var l=this.getConf(),k=this.getTip();l.position=[i[0],i[1]];l.offset=[i[2],i[3]]});j.onHide(function(){var k=this.getTip();k.removeClass(g.classNames)});f=j});return g.api?f:this}})(jQuery);

/** < /scripts-v2104/lib/jplugins/jquery.tools.min.js **/

/** > /scripts-v2104/booking/common/currencies.js **/
Currencies = {
    ratesTab : null,
    
    getCookie : function(cookieName) {
        var cookiesArray = document.cookie.split(';'), i, currentCookie, cookieValue;
        for (i = 0; i < cookiesArray.length; i++) {
            currentCookie = jQuery.trim(cookiesArray[i]);
            if(currentCookie.split('=')[0] == cookieName) {
                cookieValue = currentCookie.substring(cookieName.length+1, currentCookie.length);
                break;
            }
        }
        return cookieValue;
    },
    
    _init : function(viewBean, select){
        if (viewBean){
            Currencies.ratesTab = viewBean;
            if(!Currencies.ratesTab.defaultCurrency) {
                Currencies.ratesTab.defaultCurrency = Currencies.getCookie("userCurrency");
                if(typeof newGeolocSystem != "undefined")
                    newGeolocSystem.oldCurrenciesSelectorId = select;
            }
            basketCurrency=Currencies.ratesTab.basketCurrency;
            if(basketCurrency){
                Currencies._fillCurrencySelectBasket(jQuery("#"+select),basketCurrency);
            }else{
                Currencies._fillCurrencySelect(jQuery("#"+select));
            }
        }
    },
    
    //*************************************************************************//
    // _initDetailsLinks
    // Autre Init pour permettre de renvoyer une valeur par défaut
    // ex : Currencies._initExtend(jsonCurrencies, "selectCurrency", jsonCancellationLinks.cancellationCurrency);
    // viewBean         : --> viewBean contenant toutes les infos pour la conversion
    // select       : --> ID de la liste déroulante pour la conversion de devise
    // basketCurrency       : --> devise de départ
    //*************************************************************************//
    _initExtend : function(viewBean, select, basketCurrency){
        if (viewBean){
            Currencies.ratesTab = viewBean;
            if(!Currencies.ratesTab.defaultCurrency) {
                Currencies.ratesTab.defaultCurrency = Currencies.getCookie("userCurrency");
                if(typeof newGeolocSystem != "undefined")
                    newGeolocSystem.oldCurrenciesSelectorId = select;
            }
            if(basketCurrency){
                Currencies._fillCurrencySelectBasket(jQuery("#"+select),basketCurrency);
            }else{
                Currencies._fillCurrencySelect(jQuery("#"+select));
            }
        }
    },
	
    _save : function(prices){
        (prices || jQuery(".price")).each(
            function(){
                var cur = jQuery(this).find(".tCurrency");
                var amo = jQuery(this).find(".tAmount");
                jQuery(this).empty().append(amo).append("&nbsp;").append(cur)
                .append(amo.clone().removeClass('tAmount').addClass('tOrigAmount').hide())
                .append(cur.clone().removeClass('tCurrency').addClass('tOrigCurrency').hide());
            }
            );
    },
	
    _convert : function(rates,currency,prices){

        prices = prices || jQuery(".tPrice");
        prices.each(
            function(){
                var cur = jQuery(this).find(".tCurrency");
                var amo = jQuery(this).find(".tAmount");
                var origCur = jQuery(this).find(".tOrigCurrency").html();
                var origAmo = jQuery(this).find(".tOrigAmount").html();
                if (origCur!='---' && rates[currency] && rates[origCur] && rates[origCur]!=0 ) {
                    cur.html(currency);
                    amo.html((origAmo/ (rates[currency] / rates[origCur])).toFixed(2));
                } else {
                    Currencies._revert(jQuery(this));
                }
                if (origCur==currency) {
                    Currencies._revert(jQuery(this));
                }
            }
            );
    },

    /**
     * Convert currencies
     * @param  {JSON} jsonMoney [{amount:55,currency:'EUR',origCurrency:'USD', tOrigAmount:'10'}, ...]
     * @param  {[type]} currency  [description]
     * @return {[type]}           [description]
     */
    _convertPrices : function(prices, currency) {
        if (prices && currency) {
            var rates = Currencies.ratesTab.currencies,
                pos = 0,
                nbPrice = prices.length;

            while(pos < nbPrice) {
                var price = prices[pos],
                    cur = price['currency'],
                    amo = price['amount'],
                    origCur = price['origCur'],
                    origAmo = price['origAmo'];

                if (origCur!='---' && rates[currency] && rates[origCur] && rates[origCur]!=0 ) {
                    price['currency'] = currency;
                    price['amount'] = (origAmo/ (rates[currency] / rates[origCur])).toFixed(2);
                } else {
                    price['currency'] = price['origCur'];
                    price['origAmo'] = price['origAmo'];
                }
                if (origCur==currency) {
                    price['currency'] = price['origCur'];
                    price['origAmo'] = price['origAmo'];
                }

                pos++;
            }
        }
    },
    
    _revert : function(prices){
        prices = prices || jQuery(".price");
        prices.each(
            function(){
					
                jQuery(this).find(".tCurrency").html(jQuery(this).find(".tOrigCurrency").html());
                jQuery(this).find(".tAmount").html(jQuery(this).find(".tOrigAmount").html());
            }
            );
    },
	
    _fillCurrencySelect : function(select){
	
        if(select && Currencies.ratesTab.currencies){
            jQuery.each(Currencies.ratesTab.currencies, function(index){
                var oOption = document.createElement('option');
                oOption.value = index;
                oOption.innerHTML = index;
				
                if(Currencies.ratesTab.defaultCurrency == index) oOption.selected = true;
                select.append(oOption);
            });
            select.hide().show();
        }
    },
	
    _fillCurrencySelectBasket : function(select, basket){
	
        if(select && Currencies.ratesTab.currencies){
            jQuery.each(Currencies.ratesTab.currencies, function(index){
                var oOption = document.createElement('option');
                oOption.value = index;
                oOption.innerHTML = index;
				
                if(basket == index) oOption.selected = true;
                select.append(oOption);
            });
            select.hide().show();
        }
    },

    _getMapBudgetRange : function(eurRange, targetCurrency){
        if(!eurRange || !targetCurrency || (!Currencies.ratesTab && !(typeof gViewBeans!=='undefined' && gViewBeans.CurrenciesViewBean))){
            return;
        }

        if(targetCurrency === 'EUR'){return eurRange;}

        if(!Currencies.ratesTab){
            Currencies.ratesTab = gViewBeans.CurrenciesViewBean;
        }
        var val, 
            ranges = eurRange.split('|').map(function(rangeValue){
                val = (Number(rangeValue) / Number(Currencies.ratesTab.currencies[targetCurrency])); 
                return Math.floor((val + 5) / 10) * 10;
            });

        return ranges.join('|');

    }
	
}

/** < /scripts-v2104/booking/common/currencies.js **/

/** js form engine **/
/** > /scripts-v2104/lib/ajax-request.js **/

/** > /services/session-service/scripts-v2104/main.js **/
;!function(t){var n={};function e(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}e.m=t,e.c=n,e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:r})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,n){if(1&n&&(t=e(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(e.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var o in t)e.d(r,o,function(n){return t[n]}.bind(null,o));return r},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},e.p="",e(e.s=328)}([function(t,n,e){var r=e(28);function o(t,n){for(var e=0;e<n.length;e++){var o=n[e];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),r(t,o.key,o)}}t.exports=function(t,n,e){return n&&o(t.prototype,n),e&&o(t,e),t}},function(t,n){t.exports=function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}},function(t,n,e){t.exports=e(263)},function(t,n){var e=t.exports={version:"2.6.11"};"number"==typeof __e&&(__e=e)},,,function(t,n,e){"use strict";e.r(n),e.d(n,"Tools",(function(){return h}));var r=e(2),o=e.n(r),i=e(15),a=e.n(i),c=e(21),u=e.n(c),s=e(53),f=e.n(s),l=e(1),p=e.n(l),v=e(0),d=e.n(v),h=function(){function t(){p()(this,t)}return d()(t,null,[{key:"invertObject",value:function(t){var n={};for(var e in t)t.hasOwnProperty(e)&&(n[t[e]]=e);return n}},{key:"getProp",value:function(t,n){return n.split(".").reduce((function(t,n){return t&&t[n]?t[n]:null}),t)}},{key:"flattenObject",value:function(t){var n={};for(var e in t)if(t.hasOwnProperty(e))if(null!=t[e]&&"object"===f()(t[e])&&null==t[e].length){var r=this.flattenObject(t[e]);for(var o in r)r.hasOwnProperty(o)&&(n[e+"."+o]=r[o])}else n[e]=t[e];return n}},{key:"getClassName",value:function(t){var n=/function\s([^(]{1,})\(/.exec(t.toString());return n&&n.length>1?n[1].trim():""}},{key:"convertToUrlParams",value:function(t){return u()(t).filter((function(n){return null!=t[n]})).map((function(n){return"".concat(encodeURIComponent(n),"=").concat(encodeURIComponent(t[n]))})).join("&")}},{key:"camelize",value:function(t){return t.replace(/(?:^\w|[A-Z]|\b\w|\s+)/g,(function(t,n){return 0==+t?"":0===n?t.toLowerCase():t.toUpperCase()}))}},{key:"kebabize",value:function(t){return t=(t=(t=(t=t.replace(/([a-z][A-Z])/g,(function(t){return t.substr(0,1)+"-"+t.substr(1,1).toLowerCase()}))).toLowerCase()).replace(/[^-a-z0-9]+/g,"-")).replace(/^-+/,"").replace(/-$/,"")}},{key:"guid",value:function(){function t(){return Math.floor(65536*(1+Math.random())).toString(16).substring(1)}return t()+t()+"-"+t()+"-"+t()+"-"+t()+"-"+t()+t()+t()}},{key:"getService",value:function(n){return t.getProp(window,"AccorHotels.services.".concat(n))}},{key:"getHashValue",value:function(t){var n=location.hash.match(new RegExp(t+"=([^&]*)"));return n?n[1]:null}},{key:"loadScript",value:function(t){return new a.a((function(n,e){var r=document.createElement("script");r.onload=function(){n()},r.onerror=function(){e()},r.src=t,document.getElementsByTagName("head")[0].appendChild(r)}))}},{key:"assign",value:function(t,n){if(null==t)throw new TypeError("Cannot convert first argument to object");for(var e=Object(t),r=1;r<arguments.length;r++){var i=arguments[r];if(null!=i)for(var a=u()(Object(i)),c=0,s=a.length;c<s;c++){var f=a[c],l=o()(i,f);void 0!==l&&l.enumerable&&(e[f]=i[f])}}return e}},{key:"deepExtend",value:function(n,e){for(var r in n=n||{},e)e.hasOwnProperty(r)&&("[object Object]"===Object.prototype.toString.call(e[r])?n[r]=t.deepExtend(n[r],e[r]):n[r]=e[r]);return n}}]),t}()},function(t,n){var e=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=e)},,,,function(t,n,e){var r=e(7),o=e(3),i=e(44),a=e(32),c=e(38),u=function(t,n,e){var s,f,l,p=t&u.F,v=t&u.G,d=t&u.S,h=t&u.P,y=t&u.B,g=t&u.W,m=v?o:o[n]||(o[n]={}),b=m.prototype,x=v?r:d?r[n]:(r[n]||{}).prototype;for(s in v&&(e=n),e)(f=!p&&x&&void 0!==x[s])&&c(m,s)||(l=f?x[s]:e[s],m[s]=v&&"function"!=typeof x[s]?e[s]:y&&f?i(l,r):g&&x[s]==l?function(t){var n=function(n,e,r){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(n);case 2:return new t(n,e)}return new t(n,e,r)}return t.apply(this,arguments)};return n.prototype=t.prototype,n}(l):h&&"function"==typeof l?i(Function.call,l):l,h&&((m.virtual||(m.virtual={}))[s]=l,t&u.R&&b&&!b[s]&&a(b,s,l)))};u.F=1,u.G=2,u.S=4,u.P=8,u.B=16,u.W=32,u.U=64,u.R=128,t.exports=u},function(t,n,e){var r=e(85)("wks"),o=e(65),i=e(7).Symbol,a="function"==typeof i;(t.exports=function(t){return r[t]||(r[t]=a&&i[t]||(a?i:o)("Symbol."+t))}).store=r},function(t,n,e){var r,o;
/*!
 * JavaScript Cookie v2.2.0
 * https://github.com/js-cookie/js-cookie
 *
 * Copyright 2006, 2015 Klaus Hartl & Fagner Brack
 * Released under the MIT license
 */!function(i){if(void 0===(o="function"==typeof(r=i)?r.call(n,e,n,t):r)||(t.exports=o),!0,t.exports=i(),!!0){var a=window.Cookies,c=window.Cookies=i();c.noConflict=function(){return window.Cookies=a,c}}}((function(){function t(){for(var t=0,n={};t<arguments.length;t++){var e=arguments[t];for(var r in e)n[r]=e[r]}return n}return function n(e){function r(n,o,i){var a;if("undefined"!=typeof document){if(arguments.length>1){if("number"==typeof(i=t({path:"/"},r.defaults,i)).expires){var c=new Date;c.setMilliseconds(c.getMilliseconds()+864e5*i.expires),i.expires=c}i.expires=i.expires?i.expires.toUTCString():"";try{a=JSON.stringify(o),/^[\{\[]/.test(a)&&(o=a)}catch(t){}o=e.write?e.write(o,n):encodeURIComponent(String(o)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,decodeURIComponent),n=(n=(n=encodeURIComponent(String(n))).replace(/%(23|24|26|2B|5E|60|7C)/g,decodeURIComponent)).replace(/[\(\)]/g,escape);var u="";for(var s in i)i[s]&&(u+="; "+s,!0!==i[s]&&(u+="="+i[s]));return document.cookie=n+"="+o+u}n||(a={});for(var f=document.cookie?document.cookie.split("; "):[],l=/(%[0-9A-Z]{2})+/g,p=0;p<f.length;p++){var v=f[p].split("="),d=v.slice(1).join("=");this.json||'"'!==d.charAt(0)||(d=d.slice(1,-1));try{var h=v[0].replace(l,decodeURIComponent);if(d=e.read?e.read(d,h):e(d,h)||d.replace(l,decodeURIComponent),this.json)try{d=JSON.parse(d)}catch(t){}if(n===h){a=d;break}n||(a[h]=d)}catch(t){}}return a}}return r.set=r,r.get=function(t){return r.call(r,t)},r.getJSON=function(){return r.apply({json:!0},[].slice.call(arguments))},r.defaults={},r.remove=function(n,e){r(n,"",t(e,{expires:-1}))},r.withConverter=n,r}((function(){}))}))},,function(t,n,e){t.exports=e(248)},,,function(t,n,e){t.exports=!e(39)((function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a}))},function(t,n,e){t.exports=e(281)},function(t,n,e){var r=e(23);t.exports=function(t){if(!r(t))throw TypeError(t+" is not an object!");return t}},function(t,n,e){t.exports=e(164)},function(t,n,e){var r=e(20),o=e(104),i=e(82),a=Object.defineProperty;n.f=e(18)?Object.defineProperty:function(t,n,e){if(r(t),n=i(n,!0),r(e),o)try{return a(t,n,e)}catch(t){}if("get"in e||"set"in e)throw TypeError("Accessors not supported!");return"value"in e&&(t[n]=e.value),t}},function(t,n){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,n,e){t.exports=e(258)},,function(t,n,e){t.exports=e(262)},function(t,n,e){t.exports=e(283)},function(t,n,e){t.exports=e(154)},,function(t,n,e){t.exports=e(303)},function(t,n,e){var r=e(126),o=e(68);t.exports=function(t){return r(o(t))}},function(t,n,e){var r=e(22),o=e(55);t.exports=e(18)?function(t,n,e){return r.f(t,n,o(1,e))}:function(t,n,e){return t[n]=e,t}},,,,function(t,n){t.exports=function(t){var n=typeof t;return null!=t&&("object"==n||"function"==n)}},function(t,n,e){var r,o;!function(i,a){"use strict";void 0===(o="function"==typeof(r=function(){var t=function(){},n=["trace","debug","info","warn","error"];function e(t,n){var e=t[n];if("function"==typeof e.bind)return e.bind(t);try{return Function.prototype.bind.call(e,t)}catch(n){return function(){return Function.prototype.apply.apply(e,[t,arguments])}}}function r(n){return"debug"===n&&(n="log"),"undefined"!=typeof console&&(void 0!==console[n]?e(console,n):void 0!==console.log?e(console,"log"):t)}function o(e,r){for(var o=0;o<n.length;o++){var i=n[o];this[i]=o<e?t:this.methodFactory(i,e,r)}this.log=this.debug}function i(t,n,e){return function(){"undefined"!=typeof console&&(o.call(this,n,e),this[t].apply(this,arguments))}}function a(t,n,e){return r(t)||i.apply(this,arguments)}function c(t,e,r){var i,c=this,u="loglevel";function s(){var t;if("undefined"!=typeof window){try{t=window.localStorage[u]}catch(t){}if(void 0===t)try{var n=window.document.cookie,e=n.indexOf(encodeURIComponent(u)+"=");-1!==e&&(t=/^([^;]+)/.exec(n.slice(e))[1])}catch(t){}return void 0===c.levels[t]&&(t=void 0),t}}t&&(u+=":"+t),c.name=t,c.levels={TRACE:0,DEBUG:1,INFO:2,WARN:3,ERROR:4,SILENT:5},c.methodFactory=r||a,c.getLevel=function(){return i},c.setLevel=function(e,r){if("string"==typeof e&&void 0!==c.levels[e.toUpperCase()]&&(e=c.levels[e.toUpperCase()]),!("number"==typeof e&&e>=0&&e<=c.levels.SILENT))throw"log.setLevel() called with invalid level: "+e;if(i=e,!1!==r&&function(t){var e=(n[t]||"silent").toUpperCase();if("undefined"!=typeof window){try{return void(window.localStorage[u]=e)}catch(t){}try{window.document.cookie=encodeURIComponent(u)+"="+e+";"}catch(t){}}}(e),o.call(c,e,t),"undefined"==typeof console&&e<c.levels.SILENT)return"No console available for logging"},c.setDefaultLevel=function(t){s()||c.setLevel(t,!1)},c.enableAll=function(t){c.setLevel(c.levels.TRACE,t)},c.disableAll=function(t){c.setLevel(c.levels.SILENT,t)};var f=s();null==f&&(f=null==e?"WARN":e),c.setLevel(f,!1)}var u=new c,s={};u.getLogger=function(t){if("string"!=typeof t||""===t)throw new TypeError("You must supply a name when creating a logger.");var n=s[t];return n||(n=s[t]=new c(t,u.getLevel(),u.methodFactory)),n};var f="undefined"!=typeof window?window.log:void 0;return u.noConflict=function(){return"undefined"!=typeof window&&window.log===u&&(window.log=f),u},u.getLoggers=function(){return s},u})?r.call(n,e,n,t):r)||(t.exports=o)}()},function(t,n){var e={}.hasOwnProperty;t.exports=function(t,n){return e.call(t,n)}},function(t,n){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,n,e){"use strict";e.r(n),e.d(n,"getDomainData",(function(){return u})),e.d(n,"getCurrentDomain",(function(){return s})),e.d(n,"isInWebView",(function(){return p})),e.d(n,"isIE",(function(){return d})),e.d(n,"getLang",(function(){return f})),e.d(n,"getCountry",(function(){return l})),e.d(n,"getAppRoute",(function(){return c})),e.d(n,"isMobile",(function(){return v}));var r=e(13),o=e(235),i=[{brandName:"businesstravel",brandCode:"BUS",urlPattern:/businesstravel\.accor\.com/,code:"ah",gtmId:"GTM-TKQN7D"},{brandName:"hotelf1",brandCode:"HOF",urlPattern:/hotelf1\.accor\.com/,code:"for",gtmId:"GTM-TKQN7D"},{brandName:"ibis",brandCode:"IBI",urlPattern:/ibis\.accor\.com/,code:"ibi",gtmId:"GTM-TKQN7D"},{brandName:"meetings",brandCode:"MEE",urlPattern:/meetings\.accor\.com/,code:"ah",gtmId:"GTM-TKQN7D"},{brandName:"mercure",brandCode:"MER",urlPattern:/mercure\.accor\.com/,code:"mer",gtmId:"GTM-TKQN7D"},{brandName:"mgallery",brandCode:"MGA",urlPattern:/mgallery\.accor\.com/,code:"mga",gtmId:"GTM-TKQN7D"},{brandName:"novotel",brandCode:"NOV",urlPattern:/novotel\.accor\.com/,code:"for",gtmId:"GTM-TKQN7D"},{brandName:"pullman",brandCode:"PUL",urlPattern:/pullman\.accor\.com/,code:"pul",gtmId:"GTM-TKQN7D"},{brandName:"sofitel",brandCode:"SOF",urlPattern:/sofitel\.accor\.com/,code:"sof",gtmId:"GTM-TKQN7D"},{brandName:"travelpros",brandCode:"TRA",urlPattern:/travelpros\.accor\.com/,code:"ah",gtmId:"GTM-TKQN7D"},{brandName:"all",brandCode:"ACH",urlPattern:/all.accor\.com/,code:"ah",gtmId:"GTM-TKQN7D"},{brandName:"accorhotels.cn",brandCode:"ACN",urlPattern:/\.accorhotels\.cn/,code:"acn",gtmId:"GTM-MQMZNH7"},{brandName:"thesebel",brandCode:"SEB",urlPattern:/thesebel\.hotelandbook\.com/,code:"seb",gtmId:"GTM-MG78MFC"}],a={brandName:"all",brandCode:"ACH",urlPattern:"default",code:"ah",gtmId:"GTM-TKQN7D"};function c(){var t,n=(t=document.querySelectorAll('meta[name="X-Accor-rid"]')[0])?"hotel/"+t.content:"homepage";return{android:{host:n,scheme:"accorhotels",package:"com.accor.appli.hybrid"},ios:"accorhotels://"+n}}function u(){for(var t=location.hostname,n=0;n<i.length;n++){var e=i[n];if(t.match(e.urlPattern))return e}return a}function s(){var t=u(),n=location.hostname.substring(location.hostname.lastIndexOf(".",location.hostname.lastIndexOf(".")-1)+1);return o({},{isMobile:location.hostname.indexOf("m."+n)>-1,rootHostname:n},t)}function f(){var t,n=function(t){return"gb"===t?"en":t};return(t=document.location.href.match(/\/([a-z]{2}(?:-[a-z]{2})?)\//))?n(t[1]):(t=document.documentElement.lang)||(t=document.getElementsByTagName("html")[0].getAttribute("xml:lang"))?n(t):"en"}function l(){var t,n,e,o={"other-regions-of-africa":"africa","other-regions-of-asia":"asia",australia:"australia",belgium:"belgium",brazil:"brasil",canada:"canada",china:"china","other-regions-of-europe":"czech-republic-slovakia-hungary-romania",denmark:"denmark-norway-finland",germany:"deutschland",spain:"espana",france:"france",india:"india",indonesia:"indonesia",ireland:"ireland",italy:"italia",japan:"japan",mexico:"mexico","other-regions-of-middle-east":"middle-east",netherland:"nederland","new-zealand":"new-zealand-fiji",austria:"oesterreich",poland:"polska",portugal:"portugal",russia:"russia",malaysia:"singapore-malaysia","republic-of-korea":"south-korea","other-regions-of-south-america":"sudamerica",sweden:"sweden",switzerland:"switzerland","hong-kong":"taiwan-hongkong-macao",thailand:"thailand",turkey:"turkey","united-kingdom":"united-kingdom","other-regions-of-north-america":"usa"},i=document.location.href.match(/\/([a-z]{2}(?:-[a-z]{2})?)\/([a-z-]*)/);if(i){if(n=o[t=i[2]])return n;if(-1!=["algeria","argentina","australia","austria","bahrain","belgium","benin","brazil","bulgaria","cambodia","cameroon","canada","chad","chile","china","colombia","cuba","czech-republic","democratic-republic-lao","democratic-republic-of-congo","denmark","dominican-republic","ecuador","egypt","equatorial-guinea","fiji","finland","france","georgia","germany","ghana","greece","guatemala","hong-kong","hungary","india","indonesia","ireland","israel","italy","ivory-coast","japan","jordan","kazakhstan","kuwait","latvia","lebanon","lithuania","luxembourg","macao","macedonia","madagascar","malaysia","maurice","mexico","morocco","myanmar","netherland","new-zealand","nigeria","norway","oman","other-regions-of-africa","other-regions-of-asia","other-regions-of-europe","other-regions-of-middle-east","other-regions-of-north-america","other-regions-of-south-america","panama","paraguay","peru","philippines","poland","portugal","qatar","republic-of-korea","romania","russia","saudi-arabia","senegal","singapore","slovakia","south-africa","spain","sweden","switzerland","taiwan","thailand","togo","tunisia","turkey","ukraine","united-arab-emirates","united-kingdom","united-states-of-america","uruguay","viet-nam"].indexOf(t))return t}if(e=r.get("contribZone"))return e;if(e=r.get("displayZone"))return e;var a=f();return a&&(t={ar:"other-regions-of-middle-east",de:"germany",en:"united-kingdom",es:"spain",fr:"france",id:"indonesia",it:"italy",ja:"japan",ko:"republic-of-korea",nl:"netherland",pl:"poland",pt:"portugal","pt-br":"brazil",ru:"russia",sv:"sweden",th:"thailand",tr:"turkey",zh:"china"}[a])?(n=o[t])||t:void 0}function p(){var t=r.get("platform");return"APP-ANDROID"===t||"APP-IPHONE"===t}var v={Android:function(){return navigator.userAgent.match(/Android/i)&&!v.Windows()},BlackBerry:function(){return navigator.userAgent.match(/BlackBerry/i)},iOS:function(){return navigator.userAgent.match(/iPhone|iPad|iPod/i)},Opera:function(){return navigator.userAgent.match(/Opera Mini/i)},Windows:function(){return navigator.userAgent.match(/IEMobile|Windows Phone/i)},any:function(){return v.Android()||v.BlackBerry()||v.iOS()||v.Opera()||v.Windows()},tablet:function(){var t=!1,n=document.body.clientWidth;return v.any()&&n>768&&(t=!0),t}};function d(){var t=window.navigator.userAgent,n=t.indexOf("MSIE ");if(n>0)return parseInt(t.substring(n+5,t.indexOf(".",n)),10);if(t.indexOf("Trident/")>0){var e=t.indexOf("rv:");return parseInt(t.substring(e+3,t.indexOf(".",e)),10)}var r=t.indexOf("Edge/");return r>0&&parseInt(t.substring(r+5,t.indexOf(".",r)),10)}},function(t,n){var e;e=function(){return this}();try{e=e||new Function("return this")()}catch(t){"object"==typeof window&&(e=window)}t.exports=e},function(t,n,e){var r=e(112),o="object"==typeof self&&self&&self.Object===Object&&self,i=r||o||Function("return this")();t.exports=i},,function(t,n,e){var r=e(48);t.exports=function(t,n,e){if(r(t),void 0===n)return t;switch(e){case 1:return function(e){return t.call(n,e)};case 2:return function(e,r){return t.call(n,e,r)};case 3:return function(e,r,o){return t.call(n,e,r,o)}}return function(){return t.apply(n,arguments)}}},,,function(t,n){t.exports=function(t){return null!=t&&"object"==typeof t}},function(t,n){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},function(t,n){var e={}.toString;t.exports=function(t){return e.call(t).slice(8,-1)}},function(t,n){t.exports=!0},function(t,n){t.exports={}},,function(t,n,e){var r=e(26),o=e(24);function i(n){return t.exports=i="function"==typeof o&&"symbol"==typeof r?function(t){return typeof t}:function(t){return t&&"function"==typeof o&&t.constructor===o&&t!==o.prototype?"symbol":typeof t},i(n)}t.exports=i},function(t,n,e){var r=e(68);t.exports=function(t){return Object(r(t))}},function(t,n){t.exports=function(t,n){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:n}}},function(t,n,e){var r=e(108),o=e(86);t.exports=Object.keys||function(t){return r(t,o)}},,,function(t,n,e){var r=e(111),o=e(171),i=e(172),a=r?r.toStringTag:void 0;t.exports=function(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":a&&a in Object(t)?o(t):i(t)}},function(t,n,e){var r=e(183),o=e(184),i=e(185),a=e(186),c=e(187);function u(t){var n=-1,e=null==t?0:t.length;for(this.clear();++n<e;){var r=t[n];this.set(r[0],r[1])}}u.prototype.clear=r,u.prototype.delete=o,u.prototype.get=i,u.prototype.has=a,u.prototype.set=c,t.exports=u},function(t,n,e){var r=e(62);t.exports=function(t,n){for(var e=t.length;e--;)if(r(t[e][0],n))return e;return-1}},function(t,n){t.exports=function(t,n){return t===n||t!=t&&n!=n}},function(t,n,e){var r=e(84)(Object,"create");t.exports=r},function(t,n,e){var r=e(202);t.exports=function(t,n){var e=t.__data__;return r(n)?e["string"==typeof n?"string":"hash"]:e.map}},function(t,n){var e=0,r=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++e+r).toString(36))}},function(t,n,e){var r=e(22).f,o=e(38),i=e(12)("toStringTag");t.exports=function(t,n,e){t&&!o(t=e?t:t.prototype,i)&&r(t,i,{configurable:!0,value:n})}},,function(t,n){t.exports=function(t){if(null==t)throw TypeError("Can't call method on  "+t);return t}},,function(t,n,e){"use strict";var r=e(244)(!0);e(109)(String,"String",(function(t){this._t=String(t),this._i=0}),(function(){var t,n=this._t,e=this._i;return e>=n.length?{value:void 0,done:!0}:(t=r(n,e),this._i+=t.length,{value:t,done:!1})}))},,,function(t,n,e){"use strict";e.r(n),e.d(n,"AccorHotelsUtils",(function(){return s}));var r=e(1),o=e.n(r),i=e(0),a=e.n(i),c=e(6),u=e(97),s=function(){function t(){o()(this,t)}return a()(t,null,[{key:"createAccorHotels",value:function(){var t=window.AccorHotels;return(t=t||{}).context||(t.context=u),t.services||(t.services={}),t.components||(t.components={}),window.AccorHotels=t,t}},{key:"registerVueComponent",value:function(n,e){if(t.createAccorHotels().components[n]=e,window.Vue){var r=c.Tools.kebabize(n);window.Vue.component(n,e),window.Vue.component(r,e)}}}]),t}()},,function(t,n){t.exports=function(t){return t.webpackPolyfill||(t.deprecate=function(){},t.paths=[],t.children||(t.children=[]),Object.defineProperty(t,"loaded",{enumerable:!0,get:function(){return t.l}}),Object.defineProperty(t,"id",{enumerable:!0,get:function(){return t.i}}),t.webpackPolyfill=1),t}},function(t,n){n.f={}.propertyIsEnumerable},function(t,n){var e=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:e)(t)}},,function(t,n,e){var r=e(23),o=e(7).document,i=r(o)&&r(o.createElement);t.exports=function(t){return i?o.createElement(t):{}}},,,function(t,n,e){var r=e(23);t.exports=function(t,n){if(!r(t))return t;var e,o;if(n&&"function"==typeof(e=t.toString)&&!r(o=e.call(t)))return o;if("function"==typeof(e=t.valueOf)&&!r(o=e.call(t)))return o;if(!n&&"function"==typeof(e=t.toString)&&!r(o=e.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},function(t,n,e){var r=e(85)("keys"),o=e(65);t.exports=function(t){return r[t]||(r[t]=o(t))}},function(t,n,e){var r=e(170),o=e(175);t.exports=function(t,n){var e=o(t,n);return r(e)?e:void 0}},function(t,n,e){var r=e(3),o=e(7),i=o["__core-js_shared__"]||(o["__core-js_shared__"]={});(t.exports=function(t,n){return i[t]||(i[t]=void 0!==n?n:{})})("versions",[]).push({version:r.version,mode:e(50)?"pure":"global",copyright:"© 2019 Denis Pushkarev (zloirock.ru)"})},function(t,n){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},function(t,n,e){var r=e(77),o=Math.min;t.exports=function(t){return t>0?o(r(t),9007199254740991):0}},function(t,n,e){var r=e(59),o=e(36);t.exports=function(t){if(!o(t))return!1;var n=r(t);return"[object Function]"==n||"[object GeneratorFunction]"==n||"[object AsyncFunction]"==n||"[object Proxy]"==n}},function(t,n,e){var r=e(88),o=e(114);t.exports=function(t){return null!=t&&o(t.length)&&!r(t)}},function(t,n,e){var r=e(121);t.exports=function(t,n,e){"__proto__"==n&&r?r(t,n,{configurable:!0,enumerable:!0,value:e,writable:!0}):t[n]=e}},function(t,n,e){e(246);for(var r=e(7),o=e(32),i=e(51),a=e(12)("toStringTag"),c="CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,TextTrackList,TouchList".split(","),u=0;u<c.length;u++){var s=c[u],f=r[s],l=f&&f.prototype;l&&!l[a]&&o(l,a,s),i[s]=i.Array}},,function(t,n,e){var r=e(20),o=e(150),i=e(86),a=e(83)("IE_PROTO"),c=function(){},u=function(){var t,n=e(79)("iframe"),r=i.length;for(n.style.display="none",e(131).appendChild(n),n.src="javascript:",(t=n.contentWindow.document).open(),t.write("<script>document.F=Object<\/script>"),t.close(),u=t.F;r--;)delete u.prototype[i[r]];return u()};t.exports=Object.create||function(t,n){var e;return null!==t?(c.prototype=r(t),e=new c,c.prototype=null,e[a]=t):e=u(),void 0===n?e:o(e,n)}},function(t,n,e){"use strict";var r=e(48);function o(t){var n,e;this.promise=new t((function(t,r){if(void 0!==n||void 0!==e)throw TypeError("Bad Promise constructor");n=t,e=r})),this.resolve=r(n),this.reject=r(e)}t.exports.f=function(t){return new o(t)}},function(t,n){n.f=Object.getOwnPropertySymbols},function(t,n,e){n.f=e(12)},function(t,n,e){var r,o=e(241).ChanneledProxy,i=e(40).getAppRoute,a=e(40).isInWebView,c=e(40).isIE,u=e(40).getLang,s=e(40).getCountry,f=e(40).isMobile,l=e(40).getCurrentDomain;t.exports=(r={appRoute:i(),currentDomain:l(),isInWebView:a(),isIE:c(),isMobile:f,lang:u(),country:s()},document.body&&(document.body.setAttribute("data-brand-code",r.currentDomain.code),document.body.setAttribute("data-device-type",r.isMobile.any()?"mobile":"desktop"),document.body.setAttribute("data-lang",r.lang)),new o(r,"accor-context"))},function(t,n,e){var r=e(7),o=e(3),i=e(50),a=e(96),c=e(22).f;t.exports=function(t){var n=o.Symbol||(o.Symbol=i?{}:r.Symbol||{});"_"==t.charAt(0)||t in n||c(n,t,{value:a.f(t)})}},,function(t,n,e){var r=e(11),o=e(3),i=e(39);t.exports=function(t,n){var e=(o.Object||{})[t]||Object[t],a={};a[t]=n(e),r(r.S+r.F*i((function(){e(1)})),"Object",a)}},,function(t,n,e){var r=e(76),o=e(55),i=e(31),a=e(82),c=e(38),u=e(104),s=Object.getOwnPropertyDescriptor;n.f=e(18)?s:function(t,n){if(t=i(t),n=a(n,!0),u)try{return s(t,n)}catch(t){}if(c(t,n))return o(!r.f.call(t,n),t[n])}},function(t,n,e){var r=e(49),o=e(12)("toStringTag"),i="Arguments"==r(function(){return arguments}());t.exports=function(t){var n,e,a;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(e=function(t,n){try{return t[n]}catch(t){}}(n=Object(t),o))?e:i?r(n):"Object"==(a=r(n))&&"function"==typeof n.callee?"Arguments":a}},function(t,n,e){t.exports=!e(18)&&!e(39)((function(){return 7!=Object.defineProperty(e(79)("div"),"a",{get:function(){return 7}}).a}))},,function(t,n,e){var r=e(103),o=e(12)("iterator"),i=e(51);t.exports=e(3).getIteratorMethod=function(t){if(null!=t)return t[o]||t["@@iterator"]||i[r(t)]}},function(t,n,e){var r=e(108),o=e(86).concat("length","prototype");n.f=Object.getOwnPropertyNames||function(t){return r(t,o)}},function(t,n,e){var r=e(38),o=e(31),i=e(152)(!1),a=e(83)("IE_PROTO");t.exports=function(t,n){var e,c=o(t),u=0,s=[];for(e in c)e!=a&&r(c,e)&&s.push(e);for(;n.length>u;)r(c,e=n[u++])&&(~i(s,e)||s.push(e));return s}},function(t,n,e){"use strict";var r=e(50),o=e(11),i=e(132),a=e(32),c=e(51),u=e(245),s=e(66),f=e(156),l=e(12)("iterator"),p=!([].keys&&"next"in[].keys()),v=function(){return this};t.exports=function(t,n,e,d,h,y,g){u(e,n,d);var m,b,x,w=function(t){if(!p&&t in S)return S[t];switch(t){case"keys":case"values":return function(){return new e(this,t)}}return function(){return new e(this,t)}},_=n+" Iterator",O="values"==h,j=!1,S=t.prototype,P=S[l]||S["@@iterator"]||h&&S[h],k=P||w(h),A=h?O?w("entries"):k:void 0,T="Array"==n&&S.entries||P;if(T&&(x=f(T.call(new t)))!==Object.prototype&&x.next&&(s(x,_,!0),r||"function"==typeof x[l]||a(x,l,v)),O&&P&&"values"!==P.name&&(j=!0,k=function(){return P.call(this)}),r&&!g||!p&&!j&&S[l]||a(S,l,k),c[n]=k,c[_]=v,h)if(m={values:O?k:w("values"),keys:y?k:w("keys"),entries:A},g)for(b in m)b in S||i(S,b,m[b]);else o(o.P+o.F*(p||j),n,m);return m}},function(t,n){},function(t,n,e){var r=e(42).Symbol;t.exports=r},function(t,n,e){(function(n){var e="object"==typeof n&&n&&n.Object===Object&&n;t.exports=e}).call(this,e(41))},function(t,n){var e=Object.prototype;t.exports=function(t){var n=t&&t.constructor;return t===("function"==typeof n&&n.prototype||e)}},function(t,n){t.exports=function(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=9007199254740991}},function(t,n,e){var r=e(84)(e(42),"Map");t.exports=r},function(t,n,e){var r=e(177),o=e(47),i=Object.prototype,a=i.hasOwnProperty,c=i.propertyIsEnumerable,u=r(function(){return arguments}())?r:function(t){return o(t)&&a.call(t,"callee")&&!c.call(t,"callee")};t.exports=u},function(t,n){var e=Array.isArray;t.exports=e},function(t,n,e){(function(t){var r=e(42),o=e(178),i=n&&!n.nodeType&&n,a=i&&"object"==typeof t&&t&&!t.nodeType&&t,c=a&&a.exports===i?r.Buffer:void 0,u=(c?c.isBuffer:void 0)||o;t.exports=u}).call(this,e(75)(t))},function(t,n,e){var r=e(179),o=e(180),i=e(181),a=i&&i.isTypedArray,c=a?o(a):r;t.exports=c},function(t,n,e){var r=e(90),o=e(62);t.exports=function(t,n,e){(void 0!==e&&!o(t[n],e)||void 0===e&&!(n in t))&&r(t,n,e)}},function(t,n,e){var r=e(84),o=function(){try{var t=r(Object,"defineProperty");return t({},"",{}),t}catch(t){}}();t.exports=o},function(t,n,e){var r=e(176)(Object.getPrototypeOf,Object);t.exports=r},function(t,n,e){var r=e(221),o=e(223),i=e(89);t.exports=function(t){return i(t)?r(t,!0):o(t)}},function(t,n){var e=/^(?:0|[1-9]\d*)$/;t.exports=function(t,n){return!!(n=null==n?9007199254740991:n)&&("number"==typeof t||e.test(t))&&t>-1&&t%1==0&&t<n}},function(t,n){t.exports=function(t){return t}},function(t,n,e){var r=e(49);t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==r(t)?t.split(""):Object(t)}},,function(t,n,e){var r=e(44),o=e(142),i=e(143),a=e(20),c=e(87),u=e(106),s={},f={};(n=t.exports=function(t,n,e,l,p){var v,d,h,y,g=p?function(){return t}:u(t),m=r(e,l,n?2:1),b=0;if("function"!=typeof g)throw TypeError(t+" is not iterable!");if(i(g)){for(v=c(t.length);v>b;b++)if((y=n?m(a(d=t[b])[0],d[1]):m(t[b]))===s||y===f)return y}else for(h=g.call(t);!(d=h.next()).done;)if((y=o(h,m,d.value,n))===s||y===f)return y}).BREAK=s,n.RETURN=f},,,function(t,n,e){var r=e(7).document;t.exports=r&&r.documentElement},function(t,n,e){t.exports=e(32)},function(t,n,e){var r=e(49);t.exports=Array.isArray||function(t){return"Array"==r(t)}},function(t,n,e){var r=e(20),o=e(48),i=e(12)("species");t.exports=function(t,n){var e,a=r(t).constructor;return void 0===a||null==(e=r(a)[i])?n:o(e)}},function(t,n,e){var r,o,i,a=e(44),c=e(160),u=e(131),s=e(79),f=e(7),l=f.process,p=f.setImmediate,v=f.clearImmediate,d=f.MessageChannel,h=f.Dispatch,y=0,g={},m=function(){var t=+this;if(g.hasOwnProperty(t)){var n=g[t];delete g[t],n()}},b=function(t){m.call(t.data)};p&&v||(p=function(t){for(var n=[],e=1;arguments.length>e;)n.push(arguments[e++]);return g[++y]=function(){c("function"==typeof t?t:Function(t),n)},r(y),y},v=function(t){delete g[t]},"process"==e(49)(l)?r=function(t){l.nextTick(a(m,t,1))}:h&&h.now?r=function(t){h.now(a(m,t,1))}:d?(i=(o=new d).port2,o.port1.onmessage=b,r=a(i.postMessage,i,1)):f.addEventListener&&"function"==typeof postMessage&&!f.importScripts?(r=function(t){f.postMessage(t+"","*")},f.addEventListener("message",b,!1)):r="onreadystatechange"in s("script")?function(t){u.appendChild(s("script")).onreadystatechange=function(){u.removeChild(this),m.call(t)}}:function(t){setTimeout(a(m,t,1),0)}),t.exports={set:p,clear:v}},function(t,n){t.exports=function(t){try{return{e:!1,v:t()}}catch(t){return{e:!0,v:t}}}},function(t,n,e){var r=e(20),o=e(23),i=e(94);t.exports=function(t,n){if(r(t),o(n)&&n.constructor===t)return n;var e=i.f(t);return(0,e.resolve)(n),e.promise}},,,,,function(t,n,e){var r=e(20);t.exports=function(t,n,e,o){try{return o?n(r(e)[0],e[1]):n(e)}catch(n){var i=t.return;throw void 0!==i&&r(i.call(t)),n}}},function(t,n,e){var r=e(51),o=e(12)("iterator"),i=Array.prototype;t.exports=function(t){return void 0!==t&&(r.Array===t||i[o]===t)}},function(t,n,e){var r=e(12)("iterator"),o=!1;try{var i=[7][r]();i.return=function(){o=!0},Array.from(i,(function(){throw 2}))}catch(t){}t.exports=function(t,n){if(!n&&!o)return!1;var e=!1;try{var i=[7],a=i[r]();a.next=function(){return{done:e=!0}},i[r]=function(){return a},t(i)}catch(t){}return e}},,function(t,n){t.exports=function(t,n,e,r){if(!(t instanceof n)||void 0!==r&&r in t)throw TypeError(e+": incorrect invocation!");return t}},function(t,n,e){var r=e(32);t.exports=function(t,n,e){for(var o in n)e&&t[o]?t[o]=n[o]:r(t,o,n[o]);return t}},function(t,n,e){var r=e(65)("meta"),o=e(23),i=e(38),a=e(22).f,c=0,u=Object.isExtensible||function(){return!0},s=!e(39)((function(){return u(Object.preventExtensions({}))})),f=function(t){a(t,r,{value:{i:"O"+ ++c,w:{}}})},l=t.exports={KEY:r,NEED:!1,fastKey:function(t,n){if(!o(t))return"symbol"==typeof t?t:("string"==typeof t?"S":"P")+t;if(!i(t,r)){if(!u(t))return"F";if(!n)return"E";f(t)}return t[r].i},getWeak:function(t,n){if(!i(t,r)){if(!u(t))return!0;if(!n)return!1;f(t)}return t[r].w},onFreeze:function(t){return s&&l.NEED&&u(t)&&!i(t,r)&&f(t),t}}},function(t,n,e){"use strict";e.d(n,"a",(function(){return x}));var r=e(30),o=e.n(r),i=e(19),a=e.n(i),c=e(26),u=e.n(c),s=e(24),f=e.n(s),l=e(27),p=e.n(l),v=e(1),d=e.n(v),h=e(0),y=e.n(h),g=e(13);function m(t,n){var e;if(void 0===f.a||null==t[u.a]){if(a()(t)||(e=function(t,n){if(!t)return;if("string"==typeof t)return b(t,n);var e=Object.prototype.toString.call(t).slice(8,-1);"Object"===e&&t.constructor&&(e=t.constructor.name);if("Map"===e||"Set"===e)return p()(t);if("Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return b(t,n)}(t))||n&&t&&"number"==typeof t.length){e&&(t=e);var r=0,i=function(){};return{s:i,n:function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}},e:function(t){throw t},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var c,s=!0,l=!1;return{s:function(){e=o()(t)},n:function(){var t=e.next();return s=t.done,t},e:function(t){l=!0,c=t},f:function(){try{s||null==e.return||e.return()}finally{if(l)throw c}}}}function b(t,n){(null==n||n>t.length)&&(n=t.length);for(var e=0,r=new Array(n);e<n;e++)r[e]=t[e];return r}var x=function(){function t(){var n=this;d()(this,t),this.promises=[],this.creatingSession=!1,this.sessionTimeout=84e4,this.resolveAll=function(){setTimeout((function(){sessionStorage.setItem("ah-date-last-request",(new Date).toJSON()),n.creatingSession=!1;var t,e=n.getSessionId(),r=m(n.promises);try{for(r.s();!(t=r.n()).done;){t.value.resolve(e)}}catch(t){r.e(t)}finally{r.f()}n.cleanup()}),0)},this.rejectAll=function(){sessionStorage.removeItem("ah-date-last-request"),n.creatingSession=!1;var t,e=m(n.promises);try{for(e.s();!(t=e.n()).done;){t.value.reject()}}catch(t){e.e(t)}finally{e.f()}n.cleanup()}}return y()(t,null,[{key:"getInstance",value:function(){return t._instance||(t._instance=new t),t._instance}}]),y()(t,[{key:"getSession",value:function(){var t=this,n=window.jQuery3||window.jQuery||window.$,e=this.getSessionId();if(!n)return{then:function(t){t(e)}};var r=n.Deferred(),o=!1,i=sessionStorage.getItem("ah-date-last-request");if(i){var a=new Date,c=new Date(i);o=a.getTime()-c.getTime()<this.sessionTimeout}if(e&&o)setTimeout((function(){r.resolve(t.getSessionId()),sessionStorage.setItem("ah-date-last-request",(new Date).toJSON())}),0);else{if(!this.creatingSession){this.creatingSession=!0;var u="/bean/getViewBeans.action?beans=OriginViewBean";e?u+="&httpSessionId="+e:(u+="&referer="+encodeURIComponent(window.document.referrer),console.log(u)),e&&!o&&(this.promises=[],sessionStorage.removeItem("ah-date-last-request"));var s=n.ajax({type:"GET",url:u,dataType:"text"});s.done(this.resolveAll),s.fail(this.rejectAll)}this.promises.push(r)}return r}},{key:"getSessionId",value:function(){return g.get("JSESSIONID")}},{key:"cleanup",value:function(){this.promises=[]}}]),t}();x._instance=void 0},function(t,n,e){var r=e(22),o=e(20),i=e(56);t.exports=e(18)?Object.defineProperties:function(t,n){o(t);for(var e,a=i(n),c=a.length,u=0;c>u;)r.f(t,e=a[u++],n[e]);return t}},,function(t,n,e){var r=e(31),o=e(87),i=e(153);t.exports=function(t){return function(n,e,a){var c,u=r(n),s=o(u.length),f=i(a,s);if(t&&e!=e){for(;s>f;)if((c=u[f++])!=c)return!0}else for(;s>f;f++)if((t||f in u)&&u[f]===e)return t||f||0;return!t&&-1}}},function(t,n,e){var r=e(77),o=Math.max,i=Math.min;t.exports=function(t,n){return(t=r(t))<0?o(t+n,0):i(t,n)}},function(t,n,e){e(155);var r=e(3).Object;t.exports=function(t,n,e){return r.defineProperty(t,n,e)}},function(t,n,e){var r=e(11);r(r.S+r.F*!e(18),"Object",{defineProperty:e(22).f})},function(t,n,e){var r=e(38),o=e(54),i=e(83)("IE_PROTO"),a=Object.prototype;t.exports=Object.getPrototypeOf||function(t){return t=o(t),r(t,i)?t[i]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?a:null}},function(t,n,e){"use strict";var r=e(7),o=e(38),i=e(18),a=e(11),c=e(132),u=e(148).KEY,s=e(39),f=e(85),l=e(66),p=e(65),v=e(12),d=e(96),h=e(98),y=e(255),g=e(133),m=e(20),b=e(23),x=e(54),w=e(31),_=e(82),O=e(55),j=e(93),S=e(161),P=e(102),k=e(95),A=e(22),T=e(56),I=P.f,C=A.f,E=S.f,M=r.Symbol,N=r.JSON,L=N&&N.stringify,D=v("_hidden"),F=v("toPrimitive"),z={}.propertyIsEnumerable,R=f("symbol-registry"),B=f("symbols"),U=f("op-symbols"),G=Object.prototype,H="function"==typeof M&&!!k.f,V=r.QObject,W=!V||!V.prototype||!V.prototype.findChild,K=i&&s((function(){return 7!=j(C({},"a",{get:function(){return C(this,"a",{value:7}).a}})).a}))?function(t,n,e){var r=I(G,n);r&&delete G[n],C(t,n,e),r&&t!==G&&C(G,n,r)}:C,Q=function(t){var n=B[t]=j(M.prototype);return n._k=t,n},J=H&&"symbol"==typeof M.iterator?function(t){return"symbol"==typeof t}:function(t){return t instanceof M},$=function(t,n,e){return t===G&&$(U,n,e),m(t),n=_(n,!0),m(e),o(B,n)?(e.enumerable?(o(t,D)&&t[D][n]&&(t[D][n]=!1),e=j(e,{enumerable:O(0,!1)})):(o(t,D)||C(t,D,O(1,{})),t[D][n]=!0),K(t,n,e)):C(t,n,e)},q=function(t,n){m(t);for(var e,r=y(n=w(n)),o=0,i=r.length;i>o;)$(t,e=r[o++],n[e]);return t},Z=function(t){var n=z.call(this,t=_(t,!0));return!(this===G&&o(B,t)&&!o(U,t))&&(!(n||!o(this,t)||!o(B,t)||o(this,D)&&this[D][t])||n)},Y=function(t,n){if(t=w(t),n=_(n,!0),t!==G||!o(B,n)||o(U,n)){var e=I(t,n);return!e||!o(B,n)||o(t,D)&&t[D][n]||(e.enumerable=!0),e}},X=function(t){for(var n,e=E(w(t)),r=[],i=0;e.length>i;)o(B,n=e[i++])||n==D||n==u||r.push(n);return r},tt=function(t){for(var n,e=t===G,r=E(e?U:w(t)),i=[],a=0;r.length>a;)!o(B,n=r[a++])||e&&!o(G,n)||i.push(B[n]);return i};H||(c((M=function(){if(this instanceof M)throw TypeError("Symbol is not a constructor!");var t=p(arguments.length>0?arguments[0]:void 0),n=function(e){this===G&&n.call(U,e),o(this,D)&&o(this[D],t)&&(this[D][t]=!1),K(this,t,O(1,e))};return i&&W&&K(G,t,{configurable:!0,set:n}),Q(t)}).prototype,"toString",(function(){return this._k})),P.f=Y,A.f=$,e(107).f=S.f=X,e(76).f=Z,k.f=tt,i&&!e(50)&&c(G,"propertyIsEnumerable",Z,!0),d.f=function(t){return Q(v(t))}),a(a.G+a.W+a.F*!H,{Symbol:M});for(var nt="hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","),et=0;nt.length>et;)v(nt[et++]);for(var rt=T(v.store),ot=0;rt.length>ot;)h(rt[ot++]);a(a.S+a.F*!H,"Symbol",{for:function(t){return o(R,t+="")?R[t]:R[t]=M(t)},keyFor:function(t){if(!J(t))throw TypeError(t+" is not a symbol!");for(var n in R)if(R[n]===t)return n},useSetter:function(){W=!0},useSimple:function(){W=!1}}),a(a.S+a.F*!H,"Object",{create:function(t,n){return void 0===n?j(t):q(j(t),n)},defineProperty:$,defineProperties:q,getOwnPropertyDescriptor:Y,getOwnPropertyNames:X,getOwnPropertySymbols:tt});var it=s((function(){k.f(1)}));a(a.S+a.F*it,"Object",{getOwnPropertySymbols:function(t){return k.f(x(t))}}),N&&a(a.S+a.F*(!H||s((function(){var t=M();return"[null]"!=L([t])||"{}"!=L({a:t})||"{}"!=L(Object(t))}))),"JSON",{stringify:function(t){for(var n,e,r=[t],o=1;arguments.length>o;)r.push(arguments[o++]);if(e=n=r[1],(b(n)||void 0!==t)&&!J(t))return g(n)||(n=function(t,n){if("function"==typeof e&&(n=e.call(this,t,n)),!J(n))return n}),r[1]=n,L.apply(N,r)}}),M.prototype[F]||e(32)(M.prototype,F,M.prototype.valueOf),l(M,"Symbol"),l(Math,"Math",!0),l(r.JSON,"JSON",!0)},,function(t,n){t.exports=function(t,n){return{value:n,done:!!t}}},function(t,n){t.exports=function(t,n,e){var r=void 0===e;switch(n.length){case 0:return r?t():t.call(e);case 1:return r?t(n[0]):t.call(e,n[0]);case 2:return r?t(n[0],n[1]):t.call(e,n[0],n[1]);case 3:return r?t(n[0],n[1],n[2]):t.call(e,n[0],n[1],n[2]);case 4:return r?t(n[0],n[1],n[2],n[3]):t.call(e,n[0],n[1],n[2],n[3])}return t.apply(e,n)}},function(t,n,e){var r=e(31),o=e(107).f,i={}.toString,a="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[];t.exports.f=function(t){return a&&"[object Window]"==i.call(t)?function(t){try{return o(t)}catch(t){return a.slice()}}(t):o(r(t))}},function(t,n,e){"use strict";var r=e(7),o=e(3),i=e(22),a=e(18),c=e(12)("species");t.exports=function(t){var n="function"==typeof o[t]?o[t]:r[t];a&&n&&!n[c]&&i.f(n,c,{configurable:!0,get:function(){return this}})}},,function(t,n,e){e(165),t.exports=e(3).Object.keys},function(t,n,e){var r=e(54),o=e(56);e(100)("keys",(function(){return function(t){return o(r(t))}}))},,function(t,n,e){var r=e(182),o=e(120),i=e(206),a=e(208),c=e(36),u=e(123);t.exports=function t(n,e,s,f,l){n!==e&&i(e,(function(i,u){if(c(i))l||(l=new r),a(n,e,u,s,t,f,l);else{var p=f?f(n[u],i,u+"",n,e,l):void 0;void 0===p&&(p=i),o(n,u,p)}}),u)}},function(t,n,e){var r=e(225),o=e(232);t.exports=function(t){return r((function(n,e){var r=-1,i=e.length,a=i>1?e[i-1]:void 0,c=i>2?e[2]:void 0;for(a=t.length>3&&"function"==typeof a?(i--,a):void 0,c&&o(e[0],e[1],c)&&(a=i<3?void 0:a,i=1),n=Object(n);++r<i;){var u=e[r];u&&t(n,u,r,a)}return n}))}},function(t,n){var e=Function.prototype.toString;t.exports=function(t){if(null!=t){try{return e.call(t)}catch(t){}try{return t+""}catch(t){}}return""}},function(t,n,e){var r=e(88),o=e(173),i=e(36),a=e(169),c=/^\[object .+?Constructor\]$/,u=Function.prototype,s=Object.prototype,f=u.toString,l=s.hasOwnProperty,p=RegExp("^"+f.call(l).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");t.exports=function(t){return!(!i(t)||o(t))&&(r(t)?p:c).test(a(t))}},function(t,n,e){var r=e(111),o=Object.prototype,i=o.hasOwnProperty,a=o.toString,c=r?r.toStringTag:void 0;t.exports=function(t){var n=i.call(t,c),e=t[c];try{t[c]=void 0;var r=!0}catch(t){}var o=a.call(t);return r&&(n?t[c]=e:delete t[c]),o}},function(t,n){var e=Object.prototype.toString;t.exports=function(t){return e.call(t)}},function(t,n,e){var r,o=e(174),i=(r=/[^.]+$/.exec(o&&o.keys&&o.keys.IE_PROTO||""))?"Symbol(src)_1."+r:"";t.exports=function(t){return!!i&&i in t}},function(t,n,e){var r=e(42)["__core-js_shared__"];t.exports=r},function(t,n){t.exports=function(t,n){return null==t?void 0:t[n]}},function(t,n){t.exports=function(t,n){return function(e){return t(n(e))}}},function(t,n,e){var r=e(59),o=e(47);t.exports=function(t){return o(t)&&"[object Arguments]"==r(t)}},function(t,n){t.exports=function(){return!1}},function(t,n,e){var r=e(59),o=e(114),i=e(47),a={};a["[object Float32Array]"]=a["[object Float64Array]"]=a["[object Int8Array]"]=a["[object Int16Array]"]=a["[object Int32Array]"]=a["[object Uint8Array]"]=a["[object Uint8ClampedArray]"]=a["[object Uint16Array]"]=a["[object Uint32Array]"]=!0,a["[object Arguments]"]=a["[object Array]"]=a["[object ArrayBuffer]"]=a["[object Boolean]"]=a["[object DataView]"]=a["[object Date]"]=a["[object Error]"]=a["[object Function]"]=a["[object Map]"]=a["[object Number]"]=a["[object Object]"]=a["[object RegExp]"]=a["[object Set]"]=a["[object String]"]=a["[object WeakMap]"]=!1,t.exports=function(t){return i(t)&&o(t.length)&&!!a[r(t)]}},function(t,n){t.exports=function(t){return function(n){return t(n)}}},function(t,n,e){(function(t){var r=e(112),o=n&&!n.nodeType&&n,i=o&&"object"==typeof t&&t&&!t.nodeType&&t,a=i&&i.exports===o&&r.process,c=function(){try{return a&&a.binding&&a.binding("util")}catch(t){}}();t.exports=c}).call(this,e(75)(t))},function(t,n,e){var r=e(60),o=e(188),i=e(189),a=e(190),c=e(191),u=e(192);function s(t){var n=this.__data__=new r(t);this.size=n.size}s.prototype.clear=o,s.prototype.delete=i,s.prototype.get=a,s.prototype.has=c,s.prototype.set=u,t.exports=s},function(t,n){t.exports=function(){this.__data__=[],this.size=0}},function(t,n,e){var r=e(61),o=Array.prototype.splice;t.exports=function(t){var n=this.__data__,e=r(n,t);return!(e<0)&&(e==n.length-1?n.pop():o.call(n,e,1),--this.size,!0)}},function(t,n,e){var r=e(61);t.exports=function(t){var n=this.__data__,e=r(n,t);return e<0?void 0:n[e][1]}},function(t,n,e){var r=e(61);t.exports=function(t){return r(this.__data__,t)>-1}},function(t,n,e){var r=e(61);t.exports=function(t,n){var e=this.__data__,o=r(e,t);return o<0?(++this.size,e.push([t,n])):e[o][1]=n,this}},function(t,n,e){var r=e(60);t.exports=function(){this.__data__=new r,this.size=0}},function(t,n){t.exports=function(t){var n=this.__data__,e=n.delete(t);return this.size=n.size,e}},function(t,n){t.exports=function(t){return this.__data__.get(t)}},function(t,n){t.exports=function(t){return this.__data__.has(t)}},function(t,n,e){var r=e(60),o=e(115),i=e(193);t.exports=function(t,n){var e=this.__data__;if(e instanceof r){var a=e.__data__;if(!o||a.length<199)return a.push([t,n]),this.size=++e.size,this;e=this.__data__=new i(a)}return e.set(t,n),this.size=e.size,this}},function(t,n,e){var r=e(194),o=e(201),i=e(203),a=e(204),c=e(205);function u(t){var n=-1,e=null==t?0:t.length;for(this.clear();++n<e;){var r=t[n];this.set(r[0],r[1])}}u.prototype.clear=r,u.prototype.delete=o,u.prototype.get=i,u.prototype.has=a,u.prototype.set=c,t.exports=u},function(t,n,e){var r=e(195),o=e(60),i=e(115);t.exports=function(){this.size=0,this.__data__={hash:new r,map:new(i||o),string:new r}}},function(t,n,e){var r=e(196),o=e(197),i=e(198),a=e(199),c=e(200);function u(t){var n=-1,e=null==t?0:t.length;for(this.clear();++n<e;){var r=t[n];this.set(r[0],r[1])}}u.prototype.clear=r,u.prototype.delete=o,u.prototype.get=i,u.prototype.has=a,u.prototype.set=c,t.exports=u},function(t,n,e){var r=e(63);t.exports=function(){this.__data__=r?r(null):{},this.size=0}},function(t,n){t.exports=function(t){var n=this.has(t)&&delete this.__data__[t];return this.size-=n?1:0,n}},function(t,n,e){var r=e(63),o=Object.prototype.hasOwnProperty;t.exports=function(t){var n=this.__data__;if(r){var e=n[t];return"__lodash_hash_undefined__"===e?void 0:e}return o.call(n,t)?n[t]:void 0}},function(t,n,e){var r=e(63),o=Object.prototype.hasOwnProperty;t.exports=function(t){var n=this.__data__;return r?void 0!==n[t]:o.call(n,t)}},function(t,n,e){var r=e(63);t.exports=function(t,n){var e=this.__data__;return this.size+=this.has(t)?0:1,e[t]=r&&void 0===n?"__lodash_hash_undefined__":n,this}},function(t,n,e){var r=e(64);t.exports=function(t){var n=r(this,t).delete(t);return this.size-=n?1:0,n}},function(t,n){t.exports=function(t){var n=typeof t;return"string"==n||"number"==n||"symbol"==n||"boolean"==n?"__proto__"!==t:null===t}},function(t,n,e){var r=e(64);t.exports=function(t){return r(this,t).get(t)}},function(t,n,e){var r=e(64);t.exports=function(t){return r(this,t).has(t)}},function(t,n,e){var r=e(64);t.exports=function(t,n){var e=r(this,t),o=e.size;return e.set(t,n),this.size+=e.size==o?0:1,this}},function(t,n,e){var r=e(207)();t.exports=r},function(t,n){t.exports=function(t){return function(n,e,r){for(var o=-1,i=Object(n),a=r(n),c=a.length;c--;){var u=a[t?c:++o];if(!1===e(i[u],u,i))break}return n}}},function(t,n,e){var r=e(120),o=e(209),i=e(210),a=e(213),c=e(214),u=e(116),s=e(117),f=e(216),l=e(118),p=e(88),v=e(36),d=e(217),h=e(119),y=e(218);t.exports=function(t,n,e,g,m,b,x){var w=t[e],_=n[e],O=x.get(_);if(O)r(t,e,O);else{var j=b?b(w,_,e+"",t,n,x):void 0,S=void 0===j;if(S){var P=s(_),k=!P&&l(_),A=!P&&!k&&h(_);j=_,P||k||A?s(w)?j=w:f(w)?j=a(w):k?(S=!1,j=o(_,!0)):A?(S=!1,j=i(_,!0)):j=[]:d(_)||u(_)?(j=w,u(w)?j=y(w):(!v(w)||g&&p(w))&&(j=c(_))):S=!1}S&&(x.set(_,j),m(j,_,g,b,x),x.delete(_)),r(t,e,j)}}},function(t,n,e){(function(t){var r=e(42),o=n&&!n.nodeType&&n,i=o&&"object"==typeof t&&t&&!t.nodeType&&t,a=i&&i.exports===o?r.Buffer:void 0,c=a?a.allocUnsafe:void 0;t.exports=function(t,n){if(n)return t.slice();var e=t.length,r=c?c(e):new t.constructor(e);return t.copy(r),r}}).call(this,e(75)(t))},function(t,n,e){var r=e(211);t.exports=function(t,n){var e=n?r(t.buffer):t.buffer;return new t.constructor(e,t.byteOffset,t.length)}},function(t,n,e){var r=e(212);t.exports=function(t){var n=new t.constructor(t.byteLength);return new r(n).set(new r(t)),n}},function(t,n,e){var r=e(42).Uint8Array;t.exports=r},function(t,n){t.exports=function(t,n){var e=-1,r=t.length;for(n||(n=Array(r));++e<r;)n[e]=t[e];return n}},function(t,n,e){var r=e(215),o=e(122),i=e(113);t.exports=function(t){return"function"!=typeof t.constructor||i(t)?{}:r(o(t))}},function(t,n,e){var r=e(36),o=Object.create,i=function(){function t(){}return function(n){if(!r(n))return{};if(o)return o(n);t.prototype=n;var e=new t;return t.prototype=void 0,e}}();t.exports=i},function(t,n,e){var r=e(89),o=e(47);t.exports=function(t){return o(t)&&r(t)}},function(t,n,e){var r=e(59),o=e(122),i=e(47),a=Function.prototype,c=Object.prototype,u=a.toString,s=c.hasOwnProperty,f=u.call(Object);t.exports=function(t){if(!i(t)||"[object Object]"!=r(t))return!1;var n=o(t);if(null===n)return!0;var e=s.call(n,"constructor")&&n.constructor;return"function"==typeof e&&e instanceof e&&u.call(e)==f}},function(t,n,e){var r=e(219),o=e(123);t.exports=function(t){return r(t,o(t))}},function(t,n,e){var r=e(220),o=e(90);t.exports=function(t,n,e,i){var a=!e;e||(e={});for(var c=-1,u=n.length;++c<u;){var s=n[c],f=i?i(e[s],t[s],s,e,t):void 0;void 0===f&&(f=t[s]),a?o(e,s,f):r(e,s,f)}return e}},function(t,n,e){var r=e(90),o=e(62),i=Object.prototype.hasOwnProperty;t.exports=function(t,n,e){var a=t[n];i.call(t,n)&&o(a,e)&&(void 0!==e||n in t)||r(t,n,e)}},function(t,n,e){var r=e(222),o=e(116),i=e(117),a=e(118),c=e(124),u=e(119),s=Object.prototype.hasOwnProperty;t.exports=function(t,n){var e=i(t),f=!e&&o(t),l=!e&&!f&&a(t),p=!e&&!f&&!l&&u(t),v=e||f||l||p,d=v?r(t.length,String):[],h=d.length;for(var y in t)!n&&!s.call(t,y)||v&&("length"==y||l&&("offset"==y||"parent"==y)||p&&("buffer"==y||"byteLength"==y||"byteOffset"==y)||c(y,h))||d.push(y);return d}},function(t,n){t.exports=function(t,n){for(var e=-1,r=Array(t);++e<t;)r[e]=n(e);return r}},function(t,n,e){var r=e(36),o=e(113),i=e(224),a=Object.prototype.hasOwnProperty;t.exports=function(t){if(!r(t))return i(t);var n=o(t),e=[];for(var c in t)("constructor"!=c||!n&&a.call(t,c))&&e.push(c);return e}},function(t,n){t.exports=function(t){var n=[];if(null!=t)for(var e in Object(t))n.push(e);return n}},function(t,n,e){var r=e(125),o=e(226),i=e(228);t.exports=function(t,n){return i(o(t,n,r),t+"")}},function(t,n,e){var r=e(227),o=Math.max;t.exports=function(t,n,e){return n=o(void 0===n?t.length-1:n,0),function(){for(var i=arguments,a=-1,c=o(i.length-n,0),u=Array(c);++a<c;)u[a]=i[n+a];a=-1;for(var s=Array(n+1);++a<n;)s[a]=i[a];return s[n]=e(u),r(t,this,s)}}},function(t,n){t.exports=function(t,n,e){switch(e.length){case 0:return t.call(n);case 1:return t.call(n,e[0]);case 2:return t.call(n,e[0],e[1]);case 3:return t.call(n,e[0],e[1],e[2])}return t.apply(n,e)}},function(t,n,e){var r=e(229),o=e(231)(r);t.exports=o},function(t,n,e){var r=e(230),o=e(121),i=e(125),a=o?function(t,n){return o(t,"toString",{configurable:!0,enumerable:!1,value:r(n),writable:!0})}:i;t.exports=a},function(t,n){t.exports=function(t){return function(){return t}}},function(t,n){var e=Date.now;t.exports=function(t){var n=0,r=0;return function(){var o=e(),i=16-(o-r);if(r=o,i>0){if(++n>=800)return arguments[0]}else n=0;return t.apply(void 0,arguments)}}},function(t,n,e){var r=e(62),o=e(89),i=e(124),a=e(36);t.exports=function(t,n,e){if(!a(e))return!1;var c=typeof n;return!!("number"==c?o(e)&&i(n,e.length):"string"==c&&n in e)&&r(e[n],t)}},,,function(t,n,e){var r=e(167),o=e(168)((function(t,n,e){r(t,n,e)}));t.exports=o},,,,,,function(t,n,e){"use strict";e.r(n),e.d(n,"ChanneledProxy",(function(){return d}));var r=e(28),o=e.n(r),i=e(21),a=e.n(i),c=e(1),u=e.n(c),s=e(0),f=e.n(s),l=e(37),p=function(){function t(n,e){u()(this,t),this.handlerById={},this.handlersByMessage={},this.name=void 0,this.GlobalChannels=void 0,this.GlobalChannels=n,this.name=e}return f()(t,[{key:"on",value:function(n,e){t.logger.info("Register message handler for message(1) with channel(2)",n,this.name);var r={id:t.handlerIdCpt++,cb:e};this.handlerById[r.id]=r;var o=this.handlersByMessage[n];return o||(o=[],this.handlersByMessage[n]=o),o.push(r.id),r.id}},{key:"emit",value:function(n,e){t.logger.info("Send message(1) with data(2) for channel (3)",n,e,this.name);var r=this.handlersByMessage[n];if(null!=r)for(var o=0;o<r.length;o++){var i=r[o],a=this.handlerById[i];a?function(n){setTimeout((function(){t.logger.info("Sending message to handler",n,e),n.cb(e)}),0)}(a):(r.splice(o,1),o--)}return null!=r&&r.length>0}},{key:"off",value:function(n){return t.logger.info("Remove message handler(1) for this channel(2)",n,this.name),null!=this.handlerById[n]&&(delete this.handlerById[n],!0)}},{key:"remove",value:function(){return this.GlobalChannels.remove(this.name)}}]),t}();p.handlerIdCpt=0,p.logger=l.getLogger("Channel");var v=function(){function t(){u()(this,t)}return f()(t,null,[{key:"on",value:function(n,e){return t.globalChannel.on(n,e)}},{key:"emit",value:function(n,e){return t.globalChannel.emit(n,e)}},{key:"off",value:function(n){return t.globalChannel.off(n)}},{key:"get",value:function(n){var e=t.channels,r=e[n];return r||(r=new p(t,n),e[n]=r),r}},{key:"remove",value:function(n){var e=t.channels;return!!e[n]&&(delete e[n],!0)}}]),t}();v.channels={},v.globalChannel=new p(v,"__GLOBAL");var d=function(){function t(n,e){u()(this,t),this.channel=void 0,this.proxifyObject=void 0,this.proxifyObject=n,this.channel=v.get(e),this.initFromProxy(n)}return f()(t,[{key:"onChanged",value:function(t){this.channel.on("changed",t)}},{key:"get",value:function(t){return this.proxifyObject[t]}},{key:"set",value:function(t){var n={};for(var e in t)this.proxifyObject[e]!==t[e]&&(this.selfDefineProp(e),n[e]=this.proxifyObject[e]=t[e]);0!==a()(n).length&&this.emit(n)}},{key:"initFromProxy",value:function(t){for(var n in t)t.hasOwnProperty(n)&&this.selfDefineProp(n)}},{key:"selfDefineProp",value:function(t){void 0===this[t]&&o()(this,t,{get:function(){return this.get(t)},set:function(n){var e={};e[t]=n,this.set(e)}})}},{key:"emit",value:function(t){this.channel.emit("changed",t)}}]),t}()},,,function(t,n,e){var r=e(77),o=e(68);t.exports=function(t){return function(n,e){var i,a,c=String(o(n)),u=r(e),s=c.length;return u<0||u>=s?t?"":void 0:(i=c.charCodeAt(u))<55296||i>56319||u+1===s||(a=c.charCodeAt(u+1))<56320||a>57343?t?c.charAt(u):i:t?c.slice(u,u+2):a-56320+(i-55296<<10)+65536}}},function(t,n,e){"use strict";var r=e(93),o=e(55),i=e(66),a={};e(32)(a,e(12)("iterator"),(function(){return this})),t.exports=function(t,n,e){t.prototype=r(a,{next:o(1,e)}),i(t,n+" Iterator")}},function(t,n,e){"use strict";var r=e(247),o=e(159),i=e(51),a=e(31);t.exports=e(109)(Array,"Array",(function(t,n){this._t=a(t),this._i=0,this._k=n}),(function(){var t=this._t,n=this._k,e=this._i++;return!t||e>=t.length?(this._t=void 0,o(1)):o(0,"keys"==n?e:"values"==n?t[e]:[e,t[e]])}),"values"),i.Arguments=i.Array,r("keys"),r("values"),r("entries")},function(t,n){t.exports=function(){}},function(t,n,e){e(110),e(70),e(91),e(249),e(252),e(253),t.exports=e(3).Promise},function(t,n,e){"use strict";var r,o,i,a,c=e(50),u=e(7),s=e(44),f=e(103),l=e(11),p=e(23),v=e(48),d=e(146),h=e(128),y=e(134),g=e(135).set,m=e(250)(),b=e(94),x=e(136),w=e(251),_=e(137),O=u.TypeError,j=u.process,S=j&&j.versions,P=S&&S.v8||"",k=u.Promise,A="process"==f(j),T=function(){},I=o=b.f,C=!!function(){try{var t=k.resolve(1),n=(t.constructor={})[e(12)("species")]=function(t){t(T,T)};return(A||"function"==typeof PromiseRejectionEvent)&&t.then(T)instanceof n&&0!==P.indexOf("6.6")&&-1===w.indexOf("Chrome/66")}catch(t){}}(),E=function(t){var n;return!(!p(t)||"function"!=typeof(n=t.then))&&n},M=function(t,n){if(!t._n){t._n=!0;var e=t._c;m((function(){for(var r=t._v,o=1==t._s,i=0,a=function(n){var e,i,a,c=o?n.ok:n.fail,u=n.resolve,s=n.reject,f=n.domain;try{c?(o||(2==t._h&&D(t),t._h=1),!0===c?e=r:(f&&f.enter(),e=c(r),f&&(f.exit(),a=!0)),e===n.promise?s(O("Promise-chain cycle")):(i=E(e))?i.call(e,u,s):u(e)):s(r)}catch(t){f&&!a&&f.exit(),s(t)}};e.length>i;)a(e[i++]);t._c=[],t._n=!1,n&&!t._h&&N(t)}))}},N=function(t){g.call(u,(function(){var n,e,r,o=t._v,i=L(t);if(i&&(n=x((function(){A?j.emit("unhandledRejection",o,t):(e=u.onunhandledrejection)?e({promise:t,reason:o}):(r=u.console)&&r.error&&r.error("Unhandled promise rejection",o)})),t._h=A||L(t)?2:1),t._a=void 0,i&&n.e)throw n.v}))},L=function(t){return 1!==t._h&&0===(t._a||t._c).length},D=function(t){g.call(u,(function(){var n;A?j.emit("rejectionHandled",t):(n=u.onrejectionhandled)&&n({promise:t,reason:t._v})}))},F=function(t){var n=this;n._d||(n._d=!0,(n=n._w||n)._v=t,n._s=2,n._a||(n._a=n._c.slice()),M(n,!0))},z=function(t){var n,e=this;if(!e._d){e._d=!0,e=e._w||e;try{if(e===t)throw O("Promise can't be resolved itself");(n=E(t))?m((function(){var r={_w:e,_d:!1};try{n.call(t,s(z,r,1),s(F,r,1))}catch(t){F.call(r,t)}})):(e._v=t,e._s=1,M(e,!1))}catch(t){F.call({_w:e,_d:!1},t)}}};C||(k=function(t){d(this,k,"Promise","_h"),v(t),r.call(this);try{t(s(z,this,1),s(F,this,1))}catch(t){F.call(this,t)}},(r=function(t){this._c=[],this._a=void 0,this._s=0,this._d=!1,this._v=void 0,this._h=0,this._n=!1}).prototype=e(147)(k.prototype,{then:function(t,n){var e=I(y(this,k));return e.ok="function"!=typeof t||t,e.fail="function"==typeof n&&n,e.domain=A?j.domain:void 0,this._c.push(e),this._a&&this._a.push(e),this._s&&M(this,!1),e.promise},catch:function(t){return this.then(void 0,t)}}),i=function(){var t=new r;this.promise=t,this.resolve=s(z,t,1),this.reject=s(F,t,1)},b.f=I=function(t){return t===k||t===a?new i(t):o(t)}),l(l.G+l.W+l.F*!C,{Promise:k}),e(66)(k,"Promise"),e(162)("Promise"),a=e(3).Promise,l(l.S+l.F*!C,"Promise",{reject:function(t){var n=I(this);return(0,n.reject)(t),n.promise}}),l(l.S+l.F*(c||!C),"Promise",{resolve:function(t){return _(c&&this===a?k:this,t)}}),l(l.S+l.F*!(C&&e(144)((function(t){k.all(t).catch(T)}))),"Promise",{all:function(t){var n=this,e=I(n),r=e.resolve,o=e.reject,i=x((function(){var e=[],i=0,a=1;h(t,!1,(function(t){var c=i++,u=!1;e.push(void 0),a++,n.resolve(t).then((function(t){u||(u=!0,e[c]=t,--a||r(e))}),o)})),--a||r(e)}));return i.e&&o(i.v),e.promise},race:function(t){var n=this,e=I(n),r=e.reject,o=x((function(){h(t,!1,(function(t){n.resolve(t).then(e.resolve,r)}))}));return o.e&&r(o.v),e.promise}})},function(t,n,e){var r=e(7),o=e(135).set,i=r.MutationObserver||r.WebKitMutationObserver,a=r.process,c=r.Promise,u="process"==e(49)(a);t.exports=function(){var t,n,e,s=function(){var r,o;for(u&&(r=a.domain)&&r.exit();t;){o=t.fn,t=t.next;try{o()}catch(r){throw t?e():n=void 0,r}}n=void 0,r&&r.enter()};if(u)e=function(){a.nextTick(s)};else if(!i||r.navigator&&r.navigator.standalone)if(c&&c.resolve){var f=c.resolve(void 0);e=function(){f.then(s)}}else e=function(){o.call(r,s)};else{var l=!0,p=document.createTextNode("");new i(s).observe(p,{characterData:!0}),e=function(){p.data=l=!l}}return function(r){var o={fn:r,next:void 0};n&&(n.next=o),t||(t=o,e()),n=o}}},function(t,n,e){var r=e(7).navigator;t.exports=r&&r.userAgent||""},function(t,n,e){"use strict";var r=e(11),o=e(3),i=e(7),a=e(134),c=e(137);r(r.P+r.R,"Promise",{finally:function(t){var n=a(this,o.Promise||i.Promise),e="function"==typeof t;return this.then(e?function(e){return c(n,t()).then((function(){return e}))}:t,e?function(e){return c(n,t()).then((function(){throw e}))}:t)}})},function(t,n,e){"use strict";var r=e(11),o=e(94),i=e(136);r(r.S,"Promise",{try:function(t){var n=o.f(this),e=i(t);return(e.e?n.reject:n.resolve)(e.v),n.promise}})},,function(t,n,e){var r=e(56),o=e(95),i=e(76);t.exports=function(t){var n=r(t),e=o.f;if(e)for(var a,c=e(t),u=i.f,s=0;c.length>s;)u.call(t,a=c[s++])&&n.push(a);return n}},,,function(t,n,e){e(157),e(110),e(259),e(260),t.exports=e(3).Symbol},function(t,n,e){e(98)("asyncIterator")},function(t,n,e){e(98)("observable")},,function(t,n,e){e(70),e(91),t.exports=e(96).f("iterator")},function(t,n,e){e(264);var r=e(3).Object;t.exports=function(t,n){return r.getOwnPropertyDescriptor(t,n)}},function(t,n,e){var r=e(31),o=e(102).f;e(100)("getOwnPropertyDescriptor",(function(){return function(t,n){return o(r(t),n)}}))},,function(t,n,e){"use strict";var r=e(22),o=e(55);t.exports=function(t,n,e){n in t?r.f(t,n,o(0,e)):t[n]=e}},,,,,,,,,,,,,,,function(t,n,e){e(282),t.exports=e(3).Array.isArray},function(t,n,e){var r=e(11);r(r.S,"Array",{isArray:e(133)})},function(t,n,e){e(70),e(284),t.exports=e(3).Array.from},function(t,n,e){"use strict";var r=e(44),o=e(11),i=e(54),a=e(142),c=e(143),u=e(87),s=e(266),f=e(106);o(o.S+o.F*!e(144)((function(t){Array.from(t)})),"Array",{from:function(t){var n,e,o,l,p=i(t),v="function"==typeof this?this:Array,d=arguments.length,h=d>1?arguments[1]:void 0,y=void 0!==h,g=0,m=f(p);if(y&&(h=r(h,d>2?arguments[2]:void 0,2)),null==m||v==Array&&c(m))for(e=new v(n=u(p.length));n>g;g++)s(e,g,y?h(p[g],g):p[g]);else for(l=m.call(p),e=new v;!(o=l.next()).done;g++)s(e,g,y?a(l,h,[o.value,g],!0):o.value);return e.length=g,e}})},,,,,,,,,,,,,,,,,,,function(t,n,e){e(91),e(70),t.exports=e(304)},function(t,n,e){var r=e(20),o=e(106);t.exports=e(3).getIterator=function(t){var n=o(t);if("function"!=typeof n)throw TypeError(t+" is not iterable!");return r(n.call(t))}},,,,,,,,,,,,,,,,,,,,,,,,function(t,n,e){"use strict";e.r(n);var r=e(149);e(73).AccorHotelsUtils.createAccorHotels(),window.AccorHotels.services.SessionService=r.a,window.SessionService=r.a.getInstance()}]);
//# sourceMappingURL=main.js.map
/** < /services/session-service/scripts-v2104/main.js **/

var globalViewbeansData = {};

if (typeof ajaxRequest == 'undefined') {
  var ajaxRequest = {
    _getSecuredUrl: function() {

      
      return "https://s-meetings.accor.com";

      
    },

    retry: "",
    lang: "",

    getSessionId: function() {
      var sessionCookieName = "JSESSIONID";
      var cookies = document.cookie.split(';'),
        i = 0;
      for (i = 0; i < cookies.length; i++) {
        var cookie = cookies[i];
        while (cookie.charAt(0) == ' ') {
          cookie = cookie.substring(1, cookie.length);
        }
        if (cookie.indexOf(sessionCookieName + "=") == 0) {
          return cookie.substring(sessionCookieName.length + 1, cookie.length);
        }
      }
      return "";
    },

    getTimeStamp: function() {
      var currentDate = new Date();
      return currentDate.getTime();
    },

    getCodeLang: function() {
      return jQuery("html").attr("lang");
    },

    /**
     * formId : String : ID du formulaire lié à l'action
     * @param classErrorDisplayer : String : class CSS de l'element Html devant afficher les messages d'erreur
     * @param callback : String : fonction JS executee au retour de l'appel, doit contenir les eventuels parametres necessaires a la fonction
     **/
    _executeByForm: function(formId, classErrorDisplayer, classError, callback) {
      SessionService.getSession().then(function(sessionId) {
        var form = jQuery("#" + formId);
        if (this.retry != form.attr("action")) {
          this.retry = form.attr("action");
          var myMethod = "GET";
          if (form.attr("method")) {
            myMethod = form.attr("method").toUpperCase();
          }

          //filter data to dont send with data-send=false
          if(jQuery('[data-send=false]').length > 0) {
            for(var i = 0; i < jQuery('[data-send=false]').length; i++) {
              jQuery('[data-send=false]')[i].value = ""
            }
          }

          jQuery.ajax({
            type: myMethod,
            url: (form.attr("action").indexOf('http') == -1 && form.attr("action").indexOf('https') == -1) ? "/ajax" + form.attr("action") : form.attr("action"),
            data: form.serialize() + "&httpSessionId=" + sessionId + "&t=" + this.getTimeStamp() + "&lang=" + ajaxRequest.getCodeLang(),
            dataType: 'json',
            success: function (response, status) {
              var errors = ajaxRequest.getErrors(response, status);
              if (classError && classError != "") {
                ajaxRequest.clearErrorFiels(formId, classError);
              }
              ajaxRequest.clearErrorDisplayer(classErrorDisplayer, formId);
              ajaxRequest.retry = "";

              if (response.waitingRoom && response.waitingRoom != false) {
                ajaxRequest.setWaitingRoom(formId, classErrorDisplayer, classError, callback);
              } else {
                if (typeof popins != "undefined" && popins.opened && popins.opened['div.waitingRoom'] && ajaxRequest.popinContent != null) {
                  ajaxRequest.popinContent.dialog("close");
                }

                if (response.location) {
                  if (response.targetWindow == "_top" || form.attr("target") == "_top") {
                    top.location.href = response.location;
                  } else if (response.targetWindow == "_parent" || form.attr("target") == "_parent") {
                    parent.location.href = response.location;
                  } else {
                    document.location.href = response.location;
                  }
                } else {
                  eval(callback);
                }
              }
            },
            error: function (response, status) {
              ajaxRequest.redirectPageError(form.attr("target"));
            }
          });
        }
      }.bind(this));
      return false;
    },
    /**
     * FormData pour submit des files en ajax.
     * Permet l'envoi de fichier via un appel ajax, y compris pour IE7, IE8 et IE9  en utilisant la technique de l'iframe cachee.
     * @param formId : String : ID du formulaire a envoyer.
     * @param classErrorDisplayer : String : class CSS de l'element Html devant afficher les messages d'erreur.
     * @param classError : String : class CSS a ajouter aux champs en erreur.
     * @param callback : String : fonction JS executee au retour de l'appel, doit contenir les eventuels parametres necessaires a la fonction.
     **/
    _executeByFormData: function(formId, classErrorDisplayer, classError, callback) {
      SessionService.getSession().then(function(sessionId) {
        var form = jQuery("#" + formId);
        if (this.retry != form.attr("action")) {
          this.retry = form.attr("action");

          // Browser Html5
          if (window.FormData !== undefined) {
            //Si on dispose de l'objet DataForm, alors on peut envoyer des Files en Ajax.
            var data = new FormData();

            //On charge toutes les clés/valeurs du formulaire dans le formData
            jQuery.each(form[0], function (key, value) {
              // WorkAround pour les checkbox ( la  value est true, qu'elle soit cochée ou non ).
              if (value.type == 'checkbox') {
                data.append(value.name, jQuery(value).prop('checked'));
              }
              //Workaround pour les input de type file
              else if (value.type == 'file') {
                var file = (value).files[0];
                if (typeof file != 'undefined' && file != null) {
                  data.append(value.name, file);
                }
              }
              // input classiques
              else {
                data.append(value.name, value.value);
              }
              //  }
            });

            // Permet d'eviter l'exception CRSF
            data.append("httpSessionId", sessionId);
            data.append("t", ajaxRequest.getTimeStamp());
            data.append("lang", ajaxRequest.getCodeLang());

            jQuery.ajax({
              type: form.attr("method").toUpperCase(),
              url: "/ajax" + form.attr("action"),
              data: data,
              dataType: 'json',
              cache: false,
              processData: false, // Don't process the files
              contentType: false, // Set content type to false as jQuery will tell the server its a query string request
              success: function (response, status) {
                ajaxRequest.handleFormDataAjaxErrors(response, status, classError, classErrorDisplayer, form, callback);
              },
              error: function (response, status) {
                ajaxRequest.redirectPageError(form.attr("target"));
              }
            });
          }
          // Non Html5 Browsers ( < IE 10 )
          else {
            ajaxRequest.submitFilesForIE(formId, classErrorDisplayer, classError, callback);
          }
        }
      }.bind(this));
      return false;
    },

    /**
     * Methode specifique IE & Browsers ne supportant pas XHR2 ( et l'objet FormData du meme coup ).
     * On utilise ici la technique de l'iframe cachee pour submit le formulaire et traiter la réponse. Donne l'illusion d'une requete ajax.
     * @param formId : String : ID du formulaire a envoyer.
     * @param classErrorDisplayer : String : class CSS de l'element Html devant afficher les messages d'erreur.
     * @param classError : String : class CSS a ajouter aux champs en erreur.
     * @param callback : String : fonction JS executee au retour de l'appel, doit contenir les eventuels parametres necessaires a la fonction.
     **/
    submitFilesForIE: function(formId, classErrorDisplayer, classError, callback) {
      var form = jQuery("#" + formId);
      //generate a random id
      var iframeId = 'iFrame' + formId;
      var oldAction = form.attr('action');
      var oldTarget = form.attr('target');
      //create an empty iframe
      var iframe = jQuery('<iframe src="javascript:false;" name="' + iframeId + '" id="' + iframeId + '"/>');
      //hide it
      iframe.hide();
      //set form target to iframe
      form.attr('target', iframeId);
      form.attr('encoding', 'multipart/form-data');
      form.attr('enctype', 'multipart/form-data');
      form.attr('action', '/ajax' + form.attr('action'));
      //Ajout du httpSessionId
      form.append('<input type="hidden" id="httpSessionId" name="httpSessionId" value="' + ajaxRequest.getSessionId() + '" />');
      form.append('<input type="hidden" id="t" name="t" value="' + ajaxRequest.getTimeStamp() + '" />');
      form.append('<input type="hidden" id="lang" name="lang" value="' + ajaxRequest.getCodeLang() + '" />');

      iframe.load(function(e) {
        var doc = jQuery(this);
        var docRoot = doc.contents().find("body");
        var data = docRoot.text();
        // ERROR
        if (typeof data == 'undefined') {
          ajaxRequest.redirectPageError(oldTarget);
        }
        // SUCCESS
        else {
          // le retour est de la forme "{}&&{fieldsErrors:,etc...}"
          // D'ou le substring(4).
          var response = jQuery.parseJSON(data.substring(4, data.length));
          ajaxRequest.handleFormDataAjaxErrors(response, "success", classError, classErrorDisplayer, form, callback);
        }
        //Une fois les erreurs traitées, on retire l'iframe du body, ni vu ni connu.
        jQuery(this).remove();
      });
      iframe.appendTo('body');
      form.submit();
      //  On enlève les champs cachés et on remet l'ancienne action et l'ancienne target.
      form.attr('action', oldAction);
      form.attr('target', oldTarget);
      jQuery('#lang').remove();
      jQuery('#httpSessionId').remove();
      jQuery('#t').remove();
    },

    /**
     * Gestion des retours et des erreurs lors du submit du formDataL.
     * @param response : String : Reponse JSON renvoyé par le serveur.
     * @param status : String : le code retour du serveur.
     * @param classErrorDisplayer : String : class CSS de l'element Html devant afficher les messages d'erreur.
     * @param classError : String : class CSS a ajouter aux champs en erreur.
     * @param form : form jQuery : le form jQuery a submit.
     * @param callback : String : fonction JS executee au retour de l'appel, doit contenir les eventuels parametres necessaires a la fonction.
     **/
    handleFormDataAjaxErrors: function(response, status, classError, classErrorDisplayer, form, callback) {
      var errors = ajaxRequest.getErrors(response, status);
      var formId = form.attr('id');
      if (classError && classError != "") {
        ajaxRequest.clearErrorFiels(formId, classError);
      }
      ajaxRequest.clearErrorDisplayer(classErrorDisplayer, formId);
      ajaxRequest.retry = "";
      if (response.location) {
        if (response.targetWindow == "_top" || form.attr("target") == "_top") {
          top.location.href = response.location;
        } else if (response.targetWindow == "_parent" || form.attr("target") == "_parent") {
          parent.location.href = response.location;
        } else {
          document.location.href = response.location;
        }
      } else {
        eval(callback);
      }
    },

    relatif2SecureURL: function() {
      var a = new Object();
      a["/bean/getViewBeans.action?"] = this._getSecuredUrl() + "/bean/getViewBeansJsonP.action?";
      a["/json/upsell/getUpsellViewBean.action?"] = this._getSecuredUrl() + "/json/upsell/getUpsellViewBeanJsonP.action?";
      a["/json/availability/getHotelRatesViewBean.action?"] = this._getSecuredUrl() + "/json/availability/getHotelRatesViewBeanJsonP.action?";

      return a;
    },

    needToSecure: function(url) {
      for (k in this.relatif2SecureURL()) {
        if (url.indexOf(k) == 0 && (window.location.protocol === 'http:' || this._getSecuredUrl().indexOf('sofitel') > -1)) {
          return k;
        }
      }
      return false;
    },

    _executeByUrl: function(ajaxUrl, classErrorDisplayer, callback) {
      // patch correction SEO referer
      if (this.getSessionId() === "") {
        ajaxUrl += '&referer=' + escape(window.document.referrer);
      }
      if (keyFound = this.needToSecure(ajaxUrl)) {
        var secureURL = ajaxUrl.replace(keyFound, this.relatif2SecureURL()[keyFound]);
        return this._executeByUrlInternal(secureURL, classErrorDisplayer, callback, 'jsonp', 'callback');
      } else {
        return this._executeByUrlInternal(ajaxUrl, classErrorDisplayer, callback);
      }
    },

    /**
     * @param ajaxUrl : String : URL de l'action a appeler
     * @param classErrorDisplayer : String : class CSS de l'element Html devant afficher les messages d'erreur
     * @param callback : String : fonction JS executee au retour de l'appel, doit contenir les eventuels parametres necessaires a la fonction
     **/
    _executeByUrlInternal: function(ajaxUrl, classErrorDisplayer, callback, dataType, jsonCallbackFnct) {
      SessionService.getSession().then(function(sessionId) {
        if (this.retry != ajaxUrl) {
          this.retry = ajaxUrl;
          var req = {
            url: ajaxUrl,
            data: "httpSessionId=" + sessionId + "&t=" + this.getTimeStamp() + "&lang=" + ajaxRequest.getCodeLang(),
            dataType: 'json',
            success: function (response, status) {
              status = (undefined === status && dataType === 'jsonp') ? 'success' : status;
              var errors = ajaxRequest.getErrors(response, status);
              ajaxRequest.clearErrorDisplayer(classErrorDisplayer);
              ajaxRequest.retry = "";

              if (errors.length === 0 && typeof response.viewBeans !== 'undefined') {
                globalViewbeansData = response.viewBeans;
                jQuery('body').trigger(jQuery.Event('data_received.ah'));
              }

              if (response === null) {
                ajaxRequest.redirectPageError();
              } else if (response.location) {
                if (response.targetWindow == "_top") {
                  top.location.href = response.location;
                } else if (response.targetWindow == "_parent") {
                  parent.location.href = response.location;
                } else {
                  document.location.href = response.location;
                }
              } else {
                eval(callback);
              }
            },
            error: function (response, status) {
              //En cas d'annulation de requete par l'utilisateur
              if (response.readyState != 0 && response.readyState != "" && response.status != 0 && response.statusText != "error") {
                ajaxRequest.redirectPageError();
              }
            }
          };

          if (dataType === 'jsonp') {
            req.dataType = 'jsonp';
            req.jsonp = jsonCallbackFnct;
          }
          jQuery.ajax(req);
        }
      }.bind(this));
      return false;
    },

    redirectPageError: function(target) {
      this.lang = this.getCodeLang();
      if (this.lang == 'gb') {
        this.lang = 'en';
      }
      var url = '/errors/others/index.' + this.lang + '.jshtml';

      if (target == "_top") {
        top.location.href = url;
      } else if (target == "_parent") {
        parent.location.href = url;
      } else {
        document.location.href = url;
      }
      return true;
    },

    setWaitingRoom: function(formId, classErrorDisplayer, classError, callback) {
      var datas = {
        modal: true,
        drag: false,
        redim: false,
        iframe: false,
        ajax: true,
        width: 680,
        height: null,
        type: "alert",
        ref: "waitingRoom"
      };

      this.timerID = null;
      this.waitingTime = 31;
      this.requestParams = {
        form: formId,
        classErrorDisplayer: classErrorDisplayer,
        classError: classError,
        callback: callback
      };

      if (this.popinContent == "undefined") {
        this.popinContent = null;
      }

      if (popins && !popins.opened) {
        popins.opened = {};
      }

      if (popins && popins.opened && !popins.opened['div.waitingRoom']) {
        jQuery.get("/commun/waiting-room.html", function(response) {
          ajaxRequest.popinContent = jQuery('<div class="popin' + datas.ref + '">' + response + '</div>').appendTo(document.body);
          popins.openPopin(ajaxRequest.popinContent, datas);
          ajaxRequest.countDown();
        });
      } else {
        jQuery("#countdown").fadeTo("fast", 1.0);
        ajaxRequest.countDown();
      }
    },

    countDown: function() {
      var wordingTime = "";
      if (this.waitingTime > 0) {
        this.waitingTime -= 1;
      }
      if (this.waitingTime <= 1) {
        wordingTime = " second";
      } else {
        wordingTime = " seconds";
      }

      document.getElementById('timer').innerHTML = this.waitingTime + wordingTime;
      if (this.waitingTime == 0) {
        clearTimeout(ajaxRequest.timerID);
        jQuery("#countdown").fadeTo("slow", 0.1, function() {
          ajaxRequest._executeByForm(ajaxRequest.requestParams.form, ajaxRequest.requestParams.classErrorDisplayer, ajaxRequest.requestParams.classError, ajaxRequest.requestParams.callback);
        });
      } else {
        clearTimeout(this.timerID);
        this.timerID = setTimeout("ajaxRequest.countDown()", 1000);
      }
    },

    getErrors: function(ajaxResponse, requestStatus) {
      var errorKeys = new Array();
      if (ajaxResponse && requestStatus == "success") {
        // Functional errors on Actions (actionErrors)
        if (ajaxResponse.actionErrors && ajaxResponse.actionErrors.length > 0) {
          errorKeys = errorKeys.concat(ajaxResponse.actionErrors);
		  if(jQuery('#searchSource').length){
            $('.date #search-dateIn-boo').css({'border':'3px solid red'});
          }
        }

        // Errors on fields (not validated fields/keys OR fields which caused action error)
        if (ajaxResponse.fieldErrors && this.isNotEmpty(ajaxResponse.fieldErrors)) {
          if (errorKeys.length == 0) { // si on a pas d'actionErrors, alors il s'agit d'erreur de validation
            errorKeys.push("generic.error.validation"); // on fixe un message generique
          }
        }

        // Technical error (textual message from application server "OOoops + stack")
        if (ajaxResponse.technicalErrors && ajaxResponse.technicalErrors.length > 0) {
          if (ajaxResponse.technicalErrors[0].indexOf("9000-") >= 0) {
            var lg = jQuery("html").attr("lang");
            var redirect = "/errors/session-expired/index."+lg+".html";
          } else if (ajaxResponse.technicalErrors[0].indexOf("2101") >= 0 || ajaxResponse.technicalErrors[0].indexOf("2100-3") >= 0 || ajaxResponse.technicalErrors[0].indexOf("2200-3") >= 0) {
            errorKeys.push("generic.error.service.down");
            errorKeys = errorKeys.concat(response.technicalErrors);
          } else if (ajaxResponse.technicalErrors.length > 0) { // "[xxx:xxxx] "
            errorKeys.push("generic.error.technical");
            errorKeys = errorKeys.concat(ajaxResponse.technicalErrors);
          }
        }
      } else {
        errorKeys.push("generic.error.server");
      }

      if (redirect && redirect != "") {
        document.location.href = redirect;
      } else {
        return errorKeys;
      }
    },

    redirectSessionExpired: function() {
      var lg = jQuery("html").attr("lang"),
        redirect = "/errors/session-expired/index."+lg+".html";;
      if (lg == "en") {
        lg = "gb";
      }

      document.location.href = redirect;
    },

    isNotEmpty: function(object) {
      var i = "";
      for (i in object) {
        return true;
      }
      return false;
    },

    // formId is optional
    showErrorFields: function(fieldsObj, classError, formId) {
      jQuery.each(fieldsObj, function(i) {
        if (formId) {
          jQuery("#" + formId).find("input[name='" + i + "'], select[name='" + i + "']").not("input[type='radio']").addClass(classError);

          jQuery("#" + formId).find("input[name='" + i + "']").each(function() {
            jQuery("#" + formId).find("label[for='" + jQuery(this).attr("id") + "']").addClass(classError);
          });
        } else {
          jQuery("body").find("input[name='" + i + "'], select[name='" + i + "']").addClass(classError).prev("label").addClass(classError);
        }
      });
    },

    /**
     * @param errorsArr : Array : tableau des erreurs recupere par la methode getErrors.
     * @param classErrorDisplayer : String : class CSS de l'element Html devant afficher les messages d'erreur
     * @param formId : ID du formulaire de reference pour cette action (optionnel)
     **/
    showErrors: function(errorsArr, classErrorDisplayer, formId) {
      if (formId) {
        var errorDisplayer = jQuery("#" + formId + " ." + classErrorDisplayer);
      } else {
        var errorDisplayer = jQuery(" ." + classErrorDisplayer);
      }
      if (errorsArr.length > 0) {
        errorDisplayer.html(errorsArr.join("<br />")).show();
      }
    },


    /**
     * @param formId est optionnel (cas de l'appel via une URL)
     **/
    clearErrorDisplayer: function(classErrorDisplayer, formId) {
      if (formId) {
        jQuery("#" + formId + " ." + classErrorDisplayer).empty();
      } else {
        jQuery(" ." + classErrorDisplayer).empty();
      }
    },

    clearErrorFiels: function(formId, classError) {
      jQuery("#" + formId).find("." + classError).removeClass(classError);
    }
  };
}

/** < /scripts-v2104/lib/ajax-request.js **/

/** js utils / init tooltip / clearInput **/
/** > /scripts-v2104/booking/common/utils.js **/
if (!utils) {
    var utils = {};
}
//init tooltips
utils.tooltips = {
    init: function (tooltips) {

        tooltips = tooltips || jQuery(".tooltip");
        if (tooltips.size()) {
            //create tooltip div content
            if (!jQuery('#divToolTip').size()) {
                jQuery('<div id="divToolTip"> </div>').appendTo('body');
            }

            tooltips.each(function () {
                jQuery(this).tooltip({
                    tip: '#divToolTip',
                    lazy: false,
                    onBeforeShow: function () {
                        //config tooltip in offset, position and width
                        var offsetArray = [0, 0],
                        positionArray = ["top", "center"],
                        elm = this,
                        trigger = elm.getTrigger();
                        jQuery((trigger)[0].className.split(/\s+/)).each(function (i, cls) {
                            if (cls.indexOf('cfgtt-') === 0) {
                                cls += '-';

                                //get Offset x & y
                                offsetArray[0] = /offy:-?\d+/.test(cls) ? parseInt(cls.match(/offy:(-?\d+)/)[1], 10) : 0;
                                offsetArray[1] = /offx:-?\d+/.test(cls) ? parseInt(cls.match(/offx:(-?\d+)/)[1], 10) : 0;

                                //get Position x & y
                                positionArray[0] = /ypos:([^\s-]+)/.test(cls) ? parseInt(cls.match(/ypos:([^\s-]+)/)[1], 10) : 0;
                                positionArray[1] = /xpos:([^\s-]+)/.test(cls) ? parseInt(cls.match(/xpos:([^\s-]+)/)[1], 10) : 0;

                                //get width option tooltip
                                var width = /width:\d+/.test(cls) ? parseInt(cls.match(/width:(\d+)/)[1], 10) : (/width:none/.test(cls) ? 'none' : 'auto');

                                //set offset tooltip
                                elm.getConf().offset = offsetArray;
                                //set position tooltip
                                elm.getConf().position = positionArray;
                                //set width tooltip
                                if(width != 'none') {
                                  elm.getTip().css('width', width);
                                } else {
                                  elm.getTip().css('width', '');
                                }
                                if (trigger.hasClass('family')) {
                                    elm.getTip().addClass('family');
                                } else {
                                    elm.getTip().removeClass('family');
                                }
                                
                                // Set position for advanced engine AH Q79614
                                if(window.location.host === 'www.accorhotels.com' || window.location.host === 'all.accor.com' ||  window.location.host === 'pullman.accor.com') {
                                  if(jQuery('#advanced-search').length) {
                                    var rtl = jQuery('body').hasClass('ar');
                                    
                                    if (window.location.host === 'www.accorhotels.com' || window.location.host === 'all.accor.com') {
                                      
                                      var left = rtl ? 
                                        trigger.offset().left + 25 : 
                                        trigger.offset().left - width - 25;
                                        
                                      elm.getTip().css({
                                        top: trigger.offset().top,
                                        left: left
                                      });
                                      
                                    } 
                                    
                                    if (window.location.host === 'pullman.accor.com') {
                                      
                                      var left = rtl ? 
                                        trigger.offset().left + 10 : 
                                        trigger.offset().left - width - 10;
                                        
                                      elm.getTip().css({
                                        top: trigger.offset().top - 20,
                                        left: left
                                      });
                                      
                                    } 

                                  }
                                }
                            }
                        });

                        jQuery('#divToolTip').unbind('touchend').bind('touchend', function(e){
                            e.preventDefault();
                            elm.getTip().hide();
                            jQuery(elm).blur();
                        });

                        //Conversion devise
                        if (typeof Currencies != "undefined") {
                            if (Currencies.ratesTab != null) {
                                Currencies._save(jQuery("#divToolTip .tPrice"));
                                Currencies._convert(Currencies.ratesTab.currencies, jQuery("#selectCurrency").val(), jQuery("#divToolTip .tPrice"));
                            }
                        }
                    }
                });
            });

            jQuery('.tooltip').click(function () {
                if (this.type != "checkbox" && !jQuery(this).hasClass('tooltip-link')) {
                    return false;
                }
            });
        }
    }
};

utils.getUrlParameter = function (name, decode) {
    return utils._getUrlParameter(name, window.location.href, decode);
};

utils.getMultipleUrlParameter = function (name) {
    name = name.replace(/[\[0-9\]]/g, "");
    var regexS = "[\\?&#]" + name + "\\[[0-9]*\\]=([^&#]*)",
    regex = new RegExp(regexS, 'g'),
    results = regex.exec(unescape(window.location.href)),
    hrefS = unescape(window.location.href),
    results = hrefS.match(regex),
    values = [];
    if (results != null) {
        var i;
        for (i = 0; i < results.length; i++) {
            values.push(results[i].split("=")[1]);
        }
    }
    return values;
};

/* Permet de passer en parametre l'URL a parser plutot que de forcer le window.location.href */
utils._getUrlParameter = function (name, url, decode){
    name = name.replace(/[\[]/g, "\\\[").replace(/[\]]/g, "\\\]");

    var regexS = "[\\?&#]" + name + "=([^&#]*)",
    regex = new RegExp(regexS),
    results;
    if (decode) {
        results = regex.exec(unescape(decodeURIComponent(url)));
    } else {
        results = regex.exec(unescape(url));
    }

    if (results == null) {
        return "";
    } else {
        return results[1].replace(/[+]/g, " ");
    }
}

//clear default text in field
utils.OLDclearInput  = {
    init: function (el) {
        utils.clearInput.setField(el);
    },
    setField: function (el) {
        //focus listener
        el.focus(function () {
            var el = jQuery(this),
            val = el.val();
            //if no data in the key "placeholder" set key width value of the field
            if (!el.data('placeholder')) {
                el.data('placeholder', val);
            }
            //then remove text in the field
            if (val === el.data('placeholder')) {
                el.val('');
            }
        });
        //blur listener
        el.blur(function () {
            //in blur event if field still empty write data in key "placeholder" or nothing
            var el = jQuery(this);
            if (el.val() === '') {
                el.val(el.data('placeholder') || '');
            }
        });
    }
};

utils.clearInput  = {
    init: function (el) {
        utils.clearInput.setField(el);
    },
    setField: function (el) {
        //focus listener
        el.focus(function () {
            var el = jQuery(this),
            val = el.val();
            //If focus then remove text in the field
            if (val == el[0].title) {
                el.val('');
            }
        });
        //blur listener
        el.blur(function () {
            //in blur event if field still empty write title or nothing
            var el = jQuery(this);
            if (el.val() == '') {
                el.val(el[0].title || '');
                //APAC & Subamerica local case
                if (jQuery("body.home") && typeof homeBookingEngine != "undefined") {
                    homeBookingEngine.localLink.removeClass('hidden');
                    homeBookingEngine.country.addClass('hidden');
                    homeBookingEngine.city.addClass('hidden');
                }
            }
        });
        el.blur();
    }
};

utils.printDate = function (dateObj, dateFormat) {
    var m = dateObj.getMonth(),
    d = dateObj.getDate(),
    y = dateObj.getFullYear(),
    s = {};
    s["%d"] = (d < 10) ? ("0" + d) : d;
    s["%m"] = (m < 9) ? ("0" + (1 + m)) : (1 + m);
    s["%Y"] = y;
    s["%%"] = "%";

    var re = /%./g,
    a = dateFormat.match(re),
    i;
    for (i = 0; i < a.length; i++) {
        var tmp = s[a[i]];
        if (tmp) {
            re = new RegExp(a[i], 'g');
            dateFormat = dateFormat.replace(re, tmp);
        }
    }

    return dateFormat;
};

utils.convertDistance = function (distance, unit) {
    if (unit == null) {
        unit = "km";
    }
    if (distance != null) {
        if (unit != "km") {
            return ((distance / 1.609) / 1000).toFixed(2);
        } else {
            return (distance / 1000).toFixed(2);
        }
    } else {
        return;
    }
};

utils.shortenDescription = function (text) {
    var lang = (jQuery("html").attr("lang") == "en") ? "gb" : jQuery("html").attr("lang"), description;
    if (lang === "ja") {
        description = text.substr(0, 130);
    } else {
        description = text.substr(0, text.lastIndexOf(" ", 130));
    }

    return description + "...";
};

utils.isEmpty = function (ob) {
    var i;
    for (i in ob) {
        return false;
    }
    return true;
};

utils.isFactSheet = function() {
    var metas = document.querySelector("meta[name='X-Accor-rid']")
    if(metas != null && (metas.getAttribute("content") != "" && metas.getAttribute("content") != null)) {
        return true;
    } else {
        return false;
    }
}

utils.rewriteTitle = function () {
	var lang = (jQuery("html").attr("lang") == "en") ? "gb" : jQuery("html").attr("lang");
    var domName = document.domain.replace(/www\.|secure\.|s\-/, "");
    if((domName.toLowerCase() === "sofitel.accor.com") && this.isFactSheet) return;
	if(lang=="nl"){
		if(jQuery("body#advanced-search").length || jQuery("body#map-search").length){
			document.title = document.title + " " + domName.charAt(0).toUpperCase() + domName.substr(1).toLowerCase();
		} 
		else{
			document.title = domName.charAt(0).toUpperCase() + domName.substr(1).toLowerCase();
		}
	}   
	else{
		document.title = domName.charAt(0).toUpperCase() + domName.substr(1).toLowerCase();
	}
};

utils.addCurrencyParamToBookLinks = function (links, $select) {
    var rg;

    if ($select.length > 0) {
        links.click(function (){

            if (this.href.indexOf('&currencyCode') > -1) {
                rg = new RegExp(/(.*&currencyCode=)\w{3}(.*)/);
                this.href = this.href.replace(rg, '$1' + $select.val() + '$2');
            }
            else{
                this.href = this.href + "&currencyCode=" + $select.val();
            }
        });
    }
};

utils.initComplementaryBrandHotelAlert = function (links, isModal) {
    var datas = {
        modal: isModal,
        drag: false,
        redim: false,
        iframe: false,
        ajax: false,
        width: 500,
        height: null,
        type: "alert",
        ref: "search",
        onClose : function (){
            utils.unsetLoadingButton();
        }
    };

    var lang = (jQuery("html").attr("lang") == "en") ? "gb" : jQuery("html").attr("lang");
    if(!(jQuery.inArray("LEI", utils.getMetaValue("X-Accor-resaContext", "content")) != -1)) {
        jQuery.get("/" + lang + "/booking/popins.htm", function (data) {
            if (jQuery("div.popin").size == 0) {
                jQuery("body").append(data);
            }
            jQuery("div.search p, div.search div.btn").hide();
        });

        links.click(function (e) {
            popins.openPopin(jQuery('div.' + datas.ref), datas);
            if (jQuery(this).hasClass("tChangeDates")) {
                //renvoyer vers une url sur AH, a vir ac Damien
                //jQuery("#compBrandHotelPopinButtons .submit").attr("href", this.href + "&forward=true");
                bookUrl = jQuery(this).parents(".calendar").find(".tBookLink").attr("href");
                jQuery("#compBrandHotelPopinButtons .submit").attr("href", bookUrl + "&forward=true");
            } else {
                jQuery("#compBrandHotelPopinButtons .submit").attr("href", this.href + "&forward=true");
            }

            if (jQuery(this).hasClass("isIbis")) {
                jQuery("#compBrandHotelPopinButtons, #tExternalHotelIbisMsg").show();
                jQuery("#tCompBrandHotelMsg").hide();
            } else {
                jQuery("#compBrandHotelPopinButtons, #tCompBrandHotelMsg").show();
                jQuery("#tExternalHotelIbisMsg").hide();
            }

            // Fermer la popin au clic
            jQuery("#compBrandHotelPopinButtons .submit").click(function() {
                popins.closePopin(jQuery('div.' + datas.ref));
            });
            return false;
        });
    }
};

utils.initExternalHotelAlert = function (links, isModal) {
    var datas = {
        modal: isModal,
        drag: false,
        redim: false,
        iframe: false,
        ajax: false,
        width: 500,
        height: null,
        type: "alert",
        ref: "search",
        onClose : function (){
            utils.unsetLoadingButton();
        }
    };

    var lang = (jQuery("html").attr("lang") == "en") ? "gb" : jQuery("html").attr("lang");
    if(!(jQuery.inArray("LEI", utils.getMetaValue("X-Accor-resaContext", "content")) != -1)) {
        jQuery.get("/" + lang + "/booking/popins.htm", function (data) {
            if (jQuery("div.popin").length == 0) {
                jQuery("body").append(data);
            }
            jQuery("div.search p, div.search div.btn").hide();
            links.click(function () {
                popins.openPopin(jQuery('div.' + datas.ref), datas);
                jQuery("#compBrandHotelPopinButtons .submit").attr("href", this.href);
                jQuery("#compBrandHotelPopinButtons, #tExternalHotelMsg").show();
                return false;
            });

            // Fermer la popin au clic
            jQuery("#compBrandHotelPopinButtons .submit").click(function() {
                popins.closePopin(jQuery('div.' + datas.ref));
            });
        });
    }
};

utils.initExternalHotelAlertHome = function (div, form, linkForm) {
    var datas = {
        modal: true,
        drag: false,
        redim: false,
        iframe: false,
        ajax: false,
        width: 500,
        height: null,
        type: "alert",
        ref: "search",
        show : div
    };
    if(!(jQuery.inArray("LEI", utils.getMetaValue("X-Accor-resaContext", "content")) != -1)) {
        jQuery.get("/" + form.lang + "/booking/popins.htm", function (data) {
            if (jQuery("div.popin").length == 0) {
                jQuery("body").append(data);
            }
            if (popins.opened != null) {//si popins deja instancié
                popins.openPopin(jQuery('div.' + datas.ref), datas);
            } else {
                popins.init();
                popins.openPopin(jQuery('div.' + datas.ref), datas);
            }
            jQuery("div.search p, div.search div.btn").hide();
            jQuery(datas.show).show();
            //si surcharge par une marque de la gestion du BrandHotelLink (btn submit possede class manual)
            if (typeof(manageBrandHotelLink) == "function") manageBrandHotelLink();
            //form.stopSubmitInProgressEffect();
            jQuery(".btn a.submit").not('.manual').bind("click", {
                _this : form
            }, function (e) {
                var _this = e.data._this;
                _this.$currentForm.attr("action", linkForm);
                _this.defaultPostSubmit = true;
              if(_this.$currentForm.proReserverId == undefined && e.data._this.proReserverId !== undefined){
                _this.$currentForm.proReserverId = e.data._this.proReserverId;
                _this.$currentForm.proReserverId.attr('disabled',false);
                }
              if(_this.$currentForm.proReserverContract == undefined && e.data._this.proReserverContract !== undefined){
                _this.$currentForm.proReserverContract = e.data._this.proReserverContract;
                _this.$currentForm.proReserverContract.attr('disabled',false);
                }
              if(_this.$currentForm.showProAcc == undefined && e.data._this.showProAcc !== undefined){
                _this.$currentForm.showProAcc = e.data._this.showProAcc;
                _this.$currentForm.showProAcc.attr('disabled',false);
                }
                _this.$currentForm.submit();
                return false;
            });
        });
    }
};

utils.initGenericPopin = function (popinSrc, popinContentSrc, modal, drag, redim, iframe, ajax, width, height, type, ref, show) {
    var datas = {
        modal: modal ? modal : true,
        drag: drag ? drag : false,
        redim: redim ? redim : false,
        iframe: iframe ? iframe : false,
        ajax: ajax ? ajax : false,
        width: width ? width : 500,
        height: height ? height : null,
        type: type ? type : "alert",
        ref: ref ? ref : "search",
        show : show ? show : div
    };

    var lang = (jQuery("html").attr("lang") == "en") ? "gb" : jQuery("html").attr("lang");

    jQuery.get('/' + lang + popinSrc, function (data) {
        if (jQuery("div.popin").length == 0) {
            jQuery("body").append(data);
        }
        if (popins.opened != null) {//si popins deja instancié
            popins.openPopin(jQuery('div.' + datas.ref), datas);
        } else {
            popins.init();
            popins.openPopin(jQuery('div.' + datas.ref), datas);
        }
        jQuery("div.search p, div.search div.btn").hide();
        jQuery(datas.show).show();

        //form.stopSubmitInProgressEffect();
        jQuery(".btn a.submit").not(".manual").bind("click", {
            _this : form
        }, function (e) {
            var _this = e.data._this;
            _this.$currentForm.attr("action", linkForm);
            _this.defaultPostSubmit = true;
            _this.$currentForm.submit();

            return false;
        });
    });
};

utils.initConfirmPopin = function (tpl, div, target) {
    var datas = {
        modal: true,
        drag: false,
        redim: false,
        iframe: false,
        ajax: false,
        width: 500,
        height: null,
        type: "alert",
        ref: "search",
        show : div
    };


    jQuery.get(tpl, function (data) {
        if (jQuery("div.popin").length == 0) {
            jQuery("body").append(data);
        }
        if (popins.opened != null) {//si popins deja instancié
            popins.openPopin(jQuery('div.' + datas.ref), datas);
        } else {
            popins.init();
            popins.openPopin(jQuery('div.' + datas.ref), datas);
        }
        jQuery("div.search p, div.search div.btn").hide();
        jQuery(datas.show).show();

        //form.stopSubmitInProgressEffect();
        jQuery(".search .btn a.submit").attr("href", target);
    });
};

utils.formatDateElement = function (str) {
    if (Number(str) < 10) {
        return "0" + str;
    } else {
        return str;
    }
};

utils.manageCallcenterDatas = function (code, isDisplayed) {

        var zone = utils.getCookieContent("userBrowsingZoneLocalization") == undefined ? "home" : utils.getCookieContent("userBrowsingZoneLocalization"),
        lang = (jQuery("html").attr("lang") == "en") ? "gb" : jQuery("html").attr("lang"),
        datasUrl = "/hotel-cms/" + lang + "/booking/call-center-" + zone + ".js";

        if(code && ( code ===  "NOV" ||  code ===  "SUI") && utils.getCookieContent("userLocalization") != undefined) {
            zone = utils.getCookieContent("userLocalization");
            var codeZone =  "_" + zone[0];
            if(zone[0] === '""') {
                var codeZone = "";
            }
            datasUrl = "/hotel-cms/" + lang + "/booking/call-center" + codeZone + ".js"
        }

        jQuery.getJSON(
            datasUrl,
            function (datas) {
            	if(datas){
            		 var $callCenterTemplate = jQuery(".insetSupportWrapper");
                     $callCenterTemplate.setTemplateURL("/" + lang + "/templates-v2104/booking/callcenter.tpl");
                     $callCenterTemplate.processTemplate(datas);
                     utils.tooltips.init(jQuery(".insetSupportWrapper .tooltip"));
                     jQuery(".insetSupport").show();
            	}

            }
    );
};

utils.getCookie = function (name) {
    var nameEQ = name + "=",
    ca = document.cookie.split(';'),
    i;
    for (i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1, c.length);
        }
        if (c.indexOf(nameEQ) == 0) {
            return c.substring(nameEQ.length, c.length);
        }
    }
    return null;
};

utils.getCookieContent = function (name) {
    var cookieContent = utils.getCookie(name);
    if (cookieContent && cookieContent != '') {
        cookieContent = decodeURIComponent(cookieContent);
        return cookieContent.split('|');
    }
};

utils._utf8_decode = function (utftext) {
    var string = "",
    i = 0,
    c = 0,
    c1 = 0,
    c2 = 0;

    while (i < utftext.length) {
        c = utftext.charCodeAt(i);

        if (c < 128) {
            string += String.fromCharCode(c);
            i++;
        } else if ((c > 191) && (c < 224)) {
            c2 = utftext.charCodeAt(i + 1);
            string += String.fromCharCode(((c & 31) << 6) | (c2 & 63));
            i += 2;
        } else {
            c2 = utftext.charCodeAt(i + 1);
            c3 = utftext.charCodeAt(i + 2);
            string += String.fromCharCode(((c & 15) << 12) | ((c2 & 63) << 6) | (c3 & 63));
            i += 3;
        }
    }
    return string;
};

utils.decode = function (string) {
    return this._utf8_decode(unescape(string));
};

utils.getAmenitieLabel = function (amenitieObject, amenitiesLabels) {
    if (amenitiesLabels && amenitiesLabels[amenitieObject.code]) {
        if (amenitieObject.subAmenities != null && amenitieObject.subAmenities.length > 0) {
            var sLabel = "",
            i;
            for (i = 0; i < amenitieObject.subAmenities.length; i++) {
                sLabel += amenitiesLabels[amenitieObject.subAmenities[i].code];
                if (amenitieObject.subAmenities[i].free != null) {
                    if (amenitieObject.subAmenities[i].free == "true") {
                        sLabel += " (" + i18n.amenities.free + ")";
                    } else {
                        sLabel += " (" + i18n.amenities.notfree + ")";
                    }
                }
                sLabel += "<br />";
            }
            sLabel = sLabel.replace(/[\"]/g, '&quot;');
            return sLabel;
        } else {
            var sLabel = "";
            sLabel = amenitiesLabels[amenitieObject.code];
            if (amenitieObject.free != null) {
                if (amenitieObject.free == "true") {
                    sLabel += " (" + i18n.amenities.free + ")";
                } else {
                    sLabel += " (" + i18n.amenities.notfree + ")";
                }
            }
            sLabel = sLabel.replace(/[\"]/g, '&quot;');
            return sLabel;
        }
    } else {
        return "";
    }
};

utils.printTaxDateLabel = function (str, dateIn, dateOut) {
    var s = {};
    s["%x"] = dateIn;
    if (dateOut) {
        s["%y"] = dateOut;
    }

    var re = /%./g,
    a = str.match(re),
    i;
    for (i = 0; i < a.length; i++) {
        var tmp = s[a[i]];
        if (tmp) {
            re = new RegExp(a[i], 'g');
            str = str.replace(re, tmp);
        }
    }

    return str;
};

utils.getTaxDateLabel = function (taxObject) {
    var str = "";
    if (taxObject.taxPeriodLimited != true) {
        var taxDate = new Date(taxObject.period.yearIn, taxObject.period.monthIn - 1, taxObject.period.dayIn, 12, 0, 0);
        str += " (<i>" + utils.printTaxDateLabel(i18n.tax.since, utils.printDate(taxDate, i18n.calendar.displayDateFormat)) + "</i>)<br />";
    } else {
        var taxDateIn = new Date(taxObject.period.yearIn, taxObject.period.monthIn - 1, taxObject.period.dayIn, 12, 0, 0),
        taxDateOut = new Date(taxObject.period.yearOut, taxObject.period.monthOut - 1, taxObject.period.dayOut, 12, 0, 0);
        str += " (<i>" + utils.printTaxDateLabel(i18n.tax.from, utils.printDate(taxDateIn, i18n.calendar.displayDateFormat), utils.printDate(taxDateOut, i18n.calendar.displayDateFormat)) + "</i>)<br />";
    }
    return str;
};

utils.getTaxLabels = function (taxesArray, type) {
    var str = "",
    j;
    if(type!="" && i18n.tax[type] != "") str += "<strong>" + i18n.tax[type] + "</strong><br />";
    for (j = 0; j < taxesArray.length; j++) {
        if (taxesArray[j] != null) {

        		str += "<p class='t"+taxesArray[j].code+"'>";

            str += taxesArray[j].label;

            if (taxesArray[j].percentTax ) {
            	str += " : " + taxesArray[j].percent + "%";
                } else {
            	str += " : <span class=\'price tPrice\'><span class=\'tAmount\'>" + taxesArray[j].amount.amount + "</span>&nbsp;<span class=\'tCurrency\'>" + taxesArray[j].amount.currency + "</span></span>";
            }

            if (taxesArray[j].period != null && taxesArray[j].unit != "") {
                str += " (<i>" + taxesArray[j].period +"\/ "+ taxesArray[j].unit + "</i>)";
            }
            str += "</p>"
            //str += utils.getTaxDateLabel(taxesArray[j]);
        }
    }
    return str;
};

utils.initCommissionBox = function (show, lang) {
    if (show == true) {
        var commissionBox = jQuery(".tCommissionBox");
        commissionBox.setTemplateURL("/" + lang + "/templates-v2104/booking/commissions.tpl");
        commissionBox.processTemplate();
        commissionBox.show();
    }
};

utils.writeIdBox = function (datas, lang) {
    var idProTpl = jQuery("#identificationProTemplate");

    var templateURL = (jQuery.inArray("LEI", utils.getMetaValue("X-Accor-resaContext", "content")) != -1) ? "/templates-v2104/booking/leisure/" :  "/" + lang + "/templates-v2104/booking/";

    if (jQuery(".logo").find("a").attr("title") != "businesstravel.accorhotels.com") {
        idProTpl.setTemplateURL(templateURL+"identification-pro.tpl");
    }
    else {// si bus
        if (jQuery("#rates").attr("id") == "rates" || jQuery("#options").attr("id") == "options" || jQuery("#summary").attr("id") == "summary" || jQuery("#confirm").attr("id") == "confirm" || jQuery("#room-dates").attr("id") == "room-dates") {
            idProTpl.setTemplateURL(templateURL+"identification-pro-bus.tpl");
        } else {
            idProTpl.setTemplateURL(templateURL+"/identification-pro.tpl");
        }

    }
    idProTpl.processTemplate(datas);
};

utils.getRateIe6 = function (elem, name) {
    elem.value = name;
//return utils.decode(utils.getUrlParameter(name));
};

utils.startSubmitInProgressEffect = function (btnSubmit) {
    btnSubmit.wrap('<div class="submitInProgress" />');
    var btnSubmitWidth = btnSubmit.width(),
    loaderWidth = 16,
    loaderMarginLeft = (btnSubmitWidth / 2) - (loaderWidth / 2);
    btnSubmit.prepend('<div class="loader" style="margin-left:' + loaderMarginLeft + 'px"></div>');
};

//Arret de l'effet "loader" lors du retour Ajax
utils.stopSubmitInProgressEffect = function () {
    jQuery(".tBookLink").find('.loader').remove();
    jQuery(".tBookLink").parent().replaceWith(this.btnSubmit);

};

utils._setReservationCenter = function (UrlCenterPopup, ClassCenterPopup) {
    if (UrlCenterPopup != null) {
        // Ajout du lien avec l'URL
        jQuery(".central-reservation").wrap(function () {
            //jQuery(this).text()
            return '<a class="' + ClassCenterPopup + '" href="' + UrlCenterPopup + '"></a>';
        });
    }
};

// Get Url Param in object as key value to be jQuery.extend and jQuery.param
utils.getUrlVars = function () {
    var url = location.href,
    hash = url.slice(url.indexOf('?') + 1),
    params = {},
    pieces = hash.split('&'),
    pair,
    i;
    if (hash !== url) {
        for (i = 0; i < pieces.length; i++) {
            pair = pieces[i].split('=', 2);
            params[decodeURIComponent(pair[0])] = (pair.length == 2 ? decodeURIComponent(pair[1].replace(/\+/g, ' ')) : true);
        }
    }
    return params;
};

/* Allow to get Meta content */
utils.getMetaValue = function (name, attribut) {
    var metaValue = [];
    if (jQuery("meta[name='" + name + "']").length) {
        metaValue = jQuery("meta[name='" + name + "']").attr(attribut).replace(/\s/g, '').split(",");
    }
    return metaValue;
};

utils.loyaltyAccount = function (loyaltyAccount) {
    var isnotconnected = (typeof(profilBannerUtils) !== "undefined") ? !profilBannerUtils._isLogged() : false;
    var leClubTemplate = jQuery('#leClub');
    leClubTemplate.setTemplateURL("/templates-v2104/booking/le-club.tpl");
	var lang = (jQuery("html").attr("lang") == "en") ? "gb" : jQuery("html").attr("lang");
	leClubTemplate.setParam("currentLang", lang);
    var datasClub = {};
    if (loyaltyAccount.authenticated && loyaltyAccount.trueAClubMember) {
		if (loyaltyAccount.account) {
			if (loyaltyAccount.account.loyaltyCards[0]) {
				if (loyaltyAccount.account.loyaltyCards[0].displayBurnOnline) {
					datasClub = {
						"name" : loyaltyAccount.firstName + " " + loyaltyAccount.lastName,
						"points": loyaltyAccount.account.loyaltyCards[0].points,
						"txt1": i18n.burnOnline.txt1Up,
						"txt2": i18n.burnOnline.txt2Up
					};
				} else {
					datasClub = {
						"name" : loyaltyAccount.firstName + " " + loyaltyAccount.lastName,
						"points": loyaltyAccount.account.loyaltyCards[0].points,
						"txt1": i18n.burnOnline.txt1Down
						//"txt2": i18n.burnOnline.txt2Down
					};
				}
			} else{
				datasClub = {
						"notmember": true
			        };
			}

		}
		else {
            datasClub = "";
        }
    } else if (loyaltyAccount.fidelityCardEntered) {
        datasClub = {
            "txt1": i18n.burnOnline.notAuth,
            "notmember" : false,
            "isnotconnected": isnotconnected
        };
    } else {
        datasClub = {
            "notmember": true

        };
    }
	leClubTemplate.processTemplate(datasClub);
    jQuery('#tConectMembre').click(function(){
        jQuery("html, body").animate({scrollTop:0}, '500');
        jQuery('.pb-login').click();
    });
};

utils.reversePercent = function(listSelector) {
    listSelector = listSelector || "";
    var tabSelector = jQuery.map(listSelector.split(","), function(val, i) {
        return jQuery.trim(val);
    });

    jQuery.each(tabSelector, function(i, selector) {
        var elm = jQuery(selector);
        if (elm.length != 0) {

            var html = elm.html(),
                text = elm.text(),
                str = "",
                newStr = "",
                dir = jQuery("html").attr("dir"),
                tabPercent = [];

            if (dir == "rtl") {
                switch(elm) {
                    case "ul.tOltaTaxes span.tPrice":
                        elm.attr("dir", "rtl");
                        break;
                    default:
                        if (html != null) {
                            tabPercent = html.match(/\d+(\.\d{1,})?%/);

                            if (tabPercent != null && text.match(/[a-zA-Z]/) != null) {
                                str = tabPercent[0];
                                newStr = "%" + str.substring(0, str.length - 1);
                                elm.html(html.replace(str, newStr));
                            }
                        }
                }
            }
        }
    });
};


utils.setLoadingButton = function ($btn, parentBtn) {
    
    var modal = jQuery('<div />').css({
        'height': $btn.outerHeight(),
        'left': $btn.position().left,
        'opacity': 0.6,
        'top': $btn.position().top,
        'width': $btn.outerWidth(),
        'margin-top': $btn.css('margin-top'),
        'margin-right': $btn.css('margin-right'),
        'margin-bottom': $btn.css('margin-bottom'),
        'margin-left': $btn.css('margin-left')
    }).addClass('modal-btnBook');

    $btn.closest(parentBtn).prepend(modal);
};

utils.unsetLoadingButton = function () {
    if (jQuery('.modal-btnBook').length > 0) {
        jQuery('.modal-btnBook').remove();
    }
};

utils.escapeTemplate = function (txt){
    var escapedText = txt
                        .replace(/&/g,'&amp;')
                        .replace(/>/g,'&gt;')
                        .replace(/</g,'&lt;')
                        .replace(/"/g,'&quot;')
                        .replace(/'/g,'&#39;')
                        .replace(/\s(class|id)=&quot;([a-zA-Z0-9_-]*)&quot;/g, ' $1="$2"')
                        .replace(/&lt;(\/)?(span|br|strong)(\s)?((id|class)="[a-zA-Z0-9_-]*")?(\s)?((id|class)="[a-zA-Z0-9_-]*")?(\s)?(\/)?&gt;/g, '<$1$2$3$4$6$7$9$10>');
    return escapedText;
};

utils.backNav = function(){
   console && console.warn && console.warn('Backnav : deprecated. Please remove it.');
};

/**TO USE IF SELELECTORS CONTAINING THE SAME VALUE ARE NOT IDENTIFIED THE SAME CROSS-SITES

@params marks: array of obj ['#lol',  '#sdsd']

@returns mark.content
**/
utils.getSelectorFirstValue = function(marks){
    if(!marks || !marks.length){return null;}
    for(var i = 0; marks[i]; i++){
        if(marks[i] && jQuery(marks[i]).length){
            return jQuery(marks[i]).attr('content');
        }
    }
    return null;
};

/** < /scripts-v2104/booking/common/utils.js **/

/** Cas en-US **/


/** Cas ar **/


/** Loading  /scripts-v2104/booking/targetTopper.js **/
/*
 *	targetTopper
 *	@version: 1.0
 *	@date 10/12/2010
 *	/!\ Files to be included to the HTML :
<script type="text/javascript" src="/scripts-v2104/lib/jquery.min.js"></script>
 */



var targetTopper = {

     init : function(){
		 
           topWindow = window,
				jQuery(function(){ 
                         jQuery("#bandeau_n a, .footerContainer a, #header_fh a, #footer_fh a, #footer-main a").not("#languages-top a, a.ml").click(function() {	
									
									this.target = "_top";	

                      })
              })
       }
};


/** Done /scripts-v2104/booking/targetTopper.js **/

/** Loading  /scripts-v2104/click2call.js **/
var v1 = '';
var v2 = '';
var v3 = ''; 
var v4 = '';

var click2Call = {
	siteOrigin: '',
	instanceId : '',
	clientId : '',
	userBrowsingZone : '',
	currentLanguage : '',
	

	// Déclenche l'affichage du bouton C2C (element = bloc html après lequel on insère le bloc bouton, isAccorhotels deprecated)
	init : function(isAccorhotels, page, element, rid) {			
				
		// Activation ciblée sur certains sites
        
		return false;
		 

		if (page!='rates' && page!='options' && page!='summary' && page!="modifOption" && page!= "dashboard" && page!="booking" && page!="personaldetails" && page!="preferences" && page!="newsletters" && page!="pointshistory" && page!="rewards" && page!="subscription") return false;
		this.instanceId = this._getInstanceId(page);
		if (this.instanceId == '') return false;
	
		// Cas où on affiche le bouton
		try
		{
			// Création du div qui contiendra le bouton
			element.after('<div id="buttonC2cId"></div>');
			
			v1 = page;
			v2 = this.currentLanguage;
			v3 = this.userBrowsingZone; 
			v4 = rid;
			
			// Chargement asynchrone du JS fourni par OBS
			var c2c = document.createElement('script'); 
			c2c.type = 'text/javascript';   
			c2c.async = true;    
			c2c.src= 'https://c2cu.internetpluspro.orange-business.com/c2call-frontend//button/button.html?s='+this.instanceId+'&c='+this.clientId; 
			(document.getElementsByTagName('head')[0]||document.getElementsByTagName('body')[0]||document.getElementsByTagName('script')[0].parentNode).insertBefore(c2c,null);   
            
            this._initButtonC2cListener();
		}
		catch(err)
		{
		}
	},
    
    //Reimplementation de la fonction closeDiv du JS fourni par OBS
    _initButtonC2cListener : function() {
        var closeDivFunctionReimplemented = false;
        
        jQuery("#buttonC2cId").bind("mousedown", function() {
            if(!closeDivFunctionReimplemented) {
                closeDiv = function() {
                    try {
                        var myDiv=document.getElementById('divC2cId');
                        if (myDiv != null) {
                            if(document.body) {
                                document.body.removeChild(myDiv);
                            } else {
                                document.removeChild(myDiv);
                            }
                        }
                    } catch (err) {}
                };
                closeDivFunctionReimplemented = true;
            }
        });
    },
	
	// Utils : récupération de la valeur d'un cookie
	_getCookie : function(name) {
		var nameEQ = name + "=";
		var ca = document.cookie.split(';');
		for(var i=0;i < ca.length;i++) {
			var c = ca[i];
			while (c.charAt(0)==' ') c = c.substring(1,c.length);
			if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
		}
		return null;
	},

	// Utils : récupération de la valeur d'un cookie
	_getCookieContent : function(name){
		var cookieContent = this._getCookie(name);
		if(cookieContent && cookieContent != ''){
			cookieContent = decodeURIComponent(cookieContent);
			return cookieContent.split('|');
		}
	},
	
	// Utils : récupération de l'ID d'instance en fonction de la version d'accorhotels
	_getInstanceId : function(page) {
	
		this.userBrowsingZone = this._getCookieContent("userBrowsingZoneLocalization") == undefined ? "home" : this._getCookieContent("userBrowsingZoneLocalization")+'';
		this.currentLanguage = (jQuery("html").attr("lang")=="en") ? "gb" : jQuery("html").attr("lang");
		var currentVersion = this.siteOrigin+'-'+this.currentLanguage.toLowerCase()+'-'+this.userBrowsingZone.toLowerCase()+'-'+page.toLowerCase();
		
		switch (currentVersion){
			// ADADIO CITY
			// FR-FR
			// Pages rates et options
			case 'adagio-city-fr-home-rates':
			case 'adagio-city-fr-home-options':
				return '9250841rcx1396611';
				break;

			// Page summary
			case 'adagio-city-fr-home-summary':
				return '9250843vym1396612';
				break;

			// Page consultation|modif resa
			case 'adagio-city-fr-home-modifoption':
				return '9250844kph1396613';
				break;

			// Espace personnel
			case 'adagio-city-fr-home-dashboard' : 
			case 'adagio-city-fr-home-booking' : 
			case 'adagio-city-fr-home-personaldetails' : 
			case 'adagio-city-fr-home-preferences' : 
			case 'adagio-city-fr-home-newsletters' : 
			case 'adagio-city-fr-home-pointshistory' : 
			case 'adagio-city-fr-home-rewards' : 
			case 'adagio-city-fr-home-subscription' : 
				return '9250846hry1396614';
				break;

			// SUISSE-FR
			// Pages rates et options
			case 'adagio-city-fr-switzerland-rates':
			case 'adagio-city-fr-switzerland-options':
				return '9456570drd13966117';
				break;

			// Page summary
			case 'adagio-city-fr-switzerland-summary':
				return '9456636qcw13966118';
				break;

			// Page consultation|modif resa
			case 'adagio-city-fr-switzerland-modifoption':
				return '9456698esj13966119';
				break;

			// Espace personnel
			case 'adagio-city-fr-switzerland-dashboard' : 
			case 'adagio-city-fr-switzerland-booking' : 
			case 'adagio-city-fr-switzerland-personaldetails' : 
			case 'adagio-city-fr-switzerland-preferences' : 
			case 'adagio-city-fr-switzerland-newsletters' : 
			case 'adagio-city-fr-switzerland-pointshistory' : 
			case 'adagio-city-fr-switzerland-rewards' : 
			case 'adagio-city-fr-switzerland-subscription' : 
				return '9456765fzb13966120';
				break;

			// BELGIQUE-FR
			// Pages rates et options
			case 'adagio-city-fr-belgium-rates':
			case 'adagio-city-fr-belgium-options':
				return '9456289yhh13966113';
				break;

			// Page summary
			case 'adagio-city-fr-belgium-summary':
				return '9456359unm13966114';
				break;

			// Page consultation|modif resa
			case 'adagio-city-fr-belgium-modifoption':
				return '9456439yvn13966115';
				break;

			// Espace personnel
			case 'adagio-city-fr-belgium-dashboard' : 
			case 'adagio-city-fr-belgium-booking' : 
			case 'adagio-city-fr-belgium-personaldetails' : 
			case 'adagio-city-fr-belgium-preferences' : 
			case 'adagio-city-fr-belgium-newsletters' : 
			case 'adagio-city-fr-belgium-pointshistory' : 
			case 'adagio-city-fr-belgium-rewards' : 
			case 'adagio-city-fr-belgium-subscription' : 
				return '9456505pjt13966116';
				break;

			// GERMANY-DE
			// Pages rates et options
			case 'adagio-city-de-home-rates':
			case 'adagio-city-de-home-options':
				return '9250853hrn1396619';
				break;

			// Page summary
			case 'adagio-city-de-home-summary':
				return '9250855onc13966110';
				break;

			// Page consultation|modif resa
			case 'adagio-city-de-home-modifoption':
				return '9456098nmx13966111';
				break;

			// Espace personnel
			case 'adagio-city-de-home-dashboard' : 
			case 'adagio-city-de-home-booking' : 
			case 'adagio-city-de-home-personaldetails' : 
			case 'adagio-city-de-home-preferences' : 
			case 'adagio-city-de-home-newsletters' : 
			case 'adagio-city-de-home-pointshistory' : 
			case 'adagio-city-de-home-rewards' : 
			case 'adagio-city-de-home-subscription' : 
				return '9456225vcj13966112';
				break;

			// AUSTRIA-DE
			// Pages rates et options
			case 'adagio-city-de-oesterreich-rates':
			case 'adagio-city-de-oesterreich-options':
				return '9456829opj13966121';
				break;

			// Page summary
			case 'adagio-city-de-oesterreich-summary':
				return '9456897sgu13966122';
				break;

			// Page consultation|modif resa
			case 'adagio-city-de-oesterreich-modifoption':
				return '9456961vgv13966123';
				break;

			// Espace personnel
			case 'adagio-city-de-oesterreich-dashboard' : 
			case 'adagio-city-de-oesterreich-booking' : 
			case 'adagio-city-de-oesterreich-personaldetails' : 
			case 'adagio-city-de-oesterreich-preferences' : 
			case 'adagio-city-de-oesterreich-newsletters' : 
			case 'adagio-city-de-oesterreich-pointshistory' : 
			case 'adagio-city-de-oesterreich-rewards' : 
			case 'adagio-city-de-oesterreich-subscription' : 
				return '9457030deg13966124';
				break;

			// LATEM-ES
			// Pages rates et options
			case 'adagio-city-es-sudamerica-rates':
			case 'adagio-city-es-sudamerica-options':
				return '9511955bcd13966133';
				break;

			// Page summary
			case 'adagio-city-es-sudamerica-summary':
				return '9512017kqz13966134';
				break;

			// Page consultation|modif resa
			case 'adagio-city-es-sudamerica-modifoption':
				return '9512082edt13966135';
				break;

			// Espace personnel
			case 'adagio-city-es-sudamerica-dashboard' : 
			case 'adagio-city-es-sudamerica-booking' : 
			case 'adagio-city-es-sudamerica-personaldetails' : 
			case 'adagio-city-es-sudamerica-preferences' : 
			case 'adagio-city-es-sudamerica-newsletters' : 
			case 'adagio-city-es-sudamerica-pointshistory' : 
			case 'adagio-city-es-sudamerica-rewards' : 
			case 'adagio-city-es-sudamerica-subscription' : 
				return '9512144fyc13966136';
				break;

			// ESPAGNE-ES
			// Pages rates et options
			case 'adagio-city-es-home-rates':
			case 'adagio-city-es-home-options':
				return '9457098dtl13966125';
				break;

			// Page summary
			case 'adagio-city-es-home-summary':
				return '9457165npi13966126';
				break;

			// Page consultation|modif resa
			case 'adagio-city-es-home-modifoption':
				return '9457236fbd13966127';
				break;

			// Espace personnel
			case 'adagio-city-es-home-dashboard' : 
			case 'adagio-city-es-home-booking' : 
			case 'adagio-city-es-home-personaldetails' : 
			case 'adagio-city-es-home-preferences' : 
			case 'adagio-city-es-home-newsletters' : 
			case 'adagio-city-es-home-pointshistory' : 
			case 'adagio-city-es-home-rewards' : 
			case 'adagio-city-es-home-subscription' : 
				return '9457306uus13966128';
				break;

			// BRASIL-PTBR
			// Pages rates et options
			case 'adagio-city-pt-br-brasil-rates':
			case 'adagio-city-pt-br-brasil-options':
				return '9457371eku13966129';
				break;

			// Page summary
			case 'adagio-city-pt-br-brasil-summary':
				return '9457434jtq13966130';
				break;

			// Page consultation|modif resa
			case 'adagio-city-pt-br-brasil-modifoption':
				return '9511785bap13966131';
				break;

			// Espace personnel
			case 'adagio-city-pt-br-brasil-dashboard' : 
			case 'adagio-city-pt-br-brasil-booking' : 
			case 'adagio-city-pt-br-brasil-personaldetails' : 
			case 'adagio-city-pt-br-brasil-preferences' : 
			case 'adagio-city-pt-br-brasil-newsletters' : 
			case 'adagio-city-pt-br-brasil-pointshistory' : 
			case 'adagio-city-pt-br-brasil-rewards' : 
			case 'adagio-city-pt-br-brasil-subscription' : 
				return '9511890dyo13966132';
				break;

			// UK-GB
			// Pages rates et options
			case 'adagio-city-gb-united-kingdom-rates':
			case 'adagio-city-gb-united-kingdom-options':
				return '9512207iul13966137';
				break;

			// Page summary
			case 'adagio-city-gb-united-kingdom-summary':
				return '9512274fcv13966138';
				break;

			// Page consultation|modif resa
			case 'adagio-city-gb-united-kingdom-modifoption':
				return '9512338ywj13966139';
				break;

			// Espace personnel
			case 'adagio-city-gb-united-kingdom-dashboard' : 
			case 'adagio-city-gb-united-kingdom-booking' : 
			case 'adagio-city-gb-united-kingdom-personaldetails' : 
			case 'adagio-city-gb-united-kingdom-preferences' : 
			case 'adagio-city-gb-united-kingdom-newsletters' : 
			case 'adagio-city-gb-united-kingdom-pointshistory' : 
			case 'adagio-city-gb-united-kingdom-rewards' : 
			case 'adagio-city-gb-united-kingdom-subscription' : 
				return '9512409txp13966140';
				break;

			// INTERNATIONAL-GB
			// Pages rates et options
			case 'adagio-city-gb-home-rates':
			case 'adagio-city-gb-home-options':
				return '9512207iul13966137';
				break;

			// Page summary
			case 'adagio-city-gb-home-summary':
				return '9512274fcv13966138';
				break;

			// Page consultation|modif resa
			case 'adagio-city-gb-home-modifoption':
				return '9512338ywj13966139';
				break;

			// Espace personnel
			case 'adagio-city-gb-home-dashboard' : 
			case 'adagio-city-gb-home-booking' : 
			case 'adagio-city-gb-home-personaldetails' : 
			case 'adagio-city-gb-home-preferences' : 
			case 'adagio-city-gb-home-newsletters' : 
			case 'adagio-city-gb-home-pointshistory' : 
			case 'adagio-city-gb-home-rewards' : 
			case 'adagio-city-gb-home-subscription' : 
				return '9512409txp13966140';
				break;


			// ACCORHOTELS
			// Rates & Options
			case 'accorhotels-fr-france-rates' : 
			case 'accorhotels-fr-france-options' : 
				return '7348511zqm1308051';
				break;
			// Summary
			case 'accorhotels-fr-france-summary' : 
				return '7348522oaj1308052';
				break;
			
			// ModifOption
			case 'accorhotels-fr-france-modifoption' :
				return '4640387mkw13363766';
				break;
			

			case 'accorhotels-pt-br-brasil-rates' :
			case 'accorhotels-pt-br-brasil-options' :
				return '7348533uym1308053';
				break;
			case 'accorhotels-pt-br-brasil-summary' : 
				return '7348544tvb1308054';
				break;
			case 'accorhotels-pt-br-brasil-modifoption' : 
				return '4640345msf13363765';
				break;	
			case 'accorhotels-gb-usa-rates' : 
			case 'accorhotels-gb-usa-options' : 
				return '7348556aak1308055';
				break;
			case 'accorhotels-gb-usa-summary' : 
				return '7348567zkm1308056';
				break;
			case 'accorhotels-gb-usa-modifoption' : 
				return '4640313orx13363764';
				break;	
			case 'accorhotels-zh-china-rates' : 
			case 'accorhotels-zh-china-options' : 
				return '7348582ndv1308057';
				break;
			case 'accorhotels-zh-china-summary' : 	
				return '7348593izr1308058';
				break;
			case 'accorhotels-zh-china-modifoption' : 	
				return '4640283rrg13363763';
				break;
			case 'accorhotels-gb-china-rates' : 
			case 'accorhotels-gb-china-options' : 
				return '7348603pso1308059';
				break;
			case 'accorhotels-gb-china-summary' : 
				return '7348614iuy13080510';
				break;
			case 'accorhotels-gb-china-modifoption' :
				return '4640248wcx13363762';
				break;
			case 'accorhotels-gb-united-kingdom-rates' :
			case 'accorhotels-gb-united-kingdom-options' :
				return '9917744npp13080511';
				break;
			case 'accorhotels-gb-united-kingdom-summary' :
				return '9917784qni13080512';
				break;
			case 'accorhotels-gb-united-kingdom-modifoption' :
				return '9918698nsv13080537';
				break;
			case 'accorhotels-es-espana-rates' :
			case 'accorhotels-es-espana-options' :
				return '9917894tgi13080513';
				break;
			case 'accorhotels-es-espana-summary' :
				return '9917965vir13080514';
				break;
			case 'accorhotels-es-espana-modifoption' :
				return '4640213bhl13363761';
				break;
			case 'accorhotels-gb-australia-rates' : 
			case 'accorhotels-gb-australia-options' : 
				return '9917994srh13080515';
				break;
			case 'accorhotels-gb-australia-summary' : 
				return '9918021hyw13080516';
				break;
			case 'accorhotels-gb-australia-modifoption' :
				return '4640171fsx13363760';
				break;
			case 'accorhotels-de-deutschland-rates' : 
			case 'accorhotels-de-deutschland-options' : 
				return '9918049sfu13080517';
				break;
			case 'accorhotels-de-deutschland-summary' : 
				return '9918076pro13080518';
				break;
			case 'accorhotels-de-deutschland-modifoption' :
				return '4640131uww13363759';
				break;
			case 'accorhotels-de-oesterreich-rates' : 
			case 'accorhotels-de-oesterreich-options' : 
				return '9918104ptp13080519';
				break;
			case 'accorhotels-de-oesterreich-summary' : 
				return '9918132str13080520';
				break;
			case 'accorhotels-de-oesterreich-modifoption' :
				return '4640096vdj13363758';
				break;	
			case 'accorhotels-fr-belgium-rates' : 
			case 'accorhotels-fr-belgium-options' : 
				return '9918160lvy13080521';
				break;
			case 'accorhotels-fr-belgium-summary' : 
				return '9918188fgz13080522';
				break;
			case 'accorhotels-fr-belgium-modifoption' :
				return '4640060rql13363757';
				break;		
			case 'accorhotels-fr-canada-rates' : 
			case 'accorhotels-fr-canada-options' : 
				return '9918216zyt13080523';
				break;
			case 'accorhotels-fr-canada-summary' : 
				return '9918295pdn13080524';
				break;
			case 'accorhotels-fr-canada-modifoption' :
				return '4639991hdn13363755';
				break;		
			case 'accorhotels-gb-canada-rates' : 
			case 'accorhotels-gb-canada-options' : 
				return '9918324kre13080525';
				break;
			case 'accorhotels-gb-canada-summary' : 
				return '9918354aap13080526';
				break;
			case 'accorhotels-gb-canada-modifoption' :
				return '4639955ibq13363754';
				break;					
			case 'accorhotels-es-sudamerica-rates' : 
			case 'accorhotels-es-sudamerica-options' : 
				return '9918380igv13080527';
				break;
			case 'accorhotels-es-sudamerica-summary' : 
				return '9918441zmh13080528';
				break;
			case 'accorhotels-es-sudamerica-modifoption' :
				return '4639916vmp13363753';
				break;			
			case 'accorhotels-fr-switzerland-rates' : 
			case 'accorhotels-fr-switzerland-options' : 
				return '9918467nbc13080529';
				break;
			case 'accorhotels-fr-switzerland-summary' : 
				return '9918497mqe13080530';
				break;
			case 'accorhotels-fr-switzerland-modifoption' :
				return '4639849sll13363751';
				break;		
			case 'accorhotels-de-switzerland-rates' : 
			case 'accorhotels-de-switzerland-options' : 
				return '9918522rcb13080531';
				break;
			case 'accorhotels-de-switzerland-summary' : 
				return '9918549rrs13080532';
				break;
			case 'accorhotels-de-switzerland-modifoption' :
				return '4639819hyd13363750';
				break;		
			case 'accorhotels-nl-belgium-rates' : 
			case 'accorhotels-nl-belgium-options' : 
				return '9918595det13080533';
				break;
			case 'accorhotels-nl-belgium-summary' : 
				return '9918620ady13080534';
				break;
			case 'accorhotels-nl-belgium-modifoption' :
				return '4640025tcd13363756';
				break;	
			case 'accorhotels-nl-nederland-rates' : 
			case 'accorhotels-nl-nederland-options' : 
				return '9918647ukb13080535';
				break;
			case 'accorhotels-nl-nederland-summary' : 
				return '9918672rqu13080536';
				break;
			case 'accorhotels-nl-nederland-modifoption' :
				return '4639883tid13363752';
				break;		
			case 'accorhotels-pt-portugal-rates' : 
			case 'accorhotels-pt-portugal-options' : 
				return '9918778qdp13080540';
				break;
			case 'accorhotels-pt-portugal-summary' : 
				return '4639445oio13363741';
				break;
			case 'accorhotels-pt-portugal-modifoption' :
				return '4639730cfi13363748';
				break;			
			case 'accorhotels-pl-polska-rates' : 
			case 'accorhotels-pl-polska-options' : 
				return '4639532inj13363742';
				break;
			case 'accorhotels-pl-polska-summary' : 
				return '4639560pnq13363743';
				break;
			case 'accorhotels-pl-polska-modifoption' :
				return '4639697jjh13363747';
				break;	
			case 'accorhotels-ja-japan-rates' : 
			case 'accorhotels-ja-japan-options' : 
				return '4639587ecf13363744';
				break;
			case 'accorhotels-ja-japan-summary' : 
				return '4639636hef13363745';
				break;
			case 'accorhotels-ja-japan-modifoption' :
				return '4639666zzg13363746';
				break;
			case 'accorhotels-gb-japan-rates' : 
			case 'accorhotels-gb-japan-options' : 
				return '7348603pso1308059';
				break;
			case 'accorhotels-gb-japan-summary' : 
				return '7348614iuy13080510';
				break;
			case 'accorhotels-gb-japan-modifoption' :
				return '4640248wcx13363762';
				break;	
			case 'accorhotels-id-indonesia-rates' : 
			case 'accorhotels-id-indonesia-options' : 
				return '9918724pje13080538';
				break;
			case 'accorhotels-id-indonesia-summary' : 
				return '9918752zjk13080539';
				break;
			case 'accorhotels-id-indonesia-modifoption' :
				return '4639765yov13363749';
				break;	
			case 'accorhotels-gb-indonesia-rates' : 
			case 'accorhotels-gb-indonesia-options' : 
				return '7348603pso1308059';
				break;
			case 'accorhotels-gb-indonesia-summary' : 
				return '7348614iuy13080510';
				break;
			case 'accorhotels-gb-indonesia-modifoption' :
				return '4640248wcx13363762';
				break;
			case 'accorhotels-gb-singapore-malaysia-rates' : 
			case 'accorhotels-gb-singapore-malaysia-options' : 
				return '7348603pso1308059';
				break;
			case 'accorhotels-gb-singapore-malaysia-summary' : 
				return '7348614iuy13080510';
				break;
			case 'accorhotels-gb-singapore-malaysia-modifoption' :
				return '4640248wcx13363762';
				break;	
			case 'accorhotels-gb-ireland-rates' : 
			case 'accorhotels-gb-ireland-options' : 
				return '9917744npp13080511';
				break;
			case 'accorhotels-gb-ireland-summary' : 
				return '9917784qni13080512';
				break;
			case 'accorhotels-gb-ireland-modifoption' :
				return '9918698nsv13080537';
				break;	
			case 'accorhotels-gb-new-zealand-fiji-rates' : 
			case 'accorhotels-gb-new-zealand-fiji-options' : 
				return '9917994srh13080515';
				break;
			case 'accorhotels-gb-new-zealand-fiji-summary' : 
				return '9918021hyw13080516';
				break;
			case 'accorhotels-gb-new-zealand-fiji-modifoption' :
				return '4640171fsx13363760';
				break;
			case 'accorhotels-it-italia-rates' : 
			case 'accorhotels-it-italia-options' : 
				return '5178329guq13452067';
				break;
			case 'accorhotels-it-italia-summary' : 
				return '5178398wlb13452068';
				break;
			case 'accorhotels-it-italia-modifoption' :
				return '5178432grd13452069';
				break;

			//NEW PROFIL PAGES
			case 'accorhotels-fr-france-dashboard' : 
			case 'accorhotels-fr-france-booking' : 
			case 'accorhotels-fr-france-personaldetails' : 
			case 'accorhotels-fr-france-preferences' : 
			case 'accorhotels-fr-france-newsletters' : 
			case 'accorhotels-fr-france-pointshistory' : 
			case 'accorhotels-fr-france-rewards' : 
			case 'accorhotels-fr-france-subscription' : 
				return '6591157chi13595470';
				break;
			case 'accorhotels-pt-br-brasil-dashboard' : 
			case 'accorhotels-pt-br-brasil-booking' : 
			case 'accorhotels-pt-br-brasil-personaldetails' : 
			case 'accorhotels-pt-br-brasil-preferences' : 
			case 'accorhotels-pt-br-brasil-newsletters' : 
			case 'accorhotels-pt-br-brasil-pointshistory' : 
			case 'accorhotels-pt-br-brasil-rewards' : 
			case 'accorhotels-pt-br-brasil-subscription' : 
				return '6591354esc13595471';
				break;
			case 'accorhotels-gb-usa-dashboard' : 
			case 'accorhotels-gb-usa-booking' : 
			case 'accorhotels-gb-usa-personaldetails' : 
			case 'accorhotels-gb-usa-preferences' : 
			case 'accorhotels-gb-usa-newsletters' : 
			case 'accorhotels-gb-usa-pointshistory' : 
			case 'accorhotels-gb-usa-rewards' : 
			case 'accorhotels-gb-usa-subscription' : 
				return '6591390ese13595472';
				break;
			
			case 'accorhotels-zh-china-dashboard' : 
			case 'accorhotels-zh-china-booking' : 
			case 'accorhotels-zh-china-personaldetails' : 
			case 'accorhotels-zh-china-preferences' : 
			case 'accorhotels-zh-china-newsletters' : 
			case 'accorhotels-zh-china-pointshistory' : 
			case 'accorhotels-zh-china-rewards' : 
			case 'accorhotels-zh-china-subscription' : 
				return '6591425utd13595473';
				break;

			case 'accorhotels-gb-china-dashboard' : 
			case 'accorhotels-gb-china-booking' : 
			case 'accorhotels-gb-china-personaldetails' :
			case 'accorhotels-gb-china-preferences' :
			case 'accorhotels-gb-china-newsletters' :
			case 'accorhotels-gb-china-pointshistory' :
			case 'accorhotels-gb-china-rewards' :
			case 'accorhotels-gb-china-subscription' :
				return '6591460ffj13595474';
				break;

			case 'accorhotels-gb-united-kingdom-dashboard' : 
			case 'accorhotels-gb-united-kingdom-booking' : 
			case 'accorhotels-gb-united-kingdom-personaldetails' :
			case 'accorhotels-gb-united-kingdom-preferences' :
			case 'accorhotels-gb-united-kingdom-newsletters' :
			case 'accorhotels-gb-united-kingdom-pointshistory' :
			case 'accorhotels-gb-united-kingdom-rewards' :
			case 'accorhotels-gb-united-kingdom-subscription' :
				return '6591495qzz13595475';
				break;

			case 'accorhotels-es-espana-dashboard' : 
			case 'accorhotels-es-espana-booking' : 
			case 'accorhotels-es-espana-personaldetails' : 
			case 'accorhotels-es-espana-preferences' : 
			case 'accorhotels-es-espana-newsletters' : 
			case 'accorhotels-es-espana-pointshistory' : 
			case 'accorhotels-es-espana-rewards' : 
			case 'accorhotels-es-espana-subscription' : 
				return '6591534pjx13595476';
				break;
				
			case 'accorhotels-gb-australia-dashboard' : 
			case 'accorhotels-gb-australia-booking' : 
			case 'accorhotels-gb-australia-personaldetails' : 
			case 'accorhotels-gb-australia-preferences' : 
			case 'accorhotels-gb-australia-newsletters' : 
			case 'accorhotels-gb-australia-pointshistory' : 
			case 'accorhotels-gb-australia-rewards' : 
			case 'accorhotels-gb-australia-subscription' : 
				return '6591569ibr13595477';
				break;

			case 'accorhotels-de-deutschland-dashboard' : 
			case 'accorhotels-de-deutschland-booking' : 
			case 'accorhotels-de-deutschland-personaldetails' :
			case 'accorhotels-de-deutschland-preferences' :
			case 'accorhotels-de-deutschland-newsletters' :
			case 'accorhotels-de-deutschland-pointshistory' :
			case 'accorhotels-de-deutschland-rewards' :
			case 'accorhotels-de-deutschland-subscription' :
				return '6591605don13595478';
				break;

			case 'accorhotels-de-oesterreich-dashboard' : 
			case 'accorhotels-de-oesterreich-booking' : 
			case 'accorhotels-de-oesterreich-personaldetails' : 
			case 'accorhotels-de-oesterreich-preferences' : 
			case 'accorhotels-de-oesterreich-newsletters' : 
			case 'accorhotels-de-oesterreich-pointshistory' : 
			case 'accorhotels-de-oesterreich-rewards' : 
			case 'accorhotels-de-oesterreich-subscription' : 
				return '6591642qht13595479';
				break;

			case 'accorhotels-fr-belgium-dashboard' : 
			case 'accorhotels-fr-belgium-booking' : 
			case 'accorhotels-fr-belgium-personaldetails' : 
			case 'accorhotels-fr-belgium-preferences' : 
			case 'accorhotels-fr-belgium-newsletters' : 
			case 'accorhotels-fr-belgium-pointshistory' : 
			case 'accorhotels-fr-belgium-rewards' : 
			case 'accorhotels-fr-belgium-subscription' : 
				return '6591679qvk13595480';
				break;

			case 'accorhotels-nl-belgium-dashboard' : 
			case 'accorhotels-nl-belgium-booking' : 
			case 'accorhotels-nl-belgium-personaldetails' : 
			case 'accorhotels-nl-belgium-preferences' : 
			case 'accorhotels-nl-belgium-newsletters' : 
			case 'accorhotels-nl-belgium-pointshistory' : 
			case 'accorhotels-nl-belgium-rewards' : 
			case 'accorhotels-nl-belgium-subscription' : 
				return '6591716oll13595481';
				break;

			case 'accorhotels-fr-canada-dashboard' : 
			case 'accorhotels-fr-canada-booking' : 
			case 'accorhotels-fr-canada-personaldetails' : 
			case 'accorhotels-fr-canada-preferences' : 
			case 'accorhotels-fr-canada-newsletters' : 
			case 'accorhotels-fr-canada-pointshistory' : 
			case 'accorhotels-fr-canada-rewards' : 
			case 'accorhotels-fr-canada-subscription' : 
				return '6591752dax13595482';
				break;

			case 'accorhotels-gb-canada-dashboard' : 
			case 'accorhotels-gb-canada-booking' : 
			case 'accorhotels-gb-canada-personaldetails' : 
			case 'accorhotels-gb-canada-preferences' : 
			case 'accorhotels-gb-canada-newsletters' : 
			case 'accorhotels-gb-canada-pointshistory' : 
			case 'accorhotels-gb-canada-rewards' : 
			case 'accorhotels-gb-canada-subscription' : 
				return '6591789ycb13595483';
				break;

			case 'accorhotels-gb-ireland-dashboard' : 
			case 'accorhotels-gb-ireland-booking' : 
			case 'accorhotels-gb-ireland-personaldetails' : 
			case 'accorhotels-gb-ireland-preferences' : 
			case 'accorhotels-gb-ireland-newsletters' : 
			case 'accorhotels-gb-ireland-pointshistory' : 
			case 'accorhotels-gb-ireland-rewards' : 
			case 'accorhotels-gb-ireland-subscription' : 
				return '6591495qzz13595475';
				break;

			case 'accorhotels-ja-japan-dashboard' : 
			case 'accorhotels-ja-japan-booking' : 
			case 'accorhotels-ja-japan-personaldetails' : 
			case 'accorhotels-ja-japan-preferences' : 
			case 'accorhotels-ja-japan-newsletters' : 
			case 'accorhotels-ja-japan-pointshistory' : 
			case 'accorhotels-ja-japan-rewards' : 
			case 'accorhotels-ja-japan-subscription' : 
				return '6591827qgs13595484';
				break;

			case 'accorhotels-gb-japan-dashboard' : 
			case 'accorhotels-gb-japan-booking' : 
			case 'accorhotels-gb-japan-personaldetails' : 
			case 'accorhotels-gb-japan-preferences' : 
			case 'accorhotels-gb-japan-newsletters' : 
			case 'accorhotels-gb-japan-pointshistory' : 
			case 'accorhotels-gb-japan-rewards' : 
			case 'accorhotels-gb-japan-subscription' : 
				return '6591460ffj13595474';
				break;

			case 'accorhotels-es-sudamerica-dashboard' : 
			case 'accorhotels-es-sudamerica-booking' : 
			case 'accorhotels-es-sudamerica-personaldetails' : 
			case 'accorhotels-es-sudamerica-preferences' : 
			case 'accorhotels-es-sudamerica-newsletters' : 
			case 'accorhotels-es-sudamerica-pointshistory' : 
			case 'accorhotels-es-sudamerica-rewards' : 
			case 'accorhotels-es-sudamerica-subscription' : 
				return '6591866ypu13595485';
				break;

			case 'accorhotels-nl-nederland-dashboard' : 
			case 'accorhotels-nl-nederland-booking' : 
			case 'accorhotels-nl-nederland-personaldetails' : 
			case 'accorhotels-nl-nederland-preferences' : 
			case 'accorhotels-nl-nederland-newsletters' : 
			case 'accorhotels-nl-nederland-pointshistory' : 
			case 'accorhotels-nl-nederland-rewards' : 
			case 'accorhotels-nl-nederland-subscription' : 
				return '6591904vdm13595486';
				break;

			case 'accorhotels-gb-new-zealand-fiji-dashboard' : 
			case 'accorhotels-gb-new-zealand-fiji-booking' : 
			case 'accorhotels-gb-new-zealand-fiji-personaldetails' : 
			case 'accorhotels-gb-new-zealand-fiji-preferences' : 
			case 'accorhotels-gb-new-zealand-fiji-newsletters' : 
			case 'accorhotels-gb-new-zealand-fiji-pointshistory' : 
			case 'accorhotels-gb-new-zealand-fiji-rewards' : 
			case 'accorhotels-gb-new-zealand-fiji-subscription' : 
				return '6591569ibr13595477';
				break;

			case 'accorhotels-pl-polska-dashboard' : 
			case 'accorhotels-pl-polska-booking' : 
			case 'accorhotels-pl-polska-personaldetails' : 
			case 'accorhotels-pl-polska-preferences' : 
			case 'accorhotels-pl-polska-newsletters' : 
			case 'accorhotels-pl-polska-pointshistory' : 
			case 'accorhotels-pl-polska-rewards' : 
			case 'accorhotels-pl-polska-subscription' : 
				return '6591942frl13595487';
				break;

			case 'accorhotels-pt-portugal-dashboard' : 
			case 'accorhotels-pt-portugal-booking' : 
			case 'accorhotels-pt-portugal-personaldetails' : 
			case 'accorhotels-pt-portugal-preferences' : 
			case 'accorhotels-pt-portugal-newsletters' : 
			case 'accorhotels-pt-portugal-pointshistory' : 
			case 'accorhotels-pt-portugal-rewards' : 
			case 'accorhotels-pt-portugal-subscription' : 
				return '6591981umj13595488';
				break;

			case 'accorhotels-fr-switzerland-dashboard' : 
			case 'accorhotels-fr-switzerland-booking' : 
			case 'accorhotels-fr-switzerland-personaldetails' : 
			case 'accorhotels-fr-switzerland-preferences' : 
			case 'accorhotels-fr-switzerland-newsletters' : 
			case 'accorhotels-fr-switzerland-pointshistory' : 
			case 'accorhotels-fr-switzerland-rewards' : 
			case 'accorhotels-fr-switzerland-subscription' : 
				return '6592019ugg13595489';
				break;

			case 'accorhotels-de-switzerland-dashboard' : 
			case 'accorhotels-de-switzerland-booking' : 
			case 'accorhotels-de-switzerland-personaldetails' : 
			case 'accorhotels-de-switzerland-preferences' : 
			case 'accorhotels-de-switzerland-newsletters' : 
			case 'accorhotels-de-switzerland-pointshistory' : 
			case 'accorhotels-de-switzerland-rewards' : 
			case 'accorhotels-de-switzerland-subscription' : 
				return '6592059tdp13595490';
				break;

			case 'accorhotels-id-indonesia-dashboard' : 
			case 'accorhotels-id-indonesia-booking' : 
			case 'accorhotels-id-indonesia-personaldetails' : 
			case 'accorhotels-id-indonesia-preferences' : 
			case 'accorhotels-id-indonesia-newsletters' : 
			case 'accorhotels-id-indonesia-pointshistory' : 
			case 'accorhotels-id-indonesia-rewards' : 
			case 'accorhotels-id-indonesia-subscription' : 
				return '6592099yil13595491';
				break;

			case 'accorhotels-gb-indonesia-dashboard' : 
			case 'accorhotels-gb-indonesia-booking' : 
			case 'accorhotels-gb-indonesia-personaldetails' : 
			case 'accorhotels-gb-indonesia-preferences' : 
			case 'accorhotels-gb-indonesia-newsletters' : 
			case 'accorhotels-gb-indonesia-pointshistory' : 
			case 'accorhotels-gb-indonesia-rewards' : 
			case 'accorhotels-gb-indonesia-subscription' : 
				return '6591460ffj13595474';
				break;

			case 'accorhotels-ar-middle-east-rates' :
			case 'accorhotels-ar-middle-east-options':
				return '6592251wwj13595495';
				break;
			case 'accorhotels-ar-middle-east-summary' : 
				return '6592285uns13595496';
				break;			
			case 'accorhotels-ar-middle-east-modifoption' :
				return '6592318ilz13595497';
				break;
			case 'accorhotels-ar-middle-east-dashboard' :
			case 'accorhotels-ar-middle-east-booking' :
			case 'accorhotels-ar-middle-east-personaldetails' :
			case 'accorhotels-ar-middle-east-preferences' :
			case 'accorhotels-ar-middle-east-newsletters' : 
			case 'accorhotels-ar-middle-east-pointshistory' :
			case 'accorhotels-ar-middle-east-rewards' : 
			case 'accorhotels-ar-middle-east-subscription' :
				return '8677980rkf13787398';
				break;

			case 'accorhotels-gb-middle-east-rates' :
			case 'accorhotels-gb-middle-east-options':
				return '6592216one13595494';
				break;
			case 'accorhotels-gb-middle-east-summary' : 
				return '8678143wyz13787399';
				break;			
			case 'accorhotels-gb-middle-east-modifoption' :
				return '7911296ayy138633100';
				break;
			case 'accorhotels-gb-middle-east-dashboard' :
			case 'accorhotels-gb-middle-east-booking' :
			case 'accorhotels-gb-middle-east-personaldetails' :
			case 'accorhotels-gb-middle-east-preferences' :
			case 'accorhotels-gb-middle-east-newsletters' : 
			case 'accorhotels-gb-middle-east-pointshistory' :
			case 'accorhotels-gb-middle-east-rewards' : 
			case 'accorhotels-gb-middle-east-subscription' :
				return '7911564boo138633101';
				break;



			/**
			 * New add for MGA, Pullman & Sofitel
			 */
			
			// FR-FR
			case 'mgallery-fr-france-rates':
			case 'mgallery-fr-france-options':
				return '1935807dlp1422981';
				break;
			case 'mgallery-fr-france-summary':
				return '1935819zos14229810';
				break;
			case 'pullmanhotels-fr-france-rates':
			case 'pullmanhotels-fr-france-options':
				return '1975002iho14229821';
				break;
			case 'pullmanhotels-fr-france-summary':
				return '1975739kdk14229832';
				break;
			case 'sofitel-fr-france-rates':
			case 'sofitel-fr-france-options':
				return '2000546djb14229849';
				break;
			case 'sofitel-fr-france-summary':
				return '2032268qyh14229867';
				break;
			
			// ALLEMAGNE-DE
			case 'mgallery-de-deutschland-rates':
			case 'mgallery-de-home-rates':
			case 'mgallery-de-deutschland-options':
			case 'mgallery-de-home-options':
				return '1935808qoh1422982';
				break;
			case 'mgallery-de-deutschland-summary':
				return '1974297yyf14229811';
				break;
			case 'pullmanhotels-de-home-rates':
			case 'pullmanhotels-de-deutschland-rates':
			case 'pullmanhotels-de-home-options':
			case 'pullmanhotels-de-deutschland-options':
				return '1974859ggq14229819';
				break;
			case 'pullmanhotels-de-deutschland-summary':
				return '1975600pev14229830';
				break;
			case 'sofitel-de-deutschland-rates':
			case 'sofitel-de-deutschland-options':
				return '2000411dco14229847';
				break;
			case 'sofitel-de-deutschland-summary':
				return '2032140hmp14229865';
				break;
			
			// ITALIE-IT
			case 'mgallery-it-italia-rates':
			case 'mgallery-it-italia-options':
			case 'mgallery-it-home-rates':
			case 'mgallery-it-home-options':
				return '1935810zue1422983';
				break;
			case 'mgallery-it-italia-summary':
				return '1974396izh14229812';
				break;
			case 'sofitel-it-italia-rates':
			case 'sofitel-it-italia-options':
				return '2000694yvs14229851';
				break;
			case 'sofitel-it-italia-summary':
				return '2032394yka14229869';
				break;
			
			// ESPAGNE-ES
			case 'mgallery-es-espana-rates':
			case 'mgallery-es-espana-options':
			case 'mgallery-es-home-rates':
			case 'mgallery-es-home-options':
				return '1935811zom1422984';
				break;
			case 'mgallery-es-espana-summary':
				return '1974460cvv14229813';
				break;
			case 'pullmanhotels-es-espana-rates':
			case 'pullmanhotels-es-espana-options':
				return '1974930orl14229820';
				break;
			case 'pullmanhotels-es-espana-summary':
				return '1975669dsc14229831';
				break;
			case 'sofitel-es-espana-rates':
			case 'sofitel-es-espana-options':
				return '2000478vpi14229848';
				break;
			case 'sofitel-es-espana-summary':
				return '2032207tga14229866';
				break;
			
			// UK-GB
			case 'mgallery-gb-united-kingdom-rates':
			case 'mgallery-gb-united-kingdom-options':
				return '1935812qqd1422985';
				break;
			case 'mgallery-gb-united-kingdom-summary':
				return '1974527odb14229814';
				break;
			case 'pullmanhotels-gb-united-kingdom-rates':
			case 'pullmanhotels-gb-united-kingdom-options':
				return '1975071wsw14229822';
				break;
			case 'pullmanhotels-gb-united-kingdom-summary':
				return '1975806tfu14229833';
				break;
			case 'sofitel-gb-united-kingdom-rates':
			case 'sofitel-gb-united-kingdom-options':
				return '2000627piq14229850';
				break;
			case 'sofitel-gb-united-kingdom-summary':
				return '2032333qes14229868';
				break;
			
			// USA-GB
			case 'mgallery-gb-usa-rates':
			case 'mgallery-gb-usa-options':
				return '1935814vbb1422986';
				break;
			case 'mgallery-gb-usa-summary':
				return '1974594ncd14229815';
				break;
			case 'pullmanhotels-gb-usa-rates':
			case 'pullmanhotels-gb-usa-options':
				return '2001123nby14229857';
				break;
			case 'pullmanhotels-gb-usa-summary':
				return '2032784ziv14229875';
				break;
			
			// OCEANIE-GB
			case 'mgallery-gb-australia-rates':
			case 'mgallery-gb-new-zealand-fiji-rates':
			case 'mgallery-gb-australia-options':
			case 'mgallery-gb-new-zealand-fiji-options':
				return '1935815yll1422987';
				break;
			case 'mgallery-gb-australia-summary':
			case 'mgallery-gb-new-zealand-fiji-summary':
				return '1974659ujt14229816';
				break;
			case 'pullmanhotels-gb-australia-rates':
			case 'pullmanhotels-gb-new-zealand-fiji-rates':
			case 'pullmanhotels-gb-australia-options':
			case 'pullmanhotels-gb-new-zealand-fiji-options':
				return '1975530eug14229829';
				break;
			case 'pullmanhotels-gb-australia-summary':
			case 'pullmanhotels-gb-new-zealand-fiji-summary':
				return '1999898kmz14229840';
				break;
			case 'sofitel-gb-australia-rates':
			case 'sofitel-gb-new-zealand-fiji-rates':
			case 'sofitel-gb-australia-options':
			case 'sofitel-gb-new-zealand-fiji-options':
				return '2000108gog14229843';
				break;
			case 'sofitel-gb-australia-summary':
			case 'sofitel-gb-new-zealand-fiji-summary':
				return '2031853lib14229861';
				break;
			
			// ASIE-GB
			case 'mgallery-gb-china-rates':
			case 'mgallery-gb-japan-rates':
			case 'mgallery-gb-india-rates':
			case 'mgallery-gb-indonesia-rates':
			case 'mgallery-gb-asia-middle-east-rates':
			case 'mgallery-gb-singapore-malaysia-rates':
			case 'mgallery-gb-china-options':
			case 'mgallery-gb-japan-options':
			case 'mgallery-gb-india-options':
			case 'mgallery-gb-indonesia-options':
			case 'mgallery-gb-asia-middle-east-options':
			case 'mgallery-gb-singapore-malaysia-options':
			case 'mgallery-gb-home':
				return '1935816etj1422988';
				break;
			case 'mgallery-gb-china-summary':
			case 'mgallery-gb-japan-summary':
			case 'mgallery-gb-india-summary':
			case 'mgallery-gb-indonesia-summary':
			case 'mgallery-gb-asia-middle-east-summary':
			case 'mgallery-gb-singapore-malaysia-summary':
				return '1974728pkf14229817';
				break;
			case 'pullmanhotels-gb-japan-rates':
			case 'pullmanhotels-gb-india-rates':
			case 'pullmanhotels-gb-indonesia-rates':
			case 'pullmanhotels-gb-asia-middle-east-rates':
			case 'pullmanhotels-gb-singapore-malaysia-rates':
			case 'pullmanhotels-gb-japan-options':
			case 'pullmanhotels-gb-india-options':
			case 'pullmanhotels-gb-indonesia-options':
			case 'pullmanhotels-gb-asia-middle-east-options':
			case 'pullmanhotels-gb-singapore-malaysia-options':
				return '1975139pud14229823';
				break;
			case 'pullmanhotels-gb-japan-summary':
			case 'pullmanhotels-gb-india-summary':
			case 'pullmanhotels-gb-indonesia-summary':
			case 'pullmanhotels-gb-asia-middle-east-summary':
			case 'pullmanhotels-gb-singapore-malaysia-summary':
				return '1975876thp14229834';
				break;
			case 'sofitel-gb-china-rates':
			case 'sofitel-gb-japan-rates':
			case 'sofitel-gb-india-rates':
			case 'sofitel-gb-indonesia-rates':
			case 'sofitel-gb-asia-middle-east-rates':
			case 'sofitel-gb-singapore-malaysia-rates':
			case 'sofitel-gb-china-options':
			case 'sofitel-gb-japan-options':
			case 'sofitel-gb-india-options':
			case 'sofitel-gb-indonesia-options':
			case 'sofitel-gb-asia-middle-east-options':
			case 'sofitel-gb-singapore-malaysia-options':
			case 'sofitel-gb-home': 
				return '2000037onp14229842';
				break;
			case 'sofitel-gb-china-summary':
			case 'sofitel-gb-japan-summary':
			case 'sofitel-gb-india-summary':
			case 'sofitel-gb-indonesia-summary':
			case 'sofitel-gb-asia-middle-east-summary':
			case 'sofitel-gb-singapore-malaysia-summary':
				return '2001328anj14229860';
				break;
			
			// BRASIL-PTBR
			case 'mgallery-pt-br-brasil-rates':
			case 'mgallery-pt-br-home-rates':
			case 'mgallery-pt-br-brasil-options':
			case 'mgallery-pt-br-home-options':
				return '1935818efm1422989';
				break;
			case 'mgallery-pt-br-brasil-summary':
			case 'mgallery-pt-br-home-summary':
				return '1974797kjf14229818';
				break;
			case 'pullmanhotels-pt-br-brasil-rates':
			case 'pullmanhotels-pt-br-home-rates':
			case 'pullmanhotels-pt-br-brasil-options':
			case 'pullmanhotels-pt-br-home-options':
				return '1975398erc14229827';
				break;
			case 'pullmanhotels-pt-br-brasil-summary':
			case 'pullmanhotels-pt-br-home-summary':
				return '1999747zyc14229838';
				break;
			case 'sofitel-pt-br-brasil-rates':
			case 'sofitel-pt-br-home-rates':
			case 'sofitel-pt-br-brasil-options':
			case 'sofitel-pt-br-home-options':
				return '2000252rfj14229845';
				break;
			case 'sofitel-pt-br-brasil-summary':
			case 'sofitel-pt-br-home-summary':
				return '2032013urv14229863';
				break;
			
			// CHINA-GB
			case 'pullmanhotels-gb-china-rates':
			case 'pullmanhotels-gb-china-options':
				return '1975201dmp14229824';
				break;
			case 'pullmanhotels-gb-china-summary':
				return '1975941ypd14229835';
				break;
			
			// CHINA-ZH
			case 'pullmanhotels-zh-china-rates':
			case 'pullmanhotels-zh-china-options':
				return '1975266xxc14229825';
				break;
			case 'pullmanhotels-zh-china-summary':
				return '1999561dmv14229836';
				break;
			case 'sofitel-zh-china-rates':
			case 'sofitel-zh-china-options':
				return '2001192sde14229858';
				break;
			case 'sofitel-zh-china-summary':
				return '2032849pvk14229876';
				break;
			
			// INDONESIA-ID
			case 'pullmanhotels-id-indonesia-rates':
			case 'pullmanhotels-id-indonesia-options':
				return '1975331roi14229826';
				break;
			case 'pullmanhotels-id-indonesia-summary':
				return '1999674meo14229837';
				break;
			
			// AMER LAT-ES
			case 'pullmanhotels-es-home-rates':
			case 'pullmanhotels-es-sudamerica-rates':
			case 'pullmanhotels-es-home-options':
			case 'pullmanhotels-es-sudamerica-options':
				return '1975468okq14229828';
				break;
			case 'pullmanhotels-es-home-summary':
			case 'pullmanhotels-es-sudamerica-summary':
				return '1999824bqo14229839';
				break;
			case 'sofitel-es-home-rates':
			case 'sofitel-es-sudamerica-rates':
			case 'sofitel-es-home-options':
			case 'sofitel-es-sudamerica-options':
				return '1999968fow14229841';
				break;
			case 'sofitel-es-home-summary':
			case 'sofitel-es-sudamerica-summary':
				return '2001260szn14229859';
				break;
			
			// BENELUX-FR
			case 'sofitel-fr-belgium-rates':
			case 'sofitel-fr-belgium-options':
				return '2000180hvv14229844';
				break;
			case 'sofitel-fr-belgium-summary':
				return '2031949hza14229862';
				break;
			
			// CANADA-GB
			case 'sofitel-gb-canada-rates':
			case 'sofitel-gb-canada-options':
				return '2000319rmi14229846';
				break;
			case 'sofitel-gb-canada-summary':
				return '2032077pko14229864';
				break;
			
			// MAROC-FR
			case 'sofitel-fr-maroc-rates':
			case 'sofitel-fr-maroc-options':
				return '2000760huc14229852';
				break;
			case 'sofitel-fr-maroc-summary':
				return '2032457xdc14229870';
				break;
			
			// MOYEN ORIENT-GB
			case 'sofitel-gb-middle-east-rates':
			case 'sofitel-gb-middle-east-options':
				return '2000829owi14229853';
				break;
			case 'sofitel-gb-middle-east-summary':
				return '2032521niy14229871';
				break;
			
			// AUSTRIA-DE
			case 'sofitel-de-oesterreich-rates':
			case 'sofitel-de-oesterreich-options':
				return '2000903ajc14229854';
				break;
			case 'sofitel-de-oesterreich-summary':
				return '2032590zru14229872';
				break;
			
			// RUSSIA-RU
			case 'sofitel-ru-russia-rates':
			case 'sofitel-ru-russia-options':
				return '2000977nlq14229855';
				break;
			case 'sofitel-ru-russia-summary':
				return '2032658izo14229873';
				break;
			
			// SUISSE-DE
			case 'sofitel-de-switzerland-rates':
			case 'sofitel-de-switzerland-options':
				return '2001046ytu14229856';
				break;
			case 'sofitel-de-switzerland-summary':
				return '2032724ibr14229874';
				break;



			default :
				return '';
				break;
		}
	
	}
};	

/** Done /scripts-v2104/click2call.js **/
