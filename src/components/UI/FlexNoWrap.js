import styles from './FlexNoWrap.module.css';

const FlexNoWrap = props => {
    const classes = `${styles['flex-no-wrap']} ${props.className?props.className:''}`;

    return(
        <div className={classes}>
            {props.children}
        </div>
    );
}

export default FlexNoWrap;