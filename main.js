document.addEventListener('DOMContentLoaded', () => {
    const key = 'name' // LocalStorage-ban kulcs-érték párokat tárolunk, a 'name' kulcsot fogjuk tárolni a példában
    const input = document.getElementById('input');
    const storedValue = localStorage.getItem(key); // Egy adott kulcs alatt tárolt érték lekérése
    if (storedValue) { // Mindig ellenőrizzük használat előtt a kapott értéket, mert lehet, hogy nem létezik (pl.: felhasználó törölte a böngészési előzményeit)
        input.value = storedValue;
    }
    const saveButton = document.getElementById('save');
    saveButton.addEventListener('click', () => {
        localStorage.setItem(key, input.value); // Egy érték eltárolása egy kulcshoz
    });

    const deleteButton = document.getElementById('delete');
    deleteButton.addEventListener('click', () => {
        localStorage.removeItem(key); // Egy kulcs és a hozzátartozó érték törlése
    });
});