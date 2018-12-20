import React, { PureComponent, Fragment } from 'react'
import axios from 'axios'

import Title from '../Title'
import Spinner from '../Spinner'
import Cards from '../Cards'

class Home extends PureComponent {
  state = {
    items: [],
    isWait: true,
  }

  async componentDidMount() {
    const { data } = await axios(process.env.REACT_APP_API_URL)

    if (data.length) {
      this.setState({ items: data })
    }

    this.setState({ isWait: false })
  }

  render() {
    const { isWait, items } = this.state

    return (
      <Fragment>
        <Title text="Home" />
        <div className="row" style={{ justifyContent: 'center' }}>
          {isWait
            ? <Spinner />
            : <Cards items={items} />}
        </div>
      </Fragment>
    )
  }
}

export default Home
