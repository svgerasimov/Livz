import {Cities} from './cities';
import {mskDistricts, MskDistricts} from './cities/moscow/districts';
import {spbDistricts, SpbDistricts} from './cities/saint-petersburg/districts';

export const districts = {
  [Cities.MSK]: mskDistricts,
  [Cities.SPB]: spbDistricts,
};

export const allDistricts = [...mskDistricts, ...spbDistricts];
