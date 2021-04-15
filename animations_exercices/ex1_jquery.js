const randomWord = [
  'Janvier',
  'Février',
  'Mars',
  'Avril',
  'Mai',
  'Juin',
  'Juillet',
  'Août',
  'Septembre',
  'Octobre',
  'Novembre',
  'Décembre'
];

$(document).ready(() => {
  let timeOut;

  function animate() {
    if($("div").text() == "") {
      changeColorAndText();
    }
    else {
      clearTimeout(timeOut);
      changeColorAndText();

      // move from left to right, then fade out
      $('div').animate({
        left: "200px"
      }).fadeOut();

      timeOut = setTimeout(() => {
        changeColorAndText();
        $('div').css('left', '0px');
      }, 1000);
    }

    function changeColorAndText() {
      // random color
      $('body').css('backgroundColor', `#${Math.floor(Math.random()*16777215).toString(16)}`);
      // random word
      $('div').text(randomWord[Math.floor(Math.random()*13)]).fadeIn();
    }
  }

  $('button').click(animate);
});