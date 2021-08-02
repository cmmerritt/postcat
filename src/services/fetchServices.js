export const fetchService = (url, method, reqText) => {
  if(method !== 'GET') {
    return fetch(url, { 
      method,
      headers: {
        'Content-Type': 'application/json'
      },
      reqText
    })
      .then(res => res.json());
  } 
  return fetch(url)
    .then(res => res.json());
};
