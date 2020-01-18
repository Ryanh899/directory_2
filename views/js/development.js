
$('.search-input').focus(function(){
  $(this).parent().addClass('focus');
}).blur(function(){
  $(this).parent().removeClass('focus');
})

$('.sticky')
  .sticky({
    context: '#page-container'
  })
;

$('.menu .item')
  .tab()
;

$('.logo-images')
  .popup()
;

$( document ).ready(function() {
  axios.get('http://localhost:3001/api/test')
    .then(test => {
      console.log(test); 
    })
    .catch(err => console.log(err))
});

