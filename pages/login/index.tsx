import React from 'react'
import Link from 'next/link'
import Button from '../../components/Button/Button'
import InputField from '../../components/InputField/InputField'
import styles from './login.module.scss'

const index = () => {
  return (
    <div className={styles.loginForm}>
      <div className={styles.card}>
        <form>
          <p className={styles.title}>login</p>
          <InputField type='email' placeholder='Enter your email'/>
          <InputField type='email' placeholder='Enter your email'/>
          <Button label='Login' theme='green' />
        </form>

        <p>
          Don't have an account ?{" "}
          <Link href={"/signup"}>
            <a>Signup</a>
          </Link>
        </p>
      </div>
    </div>
  )
}
 
export default index