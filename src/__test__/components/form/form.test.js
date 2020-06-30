import React from 'react';
import { mount } from 'enzyme';
import Form from '../../../components/form/form.js';

describe('<Form/> (Enzyme Test)', () => {
  it('is alive at application start', () => {
    let app = mount(<Form />);
    expect(app.find('#get').text()).toBe('GET');
    expect(app.find('#post').text()).toBe('POST');
    expect(app.find('#put').text()).toBe('PUT');
    expect(app.find('#delete').text()).toBe('DELETE');
  });

  it('stores the temporary state of the form', () => {
    let url = 'http://www.foo.com';
    let method = 'get';
    let app = mount(<Form />);
    app.find('input').simulate('change', { target: { value: url } });
    app.find('#get').simulate('click');
    expect(app.state('url')).toBe(url);
    expect(app.state('method')).toBe(method);
  });

  it('removes the temporary state of the form on submit', () => {
    let url = 'http://www.foo.com';
    let app = mount(<Form />);
    app.find('input').simulate('change', { target: { value: url } });
    app.find('#get').simulate('click');
    app.find('form').simulate('submit');
    expect(app.state('url')).toBe('');
    expect(app.state('method')).toBe('');
  });

  it('stores the final state of the form', () => {
    let url = 'http://www.foo.com';
    let method = 'get';
    let app = mount(<Form />);
    app.find('input').simulate('change', { target: { value: url } });
    app.find('#get').simulate('click');
    app.find('form').simulate('submit');
    expect(app.state('request').method).toBe(method);
    expect(app.state('request').url).toBe(url);
  });

  it('renders the users selections', () => {
    let url = 'http://www.foo.com';
    let method = 'get';
    let app = mount(<Form />);
    app.find('input').simulate('change', { target: { value: url } });
    app.find('#get').simulate('click');
    app.find('form').simulate('submit');
    expect(app.find('.method').text()).toBe(method);
    expect(app.find('.url').text()).toBe(url);
  });
});
