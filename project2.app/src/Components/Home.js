import React, { useEffect, useState } from "react";
import Games from "./Games";
import Description from "./Description";
import Form from "./Form";

//fill in with the link to the db.json file
const URL  = ""


function Home()
{
    // made state for initial fetch since we want the information to pass down to multiple components
    // const [collection, setCollection] = useState([])
    const [collection,setCollection] = useState([])


    //fetching inital data from the db.json
    useEffect(() => {
        fetch(URL)
        .then(res => res.json())
        .then(data => setCollection(data))
    }, [])



    return (
        <div className="Home">
            <Games collection={collection}/>
            <Description/>
            <Form/>
        </div>
    )
}

export default Home;