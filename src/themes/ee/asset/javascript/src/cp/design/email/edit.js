/**
 * ExpressionEngine (https://expressionengine.com)
 *
 * @link      https://expressionengine.com/
 * @copyright Copyright (c) 2003-2017, EllisLab, Inc. (https://ellislab.com)
 * @license   https://expressionengine.com/license
 */

/*jslint browser: true, onevar: true, undef: true, nomen: true, eqeqeq: true, plusplus: true, bitwise: true, regexp: false, strict: true, newcap: true, immed: true */

/*global $, jQuery, EE, window, document, console, alert */

"use strict";

$(document).ready(function () {
	$('.tab .arrow-list li a').on('click', function (e) {
		var textarea = $('textarea[name="template_data"]'),
		    editor = textarea.data('codemirror.editor');

			editor.replaceSelection($(this).text());
			editor.refresh();

			e.preventDefault();
	});
});