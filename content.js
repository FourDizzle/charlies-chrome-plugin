let doPrank = (correction, modifyPageFn) => {
  console.log('fun', modifyPageFn)
  let shouldDoPrank = getQueryVariable('doprank')
  if (shouldDoPrank === 'false') {
    return;
  }

  console.log('replacing with:', SETTINGS.replaceWord, new Date())
  console.log('modifing with:', SETTINGS.modifyFn, new Date())

  let original = getQueryVariable('prankorigterm')

  let searchTerm = getQueryVariable('q')
  if (searchTerm !== correction) {
    redirect(correction, searchTerm)
  } else if (original) {
    document.addEventListener("DOMContentLoaded", function(){
      modifyPageFn(correction, original)
    });
  }
}

if (hasFinishedLoading) {
  doPrank(SETTINGS.replaceWord, modifyFunctions[SETTINGS.modifyFn])
} else {
  window.addEventListener('finish-load', function (e) {
    doPrank(SETTINGS.replaceWord, modifyFunctions[SETTINGS.modifyFn])
  }, false);
}
