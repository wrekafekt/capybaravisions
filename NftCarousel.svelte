<script>
  import { onMount } from 'svelte';
  let images = ['peek.jpg', 'peek.jpg', 'peek.jpg']; // replace with NFT images
  let currentImageIndex = 0;
  let intervalId;

  const cycleImages = () => {
    currentImageIndex = (currentImageIndex + 1) % images.length;
  };

  onMount(() => {
    intervalId = setInterval(cycleImages, 3000); // Change image every 3 seconds
    return () => {
      clearInterval(intervalId);
    };
  });
</script>

<div class="carousel">
  <img src={images[currentImageIndex]} alt="Current NFT" />
</div>
