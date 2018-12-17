import React, { Fragment, memo } from 'react'

const FormFields = ({ handleChange, email, password }) => (
  <Fragment>
    <input
      type="email"
      name="email"
      placeholder="Email"
      value={email}
      onChange={handleChange}
      autoComplete="email"
    />
    <input
      type="password"
      name="password"
      placeholder="Password"
      value={password}
      onChange={handleChange}
      autoComplete="password"
    />
    <button type="submit" className="button">
      Login
    </button>
  </Fragment>
)

export default memo(FormFields)
