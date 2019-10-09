import React from 'react';
import Auxillary from '../../hoc/Auxillary';
import Style from './Layout.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

class Layout extends React.Component{

	state={
		showSideDrawerBackdrop : false
	};

	removeSideDrawerBackdropHandler=()=>{
		this.setState({showSideDrawerBackdrop : false});
	};

	toggleSideDrawerBackdropHandler=()=>{

		const oldValue=this.state.showSideDrawerBackdrop;
		this.setState({showSideDrawerBackdrop : !oldValue});
	};

	render(){
		return (
	<Auxillary>
		<Toolbar toggleDrawer= {this.toggleSideDrawerBackdropHandler}/>
		<SideDrawer showBackdrop= {this.state.showSideDrawerBackdrop} 
			closeBackdrop={this.removeSideDrawerBackdropHandler} />
		<main className={Style.Content}>
			{this.props.children}
		</main>
	</Auxillary>
	);
	}
}

export default Layout;