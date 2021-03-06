import React from 'react'
import { storiesOf } from '@storybook/react'

import TableState from './TableState'
import Section from '../Section'

storiesOf('Table', module)
  .add('Simple', () => (
    <Section>
      <TableState clickableRow />
    </Section>
  ))
  .add('Selectable and expandable', () => (
    <Section>
      <TableState
        selectable
        expandable
      />
    </Section>
  ))
  .add('Action column', () => (
    <Section>
      <TableState primaryAction />
    </Section>
  ))
