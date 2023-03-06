import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

interface dataIcone{
    icone: any
    full?:boolean
}
const index = (datas: dataIcone) => {
    return (
        <div className={datas.full ?'': 'p-1 '}>
            <FontAwesomeIcon className={datas.full ? 'sendMessagebtn' : 'iconeBtns' } icon={datas.icone}/>
        </div>
    );
};

export default index;