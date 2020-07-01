import React from 'react';

import './form.scss';

class Form extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      url: '',
      method: 'get',
      request: {},
    };
  }

  handleChangeURL = (e) => {
    const url = e.target.value;
    this.setState({ url });
  };
  handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (this.state.method === 'get') {
        const raw = await fetch(this.state.url);
        const data = await raw.json();
        this.props.handler(data);}
      // } else if (this.state.method === 'post') {
      //   const raw = await fetch(this.state.url);
      //   const data = await raw.json();
      //   this.props.handler(data);
      // } else if (this.state.method === 'put') {
      //   const raw = await fetch(this.state.url);
      //   const data = await raw.json();
      //   this.props.handler(data);
      // } else if (this.state.method === 'delete') {
      //   const raw = await fetch(this.state.url);
      //   const data = await raw.json();
      //   this.props.handler(data);
      // }
       else this.props.handler('method error');
    } catch (e) {
      console.log(e);
    }
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
    <textarea className="results" placeholder='put your object here' >{this.state.request.method}</textarea>
        </section>
      </>
    );
  }
}

export default Form;
