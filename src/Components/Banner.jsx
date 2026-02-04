import styles from '../Styles/Banner.module.css';

function Banner({style}){
    return(
        <section style={style} className={`banner ${styles.container}`}>
            <h1>ACE'S CHAT APP</h1>
            <p>Don't forget to socialise!!!</p>
        </section>
    )
}

export default Banner;