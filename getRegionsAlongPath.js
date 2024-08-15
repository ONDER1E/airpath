const locations = {
  'ITKO': [7818, 2359],
  'IDCS': [8265, 449],
  'IPPH': [11723, 4120],
  'ILKL': [12371, 4703],
  'SHV': [12567, 4033],
  'IZOL': [15721, 7677],
  'IJAF': [15931, 7217],
  'ISCM': [14414, 6432],
  'ISKP': [12822, 9148],
  'IBTH': [9857, 6507],
  'IGRV': [2529, 6750],
  'TVO': [2649, 7059],
  'IRFD': [8625, 10191],
  'OWO': [8001, 9164],
  'IGAR': [6550, 10737],
  'IBLT': [7319, 9789],
  'IMLR': [6099, 9396],
  'ITRC': [8683, 11728],
  'ITRN': [8683, 11728],
  'ISAU': [2098, 11311],
  'ILAR': [12201, 12040],
  'IPAP': [13759, 12319],
  'IBAR': [13131, 12839],
  'IIAB': [12482, 13235],
  'IHEN': [11581, 13409]
}

const regions = {
  "TOKYO Control - 132.300": [[4689, 0], [6224, 5239], [6473, 4656], [10317, , 4656], [10317, 0]],
  "CHICAGO Center(ROCKFORD) - 124.850": [[5492, 14753], [5496, 11842], [4392, 10713], [4392, 10200], [4392, 7832], [5552, 6843], [10019, 8145], [10373, 8807], [10627, 9296], [10889, 10258], [10955, 10649], [11079, 11391], [9357, 12273], [9357, 14753]],
  "SOTAF Center(BARTHELEMY) - 128.600": [[6473, 4656], [10317, 4656], [11000, 4979], [11465, 6413], [12277, 7137], [12001, 8209], [10373, 8807], [10019, 8145], [5552, 6843], [6224, 5239], [6473, 4656]],
  "PERTH Centre - 135.250": [[10317, 0], [10317, 4656], [11000, 4979], [11468, 6413], [12276, 5977], [13452, 5977], [14708, 5101], [15912, 4529], [17855, 4581]],
  "LAZARUS Center(LARNACA) - 126.300": [[9357, 14753], [9357, 12273], [11079, 11391], [10955, 10649], [13941, 9798], [14541, 10345], [17855, 14753]],
  "NORSOM Center(IZOLIRANI) - 125.640": [[17855, 4581], [15912, 4529], [14708, 5101], [13452, 5977], [12276, 5977], [11468, 6413], [12277, 7137], [12001, 8209], [13013, 7845], [14051, 7941], [13997, 8333], [13701, 8675], [13749, 9615], [14541, 10345], [17855, 14753]],
  "KEFLAVIK Control(GRINDAVIK) - 126.750": [[4689, 0], [6224, 5239], [5552, 6843], [4392, 7832], [4392, 10200], [2364, 9380], [0, 9133]],
  "BRIGHTON Control(SAUTHEMPTONA) - 127.820": [[0, 9133], [2364, 9380], [4392, 10200], [4392, 10713], [5496, 11842], [5492, 14753]],
  "SKOPELOS Centre(ISKP) - 124.200": [[10373, 8807], [12001, 8209], [13013, 7845], [14051, 7941], [13997, 8333], [13701, 8675], [13749, 9615], [13941, 9798], [10955, 10649], [10889, 10258], [10627, 9296], [10373, 8807]],
};

