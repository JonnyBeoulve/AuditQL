import React, { Component, Fragment } from 'react';
import { graphql, compose } from 'react-apollo';
import {
    Modal,
    ModalCloseButton,
    ModalBody,
    ModalContent,
    ModalDialog,
    ModalHeader,
    ModalFooter,
    Typography,
    Select,
    Button,
} from '@smooth-ui/core-sc';
import { PlusCircle } from 'styled-icons/boxicons-regular/PlusCircle';
import { SubTitle } from '../../../theme/base';

import FormInput from '../../Forms/FormInput/FormInput';
import { getAuditorsQuery, addAuditMutation, getAuditsQuery } from '../../../api/queries';

/* This component includes a button that opens a modal when clicked.
The modal is styled using Styled Components and Smooth UI. Note that
the UI element that the user interacts with to open the modal must
be defined within this component, as seen at the top of the JSX.
Additionally, definition of what action needs to occur (AJAX call, etc)
must be defined within the handleSubmitModal function.
Props:
+ titleText: Title text of modal.
+ bodyText: Body text of modal.
+ confirmText: Text to display on confirm button.
+ cancelText: Text to display on cancel button.
Origin documentation:
+ https://smooth-ui.smooth-code.com/docs-components-modal */
class AddAuditModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            displayModal: false,
            auditTitle: '',
            auditGenre: '',
            auditStatus: '',
            auditAuditor: ''
        };
    }

    // Toggle display of the modal.
    handleToggleModal = () => {
        this.setState({ displayModal: !this.state.displayModal });
    };

    /* This function will update state as a user enters information into one of the
    various form inputs in EditPaitentModalForm. */
    handleChangeInput = (name, value) => {
        this.setState({[name]: value})
    }

    /* Retreive a list of all auditors and list them in the select form item. */
    listAuditors = () => {
        let data = this.props.getAuditorsQuery;

        if (data.loading) {
            return( <option disabled>Loading auditors...</option> );
        } else {
            return data.auditors.map(auditor => {
                return (<option key={auditor.id} value={auditor.id}>{auditor.name}</option>);
            })
        }
    }

    /* Submit the mutation to add an audit. */
    handleSubmitAudit = e => {
        e.preventDefault();
        const { auditTitle, auditGenre, auditStatus, auditAuditor } = this.state;

        this.props.addAuditMutation({
            variables: {
                title: auditTitle,
                genre: auditGenre,
                status: auditStatus,
                auditorId: auditAuditor
            },
            refetchQueries: [{ query: getAuditsQuery }]
        })

        this.handleToggleModal();
    }

    render() {
        const {
            buttonText,
            titleText,
            bodyText,
            confirmText,
            cancelText,
        } = this.props;
        const {
            displayModal,
            auditTitle,
            auditGenre,
        } = this.state;
    
        return (
            <Fragment>
                <Button
                    bg={'bgPrimary'}
                    fontSize={'1'}
                    onClick={this.handleToggleModal}
                >
                    <PlusCircle size={16} /> {buttonText}
                </Button>
                <Modal opened={displayModal} onClose={this.handleToggleModal}>
                    <ModalDialog alignItems="center" justifyContent="center">
                        <ModalContent width="500px">
                            <ModalCloseButton />
                            <ModalHeader>
                                <Typography variant="h5" m={0}>
                                    {titleText}
                                </Typography>
                            </ModalHeader>
                            <ModalBody>
                                {bodyText}
                                <br />
                                <br />
                                <SubTitle>
                                    <label>STATUS</label>
                                </SubTitle>
                                <Select size="md" placeholder="Medium" onChange={(e) => this.setState({ auditStatus: e.target.value })}>
                                    <option selected disabled>Select a status</option>
                                    <option value="Pending">Pending</option>
                                    <option value="Active">Active</option>
                                    <option value="Complete">Complete</option>
                                    <option value="Canceled">Canceled</option>
                                </Select>
                                <br />
                                <br />
                                <SubTitle>
                                    <label>GENRE</label>
                                </SubTitle>
                                <Select size="md" placeholder="Name" onChange={(e) => this.setState({ auditGenre: e.target.value })}>
                                    <option selected disabled>Select a genre</option>
                                    <option value="Compliance">Compliance</option>
                                    <option value="Financial">Financial</option>
                                    <option value="Investigative">Investigative</option>
                                    <option value="Operational">Operational</option>
                                </Select>
                                <br />
                                <br />
                                <SubTitle>
                                    <label>AUDITOR</label>
                                </SubTitle>
                                <Select size="md" placeholder="Name" onChange={(e) => this.setState({ auditAuditor: e.target.value })}>
                                    <option selected disabled>Select an auditor</option>
                                    { this.listAuditors() }
                                </Select>
                                <br />
                                <br />
                                <FormInput label="Title" inputType="text" name={'auditTitle'} value={auditTitle} onChange={this.handleChangeInput} />
                            </ModalBody>
                            <br />
                            <ModalFooter>
                                <Button
                                    p="10px 20px"
                                    variant="primary"
                                    onClick={this.handleSubmitAudit}
                                >
                                    {confirmText}
                                </Button>
                                <Button
                                    p="10px 20px "
                                    variant="light"
                                    onClick={this.handleToggleModal}
                                >
                                    {cancelText}
                                </Button>
                            </ModalFooter>
                        </ModalContent>
                    </ModalDialog>
                </Modal>
            </Fragment>
        )
    }
}

export default compose(
    graphql(getAuditorsQuery, { name: "getAuditorsQuery" }),
    graphql(addAuditMutation, { name: "addAuditMutation" })
)(AddAuditModal);
