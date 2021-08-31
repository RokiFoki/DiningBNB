import createEngine from '@projectstorm/react-diagrams';
import TableCanvas from './TableCanvas/TableCanvas';
import { useState } from 'react';
import { TableCanvasNodeFactory, TableWidgetType } from './TableCanvas/TableCanvasWidget/TableCanvasNodeFactory';
import styles from './Home.module.scss';

const _engine = createEngine();
_engine.getNodeFactories().registerFactory(new TableCanvasNodeFactory());

const tables = [
  { name: 'Table1',  position: { x: 50, y: 50}, tableType: TableWidgetType.RoundTable4Chairs},
  { name: 'Table2',  position: { x: 50, y: 150}, tableType: TableWidgetType.RoundTable22Chairs},
  { name: 'Table2',  position: { x: 50, y: 250}, tableType: TableWidgetType.RoundTable22Chairs},
];

const Home = () => {
  const [engine, _] = useState(_engine);
  

  return (
    <div className={styles.Home}>  
      <TableCanvas engine={engine} tables={tables}></TableCanvas>
    </div>
)};

export default Home;
