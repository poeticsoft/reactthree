export const getYoutubeId = url => {

  var regExp = /^.*(?:youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=)([^#\&\?]{11,11}).*/
  var match = url.match(regExp)
  return match ? match[1] : null
}