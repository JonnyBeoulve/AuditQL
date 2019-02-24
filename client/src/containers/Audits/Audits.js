import React, { Component } from 'react';

import { GlobalStyle } from '../../theme';
import AuditList from '../../components/AuditList/AuditList';
import AuditDetails from '../../components/AuditDetails/AuditDetails';

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
        console.log(id);
        this.setState({ selectedAuditID: id })
    }

    render() {
        const { selectedAuditID } = this.state;

        return (
            <div className="main">
                {(selectedAuditID)
                    ? <AuditDetails
                        id={selectedAuditID}
                        selectAudit={this.selectAudit}
                    />
                    : <AuditList
                        selectAudit={this.selectAudit}
                    />
                }
                <GlobalStyle />
            </div>
        );
    }
}

export default Audits;
