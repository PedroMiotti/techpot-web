import React, { useState } from 'react';
import './style.css';

// Assets
import CreateGroupImagePlaceholder from '../../../../assets/CreateGroupImagePlaceholder.jpg'

// AntD
// import 'antd/dist/antd.css';
import { Upload } from 'antd';

// Material UI
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        paddingBottom: '20px',

    },
    button: {
        marginRight: theme.spacing(2),
        marginLeft: theme.spacing(2),

    },
    instructions: {
        marginTop: theme.spacing(1),
        marginBottom: "30px",
    },
}));

const { Dragger } = Upload;

function getBase64(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = error => reject(error);
    });
}

const CreateEventImage = ({ values, imgSrcInput, activeStep, isLastStep, handleBack, handleNext, criarEvento}) => {
    const classes = useStyles();

    const [uploadDone, setUploadDone] = useState(false);
    const [file, setFile] = useState(imgSrcInput);

    const props = {
        name: 'file',
        multiple: false,
        // Where to go when it uploads
        action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
        onChange(info) {
            const { status } = info.file;

            if (status === 'done') {
                setUploadDone(true)
                handlePreview(info.file)

            } else if (status === 'error') {
                console.log('error')
            }
        },
    };

    const handlePreview = async file => {
        if (!file.url && !file.preview) {
            file.preview = await getBase64(file.originFileObj);
        }

        setFile(file.url || file.preview);
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

            <div className="CreateGroup-navButtons-Container">
                <Button disabled={activeStep === 0} onClick={() => handleBack({imgSrcInput: file})} className={classes.button}>
                    Voltar
                    </Button>

                <Button
                    variant="contained"
                    style={{ backgroundColor: "#d0094d", color: "#fff" }}
                    onClick={isLastStep ? () => criarEvento({ imgSrcInput: file }) : () => handleNext({ imgSrcInput: file })}
                    className={classes.button}
                >
                    {isLastStep ? 'Criar' : 'Próximo'}
                </Button>
            </div>

        </>
    )
}

export default CreateEventImage;
