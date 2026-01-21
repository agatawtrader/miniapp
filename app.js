const tg = window.Telegram.WebApp;
tg.expand();

let step = 1;

document.getElementById("btn").onclick = () => {
  step++;

  document.querySelectorAll(".step").forEach((el, i) => {
    el.classList.toggle("active", i < step);
  });

  if (step > 4) {
    tg.sendData("acesso_finalizado");
    tg.close();
  }
};
