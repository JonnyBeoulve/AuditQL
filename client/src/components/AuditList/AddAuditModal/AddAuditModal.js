import React, { Component, Fragment } from 'react';
import {
    Modal,
    ModalCloseButton,
    ModalBody,
    ModalContent,
    ModalDialog,
    ModalHeader,
    ModalFooter,
    Typography,
    Button,
} from '@smooth-ui/core-sc';
import { PlusCircle } from 'styled-icons/boxicons-regular/PlusCircle';

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
                                
                            </ModalBody>
                            <br />
                            <ModalFooter>
                                <Button
                                    p="10px 20px"
                                    variant="primary"
                                    onClick={this.handleSubmitModal}
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

export default AddAuditModal;
