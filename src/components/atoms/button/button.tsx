import React from 'react';
import './button.scss';


interface IProps {
    action: React.MouseEventHandler<HTMLButtonElement>;
    text: string;
    type: string
}

const Button = (props: IProps) => {
    const { action, text, type } = props;

    return (
        <button className={"a-button " + "a-button--"+ type} onClick={action}>
            {text}
        </button>
    );
};

export default Button;
