import React from 'react';
import Button from '@material-ui/core/Button';
import FormBuilder from 'components/form/builder';
import api from 'api';
import s from './style.scss';

import formModel from './form-model.json';

const LandingContactUsForm = () => {
  const [vals, setVals] = React.useState({});

  const handleChange = fieldName => event => {
    setVals({ ...vals, [fieldName]: event.target.value });
  };

  const send = () => {
    // eslint-disable-next-line
    console.log(vals);
    api.fetch('/contact-us', vals);
  };

  return (
    <form className={s.container}>
      <FormBuilder
        dataModel={vals}
        formModel={formModel}
        handleFieldChange={handleChange}
      />
      <Button onClick={send}>Send</Button>
    </form>
  );
};

export default LandingContactUsForm;
