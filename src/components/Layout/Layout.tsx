import React, { useState } from 'react'
import { LayoutProps } from './Layout.types'
import * as S from './Layout.styles'
import SideBar from "./SideBar";
import TopBar from "./TopBar";

const Layout = ({ children }: LayoutProps) => {
    return (
        <S.Main>
            <S.Left>
                <SideBar/>
            </S.Left>
            <S.Right style={{ marginTop: '18px' }}>
                <TopBar/>
                {children}
            </S.Right>
        </S.Main>
    )
}

export default Layout
