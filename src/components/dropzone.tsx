import React, {useCallback} from 'react'
import {useDropzone} from 'react-dropzone'

const Dropzone = () => {
const {acceptedFiles, getRootProps, getInputProps} = useDropzone();

  return (
    <section className="container">
      <div {...getRootProps({className: 'dropzone'})}>
        <input {...getInputProps()} />
        <p>Drag &apos;n&apos; drop some files here, or click to select files</p>
      </div>
    </section>
  );
}

export default Dropzone