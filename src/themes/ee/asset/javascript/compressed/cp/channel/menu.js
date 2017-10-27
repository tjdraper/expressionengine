/**
 * ExpressionEngine (https://expressionengine.com)
 *
 * @link      https://expressionengine.com/
 * @copyright Copyright (c) 2003-2017, EllisLab, Inc. (https://ellislab.com)
 * @license   https://expressionengine.com/license
 */
$(document).ready(function(){function e(){var e=$("<input/>",{type:"file",name:"set_file"}),n=$("<form/>",{method:"post",action:EE.sets.importUrl,enctype:"multipart/form-data","class":"hidden"}).append($("<input/>",{type:"hidden",name:"csrf_token",value:EE.CSRF_TOKEN})).append(e);e.on("change",function(e){n.submit()}),$('a[rel="import-channel"]').click(function(n){n.preventDefault(),e.click()}).after(n)}e()});