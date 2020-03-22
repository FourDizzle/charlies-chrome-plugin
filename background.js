chrome.runtime.onInstalled.addListener(() => {

  chrome.storage.sync.set({ 'search' : 'You\'ve been pranked!' }, () => {
    if (chrome.runtime.error) {
      console.log('Runtime error.');
    }
  });

  chrome.storage.sync.set({ 'method' : 'didYouMean' }, () => {
    if (chrome.runtime.error) {
      console.log('Runtime error.');
    }
  });

});
