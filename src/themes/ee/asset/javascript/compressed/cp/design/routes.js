/**
 * ExpressionEngine (https://expressionengine.com)
 *
 * @link      https://expressionengine.com/
 * @copyright Copyright (c) 2003-2018, EllisLab, Inc. (https://ellislab.com)
 * @license   https://expressionengine.com/license
 */
$(document).ready(function(){$(".grid-publish").find(".toolbar .add a").parents("ul.toolbar").remove(),$(".grid-publish").removeClass("grid-publish"),$(".grid-input-form").removeClass("grid-input-form"),$("#routes").on("grid:addRow",function(d,r){$(r).addClass("setting-field"),Dropdown.renderFields($(r).find("td").eq(1))})});