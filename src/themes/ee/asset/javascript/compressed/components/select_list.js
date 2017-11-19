"use strict";function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function FieldInputs(e){return e.nested?React.createElement("ul",{className:"field-inputs field-nested"},e.children):React.createElement("div",{className:"field-inputs"},e.children)}var _extends=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},_createClass=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),SelectList=function(e){function t(e){_classCallCheck(this,t);var n=_possibleConstructorReturn(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.handleSelect=function(e,t){var r=[],l=e.target.checked,a="--";if(n.props.multi&&t.value!=a)if(l)r=n.props.selected.concat([t]).filter(function(e){return e.value!=a}),t.parent&&n.props.autoSelectParents&&(r=r.concat(n.diffItems(n.props.selected,n.getFlattenedParentsOfItem(t))));else{var i=[t];t.children&&n.props.autoSelectParents&&(i=i.concat(n.getFlattenedChildrenOfItem(t))),r=n.diffItems(i,n.props.selected)}else r=l?[t]:[];n.props.selectionChanged(r),n.props.groupToggle&&EE.cp.form_group_toggle(e.target)},n.clearSelection=function(e){n.props.selectionChanged([]),e.preventDefault()},n.filterChange=function(e,t){n.props.filterChange(e,t)},n.handleToggleAll=function(e){e?(newlySelected=n.props.items.filter(function(e){return(!n.props.disabledChoices||!n.props.disabledChoices.includes(e.value))&&(found=n.props.selected.find(function(t){return t.value==e.value}),!found)}),n.props.selectionChanged(n.props.selected.concat(newlySelected))):n.props.disabledChoices?n.props.selectionChanged(n.props.selected.filter(function(e){return n.props.disabledChoices.includes(e.value)})):n.props.selectionChanged([])},n.version=0,n}return _inherits(t,e),_createClass(t,[{key:"componentDidMount",value:function(){this.props.nestableReorder?this.bindNestable():this.props.reorderable&&this.bindSortable()}},{key:"componentDidUpdate",value:function(e,t){this.props.multi&&e.selected.length!=this.props.selected.length&&$(this.input).trigger("change"),this.props.nestableReorder&&this.bindNestable()}},{key:"bindSortable",value:function(){var e=this,t=this.props.nested?".field-nested":".field-inputs";$(t,this.container).sortable({axis:"y",containment:"parent",handle:".icon-reorder",items:this.props.nested?"> li":"label",placeholder:"field-reorder-placeholder",sort:EE.sortable_sort_helper,start:function(e,t){t.helper.addClass("field-reorder-drag")},stop:function(t,n){n.item.removeClass("field-reorder-drag").addClass("field-reorder-drop"),setTimeout(function(){n.item.removeClass("field-reorder-drop")},1e3);var r=function o(e){var t=[];return e.forEach(function(e){var n={id:e.dataset.id},r=$(e).find("> ul > [data-id]");r.size()&&(n.children=o(r.toArray())),t.push(n)}),t},l=n.item.closest(".field-inputs").find("> [data-id]").toArray(),a=e.getItemsHash(e.props.items),i=r(l);e.props.itemsChanged(e.getItemsArrayForNestable(a,i)),e.props.reorderAjaxUrl&&$.ajax({url:e.props.reorderAjaxUrl,data:{order:i},type:"POST",dataType:"json"})}})}},{key:"bindNestable",value:function(){var e=this;$(this.container).nestable({listNodeName:"ul",listClass:"field-nested",itemClass:"nestable-item",rootClass:"field-select",dragClass:"field-inputs.field-reorder-drag",handleClass:"icon-reorder",placeElement:$('<li class="field-reorder-placeholder"></li>'),expandBtnHTML:"",collapseBtnHTML:"",maxDepth:10,constrainToRoot:!0}).on("change",function(t){if($(t.target).data("nestable")){e.version++;var n=e.getItemsHash(e.props.items),r=$(t.target).nestable("serialize");e.props.itemsChanged(e.getItemsArrayForNestable(n,r)),e.props.reorderAjaxUrl&&$.ajax({url:e.props.reorderAjaxUrl,data:{order:r},type:"POST",dataType:"json"})}})}},{key:"getItemsHash",value:function(e){var t=this,n={};return e.forEach(function(e){n[e.value]=e,e.children&&(n=Object.assign(n,t.getItemsHash(e.children)))}),n}},{key:"getItemsArrayForNestable",value:function(e,t,n){var r=this,l=[];return t.forEach(function(t){var a=e[t.id],i=Object.assign({},a);i.parent=n?n:null,i.children=t.children?r.getItemsArrayForNestable(e,t.children,i):null,l.push(i)}),l}},{key:"diffItems",value:function(e,t){var n=e.map(function(e){return e.value});return t.filter(function(e){return n.every(function(t){return t!=e.value})})}},{key:"getFlattenedParentsOfItem",value:function(e){for(var t=[];e.parent;)t.push(e.parent),e=e.parent;return t}},{key:"getFlattenedChildrenOfItem",value:function(e){var t=this,n=[];return e.children.forEach(function(e){n.push(e),e.children&&(n=n.concat(t.getFlattenedChildrenOfItem(e)))}),n}},{key:"render",value:function(){var e=this,n=this.props,r=(n.multi||!n.selectable)&&n.toggleAll;return React.createElement("div",{className:"fields-select"+(t.countItems(n.items)>n.tooManyLimit?" field-resizable":""),ref:function(t){e.container=t},key:this.version},(r||n.tooMany)&&React.createElement(FieldTools,null,n.tooMany&&React.createElement(FilterBar,null,n.filters&&n.filters.map(function(t){return React.createElement(FilterSelect,{key:t.name,name:t.name,title:t.title,placeholder:t.placeholder,items:t.items,onSelect:function(n){return e.filterChange(t.name,n)}})}),React.createElement(FilterSearch,{onSearch:function(t){return e.filterChange("search",t.target.value)}})),r&&n.tooMany&&React.createElement("hr",null),r&&React.createElement(FilterToggleAll,{checkAll:n.toggleAll,onToggleAll:function(t){return e.handleToggleAll(t)}})),React.createElement(FieldInputs,{nested:n.nested},!n.loading&&0==n.items.length&&React.createElement(NoResults,{text:n.noResults}),n.loading&&React.createElement(Loading,{text:EE.lang.loading}),!n.loading&&n.items.map(function(t,r){return React.createElement(SelectItem,{key:t.value?t.value:t.section,item:t,name:n.name,selected:n.selected,disabled:n.disabledChoices&&n.disabledChoices.includes(t.value),multi:n.multi,nested:n.nested,selectable:n.selectable,reorderable:n.reorderable,removable:n.removable&&(!n.unremovableChoices||!n.unremovableChoices.includes(t.value)),editable:n.editable,handleSelect:e.handleSelect,handleRemove:function(e,t){return n.handleRemove(e,t)},groupToggle:n.groupToggle})})),!n.multi&&n.tooMany&&n.selected[0]&&React.createElement(SelectedItem,{name:n.name,item:n.selected[0],clearSelection:this.clearSelection}),n.multi&&n.selectable&&0==n.selected.length&&React.createElement("input",{type:"hidden",name:n.name+"[]",value:"",ref:function(t){e.input=t}}),n.selectable&&n.selected.map(function(t){return React.createElement("input",{type:"hidden",key:t.value,name:n.multi?n.name+"[]":n.name,value:t.value,ref:function(t){e.input=t}})}))}}],[{key:"formatItems",value:function(e,n,r){if(!e)return[];var l=[],a=!0,i=!1,o=void 0;try{for(var s,c=Object.keys(e)[Symbol.iterator]();!(a=(s=c.next()).done);a=!0)if(key=s.value,e[key].section)l.push({section:e[key].section,label:""});else{var u=r?e[key]:key,d={value:e[key].value?e[key].value:u,label:void 0!==e[key].label?e[key].label:e[key],instructions:e[key].instructions?e[key].instructions:"",children:null,parent:n?n:null};e[key].children&&(d.children=t.formatItems(e[key].children,d)),l.push(d)}}catch(p){i=!0,o=p}finally{try{!a&&c["return"]&&c["return"]()}finally{if(i)throw o}}return l}},{key:"countItems",value:function(e){return e.length+e.reduce(function(e,n){return n.children?e+t.countItems(n.children):e},0)}}]),t}(React.Component);SelectList.defaultProps={reorderable:!1,nestableReorder:!1,removable:!1,selectable:!0,tooManyLimit:8,toggleAllLimit:3};var SelectItem=function(e){function t(){return _classCallCheck(this,t),_possibleConstructorReturn(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return _inherits(t,e),_createClass(t,[{key:"checked",value:function(e){return this.props.selected.find(function(t){return t.value==e})}},{key:"render",value:function(){var e=this.props,n=this.checked(e.item.value);if(e.item.section)return React.createElement("div",{className:"field-group-head",key:e.item.section},e.item.section);var r=React.createElement("label",{className:n?"act":"","data-id":e.reorderable&&!e.nested?e.item.value:null},e.reorderable&&React.createElement("span",{className:"icon-reorder"}," "),e.selectable&&React.createElement("input",{type:e.multi?"checkbox":"radio",value:e.item.value,onChange:function(t){return e.handleSelect(t,e.item)},checked:n?"checked":"","data-group-toggle":e.groupToggle?JSON.stringify(e.groupToggle):"[]",disabled:e.disabled?"disabled":""}),e.editable&&React.createElement("a",{href:"#"},e.item.label),!e.editable&&e.item.label," ",e.item.instructions&&React.createElement("i",null,e.item.instructions),e.removable&&React.createElement("ul",{className:"toolbar"},React.createElement("li",{className:"remove"},React.createElement("a",{href:"",onClick:function(t){return e.handleRemove(t,e.item)}}))));return e.nested?React.createElement("li",{className:"nestable-item","data-id":e.item.value},r,e.item.children&&React.createElement("ul",{className:"field-nested"},e.item.children.map(function(n,r){return React.createElement(t,_extends({},e,{key:n.value,item:n,handleRemove:function(t,n){return e.handleRemove(t,n)}}))}))):r}}]),t}(React.Component),SelectedItem=function(e){function t(){return _classCallCheck(this,t),_possibleConstructorReturn(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return _inherits(t,e),_createClass(t,[{key:"componentDidUpdate",value:function(e,t){e.item.value!=this.props.item.value&&$(this.input).trigger("change")}},{key:"render",value:function(){var e=this,t=this.props;return React.createElement("div",{className:"field-input-selected"},React.createElement("label",null,React.createElement("span",{className:"icon--success"})," ",t.item.label,React.createElement("input",{type:"hidden",name:t.name,value:t.item.value,ref:function(t){e.input=t}}),React.createElement("ul",{className:"toolbar"},React.createElement("li",{className:"remove"},React.createElement("a",{href:"",onClick:t.clearSelection})))))}}]),t}(React.Component);