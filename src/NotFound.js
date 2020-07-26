import React from 'react';
import { Link } from "react-router-dom";

class NotFound extends React.Component {
    render() {
        return (
            <div>
                <h2>Page Not Found</h2>
                <Link to='/'>Go to home</Link>
            </div>
        )
    }
}

export default NotFound