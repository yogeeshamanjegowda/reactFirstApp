import React from 'react';
import { Link } from 'react-router-dom';

export default class Layout extends React.Component {
    render() {
    return (
        <div>
            <div>
                <h1>MadOwlNews.com - Breaking news about Mad Owls</h1>
            </div>
            <ul>
                <li><Link to={'/'}>Home</Link></li>
                <li><Link to={'/about'}>About</Link></li>
            </ul>
            <div>
                { this.props.children }
            </div>
        </div>
        );
    }
}

