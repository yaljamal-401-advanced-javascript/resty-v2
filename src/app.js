import React from 'react';
import { Route } from 'react-router-dom';
import './app.scss';
// Let's talk about using index.js and some other name in the component folder
// There's pros and cons for each way of doing this ...
import Header from './components/header/header.js';
import Footer from './components/footer/footer.js';
import Form from './components/form/form.js';
import Result from './components/result/result.js';
import History from '../src/components/history/history.js';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      obj: {
        Header: {},
        Response: { results: [] },
      },
      loader: false,
    };
  }
  handleForm = (results) => {
    console.log('handler results =>>', results);
    this.setState({ obj: { Header: { Conetnt_type: 'application/json' }, Response: { results: [results] } } });
  };
  loaderHandler = () => {
    this.setState({ loader: !this.state.loader });
  };
  render() {
    return (
      <>
        <Header />
        <Route exact path='/'>
          <Form handler={this.handleForm} loaderHandler={this.loaderHandler} />
          <Result data={this.state.obj} loader={this.state.loader} />
        </Route>
        <Route exact path='/history'>
          <History />
        </Route>
        <Footer />
      </>
    );
  }
}

export default App;
