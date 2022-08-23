import styles from './styles.module.css'
import { useParams } from 'react-router'
import Location from './Location';
function About(props){
    const {number} = useParams();
    return (
        <div className={styles.mycontainer}>
            { isNaN(+ number) ? <h2>The word is: {number}</h2> : <h2>The number is: {number}</h2> }
            
        </div>
        
    );
}

export default About;