import React, { Component } from 'react';
import {
    Input
} from '@smooth-ui/core-sc';
import {
  SubTitle,
} from '../../Base';

/* This is a reusable form input element with passed in props that define
its label, input type, and more. */
class FormInput extends Component {
  onChange = (e) => {
    const { onChange, name } = this.props;

    if (onChange) onChange(name, e.currentTarget.value);
  }

  render() {
    const {
      label,
      inputType,
      name,
      value,
    } = this.props;

    return (
      <div>
        <SubTitle>
          <label>{label}</label>
        </SubTitle>
        <Input
          width="100%"
          size="md"
          type={inputType}
          name={name}
          value={value}
          onChange={this.onChange}
        />
      </div>
    );
  }
}

export default FormInput;