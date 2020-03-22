const DEFAULT_QUERY = 'You\'ve been pranked!'
const DEFAULT_METHOD = 'showResultsFor'

chrome.runtime.onInstalled.addListener(() => {
  setReplacementSearchQuery(DEFAULT_QUERY)
  setDisplayMethod(DEFAULT_METHOD)
})
