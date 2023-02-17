import type {FC, MutableRefObject} from 'react';
import {useState} from "react";
import {useForm} from "react-hook-form";

interface IProps {
    customRef: MutableRefObject<Array<string>>
    Input: (any: any) => JSX.Element // Trust me bro...
    Btn: (any: any) => JSX.Element // Trust me bro...
}

interface inputFields {
    tag: string
}

interface ITag {
    id: number
    content: string
}
// I Should add remove icon for each "TAG" rendered in map
const TagAdderReact:FC<IProps> = ({Input, Btn,  customRef}) => {
    const { register, getValues, reset } = useForm<inputFields>()
    const [tags, setTags] = useState<ITag[]>()
    const clickHandler = () => {
        setTags(prev => {
            if (prev) {
                return [{id: prev?.length + 1, content: getValues().tag}, ...prev]
            } else {
                return [{id: 0, content: getValues().tag}]
            }
        })
        reset()
    }
    return (
        <div className=" w-[70%] mx-auto flex flex-col gap-y-4">
            <div className="flex items-end gapx-4">
                <div className="flex-auto">
                    <Input color="secondary" style={{width: "100%"}} label="Custom tags" variant="standard" {...register("tag")}/>
                </div>
                <div className="bg-[#343434]">
                    <Btn onClick={clickHandler} size="small" color="secondary" variant="outlined">Add to list</Btn>
                </div>
            </div>
            <div className="flex gap-x-4 gap-y-2 flex-wrap">
                {tags?.map(tag => (
                    <div key={tag.id} className="py-1 px-5 bg-gray-600 font-custom-generis text-custom-blue">{tag.content}</div>
                ))}
            </div>
        </div>
    );
};

export default TagAdderReact;