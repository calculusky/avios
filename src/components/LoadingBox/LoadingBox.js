import LoopRoundedIcon from '@material-ui/icons/LoopRounded';
import React from 'react';
import './LoadingBox.css';

const LoadingBox = (props) => {
    return ( 
        <div className="row center spin">
            <div>
                <LoopRoundedIcon/>
            </div>            
        </div>
     );
}
 
export default LoadingBox;