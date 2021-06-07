import React from 'react'

import './Button.scss'

declare interface ButtonProps {
    content: string
    icon?: JSX.Element
    onClick?: () => void
}


const Button: React.FC<ButtonProps> = (props) => {
    return (
        <button className='AppButton'
                onClick={props.onClick}>
            {props.icon || ''} {props.content || ''}
        </button>
    );
}

export default Button;