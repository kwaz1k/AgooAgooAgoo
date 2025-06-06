import { contextBridge, ipcRenderer } from 'electron'
import { electronAPI } from '@electron-toolkit/preload'

const api = {
  foo: (data) => ipcRenderer.invoke('sendSignal', data),
  getPartners: () => ipcRenderer.invoke('partners'),
  getCount: (id) => ipcRenderer.invoke('getCount', id),
  createPartners: (data) => ipcRenderer.invoke('createPartners', data),
  updatePartners: (data) => ipcRenderer.invoke('updatePartners', data)
}

if (process.contextIsolated) {
  try {
    contextBridge.exposeInMainWorld('electron', electronAPI)
    contextBridge.exposeInMainWorld('api', api)
  } catch (error) {
    console.error(error)
  }
} else {
  window.electron = electronAPI
  window.api = api
}
