// // pages/index.tsx

// 'use client';

// import React, { useState } from 'react';
// import styled from 'styled-components';
// import Image from 'next/image';
// import Link from 'next/link';

// const executives = [
//   {
//     name: 'Mark',
//     title: 'CEO',
//     bio: 'All my homies hate Mark',
//     imageUrl: '/images/Mark.jpg'
//   },
//   {
//     name: 'Areeb',
//     title: 'CTO',
//     bio: 'Areeb is a leading expert in poop eating...',
//     imageUrl: '/images/Areeb.jpg'
//   },
//   {
//     name: 'Kevin',
//     title: 'COO',
//     bio: 'Kevin is an industry expert in software development.',
//     imageUrl: '/images/Kevin.jpg'
//   },
//   {
//     name: 'Maya',
//     title: 'UofC Chapter President',
//     bio: 'Just cries 24/7',
//     imageUrl: '/images/Maya.jpg'
//   }
//   ,
//   {
//     name: 'Kevlam',
//     title: 'Outreach Director',
//     bio: 'Got grounded',
//     imageUrl: '/images/Kevlam.jpg'
//   },
//   {
//     name: 'Kanaalaq',
//     title: 'UofC Chapter President',
//     bio: 'Poops a lot',
//     imageUrl: '/images/Kanaalaq.jpg'
//   },
//   // {
//   //   name: 'Ryan',
//   //   title: 'UofC Chapter President',
//   //   bio: 'Looks like Dr. Shawn Murphy',
//   //   imageUrl: '/images/Ryan.png'
//   // },
//   {
//     name: 'Caleb',
//     title: 'UofC Chapter President',
//     bio: 'We love Caleb',
//     imageUrl: '/images/Caleb.jpg'
//   },
//   {
//     name: 'Bullah',
//     title: 'UofC Chapter President',
//     bio: 'Eats people',
//     imageUrl: '/images/Bullah.png'
//   },
//   {
//     name: 'Vova',
//     title: 'UofC Chapter President',
//     bio: 'Cannot hit line',
//     imageUrl: '/images/Vova.jpg'
//   }
//   // Add more executives as needed
// ];

// const PageContainer = styled.main`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
//   padding: 24px;
//   min-height: 100vh;
// `;

// const Header = styled.div`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   width: 100%;
//   max-width: 5xl;
//   font-family: 'Monaco', monospace;
//   font-size: small;
// `;

// const BubbleContainer = styled.div`
//   display: flex;
//   flex-wrap: wrap;
//   justify-content: center;
//   gap: 20px; /* Adjust the gap between bubbles */
//   margin-top: 32px;
// `;

// const Bubble = styled.div<{ isHovered: boolean }>`
//   width: 150px;
//   height: 150px;
//   border-radius: 50%;
//   background-color: #f0f0f0;
//   margin: 10px;
//   box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
//   cursor: pointer;
//   transition: width 0.3s ease, height 0.3s ease, opacity 0.3s ease, transform 0.3s ease;
//   overflow: hidden;
//   opacity: ${({ isHovered }) => (isHovered ? 1 : 0)};
//   transform: ${({ isHovered }) => (isHovered ? 'scale(1.2)' : 'none')};
//   z-index: ${({ isHovered }) => (isHovered ? 1 : 'auto')};
//   &:hover {
//     width: 350px;
//     height: 350px;
//   }
// `;

// const ExecImage = styled(Image)`
//   border-radius: 50%;
//   position: absolute;
//   width: 100%;
//   height: 100%;
//   object-fit: cover;
// `;

// const Title = styled.p`
//   padding-top: 50%;
//   margin: 0;
//   color: black;
//   text-align: center;
//   background-color: rgba(0, 0, 0, 0.5);
//   border-radius: 5px;
// `;

// const Name = styled.h2`
//   padding-top: 50%;
//   margin: 0;
//   color: black;
//   text-align: center;
//   background-color: rgba(0, 0, 0, 0.5);
//   border-radius: 5px;
// `;

// const Bio = styled.p`
//   padding: 10px;
//   display: block;
//   z-index: auto;
//   position: absolute;
//   top: 50%;
//   left: 50%;
//   transform: translate(-50%, -50%);
//   color: white;
//   text-align: center;
//   background-color: rgba(0, 0, 0, 0.5);
//   border-radius: 5px;
//   transition: opacity 0.3s ease;
//   opacity: 0;
  
//   ${Bubble}:hover & {
//     opacity: 1;
//   }
// `;


