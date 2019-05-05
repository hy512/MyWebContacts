

import * as React from 'react'

import './scroll.css'

interface ScrollProps {
    children: React.ReactNode;
    style?: React.CSSProperties;
    // styleName?: string;
}

class Scroll extends React.Component<ScrollProps> {
    render() {
        return (
            <div styleName="scroll" style={this.props.style}>
                {this.props.children}
            </div>
        );
    }
}

export {
    Scroll
}