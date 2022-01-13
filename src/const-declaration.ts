type GeoPosition = {
    x: number;
    y: number;
};

const geoPos: GeoPosition = {
    x: 1,
    y: 1
};

// geoPos = { x: 1, y: 1 }; // Error!!

geoPos.x = 123;
geoPos.y = 456;