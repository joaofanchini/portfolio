import React from 'react'
import './Timeline.scss';


export interface TimelineElement {
    title: string
    description: string
    rangeDate: string
    iconCalendar?: JSX.Element
}

declare interface TimelineProps {
    elements: TimelineElement[]
}

const Timeline: React.FC<TimelineProps> = (props) => {
    function renderCommons(index: number, element: TimelineElement): JSX.Element {
        return (<div className='AppTimelineDataContent'>
            <h3 className='AppTimelineDataTitle'>{element.title}</h3>
            <span className='AppTimelineDataDescription'><p>{element.description}</p></span>
            <div className='AppTimelineDataRangeDate'>{element.iconCalendar} {element.rangeDate}</div>
        </div>);
    }

    function renderEven(index: number, element: TimelineElement): JSX.Element {
        return (<div className='AppTimelineData' key={index}>
            {renderCommons(index, element)}
            <div>
                <span className='AppTimelineQualificationRounder'/>
                {index !== (props.elements.length - 1) && <span className='AppTimelineQualificationLine'/>}
            </div>
        </div>)
    }

    function renderOdd(index: number, element: TimelineElement): JSX.Element {
        return (<div className='AppTimelineData' key={index}>
            <div/>
            <div>
                <span className='AppTimelineQualificationRounder'/>
                {index !== (props.elements.length - 1) && <span className='AppTimelineQualificationLine'/>}
            </div>
            {renderCommons(index, element)}
        </div>)
    }

    return (
        <div className='AppTimelineContainer'>
            <div className='AppTimelineContent'>
                {
                    props.elements.map((element, index) =>
                        (index % 2 === 0 ? renderEven(index, element) : renderOdd(index, element)))
                }
            </div>
        </div>
    );
}

export default Timeline;