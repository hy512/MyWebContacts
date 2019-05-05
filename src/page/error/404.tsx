import * as React from 'react'

import '@style/error/404.css'

class NotFound extends React.Component {
    public render() {
        return (
            <div styleName="root">
                <p>资源不可用</p>
            </div>
        );
    }
}

export {
    NotFound
}