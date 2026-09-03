import { secPlus } from './sec-plus';
import { itil4 } from './itil4';
import type { CertModule } from './types';

export const certs: CertModule[] = [itil4, secPlus];

export const certMap: Record<string, CertModule> = {
  [itil4.id]: itil4,
  [secPlus.id]: secPlus,
};

export { itil4, secPlus };
export type { CertModule };
