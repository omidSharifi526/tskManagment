import * as React from 'react';
import { DataGrid, GridColDef } from '@mui/x-data-grid';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { TreeView } from '@mui/x-tree-view/TreeView';
import { TreeItem } from '@mui/x-tree-view/TreeItem';

interface Row {
  id: number;
  name: string;
  parentId: number | null;
}

const rows: Row[] = [
  { id: 1, name: 'Parent', parentId: null },
  { id: 2, name: 'Child 1', parentId: 1 },
  { id: 3, name: 'Child 2', parentId: 1 },
  { id: 4, name: 'Grandchild 1', parentId: 2 },
  { id: 5, name: 'Grandchild 2', parentId: 2 },
  // Add more rows as needed
];

interface CustomTreeViewCellProps {
  rowData: Row;
}

const CustomTreeViewCell: React.FC<CustomTreeViewCellProps> = ({ rowData }) => {
  const renderTree = (nodes: any) => (
    <TreeItem key={nodes.id} nodeId={String(nodes.id)} label={nodes.name}>
      {Array.isArray(nodes.children)
        ? nodes.children.map((node:any) => renderTree(node))
        : null}
    </TreeItem>
  );

  const buildTree = (rows: Row[], parentId: number | null = null): Row[] => {
    return rows
      .filter((row) => row.parentId === parentId)
      .map((row) => ({
        ...row,
        children: buildTree(rows, row.id),
      }));
  };

  const treeData = buildTree(rows);

  return (
    <TreeView
      defaultCollapseIcon={<ExpandMoreIcon />}
      defaultExpandIcon={<ChevronRightIcon />}
    >
      {renderTree(treeData)}
    </TreeView>
  );
};

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 100 },
  {
    field: 'treeView',
    headerName: 'Tree View',
    width: 300,
    renderCell: (params) => <CustomTreeViewCell rowData={params.row as Row} />,
  },
  // Add other columns as required
];

const CustomDataGrid: React.FC = () => {
  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid rows={rows} columns={columns} />
    </div>
  );
};

export default CustomDataGrid;
