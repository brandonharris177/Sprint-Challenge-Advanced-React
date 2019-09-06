import React from 'react';

class Display extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        console.log(this.props.propsToDisplay)
        return (
            <>
            {this.props.propsToDisplay.map(player => 
              <div key= {player.id}>{player.name}</div>)}
            </>
          );
    }
}

export default Display