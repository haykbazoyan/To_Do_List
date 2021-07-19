import styles from './Button.module.css'

export default function Button({onClick, isDisable, btnName}) {
    return (
        <button className={`${styles.btn}`} type='button' onClick={onClick} isDisable={isDisable}>{btnName}</button>
    )
}
