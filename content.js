let doPrank = (correction, modifyPageFn) => {
  if (getQueryVariable('doprank') === 'false') return;

  let original = getQueryVariable('prankorigterm')

  let searchTerm = getQueryVariable('q')
  if (searchTerm !== correction) {
    redirect(correction, searchTerm)
  } else if (original) {
    document.addEventListener("DOMContentLoaded", () => {
      modifyPageFn(correction, original)
    })
  }
}

if (hasFinishedLoading) {
  doPrank(SETTINGS.replaceWord, modifyFunctions[SETTINGS.modifyFn])
} else {
  window.addEventListener('finish-load', function (e) {
    doPrank(SETTINGS.replaceWord, modifyFunctions[SETTINGS.modifyFn])
  }, false)
}
