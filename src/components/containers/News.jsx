import React from 'react';
import NewsItemListing  from '../presentation/NewsItemListing.jsx';
import { connect } from 'react-redux'
import { fetchNews } from '../../actions/actions.js'

const mapStateToProps = state => {
    return {
        news: state.news.news
    }
}

class News extends React.Component {
 componentDidMount(){
        var fakeNews = [{
            id: '1',
            title: 'Mad owl chases car',
            teaser: 'Mad owl seen tormenting drivers in Morecambe'
        }, {
            id: '2',
            title: 'Owl stowaway',
            teaser: 'Despicable owl impersonates passenger to board flight to Luton'
        }];

        this.props.dispatch(fetchNews(fakeNews));
    }
    render() {
    const newsItems = this.props.news.map( (news, i) => {
                return ( <li key={i}><NewsItemListing data = {news} /></li> );
            });

        return (
            <div>
                <div>News Items</div>
                <ul>
                    {(this.props.news.length > 0) ? <ul>{newsItems}</ul> : <div>Sorry we have no news</div>}
                </ul>
            </div>
        )
    }
}

export default connect(mapStateToProps)(News)