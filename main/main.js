module.exports = function main(inputs) {
    // write your code here...
    let distanceCost = 6
    if(inputs.distance > 2 && inputs.distance <= 8)
        distanceCost = distanceCost + 0.8 * (inputs.distance - 2)
    if(inputs.distance > 8)
        distanceCost = distanceCost + 0.8 * (8 - 2) + 0.8 * (1 + 0.5) * (inputs.distance - 8)
    let sum = distanceCost + 0.25 * inputs.parkTime
    return Math.round(sum)
};
