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
"use strict";!function(e){e(document).ready(function(){e(".fluid-field-templates :input").attr("disabled","disabled");var i=function(i){var t=e(this).closest(".fluid-wrap"),l=e(this).data("field-name"),d=t.data("field-count"),a=t.find('.fluid-field-templates .fluid-item[data-field-name="'+l+'"]'),f=a.clone();d++,f.html(f.html().replace(RegExp("new_field_[0-9]{1,}","g"),"new_field_"+d)),t.data("field-count",d),f.find(":input").removeAttr("disabled"),e(this).parents(".fluid-item").length?e(this).closest(".fluid-item").after(f):t.find(".js-sorting-container").append(f),e.fuzzyFilter(),EE.cp&&void 0!==EE.cp.formValidation&&EE.cp.formValidation.bindInputs(f),i.preventDefault(),t.find(".open").trigger("click"),FluidField.fireEvent(e(f).data("field-type"),"add",[f])};e(".fluid-wrap").on("click","a[data-field-name]",i),e(".fluid-wrap").on("click","a.fluid-remove",function(i){var t=e(this).closest(".fluid-item");FluidField.fireEvent(e(t).data("field-type"),"remove",t),t.remove(),i.preventDefault()}),e(".js-sorting-container").sortable({axis:"y",containment:"parent",handle:"span.reorder",items:".fluid-item",sort:EE.sortable_sort_helper,start:function(i,t){FluidField.fireEvent(e(t.item).data("field-type"),"beforeSort",e(t.item))},stop:function(i,t){FluidField.fireEvent(e(t.item).data("field-type"),"afterSort",e(t.item))}}),e(".fieldset-faux-fluid .js-toggle-field").off("click"),e(".fieldset-faux-fluid").on("click",".js-toggle-field",function(){e(this).parents(".fluid-item").toggleClass("fluid-closed")})})}(jQuery);