import React, { Component, Fragment } from 'react';
import { graphql, compose } from 'react-apollo';
import { Form, Formik } from 'formik';
import {
    Modal,
    ModalCloseButton,
    ModalBody,
    ModalContent,
    ModalDialog,
    ModalHeader,
    Button,
} from '@smooth-ui/core-sc';
import { PlusCircle } from 'styled-icons/boxicons-regular/PlusCircle';
import { DefaultButton, ErrorText, Input, Label, ModalHeading, ModalText, Select } from '../../../theme/base';

import { getAuditorsQuery, addAuditMutation, getAuditsQuery } from '../../../api/queries';

/* This component includes a button that opens a modal when clicked.
The modal is styled using Styled Components and Smooth UI. Note that
the UI element that the user interacts with to open the modal must
be defined within this component, as seen at the top of the JSX.
Formik is used for form logic.
Props:
+ titleText: Title text of modal.
+ bodyText: Body text of modal.
+ confirmText: Text to display on confirm button.
+ cancelText: Text to display on cancel button. */
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
                <DefaultButton onClick={this.handleToggleModal} >
                    <PlusCircle size={16} /> {buttonText}
                </DefaultButton>
                <Modal opened={displayModal} onClose={this.handleToggleModal}>
                    <ModalDialog alignItems="center" justifyContent="center">
                        <ModalContent width="500px">
                            <ModalCloseButton />
                            <ModalHeader>
                                <ModalHeading>
                                    {titleText}
                                </ModalHeading>
                            </ModalHeader>
                            <ModalBody>
                                <ModalText>{bodyText}</ModalText>
                                <Formik
                                    initialValues={{ status: '', genre: '', auditor: '', title: '' }}
                                    validate={values => {
                                        let errors = {};
                                        if (!values.status) { errors.status = 'A status is required'; }

                                        if (!values.genre) { errors.genre = 'A genre is required'; }

                                        if (!values.auditor) { errors.auditor = 'An auditor is required'; }

                                        if (!values.title) { errors.title = 'A title is required.'; }
                                        else if (values.title.length > 40) { errors.title = 'Title length limit is 40 characters.'; }

                                        return errors;
                                    }}
                                    onSubmit={values => {
                                        this.props.addAuditMutation({
                                            variables: {
                                                title: values.title,
                                                genre: values.genre,
                                                status: values.status,
                                                auditorId: values.auditor
                                            },
                                            refetchQueries: [{ query: getAuditsQuery }]
                                        })

                                        this.handleToggleModal();
                                    }}
                                >
                                    {({ touched, values, errors,handleChange, handleBlur, handleSubmit }) => (
                                        <Form Submit={handleSubmit}>
                                            <Label>
                                                TITLE
                                                {touched.title && errors.title && <ErrorText>{errors.title}</ErrorText>}
                                                <Input
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    value={values.title}
                                                    type="text"
                                                    name="title"
                                                />
                                            </Label>
                                            <Label>
                                                STATUS
                                                {touched.status && errors.status && <ErrorText>{errors.status}</ErrorText>}
                                                <Select
                                                    component="select"
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    value={values.status}
                                                    name="status"
                                                >
                                                    <option selected disabled value="">Select a status</option>
                                                    <option value="Active">Active</option>
                                                    <option value="Complete">Complete</option>
                                                    <option value="Canceled">Canceled</option>
                                                </Select>
                                            </Label>
                                            <Label>
                                                GENRE
                                                {touched.genre && errors.genre && <ErrorText>{errors.genre}</ErrorText>}
                                                <Select
                                                    component="select"
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    value={values.genre}
                                                    name="genre"
                                                >
                                                    <option selected disabled value="">Select a genre</option>
                                                    <option value="Compliance">Compliance</option>
                                                    <option value="Financial">Financial</option>
                                                    <option value="Investigative">Investigative</option>
                                                    <option value="Operational">Operational</option>
                                                </Select>
                                            </Label>
                                            <Label>
                                                AUDITOR
                                                {touched.auditor && errors.auditor && <ErrorText>{errors.auditor}</ErrorText>}
                                                <Select
                                                    component="select"
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    value={values.auditor}
                                                    name="auditor"
                                                >
                                                    <option selected disabled value="">Select an auditor</option>
                                                    { this.listAuditors() }
                                                </Select>
                                            </Label>
                                            <Button
                                                type="submit"
                                                p="10px 20px"
                                                mt="20px"
                                                mr="5px"
                                                variant="primary"
                                            >
                                                {confirmText}
                                            </Button>
                                            <Button
                                                p="10px 20px "
                                                mt="20px"
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
