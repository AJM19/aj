type Props = {
  total_pp: number;
  total_fp: number;
  waiver_budget_used: number;
  wins: number;
};

const TOTAL_BUDGET = 200;

const TOTAL_GAMES = 14;

export const getManagerRating = ({
  total_fp,
  total_pp,
  waiver_budget_used,
  wins,
}: Props) => {
  const pointsPercentage = total_fp / total_pp;
  const pointsStrength = total_fp / 125;
  const waiverBudgetPercentage = waiver_budget_used / TOTAL_BUDGET;
  const winPercentage = wins / TOTAL_GAMES;

  const manager_score =
    pointsPercentage * 0.25 + pointsStrength * .25 + waiverBudgetPercentage * 0.1 + winPercentage * 0.4;

  if (manager_score > 0) {
    return (manager_score * 100).toFixed(2);
  } else {
    return 'N/A';
  }
};
