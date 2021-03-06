import {PENDING_REQUESTS_ROOT} from './reducers/PendingRequestsReducer'
import {EXPORT_ROOT} from './reducers/ExportReducer'
import {GITHUB_ROOT} from './reducers/GitHubReducer'
import {IMPORT_ROOT} from './reducers/ImportReducer'
import {NEVERGREEN_ROOT} from './reducers/NevergreenReducer'
import {NOTIFICATION_ROOT} from './reducers/NotificationReducer'
import {PROJECTS_ROOT} from './reducers/ProjectsReducer'
import {SELECTED_ROOT} from './reducers/SelectedReducer'
import {SETTINGS_ROOT} from './reducers/SettingsReducer'
import {INTERESTING_ROOT} from './reducers/InterestingReducer'
import {SUCCESS_ROOT} from './reducers/SuccessReducer'
import {SHORTCUT_ROOT} from './reducers/ShortcutReducer'
import {TRAYS_ROOT} from './reducers/TraysReducer'

export function loaded(state) {
  return state.getIn([NEVERGREEN_ROOT, 'loaded'])
}

export function fullScreen(state) {
  return state.getIn([NEVERGREEN_ROOT, 'fullScreen'])
}

export function fullScreenRequested(state) {
  return state.getIn([NEVERGREEN_ROOT, 'fullScreenRequested'])
}

export function showTrayName(state) {
  return state.getIn([SETTINGS_ROOT, 'showTrayName'])
}

export function showBuildTime(state) {
  return state.getIn([SETTINGS_ROOT, 'showBuildTime'])
}

export function showBrokenBuildTime(state) {
  return state.getIn([SETTINGS_ROOT, 'showBrokenBuildTime'])
}

export function playBrokenBuildSoundFx(state) {
  return state.getIn([SETTINGS_ROOT, 'playBrokenBuildSoundFx'])
}

export function showBuildLabel(state) {
  return state.getIn([SETTINGS_ROOT, 'showBuildLabel'])
}

export function showSystemNotifications(state) {
  return state.getIn([SETTINGS_ROOT, 'showSystemNotifications'])
}

export function systemNotificationRequestingPermission(state) {
  return state.getIn([SETTINGS_ROOT, 'systemNotificationRequestingPermission'])
}

export function systemNotificationPermissionDenied(state) {
  return state.getIn([SETTINGS_ROOT, 'systemNotificationPermissionDenied'])
}

export function brokenBuildSoundFx(state) {
  return state.getIn([SETTINGS_ROOT, 'brokenBuildSoundFx'])
}

export function refreshTime(state) {
  return state.getIn([SETTINGS_ROOT, 'refreshTime'])
}

export function maxProjectsToShow(state) {
  return state.getIn([SETTINGS_ROOT, 'maxProjectsToShow'])
}

export function importLoaded(state) {
  return state.getIn([IMPORT_ROOT, 'loaded'])
}

export function importErrors(state) {
  return state.getIn([IMPORT_ROOT, 'errors'])
}

export function importInfos(state) {
  return state.getIn([IMPORT_ROOT, 'infos'])
}

export function gistId(state) {
  return state.getIn([GITHUB_ROOT, 'gistId'])
}

export function gistDescription(state) {
  return state.getIn([GITHUB_ROOT, 'description'])
}

export function exportLoaded(state) {
  return state.getIn([EXPORT_ROOT, 'loaded'])
}

export function exportErrors(state) {
  return state.getIn([EXPORT_ROOT, 'errors'])
}

export function exportInfos(state) {
  return state.getIn([EXPORT_ROOT, 'infos'])
}

export function successMessages(state) {
  return state.get(SUCCESS_ROOT)
}

export function trays(state) {
  return state.get(TRAYS_ROOT).toList()
}

export function tray(state, trayId) {
  return state.getIn([TRAYS_ROOT, trayId])
}

export function trayIds(state) {
  return state.get(TRAYS_ROOT).keySeq()
}

export function trayLoaded(state, trayId) {
  return state.getIn([TRAYS_ROOT, trayId, 'loaded'])
}

export function trayName(state, trayId) {
  return state.getIn([TRAYS_ROOT, trayId, 'name'])
}

export function trayUrl(state, trayId) {
  return state.getIn([TRAYS_ROOT, trayId, 'url'])
}

export function trayUsername(state, trayId) {
  return state.getIn([TRAYS_ROOT, trayId, 'username'])
}

export function trayPassword(state, trayId) {
  return state.getIn([TRAYS_ROOT, trayId, 'password'])
}

export function trayServerType(state, trayId) {
  return state.getIn([TRAYS_ROOT, trayId, 'serverType'])
}

export function trayHighlight(state, trayId) {
  return state.getIn([TRAYS_ROOT, trayId, 'highlight'])
}

export function trayErrors(state, trayId) {
  return state.getIn([TRAYS_ROOT, trayId, 'errors'])
}

export function trayTimestamp(state, trayId) {
  return state.getIn([TRAYS_ROOT, trayId, 'timestamp'])
}

export function notification(state) {
  return state.get(NOTIFICATION_ROOT)
}

export function interestingLoaded(state) {
  return state.getIn([INTERESTING_ROOT, 'loaded'])
}

export function interestingErrors(state) {
  return state.getIn([INTERESTING_ROOT, 'errors'])
}

export function interestingProjects(state) {
  return state.getIn([INTERESTING_ROOT, 'projects'])
}

export function interestingPendingRequest(state) {
  return pendingRequest(state, INTERESTING_ROOT)
}

export function selectedProjects(state, trayId) {
  return trayId
    ? state.getIn([SELECTED_ROOT, trayId])
    : state.get(SELECTED_ROOT)
}

export function projects(state, trayId) {
  return state.getIn([PROJECTS_ROOT, trayId]).toList()
}

export function shortcut(state) {
  return state.get(SHORTCUT_ROOT)
}

export function pendingRequest(state, id) {
  return state.getIn([PENDING_REQUESTS_ROOT, id])
}
