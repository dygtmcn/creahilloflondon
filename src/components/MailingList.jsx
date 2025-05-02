import TitleAnimator from "./TitleAnimator";
import styled from "styled-components";

const Section = styled.section`
  background: #1b0a3f;
  color: white;
  padding: 80px 40px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  max-width: 1200px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 60px;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

const Left = styled.div`
  flex: 1;
`;

const Right = styled.div`
  flex: 1;
`;

const Description = styled.p`
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: 30px;
`;

const Form = styled.form`
  display: flex;
  gap: 16px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Input = styled.input`
  padding: 16px 20px;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 100%;
  background: #1b0a3f;
  color: white;
  border: 1px solid #666;
  font-weight: bold;

  &::placeholder {
    color: white;
  }
`;

const Button = styled.button`
  padding: 16px 32px;
  background: #03fcb1;
  color: #000;
  font-size: 1rem;
  font-weight: bold;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background: #00e2a3;
  }
`;

export default function MailingList() {
  return (
    <Section>
      <Container>
        <Left>
          <div>
            <TitleAnimator text="Join our" color="white" />
            <TitleAnimator text="mailing list" color="white" />
          </div>
        </Left>
        <Right>
          <Description>
            <strong>
              For the latest updates on Creahill: news, events, how to get involved and more
            </strong>
            <br />
            <br />
            By signing up, you consent to receive updates, news and opportunities related to the programme you selected and to our Privacy Policy.
          </Description>
          <Form>
            <Input type="text" placeholder="Name" />
            <Input type="email" placeholder="Email Address" />
            <Button type="submit">Subscribe</Button>
          </Form>
        </Right>
      </Container>
    </Section>
  );
}
