import React, { Component, Fragment } from 'react';

import { GlobalStyle } from '../../theme';
import Header from '../../components/Layout/Header/Header';
import AuditList from '../../components/AuditList/AuditList';
import AuditDetails from '../../components/AuditDetails/AuditDetails';
import { Container } from '../../theme/base';

/* This container will either display a list of audits or the details for a given audit depending
on the present state.
+ auditListFormat: 0 for table, 1 for text list. */
class Audits extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedAuditID: null,
            auditListFormat: 1
        }
    }

    /* Upon selecting an audit in AuditList, set local state and transition to
    displaying AuditDetails component. */
    selectAudit = (id) => {
        this.setState({ selectedAuditID: id })
    }

    /* Upon selecting the text or table button, toggle the display type. */
    selectAuditListFormat = (newFormat) => {
        this.setState({ auditListFormat: newFormat})
    }

    render() {
        const { selectedAuditID, auditListFormat } = this.state;

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
                                    auditListFormat={auditListFormat}
                                    selectAudit={this.selectAudit}
                                    selectAuditListFormat={this.selectAuditListFormat}
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
