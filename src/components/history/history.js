import React from 'react';
import { Link, Route } from 'react-router-dom';
import Modal from '../modal/modal.js';




class HistoryList extends React.Component {

    constructor() {
        super();

        this.state = {
            showDetails: false,
        };
    }

    toggleDetailModal = () => {
        this.setState(oldState => ({ showDetails: !oldState.showDetails }));
    }

    render() {
        //const { showDetails } = this.state;
        const { history } = this.props;
        return (
            <>
                <ul>
                    {console.log(history)}
                    {history.map((item, index) => (
                        <li key={index}><b>{item.method}</b>  {item.url} 
                             <Link to={{
                            pathname: '/history/' + index,
                            state: {
                             entry: history[index],
                            }
                          }}>Details</Link>  </li>
                    ))}
                </ul>

                <Route path="/history/:id" component={Modal}>
                    {/* <Modal title="Detail"  history={history} onClose={() => history.push('/')} > */}
                </Route>
            </>
        )
    }

}
export default HistoryList;