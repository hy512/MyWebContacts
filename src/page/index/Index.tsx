import * as React from 'react'
import { connect } from 'react-redux'
import { PortalLayout } from '@/component/layout/PortalLayout'

import '@style/index/index.css'
import { StateType } from '@/store/reduce';
import { ContactStateType } from '@/store/reduce/ContactReduce';
import { retrieveContactFromLocal } from '@/store/action/ContactAction';

interface IndexProps {
    // 开始获取联系人信息
    initContacts: () => void;
    contacts: ContactStateType;
}
interface StateProps {
    contacts: string[][];
}

class Index extends React.Component<IndexProps, StateProps> {
    constructor(props: IndexProps) {
        super(props);
        this.state = {
            contacts: []
        };
    }

    componentDidMount() {
        this.props.initContacts();
    }

    render() {
        let tab1;

        switch (this.props.contacts.state) {
            case "end":
                tab1 = (
                    <table>
                        <thead>
                            <tr>
                                <th>id</th>
                                <th>姓名</th>
                                <th>号码</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.props.contacts.data && this.props.contacts.data
                                .map(m => (
                                    <tr>
                                        <td>{m.id}</td>
                                        <td>{m.name && m.name[0]}</td>
                                        <td>{
                                            m.phone_v2 && m.phone_v2.map(m => (<p>{m}</p>))
                                        }</td>
                                    </tr>
                                ))}
                        </tbody>
                    </table>
                )
                break;
            case "start":
                break;
            case "error":
                tab1 = (
                    <p>
                        {this.props.contacts.error.message}
                    </p>
                )
                break;
        }

        return (
            <PortalLayout title="首页"
                navTabs={[
                    { icon: "fas fa-2x fa-address-book", text: "联系人" },
                    { icon: "fas fa-2x fa-envelope", text: "短信" },
                    { icon: "fas fa-2x fa-phone-square", text: "通话记录" }
                ]}
                side={<ul className="list-group">
                    <li className="list-group-item">Cras justo odio</li>
                    <li className="list-group-item">Dapibus ac facilisis in</li>
                    <li className="list-group-item">Morbi leo risus</li>
                    <li className="list-group-item">Porta ac consectetur ac</li>
                    <li className="list-group-item">Vestibulum at eros</li>
                    <li className="list-group-item">Cras justo odio</li>
                    <li className="list-group-item">Dapibus ac facilisis in</li>
                    <li className="list-group-item">Morbi leo risus</li>
                    <li className="list-group-item">Porta ac consectetur ac</li>
                    <li className="list-group-item">Vestibulum at eros</li>
                    <li className="list-group-item">Cras justo odio</li>
                    <li className="list-group-item">Dapibus ac facilisis in</li>
                    <li className="list-group-item">Morbi leo risus</li>
                    <li className="list-group-item">Porta ac consectetur ac</li>
                    <li className="list-group-item">Vestibulum at eros</li>
                    <li className="list-group-item">Cras justo odio</li>
                    <li className="list-group-item">Dapibus ac facilisis in</li>
                    <li className="list-group-item">Morbi leo risus</li>
                    <li className="list-group-item">Porta ac consectetur ac</li>
                    <li className="list-group-item">Vestibulum at eros</li>
                </ul>}>
                <React.Fragment>
                    {tab1}
                </React.Fragment>
                <React.Fragment>
                    <p>2</p>
                    <ul className="list-group">
                        <li className="list-group-item">Cras justo odio</li>
                        <li className="list-group-item">Dapibus ac facilisis in</li>
                        <li className="list-group-item">Morbi leo risus</li>
                        <li className="list-group-item">Porta ac consectetur ac</li>
                        <li className="list-group-item">Vestibulum at eros</li>
                        <li className="list-group-item">Cras justo odio</li>
                        <li className="list-group-item">Dapibus ac facilisis in</li>
                        <li className="list-group-item">Morbi leo risus</li>
                        <li className="list-group-item">Porta ac consectetur ac</li>
                        <li className="list-group-item">Vestibulum at eros</li>
                        <li className="list-group-item">Cras justo odio</li>
                        <li className="list-group-item">Dapibus ac facilisis in</li>
                        <li className="list-group-item">Morbi leo risus</li>
                        <li className="list-group-item">Porta ac consectetur ac</li>
                        <li className="list-group-item">Vestibulum at eros</li>
                        <li className="list-group-item">Cras justo odio</li>
                        <li className="list-group-item">Dapibus ac facilisis in</li>
                        <li className="list-group-item">Morbi leo risus</li>
                        <li className="list-group-item">Porta ac consectetur ac</li>
                        <li className="list-group-item">Vestibulum at eros</li>
                    </ul>
                </React.Fragment>
                <React.Fragment>
                    <p>3</p>
                    <ul className="list-group">
                        <li className="list-group-item">Cras justo odio</li>
                        <li className="list-group-item">Dapibus ac facilisis in</li>
                        <li className="list-group-item">Morbi leo risus</li>
                        <li className="list-group-item">Porta ac consectetur ac</li>
                        <li className="list-group-item">Vestibulum at eros</li>
                        <li className="list-group-item">Cras justo odio</li>
                        <li className="list-group-item">Dapibus ac facilisis in</li>
                        <li className="list-group-item">Morbi leo risus</li>
                        <li className="list-group-item">Porta ac consectetur ac</li>
                        <li className="list-group-item">Vestibulum at eros</li>
                        <li className="list-group-item">Cras justo odio</li>
                        <li className="list-group-item">Dapibus ac facilisis in</li>
                        <li className="list-group-item">Morbi leo risus</li>
                        <li className="list-group-item">Porta ac consectetur ac</li>
                        <li className="list-group-item">Vestibulum at eros</li>
                        <li className="list-group-item">Cras justo odio</li>
                        <li className="list-group-item">Dapibus ac facilisis in</li>
                        <li className="list-group-item">Morbi leo risus</li>
                        <li className="list-group-item">Porta ac consectetur ac</li>
                        <li className="list-group-item">Vestibulum at eros</li>
                    </ul>
                </React.Fragment>
            </PortalLayout>
        );
    }
}

const IndexWith = connect<{ contacts: ContactStateType }, { initContacts: () => {} }, {}, StateType>(
    (state, props) => ({ contacts: state.local.contacts }),
    (dispatch, props) => ({ initContacts: () => (dispatch as Function)(retrieveContactFromLocal()) }),
)(Index);

export {
    IndexWith as Index
}