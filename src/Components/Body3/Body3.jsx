import React, { useEffect, useRef } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Typography } from '@material-ui/core';
import { Lottie } from './Lottie'
import Aos from 'aos';
import 'aos/dist/aos.css'

const useStyles = makeStyles({
    root: {
        // maxWidth: 345,
        display: "flex",
        flexGrow: 1,
    },
    footer: {
        marginBottom: '-30%',
        textAlign: 'center',
        fontSize: '2rem',
        backgroundColor: 'rgba(106,90,205,0.9)',
        color: 'white'
    }
});

export const Body3 = () => {
    const classes = useStyles();
    useEffect(() => {
        Aos.init = ({ duration: 3000 })
    }, [])

    return (
        <div>
            <div className={classes.root}>
                <Box>
                    <Lottie className={classes.img} />
                </Box>
                <Box data-aos="fade-down">
                    <Typography variant="h3" className="heading">Metting People</Typography>
                    <p className="paras">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime voluptate facilis labore officia, corrupti autem voluptatum in eligendi adipisci vel. Nobis, eos. Animi eius quos voluptate rem atque consectetur neque.</p>
                </Box>
            </div>
            <div>
                <footer>
                    <p className={classes.footer} data-aos="fade-right">&copy; reserved By. Abdul Moiz <i className="fas fa-heart"></i></p>
                </footer>
            </div>

        </div>
    );
}
