import React from 'react';
import './WorkExp.scss';
import TabPanel from './TabPanel/TabPanel';


function WorkExp() {
    return (
        <React.Fragment>
            <div className="section work-exp">
                <div className="title-heading ">
                    <h4>Work Experience</h4>
                    <div className="title-heading-line"></div>
                </div>
                <TabPanel />
            </div>


        </React.Fragment>
    )
}

export default WorkExp



