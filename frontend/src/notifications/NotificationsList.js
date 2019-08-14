import React, {Component} from 'react'

class NotificationList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      notifications: []
    }
  }

  componentDidMount() {
    const endpoint = 'http://127.0.0.1:8000/notifications/api/unread_count/'
    fetch(endpoint, {
      // mode: 'cors',
      credentials: 'include',
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json'
      }
    })
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(err => console.error(err))
  }

  render() {
    return (
      <div>List appears here, please wait for some time.</div>
    )
  }
}

export default NotificationList
