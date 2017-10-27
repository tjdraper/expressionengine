<?php
/**
 * ExpressionEngine (https://expressionengine.com)
 *
 * @link      https://expressionengine.com/
 * @copyright Copyright (c) 2003-2017, EllisLab, Inc. (https://ellislab.com)
 * @license   https://expressionengine.com/license
 */

/**
 * Installer Session
 */
class Installer_Session {

	public $userdata = array();

	public function cache($class, $key, $default = FALSE)
	{
		return FALSE;
	}

	public function set_cache($class, $key, $val)
	{
		return $this;
	}

	public function userdata($which, $default = FALSE)
	{
		return ( ! isset($this->userdata[$which])) ? $default : $this->userdata[$which];
	}

	public function session_id($which = '')
	{
		return 0;
	}
}
// END CLASS

// EOF
