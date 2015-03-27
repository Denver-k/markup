<script type="text/javascript">
	jQuery.PictureSlides.set({
		// Switches to decide what features to use
		useFadingIn : true,
		useFadingOut : true,
		useFadeWhenNotSlideshow : true,
		useFadeForSlideshow : true,
		useDimBackgroundForSlideshow : true,
		loopSlideshow : false,
		usePreloading : true,
		useAltAsTooltip : true,
		useTextAsTooltip : false,

		// Fading settings
		fadeTime : 500, // Milliseconds	
		timeForSlideInSlideshow : 2000, // Milliseconds

		// At page load
		startIndex : 1,	
		startSlideShowFromBeginning : true,
		startSlideshowAtLoad : false,
		dimBackgroundAtLoad : false,

		// Large images to use and thumbnail settings
		images : [
			{
				image : "images/1.jpg", 
				alt : "Picture 1",
				text : "This is picture 1"
			},
			{                                  

				image : "images/2.jpg", 
				alt : "Picture 2",
				text : "This is picture 2",
				url : "http://robertnyman.com"
			},
			{                                  

				image : "images/3.jpg", 
				alt : "Picture 3",
				text : "This is picture 3",
				url : "http://456bereastreet.com"
			} // NOTE! No comma after the last object
		],
		thumbnailActivationEvent : "click",

		// Classes of HTML elements to use
		mainImageClass : "picture-slides-image", // Mandatory
		imageLinkClass : "picture-slides-image-link",
		fadeContainerClass : "picture-slides-fade-container",
		imageTextContainerClass : "picture-slides-image-text",
		previousLinkClass : "picture-slides-previous-image",
		nextLinkClass : "picture-slides-next-image",
		imageCounterClass : "picture-slides-image-counter",
		startSlideShowClass : "picture-slides-start-slideshow",
		stopSlideShowClass : "picture-slides-stop-slideshow",
		thumbnailContainerClass: "picture-slides-thumbnails",
		dimBackgroundOverlayClass : "picture-slides-dim-overlay"
	});
</script>