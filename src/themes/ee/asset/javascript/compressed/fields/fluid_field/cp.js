/*!
 * ExpressionEngine - by EllisLab
 *
 * @package		ExpressionEngine
 * @author		EllisLab Dev Team
 * @copyright	Copyright (c) 2003 - 2016, EllisLab, Inc.
 * @license		https://expressionengine.com/license
 * @link		https://ellislab.com
 * @since		Version 4.0.0
 * @filesource
 */
"use strict";!function(e){e(document).ready(function(){e(".fluid-field-templates :input").attr("disabled","disabled");var i=function(t){var d=e(this).closest(".fluid-wrap"),l=e(this).data("field-name"),a=d.data("field-count"),f=e('.fluid-field-templates .fluid-item[data-field-name="'+l+'"]'),n=f.clone();a++,n.html(n.html().replace(RegExp("new_field_[0-9]{1,}","g"),"new_field_"+a)),d.data("field-count",a),n.find(":input").removeAttr("disabled"),n.find("a[data-field-name]").click(i),e(this).parents(".fluid-item").length?e(this).closest(".fluid-item").after(n):e(".fluid-actions",d).before(n),EE.cp&&void 0!==EE.cp.formValidation&&EE.cp.formValidation.bindInputs(n),t.preventDefault(),d.find(".open").trigger("click"),FluidField.fireEvent(e(n).data("field-type"),"add",[n])};e("a[data-field-name]").click(i),e(".fluid-wrap").on("click","a.fluid-remove",function(i){var t=e(this).closest(".fluid-item");FluidField.fireEvent(e(t).data("field-type"),"remove",t),t.remove(),i.preventDefault()}),e(".fluid-wrap").sortable({axis:"y",containment:"parent",handle:"span.reorder",items:".fluid-item",sort:EE.sortable_sort_helper,start:function(i,t){FluidField.fireEvent(e(t.item).data("field-type"),"beforeSort",t.item)},stop:function(i,t){FluidField.fireEvent(e(t.item).data("field-type"),"afterSort",t.item)}}),e(".fieldset-faux-fluid").on("click",".js-toggle-field",function(){e(this).parents(".fluid-item").toggleClass("fluid-closed")})})}(jQuery);