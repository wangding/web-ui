define(["jquery"],(function(t){return function(n){var e,i=n,r=i.enabled,a=i.duration,u=t('<input class="timer-button" type="button">');function o(){r=!1,u.attr("disabled","disabled"),d(),e=window.setInterval((function(){a--,d(),0===a&&c()}),1e3)}function c(){r=!0,a=i.duration,clearInterval(e),d(),u.removeAttr("disabled")}function d(){var t=r?i.text:i.text+" ("+a+" s)";u.val(t)}return t(i.container).append(u),i.enabled?c():o(),u.click((function(){u.trigger("timer-button-click"),i.enabled&&o()})),u}}));