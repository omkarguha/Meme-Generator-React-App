import { useSearchParams } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Text from "../components/Text";
import { useState, createRef } from "react";
import { exportComponentAsJPEG } from "react-component-export-image";


const Edit=()=>{
    const [params]= useSearchParams();
    const [co, setCo] = useState(0);

    const memeRef = createRef();
    return (

        <>
            <div ref={memeRef} className="mt-5 mb-5" style={{border:"1px solid", width:"700px", padding:"auto", height:"550px"}}>
                <img src={params.get('url')} alt="" srcset="" style={{width:"380px"}} />
                <div>
                    {
                        Array(co).fill(0).map(e=> <Text/>)
                    }
                </div>
            </div>
            <Button variant="primary" onClick={()=> setCo(co+1)}>Add a Text</Button>
            <Button variant="dark" onClick={e=> exportComponentAsJPEG(memeRef)}>Save</Button>
        </>
    )
}

export default Edit;