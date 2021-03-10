import * as React from 'react'
import styled from 'styled-components'

import { HeroStory } from '../HeroStory';
import { HeroInfo } from '../HeroInfo';
import { HeroType } from '../../../types';

import { FlexContainer, noSelect } from '../../Layout';

const cardResponsive = ' \
    @media (min-width: 1400px) { \
        width: initial; \
        height: inherit; \
    } \
';

//=================================/
const Card = styled.div`
    height: 85vh;
    width: 75%;
    display: flex;
    flex-direction: column;
    margin-left: auto;
    margin-right: auto;
    border-radius: 30px;
    @media (min-width: 1400px) {
        height: 60vh;
        flex-direction: row;
    }
`;

const HeroImage = styled.img`
    width: 100%;
    ${cardResponsive}
`;

const TextContainer = styled.div`
    background: #f0f0f0;
    ${cardResponsive}
    padding: 40px;
`;

const TextHeader = styled(FlexContainer)`
    justify-content: space-between;
	font-family: "Montserrat";
	font-weight: 800;
    font-size: 25px;
    line-height: 39px;
    letter-spacing: 1.15px;
	color: #001147;
    ${noSelect}
`;

const Nav = styled(FlexContainer)`padding-right: 50px;`;

const NavButton = styled.span`
    background: none;
	border: none;
	padding: 0;
	font: inherit;
	cursor: pointer;
	outline: inherit;
    color:  ${props => props.color};
    &:hover {
        color: #001147;
    }
`;

const Spacer = styled.div`
    padding: 0 8px 0 8px;
    align-items: center;
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
    return (
        <Card>
            <HeroImage 
                src={hero.imgUrl} 
                alt={`Image of ${hero.name}`}
                draggable={false}
            />
            <TextContainer>

                <TextHeader>
                    {hero.name}
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
