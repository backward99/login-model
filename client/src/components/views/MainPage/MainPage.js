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
    return (
        <div>
            로그인이 필요합니다.
        </div>
    )
}

export default MainPage