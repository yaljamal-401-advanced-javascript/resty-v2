import React from 'react';
import './form.scss';

class Form extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      url: '',
      method: 'get',
      request: {},
      body: '',
      history: [],

    };
  }

  handleChangeURL = e => {
    const url = e.target.value;
    this.setState({ url });
  };
  handleSubmit = async (e) => {
    e.preventDefault();
    try {
      this.props.loaderHandler();
      let reqOption = {
        method: this.state.method.toUpperCase(),
        headers: {
          'Content-Type': 'application/json',
        },

      };
      // console.log('this.state.body =>>',this.state.body)
      if (this.state.method !== 'get') {
        reqOption.body = this.state.body;
      }
      console.log('reqOption =>>', reqOption);
      let data = await fetch(this.state.url, reqOption);
      // console.log('fetch data =>>', await data.json());
      // console.log('this.props.handler',this.props.handler())
      let result = await data.json();
      this.setState({ history: [...this.state.history, <p>{this.state.url + this.state.method}</p>] });
      let localData = JSON.parse(localStorage.getItem('history') || '[]');
      console.log('this.state.history =>>', localData);
      localData.push({ url: this.state.url, method: this.state.method });
      console.log('localData after push=>>', localData);
      localStorage.setItem('history', JSON.stringify(localData));
      this.props.handler(result);
      this.props.loaderHandler();

    } catch (e) {
      console.log(e);
    }
  }
  bodyHandler = e => {
    const data = e.target.value;

    console.log('data =>>', data);
    this.setState({ body: data });
  }

  handleChangeMethod = e => {
    const method = e.target.id;
    this.setState({ method });
  };

  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <label >
            <span>URL: </span>
            <input name='url' type='text' onChange={this.handleChangeURL} />
            <button type="submit">GO!</button>
          </label>
          <label className="methods">
            <span className={this.state.method === 'get' ? 'active' : ''} id="get" onClick={this.handleChangeMethod}>GET</span>
            <span className={this.state.method === 'post' ? 'active' : ''} id="post" onClick={this.handleChangeMethod}>POST</span>
            <span className={this.state.method === 'put' ? 'active' : ''} id="put" onClick={this.handleChangeMethod}>PUT</span>
            <span className={this.state.method === 'delete' ? 'active' : ''} id="delete" onClick={this.handleChangeMethod}>DELETE</span>
          </label>
        </form>
        <section className="results">
          <textarea onChange={this.bodyHandler}></textarea>

        </section>

        {this.state.history}

      </>
    );
  }
}

export default Form;
