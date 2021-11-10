import { useState } from 'react'
import styled from 'styled-components'
import download from 'in-browser-download'
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import { ConfirmModal } from '.'
import { useConfirmModal, getBlobFromStream } from '../resources'
import resumeUrl from '../images/Ben_Isenstein_Resume.pdf'

const useResumeModal = () => {
  const { isConfirmModalShowing: isResumeShowing, toggleConfirmModal: toggleResume } = useConfirmModal()
  const [numPages, setNumPages] = useState(null)
  
  const onDocumentLoadSuccess = ({ numPages: nextNumPages }) => setNumPages(nextNumPages)
  const downloadResume = () => fetch(resumeUrl).then(res => getBlobFromStream(res.body)).then(blob => download(blob, 'Ben_Isenstein_Resume.pdf'))
  const ResumeContainer = styled.div``

  const ResumeModal = () => <ConfirmModal
    isConfirmModalShowing={isResumeShowing}
    hideConfirmModal={toggleResume}
    modalContent={<ResumeContainer>
      <Document
        file={resumeUrl}
        onLoadSuccess={onDocumentLoadSuccess}
      >
        {Array.from(
          new Array(numPages),
          (el, index) => <Page key={`page_${index + 1}`} pageNumber={index + 1} />
        )}
      </Document>
    </ResumeContainer>}
    confirmPrompt='Download'
    actionOnConfirm={downloadResume}
    actionOnCancel={() => {}}
  />
  
  return {
    ResumeModal,
    toggleResume,
    isResumeShowing
  }
}

export { useResumeModal }