import { createEffect } from 'solid-js';

const DownloadPage = () => {
  createEffect(() => {
    // Create a link element
    const link = document.createElement('a');
    link.href = '/weshi-poc.zip'; // Path to the file in the public directory
    link.download = 'weshi-poc.zip'; // Filename for the download
    
    // Append the link to the document body and click it
    document.body.appendChild(link);
    link.click();
    
    // Remove the link from the document body
    document.body.removeChild(link);
  });

  return (
    <div>
      <p>Your download should start automatically. If it doesn't, <a href="/weshi-poc.zip">click here</a>.</p>
    </div>
  );
};

export default DownloadPage;
