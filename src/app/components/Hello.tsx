import * as React from "react";

export interface HelloProps {
  name: string
}
// 'HelloProps' describes the shape of props.
// State is never set so we use the 'undefined' type.
export class Hello extends React.Component<HelloProps, object> {
  render() {
    const {name} = this.props;
    return (
      <div className="hello">
        <div className="greeting">
          Hello {name}
        </div>
      </div>
    );
  }
}
