import React from "react"
// styles
import {MainFlexContainer} from "../styles/shared/Container"
import {Button} from "../styles/shared/Button"
import {H1} from "../styles/shared/Text"

const Navbar = ()=> {
    return (
        <MainFlexContainer className={"border-green-300 px-10"}>
            <div className="h-fit">
                <H1 className="py-5 px-2.5">Taskify</H1>
            </div>
            <div className="h-fit">
                <Button className="">+ Task</Button>
            </div>
        </MainFlexContainer>
    )
}

export default Navbar;