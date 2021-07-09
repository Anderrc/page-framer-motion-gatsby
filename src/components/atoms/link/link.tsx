import React from 'react';
import './link.scss';

interface IProps {
    href: string;
    content: string;
    type?: string
}

const Link = (props: IProps) => {
    const { href, content, type } = props;

    return <a href={href} className={"a-link "+ "a-link--"+type }> {content}</a>;
};

export default Link;
