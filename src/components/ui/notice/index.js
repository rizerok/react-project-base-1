import React from 'react';
import c from 'classnames';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import CloseIcon from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';
import Snackbar from '@material-ui/core/Snackbar';
import SnackbarContent from '@material-ui/core/SnackbarContent';

import { closeNotice } from 'store/notice';

import style from './style';
import icons from './icons';

function MySnackbarContentWrapper(props) {
  const classes = style();
  const {
    className,
    message,
    onClose,
    variant,
    ...other
  } = props;
  const Icon = icons[variant];

  return (
    <SnackbarContent
      className={c(classes[variant], className)}
      aria-describedby="client-snackbar"
      message={
        <span id="client-snackbar" className={classes.message}>
          {Icon && <Icon className={c(classes.icon, classes.iconVariant)} />}
          {message}
        </span>
      }
      action={[
        <IconButton
          key="close"
          aria-label="Close"
          color="inherit"
          className={classes.close}
          onClick={onClose}
        >
          <CloseIcon className={classes.icon} />
        </IconButton>
      ]}
      {...other}
    />
  );
}

const UiNotice = ({ notice, closeNotice }) => {
  const handleClose = () => {
    closeNotice();
  };
  return (
    <Snackbar
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'right'
      }}
      open={notice.open}
      autoHideDuration={5000}
      onClose={handleClose}>

      <MySnackbarContentWrapper
        onClose={handleClose}
        variant={notice.type }
        message={notice.msg || ''}
      />

    </Snackbar>
  );
};

const mapStateToProps = state => ({
  notice: state.notice
});

const mapDispatchToProps = dispatch => bindActionCreators({ closeNotice }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(UiNotice);
