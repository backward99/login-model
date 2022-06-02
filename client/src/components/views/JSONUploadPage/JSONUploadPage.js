import { Button, Form, Input } from 'antd';
import TextArea from 'antd/lib/input/TextArea';
import Title from 'antd/lib/skeleton/Title';
// import { Axios } from 'axios';
import axios from "axios";
import React, {useState} from 'react'
import Dropzone from 'react-dropzone';
import { useSelector } from 'react-redux';

// const {TextArea} = Input;
// const {Title} = Typography;

function JSONUploadPage() {

    const user = useSelector(state => state.user)

    const [JsonTitle, setJsonTitle] = useState("")
    const [Descriptions, setDescriptions] = useState("")
        

    const onSubmit = (e) =>{
        e.preventDefault();

        const variables = {
            writer: user.userData._id,
            title: JsonTitle,
            description : Descriptions
        }
        axios.post('/api/json/uploadJson', variables)
        .then(response => {
            if(response.data.success){
                console.log(response.data)
            }else{
                alert('데이터베이스에 파일 업로드 실패');
            }
        })
    }
    const onTitleChange = (e) =>{
        setJsonTitle(e.currentTarget.value);
    }

    
    const onDescriptioinChange = (e) =>{
        setDescriptions(e.currentTarget.value);
    }

    const onDrop = (files) =>{
        let formData = new FormData();
        const config = {
            header: {'content-type': 'multipart/form-data'}
        }
        formData.append("file", files[0]);

        axios.post('/api/json/uploadfiles', formData, config)
        .then(response => {
            if(response.data.uploadSuccess){
                console.log('response.data:',response.data)
            }else{
                alert('파일업로드 실패');
            }
        })
    }

    return (
    <div style={{maxWidth:'700px', margin:'2rem auto'}}>
        <div style={{textAlign:'center', marginBottom:'2rem auto'}}>
            <Title level={2}> Upload Json</Title>
        </div>

        <Form onSubmit={onSubmit}>
            <div style={{display:'flex', justifyContent:'space_between'}}>
                <Dropzone
                onDrop={onDrop}
                multiple={false}
                maxSize={10000000}
                >
                {({getRootProps, getInputProps}) => (
                    <div style={{ width:'300px', height: '240px', border:'1px solid lightgray', display:'flex',
                    alignItems:'cenetr', justifyContent:'center'}} {...getRootProps()}>
                        <input {...getInputProps()}/>

                    </div>
                )}
                </Dropzone>
            </div>
            <br/>
            <br/>
            <label>Title</label>
            <Input 
            onChange={onTitleChange}
            value={JsonTitle}>

            </Input>
            <br/>
            <br/>
            <label>Descriptions</label>
            <TextArea 
            onChange={onDescriptioinChange}
            value={Descriptions}
            >
                
            </TextArea>
            <br/>
            <br/>
            <Button type="primary" size='large' onClick={onSubmit}>
                submit
            </Button>
        </Form>
    </div>
  )
}

export default JSONUploadPage