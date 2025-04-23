const askName = prompt('Ismingizni kiriting:');
const askLetter = prompt('Bironta harf kiritng:');
if (askName.includes(askLetter)) {
    alert(`${askName} ismining ichida ${askLetter} harfi bor`);
} else {
    alert(`${askName} ismida ${askLetter} harfi yo'q`)
}