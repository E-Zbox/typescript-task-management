"use client";
import Link from "next/link";
import React from "react";
import { AiFillDelete } from "react-icons/ai";
// store
import store from "../store";
// styles
import { Button } from "../styles/shared/Form";
import { DivContainer, MainFlexContainer } from "../styles/shared/Container";
import { H4 } from "../styles/shared/Text";

interface TaskPropTypes {
    _id: number;
    title: string;
}
export const Task = ({ _id, title }: TaskPropTypes) => {
    const { deleteTask } = store.TaskStore;

    return (
        <MainFlexContainer
            className={
                "bg-slate-700 my-1 py-3 px-4 rounded cursor-pointer opacity-80 z-0 hover:opacity-100 hover:translate-x-0.5"
            }
        >
            <Link className={"w-full"} key={_id} href={`/task/${_id}`}>
                <DivContainer className={"w-full"}>
                    <H4 className={""}>{title}</H4>
                </DivContainer>
            </Link>
            <DivContainer className={"w-fit"}>
                <Button
                    className={"bg-transparent"}
                    onClick={() => deleteTask(_id)}
                >
                    <AiFillDelete color={"#ae3423"} size={24} />
                </Button>
            </DivContainer>
        </MainFlexContainer>
    );
};
