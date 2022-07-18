import React, { Component } from 'react';

export default class Nav extends Component {
    render() {
        // use props to populate this
        // let BLANK = this.props.BLANK;
        return (
            <nav id="nav">
                <ul>
                    <li>this is one element</li>
                    <li>this is another element</li>
                </ul>
            </nav>
        )
    }
}