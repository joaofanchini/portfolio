import React from 'react'

import './Journey.scss'
import DefaultPage from "../shared/DefaultPage";
import Tabs from "../shared/Tabs";
import {TabsContent} from "../shared/Tabs/Tabs";
import {IoBagSharp} from 'react-icons/io5'
import {ImBooks} from 'react-icons/im'
import Presentation from "../Presentation";
import Navigation from "../Navigation";

const Journey: React.FC<any> = () => {
    let tabs: TabsContent[] = [
        {
            id: 'work',
            labelContent: 'Trabalho',
            icon: <IoBagSharp size={30}/>,
            elementToShow: <Presentation/>
        },
        {
            id: 'studies',
            labelContent: 'Estudos',
            icon: <ImBooks size={30}/>,
            elementToShow: <Navigation/>
        }]
    return (
        <DefaultPage title='Jornada' subTitle='Minha jornada até aqui'>
            <Tabs content={tabs}/>
        </DefaultPage>
    )
};

export default Journey;