import React, {ReactElement} from 'react'
import { InputFieldInterface } from '../../types'
import styles from "./InputField.module.scss"

const InputField = ({type, placeholder, label, onChange}: InputFieldInterface): ReactElement => {
  return (
    <div className={styles.input}>
        <label>{label}</label>
        <input type={type} placeholder={placeholder} onChange={onChange}/>
    </div>
  )
}

export default InputField