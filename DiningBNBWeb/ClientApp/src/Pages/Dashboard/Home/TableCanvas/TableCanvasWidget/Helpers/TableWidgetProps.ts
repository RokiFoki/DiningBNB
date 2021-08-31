import { DiagramEngine } from '@projectstorm/react-diagrams';
import { TableCanvasNodeModel } from '../TableCanvasNodeModel';

export interface TableWidgetProps {
    node: TableCanvasNodeModel;
    engine: DiagramEngine;
  }