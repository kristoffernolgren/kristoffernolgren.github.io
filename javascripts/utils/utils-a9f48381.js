var Utils={api:function(t,n){return reqwest({url:t,data:n}).always(function(t){t.ok||console.log(t)})},inViewport:function(t,n){var i=[];t.constructor!==Array&&(t=[t]),n=n||0;for(var e=t.length-1;e>=0;e--){var o=t[e],a=o.getBoundingClientRect(),r=a.bottom-n<0,s=window.innerHeight-a.top+n<0;r||s||i.push(o)}return i},transitionEnd:function(){var t=document.createElement("div"),n={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};for(var i in n)if(void 0!==t.style[i])return n[i]},setMobile:function(){app.window.get(0).matchMedia("(max-width: 720px)").matches?(document.querySelector("html").classList.add("mobile"),app.mobile=!0,app.NavigationButton.slideout._padding=app.NavigationButton.options.mobilePadding,app.NavigationButton.slideout._translateTo=-app.NavigationButton.options.mobilePadding):(document.querySelector("html").classList.remove("mobile"),app.mobile=!1,app.NavigationButton.slideout._padding=app.NavigationButton.options.padding,app.NavigationButton.slideout._translateTo=-app.NavigationButton.options.padding)},throttle:function(t,n,i){n||(n=250);var e,o;return function(){var a=i||this,r=+new Date,s=arguments;e&&e+n>r?(clearTimeout(o),o=setTimeout(function(){e=r,t.apply(a,s)},n)):(e=r,t.apply(a,s))}},debounce:function(t,n){var i=null;return function(){var e=this,o=arguments;clearTimeout(i),i=setTimeout(function(){t.apply(e,o)},n)}},isIE:function(){var t=window.navigator.userAgent,n=t.indexOf("MSIE ");if(app.ie=!1,n>0||navigator.userAgent.match(/Trident.*rv\:11\./)){var i=document.documentElement;i.setAttribute("data-useragent",navigator.userAgent),app.ie=!0}else app.ie=!1;if(app.ie){var e=document.querySelector("body"),o="ie";e.classList?e.classList.add(o):e.className+=" "+o}}};Array.prototype.remove=function(){for(var t,n,i=arguments,e=i.length;e&&this.length;)for(t=i[--e];-1!==(n=this.indexOf(t));)this.splice(n,1);return this},Array.prototype.indexOf||(Array.prototype.indexOf=function(t,n){n=n||0;for(var i=this.length;i>n;){if(this[n]===t)return n;++n}return-1});