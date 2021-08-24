import React, {useState} from 'react';
import {makeStyles} from "@material-ui/core";
import {Twitter} from "@material-ui/icons";
import SearchIcon from '@material-ui/icons/Search';
import {Button} from "@material-ui/core";
import PeopleOutlineIcon from '@material-ui/icons/PeopleOutline';
import ChatBubbleOutlineOutlinedIcon from '@material-ui/icons/ChatBubbleOutlineOutlined';
import LogIn from "./LogIn";

const useStyles = makeStyles((theme)=> ({
    wrapper: {
        display: "flex",
        height: '100vh',

    },
    blueSide: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#71C9F8',
        flex: '0 0 50%',
        overflow: 'hidden',
        position: 'relative'
    },
    blueSideBigIcon: {
        position: 'absolute',
        left: "50%",
        top: "53%",
        transform: 'translate(-50%, -50%)',
        width: "350%",
        height: "350%",
    },

    blueSideListInfo: {
        position: 'relative',
        display: 'flex',
        flexFlow: 'column',
        alignItem: 'center',
        listStyle: 'none',
        padding: 0,
        margin: 0,
        fontSize: '20px',
        color: 'white',
        fontWeight: 600,
        width: 380,

    },
    blueSideListInfoIcon: {
        fontSize: 30,
        marginRight: 10
    },
    blueSideListInfoItem: {
        marginBottom: '40px'
    },
    loginSide: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flex: '0 0 50%',
        overflow: 'hidden'
    },
    loginSideTwitterIcon: {
        fontSize: 50
    },
    loginSideWrapper: {
        width: '380px'
    },
    loginSideTitle: {
        fontWeight: 800,
        fontSize: '32px',
        marginBottom: '43px',
        marginTop: '20px'
    }

}))

const SignIn = () => {
    const [activeLogin, setActiveLogin] = useState(true)
    const [activeRegister, setActiveRegister] = useState(false)
    const classes = useStyles()
    return (
        <div className={classes.wrapper}>
            <section className={classes.blueSide}>
                <Twitter color='primary' className={classes.blueSideBigIcon} />
                <ul className={classes.blueSideListInfo}>
                    <li className={classes.blueSideListInfoItem}><SearchIcon className={classes.blueSideListInfoIcon}/>Читайте о чем вам интересно</li>
                    <li className={classes.blueSideListInfoItem}><PeopleOutlineIcon className={classes.blueSideListInfoIcon}/>Узнайте, о чем говорят в мире</li>
                    <li className={classes.blueSideListInfoItem}><ChatBubbleOutlineOutlinedIcon className={classes.blueSideListInfoIcon}/>Присоеденяйтесь к общению</li>
                </ul>
            </section>
            <section className={classes.loginSide}>
                <div>
                    <Twitter color='primary' className={classes.loginSideTwitterIcon} />
                    <h2 className={classes.loginSideTitle}>Узнайте что происходит в мире сейчас</h2>
                    <b>Присоеденяйтесь к твиттеру прямо сейчас</b>
                    <br/>
                    <Button onClick={()=> setActiveRegister(true)} style={{marginBottom: 20, marginTop: 20, borderRadius: 20}} variant='contained' color='primary' fullWidth>Зарегестрироваться</Button>
                    <Button onClick={()=> setActiveLogin(true)} style={{borderRadius: 20}} variant='outlined' color='primary' fullWidth>Войти</Button>
                </div>
            </section>
            {activeLogin && <LogIn active={activeLogin} setActive={setActiveLogin}/>}
            {activeRegister && <LogIn active={activeRegister} setActive={setActiveRegister}/>}
        </div>
    );
};

export default SignIn;