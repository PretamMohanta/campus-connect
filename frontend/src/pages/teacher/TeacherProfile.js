import React from 'react'
import styled from 'styled-components';
import { Card, CardContent, Typography } from '@mui/material';
import { useSelector } from 'react-redux';

const TeacherProfile = () => {
  const { currentUser, response, error } = useSelector((state) => state.user);

  if (response) { console.log(response) }
  else if (error) { console.log(error) }

  const teachSclass = currentUser.teachSclass
  const teachSubject = currentUser.teachSubject
  const teachSchool = currentUser.school

  return (
    <>
      <ProfileCard>
        <ProfileCardContent>
          <ProfileText>Teacher Name: {currentUser.name}</ProfileText>
          <ProfileText>Email Id: {currentUser.email}</ProfileText>
          <ProfileText>Department: {teachSclass.sclassName}</ProfileText>
          <ProfileText>Subject Name: {teachSubject.subName}</ProfileText>
          <ProfileText>Collage Name: {teachSchool.schoolName}</ProfileText>
        </ProfileCardContent>
      </ProfileCard>
    </>
  )
}

export default TeacherProfile

const ProfileCard = styled(Card)`
  margin: 20px;
  width: 350px;
  border-radius: 10px;
`;

const ProfileCardContent = styled(CardContent)`
  display: flex;
  flex-direction: column;
  ${'' /* align-items: center; */}
`;

const ProfileText = styled(Typography)`
  margin: 10px;
`;