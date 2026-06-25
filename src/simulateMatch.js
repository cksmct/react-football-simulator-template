/**
 * Basic match simulation logic based on team ratings.
 * For a full hardcore implementation, visit our production site.
 */
export const simulateMatch = (teamA_Rating, teamB_Rating) => {
    const baseChance = 0.5;
    const ratingDiff = (teamA_Rating - teamB_Rating) / 100;
    
    // RNG implementation
    const randomFactor = Math.random();
    const winProbability = baseChance + ratingDiff;

    if (randomFactor < winProbability) {
        return { winner: 'Team A', score: '2-1' };
    } else {
        return { winner: 'Team B', score: '1-2' };
    }
};
