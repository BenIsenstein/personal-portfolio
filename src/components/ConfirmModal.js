import React from 'react'
import ReactDOM from 'react-dom'
import { Button, FlexSection } from '.'

import styles from '../styles/ConfirmModal.css'

// const ConfirmModal = ({ isConfirmModalShowing, hideConfirmModal, modalContent, confirmPrompt, actionOnConfirm, ...props }) => {
const ConfirmModal = ({ isConfirmModalShowing, hideConfirmModal, modalContent, confirmPrompt, actionOnConfirm, actionOnCancel, ...props }) => {

  // buttonResponse = false
  if(isConfirmModalShowing) {
    return (
      ReactDOM.createPortal(
      <React.Fragment>
        <div className={styles.modalConfirmOverlay}/>
          <div className={styles.modalConfirmWrapper} aria-modal aria-hidden tabIndex={-1} role="dialog">
            <div className={styles.modalConfirm}>
              
              <div className={styles.modalConfirmHeader}>
                <button type="button" className={styles.modalConfirmCloseButton} data-dismiss="modal" aria-label="Close" onClick={hideConfirmModal}>
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>

              <FlexSection {...props.modalContentProps}>
                {modalContent}
              </FlexSection>

              <FlexSection fullWidth justifyCenter marginTop1em>
                <Button fullWidth important onClick={() => {
                  hideConfirmModal();
                  actionOnConfirm();
                }}>
                  {confirmPrompt}
                </Button>
                <Button fullWidth important onClick={()=> {
                  hideConfirmModal();
                  actionOnCancel();
                }}>
                  Cancel
                </Button>
              </FlexSection>
            </div>
          </div>
        </React.Fragment>, document.body
      )
    )
  }
  else {
    return (null)
  }
}

export { ConfirmModal }