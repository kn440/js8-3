document.addEventListener('DOMContentLoaded', function () {
    const apiKey = 'Hzq5O9XG79uReW5d28zcTIkfK8uh8z0FpNFhre6_GRw'; 
    const apiUrl = 'https://api.unsplash.com/photos/random/?client_id=' + apiKey;

    const imageElement = document.getElementById('unsplash-image');
    const photographerNameElement = document.getElementById('photographer-name');
    const likeButton = document.getElementById('like-button');
    const likeCountElement = document.getElementById('like-count');

    
    function fetchRandomImage() {
        fetch(apiUrl)
            .then(response => response.json())
            .then(data => {
                imageElement.src = data.urls.regular;
                photographerNameElement.textContent = data.user.name;
                resetLikeCount(); 
            })
            .catch(error => console.error('Error fetching random image:', error));
    }

  
    function handleLike() {
        let likeCount = parseInt(likeCountElement.textContent);
        likeCount++;
        likeCountElement.textContent = likeCount;
    }

   
    likeButton.addEventListener('click', handleLike);

   
    fetchRandomImage();

    
    function resetLikeCount() {
        likeCountElement.textContent = '0';
    }
});
