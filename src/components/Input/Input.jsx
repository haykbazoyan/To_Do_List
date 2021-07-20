import styles from './Input.module.css'

export default function Input({type, placeholder, onChange}) {
    return (
        <input className={`${styles.inputStyle}`} type={type} placeholder={placeholder} onChange={onChange} />
    )
}