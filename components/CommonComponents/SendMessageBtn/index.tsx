import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

interface dataIcone{
    icone: any
}
const index = (datas: dataIcone) => {
    return (
        <div>
            <FontAwesomeIcon icon={datas.icone}/>
        </div>
    );
};

export default index;