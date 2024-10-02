// playmorris-frontend/src/services/downloadService.js

const downloadFile = async (fileUrl, fileName) => {
    const response = await fetch(fileUrl);
    if (!response.ok) {
      throw new Error('Network response was not ok.');
    }
    const blob = await response.blob();
    const downloadUrl = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = downloadUrl;
    link.setAttribute('download', fileName);
    document.body.appendChild(link);
    link.click();
    link.parentNode.removeChild(link);
    window.URL.revokeObjectURL(downloadUrl);
  };
  
  export default downloadFile;
  