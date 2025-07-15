import { v2 as cloudinary } from 'cloudinary';
import formidable from 'formidable-serverless';

cloudinary.config({
  cloud_name: 'deo8jzwje',
  api_key: '877364759337193',
  api_secret: 'q_qI4_8z5AeSYm4GwqOfuSdTnCI'
});

export const config = {
  api: {
    bodyParser: false
  }
};

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const form = new formidable.IncomingForm();
    form.parse(req, async (err, fields, files) => {
      if (err) return res.status(500).json({ error: 'Erro no upload.' });
      const file = files.image;
      const result = await cloudinary.uploader.upload(file.filepath);
      return res.status(200).json(result);
    });
  } else {
    res.status(405).end();
  }
}
