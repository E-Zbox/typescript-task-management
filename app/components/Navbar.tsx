import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
// store
import store from "../store";
// styles
import { MainFlexContainer } from "../styles/shared/Container";
import { Button } from "../styles/shared/Form";
import { H1 } from "../styles/shared/Text";

const Navbar = () => {
    const pathname = usePathname();
    const { updateState } = store.ModalStore;

    const handleClick = () => updateState({ show: true });
    return (
        <MainFlexContainer
            className={"px-10 bg-slate-900 shadow shadow-gray-800/50"}
        >
            <div className="h-fit">
                <Link href="/">
                    <H1 className="py-5 px-2.5">Taskify</H1>
                </Link>
            </div>
            {pathname.split("/").length === 2 && (
                <div className="h-fit">
                    <Button onClick={handleClick}>+ Task</Button>
                </div>
            )}
        </MainFlexContainer>
    );
};

export default Navbar;
