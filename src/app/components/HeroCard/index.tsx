import * as React from 'react'
import styled from 'styled-components'

import { Paragraph } from '../Typography';
import { HeroType } from '../../types';

const cardTall = ' \
    height: 85vh; \
    width: 100%; \
';

const cardWide = ' \
    height: 60vh; \
    width: 100%; \
';

const cardContent = ' \
    @media (min-width: 1400px) { \
        width: initial; \
        height: inherit; \
    } \
';

const Card = styled.div`
    ${cardTall}
    border-radius: 30px;
    display: flex;
    flex-direction: column;
    @media (min-width: 1400px) {
        ${cardWide}
        flex-direction: row;
    }
`;

const HeroImage = styled.img`
    width: inherit;
    ${cardContent}
`;

const HeroInfo = styled.div`
    background: #f0f0f0;
    ${cardContent}
    padding: 20px;
`;

const HeroName = styled.h2`
    width: inherit;
	color: #001147;
	font-family: "Montserrat";
	font-weight: 800;
    font-size: 25px;
    line-height: 39px;
    letter-spacing: 1.15px;
`;

interface IHeroCardProps {
    hero: HeroType;
}

//=====================================================================================//
//
//
//
export const HeroCard: React.FC<IHeroCardProps> = ({hero}) => {
    return (
        <Card>
            <HeroImage 
                src={hero.imgUrl} 
                alt={`Image of ${hero.name}`}
                draggable={false}
            />
            <HeroInfo>
                <HeroName>{hero.name}</HeroName>
                <Paragraph>{hero.description}</Paragraph>
            </HeroInfo>
        </Card>
    );
}

//=====================================================================================//
