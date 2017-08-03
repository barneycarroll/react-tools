import React from 'react';
import ReactDOM from 'react-dom';

import Message from './components/Message';

class App extends React.Component {
    render() {
        return(
            <div>
                <div>Hello World!</div>
                <Message text="Guten Tag" />
            </div>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('app')
);
