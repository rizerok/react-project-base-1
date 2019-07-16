import React from 'react';
import FormSwitchField from 'components/form/switch-field';

import s from './style.scss';

const FormBuilder = ({
  dataModel,
  formModel,
  handleFieldChange,
  readOnly,
  disabled
}) => (
  <div className={s.container}>
    {
      formModel.map((fm, i) => <div key={i} className={s.row}>
        <FormSwitchField
          {...fm}
          dataModel={dataModel}
          value={dataModel[fm.name]}
          handleFieldChange={handleFieldChange}
          readOnly={readOnly}
          disabled={disabled}
        />
      </div>)
    }
  </div>
);

export default FormBuilder;
