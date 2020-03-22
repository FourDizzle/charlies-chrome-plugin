let settings = {
  query: {
    el: null,
    changed: false,
    isLoaded: false,
    get: getReplacementSearchQuery,
    value: null,
    id: 'search',
  },
  method: {
    el: null,
    changed: false,
    isLoaded: false,
    get: getDisplayMethod,
    value: null,
    id: 'display',
  },
  image: {
    el: null,
    changed: false,
    isLoaded: false,
    get: getImageSearch,
    value: null,
    id: 'imgsearch',
  }
}

let isEverythingLoaded = false

let checkLoadStatus = () => {
  let loadStatus = true
  Object.keys(settings).map(item => { if (!settings[item].isLoaded) loadStatus = false })
  if (loadStatus) {
    isEverythingLoaded = true
    emitEvent(document.body, 'finish-load')
  }
}

let addChangeListener = item => {
  settings[item].el.addEventListener('change', (e) => {
    settings[item].changed = true
    if (settings[item].el.checked) {
      settings[item].value = settings[item].el.click
    } else {
      settings[item].value = settings[item].el.value
    }
  })
}

let loadSetting = item => {
  settings[item].get(val => {
    let attr = (settings[item].el.type === 'checkbox') ? 'checked' : 'value'
    if (!settings[item].changed) {]
      settings[item].el[attr] = val
      settings[item].value = val
    }
    settings[item].isLoaded = true
    checkLoadStatus()
  })
}

let saveData = e => {
  setReplacementSearchQuery(settings.query.el.value)
  setDisplayMethod(settings.method.el.value)
  setImageSearch(settings.image.el.checked)
  alert('Saved Settings')
  window.close()
}

document.body.onload = () => {
  Object.keys(settings).map(item => {
    settings[item].el = document.getElementById(settings[item].id)
    addChangeListener(item)
    loadSetting(item)
  })

  document.getElementById('set').onclick = e => {
    if (isEverythingLoaded) {
      saveData(e)
    } else {
      document.body.addEventListener('finish-load', e => saveData(e))
    }
  }
}
