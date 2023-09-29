import styles from './InputFatec.module.css'

interface Props {
    label: string

}

function InputFatec({label}: Props){
    return (
        <input type='text' className={styles.inputFatec} placeholder={label}></input>
    )
}

export default InputFatec