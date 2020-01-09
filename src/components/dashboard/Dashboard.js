import React, { Component} from 'react'; 
import Display from '../design/Display';
import Settings from '../design/Setting';

class Dashboard extends Component{

    state = {
        tshirtColor: 'black',
        upperText: 'This is Upper text',
        lowerText: 'This is Lower text',
        memeImg: ' '
    }
    render(){
        return(
            <div className="container py-5">
                <div className="row">
                    <div className="col-lg-8">
                    <Display display={this.state}/>
                    </div>
                    <div className="col-lg-4">
                    <Settings/>
                    </div>
                </div>
            </div>
            
        )
    }
}

export default Dashboard