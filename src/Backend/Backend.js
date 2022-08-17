import axios from "axios";
import { useState } from "react";

const url = "http://localhost:3200";

function Backend(route,response){
    const [data, setData] = useState();
    if (route === "home"){
            axios.get(`${url}/test`)
                .then(function (response){
                    setData(response.data);
                }
            )    
    }
    const responsio = data;
    return responsio;
}


export default Backend;