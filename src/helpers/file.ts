
export const download = (filename: string, content: string) => {
  const element = document.createElement('a')
  element.setAttribute('href', content)
  element.setAttribute('download', filename)

  element.style.display = 'none'
  document.body.appendChild(element)

  element.click()

  document.body.removeChild(element)
}

export const downloadAsText = (filename: string, text: string) => {
  download(filename, `data:text/plain;charset=utf-8,${encodeURIComponent(text)}`)
}

export const importFile = (onChange: any, type = 'text') => {
  const element = document.createElement('input')
  element.setAttribute('type', 'file')
  // element.setAttribute('accept', '.json')
  element.setAttribute('id', 'import')
  element.style.display = 'none'

  element.onchange = (e: any) => {
    // getting a hold of the file reference
    const file = e.target.files[0];

    // setting up the reader
    const reader = new FileReader();
    if (type === 'base64') {
      reader.readAsDataURL(file);
    } else {
      reader.readAsText(file, 'UTF-8');
    }

    // here we tell the reader what to do when it's done reading...
    reader.onload = (readerEvent: any) => {
      const content = readerEvent.target.result; // this is the content!
      onChange(content);
    }
  }

  document.body.appendChild(element)

  element.click()

  document.body.removeChild(element)
}
