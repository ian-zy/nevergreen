import React, {Component} from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import _ from 'lodash'
import styles from './input.scss'

class Input extends Component {

  onEnter = (evt) => {
    if (evt.key === 'Enter' && this.props.onEnter) {
      this.props.onEnter(evt)
    }
  }

  render() {
    const inputProps = _.omit(this.props, ['children', 'onEnter', 'className'])
    const labelClasses = classNames(styles.label, this.props.type, this.props.className)

    return (
      <label className={labelClasses}>
        <span className={styles.description}>{this.props.children}</span>
        <input className={styles.input} onKeyPress={this.onEnter} spellCheck={false} autoComplete='off' {...inputProps}
               tabIndex={this.props.readOnly ? -1 : 0}/>
        {this.props.readOnly ? <i className={styles.locked} title='read only'/> : null}
      </label>
    )
  }
}

Input.defaultProps = {
  type: 'text'
}

Input.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element
  ]).isRequired,
  type: PropTypes.string,
  onEnter: PropTypes.func,
  className: PropTypes.string,
  readOnly: PropTypes.bool
}

export default Input
