`use strict`

module.exports = e;

var e = {}

e.igHover = () => {
  $('.instagram').hover(() => {
    $(this).toggleClass('insta-bg-hover')
    $('#instagram').toggleClass('social-hover')
  })
}

e.fbHover = () => {
  $('.fb').hover(()=> {
    $("#f").toggleClass('social-hover')
  })
}

e.addToolTips = () => {
  return $('[data-toggle="tooltip"]').tooltip()
}

e.igHover()
e.fbHover()
e.addToolTips()
