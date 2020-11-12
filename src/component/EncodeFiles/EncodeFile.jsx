import {useState} from 'react'
import {CustomInput} from './CustomInput'
import {CustomButton} from './CustomButton'

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
            <CustomInput onChange={changeFiles}/>
            <CustomButton onClick={uploadFiles}/>
        </>
    )
}

export default EncodeFile