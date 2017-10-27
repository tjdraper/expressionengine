<?php
/**
 * ExpressionEngine (https://expressionengine.com)
 *
 * @link      https://expressionengine.com/
 * @copyright Copyright (c) 2003-2017, EllisLab, Inc. (https://ellislab.com)
 * @license   https://expressionengine.com/license
 */

namespace EllisLab\Addons\Spam\Service;

/**
 * Spam Moderation
 */
interface SpamModerationInterface {

	/**
	 * Approve items in the queue (mark as HAM)
	 *
	 * @param  object $entity model object for the entity in question
	 * @param  mixed $optional_data optional data stored with the item when moderated as spam
	 * @return void
	 */
	public function approve($entity, $optional_data);

	/**
	 * Reject items in the queue (mark as SPAM)
	 *
	 * @param  object $entity model object for the entity in question
	 * @param  mixed $optional_data optional data stored with the item when moderated as spam
	 * @return void
	 */
	public function reject($entity, $optional_data);
}
