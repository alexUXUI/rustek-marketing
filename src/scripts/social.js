`use strict`

module.exports = e;

var e = {}

e.igHover = () => {
  $('.instagram').hover(() => {
    $(this).toggleClass('insta-bg-hover')
    console.log('insta hovered');
    $('#instagram').toggleClass('social-hover')
  })
}

e.fbHover = () => {
  $('.fb').hover(()=> {
    $("#f").toggleClass('social-hover')
  })
}

e.igHover()
e.fbHover()
