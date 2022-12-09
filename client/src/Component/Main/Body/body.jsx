import React, { useState } from 'react';
import axios from 'axios';
import './body.css';

function Body() {
    const [file, setFile] = useState(null);

    const onFormSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('photo', file);
        const config = {
            headers: {
                'content-type': 'multipart/form-data'
            }
        }

        const url = 'http://localhost:8000/api/up/upload'
        axios.post(url, formData, config).then((res) => {
            alert('Image uploaded sucessfully !!!')
        }).catch((err) => {
            console.log('ERROR', err);
        })
    }

    const onInputChange = (e) => {
        setFile(e.target.files[0]);
    }

    return (
        <>
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                <div className="row">
                    <div>
                        <form onSubmit={onFormSubmit}>
                            <div className="form-group files">
                                <label>Upload Your File </label>
                                <input type="file" name='photo' className="form-control" multiple="" onChange={onInputChange}/>
                            </div>
                        </form>
                        <div style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
                            <button type='submit' style={{ marginBottom: "3rem" }} className="bt" id='bt1'>Upload</button>
                            <button style={{ marginBottom: "3rem" }} className="bt" id='bt2'>Delete</button>
                            <button style={{ marginBottom: "3rem" }} className="bt">Download</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Body
