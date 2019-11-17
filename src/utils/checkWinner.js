export default (field, size) => {
    const rows = getRows(field, size);
    const columns = getColumns(field, size);
    const diagonals = getDiagonals(field, size);
    const total = rows.concat(columns).concat(diagonals);
    return checkWinnerInDirection(total);
}

const checkWinnerInDirection = field => {
    return field.reduce((winner, row) => {
        const firstFigure = row[0];
        const hasWinner = row.every(figure => figure == firstFigure);
        return hasWinner ? firstFigure : winner;
    }, null);
}

const getRows = (field, size) => {
    let index = 0;
    return field.reduce((rows, square, i) => {
        rows[index] = (rows[index] || []).concat(square);
        if ((i + 1) % size == 0) {
            index++;
        }
        return rows;
    }, []);
};

const getColumns = (field, size) => {
    const sequence = Array.from(Array(size).keys());
    return sequence.reduce((columns, index) => {
        let currentIndex = index;
        let element;
        while ((element = field[currentIndex]) != undefined) {
            columns[index] = (columns[index] || []).concat(element);
            currentIndex += size;
        }
        return columns;
    }, []);
};

const getDiagonals = (field, size) => {
    const rows = getRows(field, size);
    const leftDiagonal = getLeftDiagonal(rows, size);
    const rightDiagonal = getRightDiagonal(rows, size);
    return [leftDiagonal, rightDiagonal];
}

const getLeftDiagonal = (rows, size) => {
    const sequence = Array.from(Array(size).keys());
    return sequence.reduce((diagonal, index) => diagonal.concat(rows[index][index]), []);
}

const getRightDiagonal = (rows, size) => {
    return getLeftDiagonal(rows.map(row => row.reverse()), size);
}