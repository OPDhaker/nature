const prob = doucument.querySelectorAll('statsUP');
setInterval(() => {

  stats.forEach(a => {
      a.innerHTML = Number(a.innerHTML) + 1;
  })
}, 1000)