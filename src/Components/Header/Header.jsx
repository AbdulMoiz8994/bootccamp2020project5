import React from 'react'
import { Grid, Box, Typography, Button, makeStyles } from '@material-ui/core'
import useWebAnimations, { zoomInLeft } from '@wellyshen/use-web-animations';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        display: 'flex',
        backgroundColor: 'rgba(106,90,205,0.9)',
        height: '80vh'
    },
    header: {
        marginLeft: '7rem',
        fontWeight: '0.1rem',
        color: 'rgba(255,250,250,0.9)',

    },
    headerChild: {
        fontSize: 'larger',
        fontWeight: '10rem',
        textTransform: 'uppercase'
    },
    mainContant: {
        color: 'white',
        display: 'flex',
        justifyContent: 'center',
        marginTop: '5rem',
        fontSize: '8rem'
    },

}))


export const Header = () => {
    const classes = useStyles();

    const { ref } = useWebAnimations({
        keyframes: [
            { transform: 'translateX(-100%)' },
            { transform: 'translateX(0%)' },
        ],
        timing: {
            duration: 1000,
            direction: 'alternate',
            easing: 'ease-in-out',
        }
    })


    const { keyframes: centerBody, timing: centerBodyTiming } = zoomInLeft
    const { ref: mainCenterBody } = useWebAnimations({
        keyframes: centerBody,
        timing: {
            ...centerBodyTiming,
            duration: 3000,
            easing: 'ease'
        }
    })



    return (
        <div className={classes.root}>
            <Grid container>
                <Grid item md={12} justify="space-between" alignItems="center">
                    <Box ref={ref}>
                        <Typography variant="h3" className={classes.header}>
                            <span className={classes.headerChild}>Millionare</span>.com
                            </Typography>
                    </Box>
                    <Box ref={mainCenterBody}>
                        <Typography variant="h2" className={classes.mainContant}>Change Your Tomorrow</Typography>
                        <p className="para">Make 1 Million</p>
                        <Button className="btn"  >Click Here</Button>
                    </Box>
                </Grid>
            </Grid>
        </div>
    )
}
