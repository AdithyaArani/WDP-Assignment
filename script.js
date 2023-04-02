class User {
    constructor(username, firstName, lastName, password) {
      this.username = username;
      this.firstName = firstName;
      this.lastName = lastName;
      this.password = password;
    }
  
    setUsername(username) {
      this.username = username;
    }
  
    getUsername() {
      return this.username;
    }
  
    setFirstName(firstName) {
      this.firstName = firstName;
    }
  
    getFirstName() {
      return this.firstName;
    }
  
    setLastName(lastName) {
      this.lastName = lastName;
    }
  
    getLastName() {
      return this.lastName;
    }
  
    setPassword(password) {
      this.password = password;
    }
  
    getPassword() {
      return this.password;
    }
  }
  