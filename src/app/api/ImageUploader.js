import axios from 'axios';
import path from 'path';

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.status(405).json({ message: 'Method Not Allowed' });
    return;
  }

  try {
    const formData = await axios({
      method: 'post',
      url: req.url,
      data: req.body,
      headers: req.headers,
      maxContentLength: Infinity,
      maxBodyLength: Infinity,
    });

    const file = formData.data.file;
    const fileName = `${Date.now()}-${file.originalFilename}`;
    const filePath = path.join(process.cwd(), 'public', 'images', fileName);

    await fs.promises.writeFile(filePath, file.buffer);

    res.status(200).json({ fileName });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
}

export async function handleUpload  () {
  if (!file) return;

  const formData = new FormData();
  formData.append('file', file);

  try {
    const response = await axios.post('/api/upload', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });

    if (response.status === 200) {
      const { fileName } = response.data;
      const fileUrl = `/images/${fileName}`;
      console.log('File saved successfully:', fileUrl);
    } else {
      console.error('Error uploading file');
    }
  } catch (error) {
    console.error('Error:', error);
  }
};