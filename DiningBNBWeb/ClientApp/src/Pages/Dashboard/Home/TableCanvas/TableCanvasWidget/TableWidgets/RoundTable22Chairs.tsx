import React from 'react';
import styles from './RoundTable22Chairs.module.scss';
import { DiagramEngine } from '@projectstorm/react-diagrams';
import { TableCanvasNodeModel } from '../TableCanvasNodeModel';
import { TableWidgetProps } from '../Helpers/TableWidgetProps';

const RoundTable22Chairs: React.FC<TableCanvasWidgetProps> = ({ node, engine }: TableCanvasWidgetProps) => (
  <>
    <div className={styles.TableCanvasWidget} data-testid="RoundTable22Chairs">
      {node.name}
      <div className={styles.TableChair1}></div>
      <div className={styles.TableChair2}></div>
      <div className={styles.TableChair3}></div>
      <div className={styles.TableChair4}></div>
    </div>
  </>
);

export interface TableCanvasWidgetProps extends TableWidgetProps {
}

export default RoundTable22Chairs;

