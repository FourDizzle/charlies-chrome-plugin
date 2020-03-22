const SETTINGS = {
  replaceWord: 'something funny',
  modifyFn: 'showResultsFor',
}

let DISPLAY_METHODS = {}

let hasFinishedLoading = false

getReplacementSearchQuery(query => {
  SETTINGS.replaceWord = query
  getDisplayMethod(method => {
    SETTINGS.modifyFn = method
    hasFinishedLoading = true
    emitEvent(document.body, 'finish-load')
  })
})
