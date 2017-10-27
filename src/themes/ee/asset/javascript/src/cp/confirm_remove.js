/**
 * ExpressionEngine (https://expressionengine.com)
 *
 * @link      https://expressionengine.com/
 * @copyright Copyright (c) 2003-2017, EllisLab, Inc. (https://ellislab.com)
 * @license   https://expressionengine.com/license
 */

$(document).ready(function () {
	$('*[data-conditional-modal]').click(function (e) {
		var data_element = $(this).data('conditional-modal');
		var ajax_url = $(this).data('confirm-ajax');
		var confirm_text = $(this).data('confirm-text');
		var confirm_input = $(this).data('confirm-input');
		var conditional_element = $('*[data-' + data_element + ']').eq(0);

		if ($(conditional_element).prop($(conditional_element).data(data_element))) {
			// First adjust the checklist
			var modalIs = '.' + $(conditional_element).attr('rel');
			$(modalIs + " .checklist").html(''); // Reset it

			if (typeof confirm_text != 'undefined') {
				$(modalIs + " .checklist").append('<li>' + confirm_text + '</li>');
			}

			var checked = $(this).parents('form').find('th input:checked, td input:checked, li input:checked');

			checked = checked.filter(function(i, el) {
				return $(el).attr('value') !== undefined;
			});

			if (checked.length < 6) {
				checked.each(function() {
					$(modalIs + " .checklist").append('<li>' + $(this).attr('data-confirm') + '</li>');
				});
			} else {
				$(modalIs + " .checklist").append('<li>' + EE.lang.remove_confirm.replace('###', checked.length) + '</li>');
			}

			// Add hidden <input> elements
			checked.each(function() {
				$(modalIs + " .checklist li:last").append(
					$('<input/>').attr({
						type: 'hidden',
						name: $(this).attr('name'),
						value: $(this).val()
					})
				);
			});

			if (typeof confirm_input != 'undefined') {
				$("input[name='" + confirm_input + "']").each(function() {
					$(modalIs + " .checklist li:last").append(
						$('<input/>').attr({
							type: 'hidden',
							name: $(this).attr('name'),
							value: $(this).val()
						})
					);
				});
			}

			$(modalIs + " .checklist li:last").addClass('last');

			if (typeof ajax_url != 'undefined') {
				$.post(ajax_url, $(modalIs + " form").serialize(), function(data) {
					$(modalIs + " .ajax").html(data);
					SelectField.renderFields();
				});
			}

			var heightIs = $(document).height();

			$('.overlay').fadeIn('slow').css('height',heightIs);
			$('.modal-wrap' + modalIs).fadeIn('slow');
			$('.modal-wrap' + modalIs).trigger('modal:open');
			e.preventDefault();
			$('#top').animate({ scrollTop: 0 }, 100);
		}
	})
});

EE.cp.Modal = {

	/**
	 * Opens the confirm removal modal and does the form and view manipulation
	 * for the current item being deleted. Only supports one item at the moment.
	 *
	 * @param  {string}   actionUrl Form action URL for removal
	 * @param  {string}   label     Label of item being deleted
	 * @param  {mixed}    value     Value, typically an ID, of item being deleted
	 * @param  {Function} callback  Callback on deletion of item
	 * @return {void}
	 */
	openConfirmRemove: function(actionUrl, label, value, callback) {
		var modal = $('.modal-default-confirm-remove'),
			form = modal.find('form'),
			input = modal.find('input[name="content_id"]')

		// Add the name of the item we're deleting to the modal
		$('.checklist', modal)
			.html('')
			.append('<li>' + label + '</li>')

		input.val(value)
		form.attr('action', actionUrl)

		modal.trigger('modal:open')

		modal.find('form').submit(function() {
			$.post(this.action, $(this).serialize(), function(result) {
				modal.trigger('modal:close')
				callback(result)
			})

			return false
		})
	}
};
