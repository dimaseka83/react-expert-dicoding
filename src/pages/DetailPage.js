import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import { useParams } from "react-router-dom";
import ListComment from "../components/ListComment";
import ThreadComment from "../components/ThreadComment";
import ThreadDetail from "../components/ThreadDetail";
import {
    asyncCreateCommentThread,
    asyncReceiveThreadDetail,
    asyncToggleDownVoteComment,
    asyncToggleDownVoteThreadDetail,
    asyncToggleUpVoteComment,
    asyncToggleUpVoteThreadDetail
} from "../states/ThreadDetail/action";

function DetailPage() {
    const { id } = useParams();
    const {
        threadDetail = null,
        users = [],
        authUser
    } = useSelector((states) => states);
    const [status, setStatus] = useState('none');
    const dispatch = useDispatch();
}