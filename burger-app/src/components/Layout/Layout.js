import React from 'react';
import Auxillary from '../../hoc/Auxillary';
import Style from './Layout.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';

const layout = (props)=>(
	<Auxillary>
		<Toolbar/>
		<main className={Style.Content}>
			{props.children}
		</main>
	</Auxillary>
	);

export default layout;