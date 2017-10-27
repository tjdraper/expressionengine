/**
 * ExpressionEngine (https://expressionengine.com)
 *
 * @link      https://expressionengine.com/
 * @copyright Copyright (c) 2003-2017, EllisLab, Inc. (https://ellislab.com)
 * @license   https://expressionengine.com/license
 */

function NoResults (props) {
  return (
    <label className="field-empty" dangerouslySetInnerHTML={{__html: props.text}} />
  )
}
