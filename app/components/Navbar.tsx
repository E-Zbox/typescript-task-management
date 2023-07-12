import React from "react";
// store
import store from "../store";
// styles
import { MainFlexContainer } from "../styles/shared/Container";
import { Button } from "../styles/shared/Form";
import { H1 } from "../styles/shared/Text";

const Navbar = () => {
    const { updateState } = store.ModalStore;

    const handleClick = () => updateState({ show: true });
    return (
        <MainFlexContainer
            className={"border-green-300 px-10 shadow shadow-gray-300/50"}
        >
            <div className="h-fit">
                <H1 className="py-5 px-2.5">Taskify</H1>
            </div>
            <div className="h-fit">
                <Button onClick={handleClick}>+ Task</Button>
            </div>
        </MainFlexContainer>
    );
};

export default Navbar;
