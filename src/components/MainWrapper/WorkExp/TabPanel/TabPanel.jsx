import React, { useEffect, useState } from 'react';
import { workExpData } from '../utils';

const getSelectedTab = (tabsInfo) => tabsInfo.find(el => el.isClicked);

const TabPanel = () => {
    const [tabsInfo, setTabsInfo] = useState(workExpData);
    const [clickedTab, setClickedTab] = useState(getSelectedTab(tabsInfo))


    useEffect(() => {
        const clicked = getSelectedTab(tabsInfo)
        setClickedTab(clicked)
    }, [tabsInfo])

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
                        {clickedTab && <TabContent clickedTab={clickedTab} />}
                    </div>
                </div>
            </div>

        </React.Fragment >
    )
}

export default TabPanel;


const TabContent = ({ clickedTab: { company, date, keyPoints, id } }) => {
    return (
        <React.Fragment key={id}>
            <div className="tab-panel-heading">
                <h5>{company}</h5>
                <span>{date}</span>
            </div>
            <div className="tab-panel-list">
                <ul>
                    {keyPoints.map((el, index) => <li key={index}>{el}</li>)}
                    <li></li>
                </ul>
            </div>
        </React.Fragment>
    )
};