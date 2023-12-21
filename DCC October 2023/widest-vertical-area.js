const maxWidthOfVerticalArea = points => {
    points.sort(([a],[b]) => a - b);
    
    let maxArea = 0;
    for (let i = 1; i < points.length; i++) {
        maxArea = Math.max(points[i][0] - points[i - 1][0], maxArea);
    }
    
    return maxArea;
};