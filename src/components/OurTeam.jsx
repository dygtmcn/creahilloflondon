import styled from "styled-components";
import sImage from "../images/sinem.jpg";
import eImage from "../images/ender.jpg";
import TitleAnimator from "./TitleAnimator";


const Section = styled.section`
  padding: 80px 40px;
  background: #f9f9f9;
  color: #111;
  display: flex;
  justify-content: center;
`;

const TextBox = styled.div`
  margin-bottom: 40px;
  text-align: left;

  @media (max-width: 768px) {
    text-align: center;
  }
`;

const Container = styled.div`
  max-width: 1200px;
  width: 100%;
`;


const TeamGrid = styled.div`
  display: flex;
  gap: 40px;
  justify-content: center;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const Card = styled.div`
  flex: 1;
  background: white;
  border-radius: 16px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
  overflow: hidden;
  text-align: center;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-6px);
  }
`;

const Image = styled.img`
  width: 100%;
  height: 360px;
  object-fit: cover;
`;

const Name = styled.h3`
  font-size: 1.4rem;
  margin: 16px 0 8px;
`;

const Role = styled.p`
  font-size: 1rem;
  color: #666;
  margin-bottom: 12px;
`;

const Description = styled.p`
  font-size: 0.95rem;
  padding: 0 20px 30px;
  color: #444;
  line-height: 1.6;
`;

export default function OurTeam() {
    return (
        <Section>
            <Container>
                <TextBox>
                    <TitleAnimator text="About The Creator" color="black" />
                </TextBox>
                <TeamGrid>
                    <Card>
                        <Image src={sImage} alt="Team Member 1" />
                        <Name>Sinem Dinçer</Name>
                        <Role>Creative Director</Role>
                        <Description>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at sem ut
                            justo convallis porttitor vitae ut nulla.
                        </Description>
                    </Card>

                    <Card style={{ visibility: "hidden", pointerEvents: "none" }}>
                        
                    </Card>
                </TeamGrid>
            </Container>
        </Section>
    );
}
