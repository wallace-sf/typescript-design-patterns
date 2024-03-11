class User {
  constructor(
    public name: string,
    public email: string,
  ) {}
}

class UserAuthentication {
  constructor(user: User) {}

  authenticate(password: string) {
    console.log(password);
    // implementation logic here
  }
}
