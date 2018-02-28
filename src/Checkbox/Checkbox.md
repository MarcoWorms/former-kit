
<h4>**Default checkbox**</h4>

Default state
```jsx
  const CheckState = require('./examples/CheckboxState').default;
  <CheckState
    label="Example 1"
    name="example1"
  />
```

Disabled state
```jsx
  const CheckState = require('./examples/CheckboxState').default;
  <CheckState
    label="Example 2"
    name="example2"
    disabled
  />
```

Error state
```jsx
  const CheckState = require('./examples/CheckboxState').default;
  <CheckState
    label="Example 4"
    name="example4"
    error="Error!"
  />
```

Success state
```jsx
  const CheckState = require('./examples/CheckboxState').default;
  <CheckState
    label="Example 5"
    name="example5"
    success="Success!"
  />
```

<h4>**Form checkbox**</h4>

Default state
```jsx
const CheckboxFormState = require('./examples/CheckboxForm').default;
  <CheckboxFormState
    label="Example 11"
    name="example11"
  />
```

Disabled state
```jsx
const CheckboxFormState = require('./examples/CheckboxForm').default;
  <CheckboxFormState
    label="Example 12"
    name="example12"
    disabled
  />
```

Error state
```jsx
const CheckboxFormState = require('./examples/CheckboxForm').default;
  <CheckboxFormState
    label="Example 13"
    name="example13"
    error="Error!"
  />
```

Success state
```jsx
const CheckboxFormState = require('./examples/CheckboxForm').default;
  <CheckboxFormState
    label="Example 14"
    name="example14"
    success="Success!"
  />
```
