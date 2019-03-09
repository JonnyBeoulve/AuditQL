import React, { Component, Fragment } from 'react';

import { GlobalStyle } from '../../theme';
import Header from '../../components/Layout/Header/Header';
import AuditList from '../../components/AuditList/AuditList';
import AuditDetails from '../../components/AuditDetails/AuditDetails';
import { Container } from '../../theme/base';
import { RadialChart } from 'react-vis';
import '../../../node_modules/react-vis/dist/style.css';

/* This container will list all audits. This will temporarily serve as the main container of
the app until the project is expanded in the future. */
class Audits extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedAuditID: null,
            data: [12, 5, 6, 6, 9, 10],
            width: 700,
            height: 500,
            id: 300
        }
    }

    /* Upon selecting an audit in AuditList, set local state and transition to
    displaying AuditDetails component. */
    selectAudit = (id) => {
        this.setState({ selectedAuditID: id })
    }

    render() {
        const { selectedAuditID } = this.state;
        const myData = [ {angle: 1, radius: 10}, {angle: 2, label: 'Super Custom label', subLabel: 'With annotation', radius: 20}, {angle: 5, radius: 5, label: 'Alt Label'}, {angle: 3, radius: 14}, {angle: 5, radius: 12, subLabel: 'Sub Label only', className: 'custom-class'} ];

        return (
            <div>
                <Header />
                <Container>
                    {(selectedAuditID) ? (
                            <AuditDetails
                                id={selectedAuditID}
                                selectAudit={this.selectAudit}
                            />
                        ) : (
                            <Fragment>
                                <AuditList
                                    selectAudit={this.selectAudit}
                                    />
                                    <RadialChart
                                        showLabels={true}
                                        data={myData}
                                        width={600}
                                        height={600}
                                    />
                            </Fragment>
                    )}
                </Container>
                <GlobalStyle />
            </div>
        );
    }
}

export default Audits;
