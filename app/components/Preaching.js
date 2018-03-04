// @flow
import React, { Component } from 'react';


// Material-UI
export default class Preaching extends Component<Props> {
  props: Props;

  constructor(props) {
    super(props)

    // Default text
    this.state = {
      text: '', 
      title: 'Predicacion'
    }
  }

  render() {
    return (
        <div>
            hello
        </div>
    );
  };
}