class Solution {
    /**
     * @param {number[]} hand
     * @param {number} groupSize
     * @return {boolean}
     */
    isNStraightHand(hand, groupSize) {
        // 1. Quick divisibility check
        if (hand.length % groupSize !== 0) {
            return false;
        }

        // 2. Count frequencies of each card
        const count = new Map();
        for (const card of hand) {
            count.set(card, (count.get(card) || 0) + 1);
        }

        // 3. Sort unique card values in ascending order
        const sortedCards = Array.from(count.keys()).sort((a, b) => a - b);

        // 4. Greedily build groups starting from the smallest available card
        for (const startCard of sortedCards) {
            const needed = count.get(startCard);

            // If all copies of startCard were already used in earlier straights, skip
            if (needed === 0) continue;

            // Consume `needed` copies of each consecutive card in [startCard ... startCard + groupSize - 1]
            for (let i = 0; i < groupSize; i++) {
                const currCard = startCard + i;
                const available = count.get(currCard) || 0;

                if (available < needed) {
                    return false;
                }

                count.set(currCard, available - needed);
            }
        }

        return true;
    }
}
