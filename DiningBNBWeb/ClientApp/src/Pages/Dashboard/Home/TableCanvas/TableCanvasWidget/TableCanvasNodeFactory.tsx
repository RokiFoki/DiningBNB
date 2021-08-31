import { AbstractReactFactory, GenerateModelEvent, GenerateWidgetEvent } from '@projectstorm/react-canvas-core';
import { DiagramEngine } from '@projectstorm/react-diagrams';
import { TableCanvasNodeModel } from './TableCanvasNodeModel';
import RoundTable22Chairs from './TableWidgets/RoundTable22Chairs';
import RoundTable4ChairsWidget from './TableWidgets/RoundTable4ChairsWidget';

export class TableCanvasNodeFactory extends AbstractReactFactory<TableCanvasNodeModel, DiagramEngine> {
  constructor() {
    super('ts-table-canvas-node');
  }

  generateModel(initialConfig: GenerateModelEvent) {
    return new TableCanvasNodeModel();
  }

  generateReactWidget(event: GenerateWidgetEvent<TableCanvasNodeModel>): JSX.Element {
    return event.model.tableType === TableWidgetType.RoundTable4Chairs ? 
      <RoundTable4ChairsWidget engine={this.engine} node={event.model} /> :
      <RoundTable22Chairs engine={this.engine} node={event.model} />;
  }
}

export enum TableWidgetType {
  RoundTable4Chairs,
  RoundTable22Chairs
}
