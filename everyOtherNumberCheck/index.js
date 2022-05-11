// TODO: add a random initial number
// https://stackoverflow.com/questions/1527803/generating-random-whole-numbers-in-javascript-in-a-specific-range
const rabbitInititalPosition = 73

const holes = 100

let rabbitCurrentPosition = rabbitInititalPosition

// this function is to make the rabbit jump between the holes, deciding if it goes right or left
function rabbitMovement() {
    const rabbitPreviousPosition = rabbitCurrentPosition
    // 50% of true or false, used to determine if rabbit moves right or left  
    const rightOrLeft = Math.random() < 0.5
    if (rightOrLeft && rabbitCurrentPosition !== holes) {
        rabbitCurrentPosition = rabbitCurrentPosition + 1
    } else {
        rabbitCurrentPosition = rabbitCurrentPosition - 1
    }
    if (!rightOrLeft && rabbitCurrentPosition > 0) {
        rabbitCurrentPosition = rabbitCurrentPosition - 1
    } else {
        rabbitCurrentPosition = rabbitCurrentPosition + 1
    }
    return { previous: rabbitPreviousPosition, current: rabbitCurrentPosition }
}

// TODO: make the initial number random too
const initialHoleCheck = 0

let lastHoleCheck = initialHoleCheck

// this function checks if the rabbit was found, returns true or false
function checkIfRabbitFound(current) {
    // to limit the amount of holes checked
    if (lastHoleCheck < holes) {
        // case rabbit is found    
        if (current == lastHoleCheck) {
            return { success: true, last: lastHoleCheck }
        }
        // case rabbit is not found    
        if (current !== lastHoleCheck) {
            // jumps the number in between
            lastHoleCheck = lastHoleCheck + 2
            return { success: false, last: lastHoleCheck }
        }
    } else {
        lastHoleCheck = initialHoleCheck + 1
        return { success: false, last: lastHoleCheck }
    }
}

let rabbitFound = false

let attempt = 0

while (!rabbitFound) {
    const rabbitPositions = rabbitMovement()
    const isRabbitPositionFound = checkIfRabbitFound(rabbitPositions.current)
    if (isRabbitPositionFound.success == true) {
        console.log(`Rabbit found in position ${isRabbitPositionFound.last} in the attempt #${attempt}`)
        rabbitFound = true
    }
    if (isRabbitPositionFound.success == false) {
        console.log(`Rabbit current position in ${rabbitPositions.current}, just checked ${isRabbitPositionFound.last}, attempt #${attempt}`)
        attempt++
        continue
    }
}