var $timerButton=function(){var t,e,n=9;return{init:function(i){n=i.timer,$(i.container).html('<input class="timer-button" type="button" value="同意">'),(t=$('input[type="button"]')).val(i.text+" ("+n+" s)"),t.attr("disabled","disabled"),e=window.setInterval((function(){t.val(i.text+" ("+n--+" s)"),-1===n&&(window.clearInterval(e),t.val(i.text),t.removeAttr("disabled"))}),1e3),t.click((function(){i.eventcb()}))}}}();