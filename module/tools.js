import { ARM5E } from "./metadata.js";

import { DEFAULT_WOUND, SIZES_AND_WOUNDS } from './constants/wounds.js'


export function log(force, ...args) {
  try {
    const isDebugging = game.modules.get("_dev-mode")?.api?.getPackageDebugValue(ARM5E.MODULE_ID);

    if (force || isDebugging) {
      console.log(ARM5E.MODULE_ID, "|", ...args);
    }
  } catch (e) {
    console.log(e);
  }
}

export function error(force, ...args) {
  try {
    const isDebugging = game.modules.get("_dev-mode")?.api?.getPackageDebugValue(ARM5E.MODULE_ID);

    if (force || isDebugging) {
      console.error(ARM5E.MODULE_ID, "|", ...args);
    }
  } catch (e) {
    console.error(e);
  }
}

export function compareBaseEffects(e1, e2) {
  if (e1.data.data.form.value < e2.data.data.form.value) {
    return -1;
  } else if (e1.data.data.form.value > e2.data.data.form.value) {
    return 1;
  } else {
    if (e1.data.data.technique.value < e2.data.data.technique.value) {
      return -1;
    } else if (e1.data.data.technique.value > e2.data.data.technique.value) {
      return 1;
    } else {
      if (e1.data.data.baseLevel < e2.data.data.baseLevel) {
        return -1;
      } else if (e1.data.data.baseLevel > e2.data.data.baseLevel) {
        return 1;
      } else {
        return e1.data.name.localeCompare(e2.data.name);
      }
    }
  }
}

export function compareMagicalEffects(e1, e2) {
  return compareMagicalEffectsData(e1.data, e2.data);
}

export function compareMagicalEffectsData(e1, e2) {
  if (e1.data.form.value < e2.data.form.value) {
    return -1;
  } else if (e1.data.form.value > e2.data.form.value) {
    return 1;
  } else {
    if (e1.data.technique.value < e2.data.technique.value) {
      return -1;
    } else if (e1.data.technique.value > e2.data.technique.value) {
      return 1;
    } else {
      if (e1.data.level < e2.data.level) {
        return -1;
      } else if (e1.data.level > e2.data.level) {
        return 1;
      } else {
        return e1.name.localeCompare(e2.name);
      }
    }
  }
}

export function compareSpells(e1, e2) {
  return compareSpellsData(e1.data, e2.data);
}
export function compareSpellsData(e1, e2) {
  if (e1.data.form.value < e2.data.form.value) {
    return -1;
  } else if (e1.data.form.value > e2.data.form.value) {
    return 1;
  } else {
    if (e1.data.technique.value < e2.data.technique.value) {
      return -1;
    } else if (e1.data.technique.value > e2.data.technique.value) {
      return 1;
    } else {
      if (e1.data.level < e2.data.level) {
        return -1;
      } else if (e1.data.level > e2.data.level) {
        return 1;
      } else {
        return e1.name.localeCompare(e2.name);
      }
    }
  }
}

export function compareLabTexts(e1, e2) {
  return compareLabTextsData(e1.data, e2.data);
}

export function compareLabTextsData(e1, e2) {
  if (e1.data.type < e2.data.type) {
    return -1;
  } else if (e1.data.type > e2.data.type) {
    return 1;
  } else {
    return compareMagicalEffectsData(e1, e2);
  }
}

export function getLabUpkeepCost(upkeep) {
  if (upkeep < -5) return 0;
  switch (upkeep) {
    case -5:
      return 1;
    case -4:
      return 2;
    case -3:
      return 3;
    case -2:
      return 5;
    case -1:
      return 7;
    case 0:
      return 10;
    case 1:
      return 15;
    default:
      return upkeep * (upkeep + 1) * 5;
  }
}

export function getLastMessageByHeader(game, key) {
  const searchString = game.i18n.localize(key).toLowerCase() + "</h2>";
  const messages = game.messages.filter((msg) => {
    const flavor = (msg?.data?.flavor || "").toLowerCase();
    return flavor.indexOf(searchString) > -1;
  });
  if (messages.length) return messages.pop();
  return false;
}

export function calculateWound(damage, size) {

    if(damage <= 0) {
        return '';
    }
  const typeOfWoundsBySize = getWoundType(size);
  //SIZES_AND_WOUNDS[size.toString()];
    if(typeOfWoundsBySize === undefined) return false;
    const wounds = Object.keys(typeOfWoundsBySize);

    let typeOfWound = DEFAULT_WOUND;
    wounds.forEach((wound) => {
        if (Number(wound) <= damage) {
            typeOfWound = typeOfWoundsBySize[wound];
        }
    })
    return typeOfWound;
}


export function getDataset(obj) {
  if(obj.preventDefault) {
    obj.preventDefault();
    const element = obj.currentTarget;
    return element.dataset;
  }
  return obj
}

// No limitation to size
function getWoundType(size) {
  if (size <= -4) {
    return {
      1: "light",
      2: "medium",
      3: "heavy",
      4: "incap",
      5: "dead"
    };
  }
  let increment = size + 5;
  const result = { 1: "light" };

  result[1 + increment] = "medium";
  result[1 + 2 * increment] = "heavy";
  result[1 + 3 * increment] = "incap";
  result[1 + 4 * increment] = "dead";

  console.log(result);
}
