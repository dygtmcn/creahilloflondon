import styled from "styled-components";
import newsImage from "../images/ciribim.png";
import TitleAnimator from "./TitleAnimator";

const Section = styled.section`
  min-height: 60vh;
  padding: 60px;
  background: white;
  color: #111;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  gap: 60px;
  max-width: 1200px;
  width: 100%;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

const ImageBox = styled.div`
  flex: 1.4;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledNewsImage = styled.img`
  width: 100%;
  max-width: 400px;
  min-height: 410px;
  object-fit: cover;
  border-radius: 16px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

    &:hover {
    transform: scale(1.02);
    box-shadow: 0 12px 28px rgba(0, 0, 0, 0.15);
  }
`;

const TextBox = styled.div`
  flex: 1;
  padding: 0;
  background: transparent;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Meta = styled.div`
  font-size: 0.95rem;
  color: #555;
  margin-bottom: 12px;
`;

const SubTitle = styled.h3`
  font-size: 1.8rem;
  margin-bottom: 16px;
  color: #222;
`;

const Paragraph = styled.p`
  font-size: 1rem;
  color: #444;
  line-height: 1.6;
  margin-bottom: 32px;
  max-width: 500px;
`;

const ReadMore = styled.a`
  display: flex;
  align-items: center;
  font-weight: bold;
  color: #a020f0;
  font-size: 1.2rem;
  text-decoration:none;
  cursor: pointer;
  transition: transform 0.2s ease;

  &:hover {
    transform: translateX(4px);
  }

  svg {
  margin-left: 8px;
  width: 18px;
  height: 18px;
  fill: currentColor;
  position: relative;
  top: 3px; 
}
`;



export default function News() {
    return (
        <Section>
            <Container>
                <ImageBox>
                    <StyledNewsImage src={newsImage} alt="News visual" />
                </ImageBox>

                <TextBox>
                    <TextBox>
                        <TitleAnimator text="News" color="black" />
                    </TextBox>
                    <Meta>02/05/2025 · Creahill</Meta>
                    <SubTitle>Lorem Ipsum Dolor sit amet</SubTitle>
                    <Paragraph>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod
                        dui a nisi cursus, vitae commodo lorem hendrerit.
                    </Paragraph>
                    <ReadMore href="#">
                        Read More
                        <svg viewBox="0 0 20 20">
                            <path d="M7.05 4.05a.5.5 0 0 1 .7 0l5 5a.5.5 0 0 1 0 .7l-5 5a.5.5 0 0 1-.7-.7L11.29 10 7.05 5.76a.5.5 0 0 1 0-.71z" />
                        </svg>
                    </ReadMore>
                </TextBox>
            </Container>
        </Section>
    );
}
