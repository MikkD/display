import React, { useState } from 'react';
import { workExpData } from '../utils';

const TabPanel = () => {
    const [tabsInfo, setTabsInfo] = useState(workExpData);

    const hanldeTabClick = id => setTabsInfo(prevS =>
        prevS.map(el => el.id !== id ? { ...el, isClicked: false } : { ...el, isClicked: true }))

    return (
        <React.Fragment>
            <div className="tab-wrapper">
                <div>
                    <ul>
                        {tabsInfo.map(el => <li key={el.id}>
                            <button onClick={() => hanldeTabClick(el.id)}>{el.project}</button>
                        </li>)}
                    </ul>
                </div>
                <div className="tab-panels">
                    <div className="tab-panel">
                        {tabsInfo.map(el => el.isClicked && <TabContent el={el} />)}
                    </div>
                </div>
            </div>

        </React.Fragment >
    )
}

export default TabPanel;


const TabContent = ({ el }) => {
    return (
        <React.Fragment key={el.id}>
            <div className="tab-panel-heading">
                <h5>{el.company}</h5>
                <span>{el.date}</span>
            </div>
            <div className="tab-panel-list">
                <ul>
                    {el.keyPoints.map((el, index) => <li key={index}>{el}</li>)}
                </ul>
            </div>
        </React.Fragment>
    )
};