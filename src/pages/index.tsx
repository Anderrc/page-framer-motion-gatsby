import React, { useState } from 'react';
import Layout from '../components/organims/layout/layout';
// @ts-ignore
import camiseta from '../assets/images/camiseta_1-100.jpg';
// @ts-ignore
import slashes from '../assets/images/rancho.jpg';
import '../styles/index.scss';
import './index.scss';
import { motion } from 'framer-motion';
import Button from '../components/atoms/button/button';
import Arrow from '../components/atoms/arrow/arrow';
import Step from '../components/organims/step/step';
import { Parallax } from 'react-parallax';
import SEO from '../components/atoms/seo/seo';
import siteUrl from '../utils/siteUrl';

const IndexPage = () => {
    const [like, setLike] = useState(false);
    const [like2, setLike2] = useState(false);
    return (
        <Layout>
            <SEO title={'Index'} description={'Prueba'} slug={siteUrl + '/'} />
            <div className="p-index">
                <header className="p-index__header">
                    <section className="section section__one">
                        <h1 className="title__section">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae,
                            velit!
                        </h1>
                        <p className="section__content">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam
                            aliquam dolores sequi odit quo maxime nisi voluptatum nemo at, dolorem
                            temporibus excepturi veritatis eveniet facilis officia laudantium
                            sapiente repellat voluptate?
                        </p>
                        {/* <button className="btn">Download</button> */}
                        <Button
                            type="primary"
                            text="Download"
                            action={() => console.log('download')}
                        />
                    </section>
                    <section className="section">
                        <div className="card">
                            <img src={camiseta} alt="" />

                            <div className="card__content">
                                <div className="title_content">
                                    <h2 className="title">title</h2>
                                </div>
                                <p className="content">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                    Explicabo, est!
                                </p>
                            </div>
                            <div className="card__button">
                                <input
                                    type="checkbox"
                                    name=""
                                    id="btn-1"
                                    className="btn__checkbox"
                                    onChange={() => setLike(!like)}
                                />
                                <label htmlFor="btn-1" className="btn__like">
                                    <motion.div
                                        initial={{ scale: 1 }}
                                        animate={
                                            like
                                                ? {
                                                      scale: 1.5,
                                                      transition: {
                                                          duration: 1,
                                                          repeat: Infinity,
                                                          repeatType: 'reverse'
                                                      }
                                                  }
                                                : ''
                                        }
                                    >
                                        ❤
                                    </motion.div>
                                </label>
                            </div>
                        </div>
                        <div className="card card--right">
                            <img src={camiseta} alt="" />

                            <div className="card__content">
                                <div className="title_content">
                                    <h2 className="title">title</h2>
                                </div>
                                <p className="content">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                    Explicabo, est!
                                </p>
                            </div>
                            <div className="card__button">
                                <input
                                    type="checkbox"
                                    name=""
                                    id="btn-2"
                                    className="btn__checkbox"
                                    onChange={() => setLike2(!like2)}
                                />
                                <label htmlFor="btn-2" className="btn__like">
                                    <motion.div
                                        initial={{ scale: 1 }}
                                        animate={
                                            like2
                                                ? {
                                                      scale: 1.5,
                                                      transition: {
                                                          duration: 1,
                                                          repeat: Infinity,
                                                          repeatType: 'reverse'
                                                      }
                                                  }
                                                : ''
                                        }
                                    >
                                        ❤
                                    </motion.div>
                                </label>
                            </div>
                        </div>
                    </section>
                </header>

                <main className="p-index__main">
                    <div className="main_title">
                        <h2> Lorem ipsum dolor sit amet. </h2>
                    </div>
                    <div className="main__steps">
                        <Step
                            title="Paso 1"
                            content="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit, voluptas."
                        ></Step>
                        <Arrow duration={3} dalay={2}></Arrow>
                        <Step
                            delay={3}
                            title="Paso 3"
                            content="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit, voluptas."
                        ></Step>
                        <Arrow duration={3} dalay={10}></Arrow>
                        <Step
                            delay={10}
                            title="Paso 3"
                            content="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit, voluptas."
                        ></Step>
                    </div>
                </main>
                <section className="main-parallax">
                    <Parallax strength={200} bgImage={slashes} className="main-parallax__img">
                        <div style={{ height: 180 }}></div>
                    </Parallax>
                    <div className="main-parallax__content">
                        <h3>Content 👨🏽‍🌾</h3>
                        <p>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint similique
                            id voluptatum nam, architecto ea amet repellat soluta quas unde est,
                            quae accusantium. Excepturi aliquam vero, nisi temporibus nesciunt
                            labore!
                        </p>
                    </div>
                </section>
            </div>
        </Layout>
    );
};

export default IndexPage;
