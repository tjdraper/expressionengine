/**
 * ExpressionEngine (https://expressionengine.com)
 *
 * @link      https://expressionengine.com/
 * @copyright Copyright (c) 2003-2017, EllisLab, Inc. (https://ellislab.com)
 * @license   https://expressionengine.com/license
 */
!function(e){var n={onFormLoad:function(n){FieldManager.fireEvent("fieldModalDisplay",n),""==e("input[name=field_name]").val()&&e("input[name=field_label]",n).bind("keyup keydown",function(){e(this).ee_url_title("input[name=field_name]",!0)})}};new MutableSelectField("category_fields",Object.assign(EE.categoryField,n))}(jQuery);