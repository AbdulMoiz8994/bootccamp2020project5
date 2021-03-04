import React from 'react'
import { Typography, Box, makeStyles } from '@material-ui/core'
import useWebAnimations, { fadeInLeft, fadeInRight } from '@wellyshen/use-web-animations';
import Rocket from '../Images/title2.gif'

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        display: 'flex'
    },
    content: {
        fontFamily: "M PLUS Rounded 1c, sans-serif",
        margin: '7rem',
        fontSize: '3rem',
    },
    para: {
        width: '45vw',
        wordSpacing: '0.6rem',
        fontSize: '1.7rem'
    },
    heading1: {
        borderBottom: '5px solid mediumpurple',
        textTransform: 'uppercase',

    },
    image1: {
        marginLeft: '-7rem'
    }
}))

export const Body1 = () => {
    const classes = useStyles()

    const { keyframes: content, timing: contentTiming } = fadeInLeft;
    const { ref: mainBody } = useWebAnimations({
        keyframes: content,
        timing: {
            ...contentTiming,
            duration: 5000,
            easing: 'ease-in-out',
            direction: 'alternate',
            delay: 1500,
        }
    })

    const { keyframes: imageContent, timing: imageContentTiming } = fadeInRight;
    const { ref: mainImagecontent } = useWebAnimations({
        keyframes: imageContent,
        timing: {
            ...imageContentTiming,
            duration: 5000,
            easing: 'ease-in-out',
            direction: 'alternate',
            delay: 1500,
        }
    })
    return (
        <div className={classes.root}>

            <Box className={classes.content} ref={mainBody}>
                <Typography variant="h3" className={classes.heading1}>
                    Boost Your Work
                        </Typography>
                <p className={classes.para}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae maxime dolore esse. Praesentium quisquam accusamus quia commodi ratione fugit facere aut iusto voluptatibus, officiis vero laborum, nulla impedit fuga non?</p>
            </Box>
            <Box ref={mainImagecontent}>
                <img className={classes.image1} src={Rocket} alt="Rocket" />
            </Box>
        </div>
    )
}
