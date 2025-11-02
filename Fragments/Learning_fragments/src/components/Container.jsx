import styles from "./Container.module.css";



const  Container=(props) =>{
     return <div ClassName={styles.container}>{props.children}</div>

};


export default Container;               




