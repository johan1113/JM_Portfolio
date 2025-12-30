// Function to load project assets dynamically
function loadProjectAssets(modal) {
    return new Promise(function(resolve, reject) {
        var isLoaded = modal.getAttribute('data-loaded') === 'true';
        
        if (isLoaded) {
            resolve();
            return;
        }

        var loader = modal.querySelector('.project-loader');
        if (loader) {
            loader.style.display = 'flex';
        }

        var images = modal.querySelectorAll('img[data-src]');
        var videos = modal.querySelectorAll('video[data-src]');
        var iframes = modal.querySelectorAll('iframe[data-src]');
        
        var totalAssets = images.length + videos.length + iframes.length;
        var loadedAssets = 0;

        function assetLoaded() {
            loadedAssets++;
            if (loadedAssets === totalAssets) {
                modal.setAttribute('data-loaded', 'true');
                if (loader) {
                    loader.style.display = 'none';
                }
                resolve();
            }
        }

        // Load images
        images.forEach(function(img) {
            var src = img.getAttribute('data-src');
            img.onload = assetLoaded;
            img.onerror = assetLoaded; // Continue even if an image fails
            img.src = src;
            img.removeAttribute('data-src');
        });

        // Load videos
        videos.forEach(function(video) {
            var src = video.getAttribute('data-src');
            var source = document.createElement('source');
            source.src = src;
            source.type = 'video/mp4';
            source.onload = assetLoaded;
            source.onerror = assetLoaded;
            video.appendChild(source);
            video.removeAttribute('data-src');
            video.load();
            // Count as loaded after a short delay for videos
            setTimeout(assetLoaded, 500);
        });

        // Load iframes
        iframes.forEach(function(iframe) {
            var src = iframe.getAttribute('data-src');
            iframe.onload = assetLoaded;
            iframe.onerror = assetLoaded;
            iframe.src = src;
            iframe.removeAttribute('data-src');
        });

        // If no assets to load, resolve immediately
        if (totalAssets === 0) {
            if (loader) {
                loader.style.display = 'none';
            }
            resolve();
        }
    });
}

window.addEventListener('load', function () {
    var btnGameMaster = document.querySelector("#btn-game-master");
    var btnAscent = document.querySelector("#btn-ascent");
    var btnTvShows = document.querySelector("#btn-tv-shows");
    var btnArtechData = document.querySelector("#btn-artech-data");

    // Close modal handler
    function setupModalClose(modal) {
        window.onclick = function (event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        }
    }

    // When the user clicks on Game Master Project
    btnGameMaster.onclick = function (event) {
        event.preventDefault();
        var modal = document.getElementById("modalGameMaster");
        modal.style.display = "block";
        
        loadProjectAssets(modal).then(function() {
            // Play banner video after assets are loaded
            var video = document.querySelector(".gm-video");
            if (video) video.play();
        });

        setupModalClose(modal);
    }

    // When the user clicks on Ascent Project
    btnAscent.onclick = function (event) {
        event.preventDefault();
        var modal = document.getElementById("modalAscent");
        modal.style.display = "block";

        loadProjectAssets(modal).then(function() {
            // Play videos after assets are loaded
            var video08 = document.querySelector(".ascent-08");
            var video11 = document.querySelector(".ascent-11");
            if (video08) video08.play();
            if (video11) video11.play();
        });

        setupModalClose(modal);
    }

    // When the user clicks on Tv Shows Project
    btnTvShows.onclick = function (event) {
        event.preventDefault();
        var modal = document.getElementById("modalTvShows");
        modal.style.display = "block";

        loadProjectAssets(modal).then(function() {
            // TV Shows project loaded
        });

        setupModalClose(modal);
    }

    // When the user clicks on Artech Data Project
    btnArtechData.onclick = function (event) {
        event.preventDefault();
        var modal = document.getElementById("modalArtechData");
        modal.style.display = "block";

        loadProjectAssets(modal).then(function() {
            // Play video after assets are loaded
            var video = document.querySelector(".artech-data-01");
            if (video) video.play();
        });

        setupModalClose(modal);
    }

});