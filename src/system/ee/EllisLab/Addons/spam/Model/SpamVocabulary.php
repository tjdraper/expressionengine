<?php
/**
 * ExpressionEngine (https://expressionengine.com)
 *
 * @link      https://expressionengine.com/
 * @copyright Copyright (c) 2003-2017, EllisLab, Inc. (https://ellislab.com)
 * @license   https://expressionengine.com/license
 */

namespace EllisLab\Addons\Spam\Model;

use EllisLab\ExpressionEngine\Service\Model\Model;

/**
 * SpamVocabulary Model
 */
class SpamVocabulary extends Model {

	protected static $_table_name = 'spam_vocabulary';
	protected static $_primary_key = 'vocabulary_id';

	protected static $_relationships = array(
		'Kernel' => array(
			'type' => 'belongsTo',
			'model' => 'SpamKernel',
			'to_key' => 'kernel_id'
		)
	);

	protected $vocabulary_id;
	protected $kernel_id;
	protected $term;
	protected $count;

}

// EOF
