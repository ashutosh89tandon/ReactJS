
import React from 'react';

class Auxillary extends React.Component
{
	render()
	{
		return <div className={this.props.classes}>{this.props.children}</div>;
	}
}

export default Auxillary;