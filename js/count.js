import { CountUp } from './countUp.min.js';
const countUpStranke = new CountUp('stranke', 54, { enableScrollSpy: true, scrollSpyOnce: true });
const countUpYears = new CountUp('leta', 7, { enableScrollSpy: true, scrollSpyOnce: true });
countUpStranke.start();
countUpYears.start();