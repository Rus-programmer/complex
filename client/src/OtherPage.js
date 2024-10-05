import React from "react";
import {Link} from 'react-router-dom'

function OtherPage() {
    return (
        <div>
            Im some other page
            <Link to="/">Back to home</Link>
        </div>
    )
}

export default OtherPage