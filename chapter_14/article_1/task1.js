let user = {
    name: "John"
  };
  
  function wrap(target) {
    return new Proxy(target, {
      get(target, prop, receiver) {
        if (target[prop] === undefined) {
            throw new ReferenceError(`Свойство не существует: "${prop}"`);
        } else {
            return Reflect.get(target, prop, receiver);
        }
      }
    });
  }
  
  user = wrap(user);
  
  console.log(user.name); // John
  console.log(user.age); // Ошибка: Свойство не существует