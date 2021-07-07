import {
  Card,
  Top,
  Bottom,
  BottomSection,
  Title,
  Subtitle,
  Em,
  Paragraph,
  SignUpButton,
  FlexBox,
  List,
  ListItem,
} from './PriceGridComponents';
import Colors from '../../Colors';

export default function PriceGrid() {
  return (
    <Card>
      <Top>
        <Title color={Colors.cyan}>Join our community</Title>
        <Subtitle color={Colors.yellow}>30-day, hassle-free money back guarantee</Subtitle>
        <Paragraph color={Colors.blue}>
          Gain access to our full library of tutorials along with expert code reviews. Perfect for any developers who
          are serious about honing their skills.
        </Paragraph>
      </Top>

      <Bottom>
        <BottomSection bgColor={Colors.cyan}>
          <Title color='white' fontSize='1em'>
            Monthly Subscription
          </Title>
          <Paragraph color='white'>
            <FlexBox>
              <Em>$29</Em> per month
            </FlexBox>
            Full access for less than $1 a day
          </Paragraph>
          <SignUpButton
            onClick={() => {
              alert('Thank you for sign up!');
            }}>
            Sign Up
          </SignUpButton>
        </BottomSection>

        <BottomSection bgColor={Colors.cyan2}>
          <Title color='white' fontSize='1em'>
            Why Us
          </Title>
          <Paragraph color='white'>
            <List>
              {[
                'Tutorials by industry experts',
                'Peer & expert code review',
                'Coding exercises',
                'Access to our GitHub repos',
                'Community forum',
                'Flashcard decks',
                'New videos every week',
              ].map((item, index) => (
                <ListItem key={index}>{item}</ListItem>
              ))}
            </List>
          </Paragraph>
        </BottomSection>
      </Bottom>
    </Card>
  );
}
