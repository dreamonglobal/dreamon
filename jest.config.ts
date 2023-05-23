import { getJestProjects } from '@nrwl/jest';

export default {
  projects: getJestProjects(),
  transform: {     '^.+\\.ts?$': 'ts-jest',     "^.+\\.(js|jsx)$": "babel-jest"   },  
};
