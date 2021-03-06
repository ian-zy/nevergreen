import _ from 'lodash'
import {Set} from 'immutable'

export function isNumber(val) {
  if (_.isNumber(val)) {
    return true
  }

  if (isBlank(val)) {
    return false
  }

  return !_.isNaN(_.toNumber(val))
}

export function isBlank(s) {
  return _.isString(s) ? _.isEmpty(_.trim(s)) : true
}

export function randomFrom(arr) {
  return _.sample(arr)
}

export function notEmpty(val) {
  return !_.isEmpty(val)
}

export function notEqual(val, other) {
  return !_.isEqual(val, other)
}

export function keyIn(...keys) {
  const keySet = Set(keys)
  return (v, k) => {
    return keySet.has(k)
  }
}
