import React from 'react';

import { withStyles } from '@material-ui/core/styles';
import MuiExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const ExpansionPanel = withStyles({
  root: {
    border: '1px solid rgba(0, 0, 0, .125)',
    boxShadow: 'none',
    '&:not(:last-child)': {
      borderBottom: 0
    },
    '&:before': {
      display: 'none'
    },
    '&$expanded': {
      margin: 'auto'
    }
  },
  expanded: {}
})(MuiExpansionPanel);

const strategyOnlyOne = (panelsCount, oldModel, key) => {
  const arr = [];

  for (let i = 0; i < panelsCount; i++) {
    arr.push(i === key && !oldModel[i]);
  }

  return arr;
};

const UiAccordion = ({ panelData }) => {
  const [model, setModel] = React.useState((new Array(panelData.length)).fill(false));

  const handleChange = (key) => () => {
    setModel(strategyOnlyOne(panelData.length, model, key));
  };

  return <div>
    {panelData.map((panel, key) => (
      <ExpansionPanel
        square
        key={key}
        expanded={model[key]}
        onChange={handleChange(key)}
      >
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon/>}
          aria-controls={`panel${key}-content`}
          id={`panel${key}-header`}
        >
          {panel.title}
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          {panel.description}
        </ExpansionPanelDetails>
      </ExpansionPanel>
    ))}
  </div>;
};

export default UiAccordion;
