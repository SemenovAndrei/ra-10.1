import {
  SERVICE_ADD,
  SERVICE_REMOVE,
  SERVICE_CLEAR_FIELD,
  SERVICE_CHANGE_FIELD,
} from '../actions/actionTypes'

export function serviceAdd(name, price) {
  return { type: SERVICE_ADD, payload: { name, price } }
}

export function serviceRemove(id) {
  return { type: SERVICE_REMOVE, payload: { id } }
}

export function serviceChangeField(name, value) {
  return { type: SERVICE_CHANGE_FIELD, payload: { name, value } }
}

export function serviceClearField() {
  return { type: SERVICE_CLEAR_FIELD }
}
