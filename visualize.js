// Initialize the map
const map = L.map('map').setView([75, 100], 4); // Adjust the view and zoom level as needed

// Load a basic tile layer from OpenStreetMap
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 18,
}).addTo(map);

// Locations (Points)
const locations = {
    'ITKO': [92, 127],
    'IDCS': [97, 146],
    'IPPH': [130, 114],
    'ILKL': [139, 107],
    'IZOL': [174, 76],
    'IJAF': [176, 83],
    'ISCM': [161, 89],
    'ISKP': [143, 62],
    'IBTH': [110, 88],
    'IGRV': [31, 83],
    'IRFD': [80, 49],
    'OWO': [81, 44],
    'IGAR': [78, 56],
    'IBLT': [84, 55],
    'IMLR': [87, 50],
    'ITRC': [88, 39],
    'ISAU': [25, 39],
    'ILAR': [136, 30],
    'IPAP': [152, 28],
    'IBAR': [146, 20],
    'IIAB': [135, 19],
    'IHEN': [129, 17]
};

// Add markers for locations
for (const [name, coord] of Object.entries(locations)) {
    L.marker(coord).addTo(map).bindPopup(name);
}

// Regions (Polygons)
const regions = {
    "Tokyo Control - 132.300": [[54, 151], [69, 103], [74, 107], [115, 107], [116, 152]],
    "CHICAGO Center - 124.850": [[61, 0], [61, 9], [61, 27], [48, 41], [48, 74], [61, 77], [61, 85], [74, 86], [111, 70], [123, 41]],
    "SOTAF Center - 128.600": [[74, 107], [115, 107], [123, 106], [129, 90], [138, 82], [135, 71], [115, 62], [111, 70], [74, 86], [61, 85], [69, 103], [74, 107]],
    "PERTH Centre - 135.250": [[116, 152], [115, 107], [123, 106], [129, 90], [139, 95], [151, 95], [162, 100], [166, 106], [179, 111], [200, 111]],
    "LAZARUS Center - 126.300": [[88, 0], [88, 27], [106, 30], [110, 38], [123, 41], [121, 46], [155, 54], [165, 45], [200, 37]],
    "NORSOM Center - 125.640": [[200, 37], [165, 45], [155, 54], [154, 65], [158, 73], [146, 74], [135, 71], [138, 82], [129, 90], [139, 95], [151, 95], [162, 100], [166, 106], [179, 111], [200, 111]],
    "KEFLAVIK Control - 126.750": [[54, 151], [69, 103], [61, 85], [61, 77], [48, 74], [48, 47], [26, 56], [0, 59]],
    "BRIGHTON Control - 127.820": [[0, 59], [26, 56], [48, 47], [48, 41], [61, 27], [61, 9], [2, 9]],
    "ISKP - 124.2": [[115, 63], [135, 71], [146, 74], [158, 73], [154, 65], [155, 54], [121, 46], [115, 63]],
};

// Add polygons for regions
for (const [name, coords] of Object.entries(regions)) {
    L.polygon(coords, { color: 'blue', weight: 2 }).addTo(map).bindPopup(name);
}
