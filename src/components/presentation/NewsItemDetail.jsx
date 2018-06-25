import React from 'react';
import { fetchNewsItem } from '../../actions/actions.js'
import PropTypes from 'prop-types';

class NewsItemDetail extends React.Component {

    render(){
        return (
            <div>
                <h2>{this.props.data.title}</h2>
                <p>{this.props.data.body}</p>
            </div>
        )
    }
}
NewsItemDetail.propTypes = {
    data: PropTypes.shape({
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        body: PropTypes.string.isRequired
    })
};

export default NewsItemDetail