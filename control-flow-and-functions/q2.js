// Q2 Day Name (Switch) with fall-through
function getDayName(num) {
  switch(num) {
    case 0: return 'Sunday';
    case 1: return 'Monday';
    case 2: return 'Tuesday';
    case 3: // intentional fall-through
    case 4:
      return num === 3 ? 'Wednesday' : 'Thursday';
    case 5: return 'Friday';
    case 6: return 'Saturday';
    default: return 'Invalid';
  }
}

console.log(getDayName(3))