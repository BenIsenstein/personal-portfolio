import { useState } from 'react'
import download from 'in-browser-download'
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import { ConfirmModal, ResumeContainer } from '.'
import { useConfirmModal } from '../Resources'
import resumeUrl from '../images/Ben_Isenstein_Resume_2021.10.27.pdf'

const useResume = () => {
    const { isConfirmModalShowing: isResumeShowing, toggleConfirmModal: toggleResume } = useConfirmModal()
    const [numPages, setNumPages] = useState(null)

    const downloadResume = async () => {
    const resumeRes = await fetch(resumeUrl) 
    const resumeReader = resumeRes.body.getReader()
    const resumeStream = new ReadableStream({
      start(controller) {
        const pump = async () => {
          const { done, value } = await resumeReader.read()
            
          if (done) {return controller.close()}
            
          controller.enqueue(value)
          return pump()
        }

        return pump()
      }
    })
    const streamRes = await new Response(resumeStream)
    const resumeBlob = await streamRes.blob()
  
    download(resumeBlob, 'Ben_Isenstein_Resume.pdf')
    }
  
    function onDocumentLoadSuccess({ numPages: nextNumPages }) {
      setNumPages(nextNumPages)
    }
  
    const ResumeModal = () => <ConfirmModal
      isConfirmModalShowing={isResumeShowing}
      hideConfirmModal={toggleResume}
      modalContent={<ResumeContainer>
        <Document
          file={resumeUrl}
          onLoadSuccess={onDocumentLoadSuccess}
        >
          {
            Array.from(
              new Array(numPages),
              (el, index) => <Page key={`page_${index + 1}`} pageNumber={index + 1} />
            )
          }
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

export { useResume }