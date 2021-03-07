import React from 'react';
import Banner from './Header.jsx'

class App extends React.Component {
    constructor(props){
      super(props);
        
    }

    
    render() {
        return(
            <div>
                <Banner />
            </div>
        );
    }

}

export default App;