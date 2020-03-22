let doPrank = (correction, modifyPageFn) => {

  let shouldDoPrank = getQueryVariable('doprank')
  if (shouldDoPrank === 'false') {
    return;
  }

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

doPrank(getReplacementSearchWord(), modifyFunctions[MODIFY_FN])
