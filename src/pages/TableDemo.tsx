import React, { useState } from 'react';
import Table, { TableColumn, TableRow } from '../components/Table';

const COLUMNS: TableColumn[] = [
  { id: 'name', label: 'Name', sortable: true },
  { id: 'role', label: 'Role', sortable: true },
  { id: 'status', label: 'Status' },
  { id: 'team', label: 'Team', sortable: true },
];

const INITIAL_ROWS: TableRow[] = [
  {
    id: '1',
    cells: [
      {
        label: 'Sarah Thompson',
        description: 'sarah.t@example.com',
        mediaType: 'avatar',
        mediaUrl: 'https://i.pravatar.cc/300?img=1',
      },
      {
        label: 'Product Designer',
        description: 'Design Team',
      },
      {
        label: 'Active',
        description: 'Last seen recently',
      },
      {
        label: 'Design',
        description: 'San Francisco',
        mediaType: 'icon',
        mediaUrl: '/images/icon-3d.svg',
      },
    ],
  },
  {
    id: '2',
    cells: [
      {
        label: 'James Wilson',
        description: 'james.w@example.com',
        mediaType: 'avatar',
        mediaUrl: 'https://i.pravatar.cc/300?img=2',
      },
      {
        label: 'Frontend Developer',
        description: 'Engineering',
      },
      {
        label: 'In Meeting',
        description: 'Until 3:30 PM',
      },
      {
        label: 'Engineering',
        description: 'London',
        mediaType: 'icon',
        mediaUrl: '/images/icon-3d.svg',
      },
    ],
  },
  {
    id: '3',
    cells: [
      {
        label: 'Linda Chen',
        description: 'linda.c@example.com',
        mediaType: 'avatar',
        mediaUrl: 'https://i.pravatar.cc/300?img=3',
      },
      {
        label: 'Product Manager',
        description: 'Product Team',
      },
      {
        label: 'Offline',
        description: 'Returns tomorrow',
      },
      {
        label: 'Product',
        description: 'Singapore',
        mediaType: 'icon',
        mediaUrl: '/images/icon-3d.svg',
      },
    ],
  },
];

const TableDemo: React.FC = () => {
  const [selectedRows, setSelectedRows] = useState<string[]>([]);
  const [sortColumn, setSortColumn] = useState<string>('name');
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc');
  const [rows, setRows] = useState<TableRow[]>(INITIAL_ROWS);

  const handleSort = (columnId: string) => {
    const newDirection = 
      sortColumn === columnId && sortDirection === 'asc' ? 'desc' : 'asc';
    
    setSortColumn(columnId);
    setSortDirection(newDirection);

    const sortedRows = [...rows].sort((a, b) => {
      const aValue = a.cells[COLUMNS.findIndex(col => col.id === columnId)].label;
      const bValue = b.cells[COLUMNS.findIndex(col => col.id === columnId)].label;
      return newDirection === 'asc' 
        ? aValue.localeCompare(bValue)
        : bValue.localeCompare(aValue);
    });

    setRows(sortedRows);
  };

  const handleRowSelect = (rowId: string, isSelected: boolean) => {
    setSelectedRows(prev => 
      isSelected 
        ? [...prev, rowId]
        : prev.filter(id => id !== rowId)
    );
  };

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-2xl font-semibold text-gray-900 mb-8">Table Demo</h1>
        
        <div className="space-y-8">
          {/* Radio Selection */}
          <div>
            <h2 className="text-sm font-medium text-gray-900 mb-4">Radio Selection</h2>
            <Table
              columns={COLUMNS}
              rows={rows}
              controlType="radio"
              selectedRows={selectedRows}
              onRowSelect={handleRowSelect}
              sortColumn={sortColumn}
              sortDirection={sortDirection}
              onSort={handleSort}
            />
          </div>

          {/* Checkbox Selection */}
          <div>
            <h2 className="text-sm font-medium text-gray-900 mb-4">Checkbox Selection</h2>
            <Table
              columns={COLUMNS}
              rows={rows}
              controlType="checkbox"
              selectedRows={selectedRows}
              onRowSelect={handleRowSelect}
              sortColumn={sortColumn}
              sortDirection={sortDirection}
              onSort={handleSort}
            />
          </div>

          {/* No Selection */}
          <div>
            <h2 className="text-sm font-medium text-gray-900 mb-4">No Selection</h2>
            <Table
              columns={COLUMNS}
              rows={rows}
              sortColumn={sortColumn}
              sortDirection={sortDirection}
              onSort={handleSort}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TableDemo; 