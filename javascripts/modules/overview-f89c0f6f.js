var Overview=function(e){this.el=$(e),this.services=this.el.find(".overview__service"),this.activated=!1,this.setListeners(),setTimeout(function(){app.OverviewService.activate()},500)};Overview.prototype.setListeners=function(){this.services.on("click",function(){app.window.get(0).matchMedia("(max-width: 720px)").matches&&(window.location.href=this.dataset.link)})},Overview.prototype.activate=function(){0===Utils.inViewport(this.el.get(0),150).length||app.mobile||(this.activated=!0,$el1=$(this.services.get(0)),$el2=$(this.services.get(1)),$el3=$(this.services.get(2)),$el1.addClass("overview__service--activated"),$el1.on(Utils.transitionEnd(),function(){$el2.addClass("overview__service--activated")}),$el2.on(Utils.transitionEnd(),function(){$el3.addClass("overview__service--activated"),$el3.on(Utils.transitionEnd(),function(){app.OverviewService.el.addClass("loaded")})}))};