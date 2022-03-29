class User {
  name: String;
  constructor(name: String) {
    this.name = name;
  }

  getUserName() {
    return this.name;
  }

  setUserName(value: String) {
    if (value.length < 3) value = 'Too short';
    this.name = value;
  }
}

const neUser = new User('4');
console.log(neUser);
