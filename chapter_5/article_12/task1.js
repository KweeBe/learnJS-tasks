let user = {
  name: "Василий Иванович",
  age: 35
};

alert(JSON.stringify(user));

let users = JSON.parse(JSON.stringify(user));

