import { DefaultLinkModel, DefaultNodeModel, DiagramEngine, DiagramModel } from '@projectstorm/react-diagrams';
import React from 'react';
import styles from './TableCanvas.module.scss';
import { CanvasWidget } from '@projectstorm/react-canvas-core';
import { TableCanvasNodeModel } from './TableCanvasWidget/TableCanvasNodeModel';
import { TableWidgetType } from './TableCanvasWidget/TableCanvasNodeFactory';

const TableCanvas: React.FC<TableCanvasProps> = ({engine, tables, readonly}: TableCanvasProps) => {
  const model = new DiagramModel();

  tables.forEach(t => {
    const node = new TableCanvasNodeModel({
      name: t.name,
      tableType: t.tableType
    });

    node.setPosition(t.position.x, t.position.y);
    model.addNode(node);
  });

  engine.setModel(model);

  model.setLocked(!!readonly);
  return (
    <CanvasWidget engine={engine} className="full-width-height" />
)};

export interface TableCanvasProps {
  engine: DiagramEngine,
  tables: Table[],  
  readonly?: boolean,
}

export interface Table {
  name: string,
  position: { x: number, y: number},
  tableType: TableWidgetType
}

export default TableCanvas;
