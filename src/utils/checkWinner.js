export default (field, size) => {
    const rows = getRows(field, size);
    const columns = getColumns(field, size);
    const diagonals = getDiagonals(field, size);
    const total = rows.concat(columns).concat(diagonals);
    return checkWinnerInDirection(total);
}

export const checkWinnerInDirection = field => {
    return field.reduce((winner, row) => {
        const firstFigure = row[0];
        const hasWinner = row.every(figure => figure == firstFigure);
        return hasWinner && firstFigure ? firstFigure : winner;
    }, null);
}

export const getRows = (field, size) => {
    let index = 0;
    return field.reduce((rows, square, i) => {
        rows[index] = (rows[index] || []).concat(square);
        if ((i + 1) % size == 0) {
            index++;
        }
        return rows;
    }, []);
};

export const getColumns = (field, size) => {
    const rows = getRows(field, size);
    const rowsSequence = Array.from(Array(rows.length).keys());
    return rowsSequence.reduce((columns, index) => {
        const columnsSequence = Array.from(Array(rows.length).keys());
        columnsSequence.forEach(columnIndex => {
            columns[index] = (columns[index] || []).concat(rows[columnIndex][index]);
        });
        return columns;
    }, []);
};

export const getDiagonals = (field, size) => {
    const rows = getRows(field, size);
    const leftDiagonal = getLeftDiagonal(rows, size);
    const rightDiagonal = getRightDiagonal(rows, size);
    return [leftDiagonal, rightDiagonal];
}

export const getLeftDiagonal = (rows, size) => {
    const sequence = Array.from(Array(+size).keys());
    return sequence.reduce((diagonal, index) => diagonal.concat(rows[index][index]), []);
}

export const getRightDiagonal = (rows, size) => {
    return getLeftDiagonal(rows.map(row => row.reverse()), size);
}