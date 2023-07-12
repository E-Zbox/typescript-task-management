"use client";
import React from "react";
import { AiFillDelete } from "react-icons/ai";
// styles
import { Button } from "../styles/shared/Form";
import { DivContainer, MainFlexContainer } from "../styles/shared/Container";
import { H4 } from "../styles/shared/Text";

interface TaskPropTypes {
    _id: number;
    title: string;
}
export const Task = ({ _id, title }: TaskPropTypes) => {
    return (
        <MainFlexContainer
            className={
                "bg-slate-700 my-1 py-3 px-4 rounded opacity-80 z-0 hover:opacity-100 hover:translate-x-0.5"
            }
        >
            <DivContainer className={"w-full"}>
                <H4 className={""}>{title}</H4>
            </DivContainer>
            <DivContainer className={"w-fit"}>
                <Button className={"bg-transparent"}>
                    <AiFillDelete size={24} color={"#ae3423"} />
                </Button>
            </DivContainer>
        </MainFlexContainer>
    );
};
