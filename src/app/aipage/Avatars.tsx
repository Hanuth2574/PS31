import AvatarCircles from '@/components/AvatarCircle';
import React from 'react'

export default function Avatars() {
  const avatarUrls = [
    "https://randomuser.me/api/portraits/men/1.jpg",
    "https://randomuser.me/api/portraits/women/2.jpg",
    "https://randomuser.me/api/portraits/men/3.jpg",
    "https://randomuser.me/api/portraits/women/4.jpg",
    "https://randomuser.me/api/portraits/men/5.jpg",
  ];
  
  // Render AvatarCircles component
  return (
    <>
      <AvatarCircles numPeople={10} avatarUrls={avatarUrls} />;

    </>
  )
}
