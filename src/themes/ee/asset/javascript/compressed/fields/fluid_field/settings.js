/**
 * ExpressionEngine (https://expressionengine.com)
 *
 * @link      https://expressionengine.com/
 * @copyright Copyright (c) 2003-2017, EllisLab, Inc. (https://ellislab.com)
 * @license   https://expressionengine.com/license
 */
"use strict";!function(e){e(document).ready(function(){e(".modal-remove-field input.btn").on("click",function(t){t.preventDefault(),e("form.settings.ajax-validate").off("submit"),e("form.settings.ajax-validate").submit()}),e("form.settings.ajax-validate").on("submit",function(t){for(var i,a=EE.fields.fluid_field.fields,n=!1,l=0,f=a.length;l<f;l++)if(i=e('input[name="field_channel_fields[]"][value="'+a[l]+'"]'),0==i.prop("checked")){n=!0;break}n&&(t.preventDefault(),e(".modal-remove-field input.btn").attr("disabled",!1),e(".modal-remove-field").trigger("modal:open"))})})}(jQuery);