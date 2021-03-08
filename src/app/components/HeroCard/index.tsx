import * as React from 'react'
import styled from 'styled-components'

import { HeroStory } from '../HeroStory';
import { HeroInfo } from '../HeroInfo';
import { HeroType } from '../../types';

//=================================/
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
//=================================/

//=================================/
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
    padding: 40px;
`;

const TextHeader = styled.div`
    display: flex;
    justify-content: space-between;
`;

const Nav = styled.div`
    display: flex;
    padding-right: 50px;
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

const Spacer = styled.div`
    padding: 0 8px 0 8px;
    align-items: center;
	color: #001147;
    ${headerDefaults}
`;

const HeroName = styled.h2`
    width: inherit;
	color: #001147;
    ${headerDefaults}
`;
//=================================/

interface IHeroCardProps {
    hero: HeroType;
}

enum Tab {
    Info,
    Story
}

//=====================================================================================//
//
//
//
export const HeroCard: React.FC<IHeroCardProps> = ({hero}) => {
    const [tab, setTab] = React.useState(Tab.Info);
    console.log(hero);
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
                            color={tab === Tab.Info ? '#001147' : '#7C85A0'}
                            onClick={() => setTab(Tab.Info)}
                        >Info</NavButton>
                        <Spacer>/</Spacer>
                        <NavButton 
                            color={tab === Tab.Story ? '#001147' : '#7C85A0'}
                            onClick={() => setTab(Tab.Story)}
                        >Story</NavButton>
                    </Nav>
                </TextHeader>

                {tab === Tab.Story 
                    ? <HeroStory 
                        story={hero.backStory}
                      />
                    : <HeroInfo 
                        description={hero.description}
                        stats={hero.attributes}
                        skills={hero.skills}
                      />
                }

            </TextContainer>
        </Card>
    );
}

//=====================================================================================//
