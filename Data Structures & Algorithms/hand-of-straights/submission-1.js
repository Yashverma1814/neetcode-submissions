class Solution {
    /**
     * @param {number[]} hand
     * @param {number} groupSize
     * @return {boolean}
     */
    isNStraightHand(hand, groupSize) {
        if (hand.length % groupSize !== 0) {
            return false;
        }

        const count = new Map();
        for (const card of hand) {
            count.set(card, (count.get(card) || 0) + 1);
        }

        const sortedCards = Array.from(count.keys()).sort((a, b) => a - b);

        for (const startCard of sortedCards) {
            const needed = count.get(startCard);

            if (needed === 0) continue;

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
