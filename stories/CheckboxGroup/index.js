import React from 'react'

import { storiesOf } from '@storybook/react'

import Section from '../Section'
import CheckboxGroup from '../../src/CheckboxGroup'

class CheckboxGroupState extends React.Component {
  constructor (props) {
    super(props)

    this.state = { values: ['github'] }
  }

  render () {
    const options = [
      {
        label: 'Github',
        value: 'github',
      },
      {
        label: 'Open Source',
        value: 'open-source',
      },
      {
        label: 'Pilot',
        value: 'pilot',
      },
    ]

    const {
      disabled,
      error,
      name,
      success,
    } = this.props

    return (
      <div>
        <CheckboxGroup
          disabled={disabled}
          error={error}
          name={name}
          onChange={values => this.setState({ values })}
          options={options}
          success={success}
          values={this.state.values}
        />

        <p>Selected: {this.state.values.join(', ')}</p>
      </div>
    )
  }
}

CheckboxGroupState.defaultProps = {
  disabled: false,
  error: '',
  success: '',
}

storiesOf('Checkbox Group', module)
  .add('Default', () => (
    <div>
      <Section title="Default">
        <CheckboxGroupState name="default" />
      </Section>

      <Section title="Disabled">
        <CheckboxGroupState name="disabled" disabled />
      </Section>

      <Section title="Success">
        <CheckboxGroupState name="success" success="Success" />
      </Section>

      <Section title="Error">
        <CheckboxGroupState name="error" error="Error!" />
      </Section>
    </div>
  ))
