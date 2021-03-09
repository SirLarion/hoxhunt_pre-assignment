import * as React from "react";
import styled from "styled-components";

interface IVLine {
    height: string;
}

export const VLine = styled.div`
    width: 0;
    height: ${(p: IVLine) => p.height};
    border: 1px solid #001147;
`;

interface IHLine {
    width: string;
}
export const HLine = styled.div`
    height: 0;
    width: ${(p: IHLine) => p.width};
    border: 1px solid #001147;
`;

interface IPadded {
    top?: string;
    right?: string;
    bottom?: string;
    left?: string;
}

export const Padded = styled.div`
    padding-top: ${(p: IPadded) => p.top};
    padding-right: ${(p: IPadded) => p.right};
    padding-bottom: ${(p: IPadded) => p.bottom};
    padding-left: ${(p: IPadded) => p.left};
`;
