document.body.onload = () => {
  chrome.storage.sync.get('search', (items) => {
    if (!chrome.runtime.error) {
      console.log(items)
      document.getElementById('search').value = items.search
    } else {
      console.log('Runtime error.');
    }
  });

  chrome.storage.sync.get('method', (items) => {
    if (!chrome.runtime.error) {
      console.log(items)
      document.getElementById('display').value = items.method
    } else {
      console.log('Runtime error.');
    }
  });
}

document.getElementById('set').onclick = () => {
  let method = document.getElementById('display').value
  let replace = document.getElementById('search').value

  chrome.storage.sync.set({ 'method' : method }, () => {
    if (chrome.runtime.error) {
      console.log('Runtime error.');
    }
  });

  chrome.storage.sync.set({ 'search' : replace }, () => {
    if (chrome.runtime.error) {
      console.log('Runtime error.');
    }
  });

  alert('Saved Settings')
  window.close();
}
