import React, {Component} from 'react';
import { Link } from 'react-router-dom';
export default class NewsItemListing extends Component {
    static propTypes : {
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        teaser: PropTypes.string.isRequired
    };
    render() {
        return (
            <div>
               <div><Link to={`/news/${this.props.id}`}><b>{this.props.title}</b></Link></div>
               <div>{this.props.teaser}</div>
            </div>
        )
    }
}


