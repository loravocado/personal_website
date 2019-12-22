import React, { Component } from 'react'
import { Button, Divider, Image, Transition, Grid } from 'semantic-ui-react'

export default class title extends Component {
    state = { visible: false}

  toggleVisibility = () =>
    this.setState((prevState) => ({ visible: !prevState.visible }))

  render() {
    const { visible } = this.state
    return (
        <Grid only="mobile" verticalAlign='middle' style={{backgroundColor:'#1cadd7', height:"105vh",paddingLeft:14}}>
            <Grid.Column onClick={this.toggleVisibility}>
                <Transition visible={visible} animation='scale' duration={500}>
                    <Image style={{marginBottom:50,}} src='https://i.imgur.com/XFzHnc4.png' centered />
                </Transition>
            </Grid.Column>


        </Grid>
    )
  }
}
