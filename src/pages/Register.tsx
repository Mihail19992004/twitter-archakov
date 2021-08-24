import React, {FC} from 'react';
import './modal.css'
interface ModalProps {
    active: boolean,
    setActive: any
}
const Register:FC<ModalProps> = ({active, setActive}) => {
    return (
        <div className='modal' onClick={()=> setActive(false)}>
            <div className="mainBlock" onClick={(e)=> e.stopPropagation()}>

            </div>
        </div>
    );
};

export default Register;