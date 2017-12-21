/**
 * ExpressionEngine (https://expressionengine.com)
 *
 * @link      https://expressionengine.com/
 * @copyright Copyright (c) 2003-2017, EllisLab, Inc. (https://ellislab.com)
 * @license   https://expressionengine.com/license
 */
"use strict";!function(e){e(document).ready(function(){e(".modal-remove-field input.btn").on("click",function(t){t.preventDefault(),e(".form-standard form").off("submit"),e("button[type=submit][value=save]").click()}),e(".form-standard form").on("submit",function(t){for(var i,n=EE.fields.fluid_field.fields,f=!1,o=0,d=n.length;o<d;o++)if(i=e('[name="field_channel_fields[]"][value="'+n[o]+'"]'),0==i.size()||0==i.prop("checked")){f=!0;break}f&&(t.preventDefault(),e(".modal-remove-field input.btn").attr("disabled",!1),e(".modal-remove-field").trigger("modal:open"))})})}(jQuery);