import * as React from 'react';
import gql from 'graphql-tag';
import { useQuery } from 'react-apollo-hooks';
import styled from 'styled-components';
import Carousel from 'react-bootstrap/Carousel';

import { TopBar } from '../../components/TopBar';
import { Hero } from '../../components/Hero';
import { Section } from '../../components/Section';
import { Footer } from '../../components/Footer';
import { HeroCard } from '../../components/HeroCard';

import { publicUrl } from '../../constants';
import { HeroType } from '../../types';

const HEROES_QUERY = gql`
	query {
		heroes {
			name
			imgUrl
			description
			backStory
			attributes {
				strength
				intelligence
				stamina
				healthpoints
				mana
				agility
				speed
				resistance
				weakness
			}
			skills {
				name
				damage
				element
			}
		}
	}
`;

const IndexContainer = styled.div`
    background: #fbfbfb;
`;

const Body = styled.div`
    max-width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const HeroCardContainer = styled.div`
	width: 100%;
	display: flex;
    justify-content: center;
    align-items: center;
	padding: 25px 0 50px 0;
`;

const CarouselContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
`;

const ButtonIcon = styled.img`
    width: 40px;
    margin: 4vmin;
    @media hover {
        width: 50px;
    }
`;

const handleLoading = () => <div>Loading...</div>;

const handleError = (message: string) => <div>Error! {message}</div>;

interface IHeroIndexProps {}


//=====================================================================================//
//
//
export const HeroIndex: React.FC<IHeroIndexProps> = () => {
    const { data, error, loading } = useQuery(HEROES_QUERY);

    if (error) return handleError(error.message);
	if (loading) return handleLoading();

    const heroes = data.heroes.map((h: HeroType) => <HeroCard key={h.name} hero={h} />);

	return (
        <main>
            <IndexContainer>
                <TopBar />
                <Hero />
                <Section
                    heading={'Hunter Index'}
                />
                <Body>
                    <HeroCardContainer>
                        <CarouselContainer>

                            <Carousel 
                                keyboard={true}
                                indicators={false}
                                prevIcon={<ButtonIcon src={`${publicUrl}/arrow_left.svg`} alt="<"/>}
                                nextIcon={<ButtonIcon src={`${publicUrl}/arrow_right.svg`} alt=">"/>}
                                interval={null}
                            >
                                {data.heroes.map((h: HeroType) => (
                                        <Carousel.Item key={h.name}>
                                            <HeroCard hero={h} />
                                        </Carousel.Item>
                                ))}
                            </Carousel>

                        </CarouselContainer>
                    </HeroCardContainer>
                </Body>
                <Footer />
            </IndexContainer>
        </main>
	);
};

//=====================================================================================//
