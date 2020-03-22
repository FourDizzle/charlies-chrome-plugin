let makeShowResultsFor = (correction, original) => {
  let p = makePara()

  let span = makeSpan('Showing results for ', ['gL9Hy'])
  span.style.fontSize = '18px'

  let correctionUrl = makeGoogleSearchUrl(correction) + '&doprank=false'
  let link = makeLink(correction, correctionUrl, ['gL9Hy'], 'fprsl')
  link.style.fontSize = '18px'

  p.appendChild(span)
  p.appendChild(link)

  p.appendChild(document.createElement('br'))

  let lilSpan = makeSpan('Search instead for ', ['spell_orig'])
  lilSpan.style.fontSize = '15px'

  let origUrl = makeGoogleSearchUrl(original) + '&doprank=false'
  let lilLink = makeLink(original, origUrl, ['spell_orig'])
  lilLink.style.fontSize = '15px'

  p.appendChild(lilSpan)
  p.appendChild(lilLink)
  p.appendChild(document.createElement('br'))

  return p;
}

let removeShowResultsFor = (insertPoint) => {
  let origDidYouMean = insertPoint.querySelector('p#fprs')

  if (origDidYouMean) {
    origDidYouMean.parentNode.removeChild(origDidYouMean)
  }
}

let replaceShowResultsFor = (correction, original) => {
  let taw = document.querySelectorAll('div#taw')[0]
  let insertPoint = taw.querySelector('div.med')

  removeShowResultsFor(insertPoint)

  let insertCard = makeShowResultsFor(correction, original)
  insertPoint.insertBefore(insertCard, insertPoint.childNodes[0])
}

let addShowResultsFor = (correction, original) => {
  modifySearchBar(correction)
  replaceShowResultsFor(correction, original)
}

DISPLAY_METHODS.showResultsFor = addShowResultsFor
