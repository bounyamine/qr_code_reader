import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [file, setFile] = useState(null);
  const [qrData, setQrData] = useState('');
  const [isScanning, setIsScanning] = useState(false);

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
      scanQRCode(selectedFile);
    }
  };

  const scanQRCode = async (file) => {
    setIsScanning(true);
    const formData = new FormData();
    formData.append('file', file);
    try {
      const response = await fetch('http://api.qrserver.com/v1/read-qr-code/', {
        method: 'POST',
        body: formData,
      });
      const result = await response.json();
      setQrData(result[0].symbol[0].data || 'QR Code invalide');
    } catch (error) {
      setQrData('Erreur de scan du QR Code.');
    } finally {
      setIsScanning(false);
    }
  };

  const handleCopyText = () => {
    navigator.clipboard.writeText(qrData);
    alert('Texte copié dans le presse-papier !');
  };

  return (
    <div className="app-container">
      <div className="header">
        <h1>📱 QR Code Reader</h1>
        <p>Scannez facilement vos QR Codes</p>
      </div>

      <div className="upload-section">
        <div className="upload-box" onClick={() => document.getElementById('fileInput').click()}>
          <input type="file" id="fileInput" hidden onChange={handleFileChange} />
          {file ? (
            <img src={URL.createObjectURL(file)} alt="QR Code" className="preview-image" />
          ) : (
            <div className="upload-instructions">
              <i className="fa-solid fa-cloud-arrow-up"></i>
              <p>Importez un QR Code</p>
            </div>
          )}
        </div>
      </div>

      {isScanning && (
        <div className="loading">
          <i className="fa-solid fa-spinner fa-spin"></i> Scanning QR Code...
        </div>
      )}

      {qrData && (
        <div className="result-section">
          <textarea value={qrData} readOnly spellCheck="false"></textarea>
          <div className="action-buttons">
            <button className="copy-btn" onClick={handleCopyText}>
              Copier le texte
            </button>
          </div>
        </div>
      )}

      <footer>
        <p>&copy; QR Code Reader par <a href="https://github.com/bounyamine">Bounyamine</a></p>
      </footer>
    </div>
  );
};

export default App;
