import request from 'superagent'
import * as log from '../Logger'
import _ from 'lodash'
import {fromJS, isImmutable} from 'immutable'

const THIRTY_SECONDS = 1000 * 30
const THREE_MINUTES = 1000 * 60 * 60 * 3
const TIMEOUT = {
  response: THIRTY_SECONDS,
  deadline: THREE_MINUTES
}
const ACCEPT_HEADER = 'application/json; charset=utf-8'
const CONTENT_TYPE = 'application/json; charset=utf-8'

export const UNKNOWN_ERROR = 'unknown error'
export const TIMEOUT_ERROR = 'timeout'

export function post(url, data, headers = {}) {
  return request
    .post(url)
    .send(isImmutable(data) ? data.toJS() : data)
    .accept(ACCEPT_HEADER)
    .type(CONTENT_TYPE)
    .set(headers)
    .timeout(TIMEOUT)
}

export function patch(url, data, headers = {}) {
  return request
    .patch(url)
    .send(isImmutable(data) ? data.toJS() : data)
    .accept(ACCEPT_HEADER)
    .type(CONTENT_TYPE)
    .set(headers)
    .timeout(TIMEOUT)
}

export function get(url, headers = {}) {
  return request
    .get(url)
    .accept(ACCEPT_HEADER)
    .set(headers)
    .timeout(TIMEOUT)
}

export async function send(request) {
  try {
    const res = await request
    return fromJS(res.body) || res.text
  } catch (error) {
    const url = error.url || 'unknown'

    log.error(`An exception was thrown when calling URL '${url}'`, error)

    const status = error.status || 0
    const body = error.timeout
      ? TIMEOUT_ERROR
      : _.get(error, 'response.body') || error.message || UNKNOWN_ERROR

    throw new GatewayError(error.message, status, body)
  }
}

export async function fakeResponse(body) {
  return fromJS({body})
}

export function abortPendingRequest(req) {
  if (req && _.isFunction(req.abort)) {
    req.abort()
  }
}

export class GatewayError extends Error {
  constructor(message, status, body) {
    super(message)
    this.name = 'GatewayError'
    this.status = status
    this.body = fromJS(body)
  }
}
