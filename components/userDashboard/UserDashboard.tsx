'use client'
import { Box } from '@mui/system';
import React from 'react'
import { useEffect, useState } from 'react';

function UserDashboard({data}) {
  const [newData, setNewData] = useState(data)
  useEffect(() => {
    setNewData(data);
  console.log(newData);

  }, [newData])
  return (
    <>
    <Box>
      {newData.FirstName}
    </Box>
    </>
  )
}

export default UserDashboard