import React from 'react';
import './step.scss';
// @ts-ignore
import camiseta from '../../../assets/images/camiseta_1-100.jpg';
import { AnimationProps, motion } from 'framer-motion';

interface IProps {
    variants?: AnimationProps['variants'];
    delay?: number;
    title: string;
    content: string;
}

const Step = (props: IProps) => {
    const { variants, delay, content, title } = props;

    return (
        <motion.div
            className="step"
            initial={delay ? { x: '-250px', opacity: 0 } : ''}
            animate={
                delay
                    ? {
                          x: 0,
                          opacity: 1,
                          transition: {
                              delay: delay,
                              duration: 3,
                              ease: 'easeInOut'
                          }
                      }
                    : ''
            }
        >
            <img src={camiseta} alt="" className="step__img" />
            <h2 className="step__title">{title}</h2>
            <p className="step__content">{content}</p>
        </motion.div>
    );
};

export default Step;
