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
