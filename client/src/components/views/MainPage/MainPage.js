import React, { useEffect, useState } from 'react';
import { API_URL, API_KEY, IMAGE_BASE_URL } from '../../Config';
import GridCards from '../commons/GridCards';
import { Avatar, Col, Row } from 'antd';
import { Descriptions } from 'antd';
import Item from 'antd/lib/list/Item';
import Auth from '../../../hoc/auth';
import Meta from 'antd/lib/card/Meta';
// import { json } from 'body-parser';
import axios from 'axios';
import moment from 'moment';

function MainPage() {
    const [Json, setJson] = useState([]);
    useEffect(() => {
        axios.get('api/json/getJsons')
            .then(response => {
                if (response.data.success) {
                    console.log(response.data);
                    setJson(response.data.jsons)
                } else {
                    alert('json 가져오기를 실패했습니다.');
                }
            })

    }, [])
    const renderCards = Json.map((json, index) => {
        console.log('json:', json);
        return <Col key={index} lg={6} md={8} xs={24}>
            <a href={`/json/post/${json._id}`} >
                <div style={{ position: 'relative' }}>
                </div>
            </a>
            <br />
            <Meta
            // title={json.title}
            // description=""
            >
            </Meta>
            <div> 제목 : {json.title}</div>
            <div> 파일 이름 : {json.realName}</div>
            <div> 작성자 : {json.writer.name}</div>



            <div>날짜 :  {moment(json.createdAt).format("MMM Do YY")} </div>
        </Col>
    })
    return (
        <div>
            로그인이 필요합니다.
        </div>
    )
}

export default MainPage