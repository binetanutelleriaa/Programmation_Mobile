window.onload = function () {
    ajoutTache.onclick =  function () {
        let nouvelleTache = document.createElement('li');
        nouvelleTache.innerText = tache.value;

        $(nouvelleTache).on('swiperight', gererSwipeRight);
        $(nouvelleTache).on('swipeleft', gererSwipeLeft);

        $(listeTache).append(nouvelleTache);

        tache.select();
        tache.focus();
        $(listeTache).listview('refresh');
    };

}

function gererSwipeRight(){
    $(this).remove();
}


function gererSwipeLeft(){
    tacheTerminee = $(this).hide();
    $(listeTacheTerminees).append(tacheTerminee.show());

}




