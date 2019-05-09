import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import DeleteIcon from '@material-ui/icons/Delete';
import { removeTask } from '../actions/taskActions';


const styles = theme => ({

  button: {
    margin: theme.spacing.unit,
    padding: 10,
  },
  leftIcon: {
    marginRight: theme.spacing.unit,
  },
  rightIcon: {
    marginLeft: theme.spacing.unit,
  },
  iconSmall: {
    fontSize: 20,
  },
});

function ButtonTools(props) {
  const { classes,  taskId, removeTask } = props;
  return (
    <div>
      <Button variant="contained" color="primary" onClick={()=>removeTask(taskId)} className={classes.button}>
        Delete
        <DeleteIcon className={classes.rightIcon} />
      </Button>
    </div>
  );
}

ButtonTools.propTypes = {
  classes: PropTypes.object.isRequired,
  taskId: PropTypes.number

};


const mapDispatchToProps = {removeTask}



export default withStyles(styles)(connect(null, mapDispatchToProps)(ButtonTools));
