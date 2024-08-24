import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Form,
    FormGroup,
    Input,
    Label,
} from "reactstrap";

export default function CustomModal({ activeItem, handleChange, handleImageChange, toggle, onSave }) {

    return (
        <Modal isOpen={true} toggle={toggle}>
            <ModalHeader toggle={toggle}>Cat or Not</ModalHeader>
            <ModalBody>
                <Form>
                    <FormGroup>
                        <Label for="item-name">Name</Label>
                        <Input
                            type="text"
                            id="item-name"
                            name="name"
                            value={activeItem.name}
                            onChange={handleChange}
                            placeholder="Enter Item Name"
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="item-description">Description</Label>
                        <Input
                            type="text"
                            id="item-description"
                            name="description"
                            value={activeItem.description}
                            onChange={handleChange}
                            placeholder="Enter item description"
                        />
                    </FormGroup>
                    <FormGroup check>
                        <Label check>
                            <Input
                                type="checkbox"
                                name="isCat"
                                checked={activeItem.isCat}
                                onChange={handleChange}
                            />
                            This is a cat
                        </Label>
                    </FormGroup>
                    <FormGroup>
                        <Label for="item-image">Upload Cat (or Not!)</Label>
                        {/* {activeItem.image_url ?
                        (<><div>Current Image</div>
                        <img
                            src={activeItem.image_url}
                            width="75"
                            height="auto"
                        /></>) : (<div>No current image</div>)} */}
                        <Input
                            type="file"
                            name="image_url"
                            accept="image/jpeg,image/png"
                            onChange={(e) => {
                                handleImageChange(e);
                            }}
                        />
                    </FormGroup>
                </Form>
            </ModalBody>
            <ModalFooter>
                <Button
                    color="success"
                    onClick={() => onSave(activeItem)}
                >
                    Save
                </Button>
            </ModalFooter>
        </Modal>
    );
}