export const getPercentOfTotalNumber = (value: number, percent: number) =>
  value * (percent / 100);

export const delay = (ms = 1500) => new Promise((res) => setTimeout(res, ms));

export const uid = (n = 9) => Math.random().toString().substr(2, n);

export function convertRubToUsd(amount: number) {
  const RUBToUSDRate = 0.7411;
  return amount / RUBToUSDRate;
}

export function transformArrayOfObjectsToSingleObject<T extends {id: string}>(
  arr: Array<T>,
) {
  return arr.reduce((map: Record<string, T>, obj) => {
    map[obj.id] = obj;
    return map;
  }, {});
}

export const getEnumKeys = (E: any) =>
  Object.keys(E).filter((k) => typeof E[k as any] === 'number');
export const getEnumValues = (E: any) => {
  const keys = getEnumKeys(E);
  keys.map((k) => E[k as any]);
};
