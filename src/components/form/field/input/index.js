import React from 'react';

import TextField from '@material-ui/core/TextField';

import s from './style.scss';

const FormFieldInput = ({
  name,
  key,
  handleFieldChange,
  dataModel,
  ...props
}) => (
  <TextField
    id={name}
    {...props}
    className={s.field}
    value={dataModel[name] || ''}
    onChange={handleFieldChange(name)}
  />
);

export default FormFieldInput;
