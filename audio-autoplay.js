document.addEventListener('DOMContentLoaded', function() {
    const audio = document.getElementById('ambientWater');
    
    // Δεν χρειάζεται πλέον το volumeToggle button
    
    if (!audio) {
        return; 
    }
    
    const desiredVolume = 0.7;
    audio.volume = desiredVolume;
    audio.muted = true;
    
    // Αφαιρούμε το audio element από το DOM αμέσως.
    if (audio.parentNode) {
        audio.remove(); 
    }
    
    // Δίνουμε την εντολή play() για να εμφανιστεί το εικονίδιο στην καρτέλα (tab).
    // Ο ήχος θα είναι MUTED.
    audio.play().catch(error => {
        // Ο ήχος μπλοκαρίστηκε, αλλά το audio object παραμένει muted.
        console.warn("Autoplay was blocked. Sound remains Muted. User must click the browser's tab icon to unmute.");
    });
    
    // Αφαιρέσαμε όλο το togglePlayback logic.
});
