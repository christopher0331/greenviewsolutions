import React from 'react';
import '../../public/styles.css';
import Banner from './Header.jsx';


class App extends React.Component {
    constructor(props){
      super(props);
        
    }

    
    render() {
        return(
            <div className='appShell'>
                <Banner />
            </div>
        );
    }

}

export default App;