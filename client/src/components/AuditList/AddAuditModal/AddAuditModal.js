import React, { Component, Fragment } from 'react';
import { graphql, compose } from 'react-apollo';
import { Form, Formik, Field, ErrorMessage } from 'formik';
import {
    Modal,
    ModalCloseButton,
    ModalBody,
    ModalContent,
    ModalDialog,
    ModalHeader,
    Typography,
    Button,
} from '@smooth-ui/core-sc';
import { PlusCircle } from 'styled-icons/boxicons-regular/PlusCircle';
import { ErrorText, Input, Label, Select } from '../../../theme/base';

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
        };
    }

    // Toggle display of the modal.
    handleToggleModal = () => {
        this.setState({ displayModal: !this.state.displayModal });
    };

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
                                <Formik
                                    initialValues={{ status: '', name: '', auditor: '', title: '' }}
                                    validate={values => {
                                        let errors = {};
                                        if (!values.status) { errors.status = 'A status is required'; }

                                        if (!values.name) { errors.name = 'A name is required'; }

                                        if (!values.auditor) { errors.auditor = 'An auditor is required'; }

                                        if (!values.title) { errors.title = 'A title is required.'; }
                                        else if (values.title.length > 40) { errors.title = 'Title length limit is 40 characters.'; }

                                        return errors;
                                    }}
                                    onSubmit={(values, { setSubmitting }) => {
                                        setTimeout(() => {
                                        alert(JSON.stringify(values, null, 2));
                                        setSubmitting(false);
                                        }, 400);
                                    }}
                                    >
                                    {({ values, errors, isSubmitting }) => (
                                        <Form>
                                            <Label>
                                                STATUS *
                                                {errors.status && <ErrorText>{errors.status}</ErrorText>}
                                                <Field name="status" component="select">
                                                    <option selected disabled>Select a status</option>
                                                    <option value="Active">Active</option>
                                                    <option value="Complete">Complete</option>
                                                    <option value="Canceled">Canceled</option>
                                                </Field>
                                            </Label>
                                            <br />
                                            <br />
                                                <label>GENRE</label>
                                            <Field name="name" component="select">
                                                <option selected disabled>Select a genre</option>
                                                <option value="Compliance">Compliance</option>
                                                <option value="Financial">Financial</option>
                                                <option value="Investigative">Investigative</option>
                                                <option value="Operational">Operational</option>
                                            </Field>
                                            <ErrorMessage name="name" component="div" />
                                            <br />
                                            <br />
                                                <label>AUDITOR</label>
                                            <Field name="auditor" component="select">
                                                <option selected disabled>Select an auditor</option>
                                                { this.listAuditors() }
                                            </Field>
                                            <ErrorMessage name="auditor" component="div" />
                                            <br />
                                            <br />
                                            <Field label="Title" type="text" name="title" />
                                            <ErrorMessage name="title" component="div" />
                                            <br />
                                            <br />
                                            <Button
                                                type="submit"
                                                p="10px 20px"
                                                mr="5px"
                                                variant="primary"
                                                disabled={isSubmitting}
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
                                        </Form>
                                    )}
                                </Formik>
                            </ModalBody>
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
