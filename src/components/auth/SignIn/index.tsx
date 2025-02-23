import { ChangeEvent, Component, FormEvent } from "react";

export class SignIn extends Component {
  state = {
    email: "",
    password: "",
  };

  handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    this.setState({
      [event.target.id]: event.target.value,
    });
  };

  handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    console.log(this.state);
  };
  render() {
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit} className="white">
          <h5 className="grey-text text-hyphen-darken-3">Sign In</h5>
          <div className="input-field">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              onChange={this.handleChange}
              autoComplete="true"
            />
          </div>
          <div className="input-field">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" onChange={this.handleChange} />
          </div>

          <div className="input-field">
            <button className="btn pink lighten-1 z-depth-0">Login</button>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;
