import React from 'react'

import './Journey.scss'
import DefaultPage from "../shared/DefaultPage";
import Tabs from "../shared/Tabs";
import {TabsContent} from "../shared/Tabs/Tabs";
import {IoBagSharp} from 'react-icons/io5'
import {ImBooks} from 'react-icons/im'
import {BsCalendar} from 'react-icons/bs'
import Timeline from "../shared/Timeline";
import {TimelineElement} from "../shared/Timeline/Timeline";

const Journey: React.FC<any> = () => {
    const timeLineStudies: TimelineElement[] = [
        {
            title: 'titulo estudo',
            description: 'teste estudo description',
            rangeDate: '2019-2020',
            iconCalendar: <BsCalendar/>
        },
        {
            title: 'titulo',
            description: 'teste estudo description',
            rangeDate: '2019-2020',
            iconCalendar: <BsCalendar/>
        },
        {
            title: 'titulo',
            description: 'teste estudo description',
            rangeDate: '2019-2020',
            iconCalendar: <BsCalendar/>
        }
    ]
    const timeLineWork: TimelineElement[] = [
        {
            title: 'teste work titulo',
            description: 'teste description work',
            rangeDate: '2020-2021',
            iconCalendar: <BsCalendar/>
        },
        {
            title: 'teste work',
            description: 'teste description work',
            rangeDate: '2020-2021',
            iconCalendar: <BsCalendar/>
        }
    ]
    let tabs: TabsContent[] = [
        {
            id: 'work',
            labelContent: 'Trabalho',
            icon: <IoBagSharp size={30}/>,
            elementToShow: <Timeline elements={timeLineWork}/>
        },
        {
            id: 'studies',
            labelContent: 'Estudos',
            icon: <ImBooks size={30}/>,
            elementToShow: <Timeline elements={timeLineStudies}/>
        }]
    return (
        <DefaultPage title='Jornada' subTitle='Minha jornada até aqui'>
            <Tabs content={tabs}/>
        </DefaultPage>
    )
};

export default Journey;