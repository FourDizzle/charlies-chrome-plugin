let settings = {
  query: {
    el: null,
    changed: false,
    isLoaded: false,
    get: getReplacementSearchQuery,
    value: null,
  },
  method: {
    el: null,
    changed: false,
    isLoaded: false,
    get: getDisplayMethod,
    value: null,
  },
  isLoaded: false,
}

let checkLoadStatus = () => {
  if (settings.query.isLoaded && settings.method.isLoaded) {
    settings.isLoaded = true
    emitEvent(document.body, 'finish-load')
  }
}

let addChangeListener = item => {
  settings[item].el.addEventListener('change', (e) => {
    settings[item].changed = true
    settings[item].value = settings[item].el.value
  })
}

let loadSetting = item => {
  settings[item].get(val => {
    if (!settings[item].changed) {
      settings[item].el.value = val
      settings[item].value = val
    }
    settings[item].isLoaded = true
    checkLoadStatus()
  })
}

let saveData = e => {
  setReplacementSearchQuery(settings.query.el.value)
  setDisplayMethod(settings.method.el.value)
  alert('Saved Settings')
  window.close()
}

document.body.onload = () => {
  settings.query.el = document.getElementById('search')
  settings.method.el = document.getElementById('display')

  addChangeListener('query')
  addChangeListener('method')

  loadSetting('query')
  loadSetting('method')

  document.getElementById('set').onclick = e => {
    if (settings.isLoaded) {
      saveData(e)
    } else {
      document.body.addEventListener('finish-load', e => saveData(e))
    }
  }
}
