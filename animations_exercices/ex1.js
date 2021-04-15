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

window.addEventListener("load", () => {
  let btn = document.querySelector("button");
  let body = document.querySelector("body");
  let div = document.querySelector("div");
  let interval;

  const animate = () => {
    const changeColorAndText = () => {
      // random color
      body.style.backgroundColor = `#${Math.floor(Math.random()*16777215).toString(16)}`;
      // random word
      div.innerText = randomWord[Math.floor(Math.random()*13)];
    };

    clearInterval(interval);

    if(div.innerText == "") {
      changeColorAndText();
    }
    else {
      let left = 0;

      interval = setInterval(() => {
        if (left == 200) {
          changeColorAndText();
          div.style.left = "0px";
          clearInterval(interval);
        }
        else {
          // move from left to right
          left++;
          div.style.left = left + "px";
        }
      }, 10);
    };
  };

  btn.addEventListener("click", animate);
});