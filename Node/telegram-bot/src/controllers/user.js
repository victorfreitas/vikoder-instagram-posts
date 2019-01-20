const Model = require('../models/User')

class User {
	constructor(data) {
    this.data = this.parseData(data)
  }

  parseData({
    id,
    is_bot,
    username,
    first_name,
    last_name,
    language_code
  }) {
    return {
      userId: id,
      isBot: is_bot,
      firstName: first_name,
      lastName: last_name,
      username: username,
      languageCode: language_code,
    }
  }

	make() {
		Model.findOneAndUpdate(
      { userId: this.data.userId },
      { $set: this.data },
      { upsert: true },
      () => {}
    )
	}
}

module.exports = data => new User(data)
