/**
 * ExpressionEngine (https://expressionengine.com)
 *
 * @link      https://expressionengine.com/
 * @copyright Copyright (c) 2003-2017, EllisLab, Inc. (https://ellislab.com)
 * @license   https://expressionengine.com/license
 */
$(document).ready(function(){var e=$(".form-standard > form");if(1==EE.publish.title_focus&&e.find("input[name=title]").focus(),"new"==EE.publish.which&&e.find("input[name=title]").bind("keyup blur",function(){e.find("input[name=title]").ee_url_title(e.find("input[name=url_title]"))}),EE.publish.smileys===!0&&$(".format-options .toolbar .emoji a").click(function(e){$(this).parents(".format-options").find(".emoji-wrap").slideToggle("fast"),e.preventDefault()}),EE.publish.autosave&&EE.publish.autosave.interval){var t=!1;e.on("entry:startAutosave",function(){e.trigger("entry:autosave"),t||(t=!0,setTimeout(function(){$.ajax({type:"POST",dataType:"json",url:EE.publish.autosave.URL,data:e.serialize(),success:function(i){e.find("div.alert.inline.warn").remove(),i.error?console.log(i.error):i.success?e.prepend(i.success):console.log("Autosave Failed"),t=!1}})},1e3*EE.publish.autosave.interval))});var i=$("textarea, input").not(":password,:checkbox,:radio,:submit,:button,:hidden"),n=$("select, :checkbox, :radio, :file");i.on("keypress change",function(){e.trigger("entry:startAutosave")}),n.on("change",function(){e.trigger("entry:startAutosave")})}});