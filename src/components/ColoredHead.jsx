import { useParams } from "react-router-dom";
import styles from './styles.module.css'

function ColoredHead(props){
    const {title, titlecolor, backgroundcolor} = useParams();
    return(
        <div className={styles.mycontainer}>
            <h4 style={{backgroundColor: backgroundcolor, color: titlecolor}}>{title}</h4>
        </div>

    );

}

export default ColoredHead;