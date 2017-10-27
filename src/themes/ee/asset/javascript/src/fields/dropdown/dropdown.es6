/**
 * ExpressionEngine (https://expressionengine.com)
 *
 * @link      https://expressionengine.com/
 * @copyright Copyright (c) 2003-2017, EllisLab, Inc. (https://ellislab.com)
 * @license   https://expressionengine.com/license
 */

class Dropdown extends React.Component {
  static defaultProps = {
    tooMany: 8
  }

  constructor (props) {
    super(props)

    this.state = {
      selected: this.getItemForSelectedValue(props.selected),
      open: false
    }
  }

  static renderFields(context) {
    $('div[data-dropdown-react]', context).each(function () {
      let props = JSON.parse(window.atob($(this).data('dropdownReact')))
      props.name = $(this).data('inputValue')
      ReactDOM.render(React.createElement(FilterableDropdown, props, null), this)
    })
  }

  selectionChanged = (selected) => {
    this.setState({
      selected: selected,
      open: false
    })

    if (this.props.groupToggle) {
      EE.cp.form_group_toggle(this.input)
    }
  }

  componentDidUpdate (prevProps, prevState) {
    if (( ! prevState.selected && this.state.selected) ||
        (prevState.selected && prevState.selected.value != this.state.selected.value)
      ) {

      if (this.props.groupToggle) {
        EE.cp.form_group_toggle(this.input)
      }

      $(this.input).trigger('change')
    }
  }

  componentDidMount () {
    if (this.props.groupToggle) {
      EE.cp.form_group_toggle(this.input)
    }
  }

  toggleOpen = () => {
    this.setState((prevState, props) => ({
      open: ! prevState.open
    }))
  }

  getItemForSelectedValue (value) {
    return this.props.initialItems.find(item => {
      return String(item.value) == String(value)
    })
  }

  handleSearch(searchTerm) {
    this.props.filterChange('search', searchTerm)
  }

  render () {
    let tooMany = this.props.items.length > this.props.tooMany && ! this.state.loading

    return (
      <div className={"fields-select-drop" + (tooMany ? ' field-resizable' : '')}>
        <div className={"field-drop-selected" + (this.state.open ? ' field-open' : '')} onClick={this.toggleOpen}>
          <label className={this.state.selected ? 'act' : ''}>
            <i>{this.state.selected ? this.state.selected.label : this.props.emptyText}</i>
            <input type="hidden"
              ref={(input) => { this.input = input }}
              name={this.props.name}
              value={this.state.selected ? this.state.selected.value : ''}
              data-group-toggle={this.props.groupToggle ? JSON.stringify(this.props.groupToggle) : '[]'}
            />
          </label>
        </div>
        <div className="field-drop-choices" style={this.state.open ? {display: 'block'} : {}}>
          {this.props.initialItems.length > this.props.tooMany &&
            <FieldTools>
              <FilterBar>
                <FilterSearch onSearch={(e) => this.handleSearch(e.target.value)} />
              </FilterBar>
            </FieldTools>
          }
          <div className="field-inputs">
            {this.props.items.length == 0 &&
              <NoResults text={this.props.noResults} />
            }
            {this.state.loading &&
              <Loading text={EE.lang.loading} />
            }
            {this.props.items.map((item) =>
              <DropdownItem key={item.value ? item.value : item.section} item={item} onClick={(e) => this.selectionChanged(item)} />
            )}
          </div>
        </div>
      </div>
    )
  }
}

function DropdownItem (props) {
  var item = props.item

  if (item.section) {
    return (
      <div className="field-group-head">
        {item.section}
      </div>
    )
  }

  return (
    <label onClick={props.onClick}>
      {item.label} {item.instructions && <i>{item.instructions}</i>}
    </label>
  )
}

$(document).ready(function () {
  Dropdown.renderFields()

  // Close when clicked elsewhere
  $(document).on('click',function(e) {
    $('.field-drop-selected.field-open')
      .not($(e.target).parents('.fields-select-drop').find('.field-drop-selected.field-open'))
      .click()
  })
})

Grid.bind('select', 'display', function(cell) {
  Dropdown.renderFields(cell)
});

FluidField.on('select', 'add', function(field) {
  Dropdown.renderFields(field)
});

const FilterableDropdown = makeFilterableComponent(Dropdown)
