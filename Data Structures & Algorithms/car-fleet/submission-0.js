class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target, position, speed) {
        const n = position.length;
        if (n <= 1) return n;

        // 1. Sort indices by position descending (closest to target first)
        const indices = Array.from(position.keys());
        indices.sort((a, b) => position[b] - position[a]);

        const stack = [];

        for (let i = 0; i < n; i++) {
            const idx = indices[i];
            const time = (target - position[idx]) / speed[idx];

            // If the stack is empty or this car takes longer than the fleet ahead of it,
            // it cannot catch up and forms a new fleet.
            if (stack.length === 0 || time > stack[stack.length - 1]) {
                stack.push(time);
            }
            // If time <= stack[stack.length - 1], it catches up to the fleet ahead
            // and moves at that fleet's slower speed (we don't push anything).
        }

        return stack.length;
    }
}
