/**
 * ExpressionEngine (https://expressionengine.com)
 *
 * @link      https://expressionengine.com/
 * @copyright Copyright (c) 2003-2017, EllisLab, Inc. (https://ellislab.com)
 * @license   https://expressionengine.com/license
 */
$(document).ready(function(){$(".grid-publish").find(".toolbar .add a").parents("ul.toolbar").remove(),$(".grid-publish").removeClass("grid-publish"),$(".grid-input-form").removeClass("grid-input-form"),$("#routes").on("grid:addRow",function(d,e){$(e).addClass("setting-field"),SelectField.renderFields($(e).find("td").eq(1))})});