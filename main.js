 const mapping = {
    'a': 'Mawik', 'b': 'miw', 'c': 'miawjh', 'd': 'miawk', 'e': 'muaw',
    'f': 'muwi', 'g': 'myaw', 'h': 'miak', 'i': 'miewh', 'j': 'miwhs',
    'k': 'iaww', 'l': 'yuw', 'm': 'miaaaaw', 'n': 'mawb', 'o': 'miii',
    'p': 'miaw', 'q': 'miaw miaw miaw', 'r': 'Miawhe', 's': 'maw',
    't': 'aong', 'u': 'haheng', 'v': 'aau', 'w': 'bu bu n g aga bu',
    'x': 'mhiaw', 'y': 'mawmaw', 'z': 'shhhhhh'
};

const reverseMapping = {
    'Mawik': 'a', 'miw': 'b', 'miawjh': 'c', 'miawk': 'd', 'muaw': 'e',
    'muwi': 'f', 'myaw': 'g', 'miak': 'h', 'miewh': 'i', 'miwhs': 'j',
    'iaww': 'k', 'yuw': 'l', 'miaaaaw': 'm', 'mawb': 'n', 'miii': 'o',
    'miaw': 'p', 'miaw miaw miaw': 'q', 'Miawhe': 'r', 'maw': 's',
    'aong': 't', 'haheng': 'u', 'aau': 'v', 'bu bu n g aga bu': 'w',
    'mhiaw': 'x', 'mawmaw': 'y', 'shhhhhh': 'z'
};

function translateToMiaw() {
    const text = document.getElementById('textToTranslate').value.toLowerCase();
    if (!text.trim()) {
        document.getElementById('miawResult').textContent = 'Teks tidak boleh kosong.';
        return;
    }
    const result = text.split('').map(char => mapping[char] || char).join(' ');
    document.getElementById('miawResult').textContent = result;
}

function translateToAbjad() {
    const text = document.getElementById('miawText').value;
    if (!text.trim()) {
        document.getElementById('abjadResult').textContent = 'Teks tidak boleh kosong.';
        return;
    }
    const words = text.split(' ');
    const result = words.map(word => reverseMapping[word] || '?').join('');
    document.getElementById('abjadResult').textContent = result;
}
