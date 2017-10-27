/**
 * ExpressionEngine (https://expressionengine.com)
 *
 * @link      https://expressionengine.com/
 * @copyright Copyright (c) 2003-2017, EllisLab, Inc. (https://ellislab.com)
 * @license   https://expressionengine.com/license
 */

"use strict";

(function ($) {
	$(document).ready(function () {
		$('input:checkbox[data-any]').on('click', function(e) {
			// If we clicked on the "Any..." option, if it is now
			// checked, we need to uncheck all the other checkboxes
			if ($(e.target).val() == '--') {
				if (e.target.checked) {
					$(e.target).closest('label')
						.siblings('ul')
						.find('input:checkbox:checked')
						.click();
				}
			}
			// If we did not click on the "Any..." option and we checked
			// something, then we need to uncheck "Any..."
			else {
				if (e.target.checked) {
					if (e.target.checked) {
						$(e.target).closest('ul.nested-list')
							.find('input:checkbox:checked[value="--"]')
							.click();
					}
				}
			}
		});
	});
})(jQuery);
