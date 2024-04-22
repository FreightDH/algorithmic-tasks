class Table {
  private headers: string[];
  private rows: string[][];

  constructor(headers: string[]) {
    this.headers = headers;
    this.rows = [];
  }

  addRow(row: string[]) {
    if (row.length !== this.headers.length) {
      throw new Error('The number of columns in the row must match the number of columns in the header!');
    }

    this.rows.push(row);
  }

  private getColumnWidths(): number[] {
    const columnWidths = this.headers.map((header) => header.length);

    this.rows.forEach((row) => {
      row.forEach((column, index) => {
        if (column.length > columnWidths[index]) {
          columnWidths[index] = column.length;
        }
      });
    });

    return columnWidths;
  }

  print(): void {
    const columnWidths = this.getColumnWidths();
    const totalRowWidth: number = columnWidths.reduce(
      (totalWidth, columnWidth) => totalWidth + columnWidth,
      0
    );
    const SPACE_BETWEEN = 5;
    const divider = ''.padEnd(totalRowWidth + SPACE_BETWEEN * (columnWidths.length - 1), '-');

    // Print header
    let headerRow = '';

    this.headers.forEach((header, index) => {
      headerRow += header.padEnd(columnWidths[index] + SPACE_BETWEEN);
    });

    console.log(headerRow);
    console.log(divider);

    // Print rows
    this.rows.forEach((row) => {
      let rowString = '';

      row.forEach((item, index) => {
        rowString += item.padEnd(columnWidths[index] + SPACE_BETWEEN);
      });

      console.log(rowString);
    });
  }
}

export default Table;
