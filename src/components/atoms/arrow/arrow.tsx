import { motion } from 'framer-motion';
import React from 'react';
import './arrow.scss';

interface IProps {
    duration: number;
    dalay: number
}

const Arrow = (props: IProps) => {
    const { duration, dalay } = props;

    return (
        <motion.div className="arrow">
            <motion.div
                className="curve"
                initial={{ height: 0 }}
                animate={{
                    height: 160,
                    transition: {
                        duration: duration,
                        delay: dalay,
                        ease: 'easeIn'
                    }
                }}
            >
                {' '}
            </motion.div>
            <motion.div
                className="point"
                initial={{ top: 20, opacity:0, height:0 }}
                animate={{
                    top: 135,
                    display:"block",
                    opacity:1,
                    transition: {
                        duration: duration,
                        delay: dalay,
                        ease: 'easeIn'
                    }
                }}
            ></motion.div>
        </motion.div>
    );
};

export default Arrow;
