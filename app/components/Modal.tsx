import { FC } from "react";
import { AiFillCloseSquare } from "react-icons/ai";
// store
import store from "../store";
// styles
import {
    ModalPropTypes,
    ModalScreen,
    ModalScreenContainer,
} from "../styles/Modal";
import { Button } from "../styles/shared/Form";

const Modal: FC<ModalPropTypes> = ({ children }) => {
    const { updateState } = store.ModalStore;

    const handleClick = () => updateState({ show: false });
    return (
        <ModalScreen>
            <ModalScreenContainer>
                {children}
                <Button
                    className={"bg-transparent absolute top-px right-px"}
                    onClick={handleClick}
                >
                    <AiFillCloseSquare className="modal_x_button" size={35} />
                </Button>
            </ModalScreenContainer>
        </ModalScreen>
    );
};

export default Modal;
