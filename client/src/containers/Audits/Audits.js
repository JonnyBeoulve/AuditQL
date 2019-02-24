import React, { Component } from 'react';

import { GlobalStyle } from '../../theme';
import Header from '../../components/Layout/Header/Header';
import AuditList from '../../components/AuditList/AuditList';
import AuditDetails from '../../components/AuditDetails/AuditDetails';
import { Container } from '../../theme/base';

/* This container will list all audits. This will temporarily serve as the main container of
the app until the project is expanded in the future. */
class Audits extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedAuditID: null
        }
    }

    /* Upon selecting an audit in AuditList, set local state and transition to
    displaying AuditDetails component. */
    selectAudit = (id) => {
        this.setState({ selectedAuditID: id })
    }

    render() {
        const { selectedAuditID } = this.state;

        return (
            <div>
                <Header />
                <Container>
                    {(selectedAuditID)
                        ? <AuditDetails
                            id={selectedAuditID}
                            selectAudit={this.selectAudit}
                        />
                        : <AuditList
                            selectAudit={this.selectAudit}
                        />
                    }
                </Container>
                <GlobalStyle />
            </div>
        );
    }
}

export default Audits;
