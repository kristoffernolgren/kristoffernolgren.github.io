var NavigationButton=function(t){this.el=$(t),this.options={side:"right",panel:document.querySelector(".container"),menu:document.querySelector(".navigation"),padding:370,mobilePadding:250,touch:!1},this.slideout=new Slideout(this.options),this.setListeners()};NavigationButton.prototype.setListeners=function(){var t=this;this.el.on("click",function(e){e.preventDefault(),t.slideout.toggle(),t.el.toggleClass("navigation__button--active")})};