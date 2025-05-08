/**
You are given a list of objects, where each object represents an item with several categorical attributes (e.g., shade, material, etc.). Your task is to:

Determine the most common value (the "default") for each property across all items.

For each item, remove properties that match their default value.

Return the updated list of items along with the map of default property values.

function normalize(items: Array<Record<string, string>>): {
  items: Array<Record<string, string>>,
  defaultPrefs: Record<string, string>
}

Input
items – an array of length n (1 ≤ n ≤ 10⁴), where each element is an object with at most k properties (1 ≤ k ≤ 50).

Each property is a string and maps to a string value.

All keys and values consist of only lowercase English letters and underscores, and are no longer than 50 characters.

Output
An object with two properties:

items: the updated array where properties equal to their most common value are removed.

defaultPrefs: an object where each key is a property and the value is its most frequent value across all input items.

Example
normalize([
  { shade: "light", material: "plastic" },
  { shade: "light", material: "emax" },
  { shade: "medium", material: "plastic" }
])

Output:

{
  items: [
    {}, // all values are defaults
    { material: "emax" }, // shade is default
    { shade: "medium" } // material is default
  ],
  defaultPrefs: {
    shade: "light",
    material: "plastic"
  }
}
Notes
If two or more values have the same maximum frequency for a property, you may choose any one of them as the default.

Properties not shared across all objects are still counted individually for defaults.
*/

const normalize = (items) => {
    const countMap = {};
    const defaultPrefs = {};
    const defaultPrefsCount = {};
  
    for (let i = 0; i < items.length; i++) {
      const prefs = Object.entries(items[i]);
      for (let j = 0; j < prefs.length; j++) {
        const prop = prefs[j][0];
        const value = prefs[j][1];
        if (!countMap.hasOwnProperty(prop)) {
          countMap[prop] = {};
        }
  
        if (countMap[prop].hasOwnProperty(value)) {
          countMap[prop][value]++;
        } else {
          countMap[prop][value] = 1;
        }
  
        if (defaultPrefs.hasOwnProperty(prop)) {
          if (countMap[prop][value] > defaultPrefsCount[prop]) {
            defaultPrefs[prop] = value;
            defaultPrefsCount[prop] = countMap[prop][value];
          }
        } else {
          defaultPrefs[prop] = value;
          defaultPrefsCount[prop] = 1;
        }
      }
    }
  
    const itemsNew = [];
    const defaultEntries = Object.entries(defaultPrefs);
    for (let i = 0; i < items.length; i++) {
      const newItem = { ...items[i] };
      for (let j = 0; j < defaultEntries.length; j++) {
        const prop = defaultEntries[j][0];
        const value = defaultEntries[j][1];
        if (newItem[prop] === value) {
          delete newItem[prop];
        }
      }
      itemsNew.push(newItem);
    }
  
    return { items: itemsNew, defaultPrefs };
  };
  
  const resp = normalize([
    { shade: "light", material: "plastic" },
    { shade: "light", material: "emax" },
    { shade: "medium", material: "plastic" },
  ]);
  