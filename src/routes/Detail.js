import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function Detail(props) {

    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        if (location.state === null){
            navigate('/');
        }
    });

    console.log(location);
    
    if (location.state) {
        const { title } = location.state;
        return <span>{title}</span>;
    }

    return null;

}

export default Detail;