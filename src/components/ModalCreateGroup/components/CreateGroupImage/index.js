import React, { useState } from 'react';
import './style.css';

// Assets
import CreateGroupImagePlaceholder from '../../../../assets/CreateGroupImagePlaceholder.jpg'

// AntD
import 'antd/dist/antd.css';
import { Upload, message } from 'antd';

// Material UI
import CloudUploadIcon from '@material-ui/icons/CloudUpload';

const { Dragger } = Upload;

function getBase64(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = error => reject(error);
    });
}

const CreateGroupImage = () => {

    const [uploadDone, setUploadDone] = useState(false);
    const [file, setFile] = useState('');

    const props = {
        name: 'file',
        multiple: false,
        // Where to go when it uploads
        action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
        onChange(info) {
            const { status } = info.file;

            if (status === 'done') {
                message.success(`${info.file.name} file uploaded successfully.`);
                setUploadDone(true)
                handlePreview(info.file)
                
            } else if (status === 'error') {
                message.error(`${info.file.name} file upload failed.`);
            }
        }, 
    };

    const handlePreview = async file => {
        if (!file.url && !file.preview) {
            file.preview = await getBase64(file.originFileObj);
        }

        setFile(file.url || file.preview)
    };


    return (
        <>
        <div className="CreateGroupImage-container">
            <div className="CreateGroupImage-imageContainer">
                {!uploadDone ?
                    <img
                        src={CreateGroupImagePlaceholder}
                        alt="GroupProfilePic"
                        className="CreateGroupImage-Placeholder"
                    />
                    :
                    <img
                        src={file}
                        alt="GroupProfilePic"
                        className="CreateGroupImage-Image"
                    />
                    }
            </div>
            </div>
            <Dragger {...props}>
                <p className="ant-upload-drag-icon">
                    <CloudUploadIcon style={{ color: "#d0094d", fontSize: 60 }} />
                </p>
                <p className="ant-upload-text">Clique ou arraste o arquivo para a area de upload</p>
            </Dragger>

        </>
    )
}

export default CreateGroupImage;
