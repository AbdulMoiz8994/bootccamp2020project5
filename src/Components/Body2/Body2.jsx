import React, { useEffect } from 'react'
import { Typography, Box } from '@material-ui/core'
import Aos from 'aos';
import 'aos/dist/aos.css'

import style from './Body2.module.css';
import CNC from '../Images/cloud1.png'
import IOT from '../Images/IOT1.gif'
import BC from '../Images/blockchain.gif'

import classes from './Body2.module.css';

export const Body2 = () => {
    useEffect(() => {
        Aos.init({ duration: 1000 })
    }, [])

    return (
        <div>
            <div className={style.root}>
                <Box>
                    <img data-aos="fade-up" src={CNC} alt="CLOUD Computing" className={style.img} />
                </Box>
                <Box data-aos="fade-up">
                    <Typography>
                        <h1 className={style.heading}>Cloud native Computing</h1>
                        <p className={style.para}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam accusantium voluptatem ipsam reprehenderit ad maxime rerum molestiae voluptatibus, nihil magni eos quod saepe fugiat odio neque culpa temporibus quia ut!</p>
                    </Typography>
                </Box>
            </div>

            <div className={style.root}>
                <Box>
                    <img data-aos="fade-down" src={IOT} alt="CLOUD Computing" className={style.img} />
                </Box>
                <Box data-aos="fade-down">
                    <Typography>
                        <h1 className={style.heading}>Internet of Things</h1>
                        <p className={style.para}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam accusantium voluptatem ipsam reprehenderit ad maxime rerum molestiae voluptatibus, nihil magni eos quod saepe fugiat odio neque culpa temporibus quia ut!</p>
                    </Typography>
                </Box>
            </div>

            <div className={classes.root}>
                <Box data-aos="fade-right">
                    <Typography>
                        <h1 className={style.headingBC}>BlockChain</h1>
                        <p className={style.paraBC}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam accusantium voluptatem ipsam reprehenderit ad maxime rerum molestiae voluptatibus, nihil magni eos quod saepe fugiat odio neque culpa temporibus quia ut!</p>
                    </Typography>
                </Box>
                <Box>
                    <img data-aos="fade-right" src={BC} alt="CLOUD Computing" className={style.img} />
                </Box>

            </div>
        </div>
    )
}
