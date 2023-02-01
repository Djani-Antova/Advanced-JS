function areaVol(areaFunc, volFunc, shapesJson) {
    const shapes = JSON.parse(shapesJson);

    const result = [];

    for (const shape of shapes) {
        const area = areaFunc.call(shape);
        const volume = volFunc.call(shape)
        const current = {
            area,
            volume
        };
        result.push(current)
    }
    console.log(result); 
}

function area() {
    return Math.abs(this.x * this.y);
};

function vol() {
    return Math.abs(this.x * this.y * this.z);
};


const s1 = `[
    {"x":"1","y":"2","z":"10"},
    {"x":"7","y":"7","z":"10"},
    {"x":"5","y":"2","z":"10"}
    ]`
const s2 = `[
    {"x":"10","y":"-22","z":"10"},
    {"x":"47","y":"7","z":"-5"},
    {"x":"55","y":"8","z":"0"},
    {"x":"100","y":"100","z":"100"},
    {"x":"55","y":"80","z":"250"}
    ]`

areaVol(area, vol, s1)
areaVol(area, vol, s2)