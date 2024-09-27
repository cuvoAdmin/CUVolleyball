// pages/index.tsx

'use client';

import React, { useState } from 'react';
import styled from 'styled-components';
import Image from 'next/image';

// CEO and executives data
const ceo = {
  name: 'Mark',
  title: 'CEO',
  bio: 'All my homies hate Mark',
  imageUrl: '/images/Mark.jpg'
};

const executives = [
  {
    name: 'Areeb',
    title: 'CTO',
    bio: 'Areeb is a leading expert in poop eating...',
    imageUrl: '/images/Areeb.jpg'
  },
  {
    name: 'Maya',
    title: 'UofC Chapter President',
    bio: 'Just cries 24/7',
    imageUrl: '/images/Maya.jpg'
  },
  {
    name: 'Kevlam',
    title: 'Outreach Director',
    bio: 'Got grounded',
    imageUrl: '/images/Kevlam.jpg'
  },
  {
    name: 'Kanaalaq',
    title: 'UofC Chapter President',
    bio: 'Poops a lot',
    imageUrl: '/images/Kanaalaq.jpg'
  },
  {
    name: 'Caleb',
    title: 'UofC Chapter President',
    bio: 'We love Caleb',
    imageUrl: '/images/Caleb.jpg'
  },
  {
    name: 'Bullah',
    title: 'UofC Chapter President',
    bio: 'Eats people',
    imageUrl: '/images/Bullah.png'
  },
  {
    name: 'Vova',
    title: 'UofC Chapter President',
    bio: 'Cannot hit line',
    imageUrl: '/images/Vova.jpg'
  }
];

// Styled components
const PageContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 24px;
  min-height: 100vh;
`;

const Header = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  background-color: #f8f9fa;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 16px;
  text-align: center;
  z-index: 1000;
`;

const HeaderTitle = styled.h1`
  font-family: 'Monaco', monospace;
  font-size: 24px;
  color: #333;
  margin: 0;
`;

const CEOContainer = styled.div`
  margin-top: 150px; /* Adds margin to account for the fixed header */
  margin-bottom: 50px;
  text-align: center;
`;

const BubbleContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  margin-top: 32px;
`;

const Bubble = styled.div<{ isHovered: boolean }>`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  background-color: #f0f0f0;
  margin: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  transition: transform 0.3s ease, opacity 0.3s ease;
  overflow: hidden;
  opacity: ${({ isHovered }) => (isHovered ? 1 : 0.8)};
  transform: ${({ isHovered }) => (isHovered ? 'scale(1.2)' : 'none')};
  z-index: ${({ isHovered }) => (isHovered ? 1 : 'auto')};
  position: relative;
  will-change: transform, opacity;
`;

const ExecImage = styled(Image)`
  border-radius: 50%;
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
  transition: opacity 0.3s ease, transform 0.3s ease;
`;

const Bio = styled.p`
  margin: 0;
  color: black;
  text-align: center;
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 5px;
`;

const Name = styled.h2`
  margin: 0;
  color: black;
  text-align: center;
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 5px;
`;

const Title = styled.p<{ isHovered: boolean }>`
  padding: 10px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  text-align: center;
  background-color: rgba(0, 0, 0, 0.7);
  border-radius: 5px;
  transition: opacity 0.3s ease;
  opacity: ${({ isHovered }) => (isHovered ? 1 : 0)};
`;

const EnlargedView = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
  padding: 24px;
  background-color: #f0f0f0;
  border-radius: 10px;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);
`;

const EnlargedImage = styled(Image)`
  width: 300px;
  height: 300px;
  border-radius: 50%;
  object-fit: cover;
`;

const EnlargedName = styled.h2`
  margin-top: 20px;
  font-size: 24px;
  color: #333;
`;

const EnlargedTitle = styled.h3`
  font-size: 18px;
  color: #777;
`;

const EnlargedBio = styled.p`
  font-size: 16px;
  color: #555;
  text-align: center;
  max-width: 600px;
  margin-top: 10px;
`;

const BackButton = styled.button`
  margin-top: 20px;
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3;
  }
`;

const ExecutiveBubble: React.FC<{
  exec: { name: string; title: string; bio: string; imageUrl: string };
  isHovered: boolean;
  onClick: () => void;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}> = ({ exec, isHovered, onClick, onMouseEnter, onMouseLeave }) => (
  <Bubble
    isHovered={isHovered}
    onClick={onClick}
    onMouseEnter={onMouseEnter}
    onMouseLeave={onMouseLeave}
  >
    <ExecImage src={exec.imageUrl} alt={exec.name} layout="fill" priority />
    <Bio>{exec.bio}</Bio>
    <Title  isHovered={isHovered}>{exec.title}</Title>
    <Name>{exec.name}</Name>
  </Bubble>
);

const Home: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [clickedExec, setClickedExec] = useState<{
    name: string;
    title: string;
    bio: string;
    imageUrl: string;
  } | null>(null);

  const handleBubbleClick = (exec: {
    name: string;
    title: string;
    bio: string;
    imageUrl: string;
  }) => {
    setClickedExec(exec);
  };

  const handleBackToBubbles = () => {
    setClickedExec(null); // Reset clicked executive to show all bubbles again
  };

  return (
    <PageContainer>
      {/* Fixed Header */}
      <Header>
        <HeaderTitle>The Wacky Team Comprised of "Good" Volleyball Players</HeaderTitle>
      </Header>

      {/* Show enlarged view if a bubble is clicked */}
      {clickedExec ? (
        <EnlargedView>
          <EnlargedImage src={clickedExec.imageUrl} alt={clickedExec.name} width={300} height={300} />
          <EnlargedName>{clickedExec.name}</EnlargedName>
          <EnlargedTitle>{clickedExec.title}</EnlargedTitle>
          <EnlargedBio>{clickedExec.bio}</EnlargedBio>
          {/* Back to Bubbles Button */}
          <BackButton onClick={handleBackToBubbles}>Back to Team</BackButton>
        </EnlargedView>
      ) : (
        <>
          {/* CEO Section */}
          <CEOContainer>
            <h2>Our CEO</h2>
            <ExecutiveBubble
              exec={ceo}
              isHovered={hoveredIndex === -1}
              onClick={() => handleBubbleClick(ceo)}
              onMouseEnter={() => setHoveredIndex(-1)}
              onMouseLeave={() => setHoveredIndex(null)}
            />
          </CEOContainer>

          {/* Other Executives */}
          <BubbleContainer>
            {executives.map((exec, index) => (
              <ExecutiveBubble
                key={index}
                exec={exec}
                isHovered={hoveredIndex === index}
                onClick={() => handleBubbleClick(exec)}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              />
            ))}
          </BubbleContainer>
        </>
      )}
    </PageContainer>
  );
};

export default Home;