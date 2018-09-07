import React,{Component} from 'react';
import { Modal,ModalManager,Effect} from 'react-dynamic-modal';

class AdminSettingsModal extends Component{
   render(){
      const { text,onRequestClose } = this.props;
      return (
         <Modal
            onRequestClose={onRequestClose}
            effect={Effect.Newspaper}>
            <h1>What you input : {text}</h1>
            <button onClick={ModalManager.close}>Close Modal</button>
         </Modal>
      );
   }
}

export default AdminSettingsModal;