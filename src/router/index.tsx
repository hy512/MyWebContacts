import * as React from 'react'
import { Switch } from 'react-router'
import { HashRouter, Route, Redirect } from 'react-router-dom'

// import {} from '@/page/other/test'
// import { Test } from '../page/other/Test'
import { Test } from '@page/other/Test'
import { NotFound } from '@/page/error/404';
import { Index } from '@/page/index/Index';



const route = {
    mgr: {
        index: "/mgr",
    },
    other: {
        test: "/other/test"
    }
}

function Router() {
    return (
        <HashRouter>
            <Switch>
                <Route path={route.mgr.index} component={Index} />
                <Route path={route.other.test} component={Test} />
                {/* <Route component={NotFound} /> */}
                <Redirect to={route.mgr.index} />
            </Switch>
        </HashRouter>
    )
}

export {
    Router,
    route
}