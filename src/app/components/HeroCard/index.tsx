import * as React from 'react'
import styled from 'styled-components'
import Breadcrumb from 'react-bootstrap/Breadcrumb';

import { Paragraph } from '../Typography';
import { HeroType } from '../../types';

const cardTall = ' \
    height: 85vh; \
    width: 75%; \
';

const cardWide = ' \
    height: 60vh; \
    width: 75%; \
';

const cardContent = ' \
    @media (min-width: 1400px) { \
        width: initial; \
        height: inherit; \
    } \
';

const headerDefaults = ' \
	font-family: "Montserrat"; \
	font-weight: 800; \
    font-size: 25px; \
    line-height: 39px; \
    letter-spacing: 1.15px; \
';

const Card = styled.div`
    ${cardTall}
    margin-left: auto;
    margin-right: auto;
    border-radius: 30px;
    display: flex;
    flex-direction: column;
    @media (min-width: 1400px) {
        ${cardWide}
        flex-direction: row;
    }
`;

const HeroImage = styled.img`
    width: 100%;
    ${cardContent}
`;

const TextContainer = styled.div`
    background: #f0f0f0;
    ${cardContent}
    padding: 30px;
`;

const TextHeader = styled.div`
    display: flex;
    justify-content: space-between;
`;

const Nav = styled.div`
    display: flex;
    padding-right: 30px;
`;

const Spacer = styled.div`
    padding: 0 15px 0 15px;
    align-items: center;
	color: #001147;
    ${headerDefaults}
`;


const NavButton = styled.span`
    background: none;
	border: none;
	padding: 0;
	font: inherit;
	cursor: pointer;
	outline: inherit;
    color:  ${props => props.color};
    ${headerDefaults}
    &:hover {
        color: #001147;
    }
`;

const HeroName = styled.h2`
    width: inherit;
	color: #001147;
    ${headerDefaults}
`;

interface IHeroCardProps {
    hero: HeroType;
}

//=====================================================================================//
//
//
//
export const HeroCard: React.FC<IHeroCardProps> = ({hero}) => {
    const [isStoryTab, setStoryTab] = React.useState(false);
    return (
        <Card>
            <HeroImage 
                src={hero.imgUrl} 
                alt={`Image of ${hero.name}`}
                draggable={false}
            />
            <TextContainer>

                <TextHeader>
                    <HeroName>{hero.name}</HeroName>
                    <Nav>
                        <NavButton 
                            color={!isStoryTab ? '#001147' : '#7C85A0'}
                            onClick={() => setStoryTab(false)}
                        >Info</NavButton>
                        <Spacer>/</Spacer>
                        <NavButton 
                            color={isStoryTab ? '#001147' : '#7C85A0'}
                            onClick={() => setStoryTab(true)}
                        >Story</NavButton>
                    </Nav>
                </TextHeader>

                {isStoryTab 
                    ? <Paragraph>{hero.backStory}</Paragraph>
                    : <Paragraph>{hero.description}</Paragraph>
                }

            </TextContainer>
        </Card>
    );
}

//=====================================================================================//
