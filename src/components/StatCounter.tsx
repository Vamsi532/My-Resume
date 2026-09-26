import { useCountUp } from '../hooks/useCountUp';
import type { Stat } from '../types';

export function StatCounter({ value, suffix = '', label }: Stat) {
  const current = useCountUp(value);

  return (
    <div>
      <div className="stat-value">
        {current}
        {suffix}
      </div>
      <div className="stat-label">{label}</div>
    </div>
  );
}
