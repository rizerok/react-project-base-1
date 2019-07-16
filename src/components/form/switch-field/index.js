import React from 'react';

import FormFieldInput from 'components/form/field/input';

// eslint-disable-next-line consistent-return
const FormSwitchField = props => {
  // eslint-disable-next-line default-case
  switch (props.type) {
  case 'input': {
    return <FormFieldInput {...props}/>;
  }
  }
};

export default FormSwitchField;
