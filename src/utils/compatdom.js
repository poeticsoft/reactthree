

const _jslib_isIE=document.all?true:false;
const _jslib_isNS=document.layers?true:false;
const _jslib_isNS6=document.getElementById&&!document.all?true:false;

export const getElementById = id => {

  if(_jslib_isIE) {
      return document.all[id];
  } else if(_jslib_isNS) {
      return document.layers[id];
  } else if (_jslib_isNS6) {
      return document.getElementById(id);
  }
  
  return null;
}

export const addClass = (id, addclass) =>  {

  const elem = getElementById(id)

  let classes = elem.className.split(' ')
  classes.push(addclass)
  elem.className = classes.join(' ')
}

export const removeClass = (id, removeclass) =>  {

  const elem = getElementById(id)

  let classes = elem.className.split(' ')
  classes = classes.filter(c => c != removeclass)
  elem.className = classes.join(' ')
}

export const readDeviceOrientation = () => {
  
  const w = window.innerWidth
    || document.documentElement.clientWidth
    || document.body.clientWidth
  const h = window.innerHeight
    || document.documentElement.clientHeight
    || document.body.clientHeight

  return w <= h ? 'portrait' : 'landscape'
}

export const removeElement = id =>  {

  const elem = getElementById(id)
  elem.parentNode.removeChild(elem)
}