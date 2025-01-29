'use client'
import { Box, Input } from '@mui/material'
import { useState } from 'react'
import React from 'react'
import uploadImage from '@/app/api/uploadImage'

function page() {
  const [file, setFile] = useState<File>()

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!file) return

    try {
      const data = new FormData()
      data.set('file', file)

      const res = await fetch('/api/upload', {
        method: 'POST',
        body: data
      })
      // handle the error
      if (!res.ok) throw new Error(await res.text())
    } catch (e: any) {
      // Handle errors here
      console.error(e)
    }
  }

  return (
    <>
   {/* <div>
      <h1>Upload Product Photo</h1>
      <form onSubmit={}>
        <input type="file" onChange={handleFileChange} />
        {preview && <img src={preview} alt="Preview" style={{ width: '200px', marginTop: '20px' }} />}
        <button type="submit">Upload</button>
      </form>
      {message && <p>{message}</p>}
    </div> */}
     <form onSubmit={onSubmit}>
      <input
        type="file"
        name="file"
        onChange={(e) => setFile(e.target.files?.[0])}
      />
      <input type="submit" value="Upload" />
    </form>
    </>
  )
}

export default page