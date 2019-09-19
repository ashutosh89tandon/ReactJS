import React from 'react';
import Auxillary from '../../hoc/Auxillary';
import Style from './Layout.css';

const layout = (props)=>(
	<Auxillary>
		<div>Toolbar, Sidedrawer and Backdrop</div>
		<main className={Style.Content}>
			{props.children}
		</main>
	</Auxillary>
	);

export default layout;