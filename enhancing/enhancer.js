module.exports = {
  succeed,
  fail,
  repair,
  get,
};

function succeed(item) {
  if (item.enhancement < 20) {
    const enhanced = item.enhancement + 1;
    return { ...item, enhancement: enhanced };
  } else {
    return { ...item };
  }
}

function fail(item) {
  // If the item's enhancement is less than 15, the durability of the item is decreased by 5.
  // If the item's enhancement is 15 or more, the durability of the item is decreased by 10.
  // If the item's enhancement level is greater than 16, the enhancement level decreases by 1 (17 goes down to 16, 18 goes down to 17).

  let dmg5 = item.durability - 5;
  let dmg10 = item.durability - 10;
  let diminished = item.enhancement - 1;
  
  if (dmg5 < 0 || dmg10 < 0) {
    dmg5 = 0;
    dmg10 = 0;
  }
  
  if (item.enhancement < 15) {
    return { ...item, durability: dmg5 };
  } 
  else if (item.enhancement > 16) {
    return { ...item, durability: dmg10, enhancement: diminished };
  } 
  else {
    return { ...item, durability: dmg10 };
  }
}

function repair(item) {
  if (item.durability < 100) {
    return { ...item, durability: 100 };
  } else {
    return { ...item };
  }
}

// ----------------- stretch -----------------
function get(item) {
  return { ...item };
}
