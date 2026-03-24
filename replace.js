const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

// Replace exact matches
let map = {
    'https://images.unsplash.com/photo-1542281286-9e0a16bb7366?q=80&w=2070&auto=format&fit=crop': 'https://upload.wikimedia.org/wikipedia/commons/a/a4/Skyline_in_Manila_16.jpg',
    'https://images.unsplash.com/photo-1518002171953-a080ee817e1f?auto=format&fit=crop&q=80&w=1200': 'https://upload.wikimedia.org/wikipedia/commons/1/11/Banaue_Philippines_Batad-Rice-Terraces-02.jpg',
    'https://images.unsplash.com/photo-1518331647614-7a1f04cd34af?auto=format&fit=crop&q=80&w=1200': 'https://upload.wikimedia.org/wikipedia/commons/b/b6/Sari-sari_Store.JPG',
    'https://images.unsplash.com/photo-1579294247291-76aa5008ce90?q=80&w=400&auto=format&fit=crop': 'https://upload.wikimedia.org/wikipedia/commons/c/c5/Philippines_worker.jpg',
    'https://images.unsplash.com/photo-1549495759-b1d5aaff8628?q=80&w=400&auto=format&fit=crop': 'https://upload.wikimedia.org/wikipedia/commons/9/95/Malapascua%2C_Filipino_girl%2C_Filipina%2C_Philippines.jpg',
    'https://images.unsplash.com/photo-1518331539949-eb77ea8c77ee?q=80&w=400&auto=format&fit=crop': 'https://upload.wikimedia.org/wikipedia/commons/4/4d/Gabriel_Daza_April_1921.jpg',
    'https://images.unsplash.com/photo-1518331647614-7a1f04cd34af?q=80&w=2072&auto=format&fit=crop': 'https://upload.wikimedia.org/wikipedia/commons/7/74/Slum_in_Manila_during_flooding_%284046572466%29.jpg',
    'https://images.unsplash.com/photo-1518331326442-990dae8d2e82?q=80&w=2070&auto=format&fit=crop': 'https://upload.wikimedia.org/wikipedia/commons/b/bd/Ayala_Avenue%2C_Makati_Avenue%2C_PSE_%28Makati%3B_01-31-2021%29.jpg',
    'https://images.unsplash.com/photo-1542281286-9e0a16bb7366?q=80&w=2070&auto=format&fit=cover': 'https://upload.wikimedia.org/wikipedia/commons/5/51/Eid%E2%80%99l_Fitr_Bangsamoro_Government_Center.jpg',
    'https://images.unsplash.com/photo-1518002171953-a080ee817e1f?q=80&w=2070&auto=format&fit=crop': 'https://upload.wikimedia.org/wikipedia/commons/c/c1/UP_Diliman_Oblation_Plaza_in_2011.JPG',
    'https://images.unsplash.com/photo-1579294247291-76aa5008ce90?q=80&w=2070&auto=format&fit=crop': 'https://upload.wikimedia.org/wikipedia/commons/9/99/Flag_of_the_Philippines.svg'
};

for (const [key, value] of Object.entries(map)) {
    html = html.split(key).join(value);
}

fs.writeFileSync('index.html', html);
