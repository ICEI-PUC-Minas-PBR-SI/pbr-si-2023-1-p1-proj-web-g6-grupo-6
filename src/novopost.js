window.addEventListener('DOMContentLoaded', () => {
    const uploadForm = document.getElementById('upload-form');
    const imageInput = document.getElementById('image-input');
    const imagePreview = document.getElementById('image-preview');
    const imageFeed = document.getElementById('image-feed');
  
    uploadForm.addEventListener('submit', (e) => {
      e.preventDefault();
  
      const file = imageInput.files[0];
      if (file) {
        const reader = new FileReader();
  
        reader.addEventListener('load', () => {
          const imageUrl = reader.result;
          const imageElement = document.createElement('img');
          imageElement.src = imageUrl;
          imageElement.classList.add('uploaded-image');
          imageFeed.appendChild(imageElement);
  
          // Limpar o input de upload de imagem
          imageInput.value = '';
          imagePreview.style.display = 'none';
        });
  
        reader.readAsDataURL(file);
      }
    });
  
    imageInput.addEventListener('change', () => {
      const file = imageInput.files[0];
      if (file) {
        const reader = new FileReader();
  
        reader.addEventListener('load', () => {
          imagePreview.src = reader.result;
          imagePreview.style.display = 'block';
        });
  
        reader.readAsDataURL(file);
      }
    });
  });
  