import styled from "styled-components";
import sImage from "../images/sinem.jpg";
import TitleAnimator from "./TitleAnimator";

const Section = styled.section`
  padding: 60px 20px;
  background: #f9f9f9;
  color: #111;
  display: flex;
  justify-content: center;
`;

const Container = styled.div`
  max-width: 1000px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 40px;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

const TextContent = styled.div`
  flex: 1;
`;

const StyledImage = styled.img`
  width: 300px;
  height: 300px;
  object-fit: cover;
  border-radius: 50%;
`;


const Description = styled.p`
  font-size: 1.1rem;
  color: #444;
  line-height: 1.6;
  max-width: 600px;
`;

export default function OurTeam() {
  return (
    <Section>
      <Container>
        <TextContent>
          <TitleAnimator text="Meet the Creator" color="black" />
          <Description>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at sem ut justo
            convallis porttitor vitae ut nulla. Duis at lacus ac risus elementum placerat.
          </Description>
        </TextContent>
        <StyledImage src={sImage} alt="Sinem Dinçer" />
      </Container>
    </Section>
  );
}
