$(()=>{let e=$("#rectangle-width"),t=$("#rectangle-height");function l(e,t){return Math.round(e*Math.pow(10,t))/Math.pow(10,t)}function a(e){let t=$(e),l=$(e+"-validate"),a=$(e).attr("data-label");return""===t.val()?(l.html(a+"不能为空！"),t.select(),!1):/^-?(0|[1-9]\d*)(\.\d*)?([eE][+-]?\d+)?$/.test(t.val())?window.Number(t.val())<0?(l.html(a+"必须大于零"),t.select(),!1):(l.html(""),!0):(l.html(a+"必须是数值"),t.select(),!1)}$("#rectangle-calc").click(()=>{if(!a("#rectangle-width")||!a("#rectangle-height"))return;let r=Number(e.val()),c=Number(t.val()),n=l(2*r+2*c,2),h=l(r*c,2);$("#rectangle-perimeter").val(n),$("#rectangle-area").val(h)})});