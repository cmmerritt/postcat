const METHOD = 'METHOD';
const URL = 'URL';

export function getMethod() {
  const stringyMethod = localStorage.getItem(METHOD);
  if(!stringyMethod) return [];
  const parsedMethod = JSON.parse(stringyMethod);
  console.log(parsedMethod);
  return parsedMethod;
}

export function getUrl() {
  const stringyUrl = localStorage.getItem(URL);
  if(!stringyUrl) return [];
  const parsedUrl = JSON.parse(stringyUrl);
  return parsedUrl;
}

export function setMethod(parsedMethod) {
  const methods = localStorage.getItem('METHOD');
  let methodContents;

  if(methods) {
    const currentData = JSON.parse(methods);
    methodContents = currentData;
  } else {
    methodContents = [];
  }

  methodContents.push(parsedMethod);
  const newData = JSON.stringify(methodContents);
  localStorage.setItem('METHOD', newData);
}

export function setUrl(parsedUrl) {
  const urls = localStorage.getItem('URL');
  let urlContents;

  if(urls) {
    const currentData = JSON.parse(urls);
    urlContents = currentData;
  } else {
    urlContents = [];
  }

  urlContents.push(parsedUrl);
  const newData = JSON.stringify(urlContents);
  localStorage.setItem('URL', newData);
}
