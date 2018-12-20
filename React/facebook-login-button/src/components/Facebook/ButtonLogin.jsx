import React, { memo } from 'react'
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props'
import PropTypes from 'prop-types'

import styles from './ButtonLogin.module.css'

const { REACT_APP_FB_APP_ID } = process.env

const ButtonLogin = ({ onClick, callback, onFailure }) => (
  <FacebookLogin
    appId={REACT_APP_FB_APP_ID}
    autoLoad={false}
    fields="name,email,picture.type(large)"
    scope="public_profile,email"
    onClick={onClick}
    callback={callback}
    onFailure={onFailure}
    render={props => (
      <button onClick={props.onClick} className={styles.btn}>
        Login with Facebook
      </button>
    )}
  />
)

ButtonLogin.propTypes = {
  onClick: PropTypes.func.isRequired,
  callback: PropTypes.func.isRequired,
  onFailure: PropTypes.func.isRequired,
}

export default memo(ButtonLogin)
