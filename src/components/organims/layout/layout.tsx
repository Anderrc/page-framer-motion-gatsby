import React from 'react';
import Footer from '../footer/footer';
import Header from '../header/header';
// @ts-ignore
import slashes from '../../../images/wood.jpg';
import { Parallax, Background } from 'react-parallax';
import './layout.scss';

interface IProps {
    children: React.ReactNode;
}

const Layout = (props: IProps) => {
    const { children } = props;
    return (
        <>
            <Header />
            <Parallax strength={500} >
                <Background className="custom-bg">
                    <div
                        style={{
                            backgroundImage: `url(${slashes})`,
                            left: 0,
                            backgroundRepeat:'repeat',
                            minHeight:"100vh",
                            height:"7000px",
                            minWidth: "100vw",
                            backgroundSize:"100%"
                        }}
                    />
                </Background>
                <main className="o-layout__main">{children}</main>
            </Parallax>
            <Footer />
        </>
    );
};

export default Layout;
