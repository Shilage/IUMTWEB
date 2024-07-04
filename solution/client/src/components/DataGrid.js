import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import '../style/DataGrid.css';

/**
 * DataGrid component:
 * A custom DataGrid component using Material-UI's DataGrid for displaying tabular data.
 *
 * @param {Object} param0 - The component props.
 * @param {Object} param0.gridData - The data to be displayed in the grid.
 * @param {Array} param0.gridData.columns - Array of column definitions.
 * @param {Array} param0.gridData.rows - Array of row data.
 * @param {Function} param0.onRowClick - Callback function to be called when a cell is clicked. Receives the clicked row's ID and a boolean value.
 *
 * @returns {JSX.Element} A React component that renders a data grid.
 */
export default function DataGridElement({ gridData, onRowClick }) {
  const handleCellClick = (params, event) => {
    const rowId = params.id;
    onRowClick(rowId, true);
  };
  const getRowClassName = (params) => {
    return `custom-row-${params.rowIndex % 2 === 0 ? 'even' : 'odd'}`;
  };

  // Assuming equal width for all columns
  const columnsWithWidth = gridData.columns.map((column) => ({
    ...column,
    width: 300,
  }));

  return (
    <Box
      sx={{ height: 520, width: '90%', marginBottom: '30px' }}
      className="data-grid"
    >
      <DataGrid
        rows={gridData.rows}
        columns={columnsWithWidth}
        loading={gridData.rows.length === 0}
        pageSizeOptions={[gridData.rows.length]}
        rowHeight={48}
        onCellClick={handleCellClick}
        viewportPageSize={gridData.rows.length}
        getRowClassName={getRowClassName}
      />
    </Box>
  );
}
