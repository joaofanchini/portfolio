import React, {ChangeEvent, useState} from 'react'
import './Tabs.scss'

export interface TabsContent {
    id: string
    labelContent: string
    icon?: JSX.Element
    elementToShow?: JSX.Element
}

declare interface TabsProps {
    content: TabsContent[]
}

const Tabs: React.FC<TabsProps> = (props: TabsProps) => {
    const [idElementSelected, setIdElementSelected] = useState('')
    const handleCheckedElement = (event: ChangeEvent<HTMLInputElement>) => {
        if (event.target.id) {
            setIdElementSelected(event.target.id)
            console.log(idElementSelected)
        }

    }
    return (
        <>
            <div className='AppTabContainer'>
                <div className='AppLabelGroup'>
                    {
                        props.content.map((c, index) => {
                            return (
                                <label key={index} htmlFor={c.id} className='AppLabelTab'>
                                    {c.icon || ''}
                                    {c.labelContent}
                                    <input type='radio' name='journey' className='AppRadioTab' id={c.id}
                                           checked={c.id === idElementSelected}
                                           onChange={(e) => handleCheckedElement(e)}/>
                                </label>
                            );
                        })
                    }
                </div>
                <div className='AppTabElementShow'>
                    {
                        props.content.filter(c => c.id === idElementSelected).map((c, index) => {
                            return (
                                <div key={index}>
                                    {c.elementToShow}
                                </div>
                            );
                        })
                    }
                </div>
            </div>
        </>
    );
}

export default Tabs;