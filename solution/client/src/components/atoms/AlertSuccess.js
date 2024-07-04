import * as React from 'react';
import Alert from '@mui/material/Alert';
import CheckIcon from '@mui/icons-material/Check';
/**
 * AlertSuccess Component:
 *
 * Provides an alert for the successful registration of the user
 *
 * Behavior:
 * - shows an alert that says that the user has been registered successfully
 *
 * @returns {JSX.Element} The JSX for the AlertSuccess function.
 */
export default function AlertSuccess() {
  return (
    <Alert icon={<CheckIcon fontSize="inherit" />} severity="success">
      User registration successful!
    </Alert>
  );
}
