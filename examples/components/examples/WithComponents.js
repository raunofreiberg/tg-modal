import React, { PropTypes, Component } from 'react';

import Modal from '../../../src/browser';


class WithComponentsModalExample extends Component {
    static propTypes = {
        initialOpen: PropTypes.bool,
        toggleCode: PropTypes.func.isRequired
    };

    static defaultProps = {
        initialOpen: false
    };

    constructor(props) {
        super(props);

        this.state = {
            isOpen: props.initialOpen
        };
    }

    toggleModal = (e) => {
        if (e && e.preventDefault) {
            e.preventDefault();
        }

        this.setState({
            isOpen: !this.state.isOpen
        });
    };

    render() {
        return (
            <div>
                <div className="btn-group">
                    <a className="btn btn-primary" onClick={this.toggleModal}>Open</a>
                    <a className="btn btn-secondary" onClick={this.props.toggleCode}>Code</a>
                </div>

                <Modal
                    isOpen={this.state.isOpen}
                    dialogClassName="modal-dialog custom-dialog"
                    onCancel={this.toggleModal}
                >
                    <Modal.Header className="modal-header custom-header" addClose={false}>
                        Header component!
                    </Modal.Header>
                    <Modal.Body className="modal-body custom-body">
                        <p>
                            I’m a modal with custom classes for Dialog, Header and Body.
                        </p>
                    </Modal.Body>
                </Modal>
            </div>
        );
    }
}

export default WithComponentsModalExample;
