const GOOGLE_SEARCH_URL = 'https://www.google.com/search?sxsrf=ALeKk02JCcpjzrLfFo0PyvTDWuVGvQgz4A%3A1584864229687&ei=5Rt3XvG7KeOMtgXbvpj4DQ&q='

let modifyFunctions = {}

let decodeGoogleSearchVars = (str) => {
  let decode = decodeURIComponent(str)
  decode = decode.replace(/\+/g, ' ')
  return decode;
}

let encodeGoogleSearchVars = (str) => {
  let encode = str.replace(' ', '+')
  encode = encodeURI(encode)
  return encode;
}

let makeGoogleSearchUrl = (searchTerm) => {
  let url = GOOGLE_SEARCH_URL
  url += encodeGoogleSearchVars(searchTerm)
  url += '&oq=' + encodeGoogleSearchVars(searchTerm)
  return url;
}

let addTextToElement = (el, text) => {
  el.textContent ? el.textContent = text : el.innerText = text
  return el;
}

let makePara = () => {
  let p = document.createElement('p')
  p.classList.add('p64x9c', 'card-section')
  p.setAttribute('aria-level', '3')
  p.setAttribute('role', 'heading')
  p.setAttribute('id', 'fprs')
  return p;
}

let makeSpan = (text, classes) => {
  let span = document.createElement('span')
  span.classList.add(classes)
  addTextToElement(span, text)
  return span;
}

let makeLink = (text, url, classes, id) => {
  let a = document.createElement('a')
  if (id) a.setAttribute('id', id)
  if (classes) a.classList.add(classes)
  a.setAttribute('href', url)
  a.setAttribute('data-ved', '2ahUKEwii27fOyK3oAhUEQq0KHZ6KBoIQkeECKAB6BAgPECc')

  let b = document.createElement('b')
  let i = document.createElement('i')

  addTextToElement(i, text)

  b.appendChild(i)
  a.appendChild(b)

  return a;
}

let getSearchBar = () => {
  return document.querySelectorAll('input.gLFyf.gsfi')[0]
}

let modifySearchBar = (text) => {
  let searchBar = getSearchBar()
  searchBar.value = text
}

let redirect = (correction, original) => {
  let desiredUrl = makeGoogleSearchUrl(correction) + '&prankorigterm=' + original
  console.log('URL:', desiredUrl)

  if (location.href !== desiredUrl) {
    location.replace(desiredUrl)
    return;
  }
}

let getQueryVariable = (variable) => {
       var query = window.location.search.substring(1);
       var vars = query.split("&");
       for (var i=0;i<vars.length;i++) {
               var pair = vars[i].split("=");
               if (pair[0] == variable) {
                 return decodeGoogleSearchVars(pair[1]);
               }
       }
       return(false);
}

let getReplacementSearchWord = () => {
  return REPLACE_WORD;
}
