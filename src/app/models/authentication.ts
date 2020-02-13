export class Authentication {
  public email: string;
  public password: string;

  /**
   * This checks whether the email is in correct form.
   */
  private readonly emailRE = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

  public validateEmail(): boolean {
    return this.emailRE.test(this.email);
  }
}
