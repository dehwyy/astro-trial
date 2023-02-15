// @ts-nocheck
import React, {FC} from 'react';

interface IProps {
    post: IPost
}

const Post:FC<IProps> = ({post}) => {
    return (
        <div className="bg-[#444444] text-white p-7 cut-right-bottom-big flex flex-col gap-y-5">
            <div className="flex items-center gap-x-3">
                <div className="w-[30px] h-[30px] rounded-full">
                    <img className="w-full h-full object-cover rounded-full" src={post.authorImage} alt="image"/>
                </div>
                <div className="font-custom-neuro text-custom-light-blue">{post.author}</div>
                <div className="font-custom-zekton text-[10px] pt-1 text-custom-gray">{post.date}</div>
            </div>
            <div className="text-[23px] font-custom-zekton text-custom-light-blue">
                - {post.title}
            </div>
            <div className="flex gap-x-3 text-[12px] font-custom-zekton text-custom-gray">
                <div>-- {post.theme}</div>
                {post.tags.map((tag, index) => (
                    <div key={index}>-- {tag}</div>
                ) )}
            </div>
            <div className="h-[350px]">
                <img className="h-full w-full object-cover" src={post.previewImage} alt="image" />
            </div>
            <div className="">
                {post.previewText}
            </div>
        </div>
    );
};

export default Post;