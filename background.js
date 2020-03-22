const DEFAULT_QUERY = 'You\'ve been pranked!'
const DEFAULT_METHOD = 'showResultsFor'
const DEFAULT_IMAGE = false

chrome.runtime.onInstalled.addListener(() => {
  setReplacementSearchQuery(DEFAULT_QUERY)
  setDisplayMethod(DEFAULT_METHOD)
  setImageSearch(DEFAULT_IMAGE)
})
