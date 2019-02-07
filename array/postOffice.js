// postOffice.js

module.exports = {
    /*
        Post Office Location Problem:
        We are given n points p1, p2, ... pn with associated weights
        w1, w2, ... wn. We wish to find a point p (not necessarily
        one of the input points) that minimizes the sum given by
        the formula E(i=1 to n)(w_i * d(p, p_i)), where E represents
        summation, w_i represents weight of each point p_i and
        d(a, b) is the distance between points a and b.
    */

    postOffice: function (x, y, w) {
        // Find sum of weights and weighted sum of x and y points
        let x_sum = 0;
        let y_sum = 0;
        let w_sum = 0;
        for (let i = 0; i < x.length; i += 1) {
            x_sum += w[i] * x[i];
            y_sum += w[i] * y[i];
            w_sum += w[i];
        }

        // Find midpoint or centroid p of polygon formed by given points,
        // which should be at the shortest distance to each point.
        // Note that the distance function is not used here.
        let p_x = x_sum / w_sum;
        let p_y = y_sum / w_sum;

        return [p_x, p_y];
    }
};
