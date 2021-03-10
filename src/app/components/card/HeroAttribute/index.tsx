import * as React from 'react'
import styled from 'styled-components'
import { OverlayTrigger } from 'react-bootstrap';

import { publicUrl } from '../../../utils/constants';
import { capitalized } from '../../../utils/tools';

import { FlexContainer } from '../../Layout';

const Attribute = styled(FlexContainer)`
    font-size: 20px;
    color: #001147;
    ${(p: SizeProps) => !p.isSmall ? 'margin: 10px' : ''}
`;

const HSMattr = styled(FlexContainer)`
    font-size: 22px;
    line-height: 24px;
    flex-direction: column;
`;

const Icon = styled.img`
    ${(p: SizeProps) => p.isSmall 
        ? 'width: 23px; margin-left: 4px'
        : 'width: 26px; margin: 4px;'
    }
`;

const Tooltip = styled.div`
    font-family: "Oswald";
    letter-spacing: 1.2px;
    background: #E0E0E0AA;
    border-radius: 3px;
    padding: 4px 7px 4px 7px;
`;

interface SizeProps {
    isSmall: boolean;
}

interface IHeroAttrProps {
    name: string;
    value?: number;
    noOverlay?: boolean;
    small?: boolean;
}


export const HeroAttribute: React.FC<IHeroAttrProps> = ({name, value, noOverlay, small}) => {
    if(noOverlay) {
        return (
            <HSMattr>
                { capitalized(name) }
                <Attribute isSmall={small}>
                    <Icon 
                        isSmall={small}
                        src={`${publicUrl}/${name}.png`} 
                        alt={`${name} icon`} 
                    />
                    {value}
                </Attribute>
            </HSMattr>
        );
    }
    else {
        return (
            <OverlayTrigger
                placement="top"
                delay={{ show: 100, hide: 100 }}
                overlay={<Tooltip>{capitalized(name)}</Tooltip>}
            >
                <Attribute isSmall={small}>
                    <Icon 
                        isSmall={small}
                        src={`${publicUrl}/${name}.png`} 
                        alt={`${name} icon`} 
                    />
                    {value}
                </Attribute>
            </OverlayTrigger>
        );
    }
}
