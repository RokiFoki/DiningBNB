import { BaseModelOptions, DeserializeEvent } from '@projectstorm/react-canvas-core';
import { DefaultPortModel, NodeModel } from '@projectstorm/react-diagrams';
import { TableWidgetType } from './TableCanvasNodeFactory';

export interface TableCanvasNodeModelOptions extends BaseModelOptions {
    tableType?: TableWidgetType;
    name?: string;
}

export class TableCanvasNodeModel extends NodeModel {
    name: string;
    tableType: TableWidgetType;

    constructor(options: TableCanvasNodeModelOptions = {}) {
        super({
            ...options,
            type: 'ts-table-canvas-node'
        });
        this.name = options.name || '';
        this.tableType = options.tableType || TableWidgetType.RoundTable4Chairs;


        // setup an in and out port
        this.addPort(
            new DefaultPortModel({
                in: true,
                name: 'in'
            })
        );
        this.addPort(
            new DefaultPortModel({
                in: false,
                name: 'out'
            })
        );
    }

    serialize() {
        return {
            ...super.serialize()
        };
    }

    deserialize(event: DeserializeEvent<this>): void {
        super.deserialize(event);
    }
}