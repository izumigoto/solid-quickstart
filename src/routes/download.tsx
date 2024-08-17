import { createEffect } from 'solid-js';

const DownloadPage = () => {
  createEffect(() => {
    // Create a link element
    const link = document.createElement('a');
    link.href = '/weshi-poc.zip'; // Path to the file in the public directory
    link.download = 'weshi-poc.zip'; // Desired filename for the downloaded file
    
    // Append the link to the document body and click it
    document.body.appendChild(link);
    link.click();
    
    // Remove the link from the document body
    document.body.removeChild(link);
    
    // Optionally, you can redirect to another page or just close the page
    window.location.href = '/'; // Redirect to home or another page if needed
  });

  return null; // Return null to render nothing on the page
};

export default DownloadPage;
