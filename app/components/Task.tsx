'use client';
import React from "react"
// styles
import { DivContainer, MainFlexContainer } from "../styles/shared/Container";
import { H4 } from "../styles/shared/Text";

interface TaskPropTypes {
    _id: number;
    title: string;
}
export const Task = ({_id, title}: TaskPropTypes)=> {
    return (
        <MainFlexContainer className={""}>
            <DivContainer className={"w-full"}>
                <H4 className={""}>{title}</H4>
            </DivContainer>
            <DivContainer className={"w-fit"}>
                <p className="red-900">Delete</p>
            </DivContainer>
        </MainFlexContainer>
    )
}