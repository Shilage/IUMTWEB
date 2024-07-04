import * as React from 'react';
import Alert from '@mui/material/Alert';
import ErrorIcon from '@mui/icons-material/Error';
/**
 * AlertError Component:
 *
 * Provides an alert for possible errors encountered
 *
 * Behavior:
 * - shows an alert that says the error encountered in that page
 *
 * @returns {JSX.Element} The JSX for the AlertError function.
 */
export default function AlertError({ message }) {
  return (
    <Alert icon={<ErrorIcon fontSize="inherit" />} severity="error">
      {message}
    </Alert>
  );
}
