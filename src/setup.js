const SETTINGS = {
  replaceWord: 'something funny',
  modifyFn: 'showResultsFor',
}

let hasFinishedLoading = false

getReplacementSearchQuery(query => {
  SETTINGS.replaceWord = query
  getDisplayMethod(method => {
    SETTINGS.modifyFn = method
    hasFinishedLoading = true
    emitEvent(document.body, 'finish-load')
  })
})