const waypoints = {
  "BULLY": [4067, 2725],
  "FROOT": [3127, 3849],
  "EURAD": [5015, 4173],
  "BOBOS": [2157, 4781],
  "THENR": [3107, 5285],
  "BLANK": [5407, 5049],
  "ACRES": [1472, 5585],
  "YOUTH": [4204, 5867],
  "UWAIS": [715, 6335],
  "EZYDB": [5461, 6533],
  "FRANK": [797, 7483],
  "CELAR": [3465, 7965],
  "THACC": [785, 8759],
  "SHREK": [2123, 8891],
  "SPACE": [3527, 9161],
  "HACKE": [975, 10253],
  "GEORG": [2225, 10629],
  "SEEKS": [3532, 11077],
  "HECKS": [6655, 11741],
  "PACKT": [1722, 12037],
  "ALDER": [4827, 12217],
  "STACK": [3127, 12563],
  "WASTE": [1637, 13297],
  "HOGGS": [4616, 13159],
  "ROBUX": [3980, 14392],
  "NIKON": [7334, 848],
  "SHELL": [5199, 1141],
  "CHILY": [9669, 1107],
  "SHIBA": [6403, 1537],
  "LETSE": [8434, 1921],
  "HONDA": [10097, 1921],
  "ASTRO": [6807, 2591],
  "GULEG": [5838, 3323],
  "PIPER": [7128, 3431],
  "ONDER": [8274, 3739],
  "KNIFE": [9332, 3479],
  "TUDEP": [6717, 4459],
  "ALLRY": [10074, 4459],
  "GERLD": [6691, 4893],
  "RENDR": [7303, 5045],
  "JOOPY": [8733, 4885],
  "PROBE": [7911, 5625],
  "DINER": [9631, 5705],
  "WELSH": [7298, 6523],
  "INDEX": [8116, 7099],
  "GAVIN": [9980, 7413],
  "SILVA": [11644, 7439],
  "OCEEN": [10770, 7990],
  "ENDER": [6026, 7303],
  "KENED": [7292, 7747],
  "SUNST": [5238, 7963],
  "SETHR": [9521, 8351],
  "BUCFA": [6102, 8509],
  "KUNAV": [7303, 8619],
  "SAWPE": [4896, 8817],
  "HAWFA": [7838, 8919],
  "ICTAM": [7028, 9067],
  "QUEEN": [8676, 9541],
  "ATPEV": [9810, 9659],
  "LAVNO": [9347, 9845],
  "BEANS": [4975, 10045],
  "LOGAN": [6013, 10279],
  "MOGTA": [7334, 10703],
  "JAMSI": [10323, 10559],
  "EXMOR": [6195, 11215],
  "GODLU": [9517, 11303],
  "LAZER": [10220, 11603],
  "PEPUL": [7749, 11533],
  "ODOKU": [8451, 12610],
  "EMJAY": [6805, 12608],
  "REAPR": [8807, 13804],
  "TRELN": [7487, 14040],
  "DEATH": [6169, 14354],
  "WOTAN": [14245, 2199],
  "WAGON": [1567, 2681],
  "WELLS": [12848, 3255],
  "SQUID": [14572, 3275],
  "ZESTA": [16067, 3687],
  "TINDR": [10703, 3838],
  "KELLA": [14257, 4372],
  "NOONU": [13511, 4337],
  "STRAX": [10959, 4597],
  "SISTA": [13964, 5295],
  "TALIS": [12998, 5447],
  "UDMUG": [16712, 5089],
  "ROSMO": [15098, 5763],
  "CAMEL": [12322, 6255],
  "LLIME": [17174, 5945],
  "DUNKS": [13380, 6303],
  "MORRD": [16710, 6899],
  "CYRIL": [13126, 7265],
  "ABSRS": [17394, 8203],
  "DOGGO": [14529, 8283],
  "BILLO": [16191, 8869],
  "JUSTY": [14883, 9605],
  "CHAIN": [17388, 10043],
  "CAWZE": [11971, 8341],
  "ANYMS": [11297, 9953],
  "RENTS": [12948, 10527],
  "GRASS": [11807, 11055],
  "JACKI": [14221, 11625],
  "DEBUG": [16179, 11627],
  "BOBUX": [15083, 12509],
  "AQWRT": [11395, 12647],
  "NUBER": [17379, 12735],
  "MUONE": [14897, 13527],
  "JAZZR": [16159, 13631],
  "FORIA": [10074, 13524],
  "ALTRS": [14423, 14563],
  "MASEV": [13219, 14584],
  "FORCE": [12088, 14564],
}

