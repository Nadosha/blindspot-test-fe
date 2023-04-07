import styled from "styled-components";
import {IconType} from "react-icons";
import React from "react";

export const CustomIcon = ({ icon, color, style }: { icon: IconType; color: string; style: React.CSSProperties }) => {

    const FsIcon = styled(icon)`
        color: ${color};
    `

    return <FsIcon style={style}/>
}
