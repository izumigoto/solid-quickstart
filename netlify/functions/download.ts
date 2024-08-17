import type { Handler } from '@netlify/functions';

const handler: Handler = async (event) => {
  const filePath = './public/weshi-poc.zip'; // Path relative to the project root
  
  return {
    statusCode: 200,
    headers: {
      'Content-Type': 'application/zip',
      'Content-Disposition': 'attachment; filename="weshi-poc.zip"',
    },
    body: require('fs').readFileSync(filePath).toString('base64'),
    isBase64Encoded: true,
  };
};

export { handler };
