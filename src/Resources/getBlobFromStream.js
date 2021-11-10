const getBlobFromStream = async (stream) => {
  const reader = stream.getReader()
  const readerStream = new ReadableStream({
    start(controller) {
      const pump = async () => {
        const { done, value } = await reader.read()
            
        if (done) {return controller.close()}
            
        controller.enqueue(value)
        return pump()
      }

      return pump()
    }
  })
  const responseForBlob = await new Response(readerStream)
  const resultingBlob = await responseForBlob.blob()
  
  return resultingBlob
}

export { getBlobFromStream }