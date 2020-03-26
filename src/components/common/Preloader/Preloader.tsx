import loading from "../../../assets/images/loading.svg";
import React, {FC} from "react";
type PropsType = {

}
let Preloader:FC<PropsType>= (props) => {
    return <div>
        <img alt={'#'} src={loading}/>
    </div>
};

export default Preloader