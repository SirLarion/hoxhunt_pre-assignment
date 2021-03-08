import * as React from "react";
import styled from "styled-components";

interface PropsVertical {
    height: string;
}

interface PropsHorizontal {
    width: string;
}

export const VLine = styled.div`
    width: 0;
    height: ${(p: PropsVertical) => p.height};
    border: 1px solid #E0E0E0;
`;

export const HLine = styled.div`
    height: 0;
    width: ${(p: PropsHorizontal) => p.width};
    border: 1px solid #E0E0E0;
`;
