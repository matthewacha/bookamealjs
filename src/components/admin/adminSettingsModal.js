import React,{Component} from 'react';
import { Modal,ModalManager,Effect} from 'react-dynamic-modal';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { editAdminInfo } from '../../actions/credActions';

export class AdminSettingsModal extends Component{
    editAdmin = (e) => {
        let admin = {
            name:e.target.elements.name.value,
            contact: e.target.elements.phone.value,
            location: e.target.elements.location.value
        };
        this.props.editAdminInfo(JSON.stringify(admin));
    }

   render(){
      const { onRequestClose } = this.props;
      return (
         <Modal
            onRequestClose={onRequestClose}
            effect={Effect.ScaleUp} style={{"width":"30%"}}>
            <form style={{"padding":"20px 50px 20px 50px"}} onSubmit={this.editAdmin}>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Name</label>
                    <input type="name" className="form-control" name="name" id="name" aria-describedby="emailHelp" placeholder="Enter name"/>
                    <small id="emailHelp" className="form-text text-muted">This the name of your business.</small>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Location</label>
                    <input type="text" name="location" className="form-control" id="exampleInputPassword1" placeholder="Location"/>
                    <small id="locationHelp" className="form-text text-muted">This is where the business is located.</small>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Phone number</label>
                    <input type="tel" id="phone" className="form-control" name="phone"
                                                    placeholder="1234567890"
                                                pattern="[0-9]{3}-[0-9]{10}"
                                                required />
                                            <span className="validity"></span>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
            <button className="btn btn-danger" onClick={ModalManager.close}>Close</button>
         </Modal>
      );
   }
}

AdminSettingsModal.propTypes = {
    editAdminInfo: PropTypes.func.isRequired,
}

export default connect(null,{ editAdminInfo })(AdminSettingsModal);