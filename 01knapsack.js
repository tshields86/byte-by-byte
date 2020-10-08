/* https://www.byte-by-byte.com/01knapsack */

/* 
Given a list of items with values and weights, as well as a max weight, find the maximum value you can generate from items where the sum of the weights is less than the max.

items​ = {(​weight:1​, ​value:6​), (​weight:2​, ​value:10​), (​weight:3​, ​value:12​)}
maxWeight = ​5
knapsack(​items​, maxWeight) = ​22
*/

const topDownKnapsack = (items, maxWeight, i = 0, cache = new Map()) => {
  if (i === items.length) return 0;

  if (!cache.has(i)) cache.set(i, new Map());

  if (cache.get(i).has(maxWeight)) return cache.get(i).get(maxWeight);



  const { weight, value } = items[i];

  if (maxWeight - weight < 0) return topDownKnapsack(items, maxWeight, i + 1, cache);

  const toReturn = Math.max(
    value + topDownKnapsack(items, maxWeight - weight, i + 1, cache),
    topDownKnapsack(items, maxWeight, i + 1, cache)
  );

  cache.get(i).set(maxWeight, toReturn);
  return toReturn;
};

console.log(topDownKnapsack(
  [{ weight: 1, value: 6 }, { weight: 2, value: 10 }, { weight: 3, value: 12 }],
  5
)); // 22

const knapsack = (items, maxWeight) => {
  const length = items.length + 1;
  const cache = Array.from({ length }, () => new Array(maxWeight + 1).fill(0));

  for (let i = 1; i < length; i++) {
    const { weight: itemWeight, value: itemValue } = items[i - 1];

    for (let currentWeight = 0; currentWeight <= maxWeight; currentWeight++) {
      const prevItemMaxValueAtCurrentWeight = cache[i - 1][currentWeight];

      if (itemWeight > currentWeight) cache[i][currentWeight] = prevItemMaxValueAtCurrentWeight;
      else {
        const currentItemMaxValueAtCurrentWeight = itemValue + cache[i - 1][currentWeight - itemWeight];

        cache[i][currentWeight] = Math.max(
          prevItemMaxValueAtCurrentWeight,
          currentItemMaxValueAtCurrentWeight
        );
      }
    }
  }

  return cache[length - 1][maxWeight];
};

console.log(knapsack(
  [{ weight: 1, value: 6 }, { weight: 2, value: 10 }, { weight: 3, value: 12 }],
  5
)); // 22
