import React, {FC, memo, MutableRefObject, Ref, useCallback, useRef, useState} from 'react';

interface IProps {
    contentRef: MutableRefObject<HTMLDivElement>
    pl: string
}
const ContentInputReact:FC<IProps> = ({contentRef, pl}) => {
    const [moves, setMoves] = useState(0)
    const contentPlaceholder = useRef<HTMLDivElement>(null)
    const rerenderHandler = useCallback((e: React.KeyboardEvent<HTMLDivElement>) => {
        if (contentRef.current.innerText.length === 0 && e.key !== "Backspace" && contentPlaceholder.current) {
            contentPlaceholder.current.innerText = ""
        }
        setMoves(prev => prev + 1)
    }, [])
    return (
        <div className="relative text-custom-gray bg-transparent px-8 my-5">
            <div ref={contentPlaceholder} onClick={() => contentRef.current.focus()} className="select-none absolute top-0 text-[15px] text-gray-400">{contentRef.current?.innerText.length ? "" : pl}</div>
            <div ref={contentRef} onKeyDown={rerenderHandler} onKeyUp={rerenderHandler} contentEditable={true} className="z-20 focus-visible:outline-0" />
        </div>
    );
};

export default memo(ContentInputReact);