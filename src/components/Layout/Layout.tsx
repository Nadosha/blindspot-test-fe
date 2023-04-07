import React, { useState } from 'react'
import { LayoutProps } from './Layout.types'
import * as S from './Layout.styles'
import TopBar from "./TopBar";

const Layout = ({ children }: LayoutProps) => {
    return (
        <S.Main>
            <S.Right>
                <TopBar/>
                {children}
            </S.Right>
        </S.Main>
    )
}

export default Layout
