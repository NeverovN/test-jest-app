export interface Normalizable {
  id: number | string;
}

export type Normalized<T extends Normalizable> = Record<T['id'], T>;

export function normalizeData<T extends Normalizable>(
  data: Array<T>,
): Normalized<T> {
  return data.reduce((acc, curr) => {
    return {...acc, [curr.id]: curr};
  }, {} as Normalized<T>);
}