// // const ExecutiveBubble: React.FC<{
// //   exec: { name: string; title: string; bio: string; imageUrl: string };
// //   isHovered: boolean;
// //   onMouseEnter: () => void;
// //   onMouseLeave: () => void;
// // }> = ({ exec, isHovered, onMouseEnter, onMouseLeave }) => (
// //     <Bubble isHovered={isHovered} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
// //       {isHovered ? (
// //         <>          
// //           <Bio>{exec.bio}</Bio>
// //           <ExecImage src={exec.imageUrl} alt={exec.name} layout="fill" />
// //           <Title>{exec.title}</Title>
// //           <Name>{exec.name}</Name>
// //         </>
// //       ) : (
// //         <>
// //           <ExecImage src={exec.imageUrl} alt={exec.name} layout="fill" />
// //         </>
// //       )}
// //     </Bubble>
// // );

// // const ExecutiveBubble: React.FC<{
// //   exec: { name: string; title: string; bio: string; imageUrl: string };
// //   isHovered: boolean;
// //   }> = ({exec, isHovered}) => (
// //     <Bubble isHovered={isHovered}>
// //         <>
// //           <Bio>{exec.bio}</Bio>
// //           <ExecImage src={exec.imageUrl} alt={exec.name} layout="fill" />
// //           <Title>{exec.title}</Title>
// //           <Name>{exec.name}</Name>
// //         </>
// //     </Bubble>
// //   );

// const ExecutiveBubble: React.FC<{
//   exec: { name: string; title: string; bio: string; imageUrl: string };
//   isHovered: boolean;
//   onMouseEnter: () => void;
//   onMouseLeave: () => void;
// }> = ({ exec, isHovered, onMouseEnter, onMouseLeave }) => (
//   <Bubble
//     isHovered={isHovered}
//     onMouseEnter={onMouseEnter}
//     onMouseLeave={onMouseLeave}
//   >
//     <ExecImage src={exec.imageUrl} alt={exec.name} layout="fill" />
//     {isHovered && (
//       <>
//         <Bio>{exec.bio}</Bio>
//         <Title>{exec.title}</Title>
//         <Name>{exec.name}</Name>
//       </>
//     )}
//   </Bubble>
// );
  
// const Home: React.FC = () => {
//   const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

//   return (
//     <PageContainer>
//       <Header>
//         <h1>The Wacky Team Comprised of "Good" Volleyball Players</h1>
//       </Header>
//       <BubbleContainer>
//         {executives.map((exec, index) => (
//           <ExecutiveBubble
//             key={index}
//             exec={exec}
//             isHovered={hoveredIndex === null || hoveredIndex === index}
//             onMouseEnter={() => setHoveredIndex(index)}
//             onMouseLeave={() => setHoveredIndex(null)}
//           />
//         ))}
//       </BubbleContainer>
//     </PageContainer>
//   );
// };

// // pages/index.tsx
// pages/index.tsx

'use client';

import React, { useState } from 'react';
import styled from 'styled-components';
import Image from 'next/image';

// Separate CEO (Mark) from other executives
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
    name: 'Kevin',
    title: 'COO',
    bio: 'Kevin is an industry expert in software development.',
    imageUrl: '/images/Kevin.jpg'
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

const Title = styled.p`
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

const Bio = styled.p<{ isHovered: boolean }>`
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

const ExecutiveBubble: React.FC<{
  exec: { name: string; title: string; bio: string; imageUrl: string };
  isHovered: boolean;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}> = ({ exec, isHovered, onMouseEnter, onMouseLeave }) => (
  <Bubble
    isHovered={isHovered}
    onMouseEnter={onMouseEnter}
    onMouseLeave={onMouseLeave}
  >
    <ExecImage src={exec.imageUrl} alt={exec.name} layout="fill" priority />
    <Bio isHovered={isHovered}>{exec.bio}</Bio>
    <Title>{exec.title}</Title>
    <Name>{exec.name}</Name>
  </Bubble>
);

// Separate CEO section for Mark
const CEOContainer = styled.div`
  margin-bottom: 50px;
  text-align: center;
`;

const Home: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [hoveredCEO, setHoveredCEO] = useState<boolean>(false);

  return (
    <PageContainer>
      {/* Fixed Header */}
      <Header>
        <HeaderTitle>The Wacky Team Comprised of "Good" Volleyball Players</HeaderTitle>
      </Header>

      {/* CEO Section */}
      <CEOContainer>
        <h2>Our CEO</h2>
        <ExecutiveBubble
          exec={ceo}
          isHovered={hoveredCEO}
          onMouseEnter={() => setHoveredCEO(true)}
          onMouseLeave={() => setHoveredCEO(false)}
        />
      </CEOContainer>

      {/* Other Executives */}
      <BubbleContainer>
        {executives.map((exec, index) => (
          <ExecutiveBubble
            key={index}
            exec={exec}
            isHovered={hoveredIndex === index}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          />
        ))}
      </BubbleContainer>
    </PageContainer>
  );
};

export default Home;
