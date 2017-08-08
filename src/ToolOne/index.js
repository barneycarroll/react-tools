// ==============================================
// I M P O R T S
// ==============================================
//
import React from 'react';
import ReactDOM from 'react-dom';
import Message from './components/Message';


// ==============================================
// A P I   D A T A   S O U R C E
// ==============================================
//
const apiUrls = {
    "en-GB": 'https://www.citizensadvice.org.uk/tools/benefits-checker/?json=json',
    "en-NIR": 'https://www.citizensadvice.org.uk/nireland/tools/benefits-checker/?json=json',
    "en-SCT": 'https://www.citizensadvice.org.uk/scotland/tools/benefits-checker/?json=json'
}

const dataUrl = `${apiUrls}.document.documentElement.lang`;


// ==============================================
// A P P L I C A T I O N
// ==============================================
//
class App extends React.Component {
    render() {
        return(
            <div>
                <div>Hello World!</div>
                <Message text="Tool one is loaded!" />
            </div>
        );
    }
}

ReactDOM.render(
    <App data="" />,
    document.getElementById('app')
);
