import React, { Component, Fragment } from 'react';
import { Route } from 'react-router-dom';
import { inject, observer } from 'mobx-react';

// scenes
import ExampleScene from '@scenes/Example';

@inject('ui')
@observer
export default class App extends Component {
  componentDidMount() {
    setTimeout(() => {
      this.props.ui.loading = false;
    }, 1000);
  }

  render() {
    return (
      <Fragment>
        <h1>App</h1>
        <Route exact path="/example" component={ExampleScene} />
      </Fragment>
    );
  }
}
