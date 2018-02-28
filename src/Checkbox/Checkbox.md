### __Default checkbox__ ###
#### **States** ####

Default
```jsx
  const CheckState = require('./examples/CheckboxState').default;
  <CheckState
    label="Example 1"
    name="example1"
  />
```

Disabled
```jsx
  const CheckState = require('./examples/CheckboxState').default;
  <CheckState
    label="Example 2"
    name="example2"
    disabled
  />
```

Error
```jsx
  const CheckState = require('./examples/CheckboxState').default;
  <CheckState
    label="Example 4"
    name="example4"
    error="Error!"
  />
```

Success
```jsx
  const CheckState = require('./examples/CheckboxState').default;
  <CheckState
    label="Example 5"
    name="example5"
    success="Success!"
  />
```

### __Form checkbox__ ###
#### **States** ####

Default
```jsx
const CheckboxFormState = require('./examples/CheckboxForm').default;
  <CheckboxFormState
    label="Example 11"
    name="example11"
  />
```

Disabled
```jsx
const CheckboxFormState = require('./examples/CheckboxForm').default;
  <CheckboxFormState
    label="Example 12"
    name="example12"
    disabled
  />
```

Error
```jsx
const CheckboxFormState = require('./examples/CheckboxForm').default;
  <CheckboxFormState
    label="Example 13"
    name="example13"
    error="Error!"
  />
```

Success
```jsx
const CheckboxFormState = require('./examples/CheckboxForm').default;
  <CheckboxFormState
    label="Example 14"
    name="example14"
    success="Success!"
  />
```
