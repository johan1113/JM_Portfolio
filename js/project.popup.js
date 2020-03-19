window.addEventListener('load', function () {
    var btnGameMaster = document.querySelector("#btn-game-master");
    var btnAscent = document.querySelector("#btn-ascent");
    var btnTvShows = document.querySelector("#btn-tv-shows");
    var btnArtechData = document.querySelector("#btn-artech-data");


    // When the user clicks on Game Master Project
    btnGameMaster.onclick = function (event) {

        event.preventDefault();

        // Get the modal
        var modal = document.getElementById("modalGameMaster");

        //open the modal
        modal.style.display = "block";

        // Play banner video
        document.querySelector(".gm-video").play();

        // When the user clicks anywhere outside of the modal, close it
        window.onclick = function (event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        }
    }

    // When the user clicks on Ascent Project
    btnAscent.onclick = function (event) {

        event.preventDefault();

        // Get the modal
        var modal = document.getElementById("modalAscent");

        //open the modal
        modal.style.display = "block";

        // Play videos
        document.querySelector(".ascent-08").play();
        document.querySelector(".ascent-11").play();

        // When the user clicks anywhere outside of the modal, close it
        window.onclick = function (event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        }
    }

    // When the user clicks on Tv Shows Project
    btnTvShows.onclick = function (event) {

        event.preventDefault();

        // Get the modal
        var modal = document.getElementById("modalTvShows");

        //open the modal
        modal.style.display = "block";

        // When the user clicks anywhere outside of the modal, close it
        window.onclick = function (event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        }
    }

    // When the user clicks on Artech Data Project
    btnArtechData.onclick = function (event) {

        

        event.preventDefault();

        // Get the modal
        var modal = document.getElementById("modalArtechData");

        //open the modal
        modal.style.display = "block";

        // Play videos
        document.querySelector(".artech-data-01").play();

        // When the user clicks anywhere outside of the modal, close it
        window.onclick = function (event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        }
    }

});