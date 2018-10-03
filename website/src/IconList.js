import React from 'react';
import { AutoSizer, List } from 'react-virtualized';
import Icon from './Icon';
export default class IconList extends React.Component {
  render() {
    return (
      <AutoSizer>
        {({ height, width }) => (
          <List
            height={height}
            width={width}
            rowCount={this.props.data.length}
            rowHeight={60}
            rowRenderer={this._renderRow}
          />
        )}
      </AutoSizer>
    );
  }

  _renderRow = ({
    key, // Unique key within array of rows
    index, // Index of row within collection
    isScrolling, // The List is currently being scrolled
    isVisible, // This row is visible within the List (eg it is not an overscanned row)
    style, // Style object to be applied to row (to position it)
  }) => {
    const { family, name } = this.props.data[index];

    return (
      <div key={index} style={style} className="Result-Icon-Container">
        <div
          style={{
            display: 'flex',
            flex: 1,
            flexDirection: 'row',
            alignItems: 'center',
            borderBottom: '1px solid #ccc',
            paddingVertical: 5,
          }}>
          <div style={{ width: 80, textAlign: 'center' }}>
            <Icon family={family} name={name} className="Result-Icon" />
          </div>
          <div style={{ flex: 1, maxWidth: 200 }}>
            <h4 className="Result-Icon-Name">{name}</h4>
          </div>

          <div style={{ flex: 1 }}>
            <h4 className="Result-Family-Name">{family}</h4>
          </div>
        </div>
      </div>
    );
  };
}
