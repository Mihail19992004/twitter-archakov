import React, {FC} from 'react';
import './modal.css'
import CloseOutlinedIcon from '@material-ui/icons/CloseOutlined';
import {Button} from "@material-ui/core";
interface ModalProps {
    active: boolean,
    setActive: any
}
const LogIn:FC<ModalProps> = ({active, setActive}) => {
    return (
        <div className='modal' onClick={()=> setActive(false)}>
            <div className="mainBlock" onClick={(e)=> e.stopPropagation()}>
                <div className="header"><CloseOutlinedIcon style={{width: '40px', height: '40px'}}/>
                <h1>Войти в твиттер</h1>
                </div>
                <div className="input_block">
                    <input type="text"/>
                    <input type="text"/>
                </div>
                <div className="btn-block">
                    <Button>
                        Отмена
                    </Button>
                    <Button>
                        Войти
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default LogIn;