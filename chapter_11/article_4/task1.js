new Promise(function(resolve, reject) {
    setTimeout(() => {
      throw new Error("Whoops!");
    }, 1000);
  }).catch(alert);
  // нет не выполнится
  //ошибка генерируется не по ходу выполнения кода
  //а позже и промис не может ее обработать