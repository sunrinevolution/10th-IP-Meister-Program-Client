import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import styled from 'styled-components'
import Button from '@material-ui/core/Button';

import Dialog from '@material-ui/core/Dialog';

import DialogTitle from '@material-ui/core/DialogTitle';

import DialogContent from '@material-ui/core/DialogContent';

import DialogActions from '@material-ui/core/DialogActions';

import Typography from '@material-ui/core/Typography';




const customStyles = {


  content: {

    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)'
  }
};



// Make sure to bind modal to your appElement (http://reactcommunity.org/react-modal/accessibility/)
// Modal.setAppElement('#yourAppElement')

export default function Moodal(props) {
  var subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(props.modal);
  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = '#f00';
    // if (props.btn)

    // props.socket.emit('tts',{str:props.time,time:2})

    // if(props.socket!=null)
    // props.socket.emit('tts',{str:props.title})



  }



  return (
    <div>

      <Modal
        isOpen={props.modal}
        onAfterOpen={afterOpenModal}
        onRequestClose={props.closeModal}
        style={customStyles}
        contentLabel="Example Modal"
        ariaHideApp={false}
      >
        <DialogTitle >

          <h3 ref={_subtitle => (subtitle = _subtitle)}>{props.title}</h3>

        </DialogTitle>
        {/* <button onClick={props.closeModal}></button> */}
        <DialogContent>
          <Typography gutterBottom>
            <h4>{props.time}</h4>
          </Typography>
        </DialogContent>


        {props.btn &&
          <>
            <DialogActions>
              <Button variant="contained" color="primary" onClick={() => { props.closeModal(); props.dialogflow(props.time) }}>예</Button>
              <Button variant="outlined" color="primary" onClick={() => { props.closeModal(); props.formatText() }}>아니요</Button>
            </DialogActions>
          </>
        }
      </Modal>
    </div>
  );
}