exports.getRegionsAlongPath = function(startLocationName, destinationName) {
  let startLocation = locations[startLocationName]
  let destination = locations[destinationName]
  let path_x1 = startLocation[0];
  let path_y1 = startLocation[1];
  let path_x2 = destination[0];
  let path_y2 = destination[1];
  let getRegionsAlongPathDict = {};
  let startLocationRegion = findStartLocationRegion(startLocation, regions);

  path_m = (path_y2 - path_y1) / (path_x2 - path_x1);
  for (const [key, value] of Object.entries(regions)) {
    for (let i = 0; i < value.length - 1; i++) {
      let x1 = value[i][0];
      let y1 = value[i][1];
      let x2 = value[i + 1][0];
      let y2 = value[i + 1][1];
  
      // Calculate the gradient (m) using the formula: m = (y2 - y1) / (x2 - x1)
      let m = (y2 - y1) / (x2 - x1);

      if (m != path_m) {
        intersect = findIntersection([path_x1, path_y1, path_x2, path_y2], [x1, y1, x2, y2])
        if (intersect != false) {

          let distance = findDistance(intersect, startLocation);

          if (getRegionsAlongPathDict[key] == undefined || getRegionsAlongPathDict[key] > distance) {
            getRegionsAlongPathDict[key] = distance;
          }

        }
      }
    }
  }

  let keys = Object.keys(getRegionsAlongPathDict);

  keys.sort((key1, key2) => getRegionsAlongPathDict[key1] - getRegionsAlongPathDict[key2]);

  let getRegionsAlongPathList = [];

  for (let key of keys) {
    getRegionsAlongPathList.push(key);
  }
  
  let index = getRegionsAlongPathList.indexOf(startLocationRegion);
  if (index !== -1) {
    getRegionsAlongPathList.splice(index, 1);
    getRegionsAlongPathList.unshift(startLocationRegion);
  }

  return getRegionsAlongPathList

}

function findIntersection(line1, line2) {
  let [x1, y1, x2, y2] = line1;
  let [path_x1, path_y1, path_x2, path_y2] = line2;

  // Calculate slopes (m1 and m2) and y-intercepts (b1 and b2)
  let m1 = (y2 - y1) / (x2 - x1);
  let b1 = y1 - m1 * x1;

  let m2 = (path_y2 - path_y1) / (path_x2 - path_x1);
  let b2 = path_y1 - m2 * path_x1;

  // Check if lines are parallel (no intersection or infinite intersection points)
  if (m1 === m2) {
    return null; // Lines are parallel, no intersection or infinite intersection points
  }

  // Calculate intersection point (x, y)
  let x = (b2 - b1) / (m1 - m2);
  let y = m1 * x + b1;

  // Check if intersection point is within the parameter range of both lines
  if (
    x >= Math.min(x1, x2) && x <= Math.max(x1, x2) &&
    x >= Math.min(path_x1, path_x2) && x <= Math.max(path_x1, path_x2) &&
    y >= Math.min(y1, y2) && y <= Math.max(y1, y2) &&
    y >= Math.min(path_y1, path_y2) && y <= Math.max(path_y1, path_y2)
  ) {
    return [x, y];
  } else {
    return false; // Intersection point lies outside the parameter range of either line
  }
}

function findDistance(point1, point2) {
  let [x1, y1] = point1;
  let [x2, y2] = point2;
  
  // Calculate the distance using the Pythagorean theorem
  let distance = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));

  return distance;
}

function isPointInPolygon(point, polygon) {
  let x = point[0];
  let y = point[1];
  let inside = false;

  for (let i = 0, j = polygon.length - 1; i < polygon.length; j = i++) {
    let xi = polygon[i][0];
    let yi = polygon[i][1];
    let xj = polygon[j][0];
    let yj = polygon[j][1];

    let intersect =
      ((yi > y) !== (yj > y)) &&
      (x < ((xj - xi) * (y - yi)) / (yj - yi) + xi);

    if (intersect) {
      inside = !inside;
    }
  }

  return inside;
}

function findStartLocationRegion(coordinates, regions) {
  // Iterate through each region in the regions object
  for (let regionKey in regions) {
    // Check if the coordinates are within the current region
    if (isPointInPolygon(coordinates, regions[regionKey])) {
      return regionKey; // Return the key of the matching region
    }
  }

  // Return null if the coordinates are not within any region
  return null;
}
