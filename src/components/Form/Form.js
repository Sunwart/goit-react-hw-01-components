import { Component } from 'react';

const INITIAL_STATE = {
  login: '',
  email: '',
  password: '',
  agreed: false,
  gender: null,
  age: '',
  level: '1st',
};

const Gender = {
  MALE: 'male',
  FEMALE: 'female',
};

class Form extends Component {
  state = { ...INITIAL_STATE };

  handleChange = evt => {
    const { name, value, type, checked } = evt.target;
    this.setState({ [name]: type === 'checkbox' ? checked : value });
  };

  handleSubmit = evt => {
    evt.preventDefault();
    const { login, email, password, agreed, gender, age, level } = this.state;
    console.log(
      `Login: ${login}, Email: ${email}, Password: ${password}, Agreed: ${agreed}, Gender: ${gender}, Age: ${age}, Level: ${level}`,
    );
    this.props.onSubmit({ ...this.state });
    this.reset();
  };

  reset = () => {
    this.setState({ ...INITIAL_STATE });
  };

  render() {
    const { login, email, password, agreed, gender, age, level } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <section>
          <p>Your level</p>
          <label>
            <input
              type="radio"
              name="level"
              value="1st"
              onChange={this.handleChange}
              checked={level === '1st'}
            />
            1st
          </label>
          <label>
            <input
              type="radio"
              name="level"
              value="2nd"
              onChange={this.handleChange}
              checked={level === '2nd'}
            />
            2nd
          </label>
          <label>
            <input
              type="radio"
              name="level"
              value="3rd"
              onChange={this.handleChange}
              checked={level === '3rd'}
            />
            3rd
          </label>
        </section>
        <section>
          <p>Choose your gender</p>
          <label>
            Male
            <input
              type="radio"
              checked={gender === Gender.MALE}
              name="gender"
              value={Gender.MALE}
              onChange={this.handleChange}
            />
          </label>
          <br />
          <label>
            Female
            <input
              type="radio"
              checked={gender === Gender.FEMALE}
              name="gender"
              value={Gender.FEMALE}
              onChange={this.handleChange}
            />
          </label>
        </section>
        <label>
          Choose your age &nbsp;
          <select name="age" value={age} onChange={this.handleChange}>
            <option value="" disabled>
              ...
            </option>
            <option value="18-25">18-25</option>
            <option value="26-35">26-35</option>
            <option value="36-45">36-45</option>
            <option value="46+">36+</option>
          </select>
        </label>
        <br />
        <label>
          Name: &nbsp;
          <input
            type="text"
            placeholder="Enter login"
            name="login"
            value={login}
            onChange={this.handleChange}
            required
          />
        </label>
        <br />
        <label>
          Email: &nbsp;
          <input
            type="email"
            placeholder="Enter email"
            name="email"
            value={email}
            onChange={this.handleChange}
            required
          />
        </label>
        <br />
        <label>
          Password: &nbsp;
          <input
            type="password"
            placeholder="Enter password"
            name="password"
            value={password}
            onChange={this.handleChange}
            required
          />
        </label>
        <br />
        <label>
          Agree to terms
          <input type="checkbox" name="agreed" checked={agreed} onChange={this.handleChange} />
        </label>
        <br />
        <button type="submit" disabled={!agreed}>
          Sign up as {login}
        </button>
      </form>
    );
  }
}

export default Form;
