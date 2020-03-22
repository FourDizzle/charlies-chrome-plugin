
let makeDidYouMean = (text) => {
  let p = document.createElement('p')
  p.classList.add('gqLncc', 'card-section')
  p.setAttribute('aria-level', '3')
  p.setAttribute('role', 'heading')

  let span = document.createElement('span')
  span.classList.add('gL9Hy', 'd2IKib')
  span.style.color = '#dd4b39'
  span.style.fontSize = '18px'
  addTextToElement(span, 'Did you mean: ')

  let url = makeGoogleSearchUrl(text) + '&doprank=false'
  let a = makeLink(text, url, ['gL9Hy'])
  a.style.fontSize = '18px'

  p.appendChild(span)
  p.appendChild(a)

  return p;
}

let removeDidYouMean = (insertPoint) => {
  let origDidYouMean = insertPoint.querySelector('p#gqLncc')

  if (origDidYouMean) {
    origDidYouMean.parentNode.removeChild(origDidYouMean)
  }
}

let replaceDidYouMean = (correction, original) => {
  let taw = document.querySelectorAll('div#taw')[0]
  let insertPoint = taw.querySelector('div.med')

  removeDidYouMean(insertPoint)

  let insertCard = makeDidYouMean(original)
  insertPoint.insertBefore(insertCard, insertPoint.childNodes[0])
}

let addDidYouMean = (correction, original) => {
  modifySearchBar(correction)
  replaceDidYouMean(correction, original)
}

modifyFunctions.didYouMean = addDidYouMean
