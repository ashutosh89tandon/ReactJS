import React from 'react';
import Modal from '../../components/UI/Modal/Modal';
import Auxillary from '../Auxillary';

const withErrorHandler = (WrappedElement,axios)=>{
	return (
		class extends React.Component {
			state ={
				errorObj : null
			};

			componentWillMount(){
				this.reqInt=axios.interceptors.request.use(req=>{
					this.setState({errorObj : null});
					return req;
				});
				this.resInt=axios.interceptors.response.use(res => res, error =>{
					this.setState({errorObj : error});
				});

			}
			componentWillUnmount(){
				console.log('Component Unmount !!');
				axios.interceptors.request.eject(this.reqInt);
				axios.interceptors.response.eject(this.resInt);

			};
			modalCloseAction = ()=>{
				this.setState({errorObj : null});
			}
			render(){
			return (
				<Auxillary>
				<Modal modalClosed={this.modalCloseAction} show = {this.state.errorObj} >
				 {this.state.errorObj ? this.state.errorObj.message : null}
				</Modal>
				<WrappedElement {...this.props}/>
				</Auxillary>);
			}
		}
	);
};

export default withErrorHandler;