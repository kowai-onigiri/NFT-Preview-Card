const nft = document.getElementById('nft');
const nftView = document.getElementById('nftView');

nftView.addEventListener('mouseover', function() {
    nft.style.opacity='50%';
    nftView.style.opacity='100%';
});

nftView.addEventListener('mouseout', function() {
    nft.style.opacity='100%';
    nftView.style.opacity='0%';
});

nftView.addEventListener('touchstart', function() {
    nft.style.opacity='50%';
    nftView.style.opacity='100%';
});

nftView.addEventListener('touchend', function() {
    nft.style.opacity='100%';
    nftView.style.opacity='0%';
});