//@ts-nocheck | I'm so tired of this, React thinks that Input is not valid JSX element!
import * as React from "react";
import { useForm } from "react-hook-form";
import {Button, Divider, styled, TextField} from "@mui/material"
import {useRef} from "react";
import Widgets from "../../Widgets";
const {ContentInput, TagAdder} = Widgets.items

enum FieldValues {
    title = "title",
    description = "description",
    theme = "theme"
}

const Input = styled(TextField)`
  & label, input {
    color: darkviolet;
    font-family: inherit!important;
    padding-left: 4rem;
  }
  & div {
    width: 95%;
    margin: 0 auto;
    font-family: inherit!important;
  }
`
// I guess images should be like in MD [placeholder](imgUrl) pretty smooth move
const Form = () => {
    const { register, handleSubmit, watch, formState: { errors },resetField } = useForm<typeof FieldValues>();
    const content = useRef<HTMLDivElement>(null)
    const previewContent = useRef<HTMLDivElement>(null)
    const tags = useRef<string[]>([])
    const onSubmit = (data: typeof FieldValues) => {
        console.log(data, content.current.innerText)
        content.current.innerText = null
        resetField(FieldValues.title)
        resetField(FieldValues.description)
    }
    return (
        <div className="w-[90%] py-10 mx-auto h-full">
            <div className="bg-[#444444] p-4">
                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4 font-custom-generis">
                    <Input color="secondary" label="Title" variant="standard" {...register(FieldValues.title, { required: true })} />
                    <Input color="secondary" label="Description" variant="standard" {...register(FieldValues.description, { required: true })} />
                    <Input color="secondary" label="Theme" variant="standard" {...register(FieldValues.theme, { required: true })} />
                    <TagAdder customRef={tags} Input={Input} />
                    <ContentInput contentRef={previewContent} pl="This will be preview text"/>
                    <Divider />
                    <ContentInput contentRef={content} pl="This will be main content"/>
                    <div className="bg-[#343434] w-max mx-auto mt-5">
                        <Button size="large" color="secondary" variant="outlined">Create Post</Button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Form