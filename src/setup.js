const SETTINGS = {
  replaceWord: 'something funny',
  modifyFn: 'showResultsFor',
}

let hasFinishedLoading = false

let emitFinishedLoadEvent = () => {
  console.log('FINISHED')
  hasFinishedLoading = true
  let event = document.createEvent('Event');
  event.initEvent('finish-load', true, true);
  document.body.dispatchEvent(event);
}

let getSearchReplacement = (callback) => {
  chrome.storage.sync.get('search', items => {
    if (!chrome.runtime.error) {
      console.log('FROM STORAGE:', items.search, new Date());
      SETTINGS.replaceWord = items.search
      if (typeof callback === 'function') callback()
    }
  })
}

let getDisplayMethod = (callback) => {
  chrome.storage.sync.get('method', (items) => {
    if (!chrome.runtime.error) {
      console.log('FROM STORAGE:', items.method, new Date());
      SETTINGS.modifyFn = items.method;
      if (typeof callback === 'function') callback()
    }
  })
}

// gets saved search replacement then display method then emits finish-load event
getSearchReplacement(getDisplayMethod.bind(null, emitFinishedLoadEvent))
