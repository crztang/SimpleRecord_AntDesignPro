import request from '@/utils/request'
import store from '@/store'

const api = {
  add: '/recordBook',
  del: '/recordBook/',
  edit: '/recordBook/',
  page: '/recordBook/page',
  list: '/recordBook'
}

export default api

export function getRecordBooksByPage (data) {
  return request({
    url: api.page,
    method: 'post',
    data
  })
}

export function addRecordBook (data) {
  store.dispatch('ResetRecordBooks')
  return request({
    url: api.add,
    method: 'post',
    data
  })
}

export function delRecordBook (id) {
  store.dispatch('ResetRecordBooks')

  return request({
    url: api.del + id,
    method: 'delete'
  })
}

export function editRecordBook (id, data) {
  store.dispatch('ResetRecordBooks')
  return request({
    url: api.edit + id,
    method: 'put',
    data
  })
}

export function getRecordBooks () {
  return request({
    url: api.list,
    method: 'get'
  })
}
