!function(){var a={},n=!0,t=!1,s="Demo 目录",e="三",i=[],c=[],l=null,o=function(a){var t=(n=!(a<=600))?s:e;$(".spa-nav-title").html(t);var i=n?$(window).innerHeight()+"px":"30px";$(".spa-nav").css({height:i});var c=n?"block":"none";$(".spa-nav-content").css({display:c})};a.init=function(){var a,e,i,c=$(window).innerWidth();a=$(".spa-nav"),e=spaDemoData,(i=a).html('<div class="spa-nav-title">'+s+'</div><div class="spa-nav-content"></div>'),e.forEach((function(a){var n=$("<details open><summary>"+a.class+"</summary><ul></ul></details>");i.find(".spa-nav-content").append(n);var t=n.find("ul");a.demos.forEach((function(n){var s=$('<li data-href="'+a.baseUrl+"/"+n.url+'">'+n.title+"</li>");t.append(s)}))})),n=!(c<=600),o(c),(l=$($(".spa-nav-content").find("li")[0])).addClass("selected"),$(".spa-nav-title").click((function(){n||(t?($(".spa-nav").css({height:"30px"}),$(".spa-nav-content").css({display:"none"}),t=!1):($(".spa-nav").css({height:"100%"}),$(".spa-nav-content").css({display:"block"}),t=!0),p(t))})),$(".spa-nav-content li").click((function(a){var s=$(a.target);l.removeClass("selected"),s.addClass("selected"),l=s,n||($(".spa-nav").css({height:"30px"}),$(".spa-nav-content").css({display:"none"}),t=!1),r(s.attr("data-href"))}))},a.resize=o,a.getOpenState=function(){return t},a.on=function(a,n){switch(a){case"title-click":i.push(n);break;case"item-click":c.push(n);break;default:console.error("你订阅了未知的事件")}};var r=function(a){c.forEach((function(n){n.call(this,a)}))},p=function(a){i.forEach((function(n){n.call(this,a)}))};window.navBar=a}();