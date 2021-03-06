import {isBlank} from './Utils'
import _ from 'lodash'
import {info} from './Logger'

const NOTIFICATION_PERMISSION_GRANTED = 'granted'
const NOTIFICATION_PERMISSION_DENIED = 'denied'

export function supported() {
  return 'Notification' in window
}

export function permissionGranted(result) {
  if (isBlank(result)) {
    return _.get(Notification, 'permission') === NOTIFICATION_PERMISSION_GRANTED
  } else {
    return result === NOTIFICATION_PERMISSION_GRANTED
  }
}

export async function requestPermission() {
  if (permissionGranted()) {
    info('Notification API permission already granted')
    return NOTIFICATION_PERMISSION_GRANTED
  }

  if (supported()) {
    const result = await Notification.requestPermission()
    info('Notification API permission request result', result)
    return result
  }

  info('Notification API not supported')
  return NOTIFICATION_PERMISSION_DENIED
}

export async function sendSystemNotification({title = 'Nevergreen', body, badge = '/mstile-144x144.png', icon = '/android-chrome-192x192.png', tag}) {
  if (supported() && permissionGranted()) {
    const registration = await navigator.serviceWorker.ready
    return registration.showNotification(title, {body, badge, icon, tag})
  }
}
