import {useState} from 'react'

const EncodeFile = () => {
    const [files, setFiles] = useState([])
    const [base64Files, setBase64Files] = useState([])

    const changeFiles = (e) => {
        const fileList = files
        fileList.push(e.target.files)
        setFiles(fileList)
        fileEncodeToBase64(Object.values(fileList[0]))
    }

    //encode to Base64
    const fileEncodeToBase64 = (fileList) => {
        fileList.forEach(file => {
            const baseFiles = base64Files
            const reader = new FileReader()
            reader.readAsDataURL(file)
            reader.onload = () => {
                baseFiles.push(reader.result)
                setBase64Files(baseFiles)
                console.log(base64Files)
            }
            reader.onerror = (e) => {
                console.error(e)
            }
        })
    }

    const uploadFiles = (e) => {
        e.preventDefault()
        console.log('files', files)
        console.log('base64files', base64Files)
    }

    return (
        <>
            <input
                type="file"
                onChange={changeFiles}
                multiple
            />
            <button
                type="submit"
                onClick={uploadFiles}
            >
                Upload
            </button>
        </>
    )
}

export default EncodeFile