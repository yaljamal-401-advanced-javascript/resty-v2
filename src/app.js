import React from 'react';

import './app.scss';

// Let's talk about using index.js and some other name in the component folder
// There's pros and cons for each way of doing this ...
import Header from './components/header/header.js';
import Footer from './components/footer/footer.js';
import Form from './components/form/form.js';
import Result from './components/result/result.js';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      obj: {
        Header: {},
        Response: { results: [] },
      }
    };
  }
  handleForm = (results) => {
    this.setState({ obj: { Header: { Conetnt_type: 'application/json' }, Response: { results: results }, } });
  };
  render() {
    return (
      <>
        <Header />
        <Form handler={this.handleForm} />
        <Result data={this.state.obj} />
        <Footer />
      </>
    );
  }
}

export default App;
