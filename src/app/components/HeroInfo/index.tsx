import * as React from 'react'
import styled from 'styled-components'

import { HeroAttribute } from '../HeroAttribute';
import { Paragraph } from '../Typography';
import { VLine, HLine } from '../Layout';
import { Stats, Skill } from '../../types';

const InfoContainer = styled.div`
    width: 100%;
    height: 100%;
`;

const TopHalf = styled.div`
    height: 35%;
`;

const BottomHalf = styled.div`
    height: 65%;
    font-family: "Oswald";
    letter-spacing: 1.2px;
`;

const BottomQuarter = styled.div`
    display: flex;
    height: 65%;
    padding: 15px 0 15px 0;
`;

const InfoText = styled.div`
    padding-top: 25px;
`;

const Attributes = styled.div`
    width: 60%;
    padding-right: 15px;
`;

const AttributeRow = styled.div`
    width: 100%;
    height: initial;
    display: flex;
    justify-content: space-around;
`;

const Skills = styled.div`
    display: flex;
    flex-direction: column;
    width: 40%;
    padding-left: 15px;
`;

const SkillsHeader = styled.div`
    font-size: 22px;
    letter-spacing: 1.15px;
    padding-bottom: 10px;
`;

interface IFlex { 
    custom?: string;
}

const FlexContainer = styled.div`
    display: flex;
    align-items: center;
    ${(p: IFlex) => p.custom}
`;


interface IHeroInfo {
    description: string;
    stats: Stats;
    skills: Skill[];
}


export const HeroInfo: React.FC<IHeroInfo> = ({description, stats, skills}) => {
    return (
        <InfoContainer>

            <TopHalf>
                <InfoText>
                    <Paragraph>{description}</Paragraph>
                </InfoText>
            </TopHalf>

            <HLine width="100%" />

            <BottomHalf>
                <BottomQuarter>

                    <Attributes>
                        <AttributeRow>
                            <HeroAttribute noOverlay name="health" value={stats.healthpoints}/>
                            <HeroAttribute noOverlay name="stamina" value={stats.stamina}/>
                            <HeroAttribute noOverlay name="mana"  value={stats.mana}/>
                        </AttributeRow>
                        <AttributeRow>
                            <HeroAttribute name="strength" value={stats.strength}/>
                            <HeroAttribute name="intelligence" value={stats.intelligence}/>
                            <HeroAttribute name="agility" value={stats.agility}/>
                            <HeroAttribute name="speed" value={stats.speed}/>
                        </AttributeRow>
                    </Attributes>

                    <VLine height="100%" />

                    <Skills>
                        <SkillsHeader>Skills</SkillsHeader>
                        { skills.map(s => (
                            <FlexContainer custom="margin-bottom: auto;">
                                {`${s.name}: ${s.damage}`}
                                <HeroAttribute name={s.element.toLowerCase()} small />
                            </FlexContainer>
                        ))}
                    </Skills>

                </BottomQuarter>

                <HLine width="100%" />
                
                <FlexContainer>
                    <FlexContainer>
                        Weakness:
                        <HeroAttribute name={stats.weakness.toLowerCase()} />
                    </FlexContainer>
                    <FlexContainer>
                        Resistance: 
                        <HeroAttribute name={stats.resistance.toLowerCase()} />
                    </FlexContainer>
                </FlexContainer>

            </BottomHalf>
        </InfoContainer>
    );
}
