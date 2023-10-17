import React, { useState } from "react";


function Collection()
{
    // made state for initial fetch since we want the information to pass down to multiple components
    const [collection, setCollection] = useState([])

    return (
        <div>

            <Games/>
            <Description/>
            <Form/>
        </div>
    )

}

export default Collection;