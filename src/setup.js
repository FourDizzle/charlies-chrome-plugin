const SETTINGS = {
  replaceWord: 'something funny',
  modifyFn: 'showResultsFor',
  imageSearch: false,
}

let DISPLAY_METHODS = {}

let hasFinishedLoading = false

getReplacementSearchQuery(query => {
  SETTINGS.replaceWord = query
  getDisplayMethod(method => {
    SETTINGS.modifyFn = method
    getImageSearch(img => {
      SETTINGS.imageSearch = img

      // Override imageSearch settings since the rest doesnt work
      SETTINGS.imageSearch = false
      // End Override
      
      hasFinishedLoading = true
      emitEvent(document.body, 'finish-load')
    })
  })
})
