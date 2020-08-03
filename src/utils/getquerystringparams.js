
const getQueryStringParams = text => {
  
  const querystring = window.location.search

  const params = querystring.substring(1)
                 .split('&')
                 .filter(param => param.indexOf('=') != -1)
                 .map(param => param.split('='))
                 .reduce((params, param) => {

                   params[param[0]] = param[1]
                   return params
                 }, {})

  return params 
}

export default getQueryStringParams