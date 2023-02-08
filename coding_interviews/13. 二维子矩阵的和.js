/**
 * [TOPIC]:
 * 给定一个二维矩阵 matrix，以下类型的多个请求：
 * 计算其子矩形范围内元素的总和，该子矩阵的左上角为 (row1, col1) ，右下角为 (row2, col2) 。
 * 
 * 实现 NumMatrix 类：
 * NumMatrix(int[][] matrix) 给定整数矩阵 matrix 进行初始化
 * int sumRegion(int row1, int col1, int row2, int col2) 返回左上角 (row1, col1) 、右下角 (row2, col2) 的子矩阵的元素总和。
 */

/**
 * @param {number[][]} matrix
 */
 var NumMatrix = function(matrix) {
    
};

/** 
 * @param {number} row1 
 * @param {number} col1 
 * @param {number} row2 
 * @param {number} col2
 * @return {number}
 */
NumMatrix.prototype.sumRegion = function(row1, col1, row2, col2) {
    // 注意一下 row 行，col 列，转换成坐标时要 row -> y , col -> x
    // 整个取值区间应该属于 col1 <= x <= col2, row1 <= y <= row2
    var result = 0;
    for(var x = col1; x <= col2; x ++) {
        for(var y = row1; y <= row2; y ++) {
            result += this.arr[x, y];
        }
    }
    return result;
};

// 输入: 
// ["NumMatrix","sumRegion","sumRegion","sumRegion"]
// [[[[3,0,1,4,2],[5,6,3,2,1],[1,2,0,1,5],[4,1,0,1,7],[1,0,3,0,5]]],[2,1,4,3],[1,1,2,2],[1,2,2,4]]
// 输出: 
// [null, 8, 11, 12]

// 解释:
// NumMatrix numMatrix = new NumMatrix([[3,0,1,4,2],[5,6,3,2,1],[1,2,0,1,5],[4,1,0,1,7],[1,0,3,0,5]]]);
// numMatrix.sumRegion(2, 1, 4, 3); // return 8 (元素（2，3）左上角 和 （4，5）右下角 之间围起来的元素之和)
// numMatrix.sumRegion(1, 1, 2, 2); // return 11 (元素（2，2）左上角 和 （3，3）右下角 之间围起来的元素之和)
// numMatrix.sumRegion(1, 2, 2, 4); // return 12 (元素（3，2）左上角 和 （5，3）右下角 之间围起来的元素之和)


// m == matrix.length
// n == matrix[i].length
// 1 <= m, n <= 200
// -105 <= matrix[i][j] <= 105
// 0 <= row1 <= row2 < m
// 0 <= col1 <= col2 < n
// 最多调用 104 次 sumRegion 方法
