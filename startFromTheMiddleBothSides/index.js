const rabbitInititalPosition = 24

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

function check(hole, rabbit) {
    if (hole == rabbit) {
        return true
    }
    if (hole != rabbit) {
        return false
    }
}

const initialHoleCheck = holes / 2

let lastHoleCheckRight

let lastHoleCheckLeft

// false: left, true: right
let lastSideChecked = false

// this function checks if the rabbit was found, returns true or false
function checkIfRabbitFound(current) {
    // run the first time
    if (lastHoleCheckRight == undefined && lastHoleCheckLeft == undefined) {
        // set the initial value for both sides
        lastHoleCheckRight = initialHoleCheck + 1
        lastHoleCheckLeft = initialHoleCheck - 1
        // in case the rabbit is in the middle and found in the first try (which is not very likely to happen)
        if (check(initialHoleCheck, current)) {
            return { success: true, last: initialHoleCheck }
        }
    }
    // now gotta either go right or left
    if (lastSideChecked) {
        if (check(lastHoleCheckRight, current)) {
            return { success: true, last: lastHoleCheckRight }
        }
        if (!check(lastHoleCheckRight, current)) {
            // store last number checked
            const lastChecked = lastHoleCheckRight
            if (lastHoleCheckRight < holes) {
                lastHoleCheckRight++
            } else {
                lastHoleCheckRight = undefined
            }
            // change the direction is being looked
            lastSideChecked = !lastSideChecked
            return { success: false, last: lastChecked }
        }
    }

    if (!lastSideChecked) {
        if (check(lastHoleCheckLeft, current)) {
            return { success: true, last: lastHoleCheckLeft }
        }
        if (!check(lastHoleCheckLeft, current)) {
            // store last number checked
            const lastChecked = lastHoleCheckLeft
            if (lastHoleCheckLeft > 0) {
                lastHoleCheckLeft--
            } else {
                lastHoleCheckLeft = undefined
            }
            // change the direction is being looked
            lastSideChecked = !lastSideChecked
            return { success: false, last: lastChecked }
        }
    }

}

let rabbitFound = false

let attempt = 0

while (!rabbitFound) {
    const rabbitPosition = rabbitMovement()
    const isRabbitPositionFound = checkIfRabbitFound(rabbitPosition.current)
    if (isRabbitPositionFound == true) {
        console.log(`Rabbit found in position ${isRabbitPositionFound.last} in the attempt # ${attempt}`)
        rabbitFound = true
    }
    if (isRabbitPositionFound.success == false) {
        console.log(`Rabbit current position in ${rabbitPosition.current}, just checked ${isRabbitPositionFound.last}, attempt #${attempt}`)
        attempt++
        continue
    }
}