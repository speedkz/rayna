import React from 'react';
import clsx from 'clsx';
import TableHeader from './TableHeader';
import TableCell, { ControlType, MediaType } from './TableCell';

export interface TableColumn {
  id: string;
  label: string;
  sortable?: boolean;
  width?: string;
}

export interface TableRow {
  id: string;
  cells: {
    label: string;
    description?: string;
    mediaType?: MediaType;
    mediaUrl?: string;
  }[];
}

export interface TableProps {
  columns: TableColumn[];
  rows: TableRow[];
  controlType?: ControlType;
  selectedRows?: string[];
  onRowSelect?: (rowId: string, isSelected: boolean) => void;
  sortColumn?: string;
  sortDirection?: 'asc' | 'desc';
  onSort?: (columnId: string) => void;
  className?: string;
}

const TableHeaderRow: React.FC<{
  columns: TableColumn[];
  controlType?: ControlType;
  sortColumn?: string;
  sortDirection?: 'asc' | 'desc';
  onSort?: (columnId: string) => void;
}> = ({ columns, controlType, sortColumn, sortDirection, onSort }) => {
  return (
    <div className="flex">
      {columns.map((column, index) => (
        <div
          key={column.id}
          className={clsx(
            'flex-1',
            column.width && `w-[${column.width}]`
          )}
        >
          <TableHeader
            label={column.label}
            showCheckbox={index === 0 && controlType === 'checkbox'}
            showSortIcon={column.sortable}
            sortDirection={column.id === sortColumn ? sortDirection : null}
            onSort={column.sortable ? () => onSort?.(column.id) : undefined}
            showSeparator={true}
          />
        </div>
      ))}
    </div>
  );
};

export const Table: React.FC<TableProps> = ({
  columns,
  rows,
  controlType,
  selectedRows = [],
  onRowSelect,
  sortColumn,
  sortDirection,
  onSort,
  className = '',
}) => {
  const handleRowSelect = (rowId: string, isSelected: boolean) => {
    onRowSelect?.(rowId, isSelected);
  };

  return (
    <div className={clsx('rounded-lg border border-[#E4E7EC] overflow-hidden bg-white', className)}>
      {/* Header */}
      <TableHeaderRow 
        columns={columns}
        controlType={controlType}
        sortColumn={sortColumn}
        sortDirection={sortDirection}
        onSort={onSort}
      />

      {/* Body */}
      <div>
        {rows.map((row, rowIndex) => (
          <div 
            key={row.id}
            className="flex"
          >
            {row.cells.map((cell, index) => (
              <div 
                key={`${row.id}-${index}`}
                className={clsx(
                  'flex-1',
                  columns[index]?.width && `w-[${columns[index].width}]`,
                  selectedRows.includes(row.id) && 'bg-[#FFECE5] first:border-l last:border-r border-[#F56630]'
                )}
              >
                <TableCell
                  {...cell}
                  controlType={index === 0 ? controlType : undefined}
                  isSelected={selectedRows.includes(row.id)}
                  isChecked={selectedRows.includes(row.id)}
                  onChange={(checked) => handleRowSelect(row.id, checked)}
                />
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Table; 