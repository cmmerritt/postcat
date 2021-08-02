export const fetchService = async (url, method, reqText) => {
  let res;
  if(method !== 'GET') {
    res = await fetch(url, { 
      method,
      headers: {
        'Content-Type': 'application/json'
      },
      reqText: JSON.stringify(reqText)
    });
  } 
  else {
    res = await fetch(url, {
      method
    });
  }
  const json = await res.json();
  return json;
};
