import * as React from "react";
import {CardPicker, CardPickerProps} from './CardPicker';

export interface HelloProps { compiler: string; framework: string; }

// 'HelloProps' describes the shape of props.
// State is never set so we use the 'undefined' type.
export class Hello extends React.Component<HelloProps, undefined> {
    render() {
        const props = {
            onSelectionChange: () => {return "hi"}

        }
        return (
            <div>
                <h1>Hello from {this.props.compiler} and {this.props.framework}!</h1>
                <h2>hello again</h2>
                <CardPicker {... props} />

            </div>
        );
    }
}