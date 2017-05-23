import React from 'react'
import ReactDOM from 'react-dom'

var div = React.DOM.div
var h1 = React.DOM.h1

var MySecondComponent = React.createClass({
  render () {
    return (h1(null, this.props.myArgument))
  }
})

var MyFirstComponent = React.createClass({
  render: function () {
    return (
      div(null,
        React.createElement(MySecondComponent, {myArgument: 'Hello there'})
      )
    )
  }
})

ReactDOM.render(React.createElement(MyFirstComponent), document.getElementById('app'))
